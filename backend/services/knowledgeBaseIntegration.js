const { OpenAIApi, Configuration } = require("openai");
const { PrismaClient } = require("@prisma/client");
const redis = require("redis");
const util = require("util");

const prisma = new PrismaClient();
const redisClient = redis.createClient();
const getAsync = util.promisify(redisClient.get).bind(redisClient);

const openaiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(openaiConfig);

async function getKnowledgeBaseSuggestions(query) {
  try {
    const cachedResponse = await getAsync(query);
    if (cachedResponse) {
      return JSON.parse(cachedResponse);
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: query }],
    });

    const suggestions = response.data.choices[0].message.content;

    await redisClient.setex(query, 3600, JSON.stringify(suggestions)); // Cache for 1 hour

    return suggestions;
  } catch (error) {
    console.error("Error fetching knowledge base suggestions:", error);
    throw new Error("Unable to fetch suggestions at this time.");
  }
}

async function saveUserQueryToDatabase(query) {
  try {
    await prisma.userQuery.create({
      data: {
        query,
        createdAt: new Date(),
      },
    });
  } catch (error) {
    console.error("Error saving user query to database:", error);
  }
}

module.exports = {
  getKnowledgeBaseSuggestions,
  saveUserQueryToDatabase,
};