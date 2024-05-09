"use client";
import { useState } from "react";

interface GenerateResponse {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
  context?: number[];
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  prompt_eval_duration?: number;
  eval_count?: number;
  eval_duration?: number;
}

interface ChatResponse {
  model: string;
  created_at: string;
  message: {
    role: "system" | "user" | "assistant";
    content: string;
    images?: string[];
  };
  done: boolean;
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  prompt_eval_duration?: number;
  eval_count?: number;
  eval_duration?: number;
}

interface EmbeddingResponse {
  embedding: number[];
}

const API_URL = "http://localhost:11434/api";

const IndexPage: React.FC = () => {
  const [model, setModel] = useState("llama3");
  const [prompt, setPrompt] = useState("Why is the sky blue?");
  const [messages, setMessages] = useState<
    {
      role: "system" | "user" | "assistant";
      content: string;
      images?: string[];
    }[]
  >([
    { role: "user", content: "Hello", images: [] }, // Initialize messages with a default message
  ]);
  const [embeddings, setEmbeddings] = useState<number[]>([]);

  const generateCompletion = async () => {
    try {
      const response = await fetch(`${API_URL}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ model, prompt }),
      });
      const data: GenerateResponse = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const generateChat = async () => {
    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ model, messages }),
      });
      const data: ChatResponse = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: data.message?.content || "Default message", images: [] },
      ]);      
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const generateEmbeddings = async () => {
    try {
      const response = await fetch(`${API_URL}/embeddings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ model, prompt }),
      });
      const data: EmbeddingResponse = await response.json();
      setEmbeddings(data.embedding);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Ollama API Example</h1>
      <div>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="prompt">Prompt:</label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <button onClick={generateCompletion}>Generate Completion</button>
      <button onClick={generateChat}>Generate Chat</button>
      <button onClick={generateEmbeddings}>Generate Embeddings</button>
      <div>
        <h2>Chat</h2>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.role}:</strong> {message.content}
            {message.images && (
              <div>
                {message.images.map((image, imageIndex) => (
                  <img key={imageIndex} src={image} alt={`Image ${imageIndex}`} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <h2>Embeddings</h2>
        {embeddings.length > 0 && <pre>{JSON.stringify(embeddings, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default IndexPage;
