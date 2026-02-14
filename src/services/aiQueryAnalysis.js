import { OpenAI } from 'openai-agent-sdk';
import { PrismaClient } from '@prisma/client';
import Redis from 'ioredis';

const prisma = new PrismaClient();
const redis = new Redis();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const analyzeCustomerQuery = async (query) => {
  if (!query || typeof query !== 'string') {
    throw new Error('Invalid query provided');
  }

  try {
    const cachedResult = await redis.get(query);
    if (cachedResult) {
      return JSON.parse(cachedResult);
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: query }],
    });

    const analysis = response.choices[0].message.content;

    await redis.set(query, JSON.stringify(analysis), 'EX', 3600); // Cache for 1 hour

    await prisma.queryAnalysis.create({
      data: {
        query,
        analysis,
      },
    });

    return analysis;
  } catch (error) {
    console.error('Error analyzing customer query:', error);
    throw new Error('Failed to analyze query');
  }
};