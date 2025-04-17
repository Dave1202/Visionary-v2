import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Tu API key de Cohere
const cohereApiKey = process.env.COHERE_API_KEY;

const cohereUrl = 'https://api.cohere.ai/generate';

// Endpoint para el chatbot
app.post('/chat', async (req, res) => {
  const { userMessage } = req.body;

  try {
    // Solicitar a Cohere para obtener la respuesta
    const response = await axios.post(
      cohereUrl,
      {
        prompt: userMessage,
        max_tokens: 100,
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${cohereApiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Mostrar la respuesta completa para depuración
    console.log('Respuesta completa de Cohere:', response.data);

    // Responder con el texto generado por Cohere
    const assistantMessage = response.data.text || "No se recibió respuesta válida";
    res.json({ response: assistantMessage });
  } catch (error) {
    console.error('Error al conectar con Cohere:', error);
    res.status(500).json({ error: 'Error al obtener respuesta del chatbot' });
  }
});


app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
