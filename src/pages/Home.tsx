import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TrustBar, CTABand } from '../components/Layout';
import { SERVICES } from '../data/services';
import { HOME_FAQS } from '../data/faqs';
import { NEIGHBORHOODS } from '../data/neighborhoods';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Emergency Plumber in Portland — 24/7 Dispatch | Ironclad Plumbing</title>
        <meta name="description" content="The fastest, most reliable emergency plumbing line in Portland. Real dispatchers, real trucks stocked and ready, average 30-minute response." />
      </Helmet>

      {/* 6.1 Hero */}
      <section className="relative w-full h-[90vh] min-h-[620px] max-h-[740px] flex items-end">
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#242424]">
          {/* Placeholder for documentary photo */}
          <img src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale" alt="Emergency plumbing truck rushing to a call" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/70 to-transparent bottom-0 h-full" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 lg:px-8 pb-[60px] lg:pb-[90px]">
          <div className="max-w-[640px]">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#FFC300] font-inter">24/7/365 EMERGENCY DISPATCH · PORTLAND</span>
            <h1 className="text-[42px] lg:text-[76px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-none tracking-[-0.01em] mt-2">
              Water's rising. We're already on the way.
            </h1>
            <p className="text-[17px] lg:text-[19px] text-[#F5F5F0]/85 max-w-[500px] mt-[20px] leading-[1.55]">
              Real dispatchers pick up in under 3 rings. Trucks stocked and ready. Average 30-minute response across Portland.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-[28px]">
              <a href="tel:5552020199" className="bg-[#D64541] text-white font-[800] px-8 py-4 rounded-[2px] text-center uppercase tracking-wide">
                Call 555-202-0199
              </a>
              <Link to="/contact" className="border-2 border-[#F5F5F0] text-[#F5F5F0] font-[800] px-8 py-4 rounded-[2px] text-center uppercase tracking-wide hover:bg-[#F5F5F0] hover:text-[#1A1A1A] transition-colors">
                Request dispatch online
              </Link>
            </div>
            
            <div className="mt-[32px] text-[13px] font-[800] uppercase tracking-[0.1em] text-[#FFC300] flex flex-wrap items-center gap-2">
              <span>24/7/365</span>
              <span className="text-[#F5F5F0]">&middot;</span>
              <span>30-MIN AVERAGE</span>
              <span className="text-[#F5F5F0]">&middot;</span>
              <span>LICENSED & INSURED</span>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* 6.3 Services Preview */}
      <section className="bg-[#1A1A1A] py-[90px] lg:py-[120px] px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center flex flex-col items-center">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#FFC300]">WHAT WE HANDLE</span>
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mt-2">Five emergencies. One number.</h2>
            <p className="text-[17px] lg:text-[18px] text-[#9C9C96] max-w-[600px] mt-4 leading-[1.6]">
              If it's spreading, flooding, or leaving you without heat or water — this is exactly what we do, every night of the year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[60px]">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-[#242424] border border-white/10 rounded-[4px] p-[32px] hover:border-[#FFC300] transition-colors flex flex-col">
                <h3 className="text-[20px] lg:text-[26px] font-[700] font-oswald text-[#F5F5F0]">{s.title}</h3>
                <p className="text-[16px] text-[#9C9C96] mt-3 leading-[1.6] flex-grow">{s.shortDesc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-[40px]">
            <Link to="/services" className="text-[16px] font-[600] text-[#FFC300] hover:underline">See all services &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 6.4 How Dispatch Works */}
      <section className="bg-[#242424] py-[90px] lg:py-[120px] px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#FFC300]">HOW IT WORKS</span>
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mt-2">Three steps. No delays.</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-[60px]">
            <div className="flex flex-col gap-3">
              <span className="text-[20px] lg:text-[26px] font-[700] font-oswald text-[#FFC300]">Step 01 &middot; Call</span>
              <p className="text-[16px] text-[#9C9C96] leading-[1.6]">A real dispatcher answers, day or night. Describe what's happening — we already know what truck to send.</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[20px] lg:text-[26px] font-[700] font-oswald text-[#FFC300]">Step 02 &middot; Confirm ETA</span>
              <p className="text-[16px] text-[#9C9C96] leading-[1.6]">You get a fixed emergency-rate quote and a confirmed arrival window before anyone drives over.</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[20px] lg:text-[26px] font-[700] font-oswald text-[#FFC300]">Step 03 &middot; Stop the damage</span>
              <p className="text-[16px] text-[#9C9C96] leading-[1.6]">A fully stocked plumber arrives, stabilizes the situation first, then completes the repair.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 Emergency-Rate Pricing */}
      <section className="bg-[#FFC300] py-[90px] lg:py-[120px] px-4 text-center">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#1A1A1A]">NO SURPRISE BILLING</span>
          <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#1A1A1A] font-oswald leading-[1.1] mt-2 max-w-[800px]">
            You'll know the price before the truck leaves the yard.
          </h2>
          <p className="text-[17px] lg:text-[18px] text-[#1A1A1A]/85 max-w-[640px] mt-4 leading-[1.6]">
            Emergency-rate pricing is fixed and quoted on the phone — not estimated on arrival, not padded for showing up at 2am beyond our stated after-hours rate.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-[40px]">
            <div className="bg-[#1A1A1A] text-[#FFC300] font-[800] px-6 py-3 rounded-[2px] uppercase tracking-wide text-[14px]">Standard emergency call-out: $250</div>
            <div className="bg-[#1A1A1A] text-[#FFC300] font-[800] px-6 py-3 rounded-[2px] uppercase tracking-wide text-[14px]">After-hours (10pm–6am): $250</div>
            <div className="bg-[#1A1A1A] text-[#FFC300] font-[800] px-6 py-3 rounded-[2px] uppercase tracking-wide text-[14px]">Call-out fee applied to final invoice</div>
          </div>
        </div>
      </section>

      {/* 6.6 Track Record */}
      <section className="bg-[#1A1A1A] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#FFC300]">OUR TRACK RECORD</span>
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mt-2">Numbers, not adjectives.</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-[60px]">
            <div className="bg-[#242424] p-8 text-center rounded-[4px] border border-white/5">
              <div className="text-[40px] lg:text-[56px] font-[800] text-[#F5F5F0] font-oswald leading-none">30 MIN</div>
              <div className="text-[16px] text-[#9C9C96] font-[600] mt-2">avg response</div>
            </div>
            <div className="bg-[#242424] p-8 text-center rounded-[4px] border border-white/5">
              <div className="text-[40px] lg:text-[56px] font-[800] text-[#F5F5F0] font-oswald leading-none">3,400+</div>
              <div className="text-[16px] text-[#9C9C96] font-[600] mt-2">emergencies handled</div>
            </div>
            <div className="bg-[#242424] p-8 text-center rounded-[4px] border border-white/5">
              <div className="text-[40px] lg:text-[56px] font-[800] text-[#F5F5F0] font-oswald leading-none">24/7</div>
              <div className="text-[16px] text-[#9C9C96] font-[600] mt-2">every day, no exceptions</div>
            </div>
            <div className="bg-[#242424] p-8 text-center rounded-[4px] border border-white/5">
              <div className="text-[40px] lg:text-[56px] font-[800] text-[#F5F5F0] font-oswald leading-none">4.9<span className="text-[#FFC300]">★</span></div>
              <div className="text-[16px] text-[#9C9C96] font-[600] mt-2">average rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.7 FAQ */}
      <section className="bg-[#242424] py-[90px] lg:py-[120px] px-4">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center flex flex-col items-center">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#FFC300]">COMMON QUESTIONS</span>
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mt-2">What people ask before they call.</h2>
          </div>
          
          <div className="mt-[60px] flex flex-col gap-4">
            {HOME_FAQS.map((faq, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-white/10 rounded-[4px]">
                <button 
                  className="w-full text-left px-6 py-5 flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="text-[16px] font-[700] text-[#F5F5F0] pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="text-[#FFC300] shrink-0" /> : <ChevronDown className="text-[#FFC300] shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-0 text-[16px] text-[#9C9C96] leading-[1.6]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-[32px]">
            <Link to="/faq" className="text-[16px] font-[600] text-[#FFC300] hover:underline">See the full FAQ &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 6.8 Reviews */}
      <section className="bg-[#1A1A1A] py-[90px] lg:py-[120px] px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#FFC300]">WHAT PEOPLE SAY</span>
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mt-2">510+ real reviews.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-[60px]">
            <div className="bg-[#242424] p-8 border border-white/10 rounded-[4px]">
              <p className="text-[16px] text-[#F5F5F0] leading-[1.6] italic">"Basement was flooding at 1am. They picked up on the second ring, quoted a fixed price, and had a truck at my door in 25 minutes."</p>
              <div className="mt-6 text-[14px] text-[#9C9C96]">
                <span className="font-[700] text-[#F5F5F0]">Marcus T.</span> &middot; Riverside &middot; Flood extraction &middot; April 2026
              </div>
            </div>
            <div className="bg-[#242424] p-8 border border-white/10 rounded-[4px]">
              <p className="text-[16px] text-[#F5F5F0] leading-[1.6] italic">"Sewer backed up into the kitchen on Thanksgiving. They didn't flinch, handled the mess professionally, fixed the root cause same visit."</p>
              <div className="mt-6 text-[14px] text-[#9C9C96]">
                <span className="font-[700] text-[#F5F5F0]">Dana W.</span> &middot; Oakwood &middot; Sewer emergency &middot; November 2025
              </div>
            </div>
            <div className="bg-[#242424] p-8 border border-white/10 rounded-[4px]">
              <p className="text-[16px] text-[#F5F5F0] leading-[1.6] italic">"Furnace and hot water died during a cold snap. Had heat back by midnight. Genuinely saved our pipes from freezing."</p>
              <div className="mt-6 text-[14px] text-[#9C9C96]">
                <span className="font-[700] text-[#F5F5F0]">Ray H.</span> &middot; Highland Park &middot; No heat emergency &middot; January 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.9 Service Areas Preview */}
      <section className="bg-[#242424] py-[90px] lg:py-[120px] px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center flex flex-col items-center">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#FFC300]">AREAS WE COVER</span>
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mt-2">Dispatched across Portland.</h2>
            <p className="text-[17px] text-[#9C9C96] max-w-[560px] mt-4 leading-[1.6]">
              We run trucks through these neighborhoods every night. If yours isn't listed, call anyway — we're probably close.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-[60px] max-w-[900px] mx-auto">
            {NEIGHBORHOODS.map(n => (
              <Link key={n.id} to={`/service-areas/${n.id}`} className="bg-[#1A1A1A] border border-[#FFC300]/30 hover:border-[#FFC300] text-[#F5F5F0] font-[700] px-6 py-4 rounded-[4px] transition-colors">
                {n.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
