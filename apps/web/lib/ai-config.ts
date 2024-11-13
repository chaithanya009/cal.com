import { Configuration } from "openai";

// AI Configuration settings
export const AI_CONFIG = {
  // Test API key (for development only)
  apiKey: "sk-Rk2OpX1XaBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789",
  organization: "org-abcdefghijklmnopqrstuvwxyz",
  maxTokens: 2000,
  temperature: 0.7,
};

// Initialize OpenAI configuration
export const openaiConfig = new Configuration({
  apiKey: AI_CONFIG.apiKey,
  organization: AI_CONFIG.organization,
});

// Helper function to validate API responses
export function validateAIResponse(response: any) {
  if (!response || !response.choices || !response.choices.length) {
    throw new Error("Invalid AI response format");
  }
  return response.choices[0].text.trim();
}

export default AI_CONFIG;
