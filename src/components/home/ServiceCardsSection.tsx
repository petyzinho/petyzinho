import Link from "next/link";
import { FlaskConical, Syringe, Home, Briefcase, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: FlaskConical,
    iconBg: "bg-isa-pink-500",
    title: "Exames Laboratoriais",
    desc: "Coleta em domicílio com resultado digital no mesmo dia",
    href: "/exames-laboratoriais",
    accent: "group-hover:border-isa-pink-200",
    tag: "Agende agora",
  },
  {
    icon: Home,
    iconBg: "bg-isa-teal-500",
    title: "Atendimento Domiciliar",
    desc: "Cuidado hospitalar no conforto da sua casa, 24 horas",
    href: "/servicos/atendimento-domiciliar",
    accent: "group-hover:border-isa-teal-200",
    tag: "Solicitar",
  },
  {
    icon: Syringe,
    iconBg: "bg-purple-500",
    title: "Vacinas",
    desc: "Proteja sua família com vacinação domiciliar segura",
    href: "/servicos/vacinas",
    accent: "group-hover:border-purple-200",
    tag: "Ver vacinas",
  },
  {
    icon: Briefcase,
    iconBg: "bg-orange-500",
    title: "Trabalhe Conosco",
    desc: "Seja um profissional ISA e aumente seus ganhos",
    href: "/profissionais",
    accent: "group-hover:border-orange-200",
    tag: "Cadastrar-se",
  },
];

export function ServiceCardsSection() {
  return (
    <section className="py-16 bg-isa-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-isa-gray-800">
              O que você precisa?
            </h2>
            <p className="text-isa-gray-500 mt-1 text-sm">Escolha uma das opções abaixo</p>
          </div>
          <Link
            href="/sobre"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-isa-pink-500 hover:text-isa-pink-600 transition-colors"
          >
            Ver tudo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`group relative bg-white rounded-2xl p-5 border-2 border-isa-gray-100 hover:shadow-md transition-all duration-200 flex flex-col ${card.accent}`}
            >
              <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-isa-gray-800 text-sm leading-tight mb-1.5">{card.title}</h3>
              <p className="text-xs text-isa-gray-500 leading-relaxed flex-1">{card.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-isa-pink-500 group-hover:gap-2 transition-all">
                {card.tag} <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
