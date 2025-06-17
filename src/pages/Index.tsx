
import React, { useState, useEffect, useRef } from 'react';
import MedicalHeader from '../components/MedicalHeader';
import HeroSection from '../components/HeroSection';
import ScanLayer from '../components/ScanLayer';
import FinaleSection from '../components/FinaleSection';
import AudioControl from '../components/AudioControl';

const Index = () => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Initialize audio
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      // Attempt to auto-play (will only work if user has interacted with page)
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setAudioPlaying(true);
          })
          .catch((error) => {
            console.log('Auto-play prevented:', error);
          });
      }
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause();
        setAudioPlaying(false);
      } else {
        audioRef.current.play();
        setAudioPlaying(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://dl.dropbox.com/scl/fi/jkg5bw9c1v9qknomg8p2f/Shaurya-2.mp3?rlkey=s3b5nq1oi56jh9g04urv0aa95&st=9ugta2qr"
      />

      {/* Medical Header */}
      <MedicalHeader />

      {/* Audio Control */}
      <AudioControl isPlaying={audioPlaying} onToggle={toggleAudio} />

      {/* Hero Section */}
      <HeroSection />

      {/* Scan Layer Sections */}
      <ScanLayer
        headline="The Original Blueprint"
        imageUrl="/lovable-uploads/64c68798-0f66-4d60-bb84-440495f1994f.png"
        caption="With Papaji & Mummy – your first fans!"
      />

      <ScanLayer
        headline="An Unbreakable Bond"
        imageUrl="/lovable-uploads/26782cf7-77d6-4d45-bd33-16267588960a.png"
        caption="Abhishek, Kanupriya and you – Sibling goals!"
      />

      <ScanLayer
        headline="Patient File: KAKU"
        imageUrl="/lovable-uploads/0d1ae52a-b39c-4162-935a-55dec70f0225.png"
        caption="With Kishu – who loves his 'Kaku' more than Chhota Bheem!"
        isPlayful={true}
      />

      <ScanLayer
        headline="A New Chapter, A Forever Love"
        imageUrl="/lovable-uploads/fd2674f9-5f03-4a76-ae50-ec3ceb2d7556.png"
        caption="With Anupriya – your first birthday together as a couple ❤️"
        hasHeart={true}
      />

      {/* Finale Section */}
      <FinaleSection />
    </div>
  );
};

export default Index;
