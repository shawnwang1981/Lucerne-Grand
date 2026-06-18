import { Lock, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FloorPlans() {
  const { t } = useLanguage();

  const floorPlans = [
    { 
      title: t("2-Bedroom"), 
      size: "620 - 710 sqft",
      types: [t("2-Bedroom (2 Bath)"), t("2-Bedroom + Study")]
    },
    { 
      title: t("3-Bedroom"), 
      size: "870 - 1,000 sqft",
      types: [t("3-Bedroom"), t("3-Bedroom Premium + Study")]
    },
    { 
      title: t("4-Bedroom"), 
      size: "1,140 - 1,430 sqft",
      types: [t("4-Bedroom Premium"), t("4-Bedroom Premium + Study"), t("4-Bedroom Premium + Entertainment")]
    },
  ];

  return (
    <section id="floorplans" className="py-24 bg-[#EBE8E3] text-[#1C1C1C] border-t border-[#1C1C1C]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 space-y-4"
        >
          <h3 className="text-[#8C7355] uppercase tracking-[0.3em] text-[11px] font-bold">{t("The Residence")}</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C]">
            {t("Unit Mix & Floor Plans")}
          </h2>
          <p className="text-[#1C1C1C]/60 text-lg max-w-2xl mx-auto font-light">
            {t("A thoughtfully curated selection of bespoke residences, designed for those who seek the harmony of architectural precision and natural serenity.")}
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {floorPlans.map((plan, i) => (
            <motion.a 
              key={i} 
              href="https://wa.me/6598581998?text=I%20would%20like%20to%20get%20the%20latest%20floor%20plans%20for%20Lucerne%20Grand"
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="bg-white border border-[#1C1C1C]/10 rounded-2xl overflow-hidden flex flex-col group shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
            >
              <div className="p-8 border-b border-[#1C1C1C]/5 bg-white z-20 flex-1">
                <h4 className="font-serif text-2xl text-[#1C1C1C] mb-2">{plan.title}</h4>
                <p className="text-[#8C7355] text-sm uppercase tracking-widest font-bold mb-6 block">{plan.size}</p>
                <ul className="space-y-3">
                  {plan.types.map((type, idx) => (
                    <li key={idx} className="flex items-start text-sm text-[#1C1C1C]/70">
                      <span className="text-[#8C7355] mr-2">•</span>
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative flex-1 bg-[#F7F5F2] min-h-[300px] flex items-center justify-center p-8 overflow-hidden">
                  {/* Faux Floorplan Lines */}
                  <div className="absolute inset-8 border-2 border-dashed border-[#1C1C1C]/20 rounded-lg group-hover:border-[#8C7355]/40 transition-colors duration-500"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 border border-[#1C1C1C]/10 grid grid-cols-2 grid-rows-2 group-hover:scale-105 transition-transform duration-700">
                     <div className="border-r border-b border-[#1C1C1C]/10 relative">
                       <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full border border-[#1C1C1C]/20"></div>
                     </div>
                     <div className="border-b border-[#1C1C1C]/10 relative">
                       <div className="absolute top-4 right-4 w-12 h-2 bg-[#1C1C1C]/5"></div>
                     </div>
                     <div className="border-r border-[#1C1C1C]/10"></div>
                     <div className="relative">
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border rounded-full border-[#1C1C1C]/10"></div>
                     </div>
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md p-6 rounded-xl border border-[#1C1C1C]/10 shadow-lg text-center min-w-[200px] transform group-hover:-translate-y-1 transition-transform duration-300">
                    <Lock className="w-6 h-6 text-[#8C7355] mb-3" />
                    <p className="font-bold text-[11px] uppercase tracking-[0.2em] text-[#1C1C1C]">{t("Draft Floor Plan")}</p>
                    <p className="text-[10px] text-[#1C1C1C]/60 mt-1 uppercase tracking-widest">{t("Coming Soon ")}</p>
                  </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/6598581998?text=I%20would%20like%20to%20get%20the%20latest%20floor%20plans%20for%20Lucerne%20Grand"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center bg-[#1C1C1C] text-white hover:bg-[#8C7355] transition-colors duration-300 py-4 px-10 rounded-full font-bold text-[14px] uppercase tracking-widest shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
            <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform relative z-10" />
            <span className="relative z-10">{t("Click to Enquire")}</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
