"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { X, Phone } from "lucide-react";

const navLinks = [
  { label: "Serviços", href: "/para-pacientes" },
  { label: "Quem Somos", href: "/sobre" },
  { label: "Tecnologia", href: "/como-funciona" },
  { label: "Seja um ISA", href: "/para-profissionais" },
  { label: "Contato", href: "/contato" },
];

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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
                <Link href="/" onClick={onClose} className="flex flex-col leading-none">
                  <span className="text-2xl font-black tracking-tight" style={{ color: "#00BCD4" }}>ISA</span>
                  <span className="text-xs font-bold tracking-widest -mt-1" style={{ color: "#E91E8C" }}>SAÚDE</span>
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
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-isa-teal-500" />
                  <div>
                    <p className="text-xs text-isa-gray-500">Central 24h</p>
                    <p className="text-sm font-bold text-isa-gray-800">0800 720 1012</p>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
