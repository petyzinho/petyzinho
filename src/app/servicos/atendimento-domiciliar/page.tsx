import Link from "next/link";
import { Heart, ShieldCheck, Clock, Users, Star, Phone, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-6 h-6 text-isa-pink-500" />,
    title: "Atendimento 24h",
    description: "Nossa equipe está disponível a qualquer hora do dia ou da noite para cuidar da saúde do seu familiar.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-isa-teal-500" />,
    title: "Equipe Especializada",
    description: "Médicos, enfermeiros, fisioterapeutas e outros profissionais de saúde altamente qualificados.",
  },
  {
    icon: <Heart className="w-6 h-6 text-isa-pink-500" />,
    title: "Cuidado Humanizado",
    description: "Tratamos cada paciente com atenção, carinho e respeito, como se fosse da nossa própria família.",
  },
  {
    icon: <Users className="w-6 h-6 text-isa-teal-500" />,
    title: "Apoio à Família",
    description: "Orientamos e apoiamos os familiares durante todo o processo de cuidado domiciliar.",
  },
];

const services = [
  "Internação Domiciliar",
  "Cuidados Pós-Operatórios",
  "Curativo e Procedimentos",
  "Monitoramento de Sinais Vitais",
  "Administração de Medicamentos",
  "Fisioterapia Domiciliar",
  "Cuidados Paliativos",
  "Reabilitação em Casa",
];

export default function AtendimentoDomiciliarPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-isa-dark via-[#0a3a5c] to-isa-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-isa-pink-500/20 text-isa-pink-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Atendimento Domiciliar
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Cuidado de qualidade <span className="text-isa-pink-400">onde você está</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Levamos uma equipe multiprofissional de saúde até a sua casa para garantir o melhor cuidado com todo o conforto e segurança que você merece.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="inline-block bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                Solicitar Atendimento
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

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">Por que escolher a ISA?</h2>
            <p className="text-isa-gray-500 max-w-xl mx-auto">
              Somos referência em atendimento domiciliar com mais de 3,5 milhões de vidas cuidadas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-isa-gray-50 rounded-2xl p-6 border border-isa-gray-100 hover:border-isa-pink-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                  {f.icon}
                </div>
                <h3 className="font-bold text-isa-gray-800 mb-2">{f.title}</h3>
                <p className="text-sm text-isa-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-isa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-4">O que oferecemos</h2>
              <p className="text-isa-gray-500 mb-8 leading-relaxed">
                Uma gama completa de serviços de saúde domiciliar para atender todas as necessidades do paciente e de sua família, com qualidade hospitalar no conforto de casa.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-isa-pink-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-isa-pink-500" />
                    </div>
                    <span className="text-sm font-medium text-isa-gray-700">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-isa-pink-500 to-isa-teal-500 rounded-3xl p-8 text-white">
              <Star className="w-10 h-10 mb-4 opacity-80" />
              <p className="text-2xl font-black mb-2">NPS 90+</p>
              <p className="text-white/80 mb-6">Nossos pacientes recomendam a ISA Saúde</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold">3,5M+ vidas</p>
                    <p className="text-sm text-white/70">cuidadas com excelência</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold">5 estados</p>
                    <p className="text-sm text-white/70">SP, MG, GO, DF e BA</p>
                  </div>
                </div>
              </div>
              <Link
                href="/contato"
                className="mt-8 inline-flex items-center gap-2 bg-white text-isa-pink-600 font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
              >
                Fale conosco <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
