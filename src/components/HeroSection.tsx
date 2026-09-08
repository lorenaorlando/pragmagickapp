import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../content';

interface HeroSectionProps {
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const t = CONTENT[lang];

  return (
    <section id="hero" className="w-full bg-white border-b border-black">
      <div className="w-full max-w-3xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-8 flex flex-col items-center text-center space-y-6">
        {/* Title */}
        <h1 className="font-viaoda text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-black leading-none">
          {t.siteTitle}
        </h1>

        {/* Subtitle */}
        <p className="font-viaoda text-xl sm:text-2xl md:text-3xl font-normal tracking-wide text-black/90">
          {t.heroSubtitle}
        </p>

        {/* Thick divider accent */}
        <div className="w-16 h-[2px] bg-black my-1" />

        {/* Body */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-black/85 font-normal leading-relaxed max-w-2xl">
          {t.heroBody}
        </p>

        {/* Quick Nav Chips */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <a
            href="#tarot"
            className="bg-white hover:bg-[#ffff0f] border border-black rounded-[40px] px-4 py-1.5 font-viaoda text-sm sm:text-base text-black transition-all shadow-xs"
          >
            {t.nav.tarot} ↓
          </a>
          <a
            href="#resources"
            className="bg-white hover:bg-[#ffff0f] border border-black rounded-[40px] px-4 py-1.5 font-viaoda text-sm sm:text-base text-black transition-all shadow-xs"
          >
            {t.nav.resources} ↓
          </a>
          <a
            href="#about"
            className="bg-white hover:bg-[#ffff0f] border border-black rounded-[40px] px-4 py-1.5 font-viaoda text-sm sm:text-base text-black transition-all shadow-xs"
          >
            {t.nav.about} ↓
          </a>
        </div>
      </div>
    </section>
  );
};
