/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
*/
const apiKey = 'AIzaSyDP0cvjPxq_9gMHezmGG15dOm55u7-tnhM';
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
  async function run(user_data) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            { text: `Given a user's travel preferences in JSON format (user_data) and a specified trip plan format (trip_plan_format), create a personalized trip plan (trip_plan) for the user's travel duration following the specified format:\n\nuser_data:${JSON.stringify(user_data, null, 2)}\ntrip_plan_format:{\n  "title": "string", // Overall trip title (e.g., Solo Exploration in Madurai)\n  "summary": "string", // Short trip summary (e.g., Discover the vibrant culture and history of Madurai in a day)\n  "days": [\n    {\n      "day_number": "integer", // Day number within the trip (e.g., 1)\n      "morning": {\n        "activity_1": "string", // Suggested morning activity (e.g., Visit Meenakshi Temple)\n        "activity_2": "string" // Optional additional morning activity\n      },\n      "afternoon": {\n        "activity_1": "string", // Suggested afternoon activity (e.g., Lunch at local restaurant)\n        "activity_2": "string" // Optional additional afternoon activity\n      },\n      "evening": {\n        "activity_1": "string", // Suggested evening activity\n        "activity_2": "string" // Optional additional evening activity\n      },\n      "suggestions": "string" // Optional section for additional personalized suggestions\n    }\n  ],\n  "notes": "string" // Optional section for general travel tips or notes\n} , return only the trip_plan object,` }
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage('');
    const responseText = result.response.text();

  try {
    console.log(responseText)
    return responseText;
  } catch (error) {
    console.error('Error parsing JSON:', error);
    throw new Error('Invalid JSON response from AI');
  }
  }
  
  export default run;