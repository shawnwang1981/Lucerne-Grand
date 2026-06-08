import { Train, Map, TreePine, Home } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Train,
    title: "Lakeside MRT at your doorstep",
    description: "Easy East-West Line commuting for work, schools and leisure."
  },
  {
    icon: Map,
    title: "Two stops to Jurong East",
    description: "Fast access to Jurong Lake District and the west's key interchange."
  },
  {
    icon: TreePine,
    title: "A garden-and-lake lifestyle",
    description: "Live moments from Jurong Lake Gardens and everyday greenery."
  },
  {
    icon: Home,
    title: "Family-ready convenience",
    description: "Popular schools and daily amenities add practical appeal."
  }
];

export default function KeySellingPoints() {
  return (
    <section className="py-24 bg-white text-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h3 className="text-[#8C7355] uppercase tracking-[0.3em] text-[11px] font-bold">Overview</h3>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Why <br /> <span className="text-[#1C1C1C]">Lucerne Grand</span> <br /> 
              <span className="text-[#8C7355] italic font-light">stands out</span>
            </h2>
            <p className="text-[#1C1C1C]/60 text-lg max-w-md pt-4">
              A rare blend of transport, lifestyle and future growth in one Lakeside address.
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
            className="grid sm:grid-cols-2 gap-8"
          >
            {features.map((item, index) => (
              <motion.div 
                key={index} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="space-y-4"
              >
                <div className="w-12 h-12 rounded-full border border-[#1C1C1C]/10 flex items-center justify-center bg-transparent text-[#8C7355]">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#1C1C1C] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#1C1C1C]/60 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
