"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Divider } from "@/components/ui/Divider";
import { staggerContainer, fadeUpVariant } from "@/lib/animations";

const stats = [
  { end: 1200, suffix: "+", label: "Profissionais cadastrados" },
  { end: 50, suffix: "+", label: "Cidades atendidas" },
  { end: 10000, suffix: "+", label: "Atendimentos realizados" },
  { end: 98, suffix: "%", label: "Índice de satisfação" },
];

export function StatsSection() {
  return (
    <>
      <Divider color="#1E3A8A" />
      <section className="bg-isa-blue-900 py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUpVariant}>
                <div className="font-display font-extrabold text-4xl md:text-5xl text-white mb-2">
                  <AnimatedCounter
                    end={stat.end}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-isa-blue-200 text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Divider color="#1E3A8A" flip className="bg-white" />
    </>
  );
}
