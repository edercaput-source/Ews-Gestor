import React from 'react';
import {
  Users,
  Compass,
  CheckCircle,
  Lightbulb,
  Headphones,
  Sliders,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const PorQueEWS: React.FC = () => {
  const whatsappGeneral = buildWhatsAppLink(WHATSAPP_MESSAGES.geral);

  const valuesIcons = [
    <Sliders className="w-5 h-5 text-[#0B5ED7]" key="1" />,
    <CheckCircle className="w-5 h-5 text-[#0B5ED7]" key="2" />,
    <Users className="w-5 h-5 text-[#0B5ED7]" key="3" />,
    <Compass className="w-5 h-5 text-[#0B5ED7]" key="4" />,
    <Headphones className="w-5 h-5 text-[#0B5ED7]" key="5" />,
    <Lightbulb className="w-5 h-5 text-[#0B5ED7]" key="6" />,
  ];

  return (
    <section id="por-que" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B5ED7]">
            Diferenciais
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
            Por que escolher a EWS Gestor?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B7280]">
            A solidez de uma empresa de tecnologia com atendimento próximo, compromisso com entregas reais e capacidade de atender diferentes demandas.
          </p>
        </div>

        {/* Grid de Diferenciais em Cards com Acabamento Ghost */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14 sm:mb-18">
          {SITE_CONFIG.whyUs.map((item, index) => (
            <div
              key={index}
              className="ghost-card p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1 transition-all"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#E6F0FF] border border-[#0B5ED7]/20 flex items-center justify-center mb-4 text-[#0B5ED7]">
                  {valuesIcons[index]}
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Como Funciona em 4 Passos com Painel Ghost */}
        <div className="ghost-panel rounded-3xl p-6 sm:p-10">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B5ED7]">
              Jornada de atendimento
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#1F2937] tracking-tight">
              Como funciona o nosso atendimento
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#6B7280]">
              Processo transparente e consultivo, conduzido com seriedade do primeiro contato à implantação das soluções.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
            {SITE_CONFIG.howItWorks.map((step) => (
              <div
                key={step.step}
                className="bg-white/80 rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] shadow-2xs flex flex-col justify-between hover:border-[#0B5ED7]/30 transition-all duration-200"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-lg bg-[#E6F0FF] text-xs font-mono font-bold text-[#0B5ED7] mb-3.5 border border-[#0B5ED7]/20">
                    Etapa {step.step}
                  </span>
                  <h4 className="text-base font-bold text-[#1F2937] tracking-tight">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0B5ED7] hover:bg-[#2E7DFF] transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Iniciar conversa pelo WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
