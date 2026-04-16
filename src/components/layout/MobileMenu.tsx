"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

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
  { label: "Contato", href: "/contato" },
];

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [servicosOpen, setServicosOpen] = useState(false);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-y-0 right-0 flex max-w-full">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="w-screen max-w-sm bg-white shadow-xl flex flex-col">
              <div className="flex items-center justify-between px-6 py-4 border-b border-isa-gray-200">
                <Link href="/" onClick={onClose}>
                  <Logo size="sm" />
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 rounded-button text-isa-gray-600 hover:bg-isa-gray-100 transition-colors"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="space-y-1">
                  {/* Serviços expandable */}
                  <li>
                    <button
                      onClick={() => setServicosOpen(!servicosOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-button text-isa-gray-800 font-medium hover:bg-isa-pink-50 hover:text-isa-pink-500 transition-colors"
                    >
                      Serviços
                      <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", servicosOpen && "rotate-180")} />
                    </button>
                    {servicosOpen && (
                      <ul className="mt-1 ml-4 space-y-1 border-l-2 border-isa-pink-100 pl-3">
                        {servicosLinks.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={onClose}
                              className="block px-3 py-2 rounded-button text-sm text-isa-gray-600 hover:text-isa-pink-500 transition-colors"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="block px-4 py-3 rounded-button text-isa-gray-800 font-medium hover:bg-isa-pink-50 hover:text-isa-pink-500 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-isa-gray-200">
                  <Link
                    href="/contato"
                    onClick={onClose}
                    className="block w-full text-center bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-semibold py-3 rounded-pill transition-colors"
                  >
                    Entrar em Contato
                  </Link>
                </div>
              </nav>

              <div className="px-6 py-4 border-t border-isa-gray-200 bg-isa-gray-50">
                <a
                  href="https://wa.me/5511913249594"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div>
                    <p className="text-xs text-isa-gray-500">WhatsApp</p>
                    <p className="text-sm font-bold text-isa-gray-800">(11) 91324-9594</p>
                  </div>
                </a>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
