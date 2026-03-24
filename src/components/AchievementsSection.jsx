import React from 'react';

// Achievements data — update in data/achievements.csv
const achievements = [
    {
        year: `2026`,
        event: `SAEINDIA hBaja`,
        result: `AIR 1 — 3D Print Sync · AIR 3 — Cost Event`,
        rank: `AIR 1`,
        highlight: true,
        badge: "🏅",
        description: `Secured AIR 1 in the 3D Print Sync Event and AIR 3 in the Cost Event — showcasing our strengths in advanced manufacturing and cost-effective vehicle development.`,
    },
    {
        year: `2025`,
        event: `SAEINDIA hBaja`,
        result: `AIR 7 Overall · AIR 1 — Cost & Statics Events`,
        rank: `AIR 7`,
        highlight: false,
        badge: "⭐",
        description: `Competed with a hydrogen–CNG–petrol bi-fuel (HCNG blend) system. Earned AIR 7 overall and AIR 1 in both the Cost Event and the Statics Event.`,
    },
    {
        year: `2024`,
        event: `SAEINDIA hBaja`,
        result: `All India Rank 1`,
        rank: `AIR 1`,
        highlight: false,
        badge: "🏆",
        description: `Entered the inaugural hydrogen ATV category and secured the top position nationally with a CNG & petrol bi-fuel system — a first for our university.`,
    },
    {
        year: `2022`,
        event: `SAEINDIA eBaja (Virtual)`,
        result: `Virtual Participation`,
        rank: `eBaja`,
        highlight: false,
        badge: "⚡",
        description: `Strategic comeback after COVID-19 pause. Pivoted from IC to electric powertrain.`,
    },
    {
        year: `2017–18`,
        event: `SAEINDIA Baja / FMEA`,
        result: `Debut Season`,
        rank: `Debut`,
        highlight: false,
        badge: "🚀",
        description: `Tarusa's first competition season. Made our presence felt in the student motorsport scene.`,
    },
];

// Stat counter item — compact version
const StatItem = ({ value, label }) => (
    <div className="text-center">
        <div className="font-gilroy-black text-3xl text-[#F5FB52] mb-0.5">{value}</div>
        <div className="font-gilroy-medium text-white/60 text-xs uppercase tracking-widest">{label}</div>
    </div>
);

const AchievementsSection = () => {
    return (
        <section className="relative h-full w-full bg-[#050f0c] flex flex-col items-center justify-center py-4 px-6 overflow-hidden">
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
                {/* Section Header — compact */}
                <div className="text-center mb-4">
                    <div className="inline-block bg-[#0F5F4B]/20 border border-[#0F5F4B]/40 text-[#F5FB52] px-3 py-1 rounded-full font-gilroy-bold text-xs mb-2 tracking-[0.2em] uppercase">
                        Competition Record
                    </div>
                    <h2 className="font-gilroy-black text-4xl text-white mb-1 leading-tight">
                        Our Achievements
                    </h2>
                    <p className="font-gilroy-medium text-white/50 text-sm max-w-xl mx-auto">
                        From debut in 2017 to multiple national ranks — written in dust, steel, and hydrogen.
                    </p>
                </div>

                {/* Stats Bar — compact */}
                <div className="grid grid-cols-3 gap-4 mb-4 border border-white/10 rounded-xl py-4 px-4 bg-white/[0.03] backdrop-blur-sm">
                    <StatItem value="5+" label="Competitions" />
                    <StatItem value="3" label="National Rank 1s" />
                    <StatItem value="8+" label="Years Active" />
                </div>

                {/* Achievement cards — tighter */}
                <div className="space-y-2">
                    {achievements.map((item, i) => (
                        <div
                            key={i}
                            className={`relative rounded-xl p-4 border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl group ${item.highlight
                                ? 'bg-[#F5FB52] border-[#F5FB52] shadow-[0_0_30px_rgba(245,251,82,0.15)]'
                                : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.07] hover:border-white/20'
                                }`}
                        >
                            {/* Rank badge — top right */}
                            <div className={`absolute top-3 right-3 font-gilroy-black text-xl ${item.highlight ? 'text-[#0F5F4B]' : 'text-white/20 group-hover:text-white/40'} transition-colors`}>
                                {item.rank}
                            </div>

                            <div className="flex items-start gap-3">
                                <div className={`text-2xl p-2 rounded-lg flex-shrink-0 ${item.highlight ? 'bg-[#0F5F4B]/15' : 'bg-white/5'}`}>{item.badge}</div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                                        <span className={`font-gilroy-black text-base ${item.highlight ? 'text-[#0F5F4B]' : 'text-white'}`}>
                                            {item.result}
                                        </span>
                                        {item.highlight && (
                                            <span className="bg-[#0F5F4B] text-[#F5FB52] text-xs font-gilroy-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                                🏆 Best Result
                                            </span>
                                        )}
                                    </div>
                                    <div className={`font-gilroy-medium text-xs mb-1 ${item.highlight ? 'text-[#0F5F4B]/70' : 'text-white/50'}`}>
                                        {item.event} · {item.year}
                                    </div>
                                    <p className={`font-gilroy-medium leading-relaxed text-xs ${item.highlight ? 'text-[#0F5F4B]/80' : 'text-white/70'}`}>
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
