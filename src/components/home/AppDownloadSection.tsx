"use client";

import { motion } from "framer-motion";
import { QrCode, Smartphone } from "lucide-react";
import { slideInLeft, slideInRight } from "@/lib/animations";

export function AppDownloadSection() {
  return (
    <section className="py-20 md:py-28 bg-isa-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-isa-blue-600 to-isa-blue-800 rounded-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left content */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="px-8 md:px-12 py-12 md:py-16 flex flex-col justify-center"
            >
              <span className="inline-block mb-4 text-xs font-bold uppercase tracking-wider text-isa-blue-200 bg-white/10 px-3 py-1 rounded-pill w-fit">
                Disponível no app
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                Tudo na palma da sua mão
              </h2>
              <p className="text-isa-blue-100 text-lg mb-8 leading-relaxed">
                Baixe o app ISA Saúde e tenha acesso completo: cadastro,
                chamados, histórico de atendimentos e pagamentos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start mb-8">
                <a
                  href="#"
                  className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition-colors"
                >
                  <Smartphone className="w-6 h-6" />
                  <div>
                    <p className="text-xs text-gray-400">Disponível na</p>
                    <p className="font-semibold text-sm">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition-colors"
                >
                  <Smartphone className="w-6 h-6" />
                  <div>
                    <p className="text-xs text-gray-400">Disponível no</p>
                    <p className="font-semibold text-sm">Google Play</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Right - QR Code */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-center p-12 bg-white/5"
            >
              <div className="text-center">
                <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <QrCode className="w-32 h-32 text-isa-gray-900" />
                </div>
                <p className="text-white font-semibold mb-1">
                  Aponte a câmera
                </p>
                <p className="text-isa-blue-200 text-sm">
                  App Store &amp; Google Play
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
