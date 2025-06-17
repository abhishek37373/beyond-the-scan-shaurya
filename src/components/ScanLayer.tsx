
import React, { useEffect, useRef, useState } from 'react';

interface ScanLayerProps {
  headline: string;
  imageUrl: string;
  caption: string;
  isPlayful?: boolean;
  hasHeart?: boolean;
}

const ScanLayer: React.FC<ScanLayerProps> = ({
  headline,
  imageUrl,
  caption,
  isPlayful = false,
  hasHeart = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scanStarted, setScanStarted] = useState(false);
  const [imageRevealed, setImageRevealed] = useState(false);
  const [captionVisible, setCaptionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Start animation sequence
          setTimeout(() => setScanStarted(true), 200);
          setTimeout(() => setImageRevealed(true), 500);
          setTimeout(() => setCaptionVisible(true), 1500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="full-screen scan-section flex flex-col items-center justify-center relative"
      style={{ backgroundColor: 'var(--dark-bg)' }}
    >
      {/* Scan Line */}
      {scanStarted && (
        <div className="scan-line animated"></div>
      )}

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Headline */}
        {isVisible && (
          <h2 
            className="text-3xl md:text-5xl font-bold mb-12 text-reveal"
            style={{ color: 'var(--scan-blue)' }}
          >
            {headline}
          </h2>
        )}

        {/* Image Container */}
        <div className="relative mb-8 inline-block">
          <img
            src={imageUrl}
            alt={headline}
            className={`w-full max-w-2xl h-auto rounded-lg shadow-2xl transition-all duration-2000 ${
              imageRevealed ? '' : 'xray-filter'
            }`}
            style={{
              filter: imageRevealed ? 'none' : 'grayscale(1) sepia(1) hue-rotate(180deg) saturate(3)'
            }}
          />
        </div>

        {/* Caption */}
        {captionVisible && (
          <p 
            className={`text-xl md:text-2xl text-reveal ${
              isPlayful ? 'font-script text-3xl' : ''
            }`}
            style={{ 
              color: 'var(--text-light)',
              fontFamily: isPlayful ? 'var(--font-script)' : 'var(--font-sans)'
            }}
          >
            {hasHeart ? (
              <>
                {caption.replace(' ❤️', '')}
                <span className="pulse-heart text-red-500 ml-2">❤️</span>
              </>
            ) : (
              caption
            )}
          </p>
        )}
      </div>
    </section>
  );
};

export default ScanLayer;
