import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Progress bar component
const FundingProgress = ({ percentage = 43 }) => (
    <div className="w-full">
        <div className="flex justify-between items-center mb-1.5">
            <span className="font-gilroy-bold text-white text-xs">Build Fund Progress</span>
            <span className="font-gilroy-black text-[#F5FB52] text-xs">{percentage}%</span>
        </div>
        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
            <div
                className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#0F5F4B] to-[#F5FB52] transition-all duration-1000"
                style={{ width: `${percentage}%` }}
            />
            <div
                className="absolute top-0 h-full w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-shimmer"
                style={{ left: `calc(${percentage}% - 2rem)` }}
            />
        </div>
    </div>
);

const CTASection = () => {
    const navigate = useNavigate();

    const cards = [
        {
            icon: '💸',
            title: 'Support Us',
            desc: 'Help us bring our hydrogen ATV to life. Every contribution goes directly into vehicle development.',
            extra: <FundingProgress percentage={43} />,
            cta: 'Back our team →',
            onClick: () => navigate('/sponsor'),
            accent: true,
        },
        {
            icon: '🏎️',
            title: 'Sponsor Us',
            desc: 'Fuel the build. Every rupee goes directly to vehicle development.',
            cta: 'Become a Sponsor →',
            onClick: () => navigate('/sponsor'),
        },
        {
            icon: '📸',
            title: 'Follow the Build',
            desc: 'Real-time updates on Instagram. 1,174 followers and counting.',
            cta: '@tarusamotorsport →',
            href: 'https://www.instagram.com/tarusamotorsport/',
        },
        {
            icon: '🤝',
            title: 'Connect With Us',
            desc: 'For partnerships, sponsorship opportunities, and collaborations.',
            cta: 'LinkedIn →',
            href: 'https://www.linkedin.com/company/tarusamotorsport/',
        },
    ];

    return (
        <section className="relative h-full w-full bg-white flex flex-col overflow-hidden">
            {/* Subtle dot pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle, #0F5F4B 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }} />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between px-6 py-6 max-w-6xl mx-auto w-full">

                {/* Header */}
                <div className="mb-4">
                    <p className="font-gilroy-bold text-[#0F5F4B] text-xs uppercase tracking-widest mb-1 opacity-70">Get Involved</p>
                    <h2 className="font-gilroy-black text-4xl text-[#0F5F4B] leading-tight">What's Next</h2>
                </div>

                {/* 4-card grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-1 items-stretch">
                    {cards.map((card, i) => {
                        const Wrapper = card.href ? 'a' : 'div';
                        const wrapperProps = card.href
                            ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' }
                            : { onClick: card.onClick };

                        return (
                            <Wrapper
                                key={i}
                                {...wrapperProps}
                                className={`group flex flex-col rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${card.accent
                                        ? 'bg-[#0F5F4B] text-white'
                                        : 'bg-[#F0F5F5] border-2 border-transparent hover:border-[#0F5F4B]/20'
                                    }`}
                            >
                                <div className="text-2xl mb-3">{card.icon}</div>
                                <h3 className={`font-gilroy-bold text-lg mb-1.5 ${card.accent ? 'text-white' : 'text-[#0F5F4B]'}`}>
                                    {card.title}
                                </h3>
                                <p className={`font-gilroy-medium text-xs leading-relaxed mb-3 flex-1 ${card.accent ? 'text-white/80' : 'text-gray-500'}`}>
                                    {card.desc}
                                </p>
                                {card.extra && <div className="mb-3">{card.extra}</div>}
                                <div className={`font-gilroy-bold text-sm group-hover:translate-x-1 transition-transform duration-300 ${card.accent ? 'text-[#F5FB52]' : 'text-[#0F5F4B]'}`}>
                                    {card.cta}
                                </div>
                            </Wrapper>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="border-t border-[#0F5F4B]/10 pt-4 mt-4 flex flex-col md:flex-row md:justify-between items-center gap-2">
                    <p className="font-gilroy-medium text-gray-400 text-xs">
                        © 2026 Tarusa Motorsports · School of Engineering, CUSAT
                    </p>
                    <div className="flex gap-5">
                        <a href="https://www.instagram.com/tarusamotorsport/" target="_blank" rel="noopener noreferrer" className="font-gilroy-medium text-gray-400 hover:text-[#0F5F4B] transition-colors text-xs">Instagram</a>
                        <a href="https://www.linkedin.com/company/tarusamotorsport/" target="_blank" rel="noopener noreferrer" className="font-gilroy-medium text-gray-400 hover:text-[#0F5F4B] transition-colors text-xs">LinkedIn</a>
                        <a href="mailto:tarusacusat@gmail.com" className="font-gilroy-medium text-gray-400 hover:text-[#0F5F4B] transition-colors text-xs">Email</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
