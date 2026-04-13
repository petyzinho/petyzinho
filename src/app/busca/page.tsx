"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SEARCH_INDEX } from "@/lib/search-index";
import type { SearchDocument } from "@/types/search";
import { Suspense } from "react";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchDocument[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const matched = SEARCH_INDEX.filter((doc) => {
      const haystack = [doc.title, doc.description, ...doc.keywords].join(" ").toLowerCase();
      return haystack.includes(q);
    });
    setResults(matched);
  }, [query]);

  return (
    <>
      <section className="bg-gradient-to-br from-isa-blue-900 to-isa-blue-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-extrabold text-4xl mb-6">Buscar no site</h1>
          <div className="flex items-center gap-3 bg-white rounded-button px-5 py-3 max-w-2xl shadow-lg">
            <Search className="w-5 h-5 text-isa-gray-400 flex-shrink-0" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="O que você está procurando?"
              className="flex-1 text-isa-gray-800 placeholder-isa-gray-400 outline-none text-base"
            />
          </div>
        </div>
      </section>

      <section className="py-12 min-h-64 bg-isa-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {query && results.length === 0 && (
            <p className="text-isa-gray-500 text-center py-12">
              Nenhum resultado para &ldquo;{query}&rdquo;. Tente outro termo.
            </p>
          )}

          {!query && (
            <p className="text-isa-gray-500 text-center py-12">
              Digite acima para buscar páginas, serviços e informações.
            </p>
          )}

          {results.length > 0 && (
            <div className="space-y-3">
              <p className="text-sm text-isa-gray-500 mb-4">
                {results.length} resultado{results.length > 1 ? "s" : ""} encontrado{results.length > 1 ? "s" : ""} para &ldquo;{query}&rdquo;
              </p>
              {results.map((doc) => (
                <Link key={doc.id} href={doc.url}>
                  <Card hover padding="md" className="group">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-isa-gray-900 group-hover:text-isa-blue-600 transition-colors mb-1">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-isa-gray-600">{doc.description}</p>
                        <p className="text-xs text-isa-blue-500 mt-1.5">{doc.url}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-isa-gray-400 flex-shrink-0 mt-1 group-hover:text-isa-blue-500 transition-colors" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function BuscaPage() {
  return (
    <Suspense>
      <SearchContent />
    </Suspense>
  );
}
