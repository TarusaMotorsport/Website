import React from 'react';
import firstJourney from '../assets/journey_pics/first_new.png';
import polaroidImage from '../assets/journey_pics/polaroid.png';

const TimelineSection = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 2017 Section */}
      <section id="2017" className="relative h-screen w-full flex items-center justify-center bg-[#050f0c]">
        {/* Dot texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        {/* Glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#0F5F4B] rounded-full blur-[120px] opacity-20 pointer-events-none" />

        {/* Center Timeline Line with gradient effect */}
        <div className="absolute left-1/2 top-0 bottom-0 w-56 transform -translate-x-1/2">
          <div className="absolute inset-0 bg-[#0F5F4B]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F5F4B] to-transparent opacity-70"></div>
        </div>

        {/* Timeline Content */}
        <div className="container mx-auto max-w-7xl px-8 relative z-10">
          {/* Year Marker */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-[60%] -translate-y-1/2 text-white z-10 text-center flex flex-col items-start justify-center">
            <div className="font-gilroy-black text-[170px] leading-tight tracking-wider opacity-90">20</div>
            <div className="font-gilroy-black text-[180px] leading-tight tracking-wider -mt-16 opacity-90">17</div>
          </div>

          <div className="relative grid grid-cols-2 gap-32 items-center mx-12">
            {/* Left Side - Text */}
            <div className="text-right pr-24">
              <div className="space-y-6">
                <div className="inline-block border border-white/20 text-[#F5FB52] px-4 py-1 rounded-full font-gilroy-bold text-xs uppercase tracking-widest mb-2">
                  The Beginning
                </div>
                <p className="font-gilroy-medium text-2xl leading-relaxed text-white/80">
                  Our journey began back in 2017-18, when we jumped into the student motorsports scene through events like SAE India Baja and FMEA. We quickly made our presence felt.
                </p>
                <p className="font-gilroy-medium text-xl leading-relaxed text-white/50">
                  Like many others, we had to hit pause during the COVID-19 pandemic, especially as our active members graduated and the team went quiet for a while.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="pl-24 flex justify-center items-center">
              <div className="transform rotate-[16deg] hover:scale-125 transition-transform duration-500 w-[140%]">
                <img
                  src={firstJourney}
                  alt="Tarusa Motorsports Journey 2017"
                  className="w-full drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2022 Section */}
      <section id="2022" className="relative h-screen w-full flex items-center justify-center bg-[#071410]">
        {/* Dot texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        {/* Glow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#F5FB52] rounded-full blur-[150px] opacity-10 pointer-events-none" />

        {/* Center Timeline Line with gradient effect */}
        <div className="absolute left-1/2 top-0 bottom-0 w-56 transform -translate-x-1/2">
          <div className="absolute inset-0 bg-[#0F5F4B]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F5F4B] to-transparent opacity-70"></div>
        </div>

        {/* Timeline Content */}
        <div className="container mx-auto max-w-7xl px-8 relative z-10">
          {/* Year Marker */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-[60%] -translate-y-1/2 text-white z-10 text-center flex flex-col items-start justify-center">
            <div className="font-gilroy-black text-[170px] leading-tight tracking-wider opacity-90">20</div>
            <div className="font-gilroy-black text-[180px] leading-tight tracking-wider -mt-16 opacity-90">22</div>
          </div>

          <div className="relative grid grid-cols-2 gap-32 items-center mx-12">
            {/* Left Side - Image */}
            <div className="pr-24 flex justify-center items-center">
              <div className="transform hover:scale-105 transition-transform duration-500">
                <img
                  src={polaroidImage}
                  alt="Tarusa Motorsports Journey 2022"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="pl-24">
              <div className="space-y-6">
                <div className="inline-block border border-white/20 text-[#F5FB52] px-4 py-1 rounded-full font-gilroy-bold text-xs uppercase tracking-widest mb-2">
                  The Comeback
                </div>
                <p className="font-gilroy-medium text-2xl leading-relaxed text-white/80">
                  In 2022, we made a strategic comeback — this time shifting gears from mBaja (internal combustion) to eBaja (electric powertrain), embracing the shift toward cleaner, smarter mobility.
                </p>
                <p className="font-gilroy-medium text-xl leading-relaxed text-white/50">
                  Even though that year's competition was held online, we treated it as a launchpad — rebuilding our team from the ground up with fresh faces and renewed focus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimelineSection; 