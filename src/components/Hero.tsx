import { MapPin, Train } from 'lucide-react';
import { motion } from 'motion/react';
import { projectData } from '../data';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[100svh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-cover md:bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://ik.imagekit.io/pawwhere/jlg/jurong-lake-district.png")' }}
      >
        <div className="absolute inset-0 bg-[#F7F5F2]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,245,242,0.75)_0%,rgba(247,245,242,0.3)_45%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F5F2] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto space-y-8 tracking-wide"
      >
        <h3 className="text-[#8C7355] uppercase tracking-[0.3em] text-xs sm:text-sm font-bold">
          {t("A New Landmark Is Rising")}
        </h3>
        
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#1C1C1C] italic uppercase tracking-wider">
            {language === 'zh' ? projectData.chineseName : projectData.name}
          </h1>
          <h2 className="text-lg md:text-2xl text-[#1C1C1C]/60 font-light tracking-[0.2em]">
            {language === 'en' ? projectData.chineseName : projectData.name}
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 text-sm md:text-base font-medium">
          <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur border border-[#1C1C1C]/10 rounded-full text-[#1C1C1C] shadow-sm">
            <span className="bg-[#8C7355] text-white px-2 py-0.5 rounded text-xs font-bold mr-2 uppercase tracking-widest">{t("MRT")}</span>
            {projectData.mrt}
          </div>
          <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur border border-[#1C1C1C]/10 rounded-full text-[#1C1C1C] shadow-sm">
            <MapPin className="w-4 h-4 mr-2 text-[#8C7355]" />
            {t("Jurong Lake District")}
          </div>
        </div>

        <div className="pt-12">
          <p className="text-xs sm:text-sm text-[#1C1C1C]/40 uppercase tracking-widest mb-2">{t("Seeking Indication Of Interest")}</p>
          <p className="text-3xl md:text-4xl text-[#8C7355] font-serif uppercase">{t("Coming Soon ")}{projectData.launch}</p>
        </div>
      </motion.div>
    </section>
  );
}
