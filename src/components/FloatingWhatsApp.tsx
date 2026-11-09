import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppLink, WHATSAPP_MESSAGES, EWS_PHONE_FORMATTED } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappFloatingLink = buildWhatsAppLink(WHATSAPP_MESSAGES.flutuante);

  return (
    <aside
      aria-label="Atendimento rápido por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end group"
    >
      {/* Balão Verde de Contato WhatsApp com acabamento Ghost */}
      {showTooltip && (
        <div className="mb-3 p-3.5 sm:p-4 rounded-2xl ghost-whatsapp-balloon text-[#1F2937] max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between gap-3 pb-2 border-b border-[#25D366]/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
              <span className="font-bold text-xs uppercase tracking-wider text-[#128C7E]">
                WhatsApp Oficial
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="p-1 rounded-md text-[#6B7280] hover:text-[#1F2937] hover:bg-neutral-100 transition-colors"
              aria-label="Fechar balão de contato"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="mt-2 text-xs text-[#1F2937]/85 leading-relaxed">
            Olá! Converse conosco diretamente pelo WhatsApp para tirar dúvidas sobre as soluções da EWS Gestor.
          </p>
          <div className="mt-2.5 pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-[11px]">
            <span className="font-mono font-medium text-[#6B7280]">{EWS_PHONE_FORMATTED}</span>
            <a
              href={whatsappFloatingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#128C7E] hover:text-[#25D366] hover:underline transition-colors"
            >
              Conversar agora &rarr;
            </a>
          </div>
        </div>
      )}

      {/* Botão Flutuante Verde Oficial WhatsApp */}
      <a
        href={whatsappFloatingLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="ghost-whatsapp-btn p-3.5 sm:p-4 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-108 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
        aria-label="Conversar pelo WhatsApp da EWS Gestor"
      >
        <span className="sr-only">Falar no WhatsApp da EWS Gestor</span>
        <MessageCircle className="w-7 h-7 text-white fill-white" aria-hidden="true" />
      </a>
    </aside>
  );
};
