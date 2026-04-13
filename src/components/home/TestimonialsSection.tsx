"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: "1",
    name: "Ana Paula Ferreira",
    role: "Enfermeira",
    audience: "professional" as const,
    content:
      "A ISA mudou minha vida profissional. Hoje tenho flexibilidade para organizar meus horários e ainda ganho mais do que quando trabalhava em clínica. O app é fácil de usar e o suporte é excelente.",
    rating: 5,
  },
  {
    id: "2",
    name: "Carlos Eduardo Silva",
    role: "Fisioterapeuta",
    audience: "professional" as const,
    content:
      "Em menos de 48 horas fui validado e já recebi meu primeiro chamado. A plataforma é muito intuitiva e o pagamento é sempre na data certa. Recomendo para todos os colegas.",
    rating: 5,
  },
  {
    id: "3",
    name: "Maria das Graças Oliveira",
    role: "Familiar de paciente",
    audience: "patient" as const,
    content:
      "Minha mãe precisava de cuidados pós-cirúrgicos e a ISA enviou uma enfermeira maravilhosa em menos de 2 horas. Profissional, gentil e muito competente. Gratidão!",
    rating: 5,
  },
  {
    id: "4",
    name: "Roberto Nascimento",
    role: "Técnico em Enfermagem",
    audience: "professional" as const,
    content:
      "Nunca imaginei que trabalhar de forma autônoma seria tão simples e seguro. A ISA cuida de toda a burocracia e eu me concentro no que realmente importa: cuidar dos pacientes.",
    rating: 5,
  },
  {
    id: "5",
    name: "Fernanda Costa",
    role: "Paciente, 67 anos",
    audience: "patient" as const,
    content:
      "Recebi tratamento de fisioterapia em casa por 3 semanas após minha cirurgia. Não precisei me deslocar e os profissionais eram todos muito qualificados. Serviço impecável!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Depoimentos"
          title="O que dizem sobre a ISA"
          subtitle="Histórias reais de profissionais e pacientes que transformaram sua relação com o cuidado em saúde."
        />

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="bg-isa-gray-50 rounded-card p-8 md:p-10 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-isa-blue-100" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-isa-gray-700 text-lg leading-relaxed mb-6 italic">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-isa-blue-100 flex items-center justify-center text-isa-blue-600 font-bold text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-isa-gray-900">{t.name}</p>
                  <p className="text-sm text-isa-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  i === current
                    ? "bg-isa-blue-500 w-6"
                    : "bg-isa-gray-300 hover:bg-isa-gray-400"
                )}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
