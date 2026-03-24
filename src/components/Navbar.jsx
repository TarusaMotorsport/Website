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

  const handleClick = (e) => {
    e.preventDefault();
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
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <ScrambleText text={text} isHovering={isHovering} />
    </a>
  );
};

const Navbar = ({ currentSection, onSectionChange, hideSponsor = false, logoOnly = false }) => {
  const isLight = currentSection === 1;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onSectionChange) onSectionChange(0);
    const container = document.querySelector('.overflow-y-auto');
    if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-8 flex justify-between items-center z-50 transition-all duration-300 ease-smooth bg-transparent">
      {/* Logo */}
      <div className={logoOnly ? 'w-full flex justify-center' : 'flex-1'}>
        <a href="#" onClick={handleLogoClick} className="cursor-pointer">
          <img
            src={TarusaLogo}
            alt="Tarusa Logo"
            className={`${logoOnly ? 'h-20' : 'h-12'} object-contain transition-transform duration-300 ease-smooth hover:scale-105 ${isLight ? 'brightness-0 invert' : ''}`}
          />
        </a>
      </div>

      {/* Desktop nav links — hidden below md */}
      {!logoOnly && (
        <>
          <div className="hidden md:flex flex-1 justify-center gap-8">
            <NavLink text="About" isLight={isLight} onSectionChange={onSectionChange} />
            <NavLink text="Team" isLight={isLight} onSectionChange={onSectionChange} />
            <NavLink text="Media" isLight={isLight} onSectionChange={onSectionChange} />
            <NavLink text="Contact" isLight={isLight} onSectionChange={onSectionChange} />
          </div>
          <div className="hidden md:flex flex-1 justify-end">
            {!hideSponsor && <SponsorButton isLight={isLight} />}
          </div>

          {/* Mobile hamburger — visible below md */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px] bg-transparent border-none p-1 ml-auto"
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-6 rounded transition-all duration-300 origin-center ${isLight ? 'bg-white' : 'bg-[#0F5F4B]'} ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 w-6 rounded transition-all duration-200 ${isLight ? 'bg-white' : 'bg-[#0F5F4B]'} ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-0.5 w-6 rounded transition-all duration-300 origin-center ${isLight ? 'bg-white' : 'bg-[#0F5F4B]'} ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>

          {/* Mobile dropdown */}
          {mobileOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-[#0F5F4B]/10 py-5 px-6 flex flex-col gap-3 shadow-xl">
              {['About', 'Team', 'Media'].map(p => (
                <button key={p} onClick={() => { navigate('/' + p.toLowerCase()); setMobileOpen(false); }}
                  className="text-left font-gilroy-semibold text-[#0F5F4B] text-lg py-1 bg-transparent border-none">
                  {p}
                </button>
              ))}
              <div className="h-px bg-[#0F5F4B]/10 my-1" />
              <button onClick={() => { navigate('/sponsor'); setMobileOpen(false); }}
                className="w-full py-3 rounded-full bg-[#F5FB52] text-[#0F5F4B] font-gilroy-black text-base">
                Sponsor Us ↗
              </button>
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
