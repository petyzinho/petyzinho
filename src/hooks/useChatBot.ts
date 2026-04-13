"use client";

import { useState, useCallback } from "react";
import type { Message } from "@/types/chatbot";
import type { FAQEntry } from "@/types/chatbot";
import { findBestResponse, getFollowups } from "@/lib/chatbot-engine";
import { FAQ_ENTRIES, INITIAL_CHIPS } from "@/lib/faq-data";

function makeId() {
  return Math.random().toString(36).slice(2);
}

function getInitialMessage(): Message {
  const chips = INITIAL_CHIPS.map((id) =>
    FAQ_ENTRIES.find((e) => e.id === id)
  ).filter((e): e is FAQEntry => !!e);

  return {
    id: makeId(),
    role: "bot",
    content:
      "Olá! Sou o assistente da ISA Saúde. Como posso te ajudar hoje? Clique em uma das opções abaixo ou escreva sua dúvida:",
    timestamp: new Date(),
    followupChips: chips,
  };
}

export function useChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([getInitialMessage()]);
  const [isTyping, setIsTyping] = useState(false);

  const addBotResponse = useCallback((faq: FAQEntry | null) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const followups = faq ? getFollowups(faq) : [];
      setMessages((prev) => [
        ...prev,
        {
          id: makeId(),
          role: "bot",
          content: faq
            ? faq.answer
            : 'Não encontrei uma resposta específica para sua pergunta. Posso te ajudar com outra coisa, ou você pode <a href="/contato" class="underline text-isa-blue-300">falar com nossa equipe</a>.',
          timestamp: new Date(),
          followupChips: followups.length > 0 ? followups : undefined,
        },
      ]);
    }, 800);
  }, []);

  const sendMessage = useCallback(
    (text: string) => {
      const userMsg: Message = {
        id: makeId(),
        role: "user",
        content: text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg]);
      const faq = findBestResponse(text);
      addBotResponse(faq);
    },
    [addBotResponse]
  );

  const sendChip = useCallback(
    (faq: FAQEntry) => {
      const userMsg: Message = {
        id: makeId(),
        role: "user",
        content: faq.question,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg]);
      addBotResponse(faq);
    },
    [addBotResponse]
  );

  return { messages, sendMessage, sendChip, isOpen, setIsOpen, isTyping };
}
