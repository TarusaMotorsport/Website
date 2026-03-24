import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TarusaLogo from '../assets/tarusa_logo.png';
import SponsorArrow from '../assets/aponser_arrow.png';
import ScrambleText from './ScrambleText';

export const SponsorButton = ({ isLight }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/sponsor')}
      className={`px-6 py-2 rounded-full flex items-center gap-2 font-gilroy-semibold transition-all duration-300 ease-smooth hover:shadow-[0_4px_20px_rgba(245,251,82,0.5)] hover:translate-y-[-2px] group ${isLight
          ? 'bg-[#F0F5F5] text-[#0F5F4B]'
          : 'bg-[#F5FB52] text-[#0F5F4B]'
        }`}
    >
      <span>Sponsor</span>
      <img
        src={SponsorArrow}
        alt="Sponsor Arrow"
        className="h-4 w-4 object-contain transition-transform duration-300 ease-smooth group-hover:translate-x-1"
      />
    </button>
  );
};

const NavLink = ({ text, isLight, onSectionChange }) => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Navigate to dedicated pages for these routes
    if (text === 'Team') { navigate('/team'); return; }
    if (text === 'About') { navigate('/about'); return; }
    if (text === 'Media') { navigate('/media'); return; }
    if (text === 'Contact') { navigate('/sponsor'); return; }
  };

  return (
    <a
      href={`/${text.toLowerCase()}`}
      onClick={handleClick}
      className={`hover:opacity-80 transition-all duration-300 ease-smooth font-gilroy-semibold ${isLight ? 'text-[#F0F5F5]' : 'text-[#0F5F4B]'
        }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ScrambleText text={text} isHovering={isHovering} />
    </a>
  );
};

const Navbar = ({ currentSection, onSectionChange, hideSponsor = false, logoOnly = false }) => {
  const isLight = currentSection === 1;

  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-8 flex justify-between items-center z-50 transition-all duration-300 ease-smooth bg-transparent">
      {/* Logo */}
      <div className={logoOnly ? "w-full flex justify-center" : "flex-1"}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onSectionChange(0);
            const container = document.querySelector('.overflow-y-auto');
            if (container) {
              container.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }
          }}
          className="cursor-pointer"
        >
          <img
            src={TarusaLogo}
            alt="Tarusa Logo"
            className={`${logoOnly ? 'h-20' : 'h-12'} object-contain transition-transform duration-300 ease-smooth hover:scale-105 ${isLight ? 'brightness-0 invert' : ''
              }`}
          />
        </a>
      </div>

      {/* Navigation Links */}
      {!logoOnly && (
        <>
          <div className="flex-1 flex justify-center gap-8">
            <NavLink text="About" isLight={isLight} onSectionChange={onSectionChange} />
            <NavLink text="Team" isLight={isLight} onSectionChange={onSectionChange} />
            <NavLink text="Media" isLight={isLight} onSectionChange={onSectionChange} />
            <NavLink text="Contact" isLight={isLight} onSectionChange={onSectionChange} />
          </div>

          {/* Sponsor Button */}
          <div className="flex-1 flex justify-end">
            {!hideSponsor && <SponsorButton isLight={isLight} />}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar; 