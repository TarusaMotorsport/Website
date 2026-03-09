import React, { useEffect, useRef, useState } from 'react';
import Navbar, { SponsorButton } from '../components/Navbar';
import LandingSection from '../components/LandingSection';
import TimelineSection from '../components/TimelineSection';
import TimelineSection2022 from '../components/TimelineSection2022';
import TimelineSection2024 from '../components/TimelineSection2024';
import TimelineSection2025 from '../components/TimelineSection2025';
import AchievementsSection from '../components/AchievementsSection';
import CTASection from '../components/CTASection';
import LoadingScreen from '../components/LoadingScreen';
import CircularMenu from '../components/CircularMenu';

function Home() {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [blurActive, setBlurActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [konamiActive, setKonamiActive] = useState(false);
  const [raceMode, setRaceMode] = useState(false);
  const [raceBuffer, setRaceBuffer] = useState('');
  const [raceTimeout, setRaceTimeout] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const totalSections = 7; // Landing, Timeline2017, Timeline2022, Timeline2024, Timeline2025, Achievements, CTA

  const handleSectionChange = (sectionNumber) => {
    setCurrentSection(sectionNumber);
    setBlurActive(true);
    setTimeout(() => setBlurActive(false), 300);
  };

  // Konami code with confetti easter egg
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
    let konamiIndex = 0;
    const handleKeydown = (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setKonamiActive(true);
          setTimeout(() => setKonamiActive(false), 5000);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  // Race mode easter egg
  useEffect(() => {
    const handleKeyDown = (e) => {
      const newBuffer = raceBuffer + e.key.toLowerCase();
      if (newBuffer.includes('race')) {
        setRaceMode(true);
        setTimeout(() => setRaceMode(false), 5000);
        setRaceBuffer('');
      } else {
        setRaceBuffer(newBuffer.slice(-4));
        if (raceTimeout) clearTimeout(raceTimeout);
        setRaceTimeout(setTimeout(() => setRaceBuffer(''), 1000));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (raceTimeout) clearTimeout(raceTimeout);
    };
  }, [raceBuffer, raceTimeout]);

  const bezierEasing = (t) => {
    const p0 = 0, p1 = 0.4, p2 = 0.6, p3 = 1;
    const u = 1 - t;
    return (Math.pow(u, 3) * p0 + 3 * Math.pow(u, 2) * t * p1 + 3 * u * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3);
  };

  useEffect(() => {
    const container = containerRef.current;
    let isWheelEvent = false;

    const smoothScrollToSection = (targetSection) => {
      if (isScrolling) return;
      if (targetSection < 0 || targetSection >= totalSections) return;
      setIsScrolling(true);
      setBlurActive(true);
      container.style.overflow = 'hidden';
      const start = container.scrollTop;
      const target = targetSection * window.innerHeight;
      const distance = target - start;
      const duration = 300;
      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        container.scrollTop = start + (distance * bezierEasing(progress));
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          container.style.overflow = 'auto';
          setIsScrolling(false);
          setBlurActive(false);
          setCurrentSection(targetSection);
          isWheelEvent = false;
        }
      };
      requestAnimationFrame(animate);
    };

    const handleWheel = (e) => {
      e.preventDefault();
      if (isWheelEvent || isScrolling) return;
      isWheelEvent = true;
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection + direction;
      if (nextSection >= 0 && nextSection < totalSections) {
        smoothScrollToSection(nextSection);
      } else {
        isWheelEvent = false;
      }
    };

    if (container) container.addEventListener('wheel', handleWheel, { passive: false });
    return () => { if (container) container.removeEventListener('wheel', handleWheel); };
  }, [isScrolling, currentSection, totalSections]);

  // Touch handling
  useEffect(() => {
    const container = containerRef.current;
    let touchStart = 0, touchEnd = 0;
    const minSwipeDistance = 50;
    const handleTouchStart = (e) => { touchStart = e.touches[0].clientY; };
    const handleTouchMove = (e) => { touchEnd = e.touches[0].clientY; };
    const handleTouchEnd = () => {
      if (isScrolling) return;
      const swipeDistance = touchStart - touchEnd;
      if (Math.abs(swipeDistance) > minSwipeDistance) {
        const direction = swipeDistance > 0 ? 1 : -1;
        const nextSection = currentSection + direction;
        if (nextSection >= 0 && nextSection < totalSections) {
          const container = containerRef.current;
          if (!container) return;
          container.style.overflow = 'hidden';
          setIsScrolling(true);
          setBlurActive(true);
          const start = container.scrollTop;
          const target = nextSection * window.innerHeight;
          container.scrollTop = target;
          container.style.overflow = 'auto';
          setIsScrolling(false);
          setBlurActive(false);
          setCurrentSection(nextSection);
        }
      }
    };
    if (container) {
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove);
      container.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [isScrolling, currentSection, totalSections]);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const progress = Math.min(scrollTop / window.innerHeight, 1);
        setScrollProgress(progress);
      }
    };
    const container = containerRef.current;
    if (container) container.addEventListener('scroll', handleScroll);
    return () => { if (container) container.removeEventListener('scroll', handleScroll); };
  }, []);

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />

      {/* Konami confetti easter egg */}
      {konamiActive && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center">
          <div className="relative">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-sm animate-bounce"
                style={{
                  backgroundColor: i % 3 === 0 ? '#0F5F4B' : i % 3 === 1 ? '#F5FB52' : '#ffffff',
                  left: `${Math.random() * 400 - 200}px`,
                  top: `${Math.random() * 400 - 200}px`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  animationDuration: `${0.5 + Math.random() * 1}s`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
            <div className="bg-[#0F5F4B] text-[#F5FB52] font-gilroy-black text-2xl px-8 py-4 rounded-2xl shadow-2xl">
              🏎️ TARUSA MODE ACTIVATED!
            </div>
          </div>
        </div>
      )}

      <CircularMenu isVisible={currentSection !== 0} onSectionChange={handleSectionChange} />
      {currentSection !== 0 && (
        <div className="fixed left-8 bottom-8 z-50">
          <SponsorButton isLight={false} />
        </div>
      )}

      <div
        ref={containerRef}
        className={`relative h-screen w-full overflow-y-auto overflow-x-hidden transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'
          } ${raceMode ? 'race-mode' : ''}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className={`transition-all duration-300 ${blurActive ? 'motion-blur' : ''}`}>
          {currentSection === 0 && <Navbar currentSection={currentSection} onSectionChange={handleSectionChange} />}

          {/* Section 0: Landing */}
          <div className="h-screen w-full">
            <LandingSection scrollProgress={scrollProgress} />
          </div>
          {/* Section 1: Timeline 2017 */}
          <div className="h-screen w-full">
            <TimelineSection />
          </div>
          {/* Section 2: Timeline 2022 */}
          <div className="h-screen w-full">
            <TimelineSection2022 />
          </div>
          {/* Section 3: Timeline 2024 */}
          <div className="h-screen w-full">
            <TimelineSection2024 />
          </div>
          {/* Section 4: Timeline 2025 — Current Build */}
          <div className="h-screen w-full">
            <TimelineSection2025 />
          </div>
          {/* Section 5: Achievements */}
          <div className="h-screen w-full">
            <AchievementsSection />
          </div>
          {/* Section 6: CTA / What's Next */}
          <div className="h-screen w-full">
            <CTASection />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;