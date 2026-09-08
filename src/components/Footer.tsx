import React from 'react';
import { Mail, MessageCircle, Instagram, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../content';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = CONTENT[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white border-t border-black">
      {/* Upper Footer Block */}
      <div className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Branding & Subtitle */}
        <div className="space-y-2">
          <span className="font-viaoda text-3xl sm:text-4xl text-black font-normal tracking-tight">
            PRAGMAGICKA
          </span>
          <p className="font-sans text-sm text-black/70">
            {t.branding}
          </p>
        </div>

        {/* Right: Direct Contact Links */}
        <div className="space-y-3">
          <p className="font-viaoda text-base sm:text-lg text-black">
            {t.contactTitle}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/573138642943?text=Hola%20Lorena,%20quiero%20informaci%C3%B3n%20sobre%20Pragmagicka"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-[#ffff0f] border border-black rounded-[40px] px-3.5 py-1.5 flex items-center gap-2 text-xs sm:text-sm font-sans text-black transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-black" />
              <span>+57 313 864 2943</span>
            </a>

            {/* Email */}
            <a
              href="mailto:soylorenaorlando@gmail.com"
              className="bg-white hover:bg-[#ffff0f] border border-black rounded-[40px] px-3.5 py-1.5 flex items-center gap-2 text-xs sm:text-sm font-sans text-black transition-all shadow-xs"
            >
              <Mail className="w-4 h-4 text-black" />
              <span>soylorenaorlando@gmail.com</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/pragmagicka"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-[#ffff0f] border border-black rounded-[40px] px-3.5 py-1.5 flex items-center gap-2 text-xs sm:text-sm font-sans text-black transition-all shadow-xs"
            >
              <Instagram className="w-4 h-4 text-black" />
              <span>@pragmagicka</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Stripe Credits */}
      <div className="w-full bg-[#bae9ee] border-t border-black py-3 sm:py-4 px-4 sm:px-8">
        <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-sans text-xs sm:text-sm text-black font-normal">
            Pragmagicka 2026 - Diseño web por Lorena Orlando (
            <a
              href="https://lorenaorlando.click"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-75 font-medium"
            >
              lorenaorlando.click
            </a>
            )
          </p>

          <button
            id="scroll-to-top-btn"
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-viaoda text-black hover:opacity-75 cursor-pointer"
          >
            <span>{lang === 'esp' ? 'Subir al inicio' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
