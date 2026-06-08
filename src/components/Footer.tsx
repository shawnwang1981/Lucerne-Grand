import { projectData } from '../data';

export default function Footer() {
  return (
    <footer className="bg-[#F7F5F2] text-[#1C1C1C]/40 py-12 text-center text-[10px] border-t border-[#1C1C1C]/10">
      <div className="max-w-4xl mx-auto px-6 space-y-4">
        <p className="uppercase tracking-[0.3em] text-[#8C7355] font-serif mb-6">{projectData.name}</p>
        <p>Developer: {projectData.developer}</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Disclaimer: This is an independent information portal. Information provided is for general reference only and may be subject to change without prior notice. While every effort has been made to ensure the accuracy of the information presented, the creator assumes no responsibility for any errors or omissions.
        </p>
        <p className="pt-8 block">© {new Date().getFullYear()} {projectData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
