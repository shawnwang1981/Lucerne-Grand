import { MessageCircle } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FloatingCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 600) {
      if (!isVisible) setIsVisible(true);
    } else {
      if (isVisible) setIsVisible(false);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 ${!isVisible ? 'pointer-events-none' : ''}`}
    >
      <a
        href="https://wa.me/6598581998?text=I%20am%20interested%20in%20Lucerne%20Grand"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[#8C7355] text-white hover:bg-[#1C1C1C] transition-colors py-3 px-4 md:py-4 md:px-6 rounded-full font-bold text-[12px] md:text-[14px] uppercase tracking-widest shadow-2xl group"
      >
        <MessageCircle className="w-5 h-5 md:mr-3 group-hover:scale-110 transition-transform" />
        <span className="hidden md:inline">{t("WhatsApp Us")}</span>
      </a>
    </motion.div>
  );
}
