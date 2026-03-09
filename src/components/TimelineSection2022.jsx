import React from 'react';
import polaroidImage from '../assets/journey_pics/polaroid.png';

const TimelineSection2022 = () => {
  return (
    <div className="relative min-h-screen w-full bg-white flex items-center justify-center overflow-hidden">
      {/* Center Timeline Line with gradient effect */}
      <div className="absolute left-1/2 top-0 bottom-0 w-56 transform -translate-x-1/2">
        <div className="absolute inset-0 bg-[#0F5F4B]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F5F4B] to-transparent opacity-50"></div>
      </div>
      
      {/* Timeline Content */}
      <div className="container mx-auto max-w-7xl px-8">
        {/* Year Marker */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-[60%] -translate-y-1/2 text-white z-10 text-center flex flex-col items-start justify-center">
          <div className="font-gilroy-black text-[170px] leading-tight tracking-wider">20</div>
          <div className="font-gilroy-black text-[180px] leading-tight tracking-wider -mt-16">22</div>
        </div>

        <div className="relative grid grid-cols-2 gap-32 items-center mx-12">
          {/* Left Side - Image */}
          <div className="pr-16 flex justify-center items-center">
            <div className="transform hover:scale-110 transition-transform duration-500 w-[140%] rotate-[10deg]">
              <img 
                src={polaroidImage} 
                alt="Tarusa Motorsports Journey 2022" 
                className="w-full"
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="pl-24">
            <div className="space-y-8">
              <p className="font-gilroy-medium text-2xl leading-relaxed text-gray-800">
                In 2022, we made a strategic comeback — this time shifting gears from mBaja (internal combustion) to eBaja (electric powertrain), embracing the shift toward cleaner, smarter mobility.
              </p>
              <p className="font-gilroy-medium text-xl leading-relaxed text-gray-600">
                Even though that year's competition was held online, we treated it as a launchpad — rebuilding our team from the ground up with fresh faces and renewed focus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection2022; 