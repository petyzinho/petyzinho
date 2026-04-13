"use client";

import { useState, type KeyboardEvent } from "react";
import { Send } from "lucide-react";

type Props = {
  onSend: (text: string) => void;
  disabled?: boolean;
};

export function ChatBotInput({ onSend, disabled }: Props) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="border-t border-isa-gray-200 px-3 py-3">
      <div className="flex items-center gap-2 bg-isa-gray-50 border border-isa-gray-200 rounded-pill px-4 py-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          disabled={disabled}
          placeholder="Digite sua dúvida..."
          className="flex-1 bg-transparent text-sm text-isa-gray-800 placeholder-isa-gray-400 outline-none"
        />
        <button
          onClick={handleSend}
          disabled={!value.trim() || disabled}
          className="w-7 h-7 bg-isa-blue-500 hover:bg-isa-blue-600 disabled:opacity-40 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
          aria-label="Enviar"
        >
          <Send className="w-3.5 h-3.5 text-white" />
        </button>
      </div>
    </div>
  );
}
