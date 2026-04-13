import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatBotWidget } from "@/components/chatbot/ChatBotWidget";

export const metadata: Metadata = {
  title: {
    default: "ISA Saúde | Cuidados de Saúde em Casa",
    template: "%s | ISA Saúde",
  },
  description:
    "A ISA Saúde conecta profissionais de saúde validados a pacientes que precisam de atendimento domiciliar. Tecnologia, segurança e cuidado para você e sua família.",
  keywords: [
    "home care",
    "atendimento domiciliar",
    "enfermagem domiciliar",
    "saúde em casa",
    "ISA Saúde",
  ],
  openGraph: {
    title: "ISA Saúde | Cuidados de Saúde em Casa",
    description:
      "Conectamos profissionais de saúde a atendimentos domiciliares com tecnologia, segurança e cuidado.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased bg-isa-gray-50 text-isa-gray-800">
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatBotWidget />
      </body>
    </html>
  );
}
