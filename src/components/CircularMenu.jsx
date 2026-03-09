import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menuIcon from '../assets/journey_pics/menu.svg';

const CircularMenu = ({ isVisible, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Media', href: '/media' },
    { label: 'Contact', href: '/sponsor' },
  ];

  if (!isVisible) return null;

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (label, href, e) => {
    e.preventDefault();
    setIsOpen(false);
    navigate(href);
  };

  return (
    <div className="fixed right-8 top-8 z-50">
      {/* Menu button */}
      <button
        onClick={handleMenuClick}
        className="relative w-14 h-14 bg-[#0F5F4B] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-150 outline-none focus:outline-none"
      >
        <img
          src={menuIcon}
          alt="Menu"
          className={`w-8 h-8 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Menu items container */}
      <div
        className={`absolute top-[3.75rem] right-0 bg-white rounded-xl shadow-lg transition-all duration-150 ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'
          }`}
      >
        <div className="py-2">
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleItemClick(item.label, item.href, e)}
              className="block px-8 py-3 text-[#0F5F4B] font-gilroy-medium text-sm hover:bg-[#0F5F4B] hover:text-white transition-colors duration-150 menu-item outline-none focus:outline-none"
              style={{
                transitionDelay: `${index * 0.02}s`,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircularMenu; 