import { useState, useEffect } from 'react';
import { Language, TarotPlan, DigitalProduct } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TarotReadings } from './components/TarotReadings';
import { DigitalResources } from './components/DigitalResources';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { InfoModal } from './components/InfoModal';
import { BookingModal } from './components/BookingModal';

const STORAGE_KEY_LANG = 'pragmagicka_lang_v1';

export default function App() {
  const [lang, setLang] = useState<Language>('esp');
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  // Booking modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<TarotPlan | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<DigitalProduct | null>(null);

  // Load language from localStorage on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY_LANG) as Language;
      if (savedLang === 'esp' || savedLang === 'eng') {
        setLang(savedLang);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem(STORAGE_KEY_LANG, newLang);
    } catch {
      // Ignore storage errors
    }
  };

  const handleSelectPlan = (plan: TarotPlan) => {
    setSelectedPlan(plan);
    setSelectedProduct(null);
    setIsBookingOpen(true);
  };

  const handleSelectProduct = (product: DigitalProduct) => {
    setSelectedProduct(product);
    setSelectedPlan(null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedPlan(null);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col selection:bg-[#ffff0f] selection:text-black">
      {/* 1. Header with Language Switch */}
      <Header
        lang={lang}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <HeroSection lang={lang} />

        {/* 2. Tarot Readings Pricing */}
        <TarotReadings lang={lang} onSelectPlan={handleSelectPlan} />

        {/* 3. Digital Resources (Ebook & Course) */}
        <DigitalResources
          lang={lang}
          onSelectProduct={handleSelectProduct}
        />

        {/* 4. About Section */}
        <AboutSection lang={lang} />
      </main>

      {/* 5. Footer */}
      <Footer lang={lang} />

      {/* Slide-down Info Modal */}
      <InfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        lang={lang}
      />

      {/* Booking / Checkout Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        lang={lang}
        selectedPlan={selectedPlan}
        selectedProduct={selectedProduct}
      />
    </div>
  );
}
