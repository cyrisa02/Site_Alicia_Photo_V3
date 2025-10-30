
import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development. In the target environment, API_KEY is expected to be set.
  console.warn("API_KEY is not set. Using a placeholder. The app will not connect to Gemini.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY || "fallback_api_key_for_dev" });

export function createChatSession(): Chat {
  const model = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: "You are AlicIA, a friendly and professional AI assistant for AlicIA-GPT, an AI consulting agency based in Soissons, France. Your goal is to answer user questions about the agency's services, process, and expertise. Be helpful, concise, and encourage users to fill out the contact form for a personalized quote. The services include: Audit & Conseil, Formations, and solutions for various sectors like HR, Admin, Marketing, Sales, Legal, and for specific clients like startups, students, and seniors. The agency also builds websites and does local SEO.",
    },
  });
  return model;
}

export async function sendMessageToChat(chat: Chat, message: string): Promise<string> {
    if (!API_KEY) {
        return "Bonjour ! L'assistant IA est actuellement en mode démonstration car la clé API n'est pas configurée. Pour une réponse complète, veuillez contacter l'agence via le formulaire.";
    }
  try {
    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error in sendMessageToChat:", error);
    return "Je suis désolé, une erreur technique m'empêche de répondre pour le moment. Veuillez réessayer plus tard.";
  }
}
