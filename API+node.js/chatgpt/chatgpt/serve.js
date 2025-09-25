import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Inicializa o cliente da Google AI Studio
const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

console.log("Chave da API:", process.env.GOOGLE_API_KEY);

// Rota para enviar mensagens e receber resposta do modelo
app.post("/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Envie um array de mensagens" });
  }

  try {
    // Concatena mensagens do usuário para enviar como prompt
    const prompt = messages
      .map(m => `${m.role === "user" ? "Usuário" : "AI"}: ${m.content}`)
      .join("\n");

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({ reply: response.text });
  } catch (err) {
    console.error("Erro na API Google AI:", err);
    res.status(500).json({ error: "Erro ao conectar com Google AI" });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

