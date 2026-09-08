import React, { useEffect } from 'react';
import { Language, DigitalProduct } from '../types';
import { CONTENT } from '../content';

interface DigitalResourcesProps {
  lang: Language;
  onSelectProduct: (product: DigitalProduct) => void;
}

export const DigitalResources: React.FC<DigitalResourcesProps> = ({
  lang,
  onSelectProduct,
}) => {
  const t = CONTENT[lang].resourcesSection;

  useEffect(() => {
    // Load Gumroad embed script if not already loaded, or re-trigger
    const scriptId = 'gumroad-embed-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://gumroad.com/js/gumroad-embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const ebookProduct: DigitalProduct = {
    id: 'ebook-major-arcana',
    type: 'ebook',
    title: t.ebookTitle,
    description: t.ebookDesc,
    priceUSD: 11,
    gumroadUrl: 'https://pragmagicka.gumroad.com/l/guide-arcana',
  };

  const courseProduct: DigitalProduct = {
    id: 'course-tarot-action',
    type: 'course',
    tag: t.courseTag,
    title: t.courseTitle,
    description: t.courseDesc,
    syllabus: t.courseSyllabus,
    priceUSD: 74,
    gumroadUrl: 'https://pragmagicka.gumroad.com/l/tarot-accion',
  };

  return (
    <section id="resources" className="w-full bg-white border-b border-black">
      {/* Section Strip Header */}
      <div className="w-full bg-[#bae9ee] border-b border-black py-3 sm:py-3.5 px-4 text-center">
        <h2 className="font-viaoda text-xl sm:text-2xl md:text-3xl font-normal tracking-tight text-black">
          {t.title}
        </h2>
        <p className="font-sans text-xs sm:text-sm text-black/75 pt-0.5">
          {t.subtitle}
        </p>
      </div>

      {/* 2-Card Grid */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black">
        {/* Card 1: Ebook */}
        <div className="p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-white hover:bg-black/[0.015] transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="bg-[#bae9ee] border border-black rounded-[40px] px-3 py-0.5 text-xs font-viaoda text-black shadow-xs">
                Ebook Digital
              </span>
              <span className="text-xs text-black/50 font-sans">PDF + Guía</span>
            </div>

            <h3 className="font-viaoda text-2xl sm:text-3xl text-black tracking-tight leading-tight">
              {t.ebookTitle}
            </h3>

            <p className="font-sans text-sm sm:text-base text-black/85 font-normal leading-relaxed">
              {t.ebookDesc}
            </p>

            <div className="pt-2 flex items-baseline gap-1.5">
              <span className="font-viaoda text-3xl sm:text-4xl text-black font-normal">
                {t.ebookPrice}
              </span>
            </div>

            {/* Gumroad Embedded Product for Ebook */}
            <div className="pt-3 border-t border-black/15">
              <div className="gumroad-product-embed w-full min-h-[140px] bg-white border border-black/20 rounded-md overflow-hidden p-2">
                <a
                  href="https://pragmagicka.gumroad.com/l/guide-arcana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-viaoda text-sm text-black underline underline-offset-4 hover:opacity-80 block text-center py-4"
                >
                  {lang === 'esp' ? 'Cargando producto de Gumroad...' : 'Loading Gumroad product...'}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-2">
            <a
              id="buy-ebook-direct-link"
              href="https://pragmagicka.gumroad.com/l/guide-arcana"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#ffff0f] hover:brightness-95 active:brightness-90 border border-black rounded-[40px] py-2.5 px-4 font-viaoda text-sm sm:text-base text-black transition-all shadow-xs cursor-pointer text-center no-underline block"
            >
              {t.ebookCta} →
            </a>
          </div>
        </div>

        {/* Card 2: Course */}
        <div className="p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-white hover:bg-black/[0.015] transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="bg-[#ffff0f] border border-black rounded-[40px] px-3 py-0.5 text-xs font-viaoda text-black shadow-xs">
                {t.courseTag}
              </span>
              <span className="text-xs text-black/50 font-sans">On-demand</span>
            </div>

            <h3 className="font-viaoda text-2xl sm:text-3xl text-black tracking-tight leading-tight">
              {t.courseTitle}
            </h3>

            <p className="font-sans text-sm sm:text-base text-black/85 font-normal leading-relaxed">
              {t.courseDesc}
            </p>

            {/* Syllabus */}
            <ul className="space-y-2 pt-1 border-t border-black/15 py-3">
              {t.courseSyllabus.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-black/85 font-normal leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-1 flex items-baseline gap-1.5">
              <span className="font-viaoda text-3xl sm:text-4xl text-black font-normal">
                {t.coursePrice}
              </span>
            </div>

            {/* Gumroad Embedded Product */}
            <div className="pt-3 border-t border-black/15">
              <div className="gumroad-product-embed w-full min-h-[140px] bg-white border border-black/20 rounded-md overflow-hidden p-2">
                <a
                  href="https://pragmagicka.gumroad.com/l/tarot-accion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-viaoda text-sm text-black underline underline-offset-4 hover:opacity-80 block text-center py-4"
                >
                  {lang === 'esp' ? 'Cargando producto de Gumroad...' : 'Loading Gumroad product...'}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-2">
            <a
              id="buy-course-direct-link"
              href="https://pragmagicka.gumroad.com/l/tarot-accion"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#ffff0f] hover:brightness-95 active:brightness-90 border border-black rounded-[40px] py-2.5 px-4 font-viaoda text-sm sm:text-base text-black transition-all shadow-xs cursor-pointer text-center no-underline block"
            >
              {t.courseCta} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
