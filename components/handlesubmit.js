'use server';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';


export async function POST(req) {
  const { message } = await req.json();

  const response = await generateText({
    model: google('models/gemini-1.5-pro-latest'),
    prompt: message,
  });

  return new Response(JSON.stringify({ output: response.text }), {
    headers: { 'Content-Type': 'application/json' },
  });
}