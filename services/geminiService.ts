import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    // Assuming environment variable is injected correctly
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const generateConsultation = async (userQuery: string, context: string): Promise<string> => {
  const ai = getAiClient();
  
  try {
    const prompt = `
      Actúa como un consultor senior de la empresa "Pragma AI".
      Nuestra filosofía es: Pragmatismo, No vender humo, Soluciones reales, Ética y Diseño Humano.
      
      El usuario pregunta: "${userQuery}"
      Contexto seleccionado: ${context}

      Responde brevemente (máximo 100 palabras) con 3 puntos concretos de cómo la IA puede ayudar en su caso específico.
      Usa un tono profesional pero cercano. No uses tecnicismos innecesarios.
      Si la pregunta no tiene sentido o es maliciosa, responde con cortesía redirigiendo a nuestros servicios.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Lo siento, no pude generar una respuesta en este momento. Por favor contáctanos directamente.";
  } catch (error) {
    console.error("Error generating consultation:", error);
    return "Hubo un error conectando con el consultor inteligente. Por favor intenta más tarde.";
  }
};