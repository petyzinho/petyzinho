"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { staggerContainer, fadeUpVariant } from "@/lib/animations";
import {
  TrendingDown,
  BarChart3,
  Users,
  Plug,
  CheckCircle2,
  Building2,
  ArrowRight,
  Send,
} from "lucide-react";

const solutions = [
  {
    icon: <TrendingDown className="w-7 h-7 text-isa-blue-500" />,
    title: "Redução de Custos",
    description:
      "Substitua reinternações desnecessárias por atendimentos domiciliares de qualidade, reduzindo custos assistenciais.",
  },
  {
    icon: <Users className="w-7 h-7 text-isa-green-500" />,
    title: "Rede de Profissionais",
    description:
      "Acesso a uma rede de profissionais validados, prontos para atender seus beneficiários em todo o país.",
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-isa-teal" />,
    title: "Gestão e Relatórios",
    description:
      "Painel de gestão completo: acompanhe atendimentos, indicadores de qualidade e satisfação em tempo real.",
  },
  {
    icon: <Plug className="w-7 h-7 text-isa-blue-700" />,
    title: "Integração de Sistemas",
    description:
      "API robusta para integração com seus sistemas de gestão de beneficiários e autorização de procedimentos.",
  },
];

const benefits = [
  "Profissionais 100% validados e seguros",
  "Cobertura em mais de 50 cidades",
  "SLA de atendimento garantido por contrato",
  "Relatórios mensais de qualidade",
  "Equipe dedicada de relacionamento",
  "Flexibilidade de integração via API",
];

export default function ParaParceirosPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-isa-gray-900 via-isa-gray-800 to-isa-blue-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-isa-blue-500 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Tag variant="gray" className="mb-5 bg-white/10 text-white border-0">
              Para Operadoras e Parceiros
            </Tag>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6 leading-tight">
              Nossas Soluções para
              <br />
              Operadoras de Saúde
            </h1>
            <p className="text-lg text-isa-gray-300 mb-8 max-w-2xl">
              Reduza custos hospitalares, melhore a satisfação dos seus
              beneficiários e amplie a cobertura de home care com a ISA Saúde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="#contato"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Falar com um especialista
              </Button>
              <Button
                href="#solucoes"
                variant="ghost"
                size="lg"
                className="text-white border-2 border-white/30 hover:bg-white/10"
              >
                Ver soluções
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solucoes" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Nossas Soluções para Operadoras"
            title="Tudo que sua operadora precisa"
            subtitle="Tecnologia e operação para entregar home care com qualidade, escala e controle de custos."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {solutions.map((s) => (
              <motion.div key={s.title} variants={fadeUpVariant}>
                <Card hover padding="lg" className="h-full text-center">
                  <div className="w-16 h-16 bg-isa-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
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

      {/* Benefits list */}
      <section className="py-16 bg-isa-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                Por que escolher a ISA como parceira?
              </h2>
              <p className="text-isa-blue-200 text-lg mb-8">
                Somos a ponte entre qualidade assistencial e eficiência
                operacional no cuidado domiciliar.
              </p>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-isa-green-400 flex-shrink-0" />
                    <span className="text-isa-blue-100">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Cidades cobertas" },
                { value: "1.200+", label: "Profissionais ativos" },
                { value: "98%", label: "Satisfação dos pacientes" },
                { value: "10k+", label: "Atendimentos realizados" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 rounded-card p-6 text-center"
                >
                  <p className="font-display font-extrabold text-4xl text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-isa-blue-200 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contato" className="py-20 md:py-28 bg-isa-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Fale Conosco"
            title="Pronto para ser parceiro?"
            subtitle="Preencha o formulário e nossa equipe comercial entra em contato em até 24 horas."
          />

          {submitted ? (
            <Card padding="lg" className="text-center">
              <Building2 className="w-16 h-16 text-isa-green-500 mx-auto mb-4" />
              <h3 className="font-display font-bold text-2xl text-isa-gray-900 mb-2">
                Recebemos sua solicitação!
              </h3>
              <p className="text-isa-gray-600">
                Nossa equipe comercial entrará em contato em até 24 horas. Estamos
                animados com essa possível parceria!
              </p>
            </Card>
          ) : (
            <Card padding="lg">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-isa-gray-700 mb-1.5">
                      Seu nome *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      className="w-full border border-isa-gray-200 rounded-button px-4 py-2.5 text-sm text-isa-gray-800 focus:outline-none focus:ring-2 focus:ring-isa-blue-500"
                      placeholder="João Silva"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-isa-gray-700 mb-1.5">
                      Empresa / Operadora *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.company}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, company: e.target.value }))
                      }
                      className="w-full border border-isa-gray-200 rounded-button px-4 py-2.5 text-sm text-isa-gray-800 focus:outline-none focus:ring-2 focus:ring-isa-blue-500"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-isa-gray-700 mb-1.5">
                      E-mail corporativo *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className="w-full border border-isa-gray-200 rounded-button px-4 py-2.5 text-sm text-isa-gray-800 focus:outline-none focus:ring-2 focus:ring-isa-blue-500"
                      placeholder="joao@empresa.com.br"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-isa-gray-700 mb-1.5">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      className="w-full border border-isa-gray-200 rounded-button px-4 py-2.5 text-sm text-isa-gray-800 focus:outline-none focus:ring-2 focus:ring-isa-blue-500"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-isa-gray-700 mb-1.5">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="w-full border border-isa-gray-200 rounded-button px-4 py-2.5 text-sm text-isa-gray-800 focus:outline-none focus:ring-2 focus:ring-isa-blue-500 resize-none"
                    placeholder="Conte sobre sua empresa e o que você está buscando..."
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                  rightIcon={<Send className="w-4 h-4" />}
                >
                  Enviar solicitação
                </Button>
              </form>
            </Card>
          )}
        </div>
      </section>
    </>
  );
}
