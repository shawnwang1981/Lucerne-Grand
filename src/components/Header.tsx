import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#1C1C1C]/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 h-20 flex items-center justify-start">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#1C1C1C]/10 bg-white/50 backdrop-blur hover:bg-[#F7F5F2] transition-colors text-[13px] font-medium text-[#1C1C1C]"
        >
          <Globe className="w-4 h-4 text-[#8C7355]" />
          <span className={language === 'en' ? 'font-bold' : ''}>EN</span>
          <span className="text-gray-300">|</span>
          <span className={language === 'zh' ? 'font-bold' : ''}>中文</span>
        </button>
      </div>
    </motion.header>
  );
}
