import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { BiographicalAlbum } from './components/BiographicalAlbum';
import { PhotoGallery } from './components/PhotoGallery';
import { WorksLibrary } from './components/WorksLibrary';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'album' | 'gallery' | 'works'>('album');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf7f0] text-[#1a1512]">
      {/* Top Navbar with Title & Portrait (No text above the heading) */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Hero Overview Section - NO text above heading, clean portrait and metrics */}
      <section className="bg-[#f5ede0] border-b border-[#dfcfbc] py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Portrait & Biography */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="relative shrink-0">
                <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#8d4f27] shadow-md ring-4 ring-[#ebdcc9] bg-[#ebdcc9]">
                  <img
                    src="/assets/aistudio/Tynyshpayev_M_329a7ad3.jpg"
                    alt="Мұхамеджан Тынышбаев"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#1a1512]">
                  Ғылым мен ел қызметін ұштастырған тұлға
                </h2>
                <p className="text-xs sm:text-sm text-[#47362a] font-sans-ui max-w-2xl leading-relaxed">
                  Мұхамеджан Тынышбаев — Алаштың ірі қоғам және мемлекет қайраткері, II Мемлекеттік Дума депутаты, Түркістан автономиясының Премьер-министрі, тұңғыш қазақ теміржол инженері, Түрксіб құрылысшысы және көрнекті тарихшы-ғалым.
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full lg:w-auto font-sans-ui shrink-0">
              <div className="bg-[#fffefb] p-3 rounded-xl border border-[#dfcfbc] text-center shadow-2xs">
                <span className="text-[10px] uppercase font-bold text-[#735e4e] block">Туған жері</span>
                <span className="text-sm sm:text-base font-bold text-[#8d4f27]">1879 ж.</span>
                <span className="text-[10px] text-[#5e4f44] block">Мақаншы-Садыр</span>
              </div>

              <div className="bg-[#fffefb] p-3 rounded-xl border border-[#dfcfbc] text-center shadow-2xs">
                <span className="text-[10px] uppercase font-bold text-[#735e4e] block">II Дума депутаты</span>
                <span className="text-sm sm:text-base font-bold text-[#256e43]">1907 ж.</span>
                <span className="text-[10px] text-[#5e4f44] block">28 жасында</span>
              </div>

              <div className="bg-[#fffefb] p-3 rounded-xl border border-[#dfcfbc] text-center shadow-2xs">
                <span className="text-[10px] uppercase font-bold text-[#735e4e] block">Түркістан премьері</span>
                <span className="text-sm sm:text-base font-bold text-[#8d4f27]">1917 ж.</span>
                <span className="text-[10px] text-[#5e4f44] block">Қоқан автономиясы</span>
              </div>

              <div className="bg-[#fffefb] p-3 rounded-xl border border-[#dfcfbc] text-center shadow-2xs">
                <span className="text-[10px] uppercase font-bold text-[#735e4e] block">Түрксіб теміржолы</span>
                <span className="text-sm sm:text-base font-bold text-[#1e613b]">1926–1930</span>
                <span className="text-[10px] text-[#5e4f44] block">Бас маман</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {activeTab === 'album' && (
          <BiographicalAlbum
            onOpenPhotoGallery={() => setActiveTab('gallery')}
          />
        )}

        {activeTab === 'gallery' && <PhotoGallery />}

        {activeTab === 'works' && <WorksLibrary />}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
