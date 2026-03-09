import React, { useEffect, useState } from 'react';
import TarusaLogo from '../assets/tarusa_logo.png';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            if (onLoadingComplete) onLoadingComplete();
          }, 500); // Delay before fading out
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const handleLogoClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1;
      if (newCount >= 2) {
        setShowSecret(true);
        setTimeout(() => setShowSecret(false), 2000);
        return 0;
      }
      return newCount;
    });
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500 ${
        progress === 100 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-64 h-24">
        {/* Muted Logo (Background) */}
        <img 
          src={TarusaLogo}
          alt="Tarusa Logo"
          className="absolute inset-0 w-full h-full object-contain opacity-20 cursor-pointer"
          onClick={handleLogoClick}
        />
        
        {/* Progress Mask */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Original Logo */}
          <img 
            src={TarusaLogo}
            alt="Tarusa Logo"
            className="w-full h-full object-contain cursor-pointer"
            onClick={handleLogoClick}
            style={{
              clipPath: `inset(0 ${100 - progress}% 0 0)`,
              transition: 'clip-path 0.3s ease-out'
            }}
          />
        </div>

        {/* Loading Text */}
        <div 
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 font-gilroy-medium text-sm text-[#0F5F4B] tracking-wider whitespace-nowrap"
          style={{ opacity: progress === 100 ? 0 : 0.7 }}
        >
          <span className="font-gilroy-bold">Hold tight.</span>
          <span className="ml-2">Adrenaline incoming</span>
        </div>

        {/* Secret Message */}
        {showSecret && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 font-gilroy-bold text-sm text-[#F5FB52] bg-[#0F5F4B] px-4 py-2 rounded-full whitespace-nowrap animate-bounce">
            🏎️ Speed is in our DNA! 🏁
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen; 