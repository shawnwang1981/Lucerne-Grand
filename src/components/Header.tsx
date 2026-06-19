import { Globe, ZoomIn, ZoomOut } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scale, setScale] = useState(1);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${16 * scale}px`;
  }, [scale]);

  const increaseSize = () => setScale(s => Math.min(s + 0.1, 1.3));
  const decreaseSize = () => setScale(s => Math.max(s - 0.1, 0.8));

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#1C1C1C]/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 h-20 flex items-center justify-between">
        
        <nav className="hidden md:flex items-center gap-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'location', label: 'Location' },
            { id: 'floorplans', label: 'Floor Plans' },
            { id: 'contact', label: 'Contact' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => {
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-medium text-[#1C1C1C]/60 hover:text-[#8C7355] transition-colors uppercase tracking-widest"
            >
              {t(item.label)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 ml-auto md:ml-0">
          <div className="flex items-center bg-white/50 backdrop-blur border border-[#1C1C1C]/10 rounded-full overflow-hidden">
            <button
              onClick={decreaseSize}
              disabled={scale <= 0.8}
              className="px-2 sm:px-3 py-2 text-[#1C1C1C]/60 hover:text-[#8C7355] hover:bg-[#F7F5F2] transition-colors disabled:opacity-50"
              aria-label="Decrease viewing size"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <div className="w-[1px] h-4 bg-[#1C1C1C]/10"></div>
            <button
              onClick={increaseSize}
              disabled={scale >= 1.3}
              className="px-2 sm:px-3 py-2 text-[#1C1C1C]/60 hover:text-[#8C7355] hover:bg-[#F7F5F2] transition-colors disabled:opacity-50"
              aria-label="Increase viewing size"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#1C1C1C]/10 bg-white/50 backdrop-blur hover:bg-[#F7F5F2] transition-colors text-xs sm:text-sm font-medium text-[#1C1C1C]"
          >
            <Globe className="w-4 h-4 text-[#8C7355]" />
            <span className={language === 'en' ? 'font-bold block' : 'hidden sm:block'}>EN</span>
            <span className="text-gray-300 hidden sm:block">|</span>
            <span className={language === 'zh' ? 'font-bold block' : 'hidden sm:block'}>中文</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
