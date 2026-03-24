import React from 'react';
import polaroidImage from '../assets/journey_pics/polaroid_2024.webp';

const TimelineSection2024 = () => {
  return (
    <div className="relative h-full w-full bg-[#050f0c] flex items-center justify-center overflow-hidden">
      {/* Dot texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      {/* Glow — golden win glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#F5FB52] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-64 h-64 bg-[#0F5F4B] rounded-full blur-[120px] opacity-20 pointer-events-none" />

      {/* Center Timeline Line with gradient effect */}
      <div className="absolute left-1/2 top-0 bottom-0 w-56 transform -translate-x-1/2">
        <div className="absolute inset-0 bg-[#0F5F4B]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F5F4B] to-transparent opacity-70"></div>
      </div>

      {/* Timeline Content */}
      <div className="container mx-auto max-w-7xl px-8 relative z-10">
        {/* Year Marker */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-[60%] -translate-y-1/2 text-white z-10 text-center flex flex-col items-start justify-center">
          <div className="font-gilroy-black text-[170px] leading-tight tracking-wider opacity-90">20</div>
          <div className="font-gilroy-black text-[180px] leading-tight tracking-wider -mt-16 opacity-90">24</div>
        </div>

        <div className="relative grid grid-cols-2 gap-32 items-center mx-12">
          {/* Left Side - Text */}
          <div className="pr-24">
            <div className="space-y-6">
              {/* Champion badge */}
              <div className="inline-flex items-center gap-2 bg-[#F5FB52]/10 border border-[#F5FB52]/30 text-[#F5FB52] px-4 py-1.5 rounded-full font-gilroy-bold text-xs uppercase tracking-widest">
                🏆 National Champions
              </div>
              <p className="font-gilroy-medium text-2xl leading-relaxed text-white/80">
                2024 was a milestone year for us. We entered the newly introduced hBaja category — a hydrogen-powered class — and made history by securing <span className="font-gilroy-bold text-[#F5FB52]">All India Rank 1 (AIR 1)</span>.
              </p>
              <p className="font-gilroy-medium text-xl leading-relaxed text-white/50">
                Our vehicle ran on a bi-fuel system (CNG & petrol), marking a first not just for us, but for the entire university.
              </p>
              {/* Win stat */}
              <div className="flex gap-6 pt-2">
                <div>
                  <div className="font-gilroy-black text-4xl text-[#F5FB52]">AIR 1</div>
                  <div className="font-gilroy-medium text-white/40 text-xs uppercase tracking-wider">Overall</div>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <div className="font-gilroy-black text-4xl text-white">2024</div>
                  <div className="font-gilroy-medium text-white/40 text-xs uppercase tracking-wider">SAEINDIA hBaja</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="pl-16 flex justify-center items-center">
            <div className="transform hover:scale-110 transition-transform duration-500 w-[140%] rotate-[10deg]">
              <img
                src={polaroidImage}
                alt="Tarusa Motorsports Journey 2024"
                className="w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection2024;