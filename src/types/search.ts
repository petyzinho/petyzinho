export type SearchDocument = {
  id: string;
  title: string;
  description: string;
  url: string;
  audience: "professionals" | "patients" | "partners" | "general";
  keywords: string[];
};

export type SearchResult = SearchDocument & {
  score?: number;
};
