import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, string> = {
  // Hero
  "A New Landmark Is Rising": "新地标的崛起",
  "Jurong Lake District": "裕廊湖区",
  "Seeking Indication Of Interest": "诚意登记中",
  "Coming Soon ": "即将登场 ",
  "MRT": "地铁站",

  // Key Selling Points
  "Overview": "项目概览",
  "Why": "为何",
  "Lucerne Grand": "琉森嘉园",
  "stands out": "脱颖而出",
  "A rare blend of transport, lifestyle and future growth in one Lakeside address.": "集交通、生活方式和未来增长于湖畔一处的罕见之选。",
  
  "Lakeside MRT at your doorstep": "湖畔地铁站近在咫尺",
  "Easy East-West Line commuting for work, schools and leisure.": "轻松搭乘东西线，上下班、上学和休闲都非常方便。",
  
  "Two stops to Jurong East": "两站即达裕廊东",
  "Fast access to Jurong Lake District and the west's key interchange.": "快速前往裕廊湖区以及西部主要交通枢纽。",
  
  "A garden-and-lake lifestyle": "花园与湖畔的生活方式",
  "Live moments from Jurong Lake Gardens and everyday greenery.": "紧靠裕廊湖花园，时刻享受日常绿色生活。",
  
  "Family-ready convenience": "家庭生活的便利",
  "Popular schools and daily amenities add practical appeal.": "名校林立与日常便利设施增添了实用吸引力。",

  // Lifestyle
  "Lifestyle": "生活方式",
  "One minute to": "距离一分钟",
  "Jurong Lake Gardens": "裕廊湖花园",
  "A rare part of the Lucerne Grand story is the ability to step out and be moments from one of Singapore's most impressive green escapes.": "琉森嘉园罕见的优势之一，是只需步出家门，即可抵达新加坡最迷人的绿洲之一。",
  "A Natural Retreat": "自然静修",
  "A scenic sanctuary for wellness right by Lakeside.": "湖畔旁风景如画的身心康养圣地。",
  "Active Living": "活力生活",
  "Jog, cycle or walk through vast green connectors.": "沿着宽阔的绿色连廊慢跑、骑行或散步。",
  "Weekend Escapes": "周末时光",
  "Open lawns, water features and garden spaces make weekends more meaningful.": "开阔的草坪、水景和花园空间，让周末生活更加充实。",

  // Galleria
  "Rare Proposition": "难得机遇",
  "A mixed-use development": "综合开发项目",
  "Lucerne Grand brings unparalleled convenience. With Lucerne Galleria on the ground level, everyday essentials, dining, and retail options are right below your home.": "琉森嘉园带来无与伦比的便利。底层即是 Lucerne Galleria 购物廊，日常必需品、餐饮和零售选项都在您家楼下。",
  
  "Unmatched Convenience": "无与伦比的便利",
  "Groceries, cafes, and services an elevator ride away.": "搭乘电梯即可抵达超市、咖啡厅和各项服务设施。",
  
  "Vibrant Ecosystem": "充满活力的生态",
  "A curated mix of lifestyle and retail options.": "精心挑选的生活与零售组合。",
  
  "Future-Ready Investment": "面向未来的投资",
  "Positioned to benefit from the Jurong Lake District transformation.": "地理位置优越，将受益于裕廊湖区的改造发展。",
  
  "Galleria": "购物廊",

  // Location
  "Connectivity": "交通连接",
  "Being directly adjacent to Lakeside MRT means seamless connectivity. Arrive at Jurong East in 2 stops, and the CBD in less than 30 minutes.": "紧贴湖畔地铁站意味着无缝连接。两站即达裕廊东，30分钟内抵达中央商务区。",
  
  "Immediate Access": "即时连接",
  "No feeder buses or long walks required.": "无需搭乘接驳巴士或长途步行。",
  
  "Sheltered Pathways": "带顶遮蓬走道",
  "Comfortable commute regardless of the weather.": "风雨无阻的舒适通勤。",
  
  "Regional Hub": "区域中心",
  "Close proximity to Jurong Lake District, Singapore's second CBD.": "毗邻新加坡第二中央商务区——裕廊湖区。",

  // Floor Plans
  "Floor Plans": "户型图",
  "Thoughtfully Designed Spaces": "精心设计的空间",
  "Register to receive the full set of floor plans and layout variations once they are released.": "请注册以在全套户型图及布局选项发布时第一时间获取。",
  "1 Bedroom": "1 卧室",
  "2 Bedroom": "2 卧室",
  "3 Bedroom": "3 卧室",
  "4 Bedroom": "4 卧室",
  "View Details": "查看详情",
  "Click to Enquire": "点击咨询",

  // Developer
  "The Developer": "开发商",
  "City Developments Limited": "城市发展有限公司 (CDL)",
  "With decades of property development track record in Singapore, CDL is a leading global real estate operating company.": "凭借在新加坡几十年的房地产开发记录，CDL 是一家全球领先的房地产运营公司。",
  
  "Global Presence": "全球业务",
  "A network spanning 143 locations in 28 countries and regions.": "业务网络覆盖28个国家和地区的143个地点。",
  
  "Awards & Recognition": "奖项与荣誉",
  "Consistent winner of top industry awards for quality and sustainability.": "在质量和可持续发展方面屡获行业最高奖项。",
  
  "Proven Track Record": "卓越的记录",
  "Over 60 years of proven track record and excellence.": "超过60年的卓越业绩与成就。",

  // Fact Sheet
  "Fact Sheet": "项目概况",
  "Name Rationale for Lucerne Grand": "琉森嘉园命名由来",
  "'Lucerne' evokes the serene beauty of the famous Swiss city known for its stunning lake, surrounded by mountains and historical architecture. The name draws a parallel to the project's unique location next to Jurong Lake, offering a tranquil and picturesque living environment.": "“Lucerne” 让人联想到以绝美湖泊、群山和历史建筑闻名的瑞士名城。这一名称呼应了项目紧邻裕廊湖的独特地理位置，提供了一个宁静如画的居住环境。",
  
  "Developer": "开发商",
  "Brief": "简介",
  "Units": "单位总数",

  "TOTAL: ": "共计：",
  " RESIDENTIAL UNITS": " 套住宅单位",
  " BLOCKS OF ": " 栋 ",
  "-STOREY RESIDENTIAL DEVELOPMENT WITH COMMERCIAL AT 1ST STOREY.": " 层住宅，一层为商业用途。",

  // Contact
  "Register for Exclusive Updates": "注册获取独家消息",
  "Message Developer": "联系开发商",
  "Reach out for the latest information and to secure your preview appointment.": "联系我们获取最新信息，锁定您的预览预约。",

  // Floating CTA
  "WhatsApp Us": "WhatsApp 我们",

  // Nav
  "Location": "位置",
  "Contact": "联系我们",

  // Global Replace
  "Lucerne": "琉森 (Lucerne)",
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'zh' : 'en';
    setLanguage(nextLang);
    localStorage.setItem('language', nextLang);
  };

  const t = (key: string) => {
    if (language === 'zh' && translations[key]) {
      return translations[key];
    }
    return key; // return English (the key itself)
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
