import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';
import CarModel from './CarModel';
import bgBlur from '../assets/bg_blur.webp';
import AchievementBadge from './AchievementBadge';

// Enhanced loading component with actual progress
const LoadingSpinner = () => {
  const { progress } = useProgress();
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-[#0F5F4B] border-t-transparent rounded-full animate-spin mb-4"></div>
        <div className="font-gilroy-medium text-[#0F5F4B]">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

const Scene = ({ scrollProgress }) => {
  // Model shrinks slightly as you scroll away
  const modelScale = 1.4 - (scrollProgress * 0.3);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={5} />
      <directionalLight position={[9, 1, 5]} intensity={3} />
      <CarModel
        position={[-0.7, -0.7, 0]}
        rotation={[0, 0.8, 0]}
        scale={modelScale}
        scrollProgress={scrollProgress}
      />
    </>
  );
};

// Achievement data — update as you win more competitions
const heroAchievements = [
  { rank: "1", event: "SAEINDIA hBaja", year: "2024", category: "AIR", delay: 100 },
  { rank: "1", event: "SAEINDIA hBaja", year: "2024", category: "Design", delay: 200 },
  { rank: "2", event: "SAEINDIA eBaja", year: "2022", category: "Virtual", delay: 300 },
  { rank: "1", event: "SAEINDIA Baja", year: "2017", category: "Debut", delay: 400 },
];

const LandingSection = ({ scrollProgress = 0 }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background blur image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={bgBlur}
          alt="Background Blur"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Big TARUSA text — stacked behind car */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none select-none">
        {/* TARUSA */}
        <h1
          className="font-gilroy-black text-[#0F5F4B] leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(52px, 14vw, 200px)',
            transform: 'translateY(-12%)',
          }}
        >
          TARUSA
        </h1>
        {/* MOTORSPORT */}
        <h1
          className="font-gilroy-black text-[#0F5F4B] leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(30px, 8vw, 115px)',
            transform: 'translateY(20%)',
          }}
        >
          MOTORSPORT
        </h1>
      </div>

      {/* 3D Model Canvas — on top of text */}
      <div className="absolute inset-0 z-20">
        <Suspense fallback={<LoadingSpinner />}>
          <Canvas
            camera={{
              position: [0, 6, 12],
              fov: 35,
              near: 0.1,
              far: 1000
            }}
            style={{ background: 'transparent' }}
          >
            <Scene scrollProgress={scrollProgress} />
          </Canvas>
        </Suspense>
      </div>

      {/* Achievement Badges — compact horizontal strip on mobile, 2×2 sidebar on desktop */}
      {/* Mobile: bottom strip (hidden on sm+) */}
      <div className="absolute bottom-20 left-0 right-0 z-30 flex justify-center gap-2 sm:hidden px-4">
        {heroAchievements.map((ach, i) => (
          <AchievementBadge key={i} {...ach} compact />
        ))}
      </div>

      {/* Desktop: right sidebar (hidden below sm) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col gap-3 pointer-events-none">
        <div className="text-right mb-2">
          <p className="font-gilroy-bold text-[#0F5F4B] text-xs uppercase tracking-widest opacity-70">Our Achievements</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {heroAchievements.map((ach, i) => (
            <AchievementBadge key={i} {...ach} />
          ))}
        </div>
      </div>

      {/* Bottom info — team tagline */}
      <div className="absolute bottom-14 left-0 right-0 z-30 text-center pointer-events-none px-4">
        <p className="font-['Rough-Splash'] text-base sm:text-xl md:text-[24px] text-[#0F5F4B] tracking-[0.1em]">
          official off-road racing team of CUSAT
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F5F4B]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default LandingSection;