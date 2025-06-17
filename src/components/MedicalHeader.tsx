
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
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 to-blue-900/95 backdrop-blur-sm border-b border-scan-blue/30"
      style={{ backgroundColor: 'rgba(16, 16, 16, 0.95)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center space-x-3">
            <div 
              className="w-8 h-8 sm:w-10 sm:h-10 bg-scan-blue rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-400 transition-colors"
              onClick={scrollToTop}
              style={{ backgroundColor: 'var(--scan-blue)' }}
            >
              <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h1 
                className="text-lg sm:text-xl font-bold tracking-wide"
                style={{ color: 'var(--scan-blue)' }}
              >
                Family Medical Center
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 hidden sm:block">
                Celebrating Life & Love
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-gray-400">Patient:</p>
              <p className="text-sm font-medium text-white">Dr. Shaurya</p>
            </div>
            <div 
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: 'var(--warm-gold)' }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MedicalHeader;
