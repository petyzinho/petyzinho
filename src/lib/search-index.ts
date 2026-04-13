import type { SearchDocument } from "@/types/search";

export const SEARCH_INDEX: SearchDocument[] = [
  {
    id: "home",
    title: "ISA Saúde — Cuidados de Saúde em Casa",
    description:
      "A ISA Saúde conecta profissionais de saúde a atendimentos domiciliares com tecnologia e segurança.",
    url: "/",
    audience: "general",
    keywords: [
      "isa saude",
      "home care",
      "atendimento domiciliar",
      "saude em casa",
    ],
  },
  {
    id: "para-profissionais",
    title: "Para Profissionais de Saúde",
    description:
      "Cadastre-se na ISA, seja validado e comece a receber chamados de atendimento domiciliar na sua cidade.",
    url: "/para-profissionais",
    audience: "professionals",
    keywords: [
      "cadastro profissional",
      "enfermeiro",
      "fisioterapeuta",
      "tecnico enfermagem",
      "trabalho autonomo",
      "chamados",
      "validacao",
    ],
  },
  {
    id: "para-pacientes",
    title: "Para Pacientes e Familiares",
    description:
      "Solicite atendimento domiciliar com profissionais validados, de forma rápida e segura.",
    url: "/para-pacientes",
    audience: "patients",
    keywords: [
      "atendimento em casa",
      "enfermagem domiciliar",
      "fisioterapia em casa",
      "cuidador",
      "curativo",
    ],
  },
  {
    id: "para-parceiros",
    title: "Soluções para Operadoras e Parceiros",
    description:
      "Operadoras de saúde: reduza custos hospitalares e melhore o cuidado dos seus beneficiários.",
    url: "/para-parceiros",
    audience: "partners",
    keywords: [
      "operadora saude",
      "parceria",
      "solucoes b2b",
      "home care empresarial",
      "reducao custos",
    ],
  },
  {
    id: "como-funciona",
    title: "Como Funciona a ISA Saúde",
    description:
      "Passo a passo: como se cadastrar, ser validado, receber chamados e começar a trabalhar.",
    url: "/como-funciona",
    audience: "general",
    keywords: ["passo a passo", "como cadastrar", "como funciona", "processo"],
  },
  {
    id: "trabalhe-conosco",
    title: "Trabalhe Conosco",
    description:
      "Junte-se à ISA Saúde como profissional de saúde autônomo. Flexibilidade e renda extra.",
    url: "/trabalhe-conosco",
    audience: "professionals",
    keywords: [
      "trabalhe conosco",
      "vagas",
      "oportunidade",
      "profissional saude",
      "renda extra",
    ],
  },
  {
    id: "sobre",
    title: "Sobre a ISA Saúde",
    description:
      "Conheça nossa missão, valores e a equipe por trás da plataforma que transforma o cuidado domiciliar.",
    url: "/sobre",
    audience: "general",
    keywords: [
      "sobre a empresa",
      "missao",
      "valores",
      "historia",
      "equipe",
      "healthtech",
    ],
  },
  {
    id: "contato",
    title: "Contato",
    description:
      "Entre em contato com a ISA Saúde. Estamos prontos para ajudar.",
    url: "/contato",
    audience: "general",
    keywords: ["contato", "falar", "suporte", "ajuda", "email", "telefone"],
  },
];
