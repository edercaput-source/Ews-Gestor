import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappGeneral = buildWhatsAppLink(WHATSAPP_MESSAGES.geral);

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F0FF] text-[#0B5ED7] text-xs font-bold uppercase tracking-wider mb-3 border border-[#0B5ED7]/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Dúvidas comuns</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6B7280]">
            Tire suas principais dúvidas sobre o sistema e o acompanhamento empresarial.
          </p>
        </div>

        {/* Acordeão com Acabamento Ghost */}
        <div className="space-y-3.5">
          {SITE_CONFIG.faq.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={index}
                className="ghost-card overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:bg-[#E6F0FF]/50"
                >
                  <span className="text-base sm:text-lg font-bold text-[#1F2937] pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0B5ED7] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#2E7DFF]' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-[#1F2937]/80 leading-relaxed border-t border-[#E2E8F0] pt-3.5"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Chamada para tirar dúvida diretamente */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#6B7280]">
            Tem outra dúvida sobre a sua empresa?{' '}
            <a
              href={whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#0B5ED7] hover:text-[#2E7DFF] hover:underline inline-flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Converse com a nossa equipe pelo WhatsApp</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
