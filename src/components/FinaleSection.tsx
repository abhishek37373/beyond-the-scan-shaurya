
import React, { useState, useRef } from 'react';

const FinaleSection = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [showPrescription, setShowPrescription] = useState(false);
  const [monitorFaded, setMonitorFaded] = useState(false);
  const blipAudioRef = useRef<HTMLAudioElement>(null);

  const cardData = [
    { front: 'S - Scan', back: 'S - Supportive' },
    { front: 'H - Hemoglobin', back: 'H - Humorous' },
    { front: 'A - Artery', back: 'A - Affectionate' },
    { front: 'U - Ultrasound', back: 'U - Understanding' },
    { front: 'R - Radiography', back: 'R - Reliable' },
    { front: 'Y - Yield', back: 'Y - Youthful' },
    { front: 'A - Anatomy', back: 'A - Adorable' }
  ];

  const handleCardFlip = (index: number) => {
    if (flippedCards.has(index)) return;

    // Play blip sound
    if (blipAudioRef.current) {
      blipAudioRef.current.currentTime = 0;
      blipAudioRef.current.play().catch(() => {
        // Fallback if audio fails
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

  return (
    <>
      {/* Blip Audio */}
      <audio
        ref={blipAudioRef}
        preload="auto"
        src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxXp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMcBjeT2fTNeysFJHfH8N2QQAoUXrTp66hVFApGn+"
      />

      <section 
        className="full-screen flex items-center justify-center relative"
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
          className={`relative z-10 w-full max-w-4xl mx-auto px-6 text-center ${
            monitorFaded ? 'fade-out' : ''
          }`}
        >
          <h2 
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ color: 'var(--scan-blue)' }}
          >
            Final Analysis: The Heartbeat of a Hero
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            Tap each letter to reveal the core components.
          </p>

          {/* Interactive Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="card-container"
                onClick={() => handleCardFlip(index)}
              >
                <div className={`card-flip ${flippedCards.has(index) ? 'is-flipped' : ''}`}>
                  <div className="card-front h-24 md:h-32">
                    <span className="text-center">{card.front}</span>
                  </div>
                  <div className="card-back h-24 md:h-32">
                    <span className="text-center">{card.back}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prescription Pad */}
        {showPrescription && (
          <div 
            id="prescription-pad"
            className="absolute inset-0 flex items-center justify-center z-20 fade-in"
          >
            <div className="prescription-pad">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Dr. Love's Clinic</h3>
                <div className="h-px bg-gray-300 mb-4"></div>
              </div>
              
              <pre className="typewriter text-sm md:text-base leading-relaxed">
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
