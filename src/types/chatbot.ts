export type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
  followupChips?: FAQEntry[];
};

export type FAQEntry = {
  id: string;
  trigger_keywords: string[];
  question: string;
  answer: string;
  followup_ids?: string[];
};
