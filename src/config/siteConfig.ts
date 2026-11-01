/**
 * Configuração centralizada do site da EWS Gestor.
 * Mantém todos os contatos, mensagens e regras de conteúdo estritamente alinhados ao briefing.
 */

export interface SystemModule {
  id: string;
  name: string;
  description: string;
  badge?: string;
}

export interface SegmentItem {
  id: string;
  name: string;
  description: string;
  whatsappSegmentLabel: string;
  iconName: string;
}

export interface NucleoPillar {
  number: string;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  name: 'EWS Gestor',
  domain: 'ewsgestor.com.br',
  phoneFormatted: '+55 18 99146-9679',
  phoneRaw: '5518991469679',
  email: 'contato@ewsgestor.com.br',
  instagramHandle: '@ewsgestor',
  instagramUrl: 'https://instagram.com/ewsgestor',

  concept: 'Sua empresa mais organizada. Sua gestão mais inteligente.',
  subtitle:
    'Tecnologia e acompanhamento empresarial para transformar informações em decisões melhores.',

  hero: {
    badge: 'Sistemas e Gestão Empresarial',
    title: 'Gestão empresarial que acompanha o crescimento da sua empresa.',
    subtitle:
      'Sistema ERP financeiro e operacional e acompanhamento empresarial para negócios que querem mais organização, controle e clareza nas decisões.',
    ctaSystem: 'Conhecer o sistema ERP',
    ctaNucleo: 'Conhecer o Núcleo de Aceleração',
    ctaSecondary: 'Agendar apresentação pelo WhatsApp',
  },

  segments: [
    {
      id: 'alimentacao',
      name: 'Alimentação',
      description: 'Restaurantes, bares, pizzarias e lanchonetes.',
      whatsappSegmentLabel: 'negócio no segmento de alimentação (restaurante / bar / pizzaria / lanchonete)',
      iconName: 'Utensils',
    },
    {
      id: 'automotivo',
      name: 'Automotivo',
      description: 'Oficinas mecânicas e autopeças.',
      whatsappSegmentLabel: 'negócio no segmento automotivo (oficina mecânica / autopeças)',
      iconName: 'Wrench',
    },
    {
      id: 'comercio',
      name: 'Comércio',
      description: 'Lojas, varejo e mercados.',
      whatsappSegmentLabel: 'comércio (loja / varejo / mercado)',
      iconName: 'Store',
    },
    {
      id: 'distribuicao',
      name: 'Distribuição',
      description: 'Distribuidoras e atacados.',
      whatsappSegmentLabel: 'distribuidora',
      iconName: 'Truck',
    },
    {
      id: 'servicos',
      name: 'Serviços & MEIs',
      description: 'Prestadores de serviços e microempreendedores individuais.',
      whatsappSegmentLabel: 'prestação de serviços / MEI',
      iconName: 'Briefcase',
    },
  ] as SegmentItem[],

  managementChallenges: [
    {
      title: 'Informações espalhadas',
      description: 'Anotações em cadernos, várias planilhas desconectadas e mensagens perdidas no WhatsApp.',
    },
    {
      title: 'Incerteza do lucro real',
      description: 'Dificuldade de saber com clareza se o caixa do mês está realmente gerando lucro líquido.',
    },
    {
      title: 'Controles manuais demorados',
      description: 'Vendas, estoque e contas a pagar/receber mantidos manualmente sem cruzamento de dados.',
    },
    {
      title: 'Dificuldade ao ler relatórios',
      description: 'Muitos dados soltos, mas sem apoio prático para interpretar o que os números estão indicando.',
    },
    {
      title: 'Decisões na intuição',
      description: 'Comprar, precificar ou contratar no sentimento, sem histórico financeiro confiável.',
    },
  ],

  systemModules: [
    {
      id: 'produtos',
      name: 'Produtos',
      description: 'Cadastro completo de produtos, variações, códigos e informações essenciais.',
    },
    {
      id: 'estoque',
      name: 'Estoque',
      description: 'Controle de saldo, movimentações de entrada e saída com rastreabilidade.',
    },
    {
      id: 'compras',
      name: 'Compras',
      description: 'Gestão de compras de fornecedores com importação rápida de XML de notas fiscais.',
    },
    {
      id: 'vendas',
      name: 'Vendas',
      description: 'Gestão completa de vendas, pré-vendas balcão e emissão ágil de orçamentos.',
    },
    {
      id: 'financeiro',
      name: 'Financeiro',
      description: 'Contas a pagar, contas a receber e visão clara do fluxo de caixa diário e mensal.',
    },
    {
      id: 'fiscal',
      name: 'Fiscal',
      description: 'Emissão descomplicada de NF-e, NFC-e, NFS-e e demais documentos fiscais exigidos.',
    },
    {
      id: 'relatorios',
      name: 'Relatórios',
      description: 'Relatórios gerenciais estruturados para acompanhar o desempenho da empresa.',
    },
    {
      id: 'pdv',
      name: 'PDV',
      description: 'Ponto de venda ágil, simples de operar no dia a dia do caixa e atendimento.',
    },
    {
      id: 'operacional',
      name: 'Operacional',
      description: 'Ordens de serviço detalhadas e organização da agenda técnica de atendimento.',
    },
  ] as SystemModule[],

