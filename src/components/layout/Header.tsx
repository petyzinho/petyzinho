"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Phone, Search, Menu, ChevronDown,
  FlaskConical, Syringe, Home, Briefcase,
  TrendingUp, Building2, ArrowRight,
} from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

const megaMenu = {
  servicos: [
    {
      icon: FlaskConical,
      iconBg: "bg-isa-pink-50",
      iconColor: "text-isa-pink-500",
      label: "Exames Laboratoriais",
      desc: "Coleta domiciliar com resultado digital",
      href: "/exames-laboratoriais",
    },
    {
      icon: Syringe,
      iconBg: "bg-isa-teal-50",
      iconColor: "text-isa-teal-500",
      label: "Vacinas",
      desc: "Proteja sua família em casa",
      href: "/servicos/vacinas",
    },
    {
      icon: Home,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
      label: "Atendimento Domiciliar",
      desc: "Cuidado hospitalar no conforto de casa",
      href: "/servicos/atendimento-domiciliar",
    },
  ],
  carreira: [
    {
      icon: Briefcase,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
      label: "Trabalhe Conosco",
      desc: "Cadastre-se como profissional",
      href: "/profissionais",
    },
    {
      icon: TrendingUp,
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      label: "Ganhos e Oportunidades",
      desc: "Veja quanto você pode ganhar",
      href: "/profissionais#ganhos",
    },
  ],
  empresas: [
    {
      icon: Building2,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      label: "Soluções para Empresas",
      desc: "Saúde corporativa e exames em escala",
      href: "/empresas",
    },
  ],
};

const navLinks = [
  { label: "Quem Somos", href: "/sobre" },
  { label: "Tecnologia", href: "/como-funciona" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const scrolled = useScrollHeader();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

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
              {/* Portal do ISA mega dropdown */}
              <div
                ref={megaRef}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors",
                  megaOpen ? "text-isa-pink-500" : "text-isa-gray-700 hover:text-isa-pink-500"
                )}>
                  Portal do ISA
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", megaOpen && "rotate-180")} />
                </button>

                {/* Mega menu panel */}
                <div className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[620px] bg-white rounded-2xl shadow-xl border border-isa-gray-100 overflow-hidden transition-all duration-200 z-50",
                  megaOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                )}>
                  {/* Arrow */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-isa-gray-100 rotate-45" />

                  <div className="grid grid-cols-3 gap-0 p-6">
                    {/* SERVIÇOS */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-isa-gray-400 mb-3 px-1">
                        Serviços
                      </p>
                      <div className="space-y-1">
                        {megaMenu.servicos.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start gap-3 p-2 rounded-xl hover:bg-isa-gray-50 group transition-colors"
                          >
                            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5", item.iconBg)}>
                              <item.icon className={cn("w-4 h-4", item.iconColor)} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-isa-gray-800 group-hover:text-isa-pink-500 transition-colors leading-tight">{item.label}</p>
                              <p className="text-xs text-isa-gray-400 mt-0.5 leading-tight">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="px-3">
                      <div className="h-full border-l border-isa-gray-100 ml-0 pl-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-isa-gray-400 mb-3 px-1">
                          Carreira
                        </p>
                        <div className="space-y-1">
                          {megaMenu.carreira.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-start gap-3 p-2 rounded-xl hover:bg-isa-gray-50 group transition-colors"
                            >
                              <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5", item.iconBg)}>
                                <item.icon className={cn("w-4 h-4", item.iconColor)} />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-isa-gray-800 group-hover:text-isa-pink-500 transition-colors leading-tight">{item.label}</p>
                                <p className="text-xs text-isa-gray-400 mt-0.5 leading-tight">{item.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* EMPRESAS */}
                    <div className="border-l border-isa-gray-100 pl-3">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-isa-gray-400 mb-3 px-1">
                        Empresas
                      </p>
                      <div className="space-y-1">
                        {megaMenu.empresas.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-start gap-3 p-2 rounded-xl hover:bg-isa-gray-50 group transition-colors"
                          >
                            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5", item.iconBg)}>
                              <item.icon className={cn("w-4 h-4", item.iconColor)} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-isa-gray-800 group-hover:text-isa-pink-500 transition-colors leading-tight">{item.label}</p>
                              <p className="text-xs text-isa-gray-400 mt-0.5 leading-tight">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Highlight CTA */}
                      <div className="mt-4 p-3 bg-gradient-to-br from-isa-pink-500 to-isa-teal-500 rounded-xl text-white">
                        <p className="text-xs font-bold mb-1">Central 24h</p>
                        <p className="text-sm font-black">0800 720 1012</p>
                        <Link
                          href="/contato"
                          className="mt-2 flex items-center gap-1 text-xs font-semibold text-white/80 hover:text-white transition-colors"
                        >
                          Fale conosco <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
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
