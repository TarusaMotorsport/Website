import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import QRCode from 'qrcode';
import bgVideo from '../assets/car_model/good_bg_vid.mp4';

const QRModal = ({ isOpen, onClose, qrCode, isGenerating }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white/20 backdrop-blur-xl rounded-2xl p-8 max-w-sm w-full mx-auto border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col items-center">
          <h3 className="font-gilroy-bold text-xl text-white mb-6">Scan QR Code to Pay</h3>

          <div className="min-h-[240px] min-w-[240px] flex items-center justify-center mb-4 bg-white/90 rounded-xl p-4">
            {isGenerating ? (
              <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-4 border-[#0F5F4B] border-t-transparent rounded-full animate-spin"></div>
                <p className="font-gilroy-medium text-[#0F5F4B]">Generating QR Code...</p>
              </div>
            ) : (
              qrCode && <img src={qrCode} alt="Payment QR Code" className="w-48 h-48" />
            )}
          </div>

          <p className="font-gilroy-medium text-white mb-4">
            Scan with any UPI app to contribute
          </p>

          <div className="w-full max-w-[120px] bg-white/90 rounded-lg p-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png"
              alt="UPI Logo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SponsorshipTier = ({ title, price, benefits }) => (
  <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-[#0F5F4B]/10 group cursor-pointer">
    <div className="mb-4">
      <h3 className="font-gilroy-bold text-2xl text-[#0F5F4B] group-hover:translate-x-2 transition-transform duration-300">{title}</h3>
    </div>
    {price && (
      <div className="font-gilroy-bold text-xl text-[#0F5F4B]/80 mb-4">
        Starting from ₹{price}
      </div>
    )}
    <ul className="space-y-2 mb-6">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start gap-2 font-gilroy-medium text-gray-600">
          <span className="text-[#0F5F4B] flex-shrink-0">•</span>
          {benefit}
        </li>
      ))}
    </ul>
    <div className="h-1 w-0 group-hover:w-full bg-[#0F5F4B] transition-all duration-500"></div>
  </div>
);

const FeatureCard = ({ title, description }) => (
  <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
    <div>
      <h3 className="font-gilroy-bold text-xl text-[#0F5F4B] mb-2">{title}</h3>
      <p className="font-gilroy-medium text-gray-600">{description}</p>
    </div>
  </div>
);

const PresetAmountButton = ({ amount, selectedAmount, onClick }) => (
  <button
    onClick={() => onClick(amount)}
    className={`px-6 py-3 rounded-full font-gilroy-medium transition-all duration-300 transform hover:scale-105 ${selectedAmount === amount
      ? 'bg-[#0F5F4B] text-white shadow-lg'
      : 'bg-[#F0F5F5] text-[#0F5F4B] hover:bg-[#0F5F4B]/10'
      }`}
  >
    ₹{amount}
  </button>
);

const ContactButton = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] group w-full"
  >
    <span className="font-gilroy-medium text-[#0F5F4B]">{text}</span>
  </button>
);

