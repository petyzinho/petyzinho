"use client";

import { Users, Star, Clock, Award } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { icon: Users, value: 500, suffix: " milhões+", label: "Atendimentos realizados" },
  { icon: Star, value: 90, suffix: "+", label: "NPS — Índice de satisfação", prefix: "" },
  { icon: Clock, value: 24, suffix: "h", label: "Tempo médio de agendamento", prefix: "< " },
  { icon: Award, value: 10, suffix: "+ anos", label: "De experiência" },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-isa-gray-50 border-y border-isa-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-isa-pink-50 flex items-center justify-center mb-3">
                <stat.icon className="w-6 h-6 text-isa-pink-500" />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-isa-gray-800 mb-1">
                {stat.prefix && <span>{stat.prefix}</span>}
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-isa-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
