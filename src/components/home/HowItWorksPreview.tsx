"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  UserPlus,
  ShieldCheck,
  Bell,
  Banknote,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUpVariant } from "@/lib/animations";

const steps = [
  {
    step: 1,
    icon: <UserPlus className="w-6 h-6" />,
    title: "Cadastre-se",
    description: "Crie sua conta e envie seus documentos pelo app.",
    color: "bg-isa-blue-500",
  },
  {
    step: 2,
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Seja validado",
    description: "Nossa equipe verifica seu perfil em até 48 horas.",
    color: "bg-isa-teal",
  },
  {
    step: 3,
    icon: <Bell className="w-6 h-6" />,
    title: "Receba chamados",
    description: "Aceite atendimentos próximos a você com um toque.",
    color: "bg-isa-green-500",
  },
  {
    step: 4,
    icon: <Banknote className="w-6 h-6" />,
    title: "Receba seu pagamento",
    description: "Pagamento rápido e garantido por cada atendimento.",
    color: "bg-isa-blue-700",
  },
];

export function HowItWorksPreview() {
  return (
    <section className="py-20 md:py-28 bg-isa-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          pill="Para Profissionais"
          title="Comece em 4 passos simples"
          subtitle="Do cadastro ao primeiro atendimento, tudo pelo app ISA Saúde."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {steps.map((step, index) => (
            <motion.div key={step.step} variants={fadeUpVariant}>
              <div className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-0 h-0.5 bg-isa-gray-200 z-0" />
                )}

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center mb-4 shadow-md`}
                  >
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-isa-gray-400 uppercase tracking-wider mb-1">
                    Passo {step.step}
                  </span>
                  <h3 className="font-display font-bold text-isa-gray-900 text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-isa-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            href="/como-funciona"
            className="inline-flex items-center gap-2 text-isa-blue-600 font-semibold hover:gap-3 transition-all"
          >
            Ver todos os detalhes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
