import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../content';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = CONTENT[lang].aboutSection;

  return (
    <section id="about" className="w-full bg-white border-b border-black">
      {/* Section Strip Header */}
      <div className="w-full bg-[#bae9ee] border-b border-black py-3 sm:py-3.5 px-4 text-center">
        <h2 className="font-viaoda text-xl sm:text-2xl md:text-3xl font-normal tracking-tight text-black">
          {t.title}
        </h2>
        <p className="font-sans text-xs sm:text-sm text-black/75 pt-0.5">
          {t.subtitle}
        </p>
      </div>

      {/* Editorial Content Container */}
      <div className="w-full max-w-4xl mx-auto py-10 sm:py-16 px-4 sm:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left / Top: Photo & Author Card */}
          <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="w-44 h-44 sm:w-52 sm:h-52 border border-black rounded-2xl p-2 bg-[#bae9ee]/30 shadow-xs relative overflow-hidden flex flex-col items-center justify-center">
              {/* Photo representation / portrait */}
              <img
                src="https://lorenalandia.fun/wp-content/uploads/2026/02/ME_ISLAND_TINY.png"
                alt="Lorena Orlando - Pragmagicka"
                referrerPolicy="no-referrer"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border border-black shadow-sm mb-2"
              />
              <span className="font-viaoda text-xs text-black/80 bg-white border border-black/40 px-3 py-0.5 rounded-[40px]">
                Lorena Orlando
              </span>
            </div>

            <div className="space-y-1">
              <p className="font-viaoda text-base sm:text-lg text-black">
                {t.authorTitle}
              </p>
              <p className="font-sans text-xs sm:text-sm text-black/65">
                {t.authorLocation}
              </p>
            </div>
          </div>

          {/* Right: Narrative Text */}
          <div className="md:col-span-8 space-y-5 text-base sm:text-lg text-black/90 font-normal leading-relaxed">
            {t.paragraphs.map((p, idx) => (
              <p key={idx} className="text-black/85">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
