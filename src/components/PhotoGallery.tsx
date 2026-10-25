import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Maximize2, 
  Sparkles, 
  Landmark, 
  GraduationCap, 
  Info,
  X
} from 'lucide-react';
import { INSTITUTION_PHOTOS } from '../data/tynyshpaevData';
import { InstitutionPhoto } from '../types';

export const PhotoGallery: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<InstitutionPhoto | null>(null);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header Banner */}
      <div className="bg-[#f5ede0] p-6 sm:p-7 rounded-2xl border border-[#dfcfbc] shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ebdcc9] text-[#78471e] text-xs font-sans-ui font-semibold mb-2 border border-[#d8c5af]">
          <Building2 size={13} />
          <span>М. Тынышбаев есімі берілген нысандар фото-альбомы</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#1a1512]">
          Музей және оқу орындары
        </h2>
        <p className="text-xs sm:text-sm text-[#544336] font-sans-ui mt-1 max-w-3xl leading-relaxed">
          Талдықорған қаласындағы облыстық М. Тынышпаев атындағы тарихи-өлкетану музейі және Алматы мен Шымкент қалаларындағы М. Тынышбаев атындағы ALT (ҚазККА) білім беру орындарының ресми фото-құжаттары.
        </p>
      </div>

      {/* 3 Verified Photo Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {INSTITUTION_PHOTOS.map((item, idx) => (
          <div
            key={item.id}
            className="bg-[#fffefb] border-2 border-[#d3beaa] rounded-2xl p-4 shadow-md space-y-3 flex flex-col justify-between hover:border-[#8d4f27] transition-all"
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
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-lg bg-black/75 text-white text-xs font-sans-ui flex items-center gap-1.5 shadow-lg">
                    <Maximize2 size={14} />
                    <span>Үлкейтіп көру</span>
                  </span>
                </div>

                {/* Badge top-left */}
                <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#4a2e1b]/90 text-white text-[11px] font-bold font-sans-ui border border-white/20 backdrop-blur-xs">
                  {item.type}
                </span>
              </div>

              {/* Title & Info */}
              <div className="mt-3.5 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#8d4f27] font-sans-ui font-semibold">
                  {idx === 0 ? <Landmark size={14} /> : <GraduationCap size={14} />}
                  <span>{item.location}</span>
                </div>
                <h3 className="font-bold text-base text-[#1a1512] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#524135] leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#ebdcc9] flex items-center justify-between text-[11px] font-sans-ui text-[#735e4e]">
              <span className="text-[#256e43] font-semibold">Түпнұсқа фотосурет ✅</span>
              <button
                onClick={() => setPreviewImage(item)}
                className="font-bold text-[#8d4f27] hover:underline"
              >
                Көру →
              </button>
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

            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={previewImage.imageUrl}
                alt={previewImage.title}
                className="max-w-full max-h-[75vh] object-contain"
              />
            </div>

            <div className="p-4 bg-[#fffefb] border-t border-[#dfcfbc] font-sans-ui">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8d4f27]">
                <MapPin size={13} />
                <span>{previewImage.location}</span>
                <span>•</span>
                <span className="text-[#5e4f44]">{previewImage.type}</span>
              </div>
              <h4 className="font-bold text-base text-[#1a1512] mt-0.5">
                {previewImage.title}
              </h4>
              <p className="text-xs text-[#524135] mt-1">
                {previewImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
