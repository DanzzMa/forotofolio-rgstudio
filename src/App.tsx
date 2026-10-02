import React, { useState } from 'react';
import { MessageSquare, ArrowUpRight, Check } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker, SubMarqueeTicker } from './components/MarqueeTicker';
import { GallerySection } from './components/GallerySection';
import { ProjectModal } from './components/ProjectModal';
import { PricingCalculator } from './components/PricingCalculator';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PORTFOLIO_PROJECTS } from './data/portfolioData';
import { Project } from './types';
import { soundFx } from './utils/audioSynth';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const DISCORD_INVITE_URL = 'https://discord.gg/fivemcinematics';

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleOpenDiscord = (customNotice?: string) => {
    soundFx.playBassDrop();
    showToast(customNotice || 'Membuka Discord RGSTUDIO... Gas join dan kita obrolin di Discord!');
    window.open(DISCORD_INVITE_URL, '_blank', 'noopener,noreferrer');
  };

  const scrollToGallery = () => {
    soundFx.playClick();
    const el = document.getElementById('galeri');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProjectById = (id: string) => {
    soundFx.playClick();
    const found = PORTFOLIO_PROJECTS.find((p) => p.id === id);
    if (found) {
      setSelectedProject(found);
    }
  };

  // Called when user clicks "Mau Bikin yang Mirip?" inside ProjectModal
  const handleOrderConcept = (project: Project) => {
    handleOpenDiscord(`Membuka Discord RGSTUDIO untuk request konsep "${project.title}"!`);
  };

  // Called when user selects a tier or calculates custom price in PricingCalculator
  const handleSelectTier = (tierName: string, calculatedPrice?: number, details?: string) => {
    const priceText = calculatedPrice ? ` (Rp ${calculatedPrice.toLocaleString('id-ID')})` : '';
    handleOpenDiscord(`Membuka Discord RGSTUDIO untuk order ${tierName}${priceText}!`);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF0] text-[#111111] flex flex-col font-sans">
      {/* 3-zone Neo-Brutalist Top Bar with RGSTUDIO */}
      <Navbar onOpenDiscord={() => handleOpenDiscord()} />

      {/* Hero Section */}
      <Hero
        onOpenDiscord={() => handleOpenDiscord()}
        onExploreGallery={scrollToGallery}
        onOpenProject={handleOpenProjectById}
      />

      {/* Infinite Marquee Tickers */}
      <MarqueeTicker />
      <SubMarqueeTicker />

      {/* Main Content Sections: langsung dari Paket & Harga ke CLIENT WALL OF FAME */}
      <main className="flex-1">
        {/* Portfolio Gallery Section with Filters */}
        <GallerySection
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenDiscord={() => handleOpenDiscord()}
        />

        {/* Pricing Tiers & Interactive Custom Calculator */}
        <PricingCalculator onSelectTier={handleSelectTier} />

        {/* Client Wall of Fame / Testimonials (Langsung setelah Harga) */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenDiscord={() => handleOpenDiscord()} />

      {/* Detail Project Modal / Lightbox */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOrderConcept={handleOrderConcept}
      />

      {/* Toast Notification when Discord is opened */}
      {toastMessage && (
        <div className="fixed top-20 right-5 z-50 animate-in slide-in-from-top-4 duration-200">
          <div className="neo-box bg-[#FFE600] text-black px-4 py-3 flex items-center gap-2.5 max-w-sm border-3 border-black shadow-[4px_4px_0px_#000]">
            <Check className="w-5 h-5 text-black stroke-[3] shrink-0" />
            <span className="text-xs font-black">{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Floating Quick Action Discord Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => handleOpenDiscord()}
          className="neo-btn bg-[#5865F2] hover:bg-[#4752c4] text-white p-3 sm:px-4 sm:py-3 flex items-center gap-2 cursor-pointer uppercase font-black text-xs sm:text-sm shadow-[4px_4px_0px_#000]"
          title="Chat di Discord"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 fill-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#00F59B] border border-black rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#00F59B] border border-black rounded-full" />
          </div>
          <span className="hidden sm:inline">Chat RGSTUDIO di Discord</span>
          <ArrowUpRight className="w-4 h-4 hidden sm:inline" />
        </button>
      </div>
    </div>
  );
}
