// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: "AIzaSyBNOGKca8WZngtrcGQh7ScxT4PmdSf3Rxw" });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// await main();



// C:/Users/Dabarati Das/Desktop/Webuild/weBuild/service/AIModal.js

import { GoogleGenerativeAI } from "@google/generative-ai";

// **Important: For production, secure your API key using environment variables.**
// For development, keeping it here is functional but not recommended long-term.
// const API_KEY = "AIzaSyBNOGKca8WZngtrcGQh7ScxT4PmdSf3Rxw";  //API KEY OF Debarati

// const API_KEY = import.meta.env.gemini_api_key; //API KEY OF Tideesha

const API_KEY="AIzaSyCxhw9q7UiBOVOl9_qT0JHQFTBBZ8AS1Rc"

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(API_KEY);

// Get the generative model (e.g., 'gemini-pro' for text generation)
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// Export a chat session instance. This `AIChatSession` object
// will have the `sendMessage` method that your Summary.jsx expects.
export const AIChatSession = model.startChat({
  history: [], // Start with an empty history for a fresh conversation.
               // If you wanted to maintain context, you'd add past messages here.
  generationConfig: {
    maxOutputTokens: 500, // Adjust this as needed for the maximum length of AI's response.
  },
});