import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TrustBar, CTABand } from '../components/Layout';
import { SERVICE_DISTRICTS } from '../data/neighborhoods';
import { MapPin } from 'lucide-react';
import { BUSINESS_NAME, GOOGLE_MAPS_REVIEW_URL, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GREEK_IDENTITY } from '../config';

export function ServiceAreas() {
  return (
    <>
      <Helmet>
        <title>{`Service Areas — Larnaca & Limassol | ${BUSINESS_NAME}`}</title>
        <meta
          name="description"
          content="Handyman services across the Larnaca and Limassol districts in Cyprus. Call +357 97 608803 to confirm availability for your area."
        />
      </Helmet>

      {/* 9.1 Compact Hero */}
      <section className="bg-[#1A1A1A] pt-[124px] pb-[80px] lg:pt-[140px] lg:pb-[100px] px-4 text-center min-h-[340px] lg:min-h-[420px] flex flex-col justify-center items-center">
        <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#2DD4BF]">AREAS COVERED</span>
        <h1 className="text-[42px] lg:text-[52px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.1] mt-2 max-w-[800px]">
          Serving Larnaca &amp; Limassol Districts.
        </h1>
        <p className="text-[18px] text-[#9C9C96] max-w-[620px] mt-4 leading-[1.6]">
          Practical indoor and outdoor handyman services across both the Larnaca and Limassol districts in Cyprus.
        </p>
      </section>

      <TrustBar />

      {/* 9.3 Areas Grid */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICE_DISTRICTS.map((n) => (
            <Link key={n.id} to={`/service-areas/${n.id}`} className="bg-[#1A1A1A] border border-white/10 rounded-[2px] p-[28px] hover:border-[#0D9488] transition-colors flex flex-col group block">
              <MapPin className="text-[#2DD4BF] mb-4" size={28} />
              <h3 className="text-[22px] lg:text-[26px] font-[700] font-oswald text-[#F5F5F0] uppercase leading-[1.1] mb-3">{n.title}</h3>
              <div className="bg-[#242424] text-[#F5F5F0] font-[600] text-[14px] px-3 py-1.5 rounded-[2px] self-start border border-white/5 mb-6">
                {n.subtitle}
              </div>
              <span className="text-[15px] font-[600] text-[#2DD4BF] mt-auto">View {n.title} details &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 9.4 Coverage Map */}
      <section className="bg-[#1A1A1A] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mb-8 text-center">Larnaca &amp; Limassol Coverage Map</h2>

          <div className="w-full max-w-[900px] aspect-video bg-[#242424] border border-white/10 rounded-[4px] relative overflow-hidden">
            <iframe
              title="Larnaca and Limassol Districts Coverage Map"
              src="https://maps.google.com/maps?ll=34.80,33.32&z=10&ie=UTF8&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-3 left-3 bg-white rounded-[2px] shadow-md px-3.5 py-2.5 max-w-[260px] text-left">
              <div className="text-[13px] font-[700] text-[#202124] leading-tight">{BUSINESS_NAME}</div>
              <div className="text-[11px] font-[600] text-[#5f6368] mt-0.5">{GREEK_IDENTITY}</div>
              <div className="text-[12px] font-[700] text-[#1a73e8] mt-1">
                {GOOGLE_RATING} / 5 ({GOOGLE_REVIEW_COUNT} reviews) &middot;{' '}
                <a href={GOOGLE_MAPS_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="underline">
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
