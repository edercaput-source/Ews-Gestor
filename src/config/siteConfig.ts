/**
 * Configuração centralizada do site da EWS Gestor.
 * Marca principal: EWS Gestor.
 * Mantém todos os contatos e mensagens alinhados.
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

export interface AreaAtuacao {
  id: 'gestao' | 'software' | 'ia';
  title: string;
  tagline: string;
  badge: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
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
  phoneFormatted: '+55 18 99146-9679',
  phoneRaw: '5518991469679',
  email: 'contato@ewsgestor.com.br',
  instagramHandle: '@ewsgestor',
  instagramUrl: 'https://instagram.com/ewsgestor',

  concept: 'Tecnologia, inovação e inteligência para impulsionar negócios.',
  subtitle:
    'A EWS Gestor desenvolve, comercializa e disponibiliza soluções tecnológicas para empresas e empreendedores.',

  hero: {
    badge: 'EWS Gestor',
    title: 'Tecnologia e soluções digitais para impulsionar o seu negócio.',
    subtitle:
      'Soluções tecnológicas completas para empresas e negócios: sistemas de gestão empresarial, software e produtos digitais e aplicações com inteligência artificial.',
    ctaPrimary: 'Conhecer as soluções',
    ctaContact: 'Falar com um especialista',
    ctaSecondary: 'Atendimento comercial via WhatsApp',
  },

  // 3 Grandes Frentes de Atuação
  areas: [
    {
      id: 'gestao',
      badge: 'Frente 01',
      title: 'Sistemas e Gestão',
      tagline: 'Organização, controle e eficiência empresarial',
      description:
        'Soluções tecnológicas para controle financeiro, gestão operacional, estoque, compras, vendas e emissão fiscal. Ferramentas consolidadas para transformar informações em decisões ágeis.',
      highlights: [
        'Sistema ERP completo para pequenas e médias empresas',
        'Controle financeiro, contas a pagar, receber e fluxo de caixa',
        'Gestão de estoque, compras via XML, vendas e PDV ágil',
        'Emissão de documentos fiscais (NF-e, NFC-e, NFS-e) e relatórios',
      ],
      ctaLabel: 'Ver detalhes do Sistema',
    },
    {
      id: 'software',
      badge: 'Frente 02',
      title: 'Software e Produtos Digitais',
      tagline: 'Desenvolvimento e plataformas personalizadas',
      description:
        'Criação, comercialização e disponibilização de aplicações web modernas, plataformas digitais e ferramentas sob medida para necessidades específicas de cada mercado.',
      highlights: [
        'Aplicações web modernas, escaláveis e responsivas',
        'Sistemas personalizados e integração de processos de negócio',
        'Plataformas digitais desenhadas para necessidades reais',
        'Arquitetura segura, focada em usabilidade e performance',
      ],
      ctaLabel: 'Falar sobre projeto digital',
    },
    {
      id: 'ia',
      badge: 'Frente 03',
      title: 'Inteligência Artificial',
      tagline: 'Soluções inteligentes para ampliar possibilidades',
      description:
        'Aplicação prática de inteligência artificial em assistentes digitais, ferramentas de produtividade e soluções analíticas para elevar a capacidade operacional de empresas.',
      highlights: [
        'Aplicações inteligentes integradas ao cotidiano empresarial',
        'Assistentes digitais e atendimento inteligente',
        'Ferramentas para ganho de produtividade e apoio à tomada de decisão',
        'Tecnologias focadas em inteligência e visão de futuro',
      ],
      ctaLabel: 'Explorar soluções de IA',
    },
  ] as AreaAtuacao[],

  about: {
    title: 'Uma empresa de tecnologia com visão de futuro',
    subtitle:
      'A EWS Gestor atua no desenvolvimento, na comercialização e na disponibilização de soluções digitais pensadas para apoiar empresas e empreendedores em sua jornada de evolução.',
    pillars: [
      {
        title: 'Inovação e Tecnologia',
        description:
          'Utilizamos ferramentas e padrões modernos da tecnologia para entregar soluções confiáveis, estáveis e escaláveis.',
      },
      {
        title: 'Inteligência e Organização',
        description:
          'Ajudamos negócios a substituir a improvisação por processos claros, informações centralizadas e decisões baseadas em dados.',
      },
      {
        title: 'Confiabilidade e Parceria',
        description:
          'Construímos relacionamentos de longo prazo com atendimento humano, direto e compromisso genuíno com o sucesso dos nossos clientes.',
      },
      {
        title: 'Capacidade Multidisciplinar',
        description:
          'Reunimos competências em gestão empresarial, desenvolvimento de software e soluções com inteligência artificial sob uma mesma marca institucional.',
      },
    ],
  },

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
      name: 'Comércio & Varejo',
      description: 'Lojas, comércios em geral e minimercados.',
      whatsappSegmentLabel: 'comércio (loja / varejo / mercado)',
      iconName: 'Store',
    },
    {
      id: 'distribuicao',
      name: 'Distribuição & Atacado',
      description: 'Distribuidoras e empresas de fornecimento.',
      whatsappSegmentLabel: 'distribuidora',
      iconName: 'Truck',
    },
    {
      id: 'servicos',
      name: 'Serviços & MEIs',
      description: 'Prestadores de serviços e microempreendedores.',
      whatsappSegmentLabel: 'prestação de serviços / MEI',
      iconName: 'Briefcase',
    },
    {
      id: 'empresas',
      name: 'Empresas em Expansão',
      description: 'Negócios buscando modernização tecnológica e novas soluções digitais.',
      whatsappSegmentLabel: 'empresa em busca de soluções digitais',
      iconName: 'Building',
    },
  ] as SegmentItem[],

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

  whyUs: [
    {
      title: 'Tecnologia acessível e eficiente',
      description: 'Soluções intuitivas, modernas e robustas, desenvolvidas na medida certa para a realidade de cada negócio.',
    },
    {
      title: 'Três frentes de atuação tecnológica',
      description: 'Desde a organização da rotina empresarial até produtos digitais personalizados e inteligência artificial.',
    },
    {
      title: 'Atendimento próximo e dedicado',
      description: 'Contato direto com especialistas prontos para esclarecer dúvidas e acompanhar a evolução da sua empresa.',
    },
    {
      title: 'Implantação orientada',
      description: 'Auxiliamos na configuração inicial e no treinamento da equipe para uso seguro e produtivo das ferramentas.',
    },
    {
      title: 'Soluções modulares e sob medida',
      description: 'Sua empresa contrata exatamente o que precisa, com liberdade para expandir conforme o negócio cresce.',
    },
    {
      title: 'Compromisso com inovação real',
      description: 'Foco em ferramentas práticas que geram valor direto, organização e visão de futuro para empreendedores.',
    },
  ],

  howItWorks: [
    {
      step: '01',
      title: 'Conversa inicial',
      description: 'Entendemos o seu momento, o seu negócio e a demanda tecnológica necessária.',
    },
    {
      step: '02',
      title: 'Apresentação da solução',
      description: 'Demonstramos como as soluções da EWS atendem com precisão aos objetivos da sua empresa.',
    },
    {
      step: '03',
      title: 'Proposta transparente',
      description: 'Definição clara do escopo, cronograma e investimento sob medida, sem custos ocultos.',
    },
    {
      step: '04',
      title: 'Início e acompanhamento',
      description: 'Disponibilização, configuração inicial e suporte contínuo para você e sua equipe.',
    },
  ] as HowItWorksStep[],

  faq: [
    {
      question: 'O que é a EWS Gestor?',
      answer:
        'A EWS Gestor é uma empresa de tecnologia que desenvolve, comercializa e disponibiliza soluções digitais para empresas e negócios em três frentes: Sistemas e Gestão, Software e Produtos Digitais, e Inteligência Artificial.',
    },
    {
      question: 'Como funciona o Sistema de Gestão (ERP)?',
      answer:
        'É uma solução tecnológica para organização, controle financeiro, estoque, compras, vendas, fiscal (NF-e, NFC-e, NFS-e) e relatórios. Oferecemos implantação, treinamento e orientação inicial para que a equipe utilize todas as rotinas com facilidade.',
    },
    {
      question: 'A EWS Gestor desenvolve software e plataformas sob medida?',
      answer:
        'Sim. Na frente de Software e Produtos Digitais, desenvolvemos aplicações web, sistemas personalizados e plataformas pensadas para necessidades específicas de mercado.',
    },
    {
      question: 'Como a EWS Gestor atua com Inteligência Artificial?',
      answer:
        'Desenvolvemos e disponibilizamos aplicações com inteligência artificial, assistentes digitais e ferramentas de produtividade para ampliar as possibilidades e a inteligência operacional das empresas.',
    },
    {
      question: 'As soluções são contratadas juntas ou separadas?',
      answer:
        'Totalmente independentes. Cada cliente contrata apenas as soluções ou frentes que fazem sentido para o momento e a necessidade atual do seu negócio.',
    },
    {
      question: 'Como agendar uma demonstração ou conversar sobre um projeto?',
      answer:
        'Basta entrar em contato pelo nosso WhatsApp oficial (+55 18 99146-9679) ou pelo formulário do site. Nossa equipe conversará diretamente com você para entender a demanda.',
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
