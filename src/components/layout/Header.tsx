"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Search, Menu, ChevronDown } from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

const servicosLinks = [
  { label: "Atendimento Domiciliar", href: "/servicos/atendimento-domiciliar" },
  { label: "Exames Laboratoriais", href: "/servicos/exames-laboratoriais" },
  { label: "Vacinas", href: "/servicos/vacinas" },
  { label: "Testes Rápidos", href: "/servicos/testes-rapidos" },
];

const navLinks = [
  { label: "Quem Somos", href: "/sobre" },
  { label: "Tecnologia", href: "/como-funciona" },
  { label: "Oportunidades", href: "/portal-isa" },
];

export function Header() {
  const scrolled = useScrollHeader();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [servicosOpen, setServicosOpen] = useState(false);
  const servicosRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 bg-white transition-all duration-300",
          scrolled ? "shadow-header" : "border-b border-isa-gray-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo size="sm" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Serviços dropdown */}
              <div
                ref={servicosRef}
                className="relative"
                onMouseEnter={() => setServicosOpen(true)}
                onMouseLeave={() => setServicosOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-isa-gray-700 hover:text-isa-pink-500 transition-colors">
                  Serviços
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", servicosOpen && "rotate-180")} />
                </button>
                {servicosOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-lg border border-isa-gray-100 py-2 z-50">
                    {servicosLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-isa-gray-700 hover:bg-isa-pink-50 hover:text-isa-pink-500 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-isa-gray-700 hover:text-isa-pink-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="text-isa-gray-500 hover:text-isa-pink-500 transition-colors p-1"
                aria-label="Buscar"
              >
                <Search className="w-5 h-5" />
              </button>

              <a
                href="https://wa.me/5511913249594"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div>
                  <p className="text-xs text-isa-gray-400 leading-none">WhatsApp</p>
                  <p className="text-sm font-semibold text-isa-gray-800 leading-none">(11) 91324-9594</p>
                </div>
              </a>

              <Link
                href="/contato"
                className="bg-isa-pink-500 hover:bg-isa-pink-600 text-white text-sm font-semibold px-5 py-2.5 rounded-pill transition-colors whitespace-nowrap"
              >
                Entrar em Contato
              </Link>
            </div>

            {/* Mobile */}
            <div className="flex lg:hidden items-center gap-2">
              <button onClick={() => setSearchOpen(true)} className="p-2 text-isa-gray-600" aria-label="Buscar">
                <Search className="w-5 h-5" />
              </button>
              <button onClick={() => setMobileOpen(true)} className="p-2 text-isa-gray-600" aria-label="Menu">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="bg-white rounded-card shadow-card-hover w-full max-w-xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border border-isa-gray-200 rounded-pill px-4 py-3">
              <Search className="w-5 h-5 text-isa-gray-400 flex-shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="O que você procura?"
                className="flex-1 text-isa-gray-800 placeholder-isa-gray-400 outline-none text-sm"
              />
              <kbd className="text-xs text-isa-gray-400 bg-isa-gray-100 px-2 py-1 rounded">ESC</kbd>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
