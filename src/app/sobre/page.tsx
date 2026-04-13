"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PartnersStrip } from "@/components/home/PartnersStrip";
import { staggerContainer, fadeUpVariant } from "@/lib/animations";
import { Heart, Target, Shield, Zap, ArrowRight } from "lucide-react";

const values = [
  {
    icon: <Heart className="w-6 h-6 text-red-400 fill-current" />,
    title: "Humanidade",
    description:
      "Colocamos as pessoas no centro de tudo. Cada atendimento é uma oportunidade de transformar vidas.",
  },
  {
    icon: <Shield className="w-6 h-6 text-isa-blue-500" />,
    title: "Segurança",
    description:
      "Validação rigorosa, dados protegidos e processos seguros para profissionais e pacientes.",
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: "Inovação",
    description:
      "Tecnologia a serviço da saúde: otimizamos processos para que o cuidado chegue mais rápido.",
  },
  {
    icon: <Target className="w-6 h-6 text-isa-green-500" />,
    title: "Excelência",
    description:
      "Padrão elevado em cada atendimento, desde a validação do profissional até a avaliação do paciente.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-isa-blue-900 to-isa-blue-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-isa-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">
              Sobre a ISA Saúde
            </p>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6 leading-tight">
              Tecnologia e cuidado.
              <br />
              Humano acima de tudo.
            </h1>
            <p className="text-isa-blue-100 text-lg leading-relaxed">
              A ISA Saúde nasceu da vontade de transformar o acesso ao cuidado
              domiciliar no Brasil — conectando profissionais de saúde
              qualificados a quem mais precisa, com tecnologia, segurança e
              humanidade.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-isa-gray-900 mb-4">
                Nossa Missão
              </h2>
              <p className="text-isa-gray-600 text-lg leading-relaxed mb-6">
                Democratizar o acesso a cuidados de saúde domiciliar de
                qualidade, conectando profissionais validados a pacientes que
                precisam de atenção médica em casa — com rapidez, segurança e
                dignidade.
              </p>
              <p className="text-isa-gray-600 leading-relaxed">
                Funcionamos como uma ponte entre dois mundos: profissionais de
                saúde que buscam flexibilidade e mais renda, e pacientes que
                precisam de cuidado especializado sem sair de casa. Nossa
                plataforma garante a qualidade, a segurança e a eficiência de
                cada conexão.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-isa-gray-50 rounded-card p-8"
            >
              <p className="font-display font-bold text-xl text-isa-gray-900 mb-6">
                Em números
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2020", label: "Fundada em" },
                  { value: "1.200+", label: "Profissionais" },
                  { value: "50+", label: "Cidades atendidas" },
                  { value: "10k+", label: "Atendimentos" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-display font-extrabold text-3xl text-isa-blue-600">
                      {s.value}
                    </p>
                    <p className="text-sm text-isa-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-isa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Nossos Valores"
            title="O que nos move"
            subtitle="Princípios que guiam cada decisão e cada atendimento na ISA Saúde."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUpVariant}>
                <Card hover padding="lg" className="h-full text-center">
                  <div className="w-14 h-14 bg-isa-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {v.icon}
                  </div>
                  <h3 className="font-display font-bold text-isa-gray-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-isa-gray-600 leading-relaxed">
                    {v.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <PartnersStrip />

      {/* CTA */}
      <section className="py-20 bg-isa-blue-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Faça parte dessa história
          </h2>
          <p className="text-isa-blue-100 text-lg mb-8">
            Seja como profissional, paciente ou parceiro — a ISA Saúde tem um
            lugar para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/trabalhe-conosco"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="bg-white text-isa-blue-700 hover:bg-isa-gray-100"
            >
              Trabalhe Conosco
            </Button>
            <Button
              href="/contato"
              variant="ghost"
              size="lg"
              className="text-white border-2 border-white/30 hover:bg-white/10"
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
