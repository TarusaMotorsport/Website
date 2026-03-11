import React from 'react';

// Achievement Badge component inspired by Yeti Racing's rank badges
const AchievementBadge = ({ rank = "1", event = "SAEINDIA hBaja", year = "2024", category = "AIR", delay = 0, compact = false }) => {
  if (compact) {
    return (
      <div
        className="achievement-badge sm:hidden"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="relative w-[72px] h-[88px] rounded-xl border border-[#0F5F4B]/30 bg-white/80 backdrop-blur-sm shadow-lg flex flex-col items-center justify-between px-1 py-2">
          <p className="font-gilroy-bold text-[#0F5F4B] text-[8px] leading-tight uppercase tracking-wide text-center">{event}</p>
          <div className="font-gilroy-black text-[#0F5F4B] text-[28px] leading-none">{rank}</div>
          <p className="font-gilroy-bold text-[#0F5F4B] text-[8px] uppercase tracking-widest">{category}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="achievement-badge hidden sm:block"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Card */}
      <div className="relative w-[140px] h-[165px] rounded-2xl border border-[#0F5F4B]/30 bg-white/80 backdrop-blur-sm shadow-xl flex flex-col items-center justify-between px-3 py-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 group hover:border-[#0F5F4B]/60">
        {/* Top glow line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-[#0F5F4B] to-transparent opacity-60 rounded-full" />

        {/* Event + Year */}
        <div className="text-center">
          <p className="font-gilroy-bold text-[#0F5F4B] text-[11px] leading-tight uppercase tracking-wide">{event}</p>
          <p className="font-gilroy-medium text-gray-400 text-[10px]">{year}</p>
        </div>

        {/* Laurel + Rank */}
        <div className="relative flex items-center justify-center w-full">
          {/* Laurel wreath SVG */}
          <svg width="90" height="72" viewBox="0 0 90 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80 group-hover:opacity-100 transition-opacity">
            {/* Left laurel */}
            <path d="M8 36C8 36 5 28 10 22C10 22 14 28 12 36" stroke="#0F5F4B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M13 34C13 34 8 27 12 20C12 20 17 26 16 34" stroke="#0F5F4B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M18 32C18 32 12 26 15 18C15 18 21 24 20 32" stroke="#0F5F4B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M23 31C23 31 17 25 20 17C20 17 27 23 26 31" stroke="#0F5F4B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M15 42C15 42 8 40 8 32C8 32 16 32 18 40" stroke="#0F5F4B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M19 46C19 46 11 46 10 38C10 38 18 37 20 45" stroke="#0F5F4B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M24 49C24 49 16 50 14 43C14 43 22 41 25 48" stroke="#0F5F4B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M30 51C30 51 22 53 20 46C20 46 28 44 31 50" stroke="#0F5F4B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <line x1="19" y1="64" x2="35" y2="64" stroke="#0F5F4B" strokeWidth="2" strokeLinecap="round" />
            {/* Right laurel */}
            <path d="M82 36C82 36 85 28 80 22C80 22 76 28 78 36" stroke="#0F5F4B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M77 34C77 34 82 27 78 20C78 20 73 26 74 34" stroke="#0F5F4B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M72 32C72 32 78 26 75 18C75 18 69 24 70 32" stroke="#0F5F4B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M67 31C67 31 73 25 70 17C70 17 63 23 64 31" stroke="#0F5F4B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M75 42C75 42 82 40 82 32C82 32 74 32 72 40" stroke="#0F5F4B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M71 46C71 46 79 46 80 38C80 38 72 37 70 45" stroke="#0F5F4B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M66 49C66 49 74 50 76 43C76 43 68 41 65 48" stroke="#0F5F4B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M60 51C60 51 68 53 70 46C70 46 62 44 59 50" stroke="#0F5F4B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <line x1="71" y1="64" x2="55" y2="64" stroke="#0F5F4B" strokeWidth="2" strokeLinecap="round" />
            {/* Center rank number */}
            <text x="45" y="58" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="36" fill="#0F5F4B">{rank}</text>
          </svg>
        </div>

        {/* Category label */}
        <div className="text-center">
          <p className="font-gilroy-bold text-[#0F5F4B] text-[12px] uppercase tracking-widest">{category}</p>
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#F5FB52] to-transparent opacity-80 rounded-full" />
      </div>
    </div>
  );
};

export default AchievementBadge;