const Sponsor = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const baseUpiUrl = "upi://pay?pa=919072278931@federal&pn=ADARSH%20N&cu=INR&tn=Payment";
  const razorpayUrl = "https://pages.razorpay.com/contribute-to-tarusa";

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  const generateQRCode = () => {
    if (!amount) return;

    const upiUrl = `${baseUpiUrl}&am=${amount}`;

    if (isMobile) {
      window.location.href = upiUrl;
      return;
    }

    setIsGenerating(true);
    setIsModalOpen(true);
    QRCode.toDataURL(upiUrl)
      .then(url => {
        setQrCode(url);
        setIsGenerating(false);
      })
      .catch(err => {
        console.error(err);
        setIsGenerating(false);
      });
  };

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setAmount(value);
  };

  const handlePresetAmount = (value) => {
    setAmount(value);
  };

  const handleSectionChange = (section) => {
    if (section === 0 || section === 1) {
      navigate('/');
    }
  };

  const sponsorshipTiers = [
    {
      title: "Title Sponsor",
      price: "5,00,000",
      benefits: [
        "Exclusive naming rights",
        "Prime logo placement on vehicle",
        "Featured in all media content",
        "VIP access to events",
        "Direct talent engagement"
      ]
    },
    {
      title: "Gold Sponsor",
      price: "2,00,000",
      benefits: [
        "Large logo on vehicle",
        "Premium media coverage",
        "Event participation",
        "Team engagement sessions",
        "Technical collaboration"
      ]
    },
    {
      title: "Silver Sponsor",
      price: "1,00,000",
      benefits: [
        "Logo on vehicle",
        "Social media features",
        "Event invitations",
        "Team updates",
        "Networking opportunities"
      ]
    },
    {
      title: "Custom Package",
      benefits: [
        "Flexible engagement options",
        "Customized visibility plan",
        "Targeted collaboration",
        "Tailored benefits package",
        "Contact us to discuss"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar currentSection={0} onSectionChange={handleSectionChange} logoOnly={true} />

        <QRModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          qrCode={qrCode}
          isGenerating={isGenerating}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-32 pb-16">
            {/* Hero Section with Quick Support */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              {/* Left side - Main content */}
              <div className="text-left">
                <h1 className="font-gilroy-black text-4xl sm:text-5xl text-white mb-6">
                  Support Tarusa Motorsports
                </h1>
                <p className="font-gilroy-medium text-lg text-gray-200 leading-relaxed mb-8">
                  Join hands with CUSAT's official off-road racing team. Your support drives innovation in sustainable mobility and empowers the next generation of engineers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => document.getElementById('corporate').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-gilroy-bold hover:bg-white/20 transition-all duration-300 border border-white/30">
                    Corporate Sponsorship
                  </button>
                  <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-gilroy-bold hover:bg-white/20 transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>

              {/* Right side - Quick Support */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/30">
                <h2 className="font-gilroy-bold text-2xl text-white mb-6">
                  Quick Support
                </h2>
                <div className="mb-6">
                  <label className="block font-gilroy-medium text-white mb-2">
                    Contribution Amount (INR)
                  </label>
                  <input
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md focus:border-white/50 outline-none font-gilroy-medium text-xl text-white transition-all duration-300 hover:shadow-inner placeholder-white/50"
                    placeholder="Enter amount"
                  />
                </div>

                <div className="flex flex-wrap gap-3 mb-8 justify-center">
                  <PresetAmountButton amount="100" selectedAmount={amount} onClick={handlePresetAmount} />
                  <PresetAmountButton amount="500" selectedAmount={amount} onClick={handlePresetAmount} />
                  <PresetAmountButton amount="1000" selectedAmount={amount} onClick={handlePresetAmount} />
                  <PresetAmountButton amount="5000" selectedAmount={amount} onClick={handlePresetAmount} />
                </div>

                <div className="text-center">
                  {amount && (
                    <button
                      onClick={generateQRCode}
                      className="bg-white/10 backdrop-blur-md text-white px-12 py-4 rounded-xl font-gilroy-bold text-lg hover:bg-white/20 transition-all duration-300 hover:translate-y-[-2px] hover:scale-105 flex items-center gap-2 mx-auto border border-white/30"
                    >
                      <span>{isMobile ? 'Pay Now' : 'Show QR Code'}</span>
                      <span className="text-2xl">&rarr;</span>
                    </button>
                  )}
                </div>

                {/* Razorpay CTA */}
                <div className="mt-4">
                  <div className="relative flex items-center justify-center mb-3">
                    <div className="h-px flex-1 bg-white/20" />
                    <span className="font-gilroy-medium text-white/50 text-xs px-3">OR PAY VIA</span>
                    <div className="h-px flex-1 bg-white/20" />
                  </div>
                  <a
                    href={razorpayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#072654] text-white px-6 py-4 rounded-xl font-gilroy-bold hover:bg-[#0d3a7a] transition-all duration-300 border border-white/20"
                  >
                    <span className="text-lg">💳</span>
                    <span>Donate via Razorpay</span>
                  </a>
                  <p className="font-gilroy-medium text-white/40 text-xs mt-2 text-center">Cards, UPI, Net Banking — all accepted</p>
                </div>
              </div>
            </div>

            {/* Why Partner With Us Section */}
            <div className="mb-24">
              <h2 className="font-gilroy-bold text-3xl sm:text-4xl text-white mb-8">
                Why Partner With Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Feature Cards with Glassmorphism */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 hover:translate-y-[-4px] border border-white/30 group">
                  <div>
                    <h3 className="font-gilroy-bold text-xl text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">Prime Branding & Visibility</h3>
                    <p className="font-gilroy-medium text-gray-200">Your logo featured on our vehicle, team uniforms, and pit banners — ensuring maximum on-ground presence at major national competitions.</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 hover:translate-y-[-4px] border border-white/30 group">
                  <div>
                    <h3 className="font-gilroy-bold text-xl text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">Digital & Media Promotion</h3>
                    <p className="font-gilroy-medium text-gray-200">Get featured across our high-engagement social media campaigns, website, and team content — reaching a wide audience of students, tech enthusiasts, and industry professionals.</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 hover:translate-y-[-4px] border border-white/30 group">
                  <div>
                    <h3 className="font-gilroy-bold text-xl text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">Exclusive Networking Access</h3>
                    <p className="font-gilroy-medium text-gray-200">Connect directly with top student talent, industry leaders, and educators through events, workshops, and campus initiatives.</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 hover:translate-y-[-4px] border border-white/30 group">
                  <div>
                    <h3 className="font-gilroy-bold text-xl text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">Access to CUSAT's Talent Pool</h3>
                    <p className="font-gilroy-medium text-gray-200">Engage with the bright minds of CUSAT — future engineers, researchers, and changemakers ready to shape tomorrow.</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 hover:translate-y-[-4px] border border-white/30 group">
                  <div>
                    <h3 className="font-gilroy-bold text-xl text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">Technical Integration</h3>
                    <p className="font-gilroy-medium text-gray-200">Showcase your technologies, tools, or components on a live racing vehicle. Get real-world feedback and visibility at national-level engineering events.</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 hover:translate-y-[-4px] border border-white/30 group">
                  <div>
                    <h3 className="font-gilroy-bold text-xl text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">Brand Growth & Impact</h3>
                    <p className="font-gilroy-medium text-gray-200">Associate your brand with innovation, sustainability, and youth empowerment. Create lasting impact in engineering education and motorsports.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sponsorship Packages */}
            <div id="corporate" className="mb-24">
              <h2 className="font-gilroy-bold text-3xl sm:text-4xl text-white mb-8">
                Corporate Sponsorship Packages
              </h2>
              <p className="font-gilroy-medium text-xl text-gray-200 mb-8">
                Choose from our carefully designed sponsorship packages or let us create a custom solution for your brand:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {sponsorshipTiers.map((tier, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 border border-white/30 group cursor-pointer">
                    <div className="mb-4">
                      <h3 className="font-gilroy-bold text-2xl text-white group-hover:translate-x-2 transition-transform duration-300">{tier.title}</h3>
                    </div>
                    {tier.price && (
                      <div className="font-gilroy-bold text-xl text-white/80 mb-4">
                        Starting from ₹{tier.price}
                      </div>
                    )}
                    <ul className="space-y-2 mb-6">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 font-gilroy-medium text-gray-200">
                          <span className="text-white flex-shrink-0">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="h-1 w-0 group-hover:w-full bg-white/30 transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="max-w-4xl mx-auto text-center mb-24">
              <h2 className="font-gilroy-bold text-3xl sm:text-4xl text-white mb-8">Get in Touch</h2>
              <p className="font-gilroy-medium text-xl text-gray-200 mb-8">
                Let's discuss how we can create value together through a strategic partnership.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                <button
                  onClick={() => window.location.href = 'mailto:tarusacusat@gmail.com'}
                  className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 border border-white/30 text-white font-gilroy-medium hover:bg-white/20"
                >
                  Email: tarusacusat@gmail.com
                </button>
                <button
                  onClick={() => window.location.href = 'tel:+919072278931'}
                  className="bg-white/10 backdrop-blur-xl rounded-xl p-6 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 border border-white/30 text-white font-gilroy-medium hover:bg-white/20"
                >
                  Call: +91 907 227 8931
                </button>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto mb-24">
              <h2 className="font-gilroy-bold text-3xl sm:text-4xl text-white mb-8">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {[
                  {
                    q: "Is my contribution tax-deductible?",
                    a: "As a student team, we are not GST registered. Contributions are not eligible for 80G tax deduction. All payments go through our Razorpay account registered under our Team Captain, Nadec Biju, on behalf of Tarusa Motorsports."
                  },
                  {
                    q: "How are funds used?",
                    a: "100% of contributions go directly to vehicle development — sourcing components (suspension, drivetrain, hydrogen system), manufacturing, tooling, and competition registration and travel."
                  },
                  {
                    q: "How will I know my donation was used well?",
                    a: "We document and share our build progress actively on Instagram (@tarusamotorsport) and LinkedIn. Sponsors and major contributors receive direct build updates from the team."
                  },
                  {
                    q: "Can I sponsor specific components instead of donating cash?",
                    a: "Absolutely. We welcome in-kind sponsorships — materials, components, tooling, or software. Contact us at tarusacusat@gmail.com to discuss."
                  },
                  {
                    q: "What do corporate sponsors get?",
                    a: "Logo placement on the vehicle, team uniforms, and pit banners. Featured social media coverage. VIP invitations to competitions. Talent networking sessions. See our Corporate Packages above."
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left font-gilroy-bold text-white hover:bg-white/10 transition-colors duration-200"
                    >
                      <span>{item.q}</span>
                      <span className={`text-xl transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5">
                        <p className="font-gilroy-medium text-gray-200 leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <footer className="text-center text-gray-300 font-gilroy-medium border-t border-white/20 pt-8">
              <p>© 2026 Tarusa Motorsports</p>
              <p className="mt-2">School of Engineering, CUSAT</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor; 