import React from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { soundFx } from '../utils/audioSynth';

interface FooterProps {
  onOpenDiscord: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDiscord }) => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 border-t-4 border-black bg-black text-white">
      {/* Top Banner inside Footer */}
      <div className="bg-[#FFE600] text-black border-b-4 border-black px-4 md:px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="text-xs font-mono font-black uppercase text-black/70 mb-1">
              MAU BIKIN SERVER ATAU GANG KAMU MAKIN NAIK KELAS?
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display uppercase tracking-tight">
              Gas Langsung Ngobrol Bareng RGSTUDIO di Discord!
            </h2>
          </div>
          <button
            onClick={() => {
              soundFx.playBassDrop();
              onOpenDiscord();
            }}
            className="neo-btn bg-[#5865F2] hover:bg-[#4752c4] text-white font-black text-sm px-7 py-3.5 flex items-center gap-2.5 cursor-pointer uppercase tracking-wider whitespace-nowrap"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span>Join Discord Sekarang</span>
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="bg-[#FFE600] text-black font-black text-base px-2.5 py-0.5 border-2 border-white">
                RG
              </span>
              <span className="text-xl font-black font-display tracking-tight">
                STUDIO FIVEM
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md leading-relaxed font-medium">
              Studio kreatif spesialis video editing, cinematic trailer, dan foto karakter FiveM GTA V Indonesia. Menghadirkan visual beresolusi 4K dengan preset grafis NVE dan sound effect sekelas film bioskop.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 pt-2">
              <span>📍 Indonesia · Online</span>
              <span>·</span>
              <span>⚡ Standby Setiap Hari di Discord</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono text-xs font-bold text-[#FFE600] uppercase tracking-wider mb-2">
              Menu Cepat
            </div>
            <ul className="text-xs space-y-2 font-medium text-neutral-300">
              <li>
                <a href="#galeri" className="hover:text-[#FFE600] transition-colors">
                  Galeri Karya Proyek
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#FFE600] transition-colors">
                  Paket & Biaya
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-[#FFE600] transition-colors">
                  Kata Klien (Wall of Fame)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FFE600] transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Discord Direct Info */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs font-bold text-[#00F59B] uppercase tracking-wider mb-2">
              Discord Resmi
            </div>
            <p className="text-xs text-neutral-400 font-medium leading-relaxed">
              Mau konsultasi ide atau tanya-tanya harga khusus buat event server kamu?
            </p>
            <div className="p-3 bg-neutral-900 border border-neutral-700 text-xs font-mono">
              <span className="text-neutral-400 block text-[10px]">Discord Server:</span>
              <span className="text-[#00F59B] font-bold">discord.gg/fivemcinematics</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Disclaimer */}
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
          <p>
            © {new Date().getFullYear()} RGSTUDIO. Desain Neo-Brutalism. Tidak terafiliasi resmi dengan Rockstar Games.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#FFE600] hover:underline cursor-pointer font-bold"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
