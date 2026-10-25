import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Quote, 
  CheckCircle2, 
  Sparkles, 
  Grid, 
  Columns
} from 'lucide-react';
import { ALBUM_CHAPTERS, FOUR_PILLARS } from '../data/tynyshpaevData';

interface BiographicalAlbumProps {
  onOpenPhotoGallery: () => void;
}

export const BiographicalAlbum: React.FC<BiographicalAlbumProps> = ({ onOpenPhotoGallery }) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'book' | 'feed'>('book');

  const currentChapter = ALBUM_CHAPTERS[activeChapterIndex];

  const handleNext = () => {
    if (activeChapterIndex < ALBUM_CHAPTERS.length - 1) {
      setActiveChapterIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeChapterIndex > 0) {
      setActiveChapterIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* 4 Pillars Section */}
      <div className="bg-[#f5ede0] border-2 border-[#dfcfbc] p-6 sm:p-7 rounded-2xl shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#dfcfbc] pb-3">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a1512]">
              Мұхамеджан Тынышбаевтың орасан зор жұмысының 4 қыры
            </h3>
            <p className="text-xs sm:text-sm text-[#5e4f44] mt-0.5 font-sans-ui">
              Саясаткер, теміржолшы инженер, публицист және тарихшы ретіндегі ұлтқа болысқан еңбегі
            </p>
          </div>

          <div className="flex items-center gap-1.5 self-start sm:self-auto font-sans-ui">
            <button
              onClick={() => setViewMode('book')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'book'
                  ? 'bg-[#8d4f27] text-white shadow-sm font-semibold'
                  : 'bg-[#ebdcc9] text-[#423328] hover:bg-[#dfcfbc]'
              }`}
            >
              <Columns size={14} />
              <span>Альбомдық парақтау</span>
            </button>
            <button
              onClick={() => setViewMode('feed')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'feed'
                  ? 'bg-[#8d4f27] text-white shadow-sm font-semibold'
                  : 'bg-[#ebdcc9] text-[#423328] hover:bg-[#dfcfbc]'
              }`}
            >
              <Grid size={14} />
              <span>Барлық беттер</span>
            </button>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm font-sans-ui text-[#2d221a]">
          {FOUR_PILLARS.map((p, idx) => (
            <div key={idx} className="bg-[#fffefb] p-4 rounded-xl border border-[#dfcfbc] space-y-1.5 flex flex-col justify-between shadow-2xs">
              <div>
                <span className="text-[11px] font-bold text-[#8d4f27] block">
                  0{idx + 1}. {p.role}
                </span>
                <p className="text-xs text-[#47372d] leading-relaxed mt-1">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIEW MODE A: INTERACTIVE FLIP ALBUM SPREAD */}
      {viewMode === 'book' ? (
        <div className="space-y-4">
          {/* Chapter Scrubber Bar */}
          <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar py-1">
            {ALBUM_CHAPTERS.map((chap, idx) => (
              <button
                key={chap.id}
                onClick={() => setActiveChapterIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-sans-ui whitespace-nowrap transition-all border ${
                  idx === activeChapterIndex
                    ? 'bg-[#8d4f27] text-white border-[#8d4f27] font-semibold shadow-sm scale-105'
                    : 'bg-[#f4ebe0] text-[#544134] border-[#dfcfbc] hover:bg-[#ebdcc9]'
                }`}
              >
                {chap.yearRange}
              </button>
            ))}
          </div>

          {/* Book Parchment Spread */}
          <div className="bg-[#fffefb] border-4 border-[#c7a783] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all">
            {/* Vintage Album Inner Double Border */}
            <div className="absolute inset-2 border border-[#dfcfbc] rounded-2xl pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              {/* Spread Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#ebdcc9] pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full bg-[#8d4f27] text-white text-xs font-medium font-sans-ui">
                      {currentChapter.yearRange}
                    </span>
                    <span className="text-xs text-[#78471e] font-sans-ui">
                      {currentChapter.categoryLabel}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a1512] mt-2 leading-snug">
                    {currentChapter.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#735e4e] font-serif italic mt-0.5">
                    {currentChapter.subtitle}
                  </p>
                </div>

                <div className="text-right text-xs text-[#6e5d4f] font-sans-ui flex items-center gap-1.5 self-start">
                  <MapPin size={14} className="text-[#8d4f27]" />
                  <span>{currentChapter.location}</span>
                </div>
              </div>

              {/* Main Summary */}
              <div className="p-4 rounded-xl bg-[#f8f1e6] border border-[#dfcfbc] text-xs sm:text-sm text-[#2f2218] leading-relaxed text-justify">
                {currentChapter.summary}
              </div>

              {/* Key Details List */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#735e4e] font-sans-ui block">
                  Тарихи шежіре деректері:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#382b22]">
                  {currentChapter.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#8d4f27] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Historical Quote Box */}
              {currentChapter.historicalQuotes && (
                <div className="p-5 rounded-2xl bg-[#fff9ed] border-l-4 border-[#8d4f27] border border-[#ebdcc9] relative">
                  <Quote size={28} className="text-[#be9f7b] opacity-35 absolute top-3 right-3" />
                  <p className="text-xs sm:text-sm italic font-serif text-[#3b2b1d] leading-relaxed mb-2">
                    «{currentChapter.historicalQuotes[0].text}»
                  </p>
                  <span className="text-xs font-medium text-[#8d4f27] font-sans-ui block text-right">
                    — {currentChapter.historicalQuotes[0].source}
                  </span>
                </div>
              )}

              {/* Articles Published in "Qazaq" */}
              {currentChapter.articlesPublished && (
                <div className="p-4 rounded-xl bg-[#f5ede0] border border-[#dfcfbc] space-y-2">
                  <span className="text-xs font-semibold text-[#6e4e37] font-sans-ui block">
                    «Қазақ» газетінде жарияланған публицистикалық мақалалары:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentChapter.articlesPublished.map((art, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-[#fffdfa] border border-[#d8c5af] text-xs text-[#2b2018] font-sans-ui"
                      >
                        {art}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Album Flip Navigation Controls */}
              <div className="pt-6 border-t-2 border-[#ebdcc9] flex items-center justify-between font-sans-ui">
                <button
                  onClick={handlePrev}
                  disabled={activeChapterIndex === 0}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#f4ebe0] hover:bg-[#ebdcc9] text-xs font-medium text-[#423328] disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-[#dfcfbc]"
                >
                  <ChevronLeft size={16} />
                  <span>Алдыңғы бет</span>
                </button>

                <span className="text-xs text-[#735e4e]">
                  Бет {activeChapterIndex + 1} / {ALBUM_CHAPTERS.length}
                </span>

                <button
                  onClick={handleNext}
                  disabled={activeChapterIndex === ALBUM_CHAPTERS.length - 1}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8d4f27] hover:bg-[#a65e2f] text-xs font-medium text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  <span>Келесі бет</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* VIEW MODE B: ALL CHAPTERS FEED */
        <div className="space-y-6">
          {ALBUM_CHAPTERS.map((chap) => (
            <div
              key={chap.id}
              className="bg-[#fffefb] border-2 border-[#dfcfbc] rounded-2xl p-6 sm:p-7 shadow-sm space-y-4 transition-all hover:border-[#b89574]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#ebdcc9] pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#8d4f27] text-white text-xs font-medium font-sans-ui">
                    {chap.yearRange}
                  </span>
                  <span className="text-xs text-[#78471e] font-sans-ui">
                    {chap.categoryLabel}
                  </span>
                </div>
                <span className="text-xs text-[#735e4e] font-sans-ui">
                  {chap.location}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#1a1512]">
                {chap.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4a3a2e] leading-relaxed">
                {chap.summary}
              </p>

              <ul className="space-y-1.5 text-xs text-[#3b2d24]">
                {chap.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#8d4f27] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
