
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scanStarted, setScanStarted] = useState(false);
  const [colorReveal, setColorReveal] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [scrollArrowVisible, setScrollArrowVisible] = useState(false);

  useEffect(() => {
    // Animation sequence
    const timer1 = setTimeout(() => {
      setScanStarted(true);
    }, 100);

    const timer2 = setTimeout(() => {
      setColorReveal(true);
    }, 500);

    const timer3 = setTimeout(() => {
      setTextVisible(true);
    }, 2000);

    const timer4 = setTimeout(() => {
      setScrollArrowVisible(true);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <section 
      className="min-h-screen relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/lovable-uploads/6982a748-41ee-4927-9ea3-458f5c1612cd.png')`,
        backgroundPosition: 'center 20%'
      }}
    >
      {/* Scan Line */}
      {scanStarted && (
        <div className="scan-line animated"></div>
      )}

      {/* Image Overlay */}
      <div 
        className={`absolute inset-0 bg-cover transition-all duration-1500 ${
          colorReveal ? '' : 'xray-filter'
        }`}
        style={{
          backgroundImage: `url('/lovable-uploads/6982a748-41ee-4927-9ea3-458f5c1612cd.png')`,
          backgroundPosition: 'center 20%',
          backgroundSize: 'cover'
        }}
      ></div>

      {/* Dark Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(16,16,16,0.8) 20%, rgba(16,16,16,0.2) 100%)'
        }}
      ></div>

      {/* Hero Text - Mobile-first typography */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {textVisible && (
          <>
            <h1 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono mb-4 sm:mb-6 text-reveal leading-tight font-medium"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Being a radiologist, you see what others can't.
            </h1>
            <h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-warm-gold text-reveal-delayed leading-tight font-semibold"
              style={{ 
                fontFamily: 'var(--font-serif)',
                color: 'var(--warm-gold)'
              }}
            >
              But more than that, you feel what others don't.
            </h2>
          </>
        )}
      </div>

      {/* Scroll Arrow */}
      {scrollArrowVisible && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 scroll-arrow">
          <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
          <p className="text-xs mt-2 text-center text-white/80">Scroll to explore</p>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
