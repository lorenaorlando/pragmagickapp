import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Mail, X } from 'lucide-react';
import { Language, TarotPlan, DigitalProduct } from '../types';
import { CONTENT } from '../content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  selectedPlan: TarotPlan | null;
  selectedProduct: DigitalProduct | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  selectedPlan,
  selectedProduct,
}) => {
  const t = CONTENT[lang].bookingModal;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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

  if (!isOpen) return null;

  const itemTitle = selectedPlan ? selectedPlan.title : selectedProduct?.title || '';
  const itemPrice = selectedPlan ? selectedPlan.priceUSD : selectedProduct?.priceUSD || 0;
  const isTarot = !!selectedPlan;

  const whatsappMessage = encodeURIComponent(
    lang === 'esp'
      ? `Hola Lorena, me gustaría solicitar: "${itemTitle}" ($${itemPrice} USD). ¿Cuáles son los siguientes pasos para coordinar?`
      : `Hi Lorena, I'd like to request: "${itemTitle}" ($${itemPrice} USD). What are the next steps to coordinate?`
  );

  const emailSubject = encodeURIComponent(
    `Solicitud Pragmagicka: ${itemTitle}`
  );
  const emailBody = encodeURIComponent(
    lang === 'esp'
      ? `Hola Lorena,\n\nMe interesa adquirir/agendar: ${itemTitle} por $${itemPrice} USD.\n\nQuedo atento/a a tus indicaciones.`
      : `Hi Lorena,\n\nI am interested in acquiring/booking: ${itemTitle} for $${itemPrice} USD.\n\nLooking forward to your guidance.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/30 backdrop-blur-[2px]"
        />

        {/* Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-lg bg-white border border-black shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="w-full bg-[#bae9ee] border-b border-black py-3.5 px-4 sm:px-6 flex items-center justify-between">
            <h3 className="font-viaoda text-lg sm:text-xl font-normal tracking-tight text-black">
              {isTarot ? t.title : t.titleProduct}
            </h3>
            <button
              id="close-booking-modal-btn"
              type="button"
              onClick={onClose}
              className="bg-[#ffff0f] hover:brightness-95 active:brightness-90 border border-black rounded-[40px] p-1 text-black cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Selected item summary */}
            <div className="bg-[#ffff0f]/15 border border-black p-4 space-y-2">
              <span className="text-xs font-sans font-medium uppercase tracking-wider text-black/60">
                {t.step1}
              </span>
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-viaoda text-xl sm:text-2xl text-black leading-snug">
                  {itemTitle}
                </h4>
                <div className="text-right shrink-0">
                  <span className="font-viaoda text-2xl sm:text-3xl text-black font-normal">
                    ${itemPrice}
                  </span>
                  <span className="text-xs text-black/65 block font-sans">USD</span>
                </div>
              </div>

              {selectedPlan && (
                <ul className="pt-2 space-y-1 text-xs sm:text-sm text-black/80 font-normal border-t border-black/15 mt-2">
                  {selectedPlan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-black shrink-0 mt-1.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}

              {selectedProduct?.description && (
                <p className="text-xs sm:text-sm text-black/80 font-normal pt-1 border-t border-black/15 mt-2">
                  {selectedProduct.description}
                </p>
              )}
            </div>

            {/* Step 2: Contact actions */}
            <div className="space-y-3">
              <span className="text-xs font-sans font-medium uppercase tracking-wider text-black/60">
                {t.step2}
              </span>
              <p className="text-xs sm:text-sm text-black/85 leading-relaxed font-normal">
                {t.instruction}
              </p>

              <div className="pt-2 flex flex-col gap-2.5">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.link/k3du5h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#ffff0f] hover:brightness-95 active:brightness-90 border border-black rounded-[40px] py-3 px-4 flex items-center justify-center gap-2 font-viaoda text-sm sm:text-base text-black transition-all shadow-xs cursor-pointer text-center no-underline"
                >
                  <MessageCircle className="w-4 h-4 text-black" />
                  <span>{t.whatsappCta}</span>
                </a>

                {/* Email Button */}
                <a
                  href={`mailto:soylorenaorlando@gmail.com?subject=${emailSubject}&body=${emailBody}`}
                  className="w-full bg-white hover:bg-black/5 active:bg-black/10 border border-black rounded-[40px] py-2.5 px-4 flex items-center justify-center gap-2 font-viaoda text-sm sm:text-base text-black transition-all shadow-xs cursor-pointer text-center no-underline"
                >
                  <Mail className="w-4 h-4 text-black" />
                  <span>{t.emailCta}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
