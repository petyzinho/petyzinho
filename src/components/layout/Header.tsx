"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Search, Menu, QrCode, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { cn } from "@/lib/utils";
import * as Popover from "@radix-ui/react-popover";

const navLinks = [
  { label: "Como Funciona", href: "/como-funciona" },
  { label: "Para Profissionais", href: "/para-profissionais" },
  { label: "Para Pacientes", href: "/para-pacientes" },
  { label: "Soluções", href: "/para-parceiros" },
  { label: "Sobre", href: "/sobre" },
];

export function Header() {
  const scrolled = useScrollHeader();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-header"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 bg-isa-blue-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <span
                className={cn(
                  "font-display font-bold text-xl transition-colors",
                  scrolled ? "text-isa-gray-900" : "text-white"
                )}
              >
                ISA Saúde
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-button text-sm font-medium transition-colors hover:bg-white/10",
                    scrolled
                      ? "text-isa-gray-700 hover:text-isa-blue-600 hover:bg-isa-gray-100"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className={cn(
                  "hidden md:flex items-center justify-center w-9 h-9 rounded-button transition-colors",
                  scrolled
                    ? "text-isa-gray-600 hover:bg-isa-gray-100"
                    : "text-white/80 hover:bg-white/10"
                )}
                aria-label="Buscar"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* App download QR popover */}
              <Popover.Root>
                <Popover.Trigger asChild>
                  <button
                    className={cn(
                      "hidden md:flex items-center gap-1.5 px-3 py-2 rounded-button text-sm font-medium transition-colors",
                      scrolled
                        ? "text-isa-gray-600 hover:bg-isa-gray-100"
                        : "text-white/80 hover:bg-white/10"
                    )}
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden lg:inline">Baixe o app</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content
                    className="bg-white rounded-card shadow-card-hover p-5 w-56 z-50"
                    sideOffset={8}
                  >
                    <p className="font-semibold text-isa-gray-900 mb-1">
                      Baixe o app
                    </p>
                    <p className="text-sm text-isa-gray-600 mb-3">
                      Aponte a câmera para o QR code
                    </p>
                    <div className="w-24 h-24 mx-auto bg-isa-gray-100 rounded-lg flex items-center justify-center">
                      <QrCode className="w-16 h-16 text-isa-gray-700" />
                    </div>
                    <p className="text-xs text-center text-isa-gray-400 mt-2">
                      App Store &amp; Google Play
                    </p>
                    <Popover.Arrow className="fill-white" />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>

              {/* Trabalhe Conosco CTA */}
              <Button
                href="/trabalhe-conosco"
                variant="primary"
                size="sm"
                className="hidden md:inline-flex"
              >
                Trabalhe Conosco
              </Button>

              {/* Mobile hamburger */}
              <button
                className={cn(
                  "lg:hidden p-2 rounded-button transition-colors",
                  scrolled
                    ? "text-isa-gray-700 hover:bg-isa-gray-100"
                    : "text-white hover:bg-white/10"
                )}
                onClick={() => setMobileOpen(true)}
                aria-label="Abrir menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Search Dialog (lazy import via dynamic) */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-isa-gray-900/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="bg-white rounded-card shadow-card-hover w-full max-w-xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border border-isa-gray-200 rounded-button px-4 py-3">
              <Search className="w-5 h-5 text-isa-gray-400 flex-shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="Buscar no site... (ex: como me cadastrar)"
                className="flex-1 text-isa-gray-800 placeholder-isa-gray-400 outline-none text-sm"
              />
              <kbd className="text-xs text-isa-gray-400 bg-isa-gray-100 px-2 py-1 rounded">
                ESC
              </kbd>
            </div>
            <p className="text-xs text-isa-gray-400 mt-3 text-center">
              Dica: pressione{" "}
              <kbd className="bg-isa-gray-100 px-1 rounded">Cmd+K</kbd> para
              abrir a busca
            </p>
          </div>
        </div>
      )}
    </>
  );
}
