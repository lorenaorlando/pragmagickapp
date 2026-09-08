import React from 'react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  onOpenInfo?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
}) => {
  return (
    <header className="w-full bg-[#bae9ee] border-b border-black sticky top-0 z-40 transition-colors">
      <div className="w-full py-3 sm:py-4 px-4 sm:px-8 flex items-center justify-between gap-3">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#hero"
            className="flex items-center gap-1.5 sm:gap-2 group text-black no-underline focus:outline-none"
          >
            <span className="font-viaoda text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight group-hover:opacity-85 transition-opacity">
              PRAGMAGICKA
            </span>
            <span className="hidden sm:inline-block text-xs sm:text-sm font-normal text-black/70 pt-1 sm:pt-2 font-sans border-l border-black/30 pl-2">
              {lang === 'esp' ? 'Esoterismo Pragmático' : 'Pragmatic Esotericism'}
            </span>
          </a>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switch */}
          <div className="bg-white border border-black rounded-[40px] p-0.5 flex items-center shadow-xs">
            <button
              id="lang-esp-btn"
              type="button"
              onClick={() => onLanguageChange('esp')}
              className={`px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-viaoda uppercase tracking-wider transition-all ${
                lang === 'esp'
                  ? 'bg-black text-white rounded-[40px]'
                  : 'text-black hover:bg-black/5 rounded-[40px]'
              }`}
            >
              ESP
            </button>
            <button
              id="lang-eng-btn"
              type="button"
              onClick={() => onLanguageChange('eng')}
              className={`px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-viaoda uppercase tracking-wider transition-all ${
                lang === 'eng'
                  ? 'bg-black text-white rounded-[40px]'
                  : 'text-black hover:bg-black/5 rounded-[40px]'
              }`}
            >
              ENG
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
