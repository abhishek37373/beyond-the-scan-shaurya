
import React from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioControlProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const AudioControl: React.FC<AudioControlProps> = ({ isPlaying, onToggle }) => {
  return (
    <div 
      className="fixed bottom-4 left-4 bg-blue-500/20 border-2 border-blue-500 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer z-50 transition-all duration-300 hover:bg-blue-500/40 hover:scale-110"
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onToggle();
        }
      }}
      aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
    >
      {isPlaying ? (
        <Pause className="w-5 h-5 text-blue-400" />
      ) : (
        <Play className="w-5 h-5 text-blue-400 ml-0.5" />
      )}
    </div>
  );
};

export default AudioControl;
