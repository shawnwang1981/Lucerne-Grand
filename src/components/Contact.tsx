import { MessageCircle, Building2, Send, CheckCircle2 } from 'lucide-react';
import { projectData } from '../data';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import contactBg from '../assets/images/contact_bg_1781749466480.jpg';
import React, { useState } from 'react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Google Ads conversion tracking
    let isTrackingComplete = false;
    
    const proceedWithSubmission = () => {
      if (isTrackingComplete) return;
      isTrackingComplete = true;
      
      const text = `Hi, I am interested in Lucerne Grand. Here are my details:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nEnquiries: ${formData.message || 'N/A'}`;
      const encodedText = encodeURIComponent(text);
      const mailtoUrl = `mailto:contact@shawnsgproperty.com?subject=${encodeURIComponent("Enquiry for Lucerne Grand")}&body=${encodedText}`;
      
      window.location.href = mailtoUrl;
      setStatus('success');
    };

    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18267610181/HJhJCOeL2cQcEMW41oZE',
        'value': 1.0,
        'currency': 'SGD',
        'event_callback': proceedWithSubmission
      });
      // Fallback in case gtag doesn't fire the callback
      setTimeout(proceedWithSubmission, 1000);
    } else {
      proceedWithSubmission();
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setStatus('idle');
  };

  return (
    <section id="register" className="py-32 relative border-t border-[#1C1C1C]/10 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={contactBg} 
          alt="Contact Lucerne Grand 荟瑞星 - VIP Preview at Jurong Lake District" 
          className="w-full h-full object-cover object-center sm:object-center opacity-90"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/70 backdrop-blur-[4px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            {t("Ready to explore")} <br />
            <span className="text-[#D4C3A3] italic font-light">{t("Lucerne Grand?")}</span>
          </h2>
          <p className="text-lg text-white/80 font-light pt-6 max-w-2xl mx-auto">
            {t("Get the latest preview updates, pricing guidance, floor plans and buyer insights directly from the developer sales team.")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Direct Contact Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center space-y-10"
          >
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-xs sm:text-sm uppercase tracking-[0.3em] font-bold text-[#D4C3A3]">
                {t("Direct Contact")}
              </h3>
              <p className="text-3xl lg:text-4xl font-serif text-white leading-snug">
                {t("Prefer to chat?")}
              </p>
              <p className="text-white/70 font-light text-lg">
                {t("Message us on WhatsApp for an immediate response from our sales team.")}
              </p>
            </div>
            
            <a 
              href="https://wa.me/6598581998?text=I%20am%20interested%20in%20Lucerne%20Grand"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-full lg:w-auto bg-[#D4C3A3] text-[#1C1C1C] hover:bg-white transition-all duration-300 py-5 px-8 rounded-full font-bold text-[14px] uppercase tracking-widest shadow-xl relative overflow-hidden"
            >
              <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform relative z-10" />
              <span className="relative z-10">{t("WhatsApp Us")}</span>
            </a>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="bg-[#F7F5F2] rounded-3xl p-8 sm:p-10 text-[#1C1C1C] shadow-2xl relative overflow-hidden h-full"
          >
            {/* Subtle logo backdrop */}
            <div className="absolute -top-10 -right-10 opacity-[0.03] pointer-events-none">
              <Building2 className="w-72 h-72" />
            </div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <h3 className="text-xs sm:text-sm uppercase tracking-[0.3em] font-bold text-[#8C7355] mb-2">
                  {t("VIP Preview")}
                </h3>
                <p className="text-2xl font-serif text-[#1C1C1C]">
                  {t("Register your interest")}
                </p>
              </div>

              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                >
                  <CheckCircle2 className="w-16 h-16 text-[#8C7355]" />
                  <div className="space-y-2">
                    <h4 className="text-2xl font-serif text-[#1C1C1C]">{t("Thank You")}</h4>
                    <p className="text-[#1C1C1C]/60 text-sm max-w-sm">
                      {t("Your registration has been received. We will contact you shortly with floor plans and pricing updates.")}
                    </p>
                  </div>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 bg-transparent border border-[#1C1C1C]/10 hover:border-[#8C7355] text-xs uppercase tracking-widest font-semibold rounded-full text-[#1C1C1C]/60 hover:text-[#8C7355] transition-all cursor-pointer"
                  >
                    {t("Submit Another Registration")}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-[#1C1C1C]/60">{t("Name")}</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white border border-[#1C1C1C]/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8C7355] focus:ring-1 focus:ring-[#8C7355] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-[#1C1C1C]/60">{t("Phone")}</label>
                      <input 
                        type="tel" 
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-white border border-[#1C1C1C]/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8C7355] focus:ring-1 focus:ring-[#8C7355] transition-all"
                        placeholder="+65 9123 4567"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-[#1C1C1C]/60">{t("Email")}</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white border border-[#1C1C1C]/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#8C7355] focus:ring-1 focus:ring-[#8C7355] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2 relative">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-[#1C1C1C]/60">{t("Enquiries")}</label>
                    <div className="relative">
                      <select 
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-white border border-[#1C1C1C]/10 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:border-[#8C7355] focus:ring-1 focus:ring-[#8C7355] transition-all appearance-none"
                      >
                        <option value="" disabled>{t("Select an option")}</option>
                        <option value="interested in 2 bedder">{t("interested in 2 bedder")}</option>
                        <option value="interested in 3 bedder">{t("interested in 3 bedder")}</option>
                        <option value="interested in 4 bedder">{t("interested in 4 bedder")}</option>
                        <option value="interested in floorplans">{t("interested in floorplans")}</option>
                        <option value="interested in updated pricing">{t("interested in updated pricing")}</option>
                        <option value="interested in ebook">{t("interested in ebook")}</option>
                      </select>
                      <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-[#1C1C1C]/40">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* PDPA consent and Google Ads PPC compliance disclosure */}
                  <div className="text-[10px] sm:text-xs text-[#1C1C1C]/50 leading-relaxed pt-2 border-t border-[#1C1C1C]/5 space-y-1">
                    <p>
                      {t("By clicking 'Submit Details', you consent to Shawn Wang (Huttons Asia Ltd) collecting, using, and disclosing your personal data to contact you via Call/SMS/WhatsApp/Email with pricing updates, floor plans, and VIP showflat previews for Lucerne Grand, in compliance with the Singapore Personal Data Protection Act (PDPA).")}
                    </p>
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#1C1C1C] text-white hover:bg-[#8C7355] transition-colors py-4 rounded-xl font-bold text-[13px] uppercase tracking-widest shadow-md flex items-center justify-center disabled:opacity-70 mt-4 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        {t("Submitting...")}
                      </span>
                    ) : (
                      <span className="flex items-center">
                        {t("Submit Details")}
                        <Send className="w-4 h-4 ml-2" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}
