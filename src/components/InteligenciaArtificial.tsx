import React from 'react';
import { Sparkles, Bot, Zap, Brain, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const InteligenciaArtificial: React.FC = () => {
  const whatsappIA = buildWhatsAppLink(WHATSAPP_MESSAGES.ia);

  const iaPillars = [
    {
      number: '01',
      icon: <Brain className="w-5 h-5 text-[#2E7DFF]" />,
      title: 'Aplicações com Inteligência Artificial',
      description:
        'Desenvolvimento de soluções com recursos de inteligência artificial voltadas para resolver problemas concretos de negócios.',
    },
    {
      number: '02',
      icon: <Bot className="w-5 h-5 text-[#2E7DFF]" />,
      title: 'Assistentes Digitais',
      description:
        'Criação de assistentes para suporte, atendimento qualificado e interação inteligente com usuários e clientes.',
    },
    {
      number: '03',
      icon: <Zap className="w-5 h-5 text-[#2E7DFF]" />,
      title: 'Ferramentas de Produtividade',
      description:
        'Recursos inteligentes que auxiliam equipes na síntese de informações, organização e rotinas de alta eficiência.',
    },
    {
      number: '04',
      icon: <Sparkles className="w-5 h-5 text-[#2E7DFF]" />,
      title: 'Soluções Inteligentes',
      description:
        'Aplicações orientadas a ampliar as capacidades analíticas e estratégicas das empresas com visão de futuro.',
    },
  ];

  return (
    <section id="inteligencia-artificial" className="relative py-16 sm:py-24 bg-[#111827] text-white overflow-hidden">
      {/* Grade sutil nos cantos em SVG */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-72 h-72 opacity-[0.06] overflow-hidden"
        aria-hidden="true"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ia-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeWidth="1" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ia-grid)" />
        </svg>
      </div>

      {/* Brilho radial azul gestor institucional */}
      <div
        className="pointer-events-none absolute top-10 right-10 w-[600px] h-[450px] bg-[#0B5ED7]/20 blur-[140px] rounded-full -z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-10 w-[500px] h-[350px] bg-[#2E7DFF]/15 blur-[130px] rounded-full -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-wider mb-3 border border-white/15 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2E7DFF]" />
            <span>Frente 03 • Inteligência Artificial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
            Inteligência Artificial aplicada a{' '}
            <span className="text-[#2E7DFF]">empresas e negócios.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            A EWS Gestor desenvolve e disponibiliza aplicações que utilizam recursos de inteligência artificial para ampliar a capacidade produtiva, agilizar decisões e preparar sua empresa para o futuro.
          </p>
        </div>

        {/* 4 Pilares da IA em Cards Ghost Escuros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 sm:mb-14">
          {iaPillars.map((item) => (
            <div
              key={item.number}
              className="ghost-dark p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xl font-black font-mono text-[#2E7DFF]">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-medium text-neutral-400">
                <Check className="w-3.5 h-3.5 text-[#2E7DFF]" />
                <span>Capacidade tecnológica EWS Gestor</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco de Destaque / Contato para IA */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 text-center backdrop-blur-xs">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-white mb-3">
            <ShieldCheck className="w-4 h-4 text-[#2E7DFF]" />
            <span>Inovação prática e segura</span>
          </div>

          <h4 className="text-xl font-bold text-white tracking-tight">
            Descubra o potencial da IA para a sua empresa
          </h4>
          <p className="mt-2 text-sm sm:text-base text-neutral-300 max-w-xl mx-auto">
            Converse com nossa equipe para entender como recursos de inteligência artificial podem ser aplicados no contexto real das suas operações.
          </p>

          <div className="mt-6">
            <a
              href={whatsappIA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0B5ED7] hover:bg-[#2E7DFF] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Explorar possibilidades com IA</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
