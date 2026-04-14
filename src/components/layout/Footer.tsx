import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

const services = [
  { label: "Hospital em Casa", href: "/para-pacientes" },
  { label: "Internação Domiciliar", href: "/para-pacientes" },
  { label: "Atenção Domiciliar", href: "/para-pacientes" },
  { label: "Cuidados Paliativos", href: "/para-pacientes" },
  { label: "Visitas Domiciliares", href: "/para-pacientes" },
  { label: "Programa de Controle", href: "/para-pacientes" },
];

const empresa = [
  { label: "Quem Somos", href: "/sobre" },
  { label: "Tecnologia", href: "/como-funciona" },
  { label: "Seja um ISA", href: "/para-profissionais" },
  { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { label: "Parceiros", href: "/para-parceiros" },
];

export function Footer() {
  return (
    <footer className="bg-isa-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex flex-col leading-none mb-5">
              <span className="text-2xl font-black tracking-tight" style={{ color: "#00BCD4" }}>ISA</span>
              <span className="text-xs font-bold tracking-widest -mt-1" style={{ color: "#E91E8C" }}>SAÚDE</span>
            </Link>
            <p className="text-isa-gray-400 text-sm leading-relaxed mb-2">
              O futuro da saúde domiciliar.
            </p>
            <p className="text-isa-gray-400 text-sm leading-relaxed">
              Levamos cuidado de excelência até você.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-isa-pink-500 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-isa-pink-500 rounded-full flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Serviços</h3>
            <ul className="space-y-2.5">
              {services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-isa-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Empresa</h3>
            <ul className="space-y-2.5">
              {empresa.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-isa-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-isa-teal-400 flex-shrink-0" />
                <span className="text-sm text-isa-gray-400">0800 720 1012</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-isa-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-isa-gray-400">SP, GO, DF, MG e mais</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-isa-gray-500">
          <p>© {new Date().getFullYear()} ISA Saúde. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/contato" className="hover:text-white transition-colors">Contato Legal</Link>
            <Link href="/contato" className="hover:text-white transition-colors">LGPD</Link>
            <Link href="/contato" className="hover:text-white transition-colors">Privacidade de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
