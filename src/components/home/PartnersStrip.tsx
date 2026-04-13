"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const partners = [
  "Unimed",
  "Bradesco Saúde",
  "Amil",
  "SulAmérica",
  "NotreDame",
  "Hapvida",
];

export function PartnersStrip() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-isa-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 justify-center mb-8">
          <Shield className="w-5 h-5 text-isa-green-500" />
          <p className="text-sm font-semibold text-isa-gray-500 uppercase tracking-wider">
            Trabalhamos em parceria com as principais operadoras de saúde
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {partners.map((partner) => (
            <div
              key={partner}
              className="px-6 py-3 bg-isa-gray-100 rounded-lg text-isa-gray-400 hover:text-isa-gray-700 font-semibold text-sm transition-colors duration-200 cursor-default"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