  systemPricingNote: 'Planos entre R$ 100 e R$ 120 por mês.',

  nucleoPillars: [
    {
      number: '01',
      title: 'Análise',
      description: 'Leitura criteriosa dos dados do seu negócio para entender a situação real das contas e da rotina.',
    },
    {
      number: '02',
      title: 'Organização',
      description: 'Estruturação de rotinas financeiras e de registros para que nenhuma informação importante se perca.',
    },
    {
      number: '03',
      title: 'Orientação',
      description: 'Apoio consultivo para descomplicar relatórios e traduzir termos técnicos em decisões práticas.',
    },
    {
      number: '04',
      title: 'Acompanhamento',
      description: 'Contato direto e próximo para esclarecer dúvidas e ajustar a rota gerencial.',
    },
    {
      number: '05',
      title: 'Evolução',
      description: 'Construção contínua de maturidade empresarial com decisões embasadas em números consistentes.',
    },
  ] as NucleoPillar[],

  nucleoInvestmentNote: 'Personalizado, conforme o escopo e a necessidade de cada empresa.',

  whyUs: [
    {
      title: 'Tecnologia acessível',
      description: 'Sistema completo, intuitivo e moderno, com investimento justo para a sua empresa.',
    },
    {
      title: 'Adequado à sua realidade',
      description: 'Criado na medida certa para MEIs, pequenos e médios negócios, sem funções desnecessárias.',
    },
    {
      title: 'Atendimento próximo e dedicado',
      description: 'Contato direto e humanizado com especialistas prontos para apoiar no dia a dia da implantação.',
    },
    {
      title: 'Implantação orientada',
      description: 'A EWS Gestor cuida da configuração, do treinamento da sua equipe e da orientação inicial.',
    },
    {
      title: 'Acompanhamento personalizado',
      description: 'Você nunca fica sozinho diante de relatórios ou dúvidas gerenciais da sua empresa.',
    },
    {
      title: 'Foco em clareza gerencial',
      description: 'Transformamos controles confusos em rotinas organizadas e números confiáveis para decidir.',
    },
  ],

  howItWorks: [
    {
      step: '01',
      title: 'Conversa inicial',
      description: 'Entendemos o seu momento, o tipo de negócio e onde estão as maiores dificuldades de controle.',
    },
    {
      step: '02',
      title: 'Apresentação da solução',
      description: 'Mostramos como o sistema ERP ou o Núcleo de Aceleração se encaixam na rotina da sua empresa.',
    },
    {
      step: '03',
      title: 'Proposta personalizada',
      description: 'Definição transparente do escopo e do investimento sob medida, sem custos ocultos.',
    },
    {
      step: '04',
      title: 'Implantação e início',
      description: 'Configuração do sistema, treinamento prático inicial e acompanhamento dedicado.',
    },
  ] as HowItWorksStep[],

  faq: [
    {
      question: 'Preciso contratar o sistema e o Núcleo juntos?',
      answer:
        'Não. Cada solução pode ser contratada separadamente, conforme a necessidade atual da sua empresa. Você pode começar apenas com o Sistema de Gestão ou buscar acompanhamento pelo Núcleo de Aceleração.',
    },
    {
      question: 'O sistema serve para MEI e negócio pequeno?',
      answer:
        'Sim, foi pensado exatamente para MEIs, pequenos e médios negócios que precisam organizar fluxo de caixa, estoque, vendas e emitir notas sem complicações.',
    },
    {
      question: 'Como funciona a implantação?',
      answer:
        'A EWS Gestor faz a implantação, treinamento e orientação inicial, acompanhando os primeiros passos para que sua equipe use o sistema com segurança.',
    },
    {
      question: 'Quanto custa o Núcleo de Aceleração?',
      answer:
        'O valor é personalizado, conforme o escopo e a necessidade de cada empresa. Realizamos uma conversa inicial para entender suas prioridades e apresentar uma proposta sob medida.',
    },
    {
      question: 'Como funcionam teste grátis, fidelidade, taxa de implantação e cancelamento?',
      answer:
        'Fale com a gente pelo WhatsApp e explicamos as condições detalhadas de acordo com o plano e modelo de atendimento escolhido.',
    },
  ] as FaqItem[],

  assets: {
    logoLight: '/assets/brand/logo-claro.png',
    logoDark: '/assets/brand/logo-escuro.png',
    iconSquare: '/assets/brand/icone-ews.png',
    screens: {
      dashboard: '/assets/erp-screens/dashboard-financeiro.png',
      caixa: '/assets/erp-screens/movimento-caixa.png',
      ordens: '/assets/erp-screens/ordens-servico.png',
    },
  },
};
