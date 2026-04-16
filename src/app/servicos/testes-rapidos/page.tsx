import Link from "next/link";
import { Zap, Clock, CheckCircle, ShieldCheck, ChevronDown, Phone } from "lucide-react";

const testes = [
  { name: "COVID-19 (Antígeno)", time: "15 min", desc: "Resultado rápido com alta precisão" },
  { name: "COVID-19 (PCR)", time: "24–48h", desc: "Padrão ouro para diagnóstico de COVID" },
  { name: "Influenza A e B", time: "15 min", desc: "Distingue gripe A e B rapidamente" },
  { name: "HIV", time: "30 min", desc: "Triagem confidencial e segura" },
  { name: "Hepatite B e C", time: "30 min", desc: "Detecção precoce é fundamental" },
  { name: "Dengue NS1 + IgM/IgG", time: "20 min", desc: "Diagnóstico em fases aguda e tardia" },
  { name: "Sífilis", time: "20 min", desc: "Triagem rápida e precisa" },
  { name: "Streptococo A", time: "10 min", desc: "Diagnóstico de faringite estreptocócica" },
];

const faqs = [
  {
    question: "Os testes rápidos são confiáveis?",
    answer: "Sim. Os testes utilizados pela ISA Saúde são aprovados pela ANVISA e seguem os mesmos padrões de qualidade de clínicas e hospitais.",
  },
  {
    question: "Como recebo o resultado?",
    answer: "Para testes com resultado imediato, o profissional informa na hora. Para PCR e outros testes laboratoriais, o resultado é enviado por e-mail em até 48h.",
  },
  {
    question: "Preciso estar em isolamento para solicitar o teste de COVID?",
    answer: "Não é necessário. Basta agendar normalmente. Informe seus sintomas no momento do agendamento para que o profissional tome as precauções adequadas.",
  },
];

export default function TestesRapidosPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-isa-dark via-[#0a3a5c] to-isa-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-isa-teal-500/20 text-isa-teal-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Testes Rápidos
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Resultado em <span className="text-isa-pink-400">minutos</span>, em casa
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Diagnóstico rápido e preciso sem sair de casa. Nossa equipe realiza o teste no seu endereço com total segurança e conforto.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="inline-block bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                Agendar Teste
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" /> 0800 720 1012
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-isa-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "15 min", label: "Resultado COVID-19" },
              { value: "24h", label: "Disponível sempre" },
              { value: "8+", label: "Tipos de teste" },
              { value: "ANVISA", label: "Testes aprovados" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-black text-isa-pink-500">{stat.value}</p>
                <p className="text-sm text-isa-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tests catalog */}
      <section className="py-20 bg-isa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">Testes disponíveis</h2>
            <p className="text-isa-gray-500">Diagnóstico ágil para as principais doenças infecciosas</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {testes.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-isa-gray-200 hover:border-isa-pink-200 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <Zap className="w-5 h-5 text-isa-pink-500" />
                  <span className="text-xs font-bold text-isa-teal-600 bg-isa-teal-50 px-2.5 py-1 rounded-full">{t.time}</span>
                </div>
                <h3 className="font-bold text-isa-gray-800 mb-1">{t.name}</h3>
                <p className="text-xs text-isa-gray-500">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">Como funciona</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "1", icon: <Clock className="w-6 h-6 text-isa-pink-500" />, title: "Agende em minutos", desc: "Escolha o teste, data e horário pelo nosso portal de agendamento" },
              { num: "2", icon: <ShieldCheck className="w-6 h-6 text-isa-teal-500" />, title: "Profissional em casa", desc: "Um profissional qualificado realiza o teste com todos os equipamentos de segurança" },
              { num: "3", icon: <CheckCircle className="w-6 h-6 text-isa-pink-500" />, title: "Resultado rápido", desc: "Receba o resultado no momento ou no seu e-mail em até 48h para PCR" },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-isa-gray-50 flex items-center justify-center mx-auto mb-4 border border-isa-gray-100">
                  {step.icon}
                </div>
                <div className="text-4xl font-black text-isa-gray-100 mb-2">{step.num}</div>
                <h3 className="font-bold text-isa-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-isa-gray-500 max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-isa-gray-50">
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
      <section className="py-16 bg-gradient-to-r from-isa-teal-500 to-isa-pink-500 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Descubra rapidamente como está sua saúde</h2>
          <p className="text-white/80 mb-8">Agende seu teste agora e receba o resultado ainda hoje</p>
          <Link
            href="/contato"
            className="inline-block bg-white text-isa-teal-600 font-semibold px-10 py-4 rounded-full hover:bg-white/90 transition-colors"
          >
            Agendar teste
          </Link>
        </div>
      </section>
    </main>
  );
}
