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

          {/* Brazil map image — filter swaps teal↔pink so attended states show in teal */}
          <div className="flex items-center justify-center">
            <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="swap-pink-teal" colorInterpolationFilters="sRGB">
                  <feColorMatrix type="matrix" values="
                    -0.2178  1.155   0  0  0.0628
                     0.8252  0.2110  0  0 -0.0362
                     0.4111  0.1515  0  0  0.4374
                     0       0       0  1  0
                  " result="swapped" />
                  <feColorMatrix in="swapped" type="saturate" values="2" />
                </filter>
              </defs>
            </svg>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mapa-brasil.png"
              alt="Mapa do Brasil com estados atendidos pela ISA Saúde"
              className="w-full max-w-lg object-contain"
              style={{ filter: "url(#swap-pink-teal)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
