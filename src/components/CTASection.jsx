import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
    const navigate = useNavigate();

    return (
        <section className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center py-24 px-8 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle, #0F5F4B 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }} />
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
                {/* Live indicator */}
                <div className="inline-flex items-center gap-2 bg-[#0F5F4B]/10 text-[#0F5F4B] px-4 py-2 rounded-full mb-10">
                    <span className="w-2 h-2 rounded-full bg-[#0F5F4B] animate-pulse" />
                    <span className="font-gilroy-bold text-sm tracking-wider uppercase">Build in Progress</span>
                </div>

                <h2 className="font-gilroy-black text-7xl text-[#0F5F4B] leading-tight mb-6">
                    What's Next
                </h2>
                <p className="font-gilroy-medium text-2xl text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
                    We're in the middle of building our most ambitious hydrogen ATV yet.
                    Every contribution, every follow, every conversation moves us forward.
                </p>
                {/* ← Update target competition in FILL_ME.md */}
                <p className="font-gilroy-bold text-[#0F5F4B] text-lg mb-16">
                    🏁 Target: SAEINDIA Baja 2025
                </p>

                {/* Action cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div
                        onClick={() => navigate('/sponsor')}
                        className="group cursor-pointer bg-[#0F5F4B] rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                        <div className="text-4xl mb-4">💸</div>
                        <h3 className="font-gilroy-bold text-2xl mb-2">Support Us</h3>
                        <p className="font-gilroy-medium text-white/80 mb-6">Fuel the build. Every rupee goes directly to vehicle development.</p>
                        <div className="inline-flex items-center gap-2 font-gilroy-bold text-[#F5FB52] group-hover:gap-4 transition-all duration-300">
                            Contribute <span>→</span>
                        </div>
                    </div>

                    <a
                        href="https://www.instagram.com/tarusamotorsport/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-[#F0F5F5] rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#0F5F4B]/20"
                    >
                        <div className="text-4xl mb-4">📸</div>
                        <h3 className="font-gilroy-bold text-2xl text-[#0F5F4B] mb-2">Follow the Build</h3>
                        <p className="font-gilroy-medium text-gray-600 mb-6">Real-time updates on Instagram. 1,174 followers and counting.</p>
                        <div className="inline-flex items-center gap-2 font-gilroy-bold text-[#0F5F4B] group-hover:gap-4 transition-all duration-300">
                            @tarusamotorsport <span>→</span>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/company/tarusamotorsport/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-[#F0F5F5] rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#0F5F4B]/20"
                    >
                        <div className="text-4xl mb-4">🤝</div>
                        <h3 className="font-gilroy-bold text-2xl text-[#0F5F4B] mb-2">Connect With Us</h3>
                        <p className="font-gilroy-medium text-gray-600 mb-6">For partnerships, sponsorship opportunities, and collaborations.</p>
                        <div className="inline-flex items-center gap-2 font-gilroy-bold text-[#0F5F4B] group-hover:gap-4 transition-all duration-300">
                            LinkedIn <span>→</span>
                        </div>
                    </a>
                </div>

                {/* Footer */}
                <div className="border-t border-[#0F5F4B]/10 pt-12">
                    <p className="font-gilroy-medium text-gray-400 text-sm mb-4">
                        © 2026 Tarusa Motorsports · School of Engineering, CUSAT
                    </p>
                    <div className="flex justify-center gap-8">
                        <a href="https://www.instagram.com/tarusamotorsport/" target="_blank" rel="noopener noreferrer" className="font-gilroy-medium text-gray-400 hover:text-[#0F5F4B] transition-colors text-sm">Instagram</a>
                        <a href="https://www.linkedin.com/company/tarusamotorsport/" target="_blank" rel="noopener noreferrer" className="font-gilroy-medium text-gray-400 hover:text-[#0F5F4B] transition-colors text-sm">LinkedIn</a>
                        <a href="mailto:tarusacusat@gmail.com" className="font-gilroy-medium text-gray-400 hover:text-[#0F5F4B] transition-colors text-sm">Email</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
