import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

export async function POST(req) {
  const { prompt } = await req.json();

  const result = await streamText({
    model: google('models/gemini-1.5-pro-latest'),
    system: 'You are a helpful assistant.',
    prompt,
  });

  return result.toDataStreamResponse();
}