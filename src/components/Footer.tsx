import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = 2026;
  const whatsappGeneral = buildWhatsAppLink(WHATSAPP_MESSAGES.geral);

  return (
    <footer className="bg-[#111827] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Coluna 1 & 2: Identidade e Logotipo Oficial para Fundo Escuro */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#inicio" className="inline-block" aria-label="EWS Gestor - Início">
              <img
                src={SITE_CONFIG.assets.logoDark}
                alt="Logotipo EWS Gestor"
                className="h-10 sm:h-12 w-auto object-contain"
                loading="lazy"
              />
            </a>
            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
              Sistemas e Gestão Empresarial. Tecnologia, organização e inteligência para impulsionar a gestão de pequenas e médias empresas.
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
                <a href="#solucoes" className="hover:text-white hover:text-[#2E7DFF] transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#sistema" className="hover:text-white hover:text-[#2E7DFF] transition-colors">
                  Sistemas e Gestão
                </a>
              </li>
              <li>
                <a href="#software-produtos" className="hover:text-white hover:text-[#2E7DFF] transition-colors">
                  Software e Produtos
                </a>
              </li>
              <li>
                <a href="#inteligencia-artificial" className="hover:text-white hover:text-[#2E7DFF] transition-colors">
                  Inteligência Artificial
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white hover:text-[#2E7DFF] transition-colors">
                  Sobre a EWS
                </a>
              </li>
              <li>
                <a href="#por-que" className="hover:text-white hover:text-[#2E7DFF] transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white hover:text-[#2E7DFF] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: As Três Frentes de Atuação */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
              Áreas de Atuação
            </h4>
            <ul className="space-y-3.5 text-sm text-neutral-300">
              <li>
                <a href="#sistema" className="group block">
                  <span className="font-semibold text-white group-hover:text-[#2E7DFF] transition-colors">
                    Sistemas e Gestão
                  </span>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    ERP para controle financeiro, compras, estoque e fiscal.
                  </p>
                </a>
              </li>
              <li>
                <a href="#software-produtos" className="group block">
                  <span className="font-semibold text-white group-hover:text-[#2E7DFF] transition-colors">
                    Software e Produtos Digitais
                  </span>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Aplicações web, plataformas e sistemas sob medida.
                  </p>
                </a>
              </li>
              <li>
                <a href="#inteligencia-artificial" className="group block">
                  <span className="font-semibold text-white group-hover:text-[#2E7DFF] transition-colors">
                    Inteligência Artificial
                  </span>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Assistentes digitais e ferramentas inteligentes.
                  </p>
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 5: Canais de Contato Oficial (sem exibir URL ewsgestor.com.br na página) */}
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
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior: Copyright e Apresentação "by EWS Soluções Tecnológicas" */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            &copy; {currentYear} EWS Gestor. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-neutral-400 font-medium">
              by EWS Soluções Tecnológicas
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
