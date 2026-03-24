import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

// --- TEAM DATA: Replace placeholders in FILL_ME.md ---
import teamData from '../data/teamData';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TeamMemberCard = ({ member }) => {
  const [imgError, setImgError] = useState(false);
  
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#0F5F4B]/10">
      {/* Photo */}
      <div className="relative h-72 bg-gradient-to-br from-[#0F5F4B]/10 to-[#0F5F4B]/5 overflow-hidden">
        {!imgError && member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-[#0F5F4B]/20 flex items-center justify-center">
              <span className="text-[#0F5F4B] font-gilroy-black text-4xl">
                {member.name.charAt(0)}
              </span>
            </div>
          </div>
        )}
        {/* Green overlay on hover */}
        <div className="absolute inset-0 bg-[#0F5F4B]/0 group-hover:bg-[#0F5F4B]/10 transition-all duration-500" />
      </div>
      
      {/* Info */}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-gilroy-bold text-xl text-[#0F5F4B] mb-1">{member.name}</h3>
            <p className="font-gilroy-medium text-sm text-[#0F5F4B]/70 uppercase tracking-wider mb-2">{member.role}</p>
            {member.department && (
              <p className="font-gilroy-medium text-sm text-gray-500">{member.department}</p>
            )}
          </div>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F5F4B]/40 hover:text-[#0077b5] transition-colors duration-300 mt-1"
            >
              <LinkedInIcon />
            </a>
          )}
        </div>
        {member.bio && (
          <p className="mt-3 font-gilroy-medium text-sm text-gray-600 leading-relaxed">{member.bio}</p>
        )}
      </div>
      
      {/* Bottom accent */}
      <div className="h-1 w-0 group-hover:w-full bg-[#0F5F4B] transition-all duration-500" />
    </div>
  );
};

const Team = () => {
  const navigate = useNavigate();
  
  const handleSectionChange = () => navigate('/');

  // Group members by department
  const departments = [...new Set(teamData.map(m => m.department || 'Core Team'))];

  return (
    <div className="min-h-screen bg-[#F0F5F5]">
      {/* Fixed elements */}
      <Navbar currentSection={0} onSectionChange={handleSectionChange} />

      {/* Header */}
      <div className="relative overflow-hidden bg-white border-b border-[#0F5F4B]/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F5F4B]/5 to-transparent" />
        <div className="container mx-auto px-8 pt-28 pb-16 relative z-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#0F5F4B]/60 hover:text-[#0F5F4B] transition-colors mb-8 font-gilroy-medium text-sm group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
          <h1 className="text-[#0F5F4B] font-gilroy-black text-7xl mb-4">
            Our Team
          </h1>
          <p className="font-gilroy-medium text-xl text-gray-600 max-w-2xl">
            The passionate engineers, designers, and dreamers behind Tarusa Motorsport — CUSAT's official hydrogen ATV racing team.
          </p>
        </div>
      </div>

      {/* Team content */}
      <div className="container mx-auto px-8 py-16">
        {departments.map(dept => {
          const members = teamData.filter(m => (m.department || 'Core Team') === dept);
          return (
            <div key={dept} className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-gilroy-bold text-2xl text-[#0F5F4B]">{dept}</h2>
                <div className="h-px flex-1 bg-[#0F5F4B]/20" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {members.map((member, idx) => (
                  <TeamMemberCard key={idx} member={member} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-400 font-gilroy-medium py-8 border-t border-[#0F5F4B]/10">
        <p>© 2026 Tarusa Motorsports · School of Engineering, CUSAT</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://www.instagram.com/tarusamotorsport/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0F5F4B] transition-colors">Instagram</a>
          <a href="https://www.linkedin.com/company/tarusamotorsport/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0F5F4B] transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Team;