"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priscila",
    role: "Paciente - São Paulo",
    content: "Foi maravilhoso com profissionais amáveis e carinhoso. Muito satisfeito!",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria",
    role: "Paciente - Distrito Federal",
    content: "Gostei do atendimento, rápido e seguro com profissional amável e seguro naquilo que faz. Obrigado!",
    rating: 5,
  },
  {
    id: 3,
    name: "Carlos Eduardo",
    role: "Familiar - Belo Horizonte",
    content: "Minha mãe precisava de cuidados e a ISA enviou uma enfermeira excelente. Profissional e muito cuidadosa.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ana Beatriz",
    role: "Paciente - Salvador",
    content: "Serviço impecável! Desde o agendamento até o atendimento, tudo foi muito organizado e eficiente.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [start, setStart] = useState(0);

  const prev = () => setStart((s) => (s - 1 + testimonials.length) % testimonials.length);
  const next = () => setStart((s) => (s + 1) % testimonials.length);

  const visible = [
    testimonials[start % testimonials.length],
    testimonials[(start + 1) % testimonials.length],
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-isa-gray-800 text-center mb-12">
          O que dizem nossos pacientes
        </h2>

        <div className="flex items-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-isa-pink-200 flex items-center justify-center text-isa-pink-500 hover:bg-isa-pink-50 transition-colors flex-shrink-0"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="grid md:grid-cols-2 gap-6 flex-1">
            {visible.map((t) => (
              <div key={t.id} className="bg-white border border-isa-gray-200 rounded-2xl p-6 shadow-card">
                {/* Pink quote mark */}
                <div className="text-4xl font-black text-isa-pink-200 leading-none mb-3">"</div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-isa-pink-400 fill-current" />
                  ))}
                </div>

                <p className="text-isa-gray-700 text-sm leading-relaxed mb-4">
                  &ldquo; {t.content} &rdquo;
                </p>

                <div>
                  <p className="font-bold text-isa-gray-800 text-sm">{t.name}</p>
                  <p className="text-xs text-isa-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-isa-pink-200 flex items-center justify-center text-isa-pink-500 hover:bg-isa-pink-50 transition-colors flex-shrink-0"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
