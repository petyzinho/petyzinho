"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TrendingUp, MapPin, Clock, ShieldCheck, Star,
  Smartphone, ChevronDown, ArrowRight, CheckCircle,
  Stethoscope, Heart, Activity, UserRound,
} from "lucide-react";

const earnings = [
  { role: "Enfermeiro(a)", min: "R$ 4.500", max: "R$ 9.000", highlight: false },
  { role: "Fisioterapeuta", min: "R$ 5.000", max: "R$ 10.000", highlight: true },
  { role: "Técnico de Enfermagem", min: "R$ 2.800", max: "R$ 6.000", highlight: false },
  { role: "Médico(a)", min: "R$ 8.000", max: "R$ 18.000", highlight: false },
  { role: "Cuidador(a)", min: "R$ 2.200", max: "R$ 4.500", highlight: false },
  { role: "Fonoaudiólogo(a)", min: "R$ 4.000", max: "R$ 8.500", highlight: false },
];

const vantagens = [
  { icon: TrendingUp, title: "Renda extra ou principal", desc: "Escolha quantas horas trabalhar e aumente seus ganhos no ritmo que preferir" },
  { icon: MapPin, title: "Trabalhe perto de você", desc: "Atendimentos na sua região. Sem horas perdidas no trânsito" },
  { icon: Clock, title: "Horários flexíveis", desc: "Você decide quando quer trabalhar. Compatível com outros empregos" },
  { icon: ShieldCheck, title: "Suporte completo", desc: "Suporte técnico, jurídico e administrativo da ISA para você se concentrar no que faz de melhor" },
  { icon: Smartphone, title: "App intuitivo", desc: "Gerencie seus atendimentos, agenda e pagamentos pelo app ISA Saúde" },
  { icon: Star, title: "Reconhecimento", desc: "Avaliações dos pacientes e programa de benefícios para profissionais destaque" },
];

const specialties = [
  { icon: Stethoscope, label: "Enfermagem" },
  { icon: Activity, label: "Fisioterapia" },
  { icon: Heart, label: "Cuidado" },
  { icon: UserRound, label: "Medicina" },
];

const faqs = [
  { q: "Preciso ter COREN/CRM ativo?", a: "Sim. Todos os profissionais devem possuir registro ativo no conselho de classe correspondente à sua área de atuação." },
  { q: "Como funciona o pagamento?", a: "Os pagamentos são realizados quinzenalmente via PIX ou transferência bancária, com extrato detalhado disponível no app." },
  { q: "Posso trabalhar em outra empresa ao mesmo tempo?", a: "Sim! A ISA opera em modelo de prestação de serviços, sem exclusividade. Você pode conciliar com outros vínculos empregatícios." },
  { q: "Qual a área de cobertura?", a: "Operamos em SP, MG, GO, DF e BA, com expansão contínua. Durante o cadastro você informa sua região de preferência." },
];

