import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Clock, ShieldCheck, Truck, Star, Phone } from 'lucide-react';
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
      <div className="flex flex-col min-h-screen bg-[#1A1A1A] text-[#F5F5F0]">
        
        {/* 5.2 Main Navigation */}
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#1A1A1A]/80 backdrop-blur-md border-b border-white/5 shadow-lg' 
            : 'bg-[#1A1A1A]/0'
        }`}>
          <div className="w-full max-w-[1280px] mx-auto h-[64px] lg:h-[80px] px-4 lg:px-8 flex items-center justify-between">
            <Link to="/" className="flex items-center -ml-5 lg:-ml-[48px]" aria-label="Home">
            <Logo className="w-24 lg:w-32" />
          </Link>
          
          <div className="hidden lg:flex items-center gap-6">
            <NavLink to="/">Home</NavLink>
            
            <div className="relative group h-[80px] flex items-center">
              <NavLink to="/services">Services</NavLink>
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
              <NavLink to="/service-areas">Service Areas</NavLink>
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
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:6504871907" className="bg-[#F2131A] text-[#F5F5F0] font-[800] text-[15px] px-[20px] py-[13px] rounded-[2px] tracking-wide hover:bg-[#D91117] active:scale-[0.98] transition-all flex items-center gap-2 border-2 border-[#F2131A]">
              <Phone size={18} />
              (650) 487-1907
            </a>
            <Link to="/contact" className="bg-[#1F46B4] text-white font-[800] text-[14px] px-[28px] py-[14px] border-2 border-[#1F46B4] rounded-[2px] uppercase tracking-wide hover:bg-transparent hover:text-[#1F46B4] transition-colors">
              REQUEST SERVICE
            </Link>
          </div>

          <button className="lg:hidden text-[#F5F5F0]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-[#1A1A1A] pt-[80px] px-6 flex flex-col gap-6 overflow-y-auto pb-10">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/services">Services</MobileNavLink>
            <MobileNavLink to="/service-areas">Service Areas</MobileNavLink>
            <MobileNavLink to="/about">About</MobileNavLink>
            <MobileNavLink to="/faq">FAQ</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
            <div className="mt-8 flex flex-col gap-4">
              <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="w-full text-center bg-[#F2131A] text-[#F5F5F0] font-[800] text-[16px] py-4 rounded-[2px] uppercase hover:bg-[#D91117] active:scale-[0.98] transition-all">
                CALL NOW
              </a>
              <Link to="/contact" className="w-full text-center border-2 border-[#F5F5F0] text-[#F5F5F0] font-[800] text-[16px] py-4 rounded-[2px] uppercase hover:bg-[#F5F5F0] hover:text-[#1A1A1A] transition-colors">
                REQUEST SERVICE
              </Link>
            </div>
          </div>
        )}

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

function NavLink({ to, children }: { to: string, children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isActive = pathname === to || (to !== '/' && pathname.startsWith(to));
  return (
    <Link to={to} className={`text-[16px] font-[600] ${isActive ? 'text-[#1F46B4] border-b-2 border-[#1F46B4]' : 'text-[#F5F5F0] hover:text-[#1F46B4]'} pb-1 transition-colors`}>
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
        <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-[36px] lg:text-[56px] font-[800] text-[#F2131A] mt-8 hover:text-[#D91117] transition-colors">
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
  return (
    <footer className="w-full bg-[#1A1A1A] text-[#F5F5F0] py-[48px] lg:py-[90px] border-t-2 border-[#1F46B4] px-4 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center -ml-2 lg:-ml-4">
              <Logo className="w-32" />
            </div>
            <p className="text-[14px] text-[#9C9C96] max-w-[240px]">
              Emergency plumbing dispatch across Portland. Trucks stocked, dispatchers ready.
            </p>
            <div className="border border-[#1F46B4] px-3 py-1 mt-2 inline-block self-start">
              <span className="font-mono text-[12px] text-[#F5F5F0]">LICENSED · INSURED · MASTER PLUMBER #MP-78291</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#1F46B4]">SERVICES</span>
            <Link to="/services/burst-pipe-repair" className="text-[15px] hover:text-[#1F46B4]">Burst pipe repair</Link>
            <Link to="/services/sewer-backup-emergency" className="text-[15px] hover:text-[#1F46B4]">Sewer backup emergency</Link>
            <Link to="/services/no-heat-no-hot-water" className="text-[15px] hover:text-[#1F46B4]">No heat / no hot water</Link>
            <Link to="/services/flood-water-extraction" className="text-[15px] hover:text-[#1F46B4]">Flood water extraction</Link>
            <Link to="/services/emergency-drain-clearing" className="text-[15px] hover:text-[#1F46B4]">Emergency drain clearing</Link>
            <Link to="/services" className="text-[15px] text-[#1F46B4] font-[600] mt-2">View all services &rarr;</Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#1F46B4]">AREAS COVERED</span>
            <Link to="/service-areas/downtown" className="text-[15px] hover:text-[#1F46B4]">Downtown</Link>
            <Link to="/service-areas/riverside" className="text-[15px] hover:text-[#1F46B4]">Riverside</Link>
            <Link to="/service-areas/oakwood" className="text-[15px] hover:text-[#1F46B4]">Oakwood</Link>
            <Link to="/service-areas/highland-park" className="text-[15px] hover:text-[#1F46B4]">Highland Park</Link>
            <Link to="/service-areas/eastside" className="text-[15px] hover:text-[#1F46B4]">Eastside</Link>
            <Link to="/service-areas/westgate" className="text-[15px] hover:text-[#1F46B4]">Westgate</Link>
            <Link to="/service-areas" className="text-[15px] text-[#1F46B4] font-[600] mt-2">View all areas &rarr;</Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#1F46B4]">GET IN TOUCH</span>
            <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="text-[24px] font-[800] text-[#F2131A] hover:text-[#D91117] transition-colors">CALL NOW</a>
            <div className="text-[15px] text-[#9C9C96] mt-2 flex flex-col gap-1">
              <span>dispatch@ironcladplumbing.com</span>
              <span>1420 NW Industrial St, Portland, OR 97209</span>
            </div>
          </div>
        </div>

        <div className="mt-[48px] pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-[#9C9C96]">
          <div>&copy; {new Date().getFullYear()} SOLO Plumbing & Heating, Inc.</div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
