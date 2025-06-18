import React, { useState, useRef } from 'react';
import { X, Heart, Activity, Stethoscope, Cross } from 'lucide-react';

const FinaleSection = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [showPrescription, setShowPrescription] = useState(false);
  const [monitorFaded, setMonitorFaded] = useState(false);
  const blipAudioRef = useRef<HTMLAudioElement>(null);

  const cardData = [
    { front: 'S - Scan', back: 'S - Supportive', icon: Activity },
    { front: 'H - Hemoglobin', back: 'H - Humorous', icon: Heart },
    { front: 'A - Artery', back: 'A - Affectionate', icon: Activity },
    { front: 'U - Ultrasound', back: 'U - Understanding', icon: Stethoscope },
    { front: 'R - Radiography', back: 'R - Reliable', icon: Cross },
    { front: 'Y - Yield', back: 'Y - Youthful', icon: Heart },
    { front: 'A - Anatomy', back: 'A - Adorable', icon: Activity }
  ];

  const handleCardFlip = (index: number) => {
    if (flippedCards.has(index)) return;

    // Play blip sound
    if (blipAudioRef.current) {
      blipAudioRef.current.currentTime = 0;
      blipAudioRef.current.play().catch(() => {
        console.log('Blip sound playback failed');
      });
    }

    const newFlippedCards = new Set(flippedCards);
    newFlippedCards.add(index);
    setFlippedCards(newFlippedCards);

    // Check if all cards are flipped
    if (newFlippedCards.size === 7) {
      setTimeout(() => {
        setMonitorFaded(true);
        setTimeout(() => {
          setShowPrescription(true);
        }, 500);
      }, 1000);
    }
  };

  const handleCloseAndScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Reset all states to original
    setShowPrescription(false);
    setMonitorFaded(false);
    setFlippedCards(new Set()); // Reset cards to original state
  };

  return (
    <>
      {/* Blip Audio */}
      <audio
        ref={blipAudioRef}
        preload="auto"
        src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxXp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+"
      />

      <section 
        className="min-h-screen flex items-center justify-center relative px-4 py-8"
        style={{ backgroundColor: 'var(--charcoal-bg)' }}
      >
        {/* EKG Background */}
        <svg className="ekg-background" viewBox="0 0 800 200">
          <path 
            d="M0,100 Q50,50 100,100 T200,100 L220,100 L240,40 L260,160 L280,100 Q350,50 400,100 T500,100 L520,100 L540,40 L560,160 L580,100 Q650,50 700,100 T800,100"
            stroke="var(--scan-blue)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
        </svg>

        {/* Vital Signs Monitor */}
        <div 
          id="vital-signs-monitor"
          className={`relative z-10 w-full max-w-4xl mx-auto text-center ${
            monitorFaded ? 'fade-out' : ''
          }`}
        >
          <h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight"
            style={{ color: 'var(--scan-blue)' }}
          >
            Final Analysis: The Heartbeat of a Hero
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-300">
            Tap each letter to reveal the core components.
          </p>

          {/* Enhanced Medical Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 mb-6">
            {cardData.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="medical-card-container"
                  onClick={() => handleCardFlip(index)}
                >
                  <div className={`medical-card-flip ${flippedCards.has(index) ? 'is-flipped' : ''}`}>
                    <div className="medical-card-front">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 mb-2 mx-auto" />
                      <span className="text-center text-xs sm:text-sm font-semibold leading-tight">
                        {card.front}
                      </span>
                    </div>
                    <div className="medical-card-back">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 mb-2 mx-auto text-red-600" />
                      <span className="text-center text-xs sm:text-sm font-semibold leading-tight">
                        {card.back}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Prescription Pad with Close Button */}
        {showPrescription && (
          <div 
            id="prescription-pad"
            className="fixed inset-0 flex items-center justify-center z-50 fade-in p-4 bg-black/50 backdrop-blur-sm"
          >
            <div className="prescription-pad max-w-sm sm:max-w-md w-full relative">
              {/* Close Button */}
              <button
                onClick={handleCloseAndScrollTop}
                className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close prescription and scroll to top"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCloseAndScrollTop();
                  }
                }}
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              <div className="text-center mb-4">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-600 mb-2">Family Medical Center</h3>
                <div className="h-px bg-gray-300 mb-4"></div>
              </div>
              
              <pre className="typewriter text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
{`================================
Rx: Shaurya

DOSAGE:
A lifetime of love, administered daily.

INSTRUCTIONS:
Take with endless laughter and joy. 
May cause extreme happiness.

REFILLS:
Unlimited.

Signed,
All of Us Who Love You `}<span className="pulse-heart text-red-500">❤️</span>
              </pre>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default FinaleSection;