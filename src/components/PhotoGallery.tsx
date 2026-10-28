import React, { useState } from 'react';
import { 
  Maximize2, 
  Landmark, 
  GraduationCap, 
  X
} from 'lucide-react';
import { INSTITUTION_PHOTOS } from '../data/tynyshpaevData';
import { InstitutionPhoto } from '../types';

export const PhotoGallery: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<InstitutionPhoto | null>(null);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#1a1512]">
          Музей және оқу орындары
        </h2>
      </div>

      {/* 3 Verified Photo Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {INSTITUTION_PHOTOS.map((item, idx) => (
          <div
            key={item.id}
            className="bg-[#fffefb] border-2 border-[#dfcfbc] rounded-2xl p-4 shadow-sm space-y-3 flex flex-col justify-between hover:border-[#8d4f27] transition-all"
          >
            <div>
              {/* Photo Box */}
              <div 
                onClick={() => setPreviewImage(item)}
                className="relative w-full h-64 bg-[#f3e7d6] rounded-xl overflow-hidden border border-[#dfcfbc] cursor-pointer group shadow-inner"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-lg bg-black/75 text-white text-xs font-sans-ui flex items-center gap-1.5 shadow-lg">
                    <Maximize2 size={14} />
                    <span>Үлкейтіп көру</span>
                  </span>
                </div>
              </div>

              {/* Title & Info */}
              <div className="mt-3 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#8d4f27] font-sans-ui font-semibold">
                  {idx === 0 ? <Landmark size={14} /> : <GraduationCap size={14} />}
                  <span>{item.location}</span>
                </div>
                <h3 className="font-bold text-base text-[#1a1512] leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Photo Modal */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl max-h-[92vh] bg-[#fffefb] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl flex flex-col"
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
              title="Жабу"
            >
              <X size={18} />
            </button>

            <div className="max-h-[80vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={previewImage.imageUrl}
                alt={previewImage.title}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>

            <div className="p-4 bg-[#fffefb] border-t border-[#dfcfbc] text-center font-sans-ui">
              <span className="text-xs font-bold text-[#8d4f27]">
                {previewImage.location}
              </span>
              <h4 className="font-bold text-base text-[#1a1512] mt-0.5">
                {previewImage.title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
