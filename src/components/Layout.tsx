import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Clock, ShieldCheck, Truck, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen bg-[#1A1A1A] text-[#F5F5F0]">
        
        {/* 5.1 Sticky Top Emergency Bar */}
        <div className="sticky top-0 z-[60] h-[48px] bg-[#D64541] text-[#F5F5F0] flex items-center justify-center">
          <a href="tel:5552020199" className="w-full h-full flex items-center justify-center md:hidden px-4">
            <span className="text-[12px] font-[800] w-full text-right">TAP TO CALL NOW</span>
          </a>
          <div className="hidden md:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[16px] font-[800]">EMERGENCY? WE ANSWER 24/7/365 —</span>
            <a href="tel:5552020199" className="text-[20px] font-[800] underline">555-202-0199</a>
          </div>
        </div>

        {/* 5.2 Main Navigation */}
        <nav className="sticky top-[48px] z-50 h-[64px] lg:h-[80px] bg-[#1A1A1A] border-b-2 border-[#FFC300] px-4 lg:px-8 flex items-center justify-between">
          <Link to="/" className="text-[26px] font-[800] uppercase text-[#F5F5F0] font-oswald">Ironclad Plumbing</Link>
          
          <div className="hidden lg:flex items-center gap-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/service-areas">Service Areas</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className="hidden lg:block">
            <Link to="/contact" className="bg-[#FFC300] text-[#1A1A1A] font-[800] text-[14px] px-[28px] py-[14px] border-2 border-[#FFC300] rounded-[2px] uppercase tracking-wide hover:bg-transparent hover:text-[#FFC300] transition-colors">
              Dispatch me now
            </Link>
          </div>

          <button className="lg:hidden text-[#F5F5F0]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-[#1A1A1A] pt-[112px] px-6 flex flex-col gap-6 overflow-y-auto pb-10">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/services">Services</MobileNavLink>
            <MobileNavLink to="/service-areas">Service Areas</MobileNavLink>
            <MobileNavLink to="/about">About</MobileNavLink>
            <MobileNavLink to="/faq">FAQ</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
            <div className="mt-8 flex flex-col gap-4">
              <a href="tel:5552020199" className="w-full text-center bg-[#D64541] text-[#F5F5F0] font-[800] text-[16px] py-4 rounded-[2px] uppercase">
                Call 555-202-0199
              </a>
              <Link to="/contact" className="w-full text-center border-2 border-[#F5F5F0] text-[#F5F5F0] font-[800] text-[16px] py-4 rounded-[2px] uppercase">
                Request dispatch
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
    <Link to={to} className={`text-[16px] font-[600] ${isActive ? 'text-[#FFC300] border-b-2 border-[#FFC300]' : 'text-[#F5F5F0] hover:text-[#FFC300]'} pb-1 transition-colors`}>
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
        <TrustItem icon={<Clock className="text-[#FFC300]" size={24} />} title="30-min dispatch" sub="Average time to truck rolling" />
        <TrustItem icon={<ShieldCheck className="text-[#FFC300]" size={24} />} title="Licensed & insured" sub="Master Plumber License #MP-78291" />
        <TrustItem icon={<Truck className="text-[#FFC300]" size={24} />} title="Trucks stocked 24/7" sub="No 'we'll order the part' delays" />
        <TrustItem icon={<Star className="text-[#FFC300]" size={24} />} title="4.9 from 510+ reviews" sub="Google & Yelp verified" />
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
    <div className="w-full bg-[#FFC300] py-[70px] lg:py-[100px] px-4">
      <div className="max-w-[720px] mx-auto text-center flex flex-col items-center">
        <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#1A1A1A]">STILL AN EMERGENCY?</span>
        <h2 className="text-[30px] lg:text-[44px] font-[800] uppercase text-[#1A1A1A] mt-4 font-oswald leading-[1.1]">Every minute of flooding costs more.</h2>
        <p className="text-[18px] text-[#1A1A1A]/85 mt-4 max-w-[580px]">
          Dispatchers are standing by right now. Average truck-rolling time is 30 minutes across most of Portland.
        </p>
        <a href="tel:5552020199" className="text-[36px] lg:text-[56px] font-[800] text-[#D64541] mt-8">
          555-202-0199
        </a>
        <Link to="/contact" className="text-[16px] font-[600] text-[#1A1A1A]/80 underline mt-4 hover:text-[#1A1A1A]">
          Not urgent? Book a scheduled visit &rarr;
        </Link>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-[#F5F5F0] py-[48px] lg:py-[90px] border-t-2 border-[#FFC300] px-4 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="flex flex-col gap-4">
            <div className="text-[26px] font-[800] uppercase text-white font-oswald">Ironclad Plumbing</div>
            <p className="text-[14px] text-[#9C9C96] max-w-[240px]">
              24/7 emergency plumbing dispatch across Portland. Trucks stocked, dispatchers awake, always.
            </p>
            <div className="border border-[#FFC300] px-3 py-1 mt-2 inline-block self-start">
              <span className="font-mono text-[12px] text-[#F5F5F0]">LICENSED · INSURED · MASTER PLUMBER #MP-78291</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#FFC300]">SERVICES</span>
            <Link to="/services/burst-pipe-repair" className="text-[15px] hover:text-[#FFC300]">Burst pipe repair</Link>
            <Link to="/services/sewer-backup-emergency" className="text-[15px] hover:text-[#FFC300]">Sewer backup emergency</Link>
            <Link to="/services/no-heat-no-hot-water" className="text-[15px] hover:text-[#FFC300]">No heat / no hot water</Link>
            <Link to="/services/flood-water-extraction" className="text-[15px] hover:text-[#FFC300]">Flood water extraction</Link>
            <Link to="/services/emergency-drain-clearing" className="text-[15px] hover:text-[#FFC300]">Emergency drain clearing</Link>
            <Link to="/services" className="text-[15px] text-[#FFC300] font-[600] mt-2">View all services &rarr;</Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#FFC300]">AREAS COVERED</span>
            <Link to="/service-areas/downtown" className="text-[15px] hover:text-[#FFC300]">Downtown</Link>
            <Link to="/service-areas/riverside" className="text-[15px] hover:text-[#FFC300]">Riverside</Link>
            <Link to="/service-areas/oakwood" className="text-[15px] hover:text-[#FFC300]">Oakwood</Link>
            <Link to="/service-areas/highland-park" className="text-[15px] hover:text-[#FFC300]">Highland Park</Link>
            <Link to="/service-areas/eastside" className="text-[15px] hover:text-[#FFC300]">Eastside</Link>
            <Link to="/service-areas/westgate" className="text-[15px] hover:text-[#FFC300]">Westgate</Link>
            <Link to="/service-areas" className="text-[15px] text-[#FFC300] font-[600] mt-2">View all areas &rarr;</Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#FFC300]">GET IN TOUCH</span>
            <a href="tel:5552020199" className="text-[24px] font-[800] text-[#D64541]">555-202-0199</a>
            <div className="text-[15px] text-[#9C9C96] mt-2 flex flex-col gap-1">
              <span>dispatch@ironcladplumbing.com</span>
              <span>Dispatch: 24/7/365</span>
              <span>1420 NW Industrial St, Portland, OR 97209</span>
            </div>
          </div>
        </div>

        <div className="mt-[48px] pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-[#9C9C96]">
          <div>&copy; {new Date().getFullYear()} Ironclad Plumbing.</div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
