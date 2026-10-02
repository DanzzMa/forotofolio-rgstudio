import React, { useState } from 'react';
import { Check, Zap, Calculator, MessageSquare } from 'lucide-react';
import { PRICING_TIERS } from '../data/portfolioData';
import { PricingTier } from '../types';
import { soundFx } from '../utils/audioSynth';

interface PricingCalculatorProps {
  onSelectTier: (tierName: string, calculatedPrice?: number, details?: string) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onSelectTier }) => {
  // Calculator State
  const [projectType, setProjectType] = useState<'video' | 'photo'>('video');
  const [durationSec, setDurationSec] = useState<number>(60);
  const [resolution, setResolution] = useState<'1080p' | '2k' | '4k'>('4k');
  const [addVoiceOver, setAddVoiceOver] = useState(false);
  const [add3DLogo, setAdd3DLogo] = useState(false);
  const [isExpress, setIsExpress] = useState(false);
  const [photoCount, setPhotoCount] = useState<number>(5);

  // Compute calculated estimate
  const computePrice = (): number => {
    if (projectType === 'photo') {
      const base = 70000;
      const extraPerPhoto = Math.max(0, photoCount - 3) * 15000;
      let total = base + extraPerPhoto;
      if (isExpress) total += 30000;
      return total;
    } else {
      // Video
      let base = 150000;
      if (durationSec > 60) {
        base += Math.ceil((durationSec - 60) / 30) * 60000;
      }
      if (resolution === '4k') base += 35000;
      if (resolution === '2k') base += 20000;
      if (addVoiceOver) base += 75000;
      if (add3DLogo) base += 50000;
      if (isExpress) base += 75000;
      return base;
    }
  };

  const currentEstimatedPrice = computePrice();

  const handleOrderCustom = () => {
    soundFx.playBassDrop();
    const details = projectType === 'photo' 
      ? `Paket Custom Foto: ${photoCount} Foto 8K${isExpress ? ' + Express 24 Jam' : ''}`
      : `Paket Custom Video: Durasi ${durationSec}s, Res ${resolution.toUpperCase()}${addVoiceOver ? ' + Voice Over' : ''}${add3DLogo ? ' + Logo 3D' : ''}${isExpress ? ' + Express 24 Jam' : ''}`;
    
    onSelectTier('Custom Calculator Order', currentEstimatedPrice, details);
  };

  const handleTierSelect = (tier: PricingTier) => {
    soundFx.playBassDrop();
    onSelectTier(tier.name, tier.price, `Paket ${tier.name} (${tier.turnaround})`);
  };

  return (
    <section id="layanan" className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 bg-[#FFE600] px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000] text-xs font-black uppercase mb-3">
          <Zap className="w-3.5 h-3.5 fill-black" />
          <span>HARGA BERSAHABAT & GAK NGEJEBAK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight font-display">
          Paket Layanan & Biaya Pembuatan
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-800 font-medium">
          Pilih paket yang pas sama kebutuhan server atau fraksi kamu. Mau durasi beda atau spek khusus? Tinggal atur di kalkulator custom bawah ini!
        </p>
      </div>

      {/* 4 Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {PRICING_TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`neo-box bg-white flex flex-col justify-between relative transition-all duration-200 hover:-translate-y-1.5 ${
              tier.popular ? 'border-4 ring-2 ring-black' : ''
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFE600] text-black text-[11px] font-black px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000] uppercase tracking-wider whitespace-nowrap">
                {tier.badge}
              </div>
            )}

            <div>
              {/* Header */}
              <div
                className="p-4 sm:p-5 border-b-3 border-black"
                style={{ backgroundColor: tier.color }}
              >
                <div className="text-xs font-mono font-bold uppercase text-black/80">
                  {tier.turnaround}
                </div>
                <h3 className="text-xl font-black text-black font-display mt-0.5">
                  {tier.name}
                </h3>
                <div className="mt-3">
                  <span className="text-xs font-bold text-black block">Mulai dari:</span>
                  <div className="text-2xl sm:text-3xl font-black text-black font-display tabular-nums tracking-tight">
                    Rp {tier.price.toLocaleString('id-ID')}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5">
                <p className="text-xs font-bold text-neutral-700 mb-4 pb-3 border-b border-neutral-200">
                  {tier.tagline}
                </p>

                <div className="space-y-2.5">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-medium text-black">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="p-4 sm:p-5 pt-0">
              <button
                onClick={() => handleTierSelect(tier)}
                className="w-full neo-btn bg-black hover:bg-neutral-800 text-white font-black text-xs py-3 px-3 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Pilih Paket & Chat Discord</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Custom Order Calculator Box */}
      <div className="neo-box bg-[#FFFDF0] p-6 sm:p-8 border-4 border-black">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b-3 border-black">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Calculator className="w-5 h-5 text-[#FF3B94]" />
              <span className="text-xs font-black uppercase text-[#FF3B94] tracking-wider">
                KALKULATOR BIAYA SANTAI
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-black font-display">
              Hitung Estimasi Biaya Custom Kamu
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 font-medium">
              Atur durasi video, resolusi, atau jumlah foto sesuka hati kamu.
            </p>
          </div>

          {/* Project Type Switcher */}
          <div className="flex items-center gap-2 bg-white p-1.5 border-2 border-black">
            <button
              onClick={() => { soundFx.playClick(); setProjectType('video'); }}
              className={`text-xs font-black px-4 py-2 border-2 border-black transition-all cursor-pointer uppercase ${
                projectType === 'video' ? 'bg-[#FFE600] shadow-[2px_2px_0px_#000]' : 'bg-white'
              }`}
            >
              🎬 Video Cinematic
            </button>
            <button
              onClick={() => { soundFx.playClick(); setProjectType('photo'); }}
              className={`text-xs font-black px-4 py-2 border-2 border-black transition-all cursor-pointer uppercase ${
                projectType === 'photo' ? 'bg-[#00F59B] shadow-[2px_2px_0px_#000]' : 'bg-white'
              }`}
            >
              📸 Foto Roleplay
            </button>
          </div>
        </div>

        {/* Calculator Options Form */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-6">
          <div className="md:col-span-7 space-y-6">
            {projectType === 'video' ? (
              <>
                {/* Duration Picker */}
                <div>
                  <label className="text-xs font-black uppercase tracking-wider block mb-2">
                    Durasi Video: <span className="text-[#FF3B94] font-mono text-sm">{durationSec} Detik</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[30, 45, 60, 90, 120].map((sec) => (
                      <button
                        key={sec}
                        onClick={() => { soundFx.playClick(); setDurationSec(sec); }}
                        className={`text-xs font-bold px-3 py-1.5 border-2 border-black transition-all cursor-pointer ${
                          durationSec === sec ? 'bg-[#FFE600] shadow-[2px_2px_0px_#000]' : 'bg-white hover:bg-neutral-100'
                        }`}
                      >
                        {sec} Detik
                      </button>
                    ))}
                  </div>
                </div>

                {/* Resolution Picker */}
                <div>
                  <label className="text-xs font-black uppercase tracking-wider block mb-2">
                    Resolusi Video yang Dimau:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(['1080p', '2k', '4k'] as const).map((res) => (
                      <button
                        key={res}
                        onClick={() => { soundFx.playClick(); setResolution(res); }}
                        className={`text-xs font-bold px-3 py-1.5 border-2 border-black transition-all cursor-pointer uppercase ${
                          resolution === res ? 'bg-[#00D4FF] shadow-[2px_2px_0px_#000]' : 'bg-white hover:bg-neutral-100'
                        }`}
                      >
                        {res === '4k' ? '4K Ultra HD (60FPS)' : res === '2k' ? '2K QHD (60FPS)' : '1080p FHD'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Video Addons */}
                <div>
                  <label className="text-xs font-black uppercase tracking-wider block mb-2">
                    Mau Nambah Opsi Ini?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2.5 p-2.5 bg-white border-2 border-black cursor-pointer text-xs font-bold">
                      <input
                        type="checkbox"
                        checked={addVoiceOver}
                        onChange={(e) => { soundFx.playClick(); setAddVoiceOver(e.target.checked); }}
                        className="w-4 h-4 accent-black"
                      />
                      <span>Dubbing Suara Radio Polisi / Suara Karakter (+Rp 75.000)</span>
                    </label>
                    <label className="flex items-center gap-2.5 p-2.5 bg-white border-2 border-black cursor-pointer text-xs font-bold">
                      <input
                        type="checkbox"
                        checked={add3DLogo}
                        onChange={(e) => { soundFx.playClick(); setAdd3DLogo(e.target.checked); }}
                        className="w-4 h-4 accent-black"
                      />
                      <span>Animasi 3D Logo Intro Server (+Rp 50.000)</span>
                    </label>
                    <label className="flex items-center gap-2.5 p-2.5 bg-white border-2 border-black cursor-pointer text-xs font-bold">
                      <input
                        type="checkbox"
                        checked={isExpress}
                        onChange={(e) => { soundFx.playClick(); setIsExpress(e.target.checked); }}
                        className="w-4 h-4 accent-black"
                      />
                      <span>Prioritas Express 24 Jam Kelar (+Rp 75.000)</span>
                    </label>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Photo Count Picker */}
                <div>
                  <label className="text-xs font-black uppercase tracking-wider block mb-2">
                    Jumlah Foto Karakter RP: <span className="text-[#00F59B] font-mono text-sm">{photoCount} Foto</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[3, 5, 8, 12].map((cnt) => (
                      <button
                        key={cnt}
                        onClick={() => { soundFx.playClick(); setPhotoCount(cnt); }}
                        className={`text-xs font-bold px-3 py-1.5 border-2 border-black transition-all cursor-pointer ${
                          photoCount === cnt ? 'bg-[#00F59B] shadow-[2px_2px_0px_#000]' : 'bg-white hover:bg-neutral-100'
                        }`}
                      >
                        {cnt} Foto Master
                      </button>
                    ))}
                  </div>
                </div>

                {/* Photo Addons */}
                <div>
                  <label className="text-xs font-black uppercase tracking-wider block mb-2">
                    Pilihan Tambahan:
                  </label>
                  <label className="flex items-center gap-2.5 p-2.5 bg-white border-2 border-black cursor-pointer text-xs font-bold">
                    <input
                      type="checkbox"
                      checked={isExpress}
                      onChange={(e) => { soundFx.playClick(); setIsExpress(e.target.checked); }}
                      className="w-4 h-4 accent-black"
                    />
                    <span>Kelar Cepat dalam 12 Jam (+Rp 30.000)</span>
                  </label>
                </div>
              </>
            )}
          </div>

          {/* Calculator Output summary */}
          <div className="md:col-span-5 flex flex-col justify-between p-5 bg-white border-3 border-black shadow-[4px_4px_0px_#000]">
            <div>
              <div className="text-xs font-mono font-bold text-neutral-500 uppercase">
                ESTIMASI BIAYA:
              </div>
              <div className="text-3xl sm:text-4xl font-black text-black font-display tabular-nums mt-1 text-[#FF3B94]">
                Rp {currentEstimatedPrice.toLocaleString('id-ID')}
              </div>
              <p className="text-[11px] font-bold text-neutral-600 mt-1">
                *Udah include revisi santai dan file master kualitas tinggi.
              </p>

              {/* Breakdown summary */}
              <div className="mt-4 pt-3 border-t-2 border-neutral-200 text-xs font-medium space-y-1 text-neutral-800">
                <div className="flex justify-between">
                  <span>Pilihan:</span>
                  <span className="font-bold">{projectType === 'video' ? 'Video Cinematic' : 'Foto Karakter RP'}</span>
                </div>
                {projectType === 'video' ? (
                  <>
                    <div className="flex justify-between">
                      <span>Durasi Target:</span>
                      <span className="font-bold">{durationSec} Detik</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Resolusi:</span>
                      <span className="font-bold">{resolution.toUpperCase()} 60FPS</span>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-between">
                    <span>Jumlah Foto:</span>
                    <span className="font-bold">{photoCount} Foto 8K</span>
                  </div>
                )}
                {isExpress && (
                  <div className="flex justify-between text-amber-700 font-bold">
                    <span>Layanan:</span>
                    <span>Express Priority</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-black">
              <button
                onClick={handleOrderCustom}
                className="w-full neo-btn bg-[#5865F2] hover:bg-[#4752c4] text-white font-black text-xs sm:text-sm py-3.5 px-4 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Pesan Custom Ini via Discord</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
