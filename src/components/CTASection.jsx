import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Progress bar component inspired by Yeti Racing's Support/Funding section
const FundingProgress = ({ percentage = 43 }) => (
    <div className="w-full">
        <div className="flex justify-between items-center mb-2">
            <span className="font-gilroy-bold text-white text-sm">Build Fund Progress</span>
            <span className="font-gilroy-black text-[#F5FB52] text-sm">{percentage}%</span>
        </div>
        <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
            <div
                className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#0F5F4B] to-[#F5FB52] transition-all duration-1000"
                style={{ width: `${percentage}%` }}
            />
            {/* Animated shimmer */}
            <div
                className="absolute top-0 h-full w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-shimmer"
                style={{ left: `calc(${percentage}% - 2rem)` }}
            />
        </div>
    </div>
);

const CTASection = () => {
    const navigate = useNavigate();
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="relative min-h-screen w-full overflow-hidden flex flex-col">

            {/* ── TOP HALF: Support Us (dark, like Yeti Racing) ─────────────── */}
            <div className="relative flex-1 bg-[#050f0c] flex items-center justify-center px-8 py-16 overflow-hidden">

                {/* Background dot texture */}
                <div className="absolute inset-0 opacity-[0.04]">
                    <div className="w-full h-full" style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }} />
                </div>
                {/* Glow */}
                <div className="absolute left-0 top-1/2 w-80 h-80 bg-[#0F5F4B] rounded-full blur-[140px] opacity-15 pointer-events-none" />

                <div className="relative z-10 w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    {/* Left — Support card (Yeti style) */}
                    <div className="border border-white/10 rounded-3xl p-8 bg-white/[0.03] backdrop-blur-sm">
                        <h2 className="font-gilroy-black text-5xl text-white mb-2 leading-tight">
                            Support Us
                        </h2>
                        <div className="w-16 h-1 bg-[#F5FB52] rounded-full mb-6" />
                        <h3 className="font-gilroy-bold text-white text-xl mb-3">Join the Drive</h3>
                        <p className="font-gilroy-medium text-white/60 mb-8 leading-relaxed">
                            Help us bring our hydrogen ATV to life. Every contribution goes directly
                            into vehicle development — welds, wheels, and wins.
                        </p>

                        {/* Progress bar */}
                        <FundingProgress percentage={43} />

                        {/* CTA Button */}
                        <button
                            onClick={() => navigate('/sponsor')}
                            className="mt-8 w-full py-4 rounded-xl bg-[#F5FB52] text-[#0F5F4B] font-gilroy-black text-lg hover:shadow-[0_8px_32px_rgba(245,251,82,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
                        >
                            Back our team
                            <span className="group-hover:translate-x-1 transition-transform duration-300 text-xl">→</span>
                        </button>
                    </div>

                    {/* Right — Quick facts */}
                    <div className="space-y-6">
                        {/* Live status */}
                        <div className="inline-flex items-center gap-2 bg-[#0F5F4B]/20 border border-[#0F5F4B]/40 text-white px-4 py-2 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-[#F5FB52] animate-pulse" />
                            <span className="font-gilroy-bold text-sm tracking-wider uppercase">Build in Progress</span>
                        </div>

                        <div>
                            <h2 className="font-gilroy-black text-5xl text-white leading-tight mb-4">
                                What's Next
                            </h2>
                            <p className="font-gilroy-medium text-white/60 leading-relaxed">
                                We're in the middle of building our most ambitious hydrogen ATV yet.
                                Every contribution, every follow, every conversation moves us forward.
                            </p>
                        </div>

                        <p className="font-gilroy-bold text-[#F5FB52] text-base flex items-center gap-2">
                            🏁 Target: SAEINDIA Baja 2025
                        </p>

                        {/* Build status */}
                        <div className="space-y-3">
                            {[
                                { label: "Chassis Design", status: "complete" },
                                { label: "Suspension", status: "complete" },
                                { label: "Hydrogen Powertrain", status: "in-progress" },
                                { label: "Electrics & Controls", status: "in-progress" },
                                { label: "Bodywork & Livery", status: "upcoming" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.status === 'complete' ? 'bg-[#0F5F4B]' :
                                            item.status === 'in-progress' ? 'bg-[#F5FB52] animate-pulse' :
                                                'bg-white/20'
                                        }`} />
                                    <span className={`font-gilroy-medium text-sm ${item.status === 'complete' ? 'text-white/70' :
                                            item.status === 'in-progress' ? 'text-[#F5FB52] font-gilroy-bold' :
                                                'text-white/30'
                                        }`}>
                                        {item.label}
                                    </span>
                                    <span className={`ml-auto text-xs font-gilroy-medium px-2 py-0.5 rounded-full ${item.status === 'complete' ? 'bg-[#0F5F4B]/20 text-[#0F5F4B]' :
                                            item.status === 'in-progress' ? 'bg-[#F5FB52]/10 text-[#F5FB52]' :
                                                'bg-white/5 text-white/30'
                                        }`}>
                                        {item.status === 'complete' ? '✓ Done' :
                                            item.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── BOTTOM HALF: Connect & Footer ─────────────────────────────── */}
            <div className="relative bg-white px-8 py-12 overflow-hidden">
                {/* Subtle dot pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="w-full h-full" style={{
                        backgroundImage: 'radial-gradient(circle, #0F5F4B 1px, transparent 1px)',
                        backgroundSize: '32px 32px'
                    }} />
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto">
                    {/* Action cards row */}
                    <div className="grid md:grid-cols-3 gap-5 mb-12">
                        {[
                            {
                                icon: '💸',
                                title: 'Sponsor Us',
                                desc: 'Fuel the build. Every rupee goes directly to vehicle development.',
                                cta: 'Become a Sponsor',
                                onClick: () => navigate('/sponsor'),
                                accent: true
                            },
                            {
                                icon: '📸',
                                title: 'Follow the Build',
                                desc: 'Real-time updates on Instagram. 1,174 followers and counting.',
                                cta: '@tarusamotorsport',
                                href: 'https://www.instagram.com/tarusamotorsport/',
                            },
                            {
                                icon: '🤝',
                                title: 'Connect With Us',
                                desc: 'For partnerships, sponsorship opportunities, and collaborations.',
                                cta: 'LinkedIn',
                                href: 'https://www.linkedin.com/company/tarusamotorsport/',
                            },
                        ].map((card, i) => {
                            const Wrapper = card.href ? 'a' : 'div';
                            const wrapperProps = card.href
                                ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' }
                                : { onClick: card.onClick };

                            return (
                                <Wrapper
                                    key={i}
                                    {...wrapperProps}
                                    onMouseEnter={() => setHoveredCard(i)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    className={`group block rounded-2xl p-6 cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl ${card.accent
                                            ? 'bg-[#0F5F4B] text-white'
                                            : 'bg-[#F0F5F5] border-2 border-transparent hover:border-[#0F5F4B]/20'
                                        }`}
                                >
                                    <div className="text-3xl mb-3">{card.icon}</div>
                                    <h3 className={`font-gilroy-bold text-xl mb-2 ${card.accent ? 'text-white' : 'text-[#0F5F4B]'}`}>
                                        {card.title}
                                    </h3>
                                    <p className={`font-gilroy-medium text-sm mb-5 leading-relaxed ${card.accent ? 'text-white/80' : 'text-gray-500'}`}>
                                        {card.desc}
                                    </p>
                                    <div className={`inline-flex items-center gap-2 font-gilroy-bold text-sm group-hover:gap-4 transition-all duration-300 ${card.accent ? 'text-[#F5FB52]' : 'text-[#0F5F4B]'
                                        }`}>
                                        {card.cta} <span>→</span>
                                    </div>
                                </Wrapper>
                            );
                        })}
                    </div>

                    {/* Footer */}
                    <div className="border-t border-[#0F5F4B]/10 pt-8 flex flex-col md:flex-row md:justify-between items-center gap-4">
                        <p className="font-gilroy-medium text-gray-400 text-sm">
                            © 2026 Tarusa Motorsports · School of Engineering, CUSAT
                        </p>
                        <div className="flex gap-6">
                            <a href="https://www.instagram.com/tarusamotorsport/" target="_blank" rel="noopener noreferrer" className="font-gilroy-medium text-gray-400 hover:text-[#0F5F4B] transition-colors text-sm">Instagram</a>
                            <a href="https://www.linkedin.com/company/tarusamotorsport/" target="_blank" rel="noopener noreferrer" className="font-gilroy-medium text-gray-400 hover:text-[#0F5F4B] transition-colors text-sm">LinkedIn</a>
                            <a href="mailto:tarusacusat@gmail.com" className="font-gilroy-medium text-gray-400 hover:text-[#0F5F4B] transition-colors text-sm">Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
