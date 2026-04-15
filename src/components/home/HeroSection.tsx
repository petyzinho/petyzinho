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
            <span className="inline-block bg-isa-pink-50 text-isa-pink-600 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Saúde domiciliar
            </span>
            <h1 className="text-5xl lg:text-6xl font-black text-isa-gray-800 leading-tight mb-6">
              O futuro da saúde<br />
              <span style={{ color: "#E91E8C" }}>é em casa</span>
            </h1>
            <p className="text-lg text-isa-gray-600 mb-8 leading-relaxed max-w-lg">
              Cuidado domiciliar com tecnologia, segurança clínica e atendimento humanizado. Conectamos você aos melhores profissionais de saúde.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contato"
                className="bg-isa-pink-500 hover:bg-isa-pink-600 text-white font-semibold px-7 py-3.5 rounded-pill transition-colors text-sm"
              >
                Entrar em Contato
              </Link>
              <Link
                href="/para-pacientes"
                className="border-2 border-isa-teal-500 text-isa-teal-600 font-semibold px-7 py-3.5 rounded-pill hover:bg-isa-teal-50 transition-colors text-sm"
              >
                Conheça as Soluções
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-isa-teal-500 flex-shrink-0" />
                <div>
                  <p className="font-bold text-isa-gray-800 text-sm">3,5 milhões+</p>
                  <p className="text-xs text-isa-gray-500">Vidas atendidas</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-isa-teal-500 flex-shrink-0" />
                <div>
                  <p className="font-bold text-isa-gray-800 text-sm">NPS 90+</p>
                  <p className="text-xs text-isa-gray-500">Satisfação</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-isa-teal-500 flex-shrink-0" />
                <div>
                  <p className="font-bold text-isa-gray-800 text-sm">5 Estados</p>
                  <p className="text-xs text-isa-gray-500">SP, GO, DF, MG e +</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right – hero photo */}
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80"
                alt="Profissional de saúde atendendo paciente em casa"
                className="w-full h-full object-cover"
              />
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

            {/* Floating badge top-left */}
            <div className="absolute top-4 left-4 bg-white rounded-xl shadow-card px-3 py-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-isa-gray-700">Disponível agora</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
