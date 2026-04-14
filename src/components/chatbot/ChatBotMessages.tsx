import { useEffect, useRef } from "react";
import type { Message } from "@/types/chatbot";
import { ChatBotFAQChips } from "./ChatBotFAQChips";
import type { FAQEntry } from "@/types/chatbot";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  messages: Message[];
  isTyping: boolean;
  onChipSelect: (faq: FAQEntry) => void;
};

export function ChatBotMessages({ messages, isTyping, onChipSelect }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={cn(
            "flex",
            msg.role === "user" ? "justify-end" : "justify-start"
          )}
        >
          <div className={cn("max-w-[85%]", msg.role === "bot" && "flex gap-2")}>
            {msg.role === "bot" && (
              <div className="w-7 h-7 rounded-full bg-isa-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Heart className="w-3.5 h-3.5 text-white fill-current" />
              </div>
            )}
            <div>
              <div
                className={cn(
                  "px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed",
                  msg.role === "user"
                    ? "bg-isa-pink-500 text-white rounded-tr-sm"
                    : "bg-isa-gray-100 text-isa-gray-800 rounded-tl-sm"
                )}
                dangerouslySetInnerHTML={{ __html: msg.content }}
              />
              {msg.followupChips && msg.followupChips.length > 0 && (
                <ChatBotFAQChips
                  chips={msg.followupChips}
                  onSelect={onChipSelect}
                />
              )}
            </div>
          </div>
        </div>
      ))}

      {isTyping && (
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-isa-pink-500 flex items-center justify-center">
            <Heart className="w-3.5 h-3.5 text-white fill-current" />
          </div>
          <div className="bg-isa-gray-100 px-4 py-2.5 rounded-2xl rounded-tl-sm">
            <div className="flex gap-1 items-center">
              <span className="w-1.5 h-1.5 bg-isa-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 bg-isa-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 bg-isa-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
