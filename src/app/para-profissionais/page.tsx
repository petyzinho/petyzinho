"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { AppDownloadSection } from "@/components/home/AppDownloadSection";
import { staggerContainer, fadeUpVariant } from "@/lib/animations";
import * as Accordion from "@radix-ui/react-accordion";
import {
  Clock,
  DollarSign,
  MapPin,
  Shield,
  UserCheck,
  Smartphone,
  ChevronDown,
  UserPlus,
  FileText,
  ShieldCheck,
  Bell,
  Banknote,
  ArrowRight,
  Stethoscope,
} from "lucide-react";

const benefits = [
  {
    icon: <Clock className="w-6 h-6 text-isa-blue-500" />,
    title: "Horários flexíveis",
    description:
      "Você escolhe quando e onde trabalhar. Aceite chamados que se encaixam na sua agenda.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-isa-green-500" />,
    title: "Renda extra garantida",
    description:
      "Receba por cada atendimento realizado, com pagamento rápido e transparente.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-isa-teal" />,
    title: "Atendimentos próximos",
    description:
      "Receba notificações de chamados disponíveis na sua região, sem deslocamentos longos.",
  },
  {
    icon: <Shield className="w-6 h-6 text-isa-blue-600" />,
    title: "Segurança jurídica",
    description:
      "Trabalhe com respaldo: documentação clara, contratos digitais e suporte da plataforma.",
  },
  {
    icon: <UserCheck className="w-6 h-6 text-isa-blue-500" />,
    title: "Validação profissional",
    description:
      "Seu perfil validado aumenta sua credibilidade e dá segurança aos pacientes.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-isa-gray-600" />,
    title: "Tudo pelo app",
    description:
      "Gerencie seus chamados, histórico e pagamentos diretamente pelo app ISA Saúde.",
  },
];

const steps = [
  {
    icon: <UserPlus className="w-6 h-6 text-white" />,
    title: "Crie sua conta",
    description: "Baixe o app e faça seu cadastro com seus dados profissionais.",
    color: "bg-isa-blue-500",
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Envie os documentos",
    description:
      "Envie COREN/CRM, documentos pessoais e comprovante de qualificação.",
    color: "bg-isa-blue-600",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Seja validado",
    description: "Nossa equipe analisa e valida seu perfil em até 48 horas.",
    color: "bg-isa-teal",
  },
  {
    icon: <Bell className="w-6 h-6 text-white" />,
    title: "Receba chamados",
    description: "Aceite atendimentos próximos de você com um toque no app.",
    color: "bg-isa-green-500",
  },
  {
    icon: <Banknote className="w-6 h-6 text-white" />,
    title: "Receba seu pagamento",
    description: "Pagamento garantido após cada atendimento concluído.",
    color: "bg-isa-blue-700",
  },
];

const faqs = [
  {
    q: "Quanto tempo leva a validação do meu cadastro?",
    a: "Nossa equipe analisa cada cadastro com cuidado e o processo leva entre 24 a 48 horas úteis após o envio completo dos documentos.",
  },
  {
    q: "Quais profissionais podem se cadastrar?",
    a: "Enfermeiros, técnicos em enfermagem, fisioterapeutas, fonoaudiólogos, nutricionistas, cuidadores de idosos e outros profissionais da área da saúde com registro ativo no conselho profissional.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "O pagamento é realizado diretamente pela plataforma após a conclusão de cada atendimento. Os valores variam conforme o tipo de serviço e são informados no momento do chamado.",
  },
  {
    q: "Preciso ter CNPJ para trabalhar com a ISA?",
    a: "Não é obrigatório ter CNPJ. Você pode trabalhar como pessoa física (CPF). Nossa equipe orienta sobre as melhores opções para sua situação.",
  },
  {
    q: "Posso escolher quais chamados aceitar?",
    a: "Sim! Você tem total liberdade para aceitar ou recusar chamados. Não há mínimo de atendimentos por período.",
  },
];

export default function ParaProfissionaisPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-isa-blue-900 via-isa-blue-800 to-isa-blue-700 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Tag variant="blue" className="mb-5 bg-white/15 text-white border-0">
              Para Profissionais de Saúde
            </Tag>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6 leading-tight">
              Trabalhe com liberdade.
              <br />
              Ganhe mais. Cuide melhor.
            </h1>
            <p className="text-lg text-isa-blue-100 mb-8 max-w-2xl">
              Junte-se a mais de 1.200 profissionais que usam a ISA para
              encontrar atendimentos domiciliares com flexibilidade, segurança e
              boa remuneração.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/trabalhe-conosco"
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="bg-white text-isa-blue-700 hover:bg-isa-gray-100"
              >
                Quero me cadastrar
              </Button>
              <Button
                href="#como-funciona"
                variant="ghost"
                size="lg"
                className="text-white border-2 border-white/30 hover:bg-white/10"
              >
                Ver como funciona
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Benefícios"
            title="Por que trabalhar com a ISA?"
            subtitle="Mais do que uma plataforma — somos parceiros do seu crescimento profissional."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((b) => (
              <motion.div key={b.title} variants={fadeUpVariant}>
                <Card hover padding="lg" className="h-full">
                  <div className="w-12 h-12 bg-isa-gray-100 rounded-xl flex items-center justify-center mb-4">
                    {b.icon}
                  </div>
                  <h3 className="font-display font-bold text-isa-gray-900 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-isa-gray-600 leading-relaxed">
                    {b.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="py-20 md:py-28 bg-isa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Passo a passo"
            title="Do cadastro ao primeiro atendimento"
            subtitle="O processo é simples, rápido e 100% pelo app."
          />
          <div className="max-w-2xl mx-auto space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center flex-shrink-0 shadow`}
                >
                  {step.icon}
                </div>
                <div className="pt-1">
                  <h3 className="font-display font-bold text-isa-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-isa-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/trabalhe-conosco" variant="primary" size="lg">
              <Stethoscope className="w-5 h-5 mr-2" />
              Começar agora
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Dúvidas frequentes"
            title="Perguntas de profissionais"
          />
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="border border-isa-gray-200 rounded-card overflow-hidden"
              >
                <Accordion.Trigger className="flex items-center justify-between w-full px-6 py-4 text-left font-semibold text-isa-gray-800 hover:bg-isa-gray-50 transition-colors group">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-isa-gray-400 flex-shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
                <Accordion.Content className="px-6 pb-4 text-sm text-isa-gray-600 leading-relaxed data-[state=open]:animate-fade-in-up">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <AppDownloadSection />
    </>
  );
}
