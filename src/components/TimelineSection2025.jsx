import React from 'react';

// Timeline 2025 Section — current hydrogen build
// Update text in FILL_ME.md

const TimelineSection2025 = () => {
    return (
        <div className="relative min-h-screen w-full bg-[#F0F5F5] flex items-center justify-center overflow-hidden">
            {/* Center Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-56 transform -translate-x-1/2">
                <div className="absolute inset-0 bg-[#0F5F4B]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F5F4B] to-[#0F5F4B] opacity-50"></div>
            </div>

            {/* Year Marker */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-[60%] -translate-y-1/2 text-white z-10 text-center flex flex-col items-start justify-center">
                <div className="font-gilroy-black text-[170px] leading-tight tracking-wider">20</div>
                <div className="font-gilroy-black text-[180px] leading-tight tracking-wider -mt-16">25</div>
            </div>

            {/* Timeline Content */}
            <div className="container mx-auto max-w-7xl px-8 relative z-10">
                <div className="relative grid grid-cols-2 gap-32 items-center mx-12">
                    {/* Left Side - Image placeholder */}
                    <div className="pr-24 flex justify-center items-center">
                        <div className="transform hover:scale-110 transition-transform duration-500 w-full">
                            <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#0F5F4B]/10 aspect-[4/3] flex flex-col items-center justify-center border-2 border-dashed border-[#0F5F4B]/30">
                                <span className="text-5xl mb-4">🔧</span>
                                <p className="font-gilroy-bold text-[#0F5F4B] text-center px-8">
                                    Add your 2025 build photo here
                                </p>
                                <p className="font-gilroy-medium text-[#0F5F4B]/60 text-sm mt-2 text-center px-8">
                                    See FILL_ME.md → Timeline 2025
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Text */}
                    <div className="pl-24">
                        <div className="space-y-8">
                            {/* LIVE badge */}
                            <div className="inline-flex items-center gap-2 bg-[#0F5F4B] text-white px-4 py-2 rounded-full">
                                <span className="w-2 h-2 rounded-full bg-[#F5FB52] animate-pulse"></span>
                                <span className="font-gilroy-bold text-sm tracking-wider uppercase">Currently Building</span>
                            </div>
                            <p className="font-gilroy-medium text-2xl leading-relaxed text-gray-800">
                                {/* ← UPDATE IN FILL_ME.md */}
                                2025 marks our most ambitious chapter yet. We're building a purpose-built
                                hydrogen ATV — engineered from the ground up with lessons from our AIR 1 win,
                                targeting our best competition performance yet.
                            </p>
                            <p className="font-gilroy-medium text-xl leading-relaxed text-gray-600">
                                {/* ← UPDATE IN FILL_ME.md */}
                                Every weld, every component, every test brings us closer to the start line.
                                The build is real. The target is national glory.
                            </p>
                            {/* Build status items */}
                            <div className="space-y-3">
                                {[
                                    { label: "Chassis Design", status: "complete" },    // ← Update in FILL_ME.md
                                    { label: "Suspension", status: "complete" },
                                    { label: "Powertrain / Hydrogen System", status: "in-progress" },
                                    { label: "Electrics & Controls", status: "in-progress" },
                                    { label: "Bodywork & Livery", status: "upcoming" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className={`w-3 h-3 rounded-full flex-shrink-0 ${item.status === 'complete' ? 'bg-[#0F5F4B]' :
                                                item.status === 'in-progress' ? 'bg-[#F5FB52] animate-pulse' :
                                                    'bg-gray-300'
                                            }`} />
                                        <span className={`font-gilroy-medium text-base ${item.status === 'complete' ? 'text-gray-700' :
                                                item.status === 'in-progress' ? 'text-[#0F5F4B] font-gilroy-bold' :
                                                    'text-gray-400'
                                            }`}>
                                            {item.label}
                                        </span>
                                        <span className={`text-xs font-gilroy-medium px-2 py-0.5 rounded-full ${item.status === 'complete' ? 'bg-[#0F5F4B]/10 text-[#0F5F4B]' :
                                                item.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-gray-100 text-gray-400'
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
            </div>
        </div>
    );
};

export default TimelineSection2025;
