"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Search,
  Clock,
  Shield,
  Smartphone,
  Users,
  Star,
  TrendingUp,
  Stethoscope,
  CalendarCheck,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";

// ─── Mock data ───────────────────────────────────────────────────────────────

const opportunities = [
  { id: 1,  role: "Enfermeiro(a) Domiciliar",        specialty: "Enfermagem",          location: "São Paulo, SP",       type: "Plantão" },
  { id: 2,  role: "Fisioterapeuta Domiciliar",        specialty: "Fisioterapia",         location: "Brasília, DF",        type: "Visita"  },
  { id: 3,  role: "Técnico(a) de Enfermagem",         specialty: "Enfermagem",          location: "Belo Horizonte, MG",  type: "Plantão" },
  { id: 4,  role: "Médico(a) Clínico Geral",          specialty: "Medicina",            location: "Salvador, BA",        type: "Visita"  },
  { id: 5,  role: "Fonoaudiólogo(a)",                 specialty: "Fonoaudiologia",      location: "São Paulo, SP",       type: "Visita"  },
  { id: 6,  role: "Enfermeiro(a) UTI Domiciliar",     specialty: "Enfermagem",          location: "São Paulo, SP",       type: "Plantão" },
  { id: 7,  role: "Nutricionista",                    specialty: "Nutrição",            location: "Goiânia, GO",         type: "Visita"  },
  { id: 8,  role: "Enfermeiro(a) Pediatria",          specialty: "Enfermagem",          location: "São Paulo, SP",       type: "Plantão" },
  { id: 9,  role: "Terapeuta Ocupacional",            specialty: "Terapia Ocupacional", location: "Brasília, DF",        type: "Visita"  },
];

const ALL_SPECIALTIES = [
  "Todas", "Enfermagem", "Fisioterapia", "Medicina",
  "Fonoaudiologia", "Nutrição", "Terapia Ocupacional",
];

// Mapeamento de prefixo de CEP → cidade/estado
const CEP_REGIONS: { prefixes: number[]; city: string }[] = [
  { prefixes: [1, 2, 3, 4, 5, 6, 7, 8, 9],                   city: "São Paulo, SP"      },
  { prefixes: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],       city: "Belo Horizonte, MG" },
  { prefixes: [40, 41, 42, 43, 44, 45, 46, 47, 48],           city: "Salvador, BA"       },
  { prefixes: [70, 71, 72, 73],                                city: "Brasília, DF"       },
  { prefixes: [74, 75, 76],                                    city: "Goiânia, GO"        },
];

