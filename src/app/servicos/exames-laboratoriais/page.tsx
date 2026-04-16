import Link from "next/link";
import { FlaskConical, CheckCircle, Calendar, FileText, ChevronDown, Phone, Mail, Clock } from "lucide-react";

const convenios = [
  "Allianz", "Amafresp", "Ameplan", "Amil",
  "Bem.care", "BioSaúde", "CAASP / OAB", "Cabesp",
  "Cassi", "Doctor Prime", "Economus", "Fundação CESP",
  "GAMA Saúde", "GS Garantia de Saúde", "NotreDame Intermédica Minas", "Biovida",
  "Central Nacional Unimed", "Pessoal Saúde", "UniHosp", "Care Plus",
  "Mediservice", "Leader", "Nipomed", "NotreDame Intermédica",
  "Omint", "Plena", "Porto Seguro", "Prevent Senior",
  "Sami", "Santa Casa de Mauá", "São Cristóvão Saúde", "Sompo Seguros",
];

const steps = [
  {
    number: "1",
    title: "Acesse nosso portal de agendamento",
    description:
      "Solicite sua coleta informando se tem um plano de saúde, ou se seu atendimento será particular.",
    icon: <Calendar className="w-6 h-6 text-isa-pink-500" />,
  },
  {
    number: "2",
    title: "Exames ou testes rápidos?",
    description:
      "Escolha uma das categorias dos nossos produtos: exames laboratoriais ou testes rápidos. Em seguida informe seus dados pessoais e endereço.",
    icon: <FlaskConical className="w-6 h-6 text-isa-pink-500" />,
  },
  {
    number: "3",
    title: "Escolha a melhor data e horário",
    description:
      "Selecione data e horário e nosso time de coletores irá até você. Cuide da sua saúde sem sair do conforto do seu lar.",
    icon: <CheckCircle className="w-6 h-6 text-isa-pink-500" />,
  },
  {
    number: "4",
    title: "Envie seu pedido médico",
    description:
      "Tem um pedido médico? Envie pra gente e deixe o resto com o nosso time. Se não o tiver, tudo bem! No portal você pode selecionar os exames que precisa.",
    icon: <FileText className="w-6 h-6 text-isa-pink-500" />,
  },
];

const faqs = [
  {
    question: "Como ocorrerá o retorno de resultado?",
    answer:
      "Os resultados são enviados diretamente para o seu e-mail cadastrado no momento do agendamento, em prazo que varia conforme o tipo de exame solicitado.",
  },
  {
    question: "Quais convênios a ISA obtém cobertura?",
    answer:
      "Trabalhamos com mais de 30 convênios. Consulte a lista completa na seção de convênios desta página. Em caso de dúvida, entre em contato pelo 0800 720 1012.",
  },
  {
    question: "Quais os documentos necessários?",
    answer:
      "Para coleta com convênio: pedido médico (quando aplicável), carteirinha do plano e documento de identidade. Para particular: apenas documento de identidade.",
  },
  {
    question: "A ISA realiza atendimentos em empresas?",
    answer:
      "Sim! Temos soluções corporativas para exames periódicos, campanhas de vacinação e saúde ocupacional. Entre em contato pelo nosso canal empresarial.",
  },
];

export default function ExamesLaboratoriaisPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-isa-dark via-[#0a3a5c] to-isa-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-isa-pink-500/20 text-isa-pink-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Exames Laboratoriais
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Seus exames <span className="text-isa-pink-400">em casa</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Entregar uma solução fácil e segura aos pacientes, levando saúde, cuidado e bem-estar no conforto do seu lar.
            </p>
            <Link
              href="/contato"
              className="inline-block bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              Agende agora
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">Como funciona</h2>
            <p className="text-isa-gray-500 max-w-xl mx-auto">
              Em poucos passos seus exames são coletados em casa com total segurança e conforto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-isa-gray-50 rounded-2xl p-6 h-full border border-isa-gray-100 hover:border-isa-pink-200 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-isa-pink-50 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-black text-isa-pink-100 mb-2">{step.number}</div>
                  <h3 className="font-bold text-isa-gray-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-isa-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Convênios */}
      <section className="py-20 bg-isa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-isa-gray-800 mb-3">Nossos parceiros da saúde</h2>
            <p className="text-isa-gray-500 max-w-2xl">
              A ISA está crescendo mais a cada dia que passa, e com isso estamos sempre em contato com convênios para que seus pacientes tenham a facilidade de serem atendidos aonde quer que estejam.
            </p>
          </div>

          <p className="text-sm font-semibold text-isa-gray-500 uppercase tracking-wider mb-6">Convênios</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {convenios.map((name) => (
              <div
                key={name}
                className="bg-white border border-isa-gray-200 rounded-2xl px-4 py-4 flex items-center justify-center text-center hover:border-isa-pink-200 hover:shadow-sm transition-all"
              >
                <span className="text-sm font-semibold text-isa-gray-700">{name}</span>
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

      {/* Contact strip */}
      <section className="py-12 bg-isa-gray-50 border-t border-isa-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm text-isa-gray-500">CNPJ: 41.157.300/0001-66</p>
              <p className="text-xs text-isa-gray-400">© Isa Home Lab Análises Clínicas e Vacinações Ltda.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-sm text-isa-gray-600">
                <Mail className="w-4 h-4 text-isa-teal-500" />
                sac@isalab.com.br
              </div>
              <div className="flex items-center gap-2 text-sm text-isa-gray-600">
                <Phone className="w-4 h-4 text-isa-teal-500" />
                (11) 94541-3845 / 4226-2900
              </div>
              <div className="flex items-center gap-2 text-sm text-isa-gray-600">
                <Clock className="w-4 h-4 text-isa-teal-500" />
                Seg–Sex: 7h–17h · Sáb: 7h–12h
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
