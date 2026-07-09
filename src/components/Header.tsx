import { Globe, ZoomIn, ZoomOut, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { projectData } from '../data';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scale, setScale] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${16 * scale}px`;
  }, [scale]);

  const increaseSize = () => setScale(s => Math.min(s + 0.1, 1.3));
  const decreaseSize = () => setScale(s => Math.max(s - 0.1, 0.8));

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'location', label: 'Location' },
    { id: 'floor-plans', label: 'Floor Plans' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'register', label: 'VVIP Register' }
  ];

  const handleScrollTo = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#1C1C1C]/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 h-20 flex items-center justify-between">
        
        {/* Brand Name / Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[#1C1C1C] font-serif font-bold text-sm sm:text-base uppercase tracking-[0.2em] hover:text-[#8C7355] transition-colors flex items-center gap-2 cursor-pointer z-50"
        >
          <span>{language === 'zh' ? projectData.chineseName : projectData.name}</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="text-xs font-semibold text-[#1C1C1C]/60 hover:text-[#8C7355] transition-colors uppercase tracking-widest cursor-pointer"
            >
              {t(item.label)}
            </button>
          ))}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2 sm:gap-3 z-50">
          {/* Zoom Controls */}
          <div className="hidden sm:flex items-center bg-white/50 backdrop-blur border border-[#1C1C1C]/10 rounded-full overflow-hidden">
            <button
              onClick={decreaseSize}
              disabled={scale <= 0.8}
              className="px-2.5 py-2 text-[#1C1C1C]/60 hover:text-[#8C7355] hover:bg-[#F7F5F2] transition-colors disabled:opacity-50 cursor-pointer"
              aria-label="Decrease viewing size"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <div className="w-[1px] h-4 bg-[#1C1C1C]/10"></div>
            <button
              onClick={increaseSize}
              disabled={scale >= 1.3}
              className="px-2.5 py-2 text-[#1C1C1C]/60 hover:text-[#8C7355] hover:bg-[#F7F5F2] transition-colors disabled:opacity-50 cursor-pointer"
              aria-label="Increase viewing size"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          {/* Language Selector */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#1C1C1C]/10 bg-white/50 backdrop-blur hover:bg-[#F7F5F2] transition-colors text-xs sm:text-sm font-semibold text-[#1C1C1C] cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-[#8C7355]" />
            <span className={language === 'en' ? 'font-bold' : ''}>EN</span>
            <span className="text-gray-300">|</span>
            <span className={language === 'zh' ? 'font-bold' : ''}>中文</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 -mr-2 text-[#1C1C1C] hover:text-[#8C7355] transition-colors md:hidden focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden w-full bg-white border-t border-[#1C1C1C]/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className="w-full text-left py-2 text-sm font-semibold uppercase tracking-widest text-[#1C1C1C]/70 hover:text-[#8C7355] transition-colors cursor-pointer"
                >
                  {t(item.label)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
