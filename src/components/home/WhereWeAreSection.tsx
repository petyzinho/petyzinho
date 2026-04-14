import { Building, MapPin, Users } from "lucide-react";

const states = [
  { icon: Building, name: "São Paulo", detail: "Capital, Grande SP e Interior" },
  { icon: MapPin, name: "Goiás e Distrito Federal", detail: "Goiânia, Brasília e Região" },
  { icon: MapPin, name: "Minas Gerais", detail: "Belo Horizonte e Região" },
  { icon: Users, name: "Bahia", detail: "Salvador e Região" },
];

export function WhereWeAreSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-isa-gray-800 text-center mb-3">Onde Estamos</h2>
        <p className="text-isa-gray-500 text-center mb-12 max-w-xl mx-auto">
          Levamos cuidado de excelência até você, com cobertura nas principais regiões do Brasil
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* State list */}
          <div className="space-y-4">
            {states.map((state) => (
              <div
                key={state.name}
                className="flex items-center gap-4 p-4 rounded-2xl border border-isa-gray-200 hover:border-isa-pink-200 hover:bg-isa-pink-50 transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-isa-pink-50 flex items-center justify-center flex-shrink-0">
                  <state.icon className="w-5 h-5 text-isa-pink-500" />
                </div>
                <div>
                  <p className="font-bold text-isa-gray-800">{state.name}</p>
                  <p className="text-sm text-isa-gray-500">{state.detail}</p>
                </div>
              </div>
            ))}
            <p className="text-xs text-isa-gray-400 italic pl-1 mt-2">
              Em constante expansão para levar saúde de qualidade aos mais brasileiros
            </p>
          </div>

          {/* Brazil map SVG */}
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 400 440" className="w-full max-w-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Simplified Brazil map shape */}
              <path d="M200 30 L280 50 L340 100 L360 160 L340 220 L300 260 L320 310 L280 360 L240 400 L200 420 L160 400 L120 360 L140 310 L100 260 L60 220 L40 160 L60 100 L120 50 Z" fill="#B2EBF2" stroke="white" strokeWidth="2"/>
              {/* Active states - highlighted in pink */}
              <ellipse cx="180" cy="200" rx="50" ry="40" fill="#E91E8C" opacity="0.7"/>
              <ellipse cx="210" cy="270" rx="45" ry="35" fill="#E91E8C" opacity="0.7"/>
              <ellipse cx="240" cy="320" rx="35" ry="25" fill="#E91E8C" opacity="0.5"/>
              {/* State labels */}
              <text x="175" y="195" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">GO/DF</text>
              <text x="210" y="268" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">MG</text>
              <text x="245" y="318" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">SP</text>
              {/* SP highlight */}
              <ellipse cx="160" cy="340" rx="30" ry="20" fill="#E91E8C" opacity="0.6"/>
              <text x="160" y="343" fill="white" fontSize="8" fontWeight="bold" textAnchor="middle">BA</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
