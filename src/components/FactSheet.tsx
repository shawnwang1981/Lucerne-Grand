import { Search, Info, Map } from 'lucide-react';
import { projectData } from '../data';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import rationaleImg from '../assets/images/lucerne_grand_rationale_1780897543312.png';

export default function FactSheet() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#EBE8E3] text-[#1C1C1C]">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 sm:px-12"
      >
        <div className="text-center mb-16">
          <h3 className="text-[#8C7355] uppercase tracking-[0.3em] text-xs sm:text-sm font-bold mb-4">{t("Fact Sheet")}</h3>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1C1C1C]">{t("Name Rationale for Lucerne Grand")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-lg text-[#1C1C1C]/60 leading-relaxed max-w-lg"
          >
            <p>
              {t("• Inspired by the alpine lake town of Lucerne in Switzerland, the name LUCERNE GRAND reflects the development's \"mountain + lake\" architectural concept and design intent.")}
            </p>
            <p>
              {t("• Elements of distinctive European mountain landscape and architecture are expressed in the exterior of the development, with close proximity to the nearby waterbody, Jurong Lake.")}
            </p>
            <p>
              {t("• Paired with \"Grand\", the name becomes both a hallmark of the City Developments Limited brand and a promise of quality residential living.")}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img 
              src={rationaleImg} 
              alt="Lucerne Grand 荟瑞星 Architectural Rationale - CDL Luxury Condo" 
              className="w-full h-auto object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="bg-[#F7F5F2] rounded-2xl shadow-sm border border-[#1C1C1C]/10 p-6 sm:p-8 md:p-12"
        >
          <p className="uppercase tracking-widest text-xs sm:text-sm font-bold text-[#1C1C1C]/40 mb-2">{t("Developer")}</p>
          <p className="font-medium text-base sm:text-lg mb-8">
            {t("CDL POLARIS PROPERTIES PTE. LTD (LUCERNE GRAND)")}<br/>
            {t("CDL POLARIS COMMERCIAL PTE. LTD (LUCERNE GALLERIA)")}
          </p>

          <p className="text-lg sm:text-xl mb-4 font-light">
            {projectData.blocks} {t("BLOCKS OF")} {projectData.storeys}{t("-STOREY RESIDENTIAL DEVELOPMENT WITH COMMERCIAL AT 1ST STOREY.")}
          </p>
          <p className="text-lg sm:text-xl font-medium text-[#8C7355]">
            {t("TOTAL: ")}{projectData.units}{t(" RESIDENTIAL UNITS")}
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
