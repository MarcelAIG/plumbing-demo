import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Wrench, MessageCircle, Star, Phone, ChevronDown } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import {
  PHONE_NUMBER,
  PHONE_HREF,
  WHATSAPP_HREF,
  BUSINESS_NAME,
  GREEK_IDENTITY,
  FACEBOOK_URL,
  GOOGLE_MAPS_REVIEW_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
} from '../config';
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
            <Link to="/" className="flex items-center shrink-0 py-1" aria-label={`${BUSINESS_NAME} Home`}>
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
                    <Link to="/services/plumbing-works" className="px-4 py-2 text-[15px] text-[#1F2937] hover:bg-[#F0FDFA] hover:text-[#0F766E]">Plumbing Works</Link>
                    <Link to="/services/carpentry" className="px-4 py-2 text-[15px] text-[#1F2937] hover:bg-[#F0FDFA] hover:text-[#0F766E]">Carpentry</Link>
                    <Link to="/services/electrical-lighting" className="px-4 py-2 text-[15px] text-[#1F2937] hover:bg-[#F0FDFA] hover:text-[#0F766E]">Electrical &amp; Lighting</Link>
                    <Link to="/services/garden-yard-work" className="px-4 py-2 text-[15px] text-[#1F2937] hover:bg-[#F0FDFA] hover:text-[#0F766E]">Garden &amp; Yard Work</Link>
                    <Link to="/services" className="px-4 py-2 text-[15px] text-[#0F766E] font-[700] mt-1 hover:bg-[#F0FDFA]">View all services &rarr;</Link>
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
                    <Link to="/service-areas/larnaca" className="px-4 py-2 text-[15px] text-[#1F2937] hover:bg-[#F0FDFA] hover:text-[#0F766E]">Larnaca District</Link>
                    <Link to="/service-areas/limassol" className="px-4 py-2 text-[15px] text-[#1F2937] hover:bg-[#F0FDFA] hover:text-[#0F766E]">Limassol District</Link>
                    <Link to="/service-areas" className="px-4 py-2 text-[15px] text-[#0F766E] font-[700] mt-1 hover:bg-[#F0FDFA]">View coverage map &rarr;</Link>
                  </div>
                </div>
              </div>

              <NavLink to="/about" lightOnTransparent={isTransparentHeroHeader}>About</NavLink>
              <NavLink to="/contact" lightOnTransparent={isTransparentHeroHeader}>Contact</NavLink>
            </div>

            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <a href={PHONE_HREF} className="group bg-[#111827] text-white font-[800] text-[14px] xl:text-[15px] px-4 xl:px-[20px] py-[12px] rounded-[4px] tracking-wide hover:bg-white hover:text-[#111827] active:scale-[0.98] flex items-center gap-2 border-2 border-[#111827] whitespace-nowrap shadow-sm">
                <Phone size={18} className="text-[#F59E0B] group-hover:text-[#0F766E]" />
                {PHONE_NUMBER}
              </a>
              <Link to="/contact" className="bg-[#0D9488] text-white font-[800] text-[14px] px-5 xl:px-[26px] py-[13px] border-2 border-[#0D9488] rounded-[4px] uppercase tracking-wide hover:bg-white hover:text-[#0F766E] active:scale-[0.98] whitespace-nowrap shadow-sm">
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

        {/* Floating WhatsApp Widget connected directly to +357 97 608803 */}
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat on WhatsApp with ${BUSINESS_NAME}`}
          className="fixed bottom-[86px] lg:bottom-6 right-4 lg:right-6 z-50 group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EB954] text-white font-[800] rounded-full shadow-[0_10px_28px_rgba(0,0,0,0.28)] px-3.5 py-3.5 sm:px-5 sm:py-3.5 transition-all hover:scale-[1.04] active:scale-[0.97]"
        >
          <svg viewBox="0 0 32 32" className="w-[26px] h-[26px] fill-current shrink-0" aria-hidden="true">
            <path d="M16.004 3.2C8.94 3.2 3.2 8.94 3.2 16.004c0 2.257.59 4.46 1.71 6.403L3.1 28.9l6.652-1.745a12.74 12.74 0 0 0 6.252 1.635h.005c7.06 0 12.801-5.74 12.801-12.803 0-3.42-1.331-6.634-3.749-9.051A12.716 12.716 0 0 0 16.004 3.2zm7.452 18.082c-.315.887-1.832 1.696-2.548 1.803-.651.097-1.474.138-2.378-.149-.549-.174-1.253-.406-2.155-.795-3.792-1.637-6.269-5.462-6.458-5.714-.189-.252-1.54-2.051-1.54-3.913 0-1.862.976-2.776 1.322-3.154.346-.378.755-.472 1.007-.472s.504.003.725.013c.233.011.544-.088.851.649.315.755 1.07 2.616 1.164 2.805.095.189.158.41.032.662-.126.252-.189.41-.378.63-.189.22-.398.493-.567.662-.189.189-.386.394-.166.772.221.378.98 1.617 2.104 2.619 1.446 1.289 2.665 1.689 3.043 1.878.378.189.599.158.819-.094.221-.252.945-1.102 1.197-1.48.252-.378.504-.315.85-.189.346.126 2.203 1.039 2.581 1.228.378.189.63.284.725.441.094.158.094.914-.221 1.8z" />
          </svg>
          <span className="hidden sm:inline text-[13.5px] tracking-wide whitespace-nowrap">
            WhatsApp Us
          </span>
        </a>

        {/* Mobile Sticky Action Buttons */}
        <div className="fixed bottom-0 left-0 right-0 z-[60] flex lg:hidden bg-white border-t border-black/10 p-3 gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.12)]">
          <a href={PHONE_HREF} className="flex-1 bg-[#111827] text-white font-[800] py-3 rounded-[4px] text-center text-[14px] flex items-center justify-center gap-2 hover:bg-[#1F2937] border-2 border-[#111827] active:scale-[0.98] transition-all">
            <Phone size={16} className="text-[#F59E0B]" />
            CALL NOW
          </a>
          <Link to="/contact" className="flex-1 bg-[#0D9488] border-2 border-[#0D9488] text-white font-[800] py-3 rounded-[4px] text-center text-[14px] flex items-center justify-center uppercase hover:bg-[#0F766E] transition-colors">
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
      ? 'text-[#F59E0B] border-b-2 border-[#F59E0B] drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]'
      : 'text-white hover:text-[#2DD4BF] drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]'
    : isActive
      ? 'text-[#0F766E] border-b-2 border-[#0F766E]'
      : 'text-[#111827] hover:text-[#0F766E]';

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
        <TrustItem icon={<MapPin className="text-[#2DD4BF]" size={24} />} title="Larnaca & Limassol" sub="Serving both districts, Cyprus" />
        <TrustItem icon={<Wrench className="text-[#2DD4BF]" size={24} />} title="Indoor & Outdoor" sub="Plumbing, carpentry, lighting & yard" />
        <TrustItem icon={<MessageCircle className="text-[#2DD4BF]" size={24} />} title="Direct Contact" sub="Call or WhatsApp +357 97 608803" />
        <TrustItem icon={<Star className="text-[#F59E0B]" size={24} />} title={`${GOOGLE_RATING} / 5 Rating`} sub={`From ${GOOGLE_REVIEW_COUNT} Google reviews`} />
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
    <div className="w-full bg-[#0D9488] py-[70px] lg:py-[100px] px-4">
      <div className="max-w-[720px] mx-auto text-center flex flex-col items-center">
        <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-white/95">NEED RELIABLE HANDYMAN HELP?</span>
        <h2 className="text-[30px] lg:text-[44px] font-[800] uppercase text-white mt-4 font-oswald leading-[1.1]">Practical repairs across Larnaca &amp; Limassol.</h2>
        <p className="text-[18px] text-white/90 mt-4 max-w-[580px]">
          Call directly for plumbing works, carpentry, electrical &amp; lighting, and garden &amp; yard maintenance.
        </p>
        <a href={PHONE_HREF} className="text-[34px] lg:text-[52px] font-[800] text-[#111827] bg-white px-7 py-2.5 rounded-[4px] mt-8 hover:bg-[#111827] hover:text-white active:scale-[0.98] transition-all inline-block shadow-lg">
          {PHONE_NUMBER}
        </a>
        <Link to="/contact" className="text-[16px] font-[700] text-white underline mt-5 hover:text-[#FBBF24]">
          Or view contact &amp; quote options &rarr;
        </Link>
      </div>
    </div>
  );
}

function Footer() {
  const footerServices = [
    { name: 'Plumbing Works', to: '/services/plumbing-works' },
    { name: 'Faucet Repair & Replacement', to: '/services/plumbing-works' },
    { name: 'Kitchen & Bathroom Sinks', to: '/services/plumbing-works' },
    { name: 'Carpentry & Woodwork', to: '/services/carpentry' },
    { name: 'Furniture Assembly', to: '/services/carpentry' },
    { name: 'Cabinet & Drawer Repairs', to: '/services/carpentry' },
    { name: 'Parquet Installation', to: '/services/carpentry' },
    { name: 'Electrical & Lighting', to: '/services/electrical-lighting' },
    { name: 'Light Fixture Replacement', to: '/services/electrical-lighting' },
    { name: 'Switches & Sockets', to: '/services/electrical-lighting' },
    { name: 'Garden & Yard Work', to: '/services/garden-yard-work' },
    { name: 'Fence Creation & Repair', to: '/services/garden-yard-work' },
  ];

  const footerAreas = [
    { name: 'Larnaca District', to: '/service-areas/larnaca' },
    { name: 'Limassol District', to: '/service-areas/limassol' },
    { name: 'Service Area Map', to: '/service-areas' },
  ];

  return (
    <footer className="w-full bg-[#0D0D0D] text-[#F5F5F0] -mt-[1px]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 pt-[36px] lg:pt-[48px] pb-[64px] lg:pb-[84px]">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] xl:grid-cols-[360px_1fr] gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left White Business Card */}
          <div className="bg-white rounded-[6px] p-6 sm:p-7 text-[#1A1A1A] shadow-2xl max-w-[380px] w-full">
            {/* Top Logo + Contact Details */}
            <div className="grid grid-cols-[118px_1fr] gap-4 items-center py-2">
              <Link to="/" className="flex items-center justify-center overflow-hidden" aria-label={`${BUSINESS_NAME} Home`}>
                <Logo className="w-[116px] h-[116px]" />
              </Link>
              <div className="min-w-0">
                <div className="text-[15.5px] font-[800] text-[#1A1A1A] leading-tight mb-1">
                  {BUSINESS_NAME}
                </div>
                <div className="text-[11.5px] font-[700] text-[#0F766E] leading-snug mb-1.5">
                  {GREEK_IDENTITY}
                </div>
                <a
                  href={PHONE_HREF}
                  className="block text-[13px] font-[700] text-[#333333] hover:text-[#0F766E] transition-colors leading-relaxed"
                >
                  {PHONE_NUMBER}
                </a>
                <div className="text-[12.5px] font-[600] text-[#555555] leading-snug mt-0.5">
                  Larnaca &amp; Limassol Districts, Cyprus
                </div>
              </div>
            </div>

            {/* Middle Contact + Get Quote Strip */}
            <div className="bg-[#0D9488] rounded-[4px] px-5 py-3.5 my-5 flex items-center justify-between gap-3">
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

            {/* Bottom Verified Social & Contact Action Icons */}
            <div className="flex items-center justify-around pt-2">
              <a
                href={FACEBOOK_URL}
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
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-[#25D366] hover:scale-110 transition-transform shadow-md"
              >
                <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white" aria-hidden="true">
                  <path d="M16.004 3.2C8.94 3.2 3.2 8.94 3.2 16.004c0 2.257.59 4.46 1.71 6.403L3.1 28.9l6.652-1.745a12.74 12.74 0 0 0 6.252 1.635h.005c7.06 0 12.801-5.74 12.801-12.803 0-3.42-1.331-6.634-3.749-9.051A12.716 12.716 0 0 0 16.004 3.2zm7.452 18.082c-.315.887-1.832 1.696-2.548 1.803-.651.097-1.474.138-2.378-.149-.549-.174-1.253-.406-2.155-.795-3.792-1.637-6.269-5.462-6.458-5.714-.189-.252-1.54-2.051-1.54-3.913 0-1.862.976-2.776 1.322-3.154.346-.378.755-.472 1.007-.472s.504.003.725.013c.233.011.544-.088.851.649.315.755 1.07 2.616 1.164 2.805.095.189.158.41.032.662-.126.252-.189.41-.378.63-.189.22-.398.493-.567.662-.189.189-.386.394-.166.772.221.378.98 1.617 2.104 2.619 1.446 1.289 2.665 1.689 3.043 1.878.378.189.599.158.819-.094.221-.252.945-1.102 1.197-1.48.252-.378.504-.315.85-.189.346.126 2.203 1.039 2.581 1.228.378.189.63.284.725.441.094.158.094.914-.221 1.8z" />
                </svg>
              </a>

              <a
                href={GOOGLE_MAPS_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Reviews"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-[#F3F4F6] hover:scale-110 transition-transform shadow-md border border-black/10"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>

              <a
                href={PHONE_HREF}
                aria-label={`Call ${PHONE_NUMBER}`}
                className="w-11 h-11 rounded-full flex items-center justify-center bg-[#0D9488] text-white hover:scale-110 transition-transform shadow-md"
              >
                <Phone size={20} />
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
                  <Link to="/faq" className="hover:text-white transition-colors">
                    FAQ
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

            {/* DIRECT CONTACT */}
            <div>
              <h3 className="text-[13px] font-[800] uppercase tracking-wider text-white mb-4">
                DIRECT CONTACT
              </h3>
              <ul className="flex flex-col gap-2.5 text-[14px] font-[600] text-[#D4D4D0]">
                <li>
                  <a href={PHONE_HREF} className="hover:text-white transition-colors">
                    {PHONE_NUMBER}
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    WhatsApp Message
                  </a>
                </li>
                <li>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Facebook Page
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Request a Quote
                  </Link>
                </li>
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
            className="text-[13px] font-[800] text-white hover:text-[#2DD4BF] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-[13px] font-[800] text-white hover:text-[#2DD4BF] transition-colors"
          >
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
