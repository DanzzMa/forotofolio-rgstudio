import React, { useState } from 'react';
import { MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../utils/audioSynth';

interface NavbarProps {
  onOpenDiscord: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiscord }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF0] border-b-4 border-black px-4 md:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Zone 1: Single text element wordmark with RGSTUDIO */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); soundFx.playClick(); }}
          className="text-xl md:text-2xl font-black tracking-tighter text-black uppercase font-display flex items-center gap-2 group"
        >
          <span className="bg-[#FFE600] px-2.5 py-0.5 border-2 border-black shadow-[2px_2px_0px_#000] group-hover:rotate-2 transition-transform">
            RG
          </span>
          <span>STUDIO</span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-black tracking-wide">
          <button 
            onClick={() => handleNavClick('galeri')} 
            className="hover:text-[#FF3B94] transition-colors py-1 cursor-pointer whitespace-nowrap"
          >
            Galeri Karya
          </button>
          <button 
            onClick={() => handleNavClick('layanan')} 
            className="hover:text-[#FF3B94] transition-colors py-1 cursor-pointer whitespace-nowrap"
          >
            Paket & Biaya
          </button>
          <button 
            onClick={() => handleNavClick('testimoni')} 
            className="hover:text-[#FF3B94] transition-colors py-1 cursor-pointer whitespace-nowrap"
          >
            Kata Klien
          </button>
          <button 
            onClick={() => handleNavClick('faq')} 
            className="hover:text-[#FF3B94] transition-colors py-1 cursor-pointer whitespace-nowrap"
          >
            Tanya Jawab
          </button>
        </nav>

        {/* Zone 3: Direct Discord action */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              soundFx.playBassDrop();
              onOpenDiscord();
            }}
            className="hidden sm:inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752c4] text-white text-xs md:text-sm font-black px-4 py-2.5 border-3 border-black shadow-[3px_3px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000] transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat di Discord</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 border-2 border-black bg-[#FFE600] shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t-2 border-black flex flex-col gap-2.5 pb-2">
          <button
            onClick={() => handleNavClick('galeri')}
            className="text-left font-bold py-2 px-3 border-2 border-black bg-white hover:bg-[#FFE600] transition-colors text-sm"
          >
            🎬 Galeri Karya
          </button>
          <button
            onClick={() => handleNavClick('layanan')}
            className="text-left font-bold py-2 px-3 border-2 border-black bg-white hover:bg-[#FF3B94] hover:text-white transition-colors text-sm"
          >
            💰 Paket & Biaya
          </button>
          <button
            onClick={() => handleNavClick('testimoni')}
            className="text-left font-bold py-2 px-3 border-2 border-black bg-white hover:bg-[#00D4FF] transition-colors text-sm"
          >
            ⭐ Kata Klien
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="text-left font-bold py-2 px-3 border-2 border-black bg-white hover:bg-[#FFE600] transition-colors text-sm"
          >
            ❓ Tanya Jawab (FAQ)
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDiscord();
            }}
            className="flex items-center justify-center gap-2 bg-[#5865F2] text-white font-black py-2.5 px-3 border-2 border-black shadow-[3px_3px_0px_#000] text-sm uppercase mt-1"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Gas Chat di Discord Sekarang</span>
          </button>
        </div>
      )}
    </header>
  );
};
