import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      server: 'Batavia City Roleplay (Slot 250+)',
      client: 'Reza "Vandals"',
      role: 'Owner Batavia RP',
      rating: 5,
      content: 'Trailer Season 3 bikinan RGSTUDIO beneran nendang banget! Hari H launching antrean player tembus 150+ orang. Warna NVE sama racikan suaranya berasa film Hollywood.',
      tag: 'Server Trailer 4K'
    },
    {
      server: 'District 9 Gang (West Coast RP)',
      client: 'Kael "Bane"',
      role: 'War Leader / Gang Head',
      rating: 5,
      content: 'Montage war gang kita diedit sinkron banget sama beat bass phonk. Di-upload ke TikTok langsung rame 300K views dan banyak yang mau join geng!',
      tag: 'Gang Montage'
    },
    {
      server: 'Nusantara Pride RP',
      client: 'Alya "Vittoria"',
      role: 'Fraksi Leader Donna Famiglia',
      rating: 5,
      content: 'Foto karakter RP editorialnya cakep parah! Detail baju desainer sama lighting sunset Vinewood Hills keliatan mewah banget. Worth it dan prosesnya cepet!',
      tag: 'RP Photoshoot 8K'
    }
  ];

  return (
    <section id="testimoni" className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b-4 border-black">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#00D4FF] text-black font-black text-xs px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_#000] uppercase">
              CLIENT WALL OF FAME
            </span>
            <span className="text-xs font-mono font-bold text-neutral-600">
              50+ Server & Komunitas Puas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight font-display">
            Kata Klien & Kawan RP Kita
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="neo-box bg-white p-5 sm:p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform"
          >
            <div>
              {/* Rating stars & tag */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex text-[#FFE600] gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFE600] text-black" />
                  ))}
                </div>
                <span className="font-mono text-[10px] font-bold bg-[#FFFDF0] px-2 py-0.5 border border-black text-neutral-800">
                  {rev.tag}
                </span>
              </div>

              <p className="text-xs sm:text-sm font-medium text-neutral-800 leading-relaxed italic mb-5">
                "{rev.content}"
              </p>
            </div>

            <div className="pt-3 border-t-2 border-neutral-200">
              <div className="text-sm font-black text-black font-display">
                {rev.client}
              </div>
              <div className="text-xs text-neutral-600 font-bold flex items-center gap-1.5 mt-0.5">
                <span>{rev.role}</span>
                <span aria-hidden="true">·</span>
                <span className="truncate">{rev.server}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
