import React, { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

interface ArchiveItem {
  id: string;
  title: string;
  imageUrl: string;
}

const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: 'arch-gymnasium',
    title: '1. Верный ерлер гимназияның түлегі - Мұхамеджан Тынышбайұлы',
    imageUrl: '/assets/aistudio/13-8_13f25f15.jpg'
  },
  {
    id: 'arch-ilan-balyk',
    title: '2. Мұхамеджан Тынышбайұлының: «О местоположении города Илан-балыка»',
    imageUrl: '/assets/aistudio/12-10_b282a774.jpg'
  },
  {
    id: 'arch-tashkent-books',
    title: '3. Мұхамеджан Тынышбайұлының Ташкент қаласындағы қазақ тілінде шыққан кітап саны',
    imageUrl: '/assets/aistudio/11-11_97a44256.jpg'
  },
  {
    id: 'arch-spravka-1970',
    title: '4. Мұхамеджан Тынышбайұлының 1970 жылы есімі ақталу туралы справкасы',
    imageUrl: '/assets/aistudio/8-11_e2981913.jpg'
  },
  {
    id: 'arch-ufa-house',
    title: 'М.Тынышбайұлының Уфа қаласындағы тұрған үйі',
    imageUrl: '/assets/aistudio/19-1_5ab3c360.jpg'
  }
];

export const ArchiveDocuments: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#1a1512]">
          Архив құжаттары
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ARCHIVE_ITEMS.map((item) => (
          <div
            key={item.id}
            className="bg-[#fffefb] border border-[#dfcfbc] rounded-2xl p-4 shadow-sm flex flex-col justify-between hover:border-[#8d4f27] transition-all"
          >
            <div
              onClick={() => setSelectedItem(item)}
              className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden bg-[#f5ede0] border border-[#ebdcc9] cursor-pointer group flex items-center justify-center shadow-inner"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3.5 py-1.5 rounded-lg bg-black/75 text-white text-xs font-sans-ui flex items-center gap-1.5 shadow-md">
                  <Maximize2 size={14} />
                  <span>Үлкейтіп көру</span>
                </span>
              </div>
            </div>

            <p className="font-bold text-sm sm:text-base text-[#1a1512] mt-3 text-center leading-snug">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 cursor-pointer animate-fade-in"
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
            title="Жабу"
          >
            <X size={26} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl max-h-[92vh] flex flex-col items-center"
          >
            <img
              src={selectedItem.imageUrl}
              alt={selectedItem.title}
              className="max-w-full max-h-[82vh] object-contain rounded-lg bg-black/40"
            />
            <p className="text-white text-base sm:text-lg font-bold mt-3 text-center px-4">
              {selectedItem.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
