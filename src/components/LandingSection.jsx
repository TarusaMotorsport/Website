import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';
import CarModel from './CarModel';
import bgBlur from '../assets/bg_blur.png';
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
  const modelPosition = [-0.7, -0.7, 0];
  const modelRotation = [0, 0.8, 0];
  const modelScale = 1.4 - (scrollProgress * 0.3);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={5} />
      <directionalLight position={[9, 1, 5]} intensity={3} />
      <CarModel
        position={modelPosition}
        rotation={modelRotation}
        scale={modelScale}
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
      <div className="absolute inset-0 flex items-center justify-center -translate-y-8">
        <img
          src={bgBlur}
          alt="Background Blur"
          className="w-7/10 h-7/10 object-contain"
        />
      </div>

      {/* Content container - moved before Canvas to be behind */}
      <div className="absolute z-10 h-full w-full max-w-[2000px] mx-auto container">
        <div className="relative h-full flex flex-col items-center justify-center">
          {/* TARUSA text container */}
          <div className="w-full max-w-[90%] lg:max-w-[80%] xl:max-w-[70%]">
            <div className="relative left-1/2 -translate-x-[30vw] -translate-y-[12vh]">
              <h1 className="font-gilroy-black text-[#0F5F4B] text-[170px] leading-tight md:text-[120px] sm:text-[90px] xs:text-[60px] whitespace-nowrap">
                TARUSA
              </h1>
            </div>
          </div>

          {/* MOTORSPORT text container */}
          <div className="w-full max-w-[90%] lg:max-w-[80%] xl:max-w-[70%]">
            <div className="relative left-1/2 -translate-x-[9vw] translate-y-[14vh]">
              <h1 className="font-gilroy-black text-[#0F5F4B] text-[170px] leading-tight md:text-[120px] sm:text-[90px] xs:text-[60px] whitespace-nowrap">
                MOTORSPORT
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Model Canvas */}
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

      {/* Achievement Badges — Yeti Racing inspired, top-right area */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3 pointer-events-none">
        {/* Intro text */}
        <div className="text-right mb-2">
          <p className="font-gilroy-bold text-[#0F5F4B] text-xs uppercase tracking-widest opacity-70">Our Achievements</p>
        </div>
        {/* 2×2 grid of badges */}
        <div className="grid grid-cols-2 gap-3">
          {heroAchievements.map((ach, i) => (
            <AchievementBadge key={i} {...ach} />
          ))}
        </div>
      </div>

      {/* Team description and scroll indicator in front */}
      <div className="relative z-30 h-full w-full max-w-[2000px] mx-auto container pointer-events-none">
        <div className="relative h-full">
          {/* Team description text */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center">
            <p className="font-['Rough-Splash'] text-[24px] text-[#0F5F4B] tracking-[0.1em]">
              official off-road racing team of CUSAT
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-[#0F5F4B]"
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
        </div>
      </div>
    </section>
  );
};

export default LandingSection;