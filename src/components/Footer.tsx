import React from 'react';

interface FooterProps {
  setActiveTab?: (tab: 'album' | 'gallery' | 'works') => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="mt-16 bg-[#f5ede0] border-t border-[#dfcfbc] py-6 text-center">
      <p className="text-sm sm:text-base font-medium text-[#1a1512] font-sans-ui tracking-wide">
        Цифрлық мұра
      </p>
    </footer>
  );
};
