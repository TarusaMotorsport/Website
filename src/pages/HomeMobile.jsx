import React, { useState, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { useProgress } from '@react-three/drei';
import CarModel from '../components/CarModel';
import TarusaLogo from '../assets/tarusa_logo.png';
import bgBlur from '../assets/bg_blur.webp';
import firstJourney from '../assets/journey_pics/first_new.webp';
import polaroidImage from '../assets/journey_pics/polaroid.webp';
import polaroidImage2024 from '../assets/journey_pics/polaroid_2024.webp';

// ─── Mini 3D Loader ──────────────────────────────────────────────────────────
const ModelLoader = () => {
    const { progress } = useProgress();
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-3 border-[#0F5F4B] border-t-transparent rounded-full animate-spin" />
        </div>
    );
};

// ─── Mobile Navbar ────────────────────────────────────────────────────────────
const MobileNav = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#F0F5F5]/90 backdrop-blur-md px-5 py-3 flex justify-between items-center border-b border-[#0F5F4B]/10">
            <img src={TarusaLogo} alt="Tarusa" className="h-9 object-contain" />
            <button onClick={() => setOpen(!open)} className="w-9 h-9 flex flex-col justify-center gap-1.5 border-none bg-transparent p-0">
                <span className={`block h-0.5 bg-[#0F5F4B] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} style={{ width: '24px' }} />
                <span className={`block h-0.5 bg-[#0F5F4B] transition-all duration-300 ${open ? 'opacity-0' : ''}`} style={{ width: '24px' }} />
                <span className={`block h-0.5 bg-[#0F5F4B] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} style={{ width: '24px' }} />
            </button>
            {open && (
                <div className="absolute top-full left-0 w-full bg-[#F0F5F5] border-t border-[#0F5F4B]/10 py-4 px-6 flex flex-col gap-4 shadow-lg">
                    {['About', 'Team', 'Media'].map(p => (
                        <button key={p} onClick={() => { navigate('/' + p.toLowerCase()); setOpen(false); }}
                            className="text-left font-gilroy-semibold text-[#0F5F4B] text-lg border-none bg-transparent p-0">
                            {p}
                        </button>
                    ))}
                    <button onClick={() => { navigate('/sponsor'); setOpen(false); }}
                        className="mt-2 w-full py-3 rounded-full bg-[#F5FB52] text-[#0F5F4B] font-gilroy-black text-base">
                        Sponsor Us ↗
                    </button>
                </div>
            )}
        </nav>
    );
};

// ─── Hero Section ─────────────────────────────────────────────────────────────
const MobileHero = () => {
    const navigate = useNavigate();
    return (
        <section className="relative min-h-screen w-full overflow-hidden pt-16 flex flex-col">
            {/* Background */}
            <div className="absolute inset-0">
                <img src={bgBlur} alt="" className="w-full h-full object-cover opacity-60" />
            </div>

            {/* Big text behind car */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-10">
                <h1 className="font-gilroy-black text-[#0F5F4B] leading-none" style={{ fontSize: 'clamp(52px,18vw,110px)' }}>TARUSA</h1>
                <h2 className="font-gilroy-black text-[#0F5F4B] leading-none" style={{ fontSize: 'clamp(26px,9vw,55px)' }}>MOTORSPORT</h2>
            </div>

            {/* 3D Car */}
            <div className="relative z-20 w-full" style={{ height: '55vw', minHeight: '220px', maxHeight: '380px' }}>
                <Suspense fallback={<ModelLoader />}>
                    <Canvas camera={{ position: [0, 6, 12], fov: 38 }} style={{ background: 'transparent' }}>
                        <ambientLight intensity={1} />
                        <directionalLight position={[5, 5, 5]} intensity={5} />
                        <directionalLight position={[9, 1, 5]} intensity={3} />
                        <CarModel position={[-0.3, -0.5, 0]} rotation={[0, 0.7, 0]} scale={1.2} scrollProgress={0} />
                    </Canvas>
                </Suspense>
            </div>

            {/* Tagline + CTA */}
            <div className="relative z-20 px-5 pb-10 flex flex-col items-center gap-4 mt-auto">
                <p className="font-['Rough-Splash'] text-[#0F5F4B] text-lg tracking-widest text-center">
                    official off-road racing team of CUSAT
                </p>
                {/* Achievement pills */}
                <div className="flex flex-wrap justify-center gap-2 mt-1">
                    {[
                        { label: 'AIR 1 · hBaja 2024' },
                        { label: 'AIR 1 · Design 2024' },
                        { label: 'Debut · Baja 2017' },
                    ].map((a, i) => (
                        <span key={i} className="bg-white/80 border border-[#0F5F4B]/30 text-[#0F5F4B] font-gilroy-bold text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                            🏆 {a.label}
                        </span>
                    ))}
                </div>
                <button onClick={() => navigate('/sponsor')}
                    className="mt-2 px-8 py-3 rounded-full bg-[#0F5F4B] text-[#F5FB52] font-gilroy-black text-base">
                    Support the Build →
                </button>
            </div>
        </section>
    );
};

// ─── Stats Bar ────────────────────────────────────────────────────────────────
const MobileStats = () => (
    <section className="bg-[#0F5F4B] py-8 px-5">
        <div className="grid grid-cols-3 gap-4 text-center">
            {[
                { val: 'AIR 1', sub: 'hBaja 2024' },
                { val: '8+', sub: 'Years Active' },
                { val: '3+', sub: 'Competitions' },
            ].map((s, i) => (
                <div key={i}>
                    <div className="font-gilroy-black text-[#F5FB52] text-3xl">{s.val}</div>
                    <div className="font-gilroy-medium text-white/70 text-xs uppercase tracking-wider mt-1">{s.sub}</div>
                </div>
            ))}
        </div>
    </section>
);

// ─── Timeline Card ────────────────────────────────────────────────────────────
const TimelineCard = ({ year, tag, title, body, image, imageAlt, accent = false, reverse = false }) => (
    <section className={`py-12 px-5 ${accent ? 'bg-[#050f0c]' : 'bg-[#071410]'}`}>
        <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle,white 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
                <span className="font-gilroy-black text-[#0F5F4B] text-6xl leading-none opacity-60">{year}</span>
                <span className="border border-white/20 text-[#F5FB52] px-3 py-1 rounded-full font-gilroy-bold text-xs uppercase tracking-widest">{tag}</span>
            </div>
            {image && (
                <div className="w-full mb-5 rounded-2xl overflow-hidden shadow-2xl">
                    <img src={image} alt={imageAlt} className="w-full object-cover" />
                </div>
            )}
            <p className="font-gilroy-medium text-lg leading-relaxed text-white/80 mb-3">{title}</p>
            <p className="font-gilroy-medium text-sm leading-relaxed text-white/50">{body}</p>
        </div>
    </section>
);

// ─── Achievements ─────────────────────────────────────────────────────────────
const MobileAchievements = () => (
    <section className="bg-[#050f0c] py-10 px-5">
        <div className="text-center mb-6">
            <span className="bg-[#0F5F4B]/20 border border-[#0F5F4B]/40 text-[#F5FB52] px-3 py-1 rounded-full font-gilroy-bold text-xs uppercase tracking-widest">Competition Record</span>
            <h2 className="font-gilroy-black text-3xl text-white mt-3 mb-1">Our Achievements</h2>
            <p className="font-gilroy-medium text-white/50 text-sm">From debut in 2017 to AIR 1 in 2024.</p>
        </div>
        <div className="space-y-3">
            {[
                { badge: '🏆', result: 'All India Rank 1', event: 'SAEINDIA hBaja', year: '2024', desc: 'Entered the inaugural hydrogen ATV category and secured #1 nationally.', highlight: true },
                { badge: '⚡', result: 'Virtual Participation', event: 'SAEINDIA eBaja', year: '2022', desc: 'Strategic comeback after COVID-19 pause. Pivoted from IC to electric powertrain.' },
                { badge: '🚀', result: 'Debut Season', event: 'SAEINDIA Baja / FMEA', year: '2017–18', desc: 'Tarusa\'s first competition season — made our presence felt in student motorsport.' },
            ].map((a, i) => (
                <div key={i} className={`relative rounded-xl p-4 border ${a.highlight ? 'bg-[#F5FB52] border-[#F5FB52]' : 'bg-white/[0.04] border-white/10'}`}>
                    <div className={`absolute top-3 right-3 font-gilroy-black text-xl ${a.highlight ? 'text-[#0F5F4B]' : 'text-white/20'}`}>
                        {a.highlight ? 'AIR 1' : ''}
                    </div>
                    <div className="flex gap-3 items-start">
                        <span className={`text-2xl p-2 rounded-lg ${a.highlight ? 'bg-[#0F5F4B]/15' : 'bg-white/5'}`}>{a.badge}</span>
                        <div>
                            <div className="flex flex-wrap gap-1 items-center mb-0.5">
                                <span className={`font-gilroy-black text-base ${a.highlight ? 'text-[#0F5F4B]' : 'text-white'}`}>{a.result}</span>
                                {a.highlight && <span className="bg-[#0F5F4B] text-[#F5FB52] text-xs font-gilroy-bold px-2 py-0.5 rounded-full">🏆 Best</span>}
                            </div>
                            <div className={`font-gilroy-medium text-xs mb-1 ${a.highlight ? 'text-[#0F5F4B]/70' : 'text-white/50'}`}>{a.event} · {a.year}</div>
                            <p className={`font-gilroy-medium text-xs leading-relaxed ${a.highlight ? 'text-[#0F5F4B]/80' : 'text-white/70'}`}>{a.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

// ─── CTA / Support ────────────────────────────────────────────────────────────
const MobileCTA = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-white py-10 px-5">
            <p className="font-gilroy-bold text-[#0F5F4B] text-xs uppercase tracking-widest mb-1 opacity-70">Get Involved</p>
            <h2 className="font-gilroy-black text-3xl text-[#0F5F4B] mb-6">What's Next</h2>
            <div className="space-y-3">
                {/* Support Us — accent card */}
                <div className="rounded-2xl p-5 bg-[#0F5F4B] text-white">
                    <div className="text-2xl mb-2">💸</div>
                    <h3 className="font-gilroy-bold text-lg mb-1 text-white">Support Us</h3>
                    <p className="font-gilroy-medium text-white/70 text-xs mb-3 leading-relaxed">Help us bring our hydrogen ATV to life. Every contribution goes straight to vehicle development.</p>
                    <div className="mb-3">
                        <div className="flex justify-between text-xs mb-1">
                            <span className="font-gilroy-bold text-white">Build Fund Progress</span>
                            <span className="font-gilroy-black text-[#F5FB52]">43%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[43%] rounded-full bg-gradient-to-r from-[#0F5F4B] to-[#F5FB52]" />
                        </div>
                    </div>
                    <button onClick={() => navigate('/sponsor')}
                        className="w-full py-3 rounded-xl bg-[#F5FB52] text-[#0F5F4B] font-gilroy-black text-sm">
                        Back our team →
                    </button>
                </div>
                {/* Other cards */}
                {[
                    { icon: '🏎️', title: 'Sponsor Us', desc: 'Fuel the build. Every rupee goes directly to vehicle development.', cta: 'Become a Sponsor', action: () => navigate('/sponsor') },
                    { icon: '📸', title: 'Follow the Build', desc: 'Real-time updates on Instagram. 1,174 followers and counting.', cta: '@tarusamotorsport', href: 'https://www.instagram.com/tarusamotorsport/' },
                    { icon: '🤝', title: 'Connect With Us', desc: 'For partnerships, sponsorship opportunities, and collaborations.', cta: 'LinkedIn', href: 'https://www.linkedin.com/company/tarusamotorsport/' },
                ].map((c, i) => {
                    const El = c.href ? 'a' : 'div';
                    const props = c.href ? { href: c.href, target: '_blank', rel: 'noopener noreferrer' } : { onClick: c.action };
                    return (
                        <El key={i} {...props} className="block rounded-2xl p-5 bg-[#F0F5F5] border-2 border-transparent hover:border-[#0F5F4B]/20 transition-all">
                            <div className="text-2xl mb-2">{c.icon}</div>
                            <h3 className="font-gilroy-bold text-base text-[#0F5F4B] mb-1">{c.title}</h3>
                            <p className="font-gilroy-medium text-xs text-gray-500 mb-3 leading-relaxed">{c.desc}</p>
                            <span className="font-gilroy-bold text-sm text-[#0F5F4B]">{c.cta} →</span>
                        </El>
                    );
                })}
            </div>
            {/* Footer */}
            <div className="mt-8 pt-5 border-t border-[#0F5F4B]/10">
                <p className="font-gilroy-medium text-gray-400 text-xs text-center mb-3">© 2026 Tarusa Motorsports · CUSAT</p>
                <div className="flex justify-center gap-6">
                    {[
                        { label: 'Instagram', href: 'https://www.instagram.com/tarusamotorsport/' },
                        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/tarusamotorsport/' },
                        { label: 'Email', href: 'mailto:tarusacusat@gmail.com' },
                    ].map(l => (
                        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                            className="font-gilroy-medium text-gray-400 hover:text-[#0F5F4B] transition-colors text-xs">
                            {l.label}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ─── Main Mobile Home Page ────────────────────────────────────────────────────
const HomeMobile = () => {
    return (
        <div className="bg-[#F0F5F5] min-h-screen w-full overflow-x-hidden">
            <MobileNav />
            <MobileHero />
            <MobileStats />

            {/* Timeline */}
            <TimelineCard
                year="2017"
                tag="The Beginning"
                image={firstJourney}
                imageAlt="Tarusa 2017"
                title="Our journey began in 2017–18, when we jumped into student motorsports through SAE India Baja and FMEA."
                body="Like many others, we had to hit pause during COVID-19, especially as active members graduated and the team went quiet for a while."
                accent
            />
            <TimelineCard
                year="2022"
                tag="The Comeback"
                image={polaroidImage}
                imageAlt="Tarusa 2022"
                title="In 2022 we made a strategic comeback — shifting from mBaja (IC) to eBaja (electric), embracing cleaner mobility."
                body="Even though that year's competition was held online, we treated it as a launchpad — rebuilding our team with fresh faces and renewed focus."
            />
            <TimelineCard
                year="2024"
                tag="🏆 National Champions"
                image={polaroidImage2024}
                imageAlt="Tarusa 2024"
                title="2024 was a milestone year. We entered the newly introduced hBaja category and made history — All India Rank 1."
                body="Our vehicle ran on a bi-fuel system (CNG & petrol), marking a first not just for us, but for the entire university."
                accent
            />
            <TimelineCard
                year="2025"
                tag="Currently Building"
                title="2025 marks our most ambitious chapter yet — a purpose-built hydrogen ATV engineered from the ground up targeting SAEINDIA Baja 2025."
                body="Every weld, every component, every test brings us closer to the start line. The build is real. The target is national glory."
            />

            <MobileAchievements />
            <MobileCTA />
        </div>
    );
};

export default HomeMobile;
