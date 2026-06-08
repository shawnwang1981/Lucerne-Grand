import { useRef } from 'react';
import { ShoppingBag, Building2, TrendingUp, CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Galleria() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const { t } = useLanguage();
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={sectionRef} className="py-24 bg-white text-[#1C1C1C] relative border-t border-[#1C1C1C]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          <div>
            <h3 className="text-[#8C7355] uppercase tracking-[0.3em] text-[11px] font-bold mb-4">{t("Rare Proposition")}</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] leading-tight uppercase">
              {t("A Rare Lakeside")}<br />{t("Launch With")}<br />
              <span className="italic text-[#8C7355] capitalize">{t("Convenience")}</span><br />
              <span className="italic text-[#8C7355] capitalize">{t("Built In")}</span>
            </h2>
          </div>

          <p className="text-[#1C1C1C]/60 text-lg leading-relaxed max-w-lg">
            {t("Lucerne Grand is expected to rise on a Lakeside Drive site zoned Residential with Commercial at Level 1 — a rare proposition in the precinct.")}
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Building2 className="w-6 h-6 text-[#8C7355]" />
              <span className="text-lg font-light tracking-wide">{t("5 Blocks of 17 Storey")}</span>
            </div>
            <div className="flex items-center space-x-4">
              <TrendingUp className="w-6 h-6 text-[#8C7355]" />
              <span className="text-lg font-light tracking-wide">{t("GFA Harmonised Development")}</span>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#1C1C1C]/10">
            <h4 className="text-[#8C7355] font-serif text-2xl mb-6">{t("Why this matters")}</h4>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                "Level 1 supermarket, F&B and retail kiosks for residents convenience.",
                "A differentiated product in the Lakeside market.",
                "A more vibrant live-work-play environment for residents."
              ].map((text, i) => (
                <div key={i} className="flex flex-col space-y-3">
                  <CheckCircle className="w-5 h-5 text-[#8C7355]" />
                  <p className="text-sm text-[#1C1C1C]/60">{t(text)}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-[#1C1C1C]/10 relative">
            <motion.img 
              style={{ y, scale: 1.3 }}
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" 
              alt="Grocery" 
              className="object-cover w-full h-full transform-origin-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-[#1C1C1C]/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-serif tracking-widest text-white uppercase">{t("Lucerne")}</h3>
              <p className="tracking-[0.3em] text-white/80 uppercase text-sm">{t("Galleria")}</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
