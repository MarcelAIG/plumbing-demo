import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Clock, ShieldCheck, Truck, Star, Phone, ChevronDown } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { PHONE_NUMBER } from '../config';
import { Logo } from './Logo';

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen pb-[74px] lg:pb-0 bg-[#1A1A1A] text-[#F5F5F0]">
        
        {/* 5.2 Main Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-[#1A1A1A]/95 backdrop-blur-md border-b border-white/5 shadow-lg' 
            : 'bg-transparent border-b border-transparent'
        }`}>
          <div className="w-full max-w-[1280px] mx-auto h-[64px] lg:h-[80px] px-4 lg:px-8 flex items-center justify-between">
            <Link to="/" className="flex items-center mt-1 -ml-3 lg:-ml-[32px]" aria-label="Home">
            <Logo className="w-24 lg:w-32" />
          </Link>
          
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 relative lg:left-0 xl:-left-6 lg:translate-y-[6px]">
            <NavLink to="/">Home</NavLink>
            
            <div className="relative group h-[80px] flex items-center">
              <NavLink to="/services">
                <span>Services</span>
                <ChevronDown size={14} strokeWidth={2} className="mt-[1px] opacity-75 transition-transform duration-200 group-hover:rotate-180" />
              </NavLink>
              <div className="absolute top-full left-0 hidden group-hover:block w-[240px]">
                <div className="bg-[#1A1A1A] border border-white/10 rounded-[2px] shadow-xl py-2 flex flex-col">
                  <Link to="/services/burst-pipe-repair" className="px-4 py-2 text-[15px] text-[#F5F5F0] hover:bg-[#242424] hover:text-[#1F46B4]">Burst pipe repair</Link>
                  <Link to="/services/sewer-backup-emergency" className="px-4 py-2 text-[15px] text-[#F5F5F0] hover:bg-[#242424] hover:text-[#1F46B4]">Sewer backup emergency</Link>
                  <Link to="/services/no-heat-no-hot-water" className="px-4 py-2 text-[15px] text-[#F5F5F0] hover:bg-[#242424] hover:text-[#1F46B4]">No heat / no hot water</Link>
                  <Link to="/services/flood-water-extraction" className="px-4 py-2 text-[15px] text-[#F5F5F0] hover:bg-[#242424] hover:text-[#1F46B4]">Flood water extraction</Link>
                  <Link to="/services/emergency-drain-clearing" className="px-4 py-2 text-[15px] text-[#F5F5F0] hover:bg-[#242424] hover:text-[#1F46B4]">Emergency drain clearing</Link>
                  <Link to="/services" className="px-4 py-2 text-[15px] text-[#1F46B4] font-[600] mt-1 hover:bg-[#242424]">View all services &rarr;</Link>
                </div>
              </div>
            </div>

            <div className="relative group h-[80px] flex items-center">
              <NavLink to="/service-areas">
                <span>Service Areas</span>
                <ChevronDown size={14} strokeWidth={2} className="mt-[1px] opacity-75 transition-transform duration-200 group-hover:rotate-180" />
              </NavLink>
              <div className="absolute top-full left-0 hidden group-hover:block w-[200px]">
                <div className="bg-[#1A1A1A] border border-white/10 rounded-[2px] shadow-xl py-2 flex flex-col">
                  <Link to="/service-areas/downtown" className="px-4 py-2 text-[15px] text-[#F5F5F0] hover:bg-[#242424] hover:text-[#1F46B4]">Downtown</Link>
                  <Link to="/service-areas/riverside" className="px-4 py-2 text-[15px] text-[#F5F5F0] hover:bg-[#242424] hover:text-[#1F46B4]">Riverside</Link>
                  <Link to="/service-areas/oakwood" className="px-4 py-2 text-[15px] text-[#F5F5F0] hover:bg-[#242424] hover:text-[#1F46B4]">Oakwood</Link>
                  <Link to="/service-areas/highland-park" className="px-4 py-2 text-[15px] text-[#F5F5F0] hover:bg-[#242424] hover:text-[#1F46B4]">Highland Park</Link>
                  <Link to="/service-areas/eastside" className="px-4 py-2 text-[15px] text-[#F5F5F0] hover:bg-[#242424] hover:text-[#1F46B4]">Eastside</Link>
                  <Link to="/service-areas/westgate" className="px-4 py-2 text-[15px] text-[#F5F5F0] hover:bg-[#242424] hover:text-[#1F46B4]">Westgate</Link>
                  <Link to="/service-areas" className="px-4 py-2 text-[15px] text-[#1F46B4] font-[600] mt-1 hover:bg-[#242424]">View all areas &rarr;</Link>
                </div>
              </div>
            </div>

            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4 lg:translate-y-[6px]">
            <a href="tel:6504871907" className="bg-[#F2131A] text-[#F5F5F0] font-[800] text-[14px] xl:text-[15px] px-4 xl:px-[20px] py-[13px] rounded-[2px] tracking-wide hover:bg-transparent hover:text-[#F2131A] active:scale-[0.98] transition-all flex items-center gap-2 border-2 border-[#F2131A] whitespace-nowrap">
              <Phone size={18} />
              (650) 487-1907
            </a>
            <Link to="/contact" className="bg-[#1F46B4] text-white font-[800] text-[14px] px-5 xl:px-[28px] py-[14px] border-2 border-[#1F46B4] rounded-[2px] uppercase tracking-wide hover:bg-transparent hover:text-[#1F46B4] transition-colors whitespace-nowrap">
              Get Free Quote
            </Link>
          </div>

          <button className="lg:hidden text-[#F5F5F0]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-[#1A1A1A] pt-[80px] px-6 flex flex-col gap-8 overflow-y-auto pb-[100px]">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/services">Services</MobileNavLink>
            <MobileNavLink to="/service-areas">Service Areas</MobileNavLink>
            <MobileNavLink to="/about">About</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
          </div>
        )}

        <main className="flex-grow">
          {children}
        </main>

        <Footer />

        {/* Mobile Sticky Action Buttons */}
        <div className="fixed bottom-0 left-0 right-0 z-[60] flex lg:hidden bg-[#1A1A1A] p-3 gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
          <a href="tel:6504871907" className="flex-1 bg-[#F2131A] text-[#F5F5F0] font-[800] py-3 rounded-[2px] text-center text-[14px] flex items-center justify-center gap-2 hover:bg-transparent hover:text-[#F2131A] border-2 border-[#F2131A] active:scale-[0.98] transition-all">
            <Phone size={16} />
            CALL NOW
          </a>
          <Link to="/contact" className="flex-1 border-2 border-[#F5F5F0] text-[#F5F5F0] font-[800] py-3 rounded-[2px] text-center text-[14px] flex items-center justify-center uppercase hover:bg-[#F5F5F0] hover:text-[#1A1A1A] transition-colors">
            Get Free Quote
          </Link>
        </div>
      </div>
    </HelmetProvider>
  );
}

