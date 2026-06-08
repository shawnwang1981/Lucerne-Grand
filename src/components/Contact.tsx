import { MessageCircle, Building2 } from 'lucide-react';
import { projectData } from '../data';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-white text-[#1C1C1C] relative border-t border-[#1C1C1C]/10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10"
      >
        
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-serif text-[#1C1C1C]">
            {t("Ready to explore")} <br />
            <span className="text-[#8C7355] italic font-light">{t("Lucerne Grand?")}</span>
          </h2>
          <p className="text-xl text-[#1C1C1C]/60 font-light pt-6">
            {t("Get the latest preview updates, pricing guidance, floor plans and buyer insights directly from the developer sales team.")}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="bg-[#F7F5F2] border border-[#1C1C1C]/5 rounded-3xl p-6 sm:p-8 md:p-12 text-[#1C1C1C] max-w-sm mx-auto shadow-lg relative overflow-hidden"
        >
          {/* Subtle logo backdrop */}
          <div className="absolute -top-6 -right-6 opacity-[0.03] pointer-events-none">
            <Building2 className="w-48 h-48" />
          </div>
          
          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8C7355]">
                {t("VIP Preview")}
              </h3>
              <p className="text-2xl font-serif text-[#1C1C1C] leading-snug">
                {t("Register your interest now!")}
              </p>
            </div>
            
            <a 
              href="https://wa.me/6598581998?text=I%20am%20interested%20in%20Lucerne%20Grand"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-[#1C1C1C] text-white hover:bg-[#8C7355] transition-colors py-4 rounded-full font-bold text-[14px] uppercase tracking-widest shadow-md mt-8"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              {t("WhatsApp Us")}
            </a>
          </div>
        </motion.div>

        <p className="text-[#1C1C1C]/40 text-sm max-w-2xl mx-auto">
          {t("Reach out for the latest information and to secure your preview appointment.")}
        </p>

      </motion.div>
    </section>
  );
}
