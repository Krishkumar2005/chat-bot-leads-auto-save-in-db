import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv"
dotenv.config()
console.log("gemini api key " ,process.env.GEMINI_API_KEY);
export const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});