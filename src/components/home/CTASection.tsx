import Link from "next/link";

export function CTASection() {
  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(135deg, #E91E8C 0%, #C4167A 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl font-black mb-4">
          Quer Saber Mais Sobre Nossas Soluções?
        </h2>
        <p className="text-pink-100 text-lg mb-10 max-w-xl mx-auto">
          Fale com nosso time comercial e discutimos como podemos transformar o cuidado na sua operação
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contato"
            className="border-2 border-white text-white font-semibold px-8 py-3.5 rounded-pill hover:bg-white/10 transition-colors"
          >
            Falar com Nosso Time
          </Link>
          <Link
            href="/para-parceiros"
            className="bg-white text-isa-pink-600 font-semibold px-8 py-3.5 rounded-pill hover:bg-pink-50 transition-colors"
          >
            Conhecer Soluções
          </Link>
        </div>
      </div>
    </section>
  );
}
