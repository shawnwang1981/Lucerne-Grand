import { Train, Building, Briefcase, MapIcon } from 'lucide-react';
import { motion } from 'motion/react';
import locationImg from '../assets/images/regenerated_image_1780887626735.png';

export default function Location() {
  return (
    <section className="py-24 bg-[#F7F5F2] text-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[#8C7355] uppercase tracking-[0.3em] text-[11px] font-bold mb-4">Connectivity</h3>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] leading-tight">
                Doorstep to <br />
                <span className="italic text-[#8C7355]">Lakeside MRT</span>
              </h2>
            </div>

            <p className="text-[#1C1C1C]/60 text-lg leading-relaxed max-w-md">
              Seamless access to Jurong East, the CBD and major interchanges.
            </p>

            <div className="flex items-center space-x-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#1C1C1C] text-white flex items-center justify-center">
                <Train className="w-5 h-5" />
              </div>
              <div className="h-0.5 w-12 bg-[#1C1C1C]/10"></div>
              <div className="w-10 h-10 rounded-full bg-white border border-[#1C1C1C]/10 flex items-center justify-center text-[#1C1C1C]/40">
                <Train className="w-5 h-5" />
              </div>
              <div className="h-0.5 w-12 bg-[#1C1C1C]/10"></div>
              <div className="w-10 h-10 rounded-full bg-white border border-[#1C1C1C]/10 flex items-center justify-center text-[#1C1C1C]/40">
                <Train className="w-5 h-5" />
              </div>
            </div>
            
            <div className="space-y-8 pt-8 border-t border-[#1C1C1C]/10">
              <div className="flex space-x-6">
                <Building className="w-8 h-8 text-[#8C7355] shrink-0" />
                <div>
                  <h4 className="text-xl font-medium text-[#1C1C1C] mb-2">To Jurong East / JLD</h4>
                  <p className="text-[#1C1C1C]/60 leading-relaxed">Fast access to the West's key interchange and Singapore's next major business district. JLD - Jurong Lake District</p>
                </div>
              </div>
              <div className="flex space-x-6">
                <Briefcase className="w-8 h-8 text-[#8C7355] shrink-0" />
                <div>
                  <h4 className="text-xl font-medium text-[#1C1C1C] mb-2">To the CBD</h4>
                  <p className="text-[#1C1C1C]/60 leading-relaxed">Direct East-West Line connectivity makes city commuting straightforward.</p>
                </div>
              </div>
              <div className="flex space-x-6">
                <MapIcon className="w-8 h-8 text-[#8C7355] shrink-0" />
                <div>
                  <h4 className="text-xl font-medium text-[#1C1C1C] mb-2">To the wider island</h4>
                  <p className="text-[#1C1C1C]/60 leading-relaxed">Well-linked to major rail interchanges and expressways.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-xl h-full min-h-[500px]"
          >
            <img 
              src={locationImg} 
              alt="Singapore Transit" 
              className="object-cover w-full h-full grayscale-[20%] sepia-[10%] opacity-90"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