function formatCep(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

function cityFromCep(cep: string): string | null {
  const digits = cep.replace(/\D/g, "");
  if (digits.length < 2) return null;
  const prefix2 = parseInt(digits.slice(0, 2), 10);
  const prefix1 = parseInt(digits.slice(0, 1), 10);
  for (const region of CEP_REGIONS) {
    if (region.prefixes.includes(prefix2) || region.prefixes.includes(prefix1)) {
      return region.city;
    }
  }
  return null;
}

const vantagens = [
  {
    icon: Clock,
    title: "Horários flexíveis",
    desc: "Escolha quando e quanto trabalhar, sem horário fixo.",
    bg: "bg-amber-50",
    iconColor: "text-amber-500",
    border: "hover:border-amber-200",
  },
  {
    icon: TrendingUp,
    title: "Ganhos acima da média",
    desc: "Até 4x mais do que no modelo CLT tradicional.",
    bg: "bg-green-50",
    iconColor: "text-green-500",
    border: "hover:border-green-200",
  },
  {
    icon: Shield,
    title: "Segurança garantida",
    desc: "Suporte jurídico e seguro de responsabilidade incluídos.",
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
    border: "hover:border-blue-200",
  },
  {
    icon: Smartphone,
    title: "Plataforma 100% digital",
    desc: "Agenda, pagamentos e pacientes pelo app ISA.",
    bg: "bg-isa-pink-50",
    iconColor: "text-isa-pink-500",
    border: "hover:border-isa-pink-200",
  },
  {
    icon: Users,
    title: "Comunidade ativa",
    desc: "+10 mil profissionais cadastrados em todo o Brasil.",
    bg: "bg-purple-50",
    iconColor: "text-purple-500",
    border: "hover:border-purple-200",
  },
  {
    icon: Star,
    title: "Reconhecimento",
    desc: "Avaliações e recompensas por desempenho excepcional.",
    bg: "bg-orange-50",
    iconColor: "text-orange-500",
    border: "hover:border-orange-200",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento inteligente",
    desc: "Receba pacientes próximos a você sem burocracia.",
    bg: "bg-teal-50",
    iconColor: "text-teal-500",
    border: "hover:border-teal-200",
  },
  {
    icon: BadgeCheck,
    title: "Perfil verificado",
    desc: "Credenciais validadas que geram mais confiança e agendamentos.",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-500",
    border: "hover:border-indigo-200",
  },
  {
    icon: HeartHandshake,
    title: "Suporte dedicado",
    desc: "Time ISA disponível para apoiar você em cada atendimento.",
    bg: "bg-rose-50",
    iconColor: "text-rose-500",
    border: "hover:border-rose-200",
  },
];

const navItems = [
  { label: "Início",         href: "#inicio"        },
  { label: "Vantagens",      href: "#vantagens"     },
  { label: "Oportunidades",  href: "#oportunidades" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PortalISAPage() {
  const [search,    setSearch]    = useState("");
  const [cep,       setCep]       = useState("");
  const [specialty, setSpecialty] = useState("Todas");

  const detectedCity = cityFromCep(cep);
  const cepComplete  = cep.replace(/\D/g, "").length === 8;

  const filtered = opportunities.filter((o) => {
    const matchSearch    = !search || o.role.toLowerCase().includes(search.toLowerCase());
    const matchLocation  = !cepComplete || !detectedCity || o.location === detectedCity;
    const matchSpecialty = specialty === "Todas" || o.specialty === specialty;
    return matchSearch && matchLocation && matchSpecialty;
  });

  return (
    <div className="min-h-screen">

      {/* ── Internal nav ──────────────────────────────────────────────────── */}
      <nav className="sticky top-16 z-30 bg-white border-b border-isa-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12 overflow-x-auto gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-isa-gray-600 hover:text-isa-pink-500 whitespace-nowrap px-4 py-3 border-b-2 border-transparent hover:border-isa-pink-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="ml-auto flex-shrink-0">
              <a
                href="#oportunidades"
                className="bg-isa-pink-500 hover:bg-isa-pink-600 text-white text-xs font-bold px-5 py-2 rounded-pill transition-colors"
              >
                Começar agora
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        id="inicio"
        style={{ background: "linear-gradient(135deg, #E91E8C 0%, #C4167A 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div className="text-white">
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
                Portal do Profissional
              </span>
              <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-5">
                Aumente seus ganhos{" "}
                <span className="text-isa-teal-300">com a ISA</span>
              </h1>
              <p className="text-pink-100 text-lg mb-8 leading-relaxed max-w-md">
                Flexibilidade, segurança e oportunidades todos os dias.
                Trabalhe com autonomia e receba acima da média do mercado.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#oportunidades"
                  className="bg-white text-isa-pink-600 font-bold px-7 py-3.5 rounded-pill hover:bg-pink-50 transition-colors"
                >
                  Começar agora
                </a>
                <a
                  href="#vantagens"
                  className="border-2 border-white/50 text-white font-semibold px-7 py-3.5 rounded-pill hover:bg-white/10 transition-colors"
                >
                  Ver vantagens
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="Profissional de saúde ISA"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4">
                <p className="text-2xl font-black text-isa-gray-800 leading-none">+10 mil</p>
                <p className="text-xs text-isa-gray-500 mt-0.5">profissionais cadastrados</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Vantagens ─────────────────────────────────────────────────────── */}
      <section id="vantagens" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-isa-gray-800 mb-3">
              Quem trabalha com a ISA tem uma série de vantagens
            </h2>
            <p className="text-isa-gray-500">Muito além de uma oportunidade de renda</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {vantagens.map((v) => (
              <div
                key={v.title}
                className={`flex items-start gap-4 p-6 rounded-2xl border border-isa-gray-100 ${v.border} transition-all group`}
              >
                <div className={`w-14 h-14 rounded-2xl ${v.bg} flex items-center justify-center flex-shrink-0`}>
                  <v.icon className={`w-7 h-7 ${v.iconColor}`} />
                </div>
                <div>
                  <p className="font-bold text-isa-gray-800 mb-1">{v.title}</p>
                  <p className="text-sm text-isa-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Oportunidades ─────────────────────────────────────────────────── */}
      <section id="oportunidades" className="py-20 bg-isa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-8">
            <h2 className="text-3xl font-black text-isa-gray-800 mb-1">
              Encontre oportunidades
            </h2>
            <p className="text-isa-gray-500">
              {filtered.length} vaga{filtered.length !== 1 ? "s" : ""} disponíve{filtered.length !== 1 ? "is" : "l"}
            </p>
          </div>

          {/* Search + Filters */}
          <div className="bg-white rounded-2xl border border-isa-gray-200 p-4 mb-5 flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="flex items-center gap-2 flex-1 border border-isa-gray-200 rounded-xl px-4 py-2.5">
              <Search className="w-4 h-4 text-isa-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Buscar vaga ou especialidade..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 text-sm text-isa-gray-800 placeholder-isa-gray-400 outline-none"
              />
            </div>

            {/* CEP */}
            <div className="flex flex-col sm:min-w-[190px]">
              <div className={`flex items-center gap-2 border rounded-xl px-4 py-2.5 transition-colors ${
                cepComplete
                  ? detectedCity ? "border-green-400 bg-green-50" : "border-red-300 bg-red-50"
                  : "border-isa-gray-200"
              }`}>
                <MapPin className={`w-4 h-4 flex-shrink-0 ${
                  cepComplete ? (detectedCity ? "text-green-500" : "text-red-400") : "text-isa-gray-400"
                }`} />
                <input
                  type="text"
                  placeholder="Digite seu CEP"
                  value={cep}
                  onChange={(e) => setCep(formatCep(e.target.value))}
                  className="flex-1 text-sm text-isa-gray-800 placeholder-isa-gray-400 outline-none bg-transparent"
                  maxLength={9}
                />
                {cep && (
                  <button onClick={() => setCep("")} className="text-isa-gray-400 hover:text-isa-gray-600 text-xs">✕</button>
                )}
              </div>
              {cepComplete && (
                <p className={`text-xs mt-1 px-1 ${detectedCity ? "text-green-600" : "text-red-500"}`}>
                  {detectedCity ? `📍 ${detectedCity}` : "CEP fora da área de cobertura"}
                </p>
              )}
            </div>

            {/* Specialty */}
            <div className="flex items-center gap-2 border border-isa-gray-200 rounded-xl px-4 py-2.5 sm:min-w-[190px]">
              <Stethoscope className="w-4 h-4 text-isa-gray-400 flex-shrink-0" />
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="flex-1 text-sm text-isa-gray-700 outline-none bg-transparent cursor-pointer"
              >
                {ALL_SPECIALTIES.map((s) => (
                  <option key={s} value={s}>{s === "Todas" ? "Todas as especialidades" : s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results list */}
          <div className="bg-white rounded-2xl border border-isa-gray-200 overflow-hidden">
            {filtered.length === 0 ? (
              <div className="py-16 text-center text-isa-gray-400">
                <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p className="font-semibold text-isa-gray-600">Nenhuma vaga encontrada</p>
                <p className="text-sm mt-1">Tente ajustar os filtros de busca</p>
              </div>
            ) : (
              filtered.map((o, i) => (
                <div
                  key={o.id}
                  className={`flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 hover:bg-isa-gray-50 transition-colors ${
                    i !== filtered.length - 1 ? "border-b border-isa-gray-100" : ""
                  }`}
                >
                  {/* Role */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-isa-gray-400 uppercase tracking-wide font-medium mb-0.5">Vaga</p>
                    <p className="font-semibold text-isa-pink-600">{o.role}</p>
                  </div>

                  {/* Specialty */}
                  <div className="sm:w-44">
                    <p className="text-[10px] text-isa-gray-400 uppercase tracking-wide font-medium mb-0.5">Especialidade</p>
                    <p className="text-sm font-medium text-isa-gray-700">{o.specialty}</p>
                  </div>

                  {/* Location */}
                  <div className="sm:w-44">
                    <p className="text-[10px] text-isa-gray-400 uppercase tracking-wide font-medium mb-0.5">Localização</p>
                    <p className="text-sm font-medium text-isa-gray-700 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-isa-gray-400" />
                      {o.location}
                    </p>
                  </div>

                  {/* Type */}
                  <div className="sm:w-24">
                    <p className="text-[10px] text-isa-gray-400 uppercase tracking-wide font-medium mb-0.5">Tipo</p>
                    <span
                      className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${
                        o.type === "Plantão"
                          ? "bg-isa-pink-50 text-isa-pink-600"
                          : "bg-isa-teal-50 text-isa-teal-700"
                      }`}
                    >
                      {o.type}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="sm:flex-shrink-0">
                    <Link
                      href="/para-profissionais"
                      className="inline-block bg-isa-pink-500 hover:bg-isa-pink-600 text-white text-xs font-bold px-5 py-2.5 rounded-pill transition-colors whitespace-nowrap"
                    >
                      Quero essa oportunidade
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