function NavLink({ to, children }: { to: string, children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isActive = pathname === to || (to !== '/' && pathname.startsWith(to));
  return (
    <Link to={to} className={`inline-flex items-center gap-1 text-[16px] font-[600] ${isActive ? 'text-[#1F46B4] border-b-2 border-[#1F46B4]' : 'text-[#F5F5F0] hover:text-[#1F46B4]'} pb-1 transition-colors`}>
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <Link to={to} className="text-[24px] font-[700] uppercase text-[#F5F5F0] font-oswald">
      {children}
    </Link>
  );
}

export function TrustBar() {
  return (
    <div className="w-full bg-[#242424] py-[32px] border-y-2 border-white/10 px-4">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        <TrustItem icon={<Clock className="text-[#1F46B4]" size={24} />} title="30-min dispatch" sub="Average time to truck rolling" />
        <TrustItem icon={<ShieldCheck className="text-[#1F46B4]" size={24} />} title="Licensed & insured" sub="Master Plumber License #MP-78291" />
        <TrustItem icon={<Truck className="text-[#1F46B4]" size={24} />} title="Trucks stocked 24/7" sub="No 'we'll order the part' delays" />
        <TrustItem icon={<Star className="text-[#1F46B4]" size={24} />} title="4.9 from 510+ reviews" sub="Google & Yelp verified" />
      </div>
    </div>
  );
}

function TrustItem({ icon, title, sub }: { icon: React.ReactNode, title: string, sub: string }) {
  return (
    <div className="flex flex-col gap-2">
      {icon}
      <div>
        <div className="text-[16px] font-[800] text-[#F5F5F0] leading-snug">{title}</div>
        <div className="text-[13px] text-[#9C9C96] mt-1 leading-snug">{sub}</div>
      </div>
    </div>
  );
}

export function CTABand() {
  return (
    <div className="w-full bg-[#1F46B4] py-[70px] lg:py-[100px] px-4">
      <div className="max-w-[720px] mx-auto text-center flex flex-col items-center">
        <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">STILL AN EMERGENCY?</span>
        <h2 className="text-[30px] lg:text-[44px] font-[800] uppercase text-[#F5F5F0] mt-4 font-oswald leading-[1.1]">Every minute of flooding costs more.</h2>
        <p className="text-[18px] text-[#F5F5F0]/85 mt-4 max-w-[580px]">
          Dispatchers are standing by right now.
        </p>
        <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-[36px] lg:text-[56px] font-[800] text-[#F2131A] mt-8 hover:text-[#F5F5F0] hover:scale-[1.02] active:scale-[0.98] transition-all inline-block">
          CALL NOW
        </a>
        <Link to="/contact" className="text-[16px] font-[600] text-[#F5F5F0]/80 underline mt-4 hover:text-[#F5F5F0]">
          Not urgent? Book a scheduled visit &rarr;
        </Link>
      </div>
    </div>
  );
}

function Footer() {
  const footerServices = [
    { name: 'Emergency Plumbing', to: '/services/burst-pipe-repair' },
    { name: 'Drain Cleaning', to: '/services/emergency-drain-clearing' },
    { name: 'Water Heaters', to: '/services/no-heat-no-hot-water' },
    { name: 'Sewer Line Repair', to: '/services/sewer-backup-emergency' },
    { name: 'Leak Detection', to: '/services/burst-pipe-repair' },
    { name: 'Pipe Repair & Repiping', to: '/services/burst-pipe-repair' },
    { name: 'Hydro Jetting', to: '/services/emergency-drain-clearing' },
    { name: 'Boiler & Heating', to: '/services/no-heat-no-hot-water' },
    { name: 'Flood Extraction', to: '/services/flood-water-extraction' },
    { name: 'Fixture Installation', to: '/services' },
    { name: 'Sump Pumps', to: '/services/flood-water-extraction' },
    { name: 'Camera Inspection', to: '/services/sewer-backup-emergency' },
  ];

  const footerAreas = [
    { name: 'Downtown', to: '/service-areas/downtown' },
    { name: 'Riverside', to: '/service-areas/riverside' },
    { name: 'Oakwood', to: '/service-areas/oakwood' },
    { name: 'Highland Park', to: '/service-areas/highland-park' },
    { name: 'Eastside', to: '/service-areas/eastside' },
    { name: 'Westgate', to: '/service-areas/westgate' },
    { name: 'Beaverton', to: '/service-areas' },
    { name: 'Lake Oswego', to: '/service-areas' },
    { name: 'Tigard', to: '/service-areas' },
    { name: 'Gresham', to: '/service-areas' },
    { name: 'Milwaukie', to: '/service-areas' },
    { name: 'Oregon City', to: '/service-areas' },
    { name: 'Hillsboro', to: '/service-areas' },
    { name: 'Vancouver', to: '/service-areas' },
  ];

  const operatingHours = [
    'Sun: Closed',
    'Mon: 8:00am - 6:00pm',
    'Tue: 8:00am - 6:00pm',
    'Wed: 8:00am - 6:00pm',
    'Thu: 8:00am - 6:00pm',
    'Fri: 8:00am - 5:00pm',
    'Sat: 8:00am - 6:00pm',
  ];

  return (
    <footer className="w-full bg-[#0D0D0D] text-[#F5F5F0] -mt-[1px]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 pt-[36px] lg:pt-[48px] pb-[64px] lg:pb-[84px]">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] xl:grid-cols-[360px_1fr] gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left White Business Card */}
          <div className="bg-white rounded-[6px] p-6 sm:p-7 text-[#1A1A1A] shadow-2xl max-w-[380px] w-full">
            {/* Top Logo + Contact Details */}
            <div className="grid grid-cols-[125px_1fr] gap-4 items-center py-2">
              <Link to="/" className="flex items-center justify-center overflow-hidden" aria-label="SOLO Plumbing & Heating Home">
                <Logo className="w-[125px] h-auto scale-[1.22]" />
              </Link>
              <div className="min-w-0">
                <div className="text-[16px] font-[800] text-[#1A1A1A] leading-tight mb-1.5">
                  SOLO Plumbing
                </div>
                <a
                  href="tel:6504871907"
                  className="block text-[13px] font-[600] text-[#333333] hover:text-[#1F46B4] transition-colors leading-relaxed"
                >
                  (650) 487-1907
                </a>
                <a
                  href="mailto:contact.soloplumbing@gmail.com"
                  className="block text-[13px] font-[600] text-[#333333] hover:text-[#1F46B4] transition-colors leading-snug mt-0.5 break-all"
                >
                  Contact.soloplumbing
                  <br />
                  @gmail.com
                </a>
              </div>
            </div>

            {/* Middle Contact + Get Quote Strip */}
            <div className="bg-[#1F46B4] rounded-[4px] px-5 py-3.5 my-5 flex items-center justify-between gap-3">
              <span className="text-[15px] font-[800] uppercase tracking-wide text-white">
                CONTACT
              </span>
              <Link
                to="/contact"
                className="bg-white text-[#0D0D0D] hover:bg-[#F5F5F0] text-[12px] font-[800] uppercase tracking-wide px-5 py-2.5 rounded-[4px] transition-colors whitespace-nowrap shadow-sm"
              >
                GET QUOTE
              </Link>
            </div>

            {/* Bottom 4 Circular Social Icons (Same as About Us Section) */}
            <div className="flex items-center justify-around pt-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] hover:scale-110 transition-transform shadow-md"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="1" className="fill-white stroke-none" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-[#1877F2] hover:scale-110 transition-transform shadow-md"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                  <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-[#000000] hover:scale-110 transition-transform shadow-md"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                  <path
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.81a8.26 8.26 0 0 0 4.84 1.55V6.91a4.85 4.85 0 0 1-1.08-.22z"
                    fill="#25F4EE"
                    transform="translate(-0.6 -0.6)"
                  />
                  <path
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.81a8.26 8.26 0 0 0 4.84 1.55V6.91a4.85 4.85 0 0 1-1.08-.22z"
                    fill="#FE2C55"
                    transform="translate(0.6 0.6)"
                  />
                  <path
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.81a8.26 8.26 0 0 0 4.84 1.55V6.91a4.85 4.85 0 0 1-1.08-.22z"
                    fill="#FFFFFF"
                  />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-[#FF0000] hover:scale-110 transition-transform shadow-md"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.93 4.78 12 4.78 12 4.78s-5.93 0-7.64.46A2.75 2.75 0 0 0 2.42 7.19 28.7 28.7 0 0 0 1.96 12a28.7 28.7 0 0 0 .46 4.81 2.75 2.75 0 0 0 1.94 1.95c1.71.46 7.64.46 7.64.46s5.93 0 7.64-.46a2.75 2.75 0 0 0 1.94-1.95A28.7 28.7 0 0 0 22.04 12a28.7 28.7 0 0 0-.46-4.81zM9.95 15.05V8.95L15.2 12l-5.25 3.05z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right 4 Navigation & Info Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10 pt-1">
            {/* BUSINESS */}
            <div>
              <h3 className="text-[13px] font-[800] uppercase tracking-wider text-white mb-4">
                BUSINESS
              </h3>
              <ul className="flex flex-col gap-2.5 text-[14px] font-[600] text-[#D4D4D0]">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="/#our-work" className="hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/leave-review" className="hover:text-white transition-colors">
                    Review Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* OUR SERVICES */}
            <div>
              <h3 className="text-[13px] font-[800] uppercase tracking-wider text-white mb-4">
                OUR SERVICES
              </h3>
              <ul className="flex flex-col gap-2.5 text-[14px] font-[600] text-[#D4D4D0]">
                {footerServices.map((service) => (
                  <li key={service.name}>
                    <Link to={service.to} className="hover:text-white transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICE AREAS */}
            <div>
              <h3 className="text-[13px] font-[800] uppercase tracking-wider text-white mb-4">
                SERVICE AREAS
              </h3>
              <ul className="flex flex-col gap-2.5 text-[14px] font-[600] text-[#D4D4D0]">
                {footerAreas.map((area) => (
                  <li key={area.name}>
                    <Link to={area.to} className="hover:text-white transition-colors">
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* OPERATING HOURS */}
            <div>
              <h3 className="text-[13px] font-[800] uppercase tracking-wider text-white mb-4">
                OPERATING HOURS
              </h3>
              <ul className="flex flex-col gap-2.5 text-[14px] font-[600] text-[#D4D4D0]">
                {operatingHours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="w-full border-t border-white/25">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-5 flex items-center justify-end gap-12 sm:gap-20">
          <Link
            to="/privacy"
            className="text-[13px] font-[800] text-white hover:text-[#5C85F6] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-[13px] font-[800] text-white hover:text-[#5C85F6] transition-colors"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
