"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Stethoscope, HeartHandshake, Building2, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUpVariant } from "@/lib/animations";

const cards = [
  {
    tag: "Para Profissionais",
    tagVariant: "blue" as const,
    icon: <Stethoscope className="w-8 h-8 text-isa-blue-500" />,
    title: "Trabalhe com liberdade",
    description:
      "Cadastre-se, seja validado e comece a receber chamados de atendimento domiciliar perto de você. Defina seus horários e ganhe mais.",
    cta: "Quero me cadastrar",
    href: "/para-profissionais",
    bg: "bg-isa-blue-50",
    iconBg: "bg-isa-blue-100",
  },
  {
    tag: "Para Pacientes",
    tagVariant: "teal" as const,
    icon: <HeartHandshake className="w-8 h-8 text-isa-teal" />,
    title: "Cuidado em casa",
    description:
      "Profissionais validados e experientes, prontos para atender você e sua família com segurança e conforto no seu lar.",
    cta: "Solicitar atendimento",
    href: "/para-pacientes",
    bg: "bg-teal-50",
    iconBg: "bg-teal-100",
  },
  {
    tag: "Para Parceiros",
    tagVariant: "gray" as const,
    icon: <Building2 className="w-8 h-8 text-isa-gray-700" />,
    title: "Ver Soluções",
    description:
      "Operadoras de saúde e empresas: reduza custos hospitalares e ofereça mais qualidade aos seus beneficiários com nosso home care.",
    cta: "Ver Soluções",
    href: "/para-parceiros",
    bg: "bg-isa-gray-100",
    iconBg: "bg-isa-gray-200",
  },
];

export function AudienceCards() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Quem somos para você"
          title="Feito para cada perfil"
          subtitle="A ISA Saúde foi criada para conectar quem precisa de cuidado com quem tem vocação para cuidar."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div key={card.href} variants={fadeUpVariant}>
              <Link href={card.href} className="block h-full group">
                <Card
                  hover
                  padding="lg"
                  className="h-full flex flex-col transition-all duration-300 group-hover:border-isa-blue-200 border border-transparent"
                >
                  <div
                    className={`w-16 h-16 rounded-xl ${card.iconBg} flex items-center justify-center mb-5`}
                  >
                    {card.icon}
                  </div>
                  <Tag variant={card.tagVariant} className="mb-3 self-start">
                    {card.tag}
                  </Tag>
                  <h3 className="font-display font-bold text-xl text-isa-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-isa-gray-600 text-sm leading-relaxed flex-1">
                    {card.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-isa-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    {card.cta}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
