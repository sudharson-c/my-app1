
const API_URL = "https://llm.gururaja.in"
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  async function llmPlanWithAi(user_data) {
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

  async function llmGuideAi(location) {
    const prompt = `Write a comprehensive guide for tourists visiting the place mentioned below:\n\nLocation: ${location}\n\nGuide {\n  title: "Comprehensive Guide to ${location}";\n  introduction: "Introduction to ${location}";\n  architecture: "Information about architecture in ${location}";\n  history: "Historical overview of ${location}";\n  festivals: ["Festival 1", "Festival 2", "Festival 3"];\n  conclusion: "Conclusion about ${location}";\n  nearbyAttractions: "Nearby attractions around ${location}";\n  practicalInformation: {\n    dressCode: "Dress code for visiting ${location}";\n    entryFee: "Entry fee details for ${location}";\n    gettingThere: "Directions to ${location}";\n    location: "Location details of ${location}";\n    photography: "Photography rules at ${location}";\n    timings: "Visiting timings for ${location}";\n    tips: ["Tip 1", "Tip 2", "Tip 3"];\n  };\n}`;
  
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      });
  
      const result = await chatSession.sendMessage("");
      const responseText = result.response.text();
      console.log(responseText)
  
      return responseText;
    } catch (error) {
      console.error("Error fetching guide:", error);
      throw new Error("Failed to fetch guide from AI");
    }
  }  
  
export  {llmPlanWithAi,llmGuideAi};
const axios = require('axios');

const data = {
  model: "guru-llama",
  messages: [
    { role: "system", content: "You are a travel assistant for the Madurai Payani app." },
    { role: "user", content: "meenakshi amman temple" }
  ]
};


const request = async ()=>{
    await axios.post('https://guru-25-llm.hf.space/chat/completions', data, { 
    headers: { Authorization: `Bearer ${process.env.LLM_KEY}` }
}).then(response => {
  console.log(response.data.choices[0].message.content);
}).catch(error => {
  console.error('Error:', error);
});
}