export default function ProfissionaisPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-isa-dark via-[#0a3a5c] to-[#0d6e5e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-0 w-96 h-96 bg-isa-pink-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-20 w-64 h-64 bg-isa-teal-500 rounded-full blur-2xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-block bg-isa-pink-500/20 text-isa-pink-300 text-sm font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              Portal do Profissional
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
              Aumente seus ganhos<br />
              <span className="text-isa-pink-400">com a ISA Saúde</span>
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-8 max-w-xl leading-relaxed">
              Conectamos profissionais de saúde a atendimentos domiciliares. Trabalhe com flexibilidade e ganhe mais do que no modelo tradicional.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-bold px-8 py-4 rounded-full transition-colors text-base"
              >
                Quero me cadastrar <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#ganhos"
                className="inline-block border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
              >
                Ver ganhos
              </a>
            </div>
            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { val: "3.500+", label: "Profissionais ativos" },
                { val: "5 estados", label: "SP, MG, GO, DF, BA" },
                { val: "NPS 90+", label: "Satisfação" },
              ].map((s) => (
                <div key={s.val}>
                  <p className="text-2xl font-black text-white">{s.val}</p>
                  <p className="text-xs text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialties quick nav */}
      <section className="bg-white border-b border-isa-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-3">
            {specialties.map((s) => (
              <button key={s.label} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-isa-gray-600 hover:bg-isa-pink-50 hover:text-isa-pink-500 transition-colors whitespace-nowrap flex-shrink-0">
                <s.icon className="w-4 h-4" />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings table */}
      <section id="ganhos" className="py-20 bg-isa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">
              Quanto você pode ganhar?
            </h2>
            <p className="text-isa-gray-500 max-w-lg mx-auto">
              Valores mensais estimados baseados em profissionais ativos na plataforma ISA
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {earnings.map((e) => (
              <div
                key={e.role}
                className={`rounded-2xl p-6 border-2 transition-all ${
                  e.highlight
                    ? "bg-gradient-to-br from-isa-pink-500 to-isa-teal-500 border-transparent text-white shadow-lg"
                    : "bg-white border-isa-gray-100 hover:border-isa-pink-200 hover:shadow-md"
                }`}
              >
                {e.highlight && (
                  <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full mb-3 inline-block">
                    Mais procurado
                  </span>
                )}
                <p className={`font-bold text-base mb-3 ${e.highlight ? "text-white" : "text-isa-gray-800"}`}>
                  {e.role}
                </p>
                <div className={`text-sm ${e.highlight ? "text-white/80" : "text-isa-gray-500"}`}>
                  <span>de </span>
                  <span className={`text-xl font-black ${e.highlight ? "text-white" : "text-isa-pink-500"}`}>{e.min}</span>
                </div>
                <div className={`text-sm mt-1 ${e.highlight ? "text-white/80" : "text-isa-gray-500"}`}>
                  <span>até </span>
                  <span className={`text-xl font-black ${e.highlight ? "text-white" : "text-isa-gray-800"}`}>{e.max}</span>
                  <span className="text-xs">/mês</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-isa-gray-400 mt-6">
            * Valores estimados. Ganhos reais variam conforme disponibilidade, região e especialidade.
          </p>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">
              Por que trabalhar com a ISA?
            </h2>
            <p className="text-isa-gray-500 max-w-lg mx-auto">
              Muito mais do que renda. Um ecossistema pensado para o profissional de saúde.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {vantagens.map((v) => (
              <div key={v.title} className="flex gap-4 p-5 rounded-2xl border border-isa-gray-100 hover:border-isa-pink-200 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-xl bg-isa-pink-50 flex items-center justify-center flex-shrink-0">
                  <v.icon className="w-5 h-5 text-isa-pink-500" />
                </div>
                <div>
                  <h3 className="font-bold text-isa-gray-800 mb-1">{v.title}</h3>
                  <p className="text-sm text-isa-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="py-20 bg-isa-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">Como começar</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Cadastre-se", desc: "Preencha seus dados, especialidade e região de atuação no formulário online" },
              { num: "02", title: "Validação", desc: "Nossa equipe valida seu registro profissional e documentação em até 48h" },
              { num: "03", title: "Comece a atender", desc: "Acesse o app, veja os atendimentos disponíveis na sua região e comece a ganhar" },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 border border-isa-gray-100 text-center">
                <div className="text-4xl font-black text-isa-pink-100 mb-2">{step.num}</div>
                <h3 className="font-bold text-isa-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-isa-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-bold px-10 py-4 rounded-full transition-colors"
            >
              Quero me cadastrar agora <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-isa-gray-800 text-center mb-10">Dúvidas frequentes</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-isa-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-isa-gray-800">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-isa-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-isa-gray-500 leading-relaxed border-t border-isa-gray-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-isa-dark to-[#0a3a5c] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <CheckCircle className="w-12 h-12 text-isa-teal-400 mx-auto mb-4" />
          <h2 className="text-3xl font-black mb-4">Pronto para começar?</h2>
          <p className="text-white/70 mb-8">
            Junte-se a mais de 3.500 profissionais que já fazem parte da ISA Saúde
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-bold px-10 py-4 rounded-full transition-colors"
          >
            Cadastrar-me agora <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
