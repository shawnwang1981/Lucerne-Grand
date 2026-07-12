import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function ThankYou() {
  const { t } = useLanguage();

  useEffect(() => {
    // Scroll to top when the thank you page loads
    window.scrollTo(0, 0);

    // Trigger Google Ads conversion tracking when the Thank You page is rendered
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18267610181/HJhJCOeL2cQcEMW41oZE',
        'value': 1.0,
        'currency': 'SGD'
      });
    }
  }, []);

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-10 sm:p-16 text-[#1C1C1C] shadow-2xl relative overflow-hidden max-w-2xl w-full text-center border border-[#1C1C1C]/10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-24 h-24 bg-[#F7F5F2] rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle2 className="w-12 h-12 text-[#8C7355]" />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] mb-6">
          {t("Thank You")}
        </h1>
        
        <p className="text-[#1C1C1C]/60 text-lg max-w-md mx-auto mb-10 leading-relaxed">
          {t("Your registration has been received. We will contact you shortly with floor plans and pricing updates.")}
        </p>

        <Link 
          to="/"
          className="inline-flex items-center justify-center bg-[#1C1C1C] text-white hover:bg-[#8C7355] transition-colors py-4 px-8 rounded-full font-bold text-sm uppercase tracking-widest shadow-md"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t("Back to Home")}
        </Link>
      </motion.div>
    </section>
  );
}
