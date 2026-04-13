import Link from "next/link";
import { Heart, Share2, ExternalLink, Link2, QrCode } from "lucide-react";

const footerLinks = {
  empresa: [
    { label: "Sobre a ISA", href: "/sobre" },
    { label: "Como Funciona", href: "/como-funciona" },
    { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
    { label: "Contato", href: "/contato" },
  ],
  profissionais: [
    { label: "Para Profissionais", href: "/para-profissionais" },
    { label: "Cadastre-se", href: "/trabalhe-conosco" },
    { label: "Documentos Necessários", href: "/para-profissionais#documentos" },
  ],
  pacientes: [
    { label: "Para Pacientes", href: "/para-pacientes" },
    { label: "Nossos Serviços", href: "/para-pacientes#servicos" },
    { label: "Segurança e Qualidade", href: "/para-pacientes#seguranca" },
  ],
  parceiros: [
    { label: "Soluções B2B", href: "/para-parceiros" },
    { label: "Para Operadoras", href: "/para-parceiros#solucoes" },
    { label: "Seja um Parceiro", href: "/para-parceiros#contato" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-isa-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-isa-blue-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <span className="font-display font-bold text-xl">ISA Saúde</span>
            </Link>
            <p className="text-isa-gray-400 text-sm leading-relaxed mb-6">
              Conectamos profissionais de saúde validados a pacientes que
              precisam de cuidado em casa. Tecnologia, segurança e humanidade em
              cada atendimento.
            </p>

            {/* App download */}
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-lg p-2 w-16 h-16 flex items-center justify-center">
                <QrCode className="w-10 h-10 text-isa-gray-900" />
              </div>
              <div>
                <p className="text-xs text-isa-gray-400 mb-1">Baixe o app</p>
                <p className="text-sm font-semibold">App Store</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-isa-gray-400 mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-isa-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-isa-gray-400 mb-4">
              Profissionais
            </h3>
            <ul className="space-y-3">
              {footerLinks.profissionais.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-isa-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-isa-gray-400 mb-4">
              Pacientes
            </h3>
            <ul className="space-y-3">
              {footerLinks.pacientes.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-isa-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-isa-gray-400 mb-4">
              Parceiros
            </h3>
            <ul className="space-y-3">
              {footerLinks.parceiros.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-isa-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-isa-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-isa-gray-500">
            © {new Date().getFullYear()} ISA Saúde. Todos os direitos reservados.
            Feito com{" "}
            <Heart className="w-3.5 h-3.5 inline text-red-400 fill-current" />{" "}
            no Brasil.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-isa-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Share2 className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-isa-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-isa-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Link2 className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm text-isa-gray-500">
            <Link href="/privacidade" className="hover:text-white transition-colors">
              Privacidade
            </Link>
            <Link href="/termos" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
