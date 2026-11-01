import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { buildWhatsAppLink, WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Para quem', href: '#para-quem' },
    { label: 'Sistema', href: '#sistema' },
    { label: 'Núcleo de Aceleração', href: '#nucleo' },
    { label: 'Por que a EWS', href: '#por-que' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const ctaWhatsAppLink = buildWhatsAppLink(WHATSAPP_MESSAGES.geral);

  return (
    <>
      {/* Link de acessibilidade: pular para o conteúdo principal */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0B5ED7] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Pular para o conteúdo principal
      </a>

      {/* Menu Superior com Fundo Branco, Acabamento Ghost e Bordas Suaves */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'ghost-nav-light py-3'
            : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-[#E2E8F0] shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logotipo oficial para fundo claro */}
            <a
              href="#inicio"
              className="flex items-center gap-2 group transition-opacity hover:opacity-90"
              aria-label="EWS Gestor - Início"
            >
              <img
                src={SITE_CONFIG.assets.logoLight}
                alt="Logotipo EWS Gestor - Sistemas e Gestão Empresarial"
                className="h-10 sm:h-11 w-auto object-contain"
                loading="eager"
              />
            </a>

            {/* Links de navegação desktop com hover suave e texto grafite */}
            <nav className="hidden lg:flex items-center gap-1.5" aria-label="Navegação Principal">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-[#1F2937]/85 hover:text-[#0B5ED7] hover:bg-[#E6F0FF] px-3.5 py-2 rounded-xl transition-all duration-200 relative group"
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>

            {/* CTA Desktop em Azul Gestor #0B5ED7 */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={ctaWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#0B5ED7] hover:bg-[#2E7DFF] transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Agendar apresentação</span>
                <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
              </a>
            </div>

            {/* Botão Menu Mobile */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#1F2937] hover:bg-[#E6F0FF] hover:text-[#0B5ED7] focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Drawer Mobile com acabamento Ghost */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-200 shadow-[0_12px_28px_rgba(31,41,55,0.08)]">
            <nav className="flex flex-col space-y-1.5" aria-label="Navegação Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-sm font-semibold text-[#1F2937] hover:text-[#0B5ED7] hover:bg-[#E6F0FF] px-3 py-2.5 rounded-xl transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#E2E8F0]">
                <a
                  href={ctaWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-[#0B5ED7] hover:bg-[#2E7DFF] transition-all duration-200 shadow-xs"
                >
                  <span>Agendar apresentação</span>
                  <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
