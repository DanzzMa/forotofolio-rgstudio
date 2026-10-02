import React, { useState } from 'react';
import { Eye, ChevronRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { Project, CategoryType } from '../types';
import { soundFx } from '../utils/audioSynth';

interface GallerySectionProps {
  onSelectProject: (project: Project) => void;
  onOpenDiscord: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectProject, onOpenDiscord }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: CategoryType; label: string; icon: string }[] = [
    { id: 'all', label: 'Semua Karya', icon: '⚡' },
    { id: 'trailer', label: 'Server Trailer', icon: '🎬' },
    { id: 'photo', label: 'RP Photoshoot', icon: '📸' },
    { id: 'montage', label: 'Gang Montage', icon: '💥' },
    { id: 'cinematic', label: 'Cinematic Reel', icon: '🏎️' }
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    const matchCategory = selectedCategory === 'all' || proj.category === selectedCategory;
    const matchSearch =
      searchQuery === '' ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.serverName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  const handleCategoryChange = (cat: CategoryType) => {
    soundFx.playClick();
    setSelectedCategory(cat);
  };

  return (
    <section id="galeri" className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-6 border-b-4 border-black">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#FFE600] text-black font-black text-xs px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_#000] uppercase">
              RGSTUDIO SHOWCASE
            </span>
            <span className="text-xs font-mono font-bold text-neutral-600">
              {PORTFOLIO_PROJECTS.length} Karya Unggulan
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight font-display">
            Koleksi Karya Sinematik
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-800 font-medium max-w-2xl">
            Cekidot beberapa video trailer, foto karakter roleplay, dan montage war yang udah pernah kita garap bareng kawan-kawan server FiveM.
          </p>
        </div>

        {/* Search input */}
        <div className="flex items-center">
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari server, geng, atau keyword..."
              className="w-full bg-white px-3.5 py-2.5 border-3 border-black text-xs sm:text-sm font-bold placeholder-neutral-500 shadow-[3px_3px_0px_#000] focus:outline-hidden focus:bg-[#FFFDF0]"
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-black border-3 border-black transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider ${
              selectedCategory === cat.id
                ? 'bg-[#FFE600] shadow-[4px_4px_0px_#000] -translate-y-1'
                : 'bg-white hover:bg-neutral-100 shadow-[2px_2px_0px_#000]'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="neo-box p-12 text-center bg-white">
          <p className="text-lg font-bold text-neutral-700">
            Belum nemu karya dengan kata kunci "{searchQuery}". Coba kata kunci lain ya!
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-4 neo-btn bg-[#FFE600] px-4 py-2 text-xs font-black uppercase"
          >
            Reset Pencarian
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="neo-box bg-white flex flex-col group hover:-translate-y-1.5 transition-all duration-200"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-video sm:aspect-4/3 border-b-3 border-black overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
                />

                {/* Top Corner Badges */}
                <div className="absolute top-3 left-3 bg-[#FFE600] text-black font-black text-[11px] px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_#000] uppercase">
                  {project.categoryLabel}
                </div>

                <div className="absolute top-3 right-3 bg-black text-white font-mono text-[10px] font-bold px-2 py-0.5 border border-white/30">
                  {project.duration || project.photoCount}
                </div>

                {/* Hover Quick Overlay with Click to View */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      onSelectProject(project);
                    }}
                    className="neo-btn bg-[#00F59B] text-black font-black text-xs px-4 py-2 flex items-center gap-2 cursor-pointer uppercase shadow-[3px_3px_0px_#000]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Liat Detail & Spek</span>
                  </button>
                </div>

                {/* Bottom Bar Info on Image */}
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[10px] font-mono text-white bg-black/80 px-2 py-1 border border-white/20">
                  <span>{project.resolution} · {project.fps}</span>
                  <span>👁️ {project.views}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-600 font-bold mb-1.5">
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{project.serverName}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-black tracking-tight leading-snug font-display line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-neutral-700 font-medium line-clamp-2 leading-relaxed">
                    {project.synopsis}
                  </p>
                </div>

                {/* Tech tag list */}
                <div className="mt-4 pt-3 border-t-2 border-neutral-200">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-mono font-bold bg-[#FFFDF0] px-2 py-0.5 border border-black text-neutral-800">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      soundFx.playClick();
                      onSelectProject(project);
                    }}
                    className="w-full neo-btn bg-white hover:bg-[#FFE600] text-black font-black text-xs py-2.5 px-3 border-2 border-black flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider transition-colors"
                  >
                    <span>Liat Spek & Cerita Lore</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Direct Discord Banner Callout under gallery */}
      <div className="mt-12 neo-box bg-[#FFE600] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs font-bold bg-black text-white px-2 py-0.5 border border-black uppercase">
            REQUEST KONSEP BEBAS
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-black mt-2 font-display">
            Punya Ide Konsep Sendiri? Gas Kita Obrolin!
          </h3>
          <p className="mt-1 text-sm font-bold text-neutral-800 max-w-xl">
            Gak usah kaku atau sungkan. Mau request alur cerita geng, cinematic mobil, atau photoshoot ala majalah, tim RGSTUDIO siap bantu wujudin dari nol!
          </p>
        </div>
        <button
          onClick={() => {
            soundFx.playBassDrop();
            onOpenDiscord();
          }}
          className="neo-btn bg-[#5865F2] hover:bg-[#4752c4] text-white font-black text-sm px-6 py-3.5 whitespace-nowrap cursor-pointer uppercase tracking-wider flex items-center gap-2"
        >
          <span>Ngobrol Santai di Discord</span>
          <span>→</span>
        </button>
      </div>
    </section>
  );
};
