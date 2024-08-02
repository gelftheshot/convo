'use server';
import { streamText } from 'ai';
import { google } from '@ai-sdk/google';
import { createStreamableValue } from 'ai/rsc';

export async function generate(input) {
  const stream = createStreamableValue('');

  (async () => {
    const { textStream } = await streamText({
      model: google('models/gemini-1.5-pro-latest'),
      prompt: input,
    });

    for await (const delta of textStream) {
      stream.update(delta);
    }

    stream.done();
  })();

  return { output: stream.value };
}