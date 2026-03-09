import React, { useState, useEffect, useCallback, useRef } from 'react';

const ScrambleText = ({ text, isHovering, onScrambleEnd }) => {
  const [scrambledText, setScrambledText] = useState(text);
  const audioRef = useRef(null);
  const [canPlayAudio, setCanPlayAudio] = useState(false);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  // Initialize audio after first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!audioRef.current) {
        audioRef.current = new Audio('/audio/type.wav');
        audioRef.current.volume = 1.0;
        setCanPlayAudio(true);
        
        // Remove listeners after initialization
        document.removeEventListener('mousedown', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
      }
    };

    document.addEventListener('mousedown', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('mousedown', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  // Handle hover sound effect
  useEffect(() => {
    if (!canPlayAudio || !audioRef.current) return;

    if (isHovering) {
      audioRef.current.currentTime = 0;
      const playPromise = audioRef.current.play();
      if (playPromise) {
        playPromise.catch(() => {});
      }
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isHovering, canPlayAudio]);

  const scramble = useCallback(() => {
    if (!isHovering) {
      setScrambledText(text);
      return;
    }

    let iterations = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
      setScrambledText(prev => 
        prev
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return text[index];
            }
            
            if (char === ' ') return ' ';
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      iterations += 1/3;
      
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setScrambledText(text);
        if (onScrambleEnd) onScrambleEnd();
      }
    }, 30);

    return () => {
      clearInterval(interval);
      if (!isHovering) {
        setScrambledText(text);
      }
    };
  }, [text, isHovering, characters, onScrambleEnd]);

  useEffect(() => {
    const cleanup = scramble();
    return () => {
      if (cleanup) cleanup();
    };
  }, [isHovering, scramble]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return <span className="inline-block">{scrambledText}</span>;
};

export default ScrambleText; 