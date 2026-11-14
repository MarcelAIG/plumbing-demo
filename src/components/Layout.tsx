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

  const isTransparentHeroHeader = !isScrolled && !mobileMenuOpen && pathname !== '/leave-review';

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen pb-[74px] lg:pb-0 bg-white text-[#111827]">
        
        {/* 5.2 Main Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-white/95 backdrop-blur-md border-b border-black/10 shadow-md' 
            : 'bg-transparent border-b border-transparent'
        }`}>
          <div className="w-full max-w-[1280px] mx-auto h-[72px] lg:h-[84px] px-4 lg:px-8 flex items-center justify-between">
            <Link to="/" className="flex items-center shrink-0 py-1" aria-label="George Handyman Services Home">
              <Logo className="h-[54px] lg:h-[66px] w-auto" />
            </Link>
          
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 relative lg:left-0 xl:-left-4">
            <NavLink to="/" lightOnTransparent={isTransparentHeroHeader}>Home</NavLink>
            
            <div className="relative group h-[84px] flex items-center">
              <NavLink to="/services" lightOnTransparent={isTransparentHeroHeader}>
                <span>Services</span>
                <ChevronDown size={14} strokeWidth={2} className="mt-[1px] opacity-80 transition-transform duration-200 group-hover:rotate-180" />
              </NavLink>
              <div className="absolute top-full left-0 hidden group-hover:block w-[240px]">
                <div className="bg-white border border-black/10 rounded-[4px] shadow-xl py-2 flex flex-col">
                  <Link to="/services" className="px-4 py-2 text-[15px] text-[#1F2937] hover:bg-[#FFF7ED] hover:text-[#C2410C]">Gate &amp; Fence Installation</Link>
                  <Link to="/services" className="px-4 py-2 text-[15px] text-[#1F2937] hover:bg-[#FFF7ED] hover:text-[#C2410C]">Ceiling &amp; Drywall Repair</Link>
                  <Link to="/services" className="px-4 py-2 text-[15px] text-[#1F2937] hover:bg-[#FFF7ED] hover:text-[#C2410C]">LED Lighting Systems</Link>
                  <Link to="/services" className="px-4 py-2 text-[15px] text-[#1F2937] hover:bg-[#FFF7ED] hover:text-[#C2410C]">Deck Staining &amp; Pergolas</Link>
                  <Link to="/services" className="px-4 py-2 text-[15px] text-[#1F2937] hover:bg-[#FFF7ED] hover:text-[#C2410C]">Feature Walls &amp; Painting</Link>
                  <Link to="/services" className="px-4 py-2 text-[15px] text-[#C2410C] font-[700] mt-1 hover:bg-[#FFF7ED]">View all services &rarr;</Link>
                </div>
              </div>
            </div>

            <div className="relative group h-[84px] flex items-center">
              <NavLink to="/service-areas" lightOnTransparent={isTransparentHeroHeader}>
                <span>Service Areas</span>
                <ChevronDown size={14} strokeWidth={2} className="mt-[1px] opacity-80 transition-transform duration-200 group-hover:rotate-180" />
              </NavLink>
              <div className="absolute top-full left-0 hidden group-hover:block w-[210px]">
                <div className="bg-white border border-black/10 rounded-[4px] shadow-xl py-2 flex flex-col">
                  <Link to="/service-areas" className="px-4 py-2 text-[15px] text-[#1F2937] hover:bg-[#FFF7ED] hover:text-[#C2410C]">Kato Paphos</Link>
                  <Link to="/service-areas" className="px-4 py-2 text-[15px] text-[#1F2937] hover:bg-[#FFF7ED] hover:text-[#C2410C]">Chloraka</Link>
                  <Link to="/service-areas" className="px-4 py-2 text-[15px] text-[#1F2937] hover:bg-[#FFF7ED] hover:text-[#C2410C]">Peyia &amp; Coral Bay</Link>
                  <Link to="/service-areas" className="px-4 py-2 text-[15px] text-[#1F2937] hover:bg-[#FFF7ED] hover:text-[#C2410C]">Tala &amp; Kissonerga</Link>
                  <Link to="/service-areas" className="px-4 py-2 text-[15px] text-[#1F2937] hover:bg-[#FFF7ED] hover:text-[#C2410C]">Geroskipou</Link>
                  <Link to="/service-areas" className="px-4 py-2 text-[15px] text-[#C2410C] font-[700] mt-1 hover:bg-[#FFF7ED]">View all areas &rarr;</Link>
                </div>
              </div>
            </div>

            <NavLink to="/about" lightOnTransparent={isTransparentHeroHeader}>About</NavLink>
            <NavLink to="/contact" lightOnTransparent={isTransparentHeroHeader}>Contact</NavLink>
          </div>

          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a href="tel:+35799233225" className="group bg-[#111827] text-white font-[800] text-[14px] xl:text-[15px] px-4 xl:px-[20px] py-[12px] rounded-[4px] tracking-wide hover:bg-white hover:text-[#111827] active:scale-[0.98] flex items-center gap-2 border-2 border-[#111827] whitespace-nowrap shadow-sm">
              <Phone size={18} className="text-[#FB923C] group-hover:text-[#C2410C]" />
              +357 99 233225
            </a>
            <Link to="/contact" className="bg-[#D94E0F] text-white font-[800] text-[14px] px-5 xl:px-[26px] py-[13px] border-2 border-[#D94E0F] rounded-[4px] uppercase tracking-wide hover:bg-white hover:text-[#C2410C] active:scale-[0.98] whitespace-nowrap shadow-sm">
              Get Free Quote
            </Link>
          </div>

          <button
            className={`lg:hidden transition-colors ${isTransparentHeroHeader ? 'text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]' : 'text-[#111827]'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white pt-[88px] px-6 flex flex-col gap-8 overflow-y-auto pb-[100px]">
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

        {/* Floating WhatsApp Widget connected directly to +357 99 233225 */}
        <a
          href="https://wa.me/35799233225?text=Hello%20George%2C%20I%20found%20your%20website%20and%20would%20like%20to%20request%20a%20free%20quote."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with George Handyman Services"
          className="fixed bottom-[86px] lg:bottom-6 right-4 lg:right-6 z-50 group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EB954] text-white font-[800] rounded-full shadow-[0_10px_28px_rgba(0,0,0,0.28)] px-3.5 py-3.5 sm:px-5 sm:py-3.5 transition-all hover:scale-[1.04] active:scale-[0.97]"
        >
          <svg viewBox="0 0 32 32" className="w-[26px] h-[26px] fill-current shrink-0" aria-hidden="true">
            <path d="M16.004 3.2C8.94 3.2 3.2 8.94 3.2 16.004c0 2.257.59 4.46 1.71 6.403L3.1 28.9l6.652-1.745a12.74 12.74 0 0 0 6.252 1.635h.005c7.06 0 12.801-5.74 12.801-12.803 0-3.42-1.331-6.634-3.749-9.051A12.716 12.716 0 0 0 16.004 3.2zm7.452 18.082c-.315.887-1.832 1.696-2.548 1.803-.651.097-1.474.138-2.378-.149-.549-.174-1.253-.406-2.155-.795-3.792-1.637-6.269-5.462-6.458-5.714-.189-.252-1.54-2.051-1.54-3.913 0-1.862.976-2.776 1.322-3.154.346-.378.755-.472 1.007-.472s.504.003.725.013c.233.011.544-.088.851.649.315.755 1.07 2.616 1.164 2.805.095.189.158.41.032.662-.126.252-.189.41-.378.63-.189.22-.398.493-.567.662-.189.189-.386.394-.166.772.221.378.98 1.617 2.104 2.619 1.446 1.289 2.665 1.689 3.043 1.878.378.189.599.158.819-.094.221-.252.945-1.102 1.197-1.48.252-.378.504-.315.85-.189.346.126 2.203 1.039 2.581 1.228.378.189.63.284.725.441.094.158.094.914-.221 1.8z" />
          </svg>
          <span className="hidden sm:inline text-[13.5px] tracking-wide whitespace-nowrap">
            WhatsApp George
          </span>
        </a>

        {/* Mobile Sticky Action Buttons */}
        <div className="fixed bottom-0 left-0 right-0 z-[60] flex lg:hidden bg-white border-t border-black/10 p-3 gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.12)]">
          <a href="tel:+35799233225" className="flex-1 bg-[#111827] text-white font-[800] py-3 rounded-[4px] text-center text-[14px] flex items-center justify-center gap-2 hover:bg-[#1F2937] border-2 border-[#111827] active:scale-[0.98] transition-all">
            <Phone size={16} className="text-[#FB923C]" />
            CALL NOW
          </a>
          <Link to="/contact" className="flex-1 bg-[#D94E0F] border-2 border-[#D94E0F] text-white font-[800] py-3 rounded-[4px] text-center text-[14px] flex items-center justify-center uppercase hover:bg-[#B8400B] transition-colors">
            Get Free Quote
          </Link>
        </div>
      </div>
    </HelmetProvider>
  );
}

