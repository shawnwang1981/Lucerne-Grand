import { TreePine, Footprints, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Lifestyle() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#EBE8E3] text-[#1C1C1C] overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-[0.03]"
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=1920&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} 
      />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 relative z-10 flex flex-col items-center text-center space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 max-w-2xl"
        >
          <h3 className="text-[#8C7355] uppercase tracking-[0.3em] text-[11px] font-bold">{t("Lifestyle")}</h3>
          <h2 className="text-4xl md:text-6xl font-serif text-[#1C1C1C]">
            {t("One minute to")} <br/>
            <span className="text-[#8C7355] italic font-light">{t("Jurong Lake Gardens")}</span>
          </h2>
          <p className="text-[#1C1C1C]/60 text-lg md:text-xl font-light">
            {t("A rare part of the Lucerne Grand story is the ability to step out and be moments from one of Singapore's most impressive green escapes.")}
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
          className="grid md:grid-cols-3 gap-8 w-full pt-8"
        >
          {[
            {
              icon: TreePine,
              title: t("Jurong Lake Gardens"),
              desc: t("Singapore's 90-hectare national garden in the heartlands")
            },
            {
              icon: Footprints,
              title: t("Daily Wellness"),
              desc: t("Morning jogs, evening walks and fresh air become part of daily life.")
            },
            {
              icon: Sun,
              title: t("Family Moments"),
              desc: t("Open lawns, water features and garden spaces make weekends more meaningful.")
            }
          ].map((item, index) => (
             <motion.div 
               key={index} 
               variants={{
                 hidden: { opacity: 0, y: 40 },
                 visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
               }}
               className="bg-white border border-[#1C1C1C]/10 p-8 rounded-2xl flex flex-col items-center text-center"
             >
               <div className="w-16 h-16 rounded-full bg-[#F7F5F2] border border-[#1C1C1C]/5 text-[#8C7355] flex items-center justify-center mb-6">
                 <item.icon className="w-8 h-8" />
               </div>
               <h4 className="text-xl font-medium text-[#1C1C1C] mb-4">{item.title}</h4>
               <p className="text-[#1C1C1C]/60">{item.desc}</p>
             </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
