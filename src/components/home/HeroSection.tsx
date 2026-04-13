"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  Stethoscope,
  HeartHandshake,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Audience = "professionals" | "patients" | "partners";

const audienceContent: Record<
  Audience,
  {
    tab: string;
    icon: React.ReactNode;
    headline: string;
    subtext: string;
    cta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    benefits: string[];
    bgGradient: string;
  }
> = {
  professionals: {
    tab: "Sou Profissional",
    icon: <Stethoscope className="w-5 h-5" />,
    headline: "Trabalhe com flexibilidade e receba mais",
    subtext:
      "Junte-se a mais de 1.200 profissionais de saúde que usam a ISA para encontrar atendimentos domiciliares perto de você, no seu horário.",
    cta: { label: "Quero me cadastrar", href: "/trabalhe-conosco" },
    secondaryCta: { label: "Como funciona", href: "/como-funciona" },
    benefits: [
      "Escolha seus horários",
      "Receba por cada atendimento",
      "Validação rápida e segura",
    ],
    bgGradient: "from-isa-blue-900 via-isa-blue-800 to-isa-blue-700",
  },
  patients: {
    tab: "Sou Paciente",
    icon: <HeartHandshake className="w-5 h-5" />,
    headline: "Cuidado de saúde profissional no conforto da sua casa",
    subtext:
      "Profissionais validados, atendimento rápido e seguro. Cuide de você e da sua família sem sair de casa.",
    cta: { label: "Solicitar atendimento", href: "/para-pacientes" },
    secondaryCta: { label: "Ver serviços", href: "/para-pacientes#servicos" },
    benefits: [
      "Profissionais validados",
      "Atendimento rápido",
      "Cobertura por planos de saúde",
    ],
    bgGradient: "from-isa-teal via-teal-700 to-teal-600",
  },
  partners: {
    tab: "Sou Parceiro",
    icon: <Building2 className="w-5 h-5" />,
    headline: "Reduza custos e melhore o cuidado dos seus beneficiários",
    subtext:
      "Operadoras de saúde que parceriam com a ISA reduzem reinternações e custos hospitalares com atendimento domiciliar de qualidade.",
    cta: { label: "Ver soluções", href: "/para-parceiros" },
    secondaryCta: { label: "Falar com especialista", href: "/contato" },
    benefits: [
      "Redução de custos hospitalares",
      "Gestão completa de atendimentos",
      "Relatórios e indicadores",
    ],
    bgGradient: "from-isa-gray-900 via-isa-gray-800 to-isa-blue-900",
  },
};

export function HeroSection() {
  const [active, setActive] = useState<Audience>("professionals");
  const content = audienceContent[active];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background gradient */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            content.bgGradient
          )}
        />
      </AnimatePresence>

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Audience Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {(Object.keys(audienceContent) as Audience[]).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-pill text-sm font-semibold transition-all duration-200",
                active === key
                  ? "bg-white text-isa-gray-900 shadow-md"
                  : "bg-white/15 text-white/80 hover:bg-white/25 hover:text-white"
              )}
            >
              {audienceContent[key].icon}
              {audienceContent[key].tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-balance">
              {content.headline}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              {content.subtext}
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {content.benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="flex items-center gap-1.5 text-sm font-medium bg-white/15 px-4 py-2 rounded-pill"
                >
                  <CheckCircle2 className="w-4 h-4 text-isa-green-400" />
                  {benefit}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={content.cta.href}
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="bg-white text-isa-blue-700 hover:bg-isa-gray-100 shadow-lg"
              >
                {content.cta.label}
              </Button>
              <Button
                href={content.secondaryCta.href}
                variant="ghost"
                size="lg"
                className="text-white border-2 border-white/30 hover:bg-white/10"
              >
                {content.secondaryCta.label}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <span className="text-white text-xs">Role para baixo</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 border-2 border-white/40 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
