import { Helmet } from 'react-helmet-async';
import { Wrench, Droplets, Lightbulb, Trees } from 'lucide-react';
import { CTABand } from '../components/Layout';
import {
  BUSINESS_NAME,
  GREEK_IDENTITY,
  PHONE_NUMBER,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  FACEBOOK_URL,
} from '../config';

export function About() {
  return (
    <>
      <Helmet>
        <title>{`About Us | ${BUSINESS_NAME}`}</title>
        <meta
          name="description"
          content={`${BUSINESS_NAME} (${GREEK_IDENTITY}) provides plumbing works, carpentry, electrical & lighting, and garden & yard work across Larnaca and Limassol districts, Cyprus.`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: BUSINESS_NAME,
            alternateName: GREEK_IDENTITY,
            telephone: PHONE_NUMBER,
            areaServed: 'Larnaca and Limassol districts, Cyprus',
            sameAs: [FACEBOOK_URL],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: GOOGLE_RATING,
              reviewCount: String(GOOGLE_REVIEW_COUNT),
            },
          })}
        </script>
      </Helmet>

      {/* 11.1 Hero */}
      <section className="w-full bg-[#1A1A1A] min-h-[500px] flex items-center px-4 pt-[104px] pb-16 lg:pt-[120px]">
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 items-center">
          <div>
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#2DD4BF]">ABOUT US</span>
            <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.08] mt-2">
              {BUSINESS_NAME}
            </h1>
            <p className="text-[15px] font-[700] text-[#F59E0B] mt-2">
              {GREEK_IDENTITY}
            </p>
            <p className="text-[18px] text-[#F5F5F0]/85 mt-4 leading-[1.6]">
              From plumbing repairs and furniture assembly to lighting installations and outdoor maintenance across the Larnaca and Limassol districts in Cyprus.
            </p>
          </div>
          <div className="h-full min-h-[400px] bg-[#242424] rounded-[4px] relative overflow-hidden flex items-center justify-center">
            <img
              src="/client-assets/portfolio/pergola-string-lights-view-1.png"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
              alt="Pergola decorative lighting installation by Handyman Larnaca and Limassol District"
            />
          </div>
        </div>
      </section>

      {/* 11.2 Overview */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[800px] mx-auto text-[17px] text-[#F5F5F0]/90 leading-[1.65] flex flex-col gap-6">
          <p>
            {BUSINESS_NAME} ({GREEK_IDENTITY}) helps homeowners and residents across the Larnaca and Limassol districts stay on top of everyday repairs, installations, and general property upkeep.
          </p>
          <p>
            Small jobs often make the biggest difference in how a home looks and functions—whether that means replacing a corroded bathroom basin faucet, assembling outdoor storage furniture, securely mounting a ceiling light fixture, or tidying up a garden and fence.
          </p>
          <p>
            With a {GOOGLE_RATING} / 5 rating from {GOOGLE_REVIEW_COUNT} Google reviews, we focus on straightforward communication, tidy workmanship, and practical solutions for indoor and outdoor tasks.
          </p>
        </div>
      </section>

      {/* 11.3 Core Capabilities */}
      <section className="bg-[#1A1A1A] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#242424] border border-white/5 p-6 rounded-[2px] flex items-center gap-4">
            <div className="w-12 h-12 bg-[#1A1A1A] text-[#2DD4BF] flex items-center justify-center rounded-full shrink-0"><Droplets size={20} /></div>
            <span className="text-[16px] font-[700] text-[#F5F5F0]">Plumbing Works — faucets, sinks &amp; minor plumbing</span>
          </div>
          <div className="bg-[#242424] border border-white/5 p-6 rounded-[2px] flex items-center gap-4">
            <div className="w-12 h-12 bg-[#1A1A1A] text-[#2DD4BF] flex items-center justify-center rounded-full shrink-0"><Wrench size={20} /></div>
            <span className="text-[16px] font-[700] text-[#F5F5F0]">Carpentry — assembly, cabinets, drawers &amp; parquet</span>
          </div>
          <div className="bg-[#242424] border border-white/5 p-6 rounded-[2px] flex items-center gap-4">
            <div className="w-12 h-12 bg-[#1A1A1A] text-[#F59E0B] flex items-center justify-center rounded-full shrink-0"><Lightbulb size={20} /></div>
            <span className="text-[16px] font-[700] text-[#F5F5F0]">Electrical &amp; Lighting — fixtures, switches, sockets &amp; decorative lighting</span>
          </div>
          <div className="bg-[#242424] border border-white/5 p-6 rounded-[2px] flex items-center gap-4">
            <div className="w-12 h-12 bg-[#1A1A1A] text-[#2DD4BF] flex items-center justify-center rounded-full shrink-0"><Trees size={20} /></div>
            <span className="text-[16px] font-[700] text-[#F5F5F0]">Garden &amp; Yard Work — cleaning, weeding, pruning &amp; fencing</span>
          </div>
        </div>
      </section>

      {/* 11.4 Core Commitments */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mb-12">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1A1A1A] p-8 border-t-4 border-[#0D9488] rounded-[2px]">
              <span className="text-[18px] lg:text-[20px] font-[700] font-oswald text-[#F5F5F0] uppercase leading-[1.2]">Direct phone &amp; message contact.</span>
            </div>
            <div className="bg-[#1A1A1A] p-8 border-t-4 border-[#0D9488] rounded-[2px]">
              <span className="text-[18px] lg:text-[20px] font-[700] font-oswald text-[#F5F5F0] uppercase leading-[1.2]">Clear scope agreed before starting.</span>
            </div>
            <div className="bg-[#1A1A1A] p-8 border-t-4 border-[#F59E0B] rounded-[2px]">
              <span className="text-[18px] lg:text-[20px] font-[700] font-oswald text-[#F5F5F0] uppercase leading-[1.2]">Indoor &amp; outdoor jobs welcome.</span>
            </div>
            <div className="bg-[#1A1A1A] p-8 border-t-4 border-[#0D9488] rounded-[2px]">
              <span className="text-[18px] lg:text-[20px] font-[700] font-oswald text-[#F5F5F0] uppercase leading-[1.2]">Serving Larnaca &amp; Limassol districts.</span>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
