"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Hospital em Casa",
    description: "A estrutura e a segurança de um hospital, com o acolhimento de casa.",
    items: ["Doenças agudas", "Monitoramento 24h", "Equipe multiprofissional de alta performance"],
    color: "from-isa-teal-400 to-isa-teal-600",
  },
  {
    id: 2,
    title: "Internação Domiciliar",
    description: "Internação completa para pacientes que apresentam suporte clínico intensivo no conforto do lar.",
    items: ["Acompanhamento médico e de enfermagem 24h", "Equipamentos hospitalares funcionais de complexidade", "Planos de cuidado personalizados e seguros"],
    color: "from-isa-pink-400 to-isa-pink-600",
  },
  {
    id: 3,
    title: "Atenção Domiciliar",
    description: "Cuidado multiprofissional para pacientes em reabilitação ou com necessidades clínicas de média complexidade.",
    items: ["Visitas regulares e acompanhamento contínuo", "Foco na recuperação funcional e autonomia", "Equipe coordenada para garantir evolução e segurança"],
    color: "from-isa-teal-500 to-isa-teal-700",
  },
  {
    id: 4,
    title: "Cuidados Paliativos",
    description: "Conforto, dignidade e qualidade de vida para pacientes com doenças em fase avançada.",
    items: ["Controle de dor e sintomas", "Suporte emocional à família", "Equipe especializada em cuidados paliativos"],
    color: "from-purple-400 to-purple-600",
  },
];

export function ServicesSection() {
  const [start, setStart] = useState(0);

  const visible = services.slice(start, start + 3);
  const canPrev = start > 0;
  const canNext = start + 3 < services.length;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-isa-gray-800 text-center mb-3">Nossos Serviços</h2>
        <p className="text-isa-gray-500 text-center mb-12">
          Soluções completas de saúde domiciliar para você e sua família
        </p>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setStart((s) => s - 1)}
            disabled={!canPrev}
            className="w-10 h-10 rounded-full border-2 border-isa-pink-200 flex items-center justify-center text-isa-pink-500 hover:bg-isa-pink-50 transition-colors flex-shrink-0 disabled:opacity-30"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="grid md:grid-cols-3 gap-6 flex-1">
            {visible.map((service) => (
              <div key={service.id} className="bg-white border border-isa-gray-200 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
                {/* Color bar top */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                {/* Image placeholder */}
                <div className={`h-48 bg-gradient-to-br ${service.color} opacity-10 relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-isa-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-isa-gray-800 text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-isa-gray-500 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-isa-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-isa-pink-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setStart((s) => s + 1)}
            disabled={!canNext}
            className="w-10 h-10 rounded-full border-2 border-isa-pink-200 flex items-center justify-center text-isa-pink-500 hover:bg-isa-pink-50 transition-colors flex-shrink-0 disabled:opacity-30"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/para-pacientes"
            className="inline-block bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-semibold px-8 py-3.5 rounded-pill transition-colors"
          >
            Conheça Todos os Serviços
          </Link>
        </div>
      </div>
    </section>
  );
}
