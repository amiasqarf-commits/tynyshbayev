import React from 'react';
import { 
  BookOpen, 
  Camera, 
  Search, 
  X
} from 'lucide-react';

interface NavbarProps {
  activeTab: 'album' | 'gallery' | 'works';
  setActiveTab: (tab: 'album' | 'gallery' | 'works') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#fbf7f0]/95 backdrop-blur-md border-b border-[#dfcfbc] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Main Title with Mukhamedzhan's Portrait - NO text above the heading */}
          <div className="flex items-center gap-3.5 w-full md:w-auto">
            <div className="relative shrink-0">
              <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full overflow-hidden border-2 border-[#8d4f27] shadow-md ring-2 ring-[#e8dac8]">
                <img
                  src="/assets/aistudio/Tynyshpayev_M_329a7ad3.jpg"
                  alt="Мұхамеджан Тынышбаев"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-[#1a1512] tracking-tight leading-tight">
                Ғылым мен ел қызметін ұштастырған тұлға
              </h1>
              <p className="text-xs text-[#6e5e52] font-sans-ui mt-0.5">
                Мұхамеджан Тынышбаев (1879–1937)
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8c7b6d]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Іздеу..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#fffdfa] border border-[#dfcfbc] text-xs font-sans-ui text-[#1a1512] placeholder-[#9c8b7e] focus:outline-none focus:ring-2 focus:ring-[#8d4f27]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8c7b6d] hover:text-[#1a1512]"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Tab Switcher - Strictly with Capital first letter then lowercase, e.g. *Тарихи альбом* */}
        <div className="mt-3 pt-2.5 border-t border-[#ebdcc9] flex items-center justify-between overflow-x-auto no-scrollbar gap-2">
          <div className="flex items-center gap-2 flex-nowrap min-w-max">
            <button
              onClick={() => setActiveTab('album')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium font-sans-ui transition-all ${
                activeTab === 'album'
                  ? 'bg-[#8d4f27] text-white font-semibold shadow-sm'
                  : 'bg-[#f4ebe0] text-[#3d2f26] hover:bg-[#ebdcc9]'
              }`}
            >
              <BookOpen size={14} />
              <span>Тарихи альбом</span>
            </button>

            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium font-sans-ui transition-all ${
                activeTab === 'gallery'
                  ? 'bg-[#8d4f27] text-white font-semibold shadow-sm'
                  : 'bg-[#f4ebe0] text-[#3d2f26] hover:bg-[#ebdcc9]'
              }`}
            >
              <Camera size={14} />
              <span>Музей және оқу орындары</span>
            </button>

            <button
              onClick={() => setActiveTab('works')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium font-sans-ui transition-all ${
                activeTab === 'works'
                  ? 'bg-[#8d4f27] text-white font-semibold shadow-sm'
                  : 'bg-[#f4ebe0] text-[#3d2f26] hover:bg-[#ebdcc9]'
              }`}
            >
              <FileTextIcon size={14} />
              <span>Ғылыми еңбектері</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const FileTextIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
);
