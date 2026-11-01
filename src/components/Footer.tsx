import React from 'react';
import { Phone, Mail, Instagram, Globe } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = 2026;
  const whatsappGeneral = buildWhatsAppLink(WHATSAPP_MESSAGES.geral);

  return (
    <footer className="bg-[#111827] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Coluna 1 & 2: Identidade e Logotipo Oficial para Fundo Escuro */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#inicio" className="inline-block" aria-label="EWS Gestor - Início">
              <img
                src={SITE_CONFIG.assets.logoDark}
                alt="Logotipo Corporativo EWS Gestor - Sistemas e Gestão Empresarial"
                className="h-10 sm:h-12 w-auto object-contain"
                loading="lazy"
              />
            </a>
            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
              Sistemas e Gestão Empresarial. Tecnologia e acompanhamento empresarial para negócios que buscam organização, controle e clareza nas decisões.
            </p>
          </div>

          {/* Coluna 3: Navegação Rápida */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <a href="#inicio" className="hover:text-white hover:text-[#2E7DFF] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#para-quem" className="hover:text-white hover:text-[#2E7DFF] transition-colors">
                  Para quem é
                </a>
              </li>
              <li>
                <a href="#sistema" className="hover:text-white hover:text-[#2E7DFF] transition-colors">
                  Sistema de Gestão
                </a>
              </li>
              <li>
                <a href="#nucleo" className="hover:text-white hover:text-[#2E7DFF] transition-colors">
                  Núcleo de Aceleração
                </a>
              </li>
              <li>
                <a href="#por-que" className="hover:text-white hover:text-[#2E7DFF] transition-colors">
                  Por que a EWS
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white hover:text-[#2E7DFF] transition-colors">
                  Contato e Apresentação
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: As Duas Soluções */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
              Soluções
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li>
                <a href="#sistema" className="group block">
                  <span className="font-semibold text-white group-hover:text-[#2E7DFF] transition-colors">
                    Sistema de Gestão (ERP)
                  </span>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Financeiro, estoque, compras, vendas, fiscal e operacional.
                  </p>
                </a>
              </li>
              <li>
                <a href="#nucleo" className="group block">
                  <span className="font-semibold text-white group-hover:text-[#2E7DFF] transition-colors">
                    Núcleo de Aceleração
                  </span>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Acompanhamento e orientação empresarial estratégica.
                  </p>
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 5: Canais de Contato Oficial */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
              Canais Oficiais
            </h4>
            <ul className="space-y-3.5 text-sm text-neutral-300">
              <li>
                <a
                  href={whatsappGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#0B5ED7] transition-colors">
                    <Phone className="w-4 h-4 text-[#2E7DFF] group-hover:text-white transition-colors" aria-hidden="true" />
                  </span>
                  <span>{SITE_CONFIG.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#0B5ED7] transition-colors">
                    <Mail className="w-4 h-4 text-[#2E7DFF] group-hover:text-white transition-colors" aria-hidden="true" />
                  </span>
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#0B5ED7] transition-colors">
                    <Instagram className="w-4 h-4 text-[#2E7DFF] group-hover:text-white transition-colors" aria-hidden="true" />
                  </span>
                  <span>{SITE_CONFIG.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://${SITE_CONFIG.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#0B5ED7] transition-colors">
                    <Globe className="w-4 h-4 text-[#2E7DFF] group-hover:text-white transition-colors" aria-hidden="true" />
                  </span>
                  <span>{SITE_CONFIG.domain}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior: Copyright e Informações Finais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            &copy; {currentYear} EWS Gestor Sistemas e Gestão Empresarial. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-neutral-300">
              {SITE_CONFIG.domain}
            </span>
            <a
              href="#inicio"
              className="text-[#2E7DFF] hover:text-white hover:underline transition-colors"
            >
              Voltar ao topo &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
