import React from 'react';

// Achievements data — update in FILL_ME.md
const achievements = [
    {
        year: "2024",
        event: "SAEINDIA hBaja",
        result: "All India Rank 1",
        highlight: true,
        description: "Entered the inaugural hydrogen ATV category and secured the top position nationally.",
        badge: "🏆",
        rank: "AIR 1",
    },
    {
        year: "2022",
        event: "SAEINDIA eBaja (Virtual)",
        result: "Virtual Participation",
        highlight: false,
        description: "Strategic comeback after COVID-19 pause. Pivoted from IC to electric powertrain.",
        badge: "⚡",
        rank: "eBaja",
    },
    {
        year: "2017–18",
        event: "SAEINDIA Baja / FMEA",
        result: "Debut Season",
        highlight: false,
        description: "Tarusa's first competition season. The team made its presence felt in the student motorsport scene.",
        badge: "🚀",
        rank: "Debut",
    },
];

// Stat counter item
const StatItem = ({ value, label }) => (
    <div className="text-center">
        <div className="font-gilroy-black text-5xl text-[#F5FB52] mb-1">{value}</div>
        <div className="font-gilroy-medium text-white/60 text-sm uppercase tracking-widest">{label}</div>
    </div>
);

const AchievementsSection = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#050f0c] flex flex-col items-center justify-center py-16 px-8 overflow-hidden">
            {/* Background radial dot texture */}
            <div className="absolute inset-0 opacity-[0.04]">
                <div className="w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle, #F5FB52 1px, transparent 1px)',
                    backgroundSize: '36px 36px'
                }} />
            </div>

            {/* Glow orbs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#0F5F4B] rounded-full blur-[120px] opacity-20 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#F5FB52] rounded-full blur-[100px] opacity-10 pointer-events-none" />

            <div className="relative z-10 w-full max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-block bg-[#0F5F4B]/20 border border-[#0F5F4B]/40 text-[#F5FB52] px-4 py-1.5 rounded-full font-gilroy-bold text-xs mb-6 tracking-[0.2em] uppercase">
                        Competition Record
                    </div>
                    <h2 className="font-gilroy-black text-6xl text-white mb-4 leading-tight">
                        Our Achievements
                    </h2>
                    <p className="font-gilroy-medium text-white/50 text-lg max-w-xl mx-auto">
                        From our debut in 2017 to AIR 1 in 2024 — a record written in dust, steel, and hydrogen.
                    </p>
                </div>

                {/* Stats Bar — inspired by Yeti Racing's quick stats */}
                <div className="grid grid-cols-3 gap-8 mb-12 border border-white/10 rounded-2xl py-8 px-6 bg-white/[0.03] backdrop-blur-sm">
                    <StatItem value="3+" label="Competitions" />
                    <StatItem value="1" label="National Rank 1" />
                    <StatItem value="8+" label="Years Active" />
                </div>

                {/* Achievement cards */}
                <div className="space-y-4">
                    {achievements.map((item, i) => (
                        <div
                            key={i}
                            className={`relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group ${item.highlight
                                    ? 'bg-[#F5FB52] border-[#F5FB52] shadow-[0_0_40px_rgba(245,251,82,0.15)]'
                                    : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.07] hover:border-white/20'
                                }`}
                        >
                            {/* Rank badge — top right corner */}
                            <div className={`absolute top-4 right-4 font-gilroy-black text-3xl ${item.highlight ? 'text-[#0F5F4B]' : 'text-white/20 group-hover:text-white/40'} transition-colors`}>
                                {item.rank}
                            </div>

                            <div className="flex items-start gap-5">
                                <div className={`text-3xl p-3 rounded-xl flex-shrink-0 ${item.highlight ? 'bg-[#0F5F4B]/15' : 'bg-white/5'}`}>{item.badge}</div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-1">
                                        <span className={`font-gilroy-black text-xl ${item.highlight ? 'text-[#0F5F4B]' : 'text-white'}`}>
                                            {item.result}
                                        </span>
                                        {item.highlight && (
                                            <span className="bg-[#0F5F4B] text-[#F5FB52] text-xs font-gilroy-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                                🏆 Best Result
                                            </span>
                                        )}
                                    </div>
                                    <div className={`font-gilroy-medium text-sm mb-2 ${item.highlight ? 'text-[#0F5F4B]/70' : 'text-white/50'}`}>
                                        {item.event} · {item.year}
                                    </div>
                                    <p className={`font-gilroy-medium leading-relaxed text-sm ${item.highlight ? 'text-[#0F5F4B]/80' : 'text-white/70'}`}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Animated left accent bar */}
                            {item.highlight && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2/3 bg-[#0F5F4B] rounded-r-full" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
