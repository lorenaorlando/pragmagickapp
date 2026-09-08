import React from 'react';
import { Language, TarotPlan } from '../types';
import { CONTENT } from '../content';

interface TarotReadingsProps {
  lang: Language;
  onSelectPlan: (plan: TarotPlan) => void;
}

export const TarotReadings: React.FC<TarotReadingsProps> = ({
  lang,
  onSelectPlan,
}) => {
  const t = CONTENT[lang].tarotSection;

  return (
    <section id="tarot" className="w-full bg-white border-b border-black">
      {/* Section Strip Header */}
      <div className="w-full bg-[#bae9ee] border-b border-black py-3 sm:py-3.5 px-4 text-center">
        <h2 className="font-viaoda text-xl sm:text-2xl md:text-3xl font-normal tracking-tight text-black">
          {t.title}
        </h2>
        <p className="font-sans text-xs sm:text-sm text-black/75 pt-0.5 max-w-xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black">
        {t.plans.map((plan) => (
          <div
            key={plan.id}
            className={`p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-colors ${
              plan.popular ? 'bg-[#ffff0f]/10' : 'bg-white'
            } hover:bg-black/[0.015]`}
          >
            {/* Top metadata */}
            <div className="space-y-4">
              <div className="flex items-center justify-between min-h-[26px]">
                {plan.popular ? (
                  <span className="bg-[#ffff0f] border border-black rounded-[40px] px-3 py-0.5 text-xs font-viaoda text-black shadow-xs">
                    {lang === 'esp' ? 'Más solicitada' : 'Most Popular'}
                  </span>
                ) : (
                  <span className="text-xs text-black/50 font-sans uppercase tracking-wider">
                    {plan.format === 'written' ? (lang === 'esp' ? 'Escrito' : 'Written') : (lang === 'esp' ? 'Videollamada' : 'Videocall')}
                  </span>
                )}
                {plan.duration && (
                  <span className="text-xs font-sans text-black/70 bg-black/5 border border-black/20 rounded-[40px] px-2.5 py-0.5">
                    {plan.duration}
                  </span>
                )}
              </div>

              {/* Title & Price */}
              <div className="space-y-1">
                <h3 className="font-viaoda text-2xl sm:text-3xl text-black tracking-tight leading-tight">
                  {plan.title}
                </h3>
                <div className="pt-2 flex items-baseline gap-1.5">
                  <span className="font-viaoda text-3xl sm:text-4xl text-black font-normal">
                    ${plan.priceUSD}
                  </span>
                  <span className="font-sans text-xs sm:text-sm text-black/65">
                    USD
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full border-b border-black/15 my-2" />

              {/* Feature List */}
              <ul className="space-y-2.5 pt-1">
                {plan.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-black/85 font-normal leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                id={`book-${plan.id}-btn`}
                href="https://wa.link/k3du5h"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#ffff0f] hover:brightness-95 active:brightness-90 border border-black rounded-[40px] py-2.5 px-4 font-viaoda text-sm sm:text-base text-black transition-all shadow-xs cursor-pointer text-center no-underline block"
              >
                {t.bookButton} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
