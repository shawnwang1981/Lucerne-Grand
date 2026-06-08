import { Globe, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.volume = 0.2;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
          }).catch(err => {
            console.log("Audio autoplay blocked", err);
          });
        }
        setHasInteracted(true);
      }
    };

    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('scroll', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, [hasInteracted]);

  const toggleVolume = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.2;
        audioRef.current.play().catch(e => console.log(e));
      }
      setIsPlaying(!isPlaying);
      setHasInteracted(true);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#1C1C1C]/5' : 'bg-transparent'
      }`}
    >
      <audio 
        ref={audioRef} 
        loop 
        src="https://upload.wikimedia.org/wikipedia/commons/b/b5/10_-_B_-_Gymnopedie_No_1.ogg" 
        preload="auto" 
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 h-20 flex items-center justify-start gap-4">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#1C1C1C]/10 bg-white/50 backdrop-blur hover:bg-[#F7F5F2] transition-colors text-[13px] font-medium text-[#1C1C1C]"
        >
          <Globe className="w-4 h-4 text-[#8C7355]" />
          <span className={language === 'en' ? 'font-bold' : ''}>EN</span>
          <span className="text-gray-300">|</span>
          <span className={language === 'zh' ? 'font-bold' : ''}>中文</span>
        </button>

        <button
          onClick={toggleVolume}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[#1C1C1C]/10 bg-white/50 backdrop-blur hover:bg-[#F7F5F2] transition-colors text-[#1C1C1C]"
          aria-label="Toggle background music"
        >
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-[#8C7355]" />
          ) : (
            <VolumeX className="w-4 h-4 text-[#1C1C1C]/40" />
          )}
        </button>
      </div>
    </motion.header>
  );
}
