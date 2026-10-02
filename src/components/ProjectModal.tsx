import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Award, MessageSquare, Camera } from 'lucide-react';
import { Project } from '../types';
import { soundFx } from '../utils/audioSynth';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOrderConcept: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOrderConcept }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(12);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && project?.duration) {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev >= 90 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, project]);

  if (!project) return null;

  const togglePlay = () => {
    if (!isPlaying) {
      soundFx.playBassDrop();
    } else {
      soundFx.playClick();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-xs overflow-y-auto">
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-4xl bg-white border-4 border-black shadow-[8px_8px_0px_#000] my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Bar Window Header */}
        <div className="bg-[#FFE600] border-b-3 border-black px-4 py-2.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#FF3B94] border border-black inline-block" />
            <span className="w-3 h-3 bg-[#00F59B] border border-black inline-block" />
            <span className="w-3 h-3 bg-[#00D4FF] border border-black inline-block" />
            <span className="font-mono text-xs font-bold ml-2 truncate max-w-[200px] sm:max-w-md">
              RGSTUDIO // DETAIL PROYEK
            </span>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="w-8 h-8 bg-white hover:bg-red-500 hover:text-white border-2 border-black font-black flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          {/* Main Media Player / Lightbox Area */}
          <div className="relative aspect-video border-3 border-black bg-black overflow-hidden group">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-all duration-500 ${
                isPlaying ? 'scale-105 filter brightness-105' : 'scale-100 filter brightness-90'
              }`}
            />

            {/* Overlaid UI */}
            <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="bg-[#00F59B] text-black font-black text-xs px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_#000] uppercase">
                  {project.categoryLabel}
                </span>
                <span className="bg-black/80 text-white font-mono text-xs px-2.5 py-1 border border-white/20">
                  {project.resolution} · {project.fps}
                </span>
              </div>

              {/* Center Play Button for video */}
              {project.duration && (
                <button
                  onClick={togglePlay}
                  className="pointer-events-auto self-center justify-self-center w-16 h-16 bg-[#FFE600] border-3 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-black fill-black" />
                  ) : (
                    <Play className="w-8 h-8 text-black fill-black ml-1" />
                  )}
                </button>
              )}

              {/* Bottom stats inside media */}
              <div className="flex justify-between items-end text-xs text-white">
                <div className="bg-black/70 px-2 py-1 font-mono border border-white/20">
                  👁️ {project.views} Views · ❤️ {project.likes} Likes
                </div>
                {project.duration && (
                  <div className="bg-black/70 px-2 py-1 font-mono border border-white/20">
                    ⏱️ 00:{currentTime.toString().padStart(2, '0')} / {project.duration}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Title & Client details */}
          <div className="mt-5 pb-4 border-b-2 border-black">
            <div className="flex flex-wrap items-center gap-2 mb-1.5 text-xs font-bold text-neutral-600">
              <span className="text-black font-black uppercase bg-[#FFE600] px-2 py-0.5 border border-black">
                {project.client}
              </span>
              <span>·</span>
              <span>Server: {project.serverName}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight font-display">
              {project.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-neutral-800 leading-relaxed font-medium">
              {project.synopsis}
            </p>
          </div>

          {/* Lore Story Section */}
          <div className="mt-4 p-4 bg-[#FFFDF0] border-2 border-black">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FF3B94] mb-1 flex items-center gap-1.5">
              <span>📖 Cerita Lore Roleplay</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
              {project.lore}
            </p>
          </div>

          {/* Technical Specs Breakdown */}
          <div className="mt-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-black mb-2 flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-[#5865F2]" />
              <span>Racikan Mod & Software yang Dipake</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-2.5 border-2 border-black bg-white">
                <span className="text-neutral-500 font-bold block text-[10px] uppercase">Graphic Mod</span>
                <span className="font-bold text-black">{project.specs.graphicMod}</span>
              </div>
              <div className="p-2.5 border-2 border-black bg-white">
                <span className="text-neutral-500 font-bold block text-[10px] uppercase">Camera System</span>
                <span className="font-bold text-black">{project.specs.cameraTool}</span>
              </div>
              <div className="p-2.5 border-2 border-black bg-white">
                <span className="text-neutral-500 font-bold block text-[10px] uppercase">Software Edit</span>
                <span className="font-bold text-black">{project.specs.editingSoftware}</span>
              </div>
              <div className="p-2.5 border-2 border-black bg-white">
                <span className="text-neutral-500 font-bold block text-[10px] uppercase">Color Grading LUT</span>
                <span className="font-bold text-black">{project.specs.colorGrade}</span>
              </div>
            </div>
          </div>

          {/* Client Testimonial if present */}
          {project.testimonial && (
            <div className="mt-4 p-4 bg-[#00F59B] border-2 border-black shadow-[3px_3px_0px_#000]">
              <div className="text-xs font-black uppercase text-black mb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-black" />
                <span>Kata yang Punya Server / Project:</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-black italic">
                "{project.testimonial.quote}"
              </p>
              <div className="text-[11px] font-mono font-bold mt-2 text-neutral-800">
                — {project.testimonial.author} ({project.testimonial.role})
              </div>
            </div>
          )}

          {/* Action CTAs in Modal */}
          <div className="mt-6 pt-4 border-t-3 border-black flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="text-[11px] font-mono font-bold bg-neutral-100 px-2 py-0.5 border border-black">
                  #{tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => {
                soundFx.playBassDrop();
                onOrderConcept(project);
                onClose();
              }}
              className="w-full sm:w-auto neo-btn bg-[#5865F2] hover:bg-[#4752c4] text-white font-black text-xs sm:text-sm px-5 py-3 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Mau Bikin yang Mirip? Gas Chat di Discord!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
