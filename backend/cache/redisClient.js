const redis = require('redis');
const { promisify } = require('util');

const redisClient = redis.createClient({
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD || undefined,
});

redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});

const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);

const cacheMiddleware = (req, res, next) => {
    const key = req.originalUrl || req.url;
    getAsync(key)
        .then((data) => {
            if (data) {
                return res.json(JSON.parse(data));
            }
            next();
        })
        .catch((err) => {
            console.error('Cache retrieval error:', err);
            next();
        });
};

const setCache = (key, value, duration) => {
    setAsync(key, JSON.stringify(value), 'EX', duration)
        .catch((err) => {
            console.error('Cache setting error:', err);
        });
};

module.exports = {
    redisClient,
    cacheMiddleware,
    setCache,
};