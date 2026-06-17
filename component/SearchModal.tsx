// components/SearchModal.tsx
"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

type ChatItem = { type: "user" | "ai"; text: string };

type Props = {
  onClose: () => void;
};

export default function SearchModal({ onClose }: Props) {
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatItem[]>([]);
  const [listening, setListening] = useState(false);
  const [loading, setLoading] = useState(false);

  const startVoice = () => {
    if (!("webkitSpeechRecognition" in window)) return;

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    setListening(true);

    recognition.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;
      setQuery(transcript);
      sendQuery(transcript);
      setListening(false);
    };

    recognition.onerror = () => setListening(false);
  };

  const sendQuery = (text: string) => {
    if (!text) return;
    setChatHistory((prev) => [...prev, { type: "user", text }]);
    setQuery("");
    setLoading(true);

    // simulate AI response
    setTimeout(() => {
      setChatHistory((prev) => [...prev, { type: "ai", text: `Here are results for "${text}"` }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm">
      <div className="absolute bottom-0 left-0 w-full max-h-[80vh] bg-slate-950 rounded-t-3xl flex flex-col p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Ask Sayara AI</h3>
          <button onClick={onClose} className="text-white text-2xl">✕</button>
        </div>

        {/* Input */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl px-4 py-3 mb-4">
          <Search className="w-6 h-6 text-white" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask me anything about cars..."
            className="bg-transparent outline-none text-white flex-1"
          />
          <button
            onClick={startVoice}
            className={`p-3 rounded-full ${listening ? "bg-red-500 animate-pulse" : "bg-white/30"}`}
          >
            🎤
          </button>
          <button
            onClick={() => sendQuery(query)}
            className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white"
          >
            Send
          </button>
        </div>

        {/* Chat bubbles */}
        <div className="flex-1 overflow-y-auto space-y-3">
          {chatHistory.map((item, i) => (
            <div
              key={i}
              className={`px-4 py-3 rounded-xl max-w-[80%] ${
                item.type === "user" ? "bg-blue-600 text-white self-end" : "bg-slate-800 text-white self-start"
              }`}
            >
              {item.text}
            </div>
          ))}
          {loading && (
            <div className="bg-slate-800 text-white px-4 py-3 rounded-xl max-w-[60%] animate-pulse">
              ...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
