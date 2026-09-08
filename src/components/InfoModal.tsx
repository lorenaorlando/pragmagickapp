import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { CONTENT } from '../content';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const t = CONTENT[lang].modal;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-start">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px]"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{
              type: 'spring',
              damping: 28,
              stiffness: 260,
            }}
            className="relative z-10 w-full bg-white border-b border-black shadow-xl max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="w-full bg-[#bae9ee] border-b border-black py-4 px-4 sm:px-8 flex items-center justify-between">
              <h2 className="font-viaoda text-xl sm:text-2xl font-normal tracking-tight text-black">
                {t.title}
              </h2>
              <button
                id="close-modal-btn"
                type="button"
                onClick={onClose}
                className="bg-[#ffff0f] hover:brightness-95 active:brightness-90 border border-black rounded-[40px] px-4 py-1.5 font-viaoda text-sm sm:text-base text-black flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>{t.close}</span>
                <span aria-hidden="true" className="text-xs">✕</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="max-w-xl mx-auto px-6 py-8 sm:py-10 space-y-6 text-base sm:text-lg text-black/90 font-normal leading-relaxed">
              <div className="space-y-2">
                <h3 className="font-viaoda text-lg sm:text-xl text-black tracking-wide">
                  {t.sectionPhilosophy}
                </h3>
                <p className="text-black/85">{t.philosophyText}</p>
              </div>

              <div className="w-full border-b border-black/15 my-4" />

              <div className="space-y-2">
                <h3 className="font-viaoda text-lg sm:text-xl text-black tracking-wide">
                  {t.techStackTitle}
                </h3>
                <p className="text-black/85">{t.techStackText}</p>
              </div>

              <div className="w-full border-b border-black/15 my-4" />

              {/* Author Signature */}
              <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://lorenalandia.fun/wp-content/uploads/2026/02/ME_ISLAND_TINY.png"
                    alt="Lorena Orlando"
                    referrerPolicy="no-referrer"
                    className="w-[25px] h-[25px] rounded-full object-cover border border-black"
                  />
                  <span className="font-sans text-sm text-black/80">
                    {t.authorByline}
                  </span>
                </div>
                <a
                  href="https://lorenaorlando.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#ffff0f] hover:brightness-95 border border-black rounded-[40px] px-3.5 py-1 text-xs font-viaoda text-black transition-all"
                >
                  lorenaorlando.com ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
