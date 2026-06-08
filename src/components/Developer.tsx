import { Building2, Globe, Award, Leaf } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Developer() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white text-[#1C1C1C] relative border-t border-[#1C1C1C]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[#8C7355] uppercase tracking-[0.3em] text-[11px] font-bold mb-4">{t("The Developer")}</h3>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] leading-tight">
                {t("City Developments Limited (CDL)")}
              </h2>
            </div>

            <p className="text-[#1C1C1C]/60 text-lg leading-relaxed">
              {t("City Developments Limited (CDL) is a leading global real estate company with a network spanning 143 locations in 28 countries and regions. Listed on the Singapore Exchange, the Group is one of the largest companies by market capitalisation.")}
            </p>
            
            <p className="text-[#1C1C1C]/60 text-lg leading-relaxed">
              {t("With a proven track record of over 60 years in real estate development, investment, and management, CDL has developed over 50,000 homes and owns around 23 million square feet of gross floor area in residential, commercial, and hospitality assets globally.")}
            </p>

            <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-[#1C1C1C]/10">
              <div className="flex flex-col space-y-3">
                <Globe className="w-6 h-6 text-[#8C7355]" />
                <h4 className="text-lg font-medium text-[#1C1C1C]">{t("Global Presence")}</h4>
                <p className="text-sm text-[#1C1C1C]/60">{t("143 locations across 28 countries and regions.")}</p>
              </div>
              <div className="flex flex-col space-y-3">
                <Award className="w-6 h-6 text-[#8C7355]" />
                <h4 className="text-lg font-medium text-[#1C1C1C]">{t("Trusted Legacy")}</h4>
                <p className="text-sm text-[#1C1C1C]/60">{t("Over 60 years of proven track record and excellence.")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-full min-h-[400px] lg:min-h-[500px]"
          >
             <div className="absolute inset-0 bg-[#F7F5F2] rounded-3xl -rotate-2 transform border border-[#1C1C1C]/5"></div>
             <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-xl border border-[#1C1C1C]/10 z-10 flex items-center justify-center">
                <div className="relative h-full w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80")' }}>
                   <div className="absolute inset-0 bg-[#1C1C1C]/40 mix-blend-multiply"></div>
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-20 text-center">
                     <div className="bg-[#F7F5F2] px-10 py-16 rounded-2xl shadow-2xl flex items-center justify-center border border-[#1C1C1C]/10 w-[95%] max-w-[550px]">
                       <img 
                         src="https://iili.io/CKgFyUQ.webp" 
                         alt="City Developments Limited (CDL) Logo" 
                         className="max-h-[140px] md:max-h-[180px] w-full object-contain"
                       />
                     </div>
                   </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
