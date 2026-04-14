"use client";

import Link from "next/link";
import { CheckCircle2, Star, MapPin, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
          {/* Left */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-black text-isa-gray-800 leading-tight mb-6">
              O futuro da pen drive é em casa
            </h1>
            <p className="text-lg text-isa-gray-600 mb-8 leading-relaxed max-w-lg">
              Cuidado domiciliar com tecnologia, segurança clínica e atendimento humanizado.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contato"
                className="border-2 border-isa-teal-500 text-isa-teal-600 font-semibold px-7 py-3 rounded-pill hover:bg-isa-teal-50 transition-colors text-sm"
              >
                Fale com Nosso Time
              </Link>
              <Link
                href="/para-pacientes"
                className="border-2 border-isa-teal-500 text-isa-teal-600 font-semibold px-7 py-3 rounded-pill hover:bg-isa-teal-50 transition-colors text-sm"
              >
                Conheça as Soluções
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-isa-teal-500" />
                <div>
                  <p className="font-bold text-isa-gray-800 text-sm">500 milhões+</p>
                  <p className="text-xs text-isa-gray-500">Atendimentos/ano</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-isa-teal-500" />
                <div>
                  <p className="font-bold text-isa-gray-800 text-sm">NPS 90+</p>
                  <p className="text-xs text-isa-gray-500">Satisfação</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-isa-teal-500" />
                <div>
                  <p className="font-bold text-isa-gray-800 text-sm">5 Estados</p>
                  <p className="text-xs text-isa-gray-500">SP, GO, DF, MG e +</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-isa-teal-50 via-isa-teal-100 to-isa-teal-200 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-40 h-40 mx-auto rounded-full bg-isa-teal-300/50 flex items-center justify-center mb-4">
                  <svg className="w-24 h-24 text-isa-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-isa-teal-700 font-semibold text-lg">Profissional ISA</p>
                <p className="text-isa-teal-600 text-sm mt-1">Atendimento domiciliar</p>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-card-hover p-4 max-w-[200px]">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-isa-pink-500" />
                <span className="text-xs font-bold text-isa-gray-800">Atendimento 24h</span>
              </div>
              <p className="text-xs text-isa-gray-500 leading-relaxed">
                Todos os dias da semana, 24 horas por dia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