function NavLink({ to, children, lightOnTransparent = false }: { to: string, children: React.ReactNode, lightOnTransparent?: boolean }) {
  const { pathname } = useLocation();
  const isActive = pathname === to || (to !== '/' && pathname.startsWith(to));
  const colorClass = lightOnTransparent
    ? isActive
      ? 'text-[#FB923C] border-b-2 border-[#FB923C] drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]'
      : 'text-white hover:text-[#FB923C] drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]'
    : isActive
      ? 'text-[#C2410C] border-b-2 border-[#C2410C]'
      : 'text-[#111827] hover:text-[#C2410C]';

  return (
    <Link to={to} className={`inline-flex items-center gap-1 text-[16px] font-[700] ${colorClass} pb-1 transition-colors`}>
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <Link to={to} className="text-[24px] font-[700] uppercase text-[#111827] font-oswald">
      {children}
    </Link>
  );
}

export function TrustBar() {
  return (
    <div className="w-full bg-[#242424] py-[32px] border-y-2 border-white/10 px-4">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        <TrustItem icon={<Clock className="text-[#D94E0F]" size={24} />} title="30-min dispatch" sub="Average time to truck rolling" />
        <TrustItem icon={<ShieldCheck className="text-[#D94E0F]" size={24} />} title="Licensed & insured" sub="Master Plumber License #MP-78291" />
        <TrustItem icon={<Truck className="text-[#D94E0F]" size={24} />} title="Trucks stocked 24/7" sub="No 'we'll order the part' delays" />
        <TrustItem icon={<Star className="text-[#D94E0F]" size={24} />} title="4.9 from 510+ reviews" sub="Google & Yelp verified" />
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
    <div className="w-full bg-[#D94E0F] py-[70px] lg:py-[100px] px-4">
      <div className="max-w-[720px] mx-auto text-center flex flex-col items-center">
        <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-white/95">NEED RELIABLE HANDYMAN HELP?</span>
        <h2 className="text-[30px] lg:text-[44px] font-[800] uppercase text-white mt-4 font-oswald leading-[1.1]">Fast, clean repairs across Paphos.</h2>
        <p className="text-[18px] text-white/90 mt-4 max-w-[580px]">
          Call George directly for repairs, gates, carpentry, painting, and home maintenance.
        </p>
        <a href="tel:+35799233225" className="text-[34px] lg:text-[52px] font-[800] text-[#111827] bg-white px-7 py-2.5 rounded-[4px] mt-8 hover:bg-[#111827] hover:text-white active:scale-[0.98] transition-all inline-block shadow-lg">
          +357 99 233225
        </a>
        <Link to="/contact" className="text-[16px] font-[700] text-white underline mt-5 hover:text-[#111827]">
          Or request a free quote online &rarr;
        </Link>
      </div>
    </div>
  );
}

