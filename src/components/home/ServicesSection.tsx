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
    accentColor: "#00BCD4",
    photo: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Equipe médica em atendimento domiciliar",
  },
  {
    id: 2,
    title: "Internação Domiciliar",
    description: "Internação completa para pacientes que precisam de suporte clínico intensivo no conforto do lar.",
    items: ["Acompanhamento médico e de enfermagem 24h", "Equipamentos hospitalares de complexidade", "Planos de cuidado personalizados e seguros"],
    color: "from-isa-pink-400 to-isa-pink-600",
    accentColor: "#E91E8C",
    photo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Enfermeira realizando internação domiciliar",
  },
  {
    id: 3,
    title: "Atenção Domiciliar",
    description: "Cuidado multiprofissional para pacientes em reabilitação ou com necessidades clínicas de média complexidade.",
    items: ["Visitas regulares e acompanhamento contínuo", "Foco na recuperação funcional e autonomia", "Equipe coordenada para garantir evolução"],
    color: "from-isa-teal-500 to-isa-teal-700",
    accentColor: "#0097A7",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Profissional de saúde em visita domiciliar",
  },
  {
    id: 4,
    title: "Cuidados Paliativos",
    description: "Conforto, dignidade e qualidade de vida para pacientes com doenças em fase avançada.",
    items: ["Controle de dor e sintomas", "Suporte emocional à família", "Equipe especializada em cuidados paliativos"],
    color: "from-purple-400 to-purple-600",
    accentColor: "#9C27B0",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Cuidado humanizado e paliativo em casa",
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
              <div key={service.id} className="bg-white border border-isa-gray-200 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group">
                {/* Photo */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.photo}
                    alt={service.photoAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Color overlay strip at bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: service.accentColor }}
                  />
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
