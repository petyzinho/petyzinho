import type { FAQEntry } from "@/types/chatbot";

export const FAQ_ENTRIES: FAQEntry[] = [
  {
    id: "how_isa_works",
    trigger_keywords: [
      "funciona",
      "como",
      "plataforma",
      "o que e",
      "o que é",
      "isa",
      "saude",
    ],
    question: "Como funciona a ISA Saúde?",
    answer:
      "A ISA Saúde é uma plataforma que conecta profissionais de saúde validados a pacientes que precisam de atendimento domiciliar. Funciona como uma ponte entre quem precisa de cuidado e quem tem vocação para cuidar, garantindo segurança, qualidade e praticidade.",
    followup_ids: ["how_to_register", "for_patients"],
  },
  {
    id: "how_to_register",
    trigger_keywords: [
      "cadastrar",
      "cadastro",
      "registrar",
      "entrar",
      "participar",
      "como entro",
      "como faço",
      "comecar",
      "começar",
    ],
    question: "Como me cadastro na ISA?",
    answer:
      "Para se cadastrar: 1) Baixe o app ISA Saúde na App Store ou Google Play; 2) Crie sua conta com seus dados profissionais; 3) Envie os documentos solicitados (COREN/CRM, documentos pessoais); 4) Aguarde a validação em até 48 horas. Após aprovado, você já pode receber chamados!",
    followup_ids: ["required_docs", "validation_process"],
  },
  {
    id: "required_docs",
    trigger_keywords: [
      "documentos",
      "documento",
      "coren",
      "crm",
      "necessario",
      "precisar",
      "enviar",
    ],
    question: "Quais documentos são necessários?",
    answer:
      "Você precisará enviar: RG ou CNH, CPF, comprovante de residência, registro de conselho profissional (COREN, CREFITO, etc.), diploma ou certificado profissional e foto de rosto. Todos os documentos são verificados pela nossa equipe.",
    followup_ids: ["validation_process", "how_to_register"],
  },
  {
    id: "validation_process",
    trigger_keywords: [
      "validacao",
      "validação",
      "validar",
      "verificacao",
      "aprovacao",
      "prazo",
      "tempo",
      "quanto tempo",
    ],
    question: "Quanto tempo leva a validação?",
    answer:
      "Nossa equipe analisa cada cadastro com cuidado. O processo de validação leva entre 24 a 48 horas úteis após o envio de todos os documentos. Você receberá uma notificação no app quando for aprovado.",
    followup_ids: ["find_opportunities", "how_to_register"],
  },
  {
    id: "find_opportunities",
    trigger_keywords: [
      "chamados",
      "oportunidades",
      "trabalho",
      "vagas",
      "servicos",
      "serviços",
      "atendimento",
      "onde",
    ],
    question: "Como encontro oportunidades de trabalho?",
    answer:
      "Após a validação, você receberá notificações push no app com chamados disponíveis na sua região. Basta aceitar o chamado que mais se encaixa na sua agenda. Você escolhe quando e onde trabalhar!",
    followup_ids: ["payment", "how_to_register"],
  },
  {
    id: "payment",
    trigger_keywords: [
      "pagamento",
      "pagar",
      "recebo",
      "quanto",
      "dinheiro",
      "valor",
      "remuneracao",
      "remuneração",
      "salario",
      "salário",
    ],
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento é feito diretamente na plataforma após a conclusão de cada atendimento. Os valores variam conforme o tipo de serviço e região. O repasse é realizado dentro do prazo acordado, de forma segura e transparente.",
    followup_ids: ["find_opportunities"],
  },
  {
    id: "for_patients",
    trigger_keywords: [
      "paciente",
      "familiar",
      "contratar",
      "solicitar",
      "quero atendimento",
      "preciso de ajuda",
      "em casa",
    ],
    question: "Como solicitar atendimento domiciliar?",
    answer:
      "Para solicitar atendimento: entre em contato pelo app ISA ou pelo nosso site. Informe o tipo de cuidado que precisa, o endereço e o horário. Conectaremos você a um profissional validado disponível na sua região.",
    followup_ids: ["services", "how_isa_works"],
  },
  {
    id: "services",
    trigger_keywords: [
      "servicos",
      "serviços",
      "tipos",
      "enfermagem",
      "fisioterapia",
      "tecnico",
      "técnico",
      "quais",
      "oferecem",
    ],
    question: "Quais serviços estão disponíveis?",
    answer:
      "Oferecemos: enfermagem domiciliar, fisioterapia, fonoaudiologia, nutrição, cuidador de idosos, técnico em enfermagem, acompanhante hospitalar, curativo, aplicação de medicamentos e mais. Consulte nossa lista completa no app.",
    followup_ids: ["for_patients", "safety"],
  },
  {
    id: "safety",
    trigger_keywords: [
      "seguro",
      "segurança",
      "confiavel",
      "confiável",
      "verificado",
      "qualidade",
      "garantia",
    ],
    question: "Os profissionais são confiáveis?",
    answer:
      "Sim! Todos os profissionais passam por rigorosa validação de documentos, verificação de conselho profissional, checagem de antecedentes e avaliação de qualificações. Além disso, cada atendimento é avaliado pelos pacientes.",
    followup_ids: ["for_patients", "services"],
  },
  {
    id: "for_partners",
    trigger_keywords: [
      "parceiro",
      "parceria",
      "plano",
      "convenio",
      "convênio",
      "seguro",
      "operadora",
      "empresa",
      "b2b",
    ],
    question: "Como ser um parceiro ISA?",
    answer:
      "Operadoras de saúde e empresas interessadas em parceria podem entrar em contato pelo formulário na página de Soluções. Nossa equipe comercial apresentará as modalidades de integração e os benefícios para os seus beneficiários.",
    followup_ids: ["how_isa_works"],
  },
  {
    id: "contact",
    trigger_keywords: [
      "contato",
      "falar",
      "suporte",
      "ajuda",
      "problema",
      "duvida",
      "dúvida",
      "telefone",
      "email",
      "whatsapp",
    ],
    question: "Como falo com a ISA?",
    answer:
      "Você pode entrar em contato pela nossa página de Contato, pelo e-mail contato@isasaude.com ou pelo suporte dentro do app. Nossa equipe responde em horário comercial (seg-sex, 8h-18h).",
    followup_ids: ["how_isa_works"],
  },
];

export const INITIAL_CHIPS = [
  "how_isa_works",
  "how_to_register",
  "for_patients",
  "for_partners",
];
