import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

// About page data — edit in FILL_ME.md
import aboutData from '../data/aboutData';

const StatCard = ({ value, label }) => (
    <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-[#0F5F4B]/10 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="font-gilroy-black text-5xl text-[#0F5F4B] mb-2 group-hover:scale-110 transition-transform duration-300">
            {value}
        </div>
        <div className="font-gilroy-medium text-gray-600 text-sm uppercase tracking-wider">{label}</div>
    </div>
);

const HydrogenStep = ({ number, title, description }) => (
    <div className="flex gap-6 items-start">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0F5F4B] text-white flex items-center justify-center font-gilroy-black text-xl shadow-md">
            {number}
        </div>
        <div>
            <h4 className="font-gilroy-bold text-lg text-[#0F5F4B] mb-1">{title}</h4>
            <p className="font-gilroy-medium text-gray-600 leading-relaxed">{description}</p>
        </div>
    </div>
);

const About = () => {
    const navigate = useNavigate();
    const handleSectionChange = () => navigate('/');

    return (
        <div className="min-h-screen bg-[#F0F5F5]">
            <Navbar currentSection={0} onSectionChange={handleSectionChange} />

            {/* Hero */}
            <div className="relative bg-white overflow-hidden border-b border-[#0F5F4B]/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F5F4B]/5 to-transparent" />
                <div className="container mx-auto px-8 pt-28 pb-20 relative z-10 max-w-5xl">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-[#0F5F4B]/60 hover:text-[#0F5F4B] transition-colors mb-8 font-gilroy-medium text-sm group"
                    >
                        <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </button>
                    <div className="inline-block bg-[#0F5F4B]/10 text-[#0F5F4B] px-4 py-1.5 rounded-full font-gilroy-bold text-sm mb-6 tracking-wider uppercase">
                        Est. 2017 · CUSAT
                    </div>
                    <h1 className="font-gilroy-black text-7xl text-[#0F5F4B] mb-6 leading-tight">
                        Who We Are
                    </h1>
                    <p className="font-gilroy-medium text-xl text-gray-600 leading-relaxed max-w-3xl">
                        {aboutData.missionStatement}
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="container mx-auto px-8 py-16 max-w-5xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                    {aboutData.stats.map((stat, i) => (
                        <StatCard key={i} value={stat.value} label={stat.label} />
                    ))}
                </div>

                {/* Team Story */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="font-gilroy-bold text-4xl text-[#0F5F4B] whitespace-nowrap">Our Story</h2>
                        <div className="h-px flex-1 bg-[#0F5F4B]/20" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {aboutData.story.map((paragraph, i) => (
                            <p key={i} className="font-gilroy-medium text-lg text-gray-700 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Why Hydrogen */}
                <div className="mb-24 bg-white rounded-3xl p-12 shadow-sm border border-[#0F5F4B]/10">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl">⚗️</span>
                        <h2 className="font-gilroy-bold text-4xl text-[#0F5F4B]">Why Hydrogen?</h2>
                    </div>
                    <p className="font-gilroy-medium text-gray-600 text-lg mb-10 leading-relaxed">
                        {aboutData.hydrogenIntro}
                    </p>
                    <div className="space-y-8">
                        {aboutData.hydrogenSteps.map((step, i) => (
                            <HydrogenStep key={i} number={i + 1} title={step.title} description={step.description} />
                        ))}
                    </div>
                    <div className="mt-10 p-6 bg-[#0F5F4B]/5 rounded-2xl border border-[#0F5F4B]/20">
                        <p className="font-gilroy-bold text-[#0F5F4B] text-lg">
                            🏆 {aboutData.hydrogenAchievement}
                        </p>
                    </div>
                </div>

                {/* What We Do */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="font-gilroy-bold text-4xl text-[#0F5F4B] whitespace-nowrap">What We Do</h2>
                        <div className="h-px flex-1 bg-[#0F5F4B]/20" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {aboutData.activities.map((activity, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[#0F5F4B]/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="text-3xl mb-4">{activity.icon}</div>
                                <h3 className="font-gilroy-bold text-lg text-[#0F5F4B] mb-2">{activity.title}</h3>
                                <p className="font-gilroy-medium text-gray-600 leading-relaxed">{activity.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-[#0F5F4B] rounded-3xl p-12 text-center text-white">
                    <h2 className="font-gilroy-black text-4xl mb-4">Want to be part of the journey?</h2>
                    <p className="font-gilroy-medium text-white/80 text-lg mb-8">Support our mission. Follow our build. Join the community.</p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <button
                            onClick={() => navigate('/sponsor')}
                            className="bg-[#F5FB52] text-[#0F5F4B] px-8 py-4 rounded-xl font-gilroy-bold hover:bg-yellow-300 transition-colors duration-300"
                        >
                            Sponsor Us
                        </button>
                        <a
                            href="https://www.instagram.com/tarusamotorsport/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-gilroy-bold hover:bg-white/20 transition-colors duration-300"
                        >
                            Follow on Instagram
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center text-gray-400 font-gilroy-medium py-8 border-t border-[#0F5F4B]/10 mt-8">
                <p>© 2026 Tarusa Motorsports · School of Engineering, CUSAT</p>
                <div className="flex justify-center gap-6 mt-4">
                    <a href="https://www.instagram.com/tarusamotorsport/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0F5F4B] transition-colors">Instagram</a>
                    <a href="https://www.linkedin.com/company/tarusamotorsport/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0F5F4B] transition-colors">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
};

export default About;
