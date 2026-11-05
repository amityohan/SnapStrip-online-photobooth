import React from 'react';
import { Camera, ShieldCheck, Heart, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-800/80 bg-[#121110] py-12 px-4 sm:px-6 lg:px-8 text-neutral-400 text-xs light:border-[#E8E2D8] light:bg-[#F4EFE6] light:text-[#5A544C]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#E88B88] text-neutral-950 flex items-center justify-center font-bold light:text-neutral-900">
            <Camera className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-base font-serif font-black text-cream-100 light:text-[#1C1A17]">
              Snap<span className="text-[#E88B88]">Strip</span>
            </span>
            <span className="block text-[11px] text-neutral-400 light:text-[#7A7062]">
              Customizable Online Photobooth
            </span>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="flex items-center gap-2 text-neutral-400 bg-neutral-900/80 px-3.5 py-1.5 rounded-full border border-neutral-800 light:text-[#5A544C] light:bg-white/90 light:border-[#DDD5C7] light:shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-400 light:text-emerald-600" />
          <span>Zero cloud uploads. Photos process entirely inside your browser.</span>
        </div>

        {/* Contact Email & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-neutral-400 light:text-[#7A7062]">
          <a
            href="mailto:amityohan20@gmail.com"
            className="flex items-center gap-1.5 text-neutral-300 hover:text-[#E88B88] transition-colors light:text-[#4A4237] light:hover:text-[#E88B88]"
          >
            <Mail className="w-3.5 h-3.5 text-[#E88B88]" />
            <span>amityohan20@gmail.com</span>
          </a>
          <span className="hidden sm:inline opacity-40">•</span>
          <div className="flex items-center gap-1">
            <span>Crafted with vintage love</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline light:text-rose-500 light:fill-rose-500" />
            <span>• © {new Date().getFullYear()} SnapStrip</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

