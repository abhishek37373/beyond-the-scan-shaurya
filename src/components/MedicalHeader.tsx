
import React from 'react';
import { Plus } from 'lucide-react';

const MedicalHeader = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="fixed top-4 right-4 z-50 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-3 cursor-pointer hover:bg-white transition-all duration-300 hover:scale-105"
      onClick={scrollToTop}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          scrollToTop();
        }
      }}
      aria-label="Family Medical Center - Scroll to top"
    >
      <div className="flex items-center gap-2">
        <Plus className="w-5 h-5 text-red-600" />
        <div className="text-sm font-semibold text-gray-800">
          <div>Family Medical</div>
          <div className="text-xs text-gray-600">Center</div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHeader;
