import { google } from '@ai-sdk/google';

export const config = {
  runtime: "edge",
};

const handler = async (req) => {
    try {
        const {message} = await req.json()
    } catch (error) {
        console.log("error occured", error)
    }
};

export { handler };
