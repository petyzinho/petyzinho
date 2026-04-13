import type { FAQEntry } from "@/types/chatbot";

type Props = {
  chips: FAQEntry[];
  onSelect: (faq: FAQEntry) => void;
};

export function ChatBotFAQChips({ chips, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {chips.map((faq) => (
        <button
          key={faq.id}
          onClick={() => onSelect(faq)}
          className="text-xs px-3 py-1.5 bg-isa-blue-50 text-isa-blue-700 border border-isa-blue-200 rounded-pill hover:bg-isa-blue-100 transition-colors text-left"
        >
          {faq.question}
        </button>
      ))}
    </div>
  );
}
