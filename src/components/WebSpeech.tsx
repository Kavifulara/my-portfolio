// components/WebSpeech.tsx
"use client";

import React, { useState } from "react";

interface WebSpeechProps {
  onSearch: (query: string) => void;
}

const WebSpeech: React.FC<WebSpeechProps> = ({ onSearch }) => {
  const [listening, setListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support voice search.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    setListening(true);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onSearch(transcript);
      setListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error("Voice recognition error:", event.error);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

  return (
    <button
      onClick={startListening}
      className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      🎙️ {listening ? "Listening..." : ""}
    </button>
  );
};

export default WebSpeech;

