"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { X, Heart, QrCode, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Como Funciona", href: "/como-funciona" },
  { label: "Para Profissionais", href: "/para-profissionais" },
  { label: "Para Pacientes", href: "/para-pacientes" },
  { label: "Soluções", href: "/para-parceiros" },
  { label: "Sobre", href: "/sobre" },
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
          <div className="fixed inset-0 bg-isa-gray-900/50 backdrop-blur-sm" />
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
                <Link
                  href="/"
                  onClick={onClose}
                  className="flex items-center gap-2"
                >
                  <Heart className="w-6 h-6 text-isa-blue-500 fill-current" />
                  <span className="font-display font-bold text-lg text-isa-gray-900">
                    ISA Saúde
                  </span>
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
                        className="block px-4 py-3 rounded-button text-isa-gray-800 font-medium hover:bg-isa-gray-100 hover:text-isa-blue-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-isa-gray-200">
                  <Button
                    href="/trabalhe-conosco"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    onClick={onClose}
                  >
                    Trabalhe Conosco
                  </Button>
                </div>
              </nav>

              <div className="px-6 py-6 border-t border-isa-gray-200 bg-isa-gray-50">
                <p className="text-sm font-semibold text-isa-gray-800 mb-3 flex items-center gap-2">
                  <Download className="w-4 h-4 text-isa-blue-500" />
                  Baixe o app ISA Saúde
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-isa-gray-200 rounded-lg flex items-center justify-center">
                    <QrCode className="w-12 h-12 text-isa-gray-600" />
                  </div>
                  <div className="text-sm text-isa-gray-600">
                    <p>Aponte a câmera</p>
                    <p>do celular para</p>
                    <p>o QR code</p>
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
