import Link from "next/link";
import {
  FlaskConical, Syringe, HeartPulse, Users,
  BarChart3, ShieldCheck, ArrowRight, CheckCircle,
  Building2, Clock, Phone,
} from "lucide-react";

const solutions = [
  {
    icon: FlaskConical,
    iconBg: "bg-isa-pink-50",
    iconColor: "text-isa-pink-500",
    title: "Exames Admissionais e Periódicos",
    desc: "Coleta domiciliar ou na empresa. Resultados digitais com integração ao RH.",
    items: ["Hemograma completo", "ASO / PCMSO", "Toxicológico", "Exames específicos por função"],
  },
  {
    icon: Syringe,
    iconBg: "bg-isa-teal-50",
    iconColor: "text-isa-teal-500",
    title: "Campanhas de Vacinação",
    desc: "Imunize sua equipe no próprio escritório ou na casa dos colaboradores.",
    items: ["Influenza (gripe)", "COVID-19 reforço", "Hepatite B", "Pacotes corporativos"],
  },
  {
    icon: HeartPulse,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    title: "Saúde Ocupacional",
    desc: "Programas de saúde preventiva para reduzir absenteísmo e aumentar produtividade.",
    items: ["Check-ups executivos", "Triagem de saúde mental", "Programas de bem-estar", "Relatórios de saúde coletiva"],
  },
  {
    icon: Users,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    title: "Benefício Saúde para Equipes",
    desc: "Ofereça atendimento domiciliar como benefício diferenciado para seus colaboradores.",
    items: ["Planos para equipes", "Cobertura familiar", "Portal do RH", "Relatórios mensais"],
  },
];

const benefits = [
  { icon: Clock, text: "Agilidade — resultados em até 24h" },
  { icon: ShieldCheck, text: "ANVISA e regulamentações atendidas" },
  { icon: BarChart3, text: "Relatórios analíticos para o RH" },
  { icon: Building2, text: "Atendimento in-company ou domiciliar" },
  { icon: CheckCircle, text: "Integração com sistemas de RH" },
  { icon: Users, text: "Gestão de saúde coletiva simplificada" },
];

const clients = [
  "Startups", "PMEs", "Grandes corporações",
  "Hospitais", "Clínicas", "Planos de saúde",
];

export default function EmpresasPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-isa-dark via-[#0a3a5c] to-isa-teal-600 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide">
              Soluções Corporativas
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-5 leading-tight">
              Saúde da sua equipe<br />
              <span className="text-isa-teal-300">sob medida</span>
            </h1>
            <p className="text-lg text-white/75 mb-8 leading-relaxed">
              Exames, vacinas e atendimento domiciliar para empresas de qualquer tamanho. Reduza absenteísmo, aumente produtividade e cuide de quem faz sua empresa funcionar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-bold px-8 py-4 rounded-full transition-colors"
              >
                Falar com especialista <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:08007201012"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" /> 0800 720 1012
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client types */}
      <section className="py-8 bg-white border-b border-isa-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-bold text-isa-gray-400 uppercase tracking-widest mr-2">Atendemos</p>
            {clients.map((c) => (
              <span key={c} className="text-sm font-medium text-isa-gray-600 bg-isa-gray-50 px-4 py-1.5 rounded-full border border-isa-gray-100">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-isa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">
              Nossas soluções
            </h2>
            <p className="text-isa-gray-500 max-w-xl mx-auto">
              Portfólio completo de serviços de saúde corporativa, com gestão simplificada e resultados mensuráveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {solutions.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 border border-isa-gray-100 hover:border-isa-teal-200 hover:shadow-md transition-all">
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <s.icon className={`w-6 h-6 ${s.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-isa-gray-800 text-lg mb-1">{s.title}</h3>
                    <p className="text-sm text-isa-gray-500">{s.desc}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-isa-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-isa-pink-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-5">
                Por que escolher a ISA para sua empresa?
              </h2>
              <p className="text-isa-gray-500 mb-8 leading-relaxed">
                Somos uma healthtech com presença em 5 estados, tecnologia própria e mais de 3,5 milhões de atendimentos realizados. Sua empresa ganha agilidade, compliance e saúde real para os colaboradores.
              </p>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-isa-teal-50 flex items-center justify-center flex-shrink-0">
                      <b.icon className="w-4 h-4 text-isa-teal-500" />
                    </div>
                    <span className="text-sm font-medium text-isa-gray-700">{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact CTA card */}
            <div className="bg-gradient-to-br from-isa-dark to-[#0a3a5c] rounded-3xl p-8 text-white">
              <Building2 className="w-10 h-10 text-isa-teal-400 mb-5" />
              <h3 className="text-2xl font-black mb-3">Fale com nosso time B2B</h3>
              <p className="text-white/70 mb-6 text-sm leading-relaxed">
                Montamos uma proposta personalizada para o tamanho e as necessidades da sua empresa. Sem compromisso.
              </p>
              <ul className="space-y-2 mb-7">
                {["Proposta em até 24h", "Sem fidelidade mínima", "Suporte dedicado", "Dashboard de gestão"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-isa-teal-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contato"
                className="flex items-center justify-center gap-2 bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-bold px-6 py-4 rounded-2xl transition-colors"
              >
                Solicitar proposta <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-center text-xs text-white/40 mt-4">ou ligue 0800 720 1012</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA strip */}
      <section className="py-14 bg-isa-gray-50 border-t border-isa-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black text-isa-gray-800">Pronto para transformar a saúde da sua empresa?</h3>
            <p className="text-isa-gray-500 text-sm mt-1">Mais de 500 empresas já confiam na ISA Saúde</p>
          </div>
          <Link
            href="/contato"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-bold px-8 py-3.5 rounded-full transition-colors"
          >
            Falar com especialista <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
