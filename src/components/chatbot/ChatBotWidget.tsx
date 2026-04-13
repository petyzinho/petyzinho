"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Heart } from "lucide-react";
import { useChatBot } from "@/hooks/useChatBot";
import { ChatBotMessages } from "./ChatBotMessages";
import { ChatBotInput } from "./ChatBotInput";

export function ChatBotWidget() {
  const { messages, sendMessage, sendChip, isOpen, setIsOpen, isTyping } =
    useChatBot();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="w-80 sm:w-96 h-[520px] bg-white rounded-card shadow-card-hover flex flex-col overflow-hidden border border-isa-gray-200"
          >
            {/* Header */}
            <div className="bg-isa-blue-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white fill-current" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">ISA Assistente</p>
                  <p className="text-isa-blue-200 text-xs">Online agora</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1 rounded"
                aria-label="Fechar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <ChatBotMessages
              messages={messages}
              isTyping={isTyping}
              onChipSelect={sendChip}
            />

            {/* Input */}
            <ChatBotInput onSend={sendMessage} disabled={isTyping} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((v) => !v)}
        className="w-14 h-14 bg-isa-blue-500 hover:bg-isa-blue-600 rounded-full flex items-center justify-center shadow-lg transition-colors relative"
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread dot on first load */}
        {!isOpen && (
          <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
        )}
      </motion.button>
    </div>
  );
}
