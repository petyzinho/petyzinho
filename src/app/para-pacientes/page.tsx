"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import * as Accordion from "@radix-ui/react-accordion";
import { staggerContainer, fadeUpVariant } from "@/lib/animations";
import {
  Stethoscope,
  Activity,
  Ear,
  Apple,
  UserRound,
  Heart,
  ShieldCheck,
  Star,
  ChevronDown,
  ArrowRight,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="w-6 h-6 text-isa-blue-500" />,
    title: "Enfermagem Domiciliar",
    description:
      "Curativos, aplicação de medicamentos, monitoramento de sinais vitais e cuidados pós-cirúrgicos.",
    color: "bg-isa-blue-50",
  },
  {
    icon: <Activity className="w-6 h-6 text-isa-teal" />,
    title: "Fisioterapia",
    description:
      "Reabilitação motora, tratamento de lesões e fisioterapia respiratória no conforto da sua casa.",
    color: "bg-teal-50",
  },
  {
    icon: <Ear className="w-6 h-6 text-isa-green-500" />,
    title: "Fonoaudiologia",
    description:
      "Tratamento de distúrbios da fala, linguagem e deglutição para todas as idades.",
    color: "bg-isa-green-50",
  },
  {
    icon: <Apple className="w-6 h-6 text-orange-500" />,
    title: "Nutrição",
    description:
      "Acompanhamento nutricional domiciliar para recuperação, doenças crônicas e bem-estar.",
    color: "bg-orange-50",
  },
  {
    icon: <UserRound className="w-6 h-6 text-purple-500" />,
    title: "Cuidador de Idosos",
    description:
      "Cuidado humanizado e especializado para idosos que precisam de acompanhamento diário.",
    color: "bg-purple-50",
  },
  {
    icon: <Heart className="w-6 h-6 text-red-400" />,
    title: "Acompanhamento Hospitalar",
    description:
      "Profissional de saúde para acompanhar e apoiar pacientes durante internações hospitalares.",
    color: "bg-red-50",
  },
];

const safetyPoints = [
  "Verificação de registro profissional (COREN, CREFITO, etc.)",
  "Checagem de antecedentes e qualificações",
  "Avaliação obrigatória após cada atendimento",
  "Suporte da ISA em tempo real durante o atendimento",
  "Atendimento com cobertura de planos de saúde parceiros",
];

const faqs = [
  {
    q: "Como solicito um atendimento domiciliar?",
    a: "Você pode solicitar pelo app ISA Saúde (App Store / Google Play) ou pelo formulário de contato no site. Informe o tipo de cuidado necessário, o endereço e o horário desejado.",
  },
  {
    q: "Quanto tempo demora para um profissional chegar?",
    a: "O tempo varia conforme a disponibilidade de profissionais na sua região e a urgência do serviço. Em média, conseguimos atender em algumas horas para serviços não urgentes.",
  },
  {
    q: "Meu plano de saúde cobre o atendimento?",
    a: "A ISA trabalha em parceria com diversas operadoras de saúde. Para verificar se seu plano é conveniado, entre em contato conosco com o nome da sua operadora.",
  },
  {
    q: "Os profissionais são verificados?",
    a: "Sim! Todos passam por validação rigorosa: documentos, registro no conselho profissional, checagem de antecedentes e avaliação de qualificações antes de realizarem qualquer atendimento.",
  },
  {
    q: "Posso escolher o profissional?",
    a: "Em alguns casos, sim. Você pode ver o perfil e as avaliações dos profissionais disponíveis e ter preferências para retornos.",
  },
];

export default function ParaPacientesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-800 via-teal-700 to-isa-teal text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Tag variant="teal" className="mb-5 bg-white/15 text-white border-0">
              Para Pacientes e Familiares
            </Tag>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6 leading-tight">
              Cuidado profissional
              <br />
              no conforto da sua casa.
            </h1>
            <p className="text-lg text-teal-100 mb-8 max-w-2xl">
              Profissionais de saúde validados, prontos para atender você e sua
              família com segurança, carinho e excelência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/contato"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="bg-white text-teal-700 hover:bg-isa-gray-100"
              >
                Solicitar atendimento
              </Button>
              <Button
                href="tel:+5500000000000"
                variant="ghost"
                size="lg"
                leftIcon={<Phone className="w-4 h-4" />}
                className="text-white border-2 border-white/30 hover:bg-white/10"
              >
                Ligar agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Nossos Serviços"
            title="Cuidado completo em casa"
            subtitle="Oferecemos uma gama completa de serviços de saúde domiciliar com profissionais especializados."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUpVariant}>
                <Card hover padding="lg" className="h-full">
                  <div
                    className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    {s.icon}
                  </div>
                  <h3 className="font-display font-bold text-isa-gray-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-isa-gray-600 leading-relaxed">
                    {s.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Safety */}
      <section id="seguranca" className="py-20 md:py-28 bg-isa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Tag variant="green" className="mb-4">
                Segurança e Qualidade
              </Tag>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-isa-gray-900 mb-4">
                Sua família merece o melhor cuidado
              </h2>
              <p className="text-isa-gray-600 text-lg mb-8 leading-relaxed">
                Cada profissional na ISA passa por um rigoroso processo de
                validação antes de realizar qualquer atendimento.
              </p>
              <ul className="space-y-3">
                {safetyPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-isa-green-500 flex-shrink-0" />
                    <span className="text-isa-gray-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "1.200+", label: "Profissionais validados" },
                { value: "98%", label: "Satisfação dos pacientes" },
                { value: "48h", label: "Tempo médio de validação" },
                { value: "24/7", label: "Suporte disponível" },
              ].map((stat) => (
                <Card key={stat.label} padding="md" className="text-center">
                  <p className="font-display font-extrabold text-3xl text-isa-blue-600 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-isa-gray-500 font-medium">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl text-isa-gray-700 italic mb-4">
            &ldquo;Recebi tratamento de fisioterapia em casa por 3 semanas após
            minha cirurgia. Não precisei me deslocar e os profissionais eram
            todos muito qualificados. Serviço impecável!&rdquo;
          </blockquote>
          <p className="font-semibold text-isa-gray-900">Fernanda Costa</p>
          <p className="text-sm text-isa-gray-500">Paciente, 67 anos</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-isa-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading pill="Dúvidas" title="Perguntas de pacientes e familiares" />
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="border border-isa-gray-200 rounded-card overflow-hidden bg-white"
              >
                <Accordion.Trigger className="flex items-center justify-between w-full px-6 py-4 text-left font-semibold text-isa-gray-800 hover:bg-isa-gray-50 transition-colors group">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-isa-gray-400 flex-shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
                <Accordion.Content className="px-6 pb-4 text-sm text-isa-gray-600 leading-relaxed">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
          <div className="text-center mt-10">
            <Button href="/contato" variant="primary" size="lg">
              Solicitar atendimento
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
