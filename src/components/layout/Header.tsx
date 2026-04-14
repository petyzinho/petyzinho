"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Search, Menu } from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Serviços", href: "/para-pacientes" },
  { label: "Quem Somos", href: "/sobre" },
  { label: "Tecnologia", href: "/como-funciona" },
  { label: "Seja um ISA", href: "/para-profissionais" },
];

export function Header() {
  const scrolled = useScrollHeader();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
            <Link href="/" className="flex-shrink-0 flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tight" style={{ color: "#00BCD4" }}>ISA</span>
              <span className="text-xs font-bold tracking-widest -mt-1" style={{ color: "#E91E8C" }}>SAÚDE</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
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

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-isa-teal-500" />
                <div>
                  <p className="text-xs text-isa-gray-400 leading-none">Central 24h</p>
                  <p className="text-sm font-semibold text-isa-gray-800 leading-none">0800 720 1012</p>
                </div>
              </div>

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
