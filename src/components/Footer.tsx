import { projectData } from '../data';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function Footer() {
  const { t, language } = useLanguage();
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-[#F7F5F2] text-[#1C1C1C]/40 py-12 text-center text-xs sm:text-sm border-t border-[#1C1C1C]/10 relative z-40">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6 space-y-4"
      >
        <p className="uppercase tracking-[0.3em] text-[#8C7355] font-serif mb-6">{language === 'zh' ? projectData.chineseName : projectData.name}</p>
        <p>{t("Developer")}: {projectData.developer}</p>
        
        <p className="max-w-2xl mx-auto leading-relaxed text-[11px] sm:text-xs">
          {t("Disclaimer: This is an independent information portal. Information provided is for general reference only and may be subject to change without prior notice. While every effort has been made to ensure the accuracy of the information presented, the creator assumes no responsibility for any errors or omissions.")}
        </p>
        
        <p className="max-w-2xl mx-auto leading-relaxed mt-4 text-[11px] sm:text-xs font-medium text-[#1C1C1C]/60">
          Advertised by Wang Jiarong (Shawn Wang) from Huttons Asia Ltd (Agency Licence No. L3008899K), CEA Registration No. R071966A.
        </p>

        <div className="flex justify-center gap-6 pt-4 text-xs font-semibold uppercase tracking-wider text-[#8C7355]">
          <button 
            onClick={() => setShowPrivacy(true)}
            className="hover:text-[#1C1C1C] transition-colors hover:underline cursor-pointer"
          >
            {t("Privacy Policy")}
          </button>
        </div>

        <p className="pt-8 block text-[10px]">© {new Date().getFullYear()} {language === 'zh' ? projectData.chineseName : projectData.name}. {t("All rights reserved.")}</p>
      </motion.div>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPrivacy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPrivacy(false)}
              className="absolute inset-0 bg-[#1C1C1C]/60 backdrop-blur-sm"
            />
            
            {/* Content Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-[#F7F5F2] rounded-3xl p-6 sm:p-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto text-[#1C1C1C] text-left shadow-2xl border border-white/20 scrollbar-thin scrollbar-thumb-gray-200"
            >
              <button 
                onClick={() => setShowPrivacy(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#1C1C1C]/5 transition-colors text-[#1C1C1C]/60 hover:text-[#1C1C1C]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6 pr-2">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C7355] block mb-2">
                    {t("Legal & Compliance")}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1C1C] border-b border-[#1C1C1C]/10 pb-4">
                    {t("Privacy Policy")}
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#1C1C1C]/70 leading-relaxed font-light">
                  {language === 'zh' ? (
                    <>
                      <p className="font-bold text-[#1C1C1C]/90">1. 个人资料收集与同意</p>
                      <p>
                        在您注册琉森嘉园（Lucerne Grand）预览和更新时，本网站将收集您的姓名、电子邮箱及联系电话。通过提交本表格，即表示您同意本网站按照新加坡《个人资料保护法令》（PDPA）的要求，收集、使用并披露您的个人信息，用于向您提供相关房产资讯。
                      </p>

                      <p className="font-bold text-[#1C1C1C]/90">2. 信息的使用目的</p>
                      <p>
                        收集的个人信息将严格用于：
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>向您发送琉森嘉园的最新的户型图、价格表和项目进度信息。</li>
                          <li>为您安排开发商专属贵宾展厅的预约。</li>
                          <li>由指定注册房产代理人（Wang Jiarong - Huttons Asia Ltd）与您取得直接联系，提供一对一咨询服务。</li>
                        </ul>
                      </p>

                      <p className="font-bold text-[#1C1C1C]/90">3. 信息披露与保护</p>
                      <p>
                        我们承诺：绝对不会向任何未经授权的第三方出售或出租您的个人数据。所有信息都将储存在安全的系统环境中，仅用于上述指定的房产咨询用途。
                      </p>

                      <p className="font-bold text-[#1C1C1C]/90">4. 取消订阅与撤销同意</p>
                      <p>
                        您可随时撤回对此数据的同意授权。如有意向撤销 consent、修改个人信息或取消接收未来更新，请随时通过 WhatsApp +65 9858 1998 或邮件 contact@shawnsgproperty.com 与我们取得联系。
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-bold text-[#1C1C1C]/90">1. Personal Data Collection & Consent</p>
                      <p>
                        When registering interest for Lucerne Grand, we collect personal details including your Name, Email Address, and Phone Number. By submitting our contact forms, you explicitly consent to the collection, use, and disclosure of your personal data by our registered agent under the Personal Data Protection Act (PDPA) of Singapore.
                      </p>

                      <p className="font-bold text-[#1C1C1C]/90">2. Purpose of Use</p>
                      <p>
                        Your details are used strictly for:
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li>Delivering requested marketing materials such as e-brochures, floor plans, and pricing updates.</li>
                          <li>Scheduling showroom viewings and managing registration for developer previews.</li>
                          <li>Direct communications from the marketing agent (Wang Jiarong, Huttons Asia Ltd) regarding your inquiry.</li>
                        </ul>
                      </p>

                      <p className="font-bold text-[#1C1C1C]/90">3. Security & Third-Party Disclosure</p>
                      <p>
                        We do not sell, rent, or lease your personal information to unauthorized third parties. All personal data collected is stored securely and processed in strict compliance with the local PDPA legislation.
                      </p>

                      <p className="font-bold text-[#1C1C1C]/90">4. Opt-Out & Enquiries</p>
                      <p>
                        You can opt-out or withdraw your consent to receiving updates at any time. For feedback, corrections, or data removal requests, please reach out to us directly via WhatsApp at +65 9858 1998 or email at contact@shawnsgproperty.com.
                      </p>
                    </>
                  )}
                </div>

                <div className="pt-6 border-t border-[#1C1C1C]/10 flex flex-wrap gap-x-6 gap-y-2 text-[11px] sm:text-xs text-[#1C1C1C]/40">
                  <span>CEA License: R071966A</span>
                  <span>Agency License: L3008899K</span>
                  <span>Contact: +65 9858 1998</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
