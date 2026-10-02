import React, { useState, useEffect } from 'react';
import { Play, Pause, MessageSquare, Sparkles, Video, Volume2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { HERO_IMAGE, STATS } from '../data/portfolioData';
import { soundFx } from '../utils/audioSynth';

interface HeroProps {
  onOpenDiscord: () => void;
  onExploreGallery: () => void;
  onOpenProject: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiscord, onExploreGallery, onOpenProject }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeAngle, setActiveAngle] = useState<'drone' | 'hood' | 'cinematic'>('cinematic');
  const [progress, setProgress] = useState(24);

  // Playback timer simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 120);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (!isPlaying) {
      soundFx.playBassDrop();
    } else {
      soundFx.playClick();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAngleSwitch = (angle: 'drone' | 'hood' | 'cinematic') => {
    soundFx.playClick();
    setActiveAngle(angle);
  };

  return (
    <section className="relative px-4 md:px-8 pt-8 md:pt-14 pb-12 md:pb-16 max-w-7xl mx-auto overflow-hidden">
      {/* Decorative Neo-Brutalist elements in background */}
      <div className="absolute top-6 right-10 w-24 h-24 bg-[#FF3B94] border-3 border-black -rotate-12 -z-10 hidden lg:block opacity-60" />
      <div className="absolute bottom-16 left-6 w-20 h-20 bg-[#00F59B] border-3 border-black rotate-6 -z-10 hidden lg:block opacity-60" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Bold Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {/* Top kicker sticker */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-[#FFE600] text-black font-black text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              RGSTUDIO · FIVEM CREATIVE LAB
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#00D4FF] text-black font-mono font-bold text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000] uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              4K 60FPS Jernih Maksimal
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-[1.08] tracking-tight font-display">
            Bikin Visual FiveM Kamu <br className="hidden sm:inline" />
            <span className="bg-[#FF3B94] text-white px-2 py-0.5 border-3 border-black shadow-[4px_4px_0px_#000] inline-block -rotate-1 mt-1">
              Makin Menyala & Berkelas!
            </span>
          </h1>

          {/* Subtitle with relaxed, flexible tone */}
          <p className="text-base sm:text-lg text-black font-medium leading-relaxed max-w-2xl bg-white p-3.5 border-3 border-black shadow-[3px_3px_0px_#000]">
            Mau trailer server yang bikin antrean slot rame, photoshoot karakter RP yang ganteng/cantik parah, atau montage war pvp yang jedag-jedug rapi? Serahin aja ke <strong>RGSTUDIO</strong>. Editing halus, warna sekelas film bioskop, dan proses santai tanpa ribet!
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-1">
            <button
              onClick={() => {
                soundFx.playBassDrop();
                onOpenDiscord();
              }}
              className="neo-btn bg-[#5865F2] hover:bg-[#4752c4] text-white font-black text-base px-6 py-3.5 flex items-center gap-3 cursor-pointer uppercase tracking-wider"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Gas Chat di Discord</span>
              <span className="bg-[#FFE600] text-black text-xs px-1.5 py-0.5 border border-black font-mono">
                ONLINE
              </span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                onExploreGallery();
              }}
              className="neo-btn bg-[#FFE600] hover:bg-[#ffd500] text-black font-black text-base px-6 py-3.5 flex items-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <Video className="w-5 h-5" />
              <span>Liat-liat Karya 👀</span>
            </button>
          </div>

          {/* Benefit bullet tags */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-xs sm:text-sm font-bold text-black">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00F59B] fill-black" />
              <span>Bebas Revisi Santai Sampe Sreg</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00F59B] fill-black" />
              <span>Bisa Request Lagu & Konsep Apa Aja</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00F59B] fill-black" />
              <span>Warna NVE & Sound Bioskop</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Reel Preview Player */}
        <div className="lg:col-span-5">
          <div className="neo-box bg-white p-3 sm:p-4 rotate-1 hover:rotate-0 transition-transform">
            {/* Player Header bar */}
            <div className="flex items-center justify-between border-b-3 border-black pb-2.5 mb-3 bg-[#FFFDF0] px-2 py-1">
              <div className="flex items-center gap-2 font-mono font-bold text-xs">
                <span className="inline-block w-3 h-3 rounded-full bg-red-500 animate-pulse border border-black" />
                <span className="text-red-600 uppercase">RGSTUDIO PREVIEW</span>
                <span className="text-neutral-500 hidden sm:inline">· 4K UHD</span>
              </div>
              <div className="font-mono text-xs font-bold bg-[#00F59B] px-2 py-0.5 border border-black">
                60 FPS RAW
              </div>
            </div>

            {/* Video Screen Container */}
            <div className="relative aspect-video border-3 border-black overflow-hidden bg-black group">
              <img
                src={HERO_IMAGE}
                alt="RGSTUDIO FiveM Cinematic Showreel Preview"
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isPlaying ? 'scale-105 filter brightness-105' : 'scale-100 filter brightness-90'
                } ${activeAngle === 'drone' ? 'hue-rotate-15 contrast-125' : activeAngle === 'hood' ? 'saturate-150' : ''}`}
              />

              {/* Viewfinder Overlay */}
              <div className="absolute inset-0 pointer-events-none p-3 flex flex-col justify-between">
                <div className="flex justify-between items-start text-[10px] font-mono font-bold text-white bg-black/60 px-2 py-0.5 border border-white/20 w-fit">
                  <span>CAM: {activeAngle.toUpperCase()}</span>
                  <span className="ml-3">ISO 400 · 24FPS · f/1.8</span>
                </div>

                {/* Center crosshair */}
                <div className="self-center justify-self-center text-white/50 text-xl font-light">
                  +
                </div>

                <div className="flex justify-between items-end text-[10px] font-mono text-white/90">
                  <div className="bg-black/60 px-1.5 py-0.5 border border-white/20">
                    RGSTUDIO COLOR LUT
                  </div>
                  <div className="bg-[#FFE600] text-black font-black px-1.5 py-0.5 border border-black">
                    PRORES 422HQ
                  </div>
                </div>
              </div>

              {/* Center Play/Pause button */}
              <button
                onClick={togglePlay}
                className="absolute inset-0 m-auto w-14 h-14 bg-[#FFE600] border-3 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform z-10"
                aria-label={isPlaying ? 'Pause reel preview' : 'Play reel preview'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-black fill-black" />
                ) : (
                  <Play className="w-6 h-6 text-black fill-black ml-1" />
                )}
              </button>
            </div>

            {/* Scrub / Progress Bar */}
            <div className="mt-3">
              <div className="flex justify-between text-[11px] font-mono font-bold mb-1">
                <span className="flex items-center gap-1">
                  <Volume2 className="w-3 h-3 text-[#FF3B94]" />
                  <span>Cinematic Audio Sync</span>
                </span>
                <span className="tabular-nums">00:{progress.toString().padStart(2, '0')} / 01:30</span>
              </div>
              <div className="h-3 w-full bg-neutral-200 border-2 border-black overflow-hidden p-0.5">
                <div
                  className="h-full bg-[#FF3B94] transition-all duration-100 border-r border-black"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Camera angle switcher controls */}
            <div className="mt-3 pt-2.5 border-t-2 border-black flex items-center justify-between gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider">Angle Kamera:</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleAngleSwitch('cinematic')}
                  className={`text-[10px] font-bold px-2 py-1 border-2 border-black transition-all cursor-pointer ${
                    activeAngle === 'cinematic'
                      ? 'bg-[#FFE600] shadow-[2px_2px_0px_#000]'
                      : 'bg-white hover:bg-neutral-100'
                  }`}
                >
                  Cinematic Wide
                </button>
                <button
                  onClick={() => handleAngleSwitch('drone')}
                  className={`text-[10px] font-bold px-2 py-1 border-2 border-black transition-all cursor-pointer ${
                    activeAngle === 'drone'
                      ? 'bg-[#00D4FF] shadow-[2px_2px_0px_#000]'
                      : 'bg-white hover:bg-neutral-100'
                  }`}
                >
                  FPV Drone
                </button>
                <button
                  onClick={() => handleAngleSwitch('hood')}
                  className={`text-[10px] font-bold px-2 py-1 border-2 border-black transition-all cursor-pointer ${
                    activeAngle === 'hood'
                      ? 'bg-[#00F59B] shadow-[2px_2px_0px_#000]'
                      : 'bg-white hover:bg-neutral-100'
                  }`}
                >
                  Hood Tracking
                </button>
              </div>
            </div>

            {/* View Full Project Button */}
            <div className="mt-3">
              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenProject('proj-cinematic-01');
                }}
                className="w-full py-2 bg-black text-[#FFE600] font-black text-xs border-2 border-black hover:bg-neutral-900 transition-colors cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Buka Detail Lengkap Project Ini</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Proof Adjacent Quantitative Rigor Bar */}
      <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="neo-box p-3.5 sm:p-4 text-center bg-white flex flex-col justify-center items-center hover:-translate-y-1 transition-transform"
          >
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-black font-display tracking-tight tabular-nums">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm font-bold text-neutral-800 mt-1 uppercase tracking-wide">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
