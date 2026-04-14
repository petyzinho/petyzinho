"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";
import {
  UserPlus, FileText, ShieldCheck, Bell, Banknote,
  HeartHandshake, PhoneCall, UserCheck, Home,
  ArrowRight,
} from "lucide-react";

const profSteps = [
  { icon: <UserPlus />, title: "Baixe o app e cadastre-se", description: "Crie sua conta com seus dados profissionais. 100% gratuito e digital." },
  { icon: <FileText />, title: "Envie seus documentos", description: "Envie COREN/CRM, documentos pessoais, diplomas e foto de rosto." },
  { icon: <ShieldCheck />, title: "Aguarde a validação", description: "Nossa equipe analisa e valida seu perfil em até 48 horas úteis." },
  { icon: <Bell />, title: "Receba chamados", description: "Notificações de atendimentos na sua região chegam direto no app." },
  { icon: <Banknote />, title: "Realize e receba", description: "Conclua o atendimento e receba o pagamento conforme combinado." },
];

const patientSteps = [
  { icon: <PhoneCall />, title: "Entre em contato", description: "Pelo app, site ou telefone, informe o tipo de cuidado que precisa." },
  { icon: <UserCheck />, title: "Receba o profissional", description: "Conectamos você a um profissional validado disponível na sua região." },
  { icon: <Home />, title: "Atendimento em casa", description: "O profissional vai até você no horário agendado, com segurança e cuidado." },
  { icon: <HeartHandshake />, title: "Avalie e repita", description: "Avalie o atendimento e solicite novamente sempre que precisar." },
];

export default function ComoFuncionaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-isa-dark to-isa-pink-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">
            Como funciona a ISA Saúde?
          </h1>
          <p className="text-isa-pink-100 text-lg max-w-2xl mx-auto">
            Uma plataforma simples que conecta profissionais de saúde a pacientes. Veja como funciona para cada perfil.
          </p>
        </div>
      </section>

      {/* Profissionais */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading pill="Para Profissionais" title="Do cadastro ao primeiro atendimento" align="left" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {profSteps.map((step, i) => (
              <motion.div key={step.title} variants={fadeUpVariant} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-isa-pink-500 rounded-full text-white flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  {i < profSteps.length - 1 && (
                    <div className="w-0.5 h-8 bg-isa-gray-200 mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="font-display font-bold text-isa-gray-900 mb-1">{step.title}</h3>
                  <p className="text-isa-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-10">
            <Button href="/trabalhe-conosco" variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Quero me cadastrar
            </Button>
          </div>
        </div>
      </section>

      {/* Pacientes */}
      <section className="py-20 md:py-28 bg-isa-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading pill="Para Pacientes" title="Como solicitar um atendimento" align="left" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {patientSteps.map((step, i) => (
              <motion.div key={step.title} variants={fadeUpVariant} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-isa-teal rounded-full text-white flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  {i < patientSteps.length - 1 && (
                    <div className="w-0.5 h-8 bg-isa-gray-200 mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="font-display font-bold text-isa-gray-900 mb-1">{step.title}</h3>
                  <p className="text-isa-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-10">
            <Button href="/contato" variant="primary" size="lg" className="bg-isa-teal hover:bg-teal-700">
              Solicitar atendimento
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
