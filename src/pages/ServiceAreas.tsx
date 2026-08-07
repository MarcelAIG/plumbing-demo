import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TrustBar, CTABand } from '../components/Layout';
import { NEIGHBORHOODS } from '../data/neighborhoods';
import { MapPin } from 'lucide-react';

export function ServiceAreas() {
  return (
    <>
      <Helmet>
        <title>Service Areas — 24/7 Dispatch | SOLO Plumbing & Heating</title>
        <meta name="description" content="Dispatched across Portland, every night. Check out our six core neighborhoods and local response times." />
      </Helmet>

      {/* 9.1 Compact Hero */}
      <section className="bg-[#1A1A1A] py-[80px] lg:py-[100px] px-4 text-center min-h-[340px] lg:min-h-[420px] flex flex-col justify-center items-center">
        <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#1F46B4]">AREAS COVERED</span>
        <h1 className="text-[42px] lg:text-[52px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.1] mt-2 max-w-[800px]">
          Dispatched across Portland, every night.
        </h1>
        <p className="text-[18px] text-[#9C9C96] max-w-[600px] mt-4 leading-[1.6]">
          Six core neighborhoods, trucks running through all of them nightly. Click yours for local response times.
        </p>
      </section>

      <TrustBar />

      {/* 9.3 Areas Grid */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEIGHBORHOODS.map(n => (
            <Link key={n.id} to={`/service-areas/${n.id}`} className="bg-[#1A1A1A] border border-white/10 rounded-[2px] p-[28px] hover:border-[#1F46B4] transition-colors flex flex-col group block">
              <MapPin className="text-[#1F46B4] mb-4" size={28} />
              <h3 className="text-[20px] lg:text-[26px] font-[700] font-oswald text-[#F5F5F0] uppercase leading-[1.1] mb-3">{n.title}</h3>
              <div className="bg-[#242424] text-[#F5F5F0] font-[600] text-[14px] px-3 py-1.5 rounded-[2px] self-start border border-white/5 mb-6">
                {n.responseTime}
              </div>
              <span className="text-[15px] font-[600] text-[#1F46B4] mt-auto">See {n.title} page &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 9.4 Coverage Map */}
      <section className="bg-[#1A1A1A] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mb-8 text-center">Service Map</h2>
          
          <div className="w-full max-w-[900px] aspect-video bg-[#242424] border border-white/10 rounded-[4px] relative flex items-center justify-center overflow-hidden">
            {/* Map Placeholder */}
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" alt="Service area map" />
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 bg-[#1A1A1A] border border-white/10 p-4 rounded-[4px] flex gap-6 z-10 justify-center">
              <div className="flex items-center gap-2">
                <span className="text-[12px]">🟡</span>
                <span className="text-[14px] font-[600] text-[#F5F5F0]">20-min avg</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px]">🔴</span>
                <span className="text-[14px] font-[600] text-[#F5F5F0]">35-min avg</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
