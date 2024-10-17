const { GoogleGenerativeAI } = require('@google/generative-ai');
// Replace with your Gemini API key
<<<<<<< Updated upstream
const apiKey = "AIzaSyDP0cvjPxq_9gMHezmGG15dOm55u7-tnhM";
=======
const apiKey = process.env.genAI_API;
>>>>>>> Stashed changes
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'application/json',
};

async function run(userMessage) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: 'user',
        parts: [
          {
            text: 'You are a chat assistant for a Madurai tourism guide app, only answer queries related to Madurai. Tell them you cannot help if you find unrelated\n',
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(userMessage);
  const responseText = result.response.text();

  try {
    const parsedResponse = JSON.parse(responseText);
    return parsedResponse.response;  // Extract only the response text
  } catch (error) {
    console.error('Error parsing JSON:', error);
    throw new Error('Invalid JSON response from AI');
  }
}

export default run;
