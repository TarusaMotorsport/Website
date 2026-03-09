import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SponsorButton } from '../components/Navbar';
import CircularMenu from '../components/CircularMenu';
import mediaData from '../data/mediaData';

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const GalleryCard = ({ item }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-[#0F5F4B]/10 aspect-square cursor-pointer hover:shadow-xl transition-all duration-500">
            {!imgError && item.image ? (
                <img
                    src={item.image}
                    alt={item.caption}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#0F5F4B]/10 to-[#0F5F4B]/20">
                    <span className="text-4xl mb-2">{item.placeholder || '📸'}</span>
                    <span className="font-gilroy-medium text-[#0F5F4B]/60 text-sm text-center">{item.caption}</span>
                </div>
            )}
            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-gilroy-medium text-white text-sm">{item.caption}</p>
                    {item.year && <p className="font-gilroy-medium text-white/60 text-xs mt-1">{item.year}</p>}
                </div>
            </div>
        </div>
    );
};

const Media = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', ...new Set(mediaData.gallery.map(i => i.category))];
    const filtered = activeFilter === 'All'
        ? mediaData.gallery
        : mediaData.gallery.filter(i => i.category === activeFilter);

    const handleSectionChange = () => navigate('/');

    return (
        <div className="min-h-screen bg-[#F0F5F5]">
            <CircularMenu isVisible={true} onSectionChange={handleSectionChange} />
            <div className="fixed left-8 bottom-8 z-50">
                <SponsorButton isLight={false} />
            </div>

            {/* Header */}
            <div className="relative bg-white border-b border-[#0F5F4B]/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F5F4B]/5 to-transparent" />
                <div className="container mx-auto px-8 pt-28 pb-16 relative z-10 max-w-6xl">
                    <button onClick={() => navigate('/')} className="flex items-center gap-2 text-[#0F5F4B]/60 hover:text-[#0F5F4B] transition-colors mb-8 font-gilroy-medium text-sm group">
                        <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </button>
                    <h1 className="font-gilroy-black text-7xl text-[#0F5F4B] mb-4">Media</h1>
                    <p className="font-gilroy-medium text-xl text-gray-600 max-w-2xl mb-8">
                        Behind the scenes, on the track, and everything in between. Follow our build journey.
                    </p>
                    {/* Social links */}
                    <div className="flex gap-4">
                        <a
                            href="https://www.instagram.com/tarusamotorsport/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F5F4B]/10 text-[#0F5F4B] hover:bg-[#0F5F4B] hover:text-white transition-all duration-300 font-gilroy-medium text-sm"
                        >
                            <InstagramIcon />
                            @tarusamotorsport
                        </a>
                        <a
                            href="https://www.linkedin.com/company/tarusamotorsport/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F5F4B]/10 text-[#0F5F4B] hover:bg-[#0F5F4B] hover:text-white transition-all duration-300 font-gilroy-medium text-sm"
                        >
                            <LinkedInIcon />
                            Tarusa Motorsport
                        </a>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="container mx-auto px-8 py-16 max-w-6xl">
                {/* Filter tabs */}
                <div className="flex gap-3 flex-wrap mb-10">
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-5 py-2 rounded-full font-gilroy-medium text-sm transition-all duration-300 ${activeFilter === f
                                    ? 'bg-[#0F5F4B] text-white shadow-md'
                                    : 'bg-white text-[#0F5F4B] border border-[#0F5F4B]/20 hover:border-[#0F5F4B]/50'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
                    {filtered.map((item, i) => (
                        <GalleryCard key={i} item={item} />
                    ))}
                </div>

                {/* Videos Section */}
                {mediaData.videos && mediaData.videos.length > 0 && (
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="font-gilroy-bold text-3xl text-[#0F5F4B] whitespace-nowrap">Videos</h2>
                            <div className="h-px flex-1 bg-[#0F5F4B]/20" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {mediaData.videos.map((video, i) => (
                                <a
                                    key={i}
                                    href={video.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-[#0F5F4B]/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="aspect-video bg-[#0F5F4B]/10 flex items-center justify-center relative">
                                        <div className="w-16 h-16 bg-[#0F5F4B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <div className="absolute inset-0 bg-[#0F5F4B]/5 group-hover:bg-[#0F5F4B]/10 transition-colors" />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-gilroy-bold text-[#0F5F4B] mb-1">{video.title}</h3>
                                        {video.description && <p className="font-gilroy-medium text-gray-600 text-sm">{video.description}</p>}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* Press / Coverage */}
                {mediaData.press && mediaData.press.length > 0 && (
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="font-gilroy-bold text-3xl text-[#0F5F4B] whitespace-nowrap">Press & Coverage</h2>
                            <div className="h-px flex-1 bg-[#0F5F4B]/20" />
                        </div>
                        <div className="space-y-4">
                            {mediaData.press.map((article, i) => (
                                <a
                                    key={i}
                                    href={article.url || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-5 bg-white rounded-xl border border-[#0F5F4B]/10 hover:border-[#0F5F4B]/40 hover:shadow-md transition-all duration-300 group"
                                >
                                    <div>
                                        <div className="font-gilroy-bold text-[#0F5F4B] group-hover:underline">{article.title}</div>
                                        <div className="font-gilroy-medium text-gray-500 text-sm">{article.source} · {article.date}</div>
                                    </div>
                                    <svg className="w-5 h-5 text-[#0F5F4B]/40 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
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

export default Media;