function Footer() {
  const footerServices = [
    { name: 'Gate & Fence Installation', to: '/services' },
    { name: 'Ceiling & Drywall Repair', to: '/services' },
    { name: 'LED Lighting Systems', to: '/services' },
    { name: 'Deck Staining & Timber', to: '/services' },
    { name: 'Feature Walls & TV Mounts', to: '/services' },
    { name: 'Pergola & Wood Carpentry', to: '/services' },
    { name: 'Exterior Facade Painting', to: '/services' },
    { name: 'Custom Privacy Fencing', to: '/services' },
    { name: 'Plumbing & AC Maintenance', to: '/services' },
    { name: 'Upholstery & Deep Clean', to: '/services' },
    { name: 'Doors, Locks & Hardware', to: '/services' },
    { name: 'General Home Repairs', to: '/services' },
  ];

  const footerAreas = [
    { name: 'Kato Paphos', to: '/service-areas' },
    { name: 'Chloraka', to: '/service-areas' },
    { name: 'Peyia', to: '/service-areas' },
    { name: 'Coral Bay', to: '/service-areas' },
    { name: 'Tala', to: '/service-areas' },
    { name: 'Kissonerga', to: '/service-areas' },
    { name: 'Geroskipou', to: '/service-areas' },
    { name: 'Empa', to: '/service-areas' },
    { name: 'Tremithousa', to: '/service-areas' },
    { name: 'Mesogi', to: '/service-areas' },
    { name: 'Konia', to: '/service-areas' },
    { name: 'Anarita', to: '/service-areas' },
    { name: 'Mandria', to: '/service-areas' },
    { name: 'Polis Chrysochous', to: '/service-areas' },
  ];

  const operatingHours = [
    'Sun: Closed',
    'Mon: 8:00am - 6:00pm',
    'Tue: 8:00am - 6:00pm',
    'Wed: 8:00am - 6:00pm',
    'Thu: 8:00am - 6:00pm',
    'Fri: 8:00am - 6:00pm',
    'Sat: 8:00am - 4:00pm',
  ];

  return (
    <footer className="w-full bg-[#0D0D0D] text-[#F5F5F0] -mt-[1px]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 pt-[36px] lg:pt-[48px] pb-[64px] lg:pb-[84px]">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] xl:grid-cols-[360px_1fr] gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left White Business Card */}
          <div className="bg-white rounded-[6px] p-6 sm:p-7 text-[#1A1A1A] shadow-2xl max-w-[380px] w-full">
            {/* Top Logo + Contact Details */}
            <div className="grid grid-cols-[118px_1fr] gap-4 items-center py-2">
              <Link to="/" className="flex items-center justify-center overflow-hidden" aria-label="George Handyman Services Home">
                <Logo className="w-[116px] h-[116px]" />
              </Link>
              <div className="min-w-0">
                <div className="text-[16px] font-[800] text-[#1A1A1A] leading-tight mb-1.5">
                  George Handyman Services
                </div>
                <a
                  href="tel:+35799233225"
                  className="block text-[13px] font-[700] text-[#333333] hover:text-[#C2410C] transition-colors leading-relaxed"
                >
                  +357 99 233225
                </a>
                <div className="text-[12.5px] font-[600] text-[#555555] leading-snug mt-0.5">
                  Paphos, Cyprus
                </div>
              </div>
            </div>

            {/* Middle Contact + Get Quote Strip */}
            <div className="bg-[#D94E0F] rounded-[4px] px-5 py-3.5 my-5 flex items-center justify-between gap-3">
              <span className="text-[15px] font-[800] uppercase tracking-wide text-white">
                CONTACT
              </span>
              <Link
                to="/contact"
                className="bg-white text-[#111827] hover:bg-[#111827] hover:text-white text-[12px] font-[800] uppercase tracking-wide px-5 py-2.5 rounded-[4px] transition-colors whitespace-nowrap shadow-sm"
              >
                GET QUOTE
              </Link>
            </div>

            {/* Bottom 4 Circular Social Icons (Same as About Us Section) */}
            <div className="flex items-center justify-around pt-2">
              <a
                href="https://www.instagram.com/paphos_handyman/"
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
            className="text-[13px] font-[800] text-white hover:text-[#FB923C] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-[13px] font-[800] text-white hover:text-[#FB923C] transition-colors"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
