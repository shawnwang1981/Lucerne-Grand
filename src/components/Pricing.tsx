import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { FileText, Bell } from 'lucide-react';

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 bg-white text-[#1C1C1C]">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6 sm:px-12 text-center"
      >
        <div className="mb-16">
          <h3 className="text-[#8C7355] uppercase tracking-[0.3em] text-xs sm:text-sm font-bold mb-4">{t("Indicative Pricing")}</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] mb-6">
            {t("Attractive Launch Prices")}
          </h2>
          <p className="text-[#1C1C1C]/60 text-lg max-w-2xl mx-auto">
            {t("Get the latest pricing updates and receive exclusive early-bird discounts when you register for our VVIP Preview.")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#F7F5F2] p-8 rounded-2xl border border-[#1C1C1C]/10 flex flex-col h-full"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <FileText className="w-5 h-5 text-[#8C7355]" />
            </div>
            <h4 className="text-xl font-medium mb-3">{t("Price List")}</h4>
            <p className="text-[#1C1C1C]/60 text-sm mb-6 flex-grow">
              {t("Detailed pricing for 2-bedroom to 4-bedroom premium units will be available closer to the launch date.")}
            </p>
            <a href="#register" className="text-[#8C7355] font-bold text-sm uppercase tracking-widest hover:text-[#1C1C1C] transition-colors inline-flex items-center">
              {t("Register for updates")}
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#F7F5F2] p-8 rounded-2xl border border-[#1C1C1C]/10 flex flex-col h-full"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Bell className="w-5 h-5 text-[#8C7355]" />
            </div>
            <h4 className="text-xl font-medium mb-3">{t("Launch Alerts")}</h4>
            <p className="text-[#1C1C1C]/60 text-sm mb-6 flex-grow">
              {t("Be the first to know when the official prices are released and secure your preferred unit.")}
            </p>
            <a href="#register" className="text-[#8C7355] font-bold text-sm uppercase tracking-widest hover:text-[#1C1C1C] transition-colors inline-flex items-center">
              {t("Get Notified")}
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
