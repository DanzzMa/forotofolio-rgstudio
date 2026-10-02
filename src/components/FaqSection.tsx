import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/portfolioData';
import { soundFx } from '../utils/audioSynth';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    soundFx.playClick();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="px-4 md:px-8 py-16 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 bg-[#FF3B94] text-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000] text-xs font-black uppercase mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>TANYA-TANYA SANTAI</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight font-display">
          Pertanyaan yang Sering Muncul
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-800 font-medium">
          Biar makin jelas dan gak bingung, baca-baca dulu hal yang sering ditanyain di sini ya.
        </p>
      </div>

      <div className="space-y-3.5">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`neo-box transition-all ${
                isOpen ? 'bg-[#FFFDF0]' : 'bg-white hover:bg-neutral-50'
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer gap-4"
                aria-expanded={isOpen}
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#5865F2] block mb-1">
                    {faq.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-black font-display">
                    {faq.question}
                  </h3>
                </div>
                <div className={`w-8 h-8 shrink-0 border-2 border-black flex items-center justify-center font-black transition-colors ${
                  isOpen ? 'bg-[#FFE600] text-black' : 'bg-neutral-100 text-black'
                }`}>
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium border-t-2 border-neutral-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
