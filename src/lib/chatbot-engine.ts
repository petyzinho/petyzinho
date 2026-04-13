import type { FAQEntry } from "@/types/chatbot";
import { FAQ_ENTRIES } from "@/lib/faq-data";

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ");
}

export function findBestResponse(userInput: string): FAQEntry | null {
  const normalized = normalize(userInput);

  const scored = FAQ_ENTRIES.map((entry) => {
    const hits = entry.trigger_keywords.filter((kw) =>
      normalized.includes(normalize(kw))
    ).length;
    return { entry, hits };
  });

  const best = scored.sort((a, b) => b.hits - a.hits)[0];
  return best && best.hits > 0 ? best.entry : null;
}

export function getFollowups(faq: FAQEntry): FAQEntry[] {
  if (!faq.followup_ids) return [];
  return faq.followup_ids
    .map((id) => FAQ_ENTRIES.find((e) => e.id === id))
    .filter((e): e is FAQEntry => !!e);
}

export function getFAQById(id: string): FAQEntry | undefined {
  return FAQ_ENTRIES.find((e) => e.id === id);
}
