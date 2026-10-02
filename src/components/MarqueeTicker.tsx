import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    '🎬 RGSTUDIO CINEMATICS',
    '⚡ TRAILER FIVEM AUTO HYPE',
    '📸 FOTO KARAKTER RP GANTENG & CANTIK',
    '💥 MONTAGE WAR JEDAG-JEDUG RAPI',
    '🏎️ CAR MEETS & DRIFT TEASER',
    '🔊 SOUND DESIGN BIOSKOP',
    '✨ 4K 60FPS HDR MASTER',
    '💬 DISCORD STANDBY BUAT DISKUSI'
  ];

  return (
    <div className="border-y-4 border-black bg-[#FFE600] overflow-hidden select-none py-2.5">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-black font-black text-xs md:text-sm tracking-wider uppercase">
        {items.concat(items).map((item, idx) => (
          <span key={idx} className="flex items-center gap-3">
            <span>{item}</span>
            <span className="w-2.5 h-2.5 bg-black inline-block rotate-45" />
          </span>
        ))}
      </div>
    </div>
  );
};

export const SubMarqueeTicker: React.FC = () => {
  const items = [
    'BEBAS REQUEST LAGU & STYLE',
    'BEBAS REVISI SANTAI SAMPE SREG',
    'CAMTOOL KEYFRAME MULUS',
    'COLOR GRADING ALA FILM NETFLIX',
    'EFFECT RADIO POLISI REALISTIS',
    'PROSES SAT-SET GAK PAKE RIBET'
  ];

  return (
    <div className="border-b-4 border-black bg-[#000000] text-[#00F59B] overflow-hidden select-none py-2">
      <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-8 font-mono font-bold text-xs tracking-widest uppercase">
        {items.concat(items).map((item, idx) => (
          <span key={idx} className="flex items-center gap-3">
            <span>{item}</span>
            <span className="text-[#FF3B94]">★</span>
          </span>
        ))}
      </div>
    </div>
  );
};
