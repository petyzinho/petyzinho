import Link from "next/link";
import { ShieldCheck, Clock, CheckCircle, Calendar, ChevronDown, Phone } from "lucide-react";

const vacinas = [
  { name: "Influenza (Gripe)", detail: "Recomendada anualmente para todos os públicos" },
  { name: "Hepatite A e B", detail: "Proteção completa com esquema de doses" },
  { name: "Tríplice Viral", detail: "Sarampo, caxumba e rubéola" },
  { name: "Febre Amarela", detail: "Obrigatória para viagens e regiões de risco" },
  { name: "HPV", detail: "Prevenção do papilomavírus humano" },
  { name: "Pneumocócica", detail: "Indicada para crianças e idosos" },
  { name: "COVID-19", detail: "Reforço e esquemas primários disponíveis" },
  { name: "Varicela", detail: "Catapora — prevenção eficaz em dose única" },
  { name: "Dengue", detail: "Nova vacina com excelente proteção" },
  { name: "Meningocócica", detail: "Proteção contra meningite bacteriana" },
  { name: "Rotavírus", detail: "Essencial para crianças pequenas" },
  { name: "DTP / dTpa", detail: "Difteria, tétano e coqueluche" },
];

const faqs = [
  {
    question: "Preciso de prescrição médica para vacinar em casa?",
    answer: "A maioria das vacinas não exige prescrição. Para vacinas específicas (como dengue), pode ser necessária avaliação prévia. Nosso time orienta você no agendamento.",
  },
  {
    question: "Qual a validade das vacinas aplicadas em casa?",
    answer: "As vacinas aplicadas pela ISA Saúde são as mesmas utilizadas em clínicas e hospitais, com cadeia de frio garantida e dentro da validade.",
  },
  {
    question: "O convênio cobre vacinação domiciliar?",
    answer: "Depende do plano. Entre em contato e verificamos a cobertura do seu convênio. Para vacinação particular, temos preços competitivos.",
  },
];

export default function VacinasPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-isa-dark via-[#0a3a5c] to-isa-teal-600 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-isa-teal-500/20 text-isa-teal-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Vacinas
              </span>
              <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                Vacinação <span className="text-isa-pink-400">em casa</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Proteja sua família sem sair de casa. Nossa equipe vai até você com todo o equipamento necessário para uma vacinação segura e confortável.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contato"
                  className="inline-block bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
                >
                  Agendar Vacinação
                </Link>
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
                >
                  <Phone className="w-4 h-4" /> 0800 720 1012
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/isa-foto-bebe-rosa.webp"
                alt="Vacinação ISA Saúde - cuidado e carinho"
                className="w-full max-w-md object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { icon: <Calendar className="w-7 h-7 text-isa-pink-500" />, title: "Agende online", desc: "Escolha a vacina, data e horário pelo portal" },
              { icon: <ShieldCheck className="w-7 h-7 text-isa-teal-500" />, title: "Receba em casa", desc: "Profissional de saúde vai até você" },
              { icon: <CheckCircle className="w-7 h-7 text-isa-pink-500" />, title: "Carteira atualizada", desc: "Registro da vacina no seu prontuário" },
            ].map((step) => (
              <div key={step.title} className="bg-isa-gray-50 rounded-2xl p-8 border border-isa-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="font-bold text-isa-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-isa-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaccine catalog */}
      <section className="py-20 bg-isa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">Vacinas disponíveis</h2>
            <p className="text-isa-gray-500">Portfólio completo para todas as faixas etárias</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vacinas.map((v) => (
              <div key={v.name} className="bg-white rounded-2xl p-5 border border-isa-gray-200 hover:border-isa-teal-300 hover:shadow-sm transition-all flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-isa-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-isa-teal-500" />
                </div>
                <div>
                  <p className="font-bold text-isa-gray-800 text-sm">{v.name}</p>
                  <p className="text-xs text-isa-gray-500 mt-0.5">{v.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-isa-gray-800 text-center mb-10">Dúvidas frequentes</h2>
          <div className="divide-y divide-isa-gray-100">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium text-isa-gray-800 pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-isa-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-3 text-sm text-isa-gray-500 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-isa-pink-500 to-isa-teal-500 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Pronto para se vacinar em casa?</h2>
          <p className="text-white/80 mb-8">Agende agora e proteja quem você ama com toda comodidade</p>
          <Link
            href="/contato"
            className="inline-block bg-white text-isa-pink-600 font-semibold px-10 py-4 rounded-full hover:bg-white/90 transition-colors"
          >
            Agendar agora
          </Link>
        </div>
      </section>
    </main>
  );
}
