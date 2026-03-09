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
    },
    {
        year: "2022",
        event: "SAEINDIA eBaja (Virtual)",
        result: "Virtual Participation", // ← Update in FILL_ME.md
        highlight: false,
        description: "Strategic comeback after COVID-19 pause. Pivoted from IC to electric powertrain.",
        badge: "⚡",
    },
    {
        year: "2017–18",
        event: "SAEINDIA Baja / FMEA",
        result: "Debut Season",        // ← Update in FILL_ME.md — add actual rank if known
        highlight: false,
        description: "Tarusa's first competition season. The team made its presence felt in the student motorsport scene.",
        badge: "🚀",
    },
];

const AchievementsSection = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#0F5F4B] flex flex-col items-center justify-center py-24 px-8 overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full font-gilroy-bold text-sm mb-6 tracking-wider uppercase">
                        Competition Record
                    </div>
                    <h2 className="font-gilroy-black text-6xl text-white mb-4">Achievements</h2>
                    <p className="font-gilroy-medium text-white/70 text-xl max-w-xl mx-auto">
                        From our debut in 2017 to AIR 1 in 2024 — a record written in dust, steel, and hydrogen.
                    </p>
                </div>

                {/* Achievement cards */}
                <div className="space-y-6">
                    {achievements.map((item, i) => (
                        <div
                            key={i}
                            className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${item.highlight
                                    ? 'bg-[#F5FB52] border-[#F5FB52]'
                                    : 'bg-white/10 border-white/20 hover:bg-white/15'
                                }`}
                        >
                            <div className="flex items-start gap-6">
                                <div className="text-4xl">{item.badge}</div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-4 mb-2">
                                        <span className={`font-gilroy-black text-2xl ${item.highlight ? 'text-[#0F5F4B]' : 'text-white'}`}>
                                            {item.result}
                                        </span>
                                        {item.highlight && (
                                            <span className="bg-[#0F5F4B] text-white text-xs font-gilroy-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                                Best Result
                                            </span>
                                        )}
                                    </div>
                                    <div className={`font-gilroy-medium text-sm mb-3 ${item.highlight ? 'text-[#0F5F4B]/70' : 'text-white/60'}`}>
                                        {item.event} · {item.year}
                                    </div>
                                    <p className={`font-gilroy-medium leading-relaxed ${item.highlight ? 'text-[#0F5F4B]/80' : 'text-white/80'}`}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <p className="text-center text-white/40 font-gilroy-medium text-sm mt-8">
                    * Update competition results in FILL_ME.md
                </p>
            </div>
        </section>
    );
};

export default AchievementsSection;
