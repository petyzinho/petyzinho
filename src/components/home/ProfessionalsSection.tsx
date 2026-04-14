import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function ProfessionalsSection() {
  return (
    <section className="py-20 bg-isa-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-black text-isa-gray-800 mb-4">
              Você é um Profissional de Saúde?
            </h2>
            <p className="text-isa-gray-600 mb-6 leading-relaxed">
              Faça parte da maior rede de profissionais de saúde domiciliar do Brasil. Trabalhe com autonomia, flexibilidade e propósito.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Ganhe até 4x mais",
                "Trabalhe com propósito",
                "Horário no seu favor",
                "Tecnologia no seu favor",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-isa-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-isa-teal-500 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/para-profissionais"
              className="inline-block bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-semibold px-8 py-3.5 rounded-pill transition-colors"
            >
              Seja um ISA
            </Link>
          </div>

          {/* Right: dark teal stats card */}
          <div className="rounded-2xl p-10 text-white" style={{ background: "linear-gradient(135deg, #0097A7 0%, #00BCD4 100%)" }}>
            <div className="text-center mb-8">
              <p className="text-5xl font-black mb-1">3,5 milhões +</p>
              <p className="text-isa-teal-100 text-sm">vidas atendidas</p>
            </div>
            <div className="grid grid-cols-2 gap-6 border-t border-white/20 pt-6">
              <div className="text-center">
                <p className="text-3xl font-black mb-1">4x</p>
                <p className="text-isa-teal-100 text-xs">Mais ganhos vs. CLT</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black mb-1">100%</p>
                <p className="text-isa-teal-100 text-xs">Plataforma digital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
