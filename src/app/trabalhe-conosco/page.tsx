"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppDownloadSection } from "@/components/home/AppDownloadSection";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";
import {
  Stethoscope,
  Activity,
  Users,
  Heart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const roles = [
  { icon: <Stethoscope className="w-6 h-6" />, label: "Enfermeiro(a)" },
  { icon: <Activity className="w-6 h-6" />, label: "Fisioterapeuta" },
  { icon: <Users className="w-6 h-6" />, label: "Técnico(a) em Enfermagem" },
  { icon: <Heart className="w-6 h-6" />, label: "Cuidador(a) de Idosos" },
  { icon: <Stethoscope className="w-6 h-6" />, label: "Fonoaudiólogo(a)" },
  { icon: <Activity className="w-6 h-6" />, label: "Nutricionista" },
];

const perks = [
  "Trabalhe no seu tempo, do seu jeito",
  "Renda extra sem compromisso de horário fixo",
  "Pagamento garantido por atendimento",
  "Cadastro 100% gratuito e digital",
  "Suporte em tempo real via app",
  "Validação profissional em 48 horas",
];

export default function TrabalheConoscoPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-isa-pink-700 to-isa-pink-600 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
            >
              <p className="text-isa-pink-200 font-semibold text-sm uppercase tracking-wider mb-3">
                Trabalhe Conosco
              </p>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-6 leading-tight">
                Seja parte da maior plataforma de home care do Brasil
              </h1>
              <p className="text-isa-pink-100 text-lg mb-8">
                Profissionais de saúde autônomos que trabalham com a ISA têm
                mais liberdade, mais renda e mais impacto na vida das pessoas.
              </p>
              <ul className="space-y-2 mb-8">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-isa-pink-100">
                    <CheckCircle2 className="w-4 h-4 text-isa-green-400 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="https://app.isasaude.com/cadastro"
                  external
                  variant="secondary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="bg-white text-isa-pink-700 hover:bg-isa-gray-100"
                >
                  Cadastrar pelo site
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card padding="lg" className="border-0">
                <p className="font-display font-bold text-isa-gray-900 text-xl mb-5">
                  Profissionais que podem se cadastrar
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {roles.map((role) => (
                    <div
                      key={role.label}
                      className="flex items-center gap-2.5 p-3 bg-isa-gray-50 rounded-button"
                    >
                      <span className="text-isa-pink-500">{role.icon}</span>
                      <span className="text-sm font-medium text-isa-gray-700">
                        {role.label}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-isa-gray-400 mt-4 text-center">
                  E muito mais categorias profissionais
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-isa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Mais de 1.200 profissionais já trabalham com a ISA"
            subtitle="Junte-se a eles e transforme sua carreira."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { value: "1.200+", label: "Profissionais ativos" },
              { value: "50+", label: "Cidades" },
              { value: "48h", label: "Validação em até" },
              { value: "100%", label: "Pagamento garantido" },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUpVariant}>
                <Card padding="md">
                  <p className="font-display font-extrabold text-3xl text-isa-pink-600 mb-1">
                    {s.value}
                  </p>
                  <p className="text-sm text-isa-gray-500">{s.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AppDownloadSection />
    </>
  );
}
