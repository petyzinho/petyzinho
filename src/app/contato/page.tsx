"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContatoPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-gradient-to-br from-isa-blue-900 to-isa-blue-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Fale com a ISA</h1>
          <p className="text-isa-blue-100 text-lg max-w-xl">
            Estamos prontos para responder suas dúvidas, receber sugestões ou agendar uma conversa.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-isa-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info */}
            <div className="space-y-6">
              <SectionHeading title="Informações de contato" align="left" className="mb-6" />
              {[
                { icon: <Mail className="w-5 h-5 text-isa-blue-500" />, label: "E-mail", value: "contato@isasaude.com" },
                { icon: <Phone className="w-5 h-5 text-isa-blue-500" />, label: "Telefone", value: "(11) 0000-0000" },
                { icon: <MapPin className="w-5 h-5 text-isa-blue-500" />, label: "Localização", value: "São Paulo, SP — Brasil" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-isa-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-isa-gray-400 uppercase tracking-wider font-semibold">{item.label}</p>
                    <p className="text-isa-gray-800 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <Card padding="lg" className="text-center py-16">
                  <CheckCircle2 className="w-16 h-16 text-isa-green-500 mx-auto mb-4" />
                  <h3 className="font-display font-bold text-2xl text-isa-gray-900 mb-2">Mensagem enviada!</h3>
                  <p className="text-isa-gray-600">Nossa equipe responde em horário comercial (seg-sex, 8h-18h).</p>
                </Card>
              ) : (
                <Card padding="lg">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-isa-gray-700 mb-1.5">Nome *</label>
                        <input required type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                          className="w-full border border-isa-gray-200 rounded-button px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-isa-blue-500" placeholder="Seu nome completo" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-isa-gray-700 mb-1.5">E-mail *</label>
                        <input required type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                          className="w-full border border-isa-gray-200 rounded-button px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-isa-blue-500" placeholder="seu@email.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-isa-gray-700 mb-1.5">Telefone</label>
                        <input type="tel" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                          className="w-full border border-isa-gray-200 rounded-button px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-isa-blue-500" placeholder="(11) 99999-9999" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-isa-gray-700 mb-1.5">Assunto</label>
                        <select value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                          className="w-full border border-isa-gray-200 rounded-button px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-isa-blue-500 bg-white">
                          <option value="">Selecione...</option>
                          <option>Sou profissional de saúde</option>
                          <option>Preciso de atendimento</option>
                          <option>Parceria / B2B</option>
                          <option>Suporte técnico</option>
                          <option>Outro</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-isa-gray-700 mb-1.5">Mensagem *</label>
                      <textarea required rows={5} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                        className="w-full border border-isa-gray-200 rounded-button px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-isa-blue-500 resize-none"
                        placeholder="Descreva como podemos ajudar..." />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full justify-center" rightIcon={<Send className="w-4 h-4" />}>
                      Enviar mensagem
                    </Button>
                  </form>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
