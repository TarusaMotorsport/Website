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
const ModelLoader = () => (
    <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#0F5F4B] border-t-transparent rounded-full animate-spin" />
    </div>
);

// ─── Mobile Navbar ────────────────────────────────────────────────────────────
const MobileNav = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md px-5 py-3 flex justify-between items-center border-b border-[#0F5F4B]/10">
            <img src={TarusaLogo} alt="Tarusa" className="h-9 object-contain" />
            <button
                onClick={() => setOpen(!open)}
                className="w-10 h-10 flex flex-col justify-center items-center gap-[5px] bg-transparent border-none p-1"
                aria-label="Menu"
            >
                <span className={`block h-0.5 w-6 bg-[#0F5F4B] rounded transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-0.5 w-6 bg-[#0F5F4B] rounded transition-all duration-200 ${open ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-0.5 w-6 bg-[#0F5F4B] rounded transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
            {open && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-[#0F5F4B]/10 py-5 px-6 flex flex-col gap-3 shadow-xl">
                    {['About', 'Team', 'Media'].map(p => (
                        <button key={p} onClick={() => { navigate('/' + p.toLowerCase()); setOpen(false); }}
                            className="text-left font-gilroy-semibold text-[#0F5F4B] text-lg py-1 bg-transparent border-none">
                            {p}
                        </button>
                    ))}
                    <div className="h-px bg-[#0F5F4B]/10 my-1" />
                    <button onClick={() => { navigate('/sponsor'); setOpen(false); }}
                        className="w-full py-3 rounded-full bg-[#F5FB52] text-[#0F5F4B] font-gilroy-black text-base">
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
        <section className="relative w-full overflow-hidden" style={{ height: '100svh' }}>
            {/* Background */}
            <div className="absolute inset-0">
                <img src={bgBlur} alt="" className="w-full h-full object-cover opacity-60" />
            </div>

            {/* TARUSA text — behind the car */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none select-none">
                <h1 className="font-gilroy-black text-[#0F5F4B] leading-none" style={{ fontSize: 'clamp(56px, 20vw, 110px)' }}>
                    TARUSA
                </h1>
                <h2 className="font-gilroy-black text-[#0F5F4B] leading-none" style={{ fontSize: 'clamp(28px, 10vw, 55px)' }}>
                    MOTORSPORT
                </h2>
            </div>

            {/* 3D Car — sits on top of text */}
            <div className="absolute inset-0 z-20">
                <Suspense fallback={<ModelLoader />}>
                    <Canvas
                        camera={{ position: [0, 5, 11], fov: 40 }}
                        style={{ background: 'transparent' }}
                    >
                        <ambientLight intensity={1} />
                        <directionalLight position={[5, 5, 5]} intensity={5} />
                        <directionalLight position={[9, 1, 5]} intensity={3} />
                        <CarModel position={[0, -0.4, 0]} rotation={[0, 0.7, 0]} scale={1.15} scrollProgress={0} />
                    </Canvas>
                </Suspense>
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 z-30 px-5 pb-8 flex flex-col items-center gap-3">
                <p className="font-['Rough-Splash'] text-[#0F5F4B] text-base tracking-widest text-center">
                    official off-road racing team of CUSAT
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                    {[
                        'AIR 1 · hBaja 2024',
                        'AIR 1 · hBaja 2026',
                        'Debut · Baja 2017',
                    ].map((label, i) => (
                        <span key={i} className="bg-white/80 border border-[#0F5F4B]/30 text-[#0F5F4B] font-gilroy-bold text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                            🏆 {label}
                        </span>
                    ))}
                </div>
                <button
                    onClick={() => navigate('/sponsor')}
                    className="mt-1 px-8 py-3 rounded-full bg-[#0F5F4B] text-[#F5FB52] font-gilroy-black text-base active:scale-95 transition-transform"
                >
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
                { val: '3×', sub: 'AIR 1 Wins' },
                { val: '8+', sub: 'Years Active' },
                { val: '5+', sub: 'Competitions' },
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
const TimelineCard = ({ year, tag, title, body, image, imageAlt, accent = false }) => (
    <section className={`relative py-12 px-5 ${accent ? 'bg-[#050f0c]' : 'bg-[#071410]'}`}>
        {/* Dot texture — contained by relative parent */}
        <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-5">
                <span className="font-gilroy-black text-[#F5FB52] text-5xl leading-none opacity-50">{year}</span>
                <span className="border border-white/20 text-[#F5FB52] px-3 py-1 rounded-full font-gilroy-bold text-xs uppercase tracking-widest">{tag}</span>
            </div>
            {image && (
                <div className="w-full mb-5 rounded-2xl overflow-hidden shadow-2xl">
                    <img src={image} alt={imageAlt} className="w-full object-cover" loading="lazy" />
                </div>
            )}
            <p className="font-gilroy-bold text-base leading-relaxed text-white mb-2">{title}</p>
            {body && <p className="font-gilroy-medium text-sm leading-relaxed text-white/50">{body}</p>}
        </div>
    </section>
);

// ─── Achievements ─────────────────────────────────────────────────────────────
const MobileAchievements = () => (
    <section className="bg-[#050f0c] py-10 px-5">
        <div className="text-center mb-6">
            <span className="bg-[#0F5F4B]/20 border border-[#0F5F4B]/40 text-[#F5FB52] px-3 py-1 rounded-full font-gilroy-bold text-xs uppercase tracking-widest">
                Competition Record
            </span>
            <h2 className="font-gilroy-black text-3xl text-white mt-3 mb-1">Our Achievements</h2>
            <p className="font-gilroy-medium text-white/50 text-sm">From debut in 2017 to multiple national ranks.</p>
        </div>
        <div className="space-y-3">
            {[
                {
                    badge: '🏅',
                    result: 'AIR 1 — 3D Print Sync · AIR 3 — Cost',
                    event: 'SAEINDIA hBaja',
                    year: '2026',
                    desc: 'AIR 1 in the 3D Print Sync Event and AIR 3 in the Cost Event.',
                    highlight: true,
                },
                {
                    badge: '⭐',
                    result: 'AIR 7 Overall · AIR 1 — Cost & Statics',
                    event: 'SAEINDIA hBaja',
                    year: '2025',
                    desc: 'Competed with an HCNG blend system. AIR 1 in both Cost and Statics events.',
                },
                {
                    badge: '🏆',
                    result: 'All India Rank 1',
                    event: 'SAEINDIA hBaja',
                    year: '2024',
                    desc: 'Entered the inaugural hydrogen ATV category and secured #1 nationally.',
                },
                {
                    badge: '⚡',
                    result: 'Virtual Participation',
                    event: 'SAEINDIA eBaja',
                    year: '2022',
                    desc: 'Strategic comeback after COVID-19 pause. Pivoted from IC to electric powertrain.',
                },
                {
                    badge: '🚀',
                    result: 'Debut Season',
                    event: 'SAEINDIA Baja / FMEA',
                    year: '2017–18',
                    desc: "Tarusa's first competition season — made our presence felt in student motorsport.",
                },
            ].map((a, i) => (
                <div key={i} className={`relative rounded-xl p-4 border ${a.highlight ? 'bg-[#F5FB52] border-[#F5FB52]' : 'bg-white/[0.04] border-white/10'}`}>
                    {a.highlight && (
                        <div className="absolute top-3 right-3 font-gilroy-black text-sm text-[#0F5F4B]">AIR 1</div>
                    )}
                    <div className="flex gap-3 items-start">
                        <span className={`text-xl p-2 rounded-lg flex-shrink-0 ${a.highlight ? 'bg-[#0F5F4B]/15' : 'bg-white/5'}`}>{a.badge}</span>
                        <div className="min-w-0">
                            <div className="flex flex-wrap gap-1 items-center mb-0.5 pr-8">
                                <span className={`font-gilroy-black text-sm ${a.highlight ? 'text-[#0F5F4B]' : 'text-white'}`}>{a.result}</span>
                                {a.highlight && <span className="bg-[#0F5F4B] text-[#F5FB52] text-xs font-gilroy-bold px-2 py-0.5 rounded-full">Best</span>}
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
                {/* Support card */}
                <div className="rounded-2xl p-5 bg-[#0F5F4B] text-white">
                    <div className="text-2xl mb-2">💸</div>
                    <h3 className="font-gilroy-bold text-lg mb-1 text-white">Support the Build</h3>
                    <p className="font-gilroy-medium text-white/70 text-xs mb-3 leading-relaxed">
                        Help us bring our hydrogen ATV to life. Every contribution goes straight to vehicle development.
                    </p>
                    <div className="mb-3">
                        <div className="flex justify-between text-xs mb-1">
                            <span className="font-gilroy-bold text-white">Build Fund Progress</span>
                            <span className="font-gilroy-black text-[#F5FB52]">43%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[43%] rounded-full bg-gradient-to-r from-[#0F5F4B] to-[#F5FB52]" />
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/sponsor')}
                        className="w-full py-3 rounded-xl bg-[#F5FB52] text-[#0F5F4B] font-gilroy-black text-sm active:scale-95 transition-transform"
                    >
                        Back our team →
                    </button>
                </div>

                {/* Secondary cards */}
                {[
                    {
                        icon: '📸',
                        title: 'Follow the Build',
                        desc: 'Real-time updates on Instagram.',
                        cta: '@tarusamotorsport',
                        href: 'https://www.instagram.com/tarusamotorsport/',
                    },
                    {
                        icon: '🤝',
                        title: 'Connect With Us',
                        desc: 'For partnerships and sponsorship opportunities.',
                        cta: 'LinkedIn',
                        href: 'https://www.linkedin.com/company/tarusamotorsport/',
                    },
                    {
                        icon: '✉️',
                        title: 'Email Us',
                        desc: 'Reach out directly for collaborations.',
                        cta: 'tarusacusat@gmail.com',
                        href: 'mailto:tarusacusat@gmail.com',
                    },
                ].map((c, i) => (
                    <a
                        key={i}
                        href={c.href}
                        target={c.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="block rounded-2xl p-5 bg-[#F0F5F5] border border-[#0F5F4B]/10 active:bg-[#0F5F4B]/5 transition-colors"
                    >
                        <div className="text-2xl mb-2">{c.icon}</div>
                        <h3 className="font-gilroy-bold text-base text-[#0F5F4B] mb-1">{c.title}</h3>
                        <p className="font-gilroy-medium text-xs text-gray-500 mb-2 leading-relaxed">{c.desc}</p>
                        <span className="font-gilroy-bold text-sm text-[#0F5F4B]">{c.cta} →</span>
                    </a>
                ))}
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
                            className="font-gilroy-medium text-gray-400 text-xs">
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

            <TimelineCard
                year="2017"
                tag="The Beginning"
                image={firstJourney}
                imageAlt="Tarusa 2017"
                title="Our journey began in 2017–18 through SAE India Baja and FMEA."
                body="Like many others, we had to pause during COVID-19 as active members graduated and the team went quiet for a while."
                accent
            />
            <TimelineCard
                year="2022"
                tag="The Comeback"
                image={polaroidImage}
                imageAlt="Tarusa 2022"
                title="In 2022 we made a strategic comeback — shifting from mBaja (IC) to eBaja (electric), embracing cleaner mobility."
                body="We rebuilt with fresh faces and renewed focus, treating the online event as a launchpad."
            />
            <TimelineCard
                year="2024"
                tag="🏆 National Champions"
                image={polaroidImage2024}
                imageAlt="Tarusa 2024"
                title="2024 was a milestone year — we entered hBaja and made history with All India Rank 1."
                body="Our bi-fuel system (CNG & petrol) was a first for our entire university."
                accent
            />
            <TimelineCard
                year="2025"
                tag="AIR 1 — Cost & Statics"
                title="In 2025 we introduced an HCNG blend system and earned AIR 7 overall, with AIR 1 in both the Cost and Statics events."
                body="Technical precision met strategic planning — our strongest all-round performance to date."
            />
            <TimelineCard
                year="2026"
                tag="AIR 1 — 3D Print Sync"
                title="2026 brought AIR 1 in the 3D Print Sync Event and AIR 3 in the Cost Event, showcasing our advanced manufacturing edge."
                body="Currently building our 2027 machine — a purpose-built hydrogen ATV targeting our best result yet."
                accent
            />

            <MobileAchievements />
            <MobileCTA />
        </div>
    );
};

export default HomeMobile;
