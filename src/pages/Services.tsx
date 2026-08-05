import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TrustBar, CTABand } from '../components/Layout';
import { SERVICES } from '../data/services';

export function Services() {
  return (
    <>
      <Helmet>
        <title>Emergency Plumbing Services — 24/7 Dispatch | Ironclad Plumbing</title>
        <meta name="description" content="We handle five core plumbing emergencies across Portland: Burst pipes, sewer backups, flooding, no heat, and emergency drain clearing." />
      </Helmet>

      {/* 7.1 Compact Hero */}
      <section className="bg-[#1A1A1A] py-[80px] lg:py-[100px] px-4 text-center min-h-[340px] lg:min-h-[420px] flex flex-col justify-center items-center">
        <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#FFC300]">WHAT WE HANDLE</span>
        <h1 className="text-[42px] lg:text-[52px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.1] mt-2 max-w-[800px]">
          Five emergencies. Every truck, every night.
        </h1>
        <p className="text-[18px] text-[#9C9C96] max-w-[600px] mt-4 leading-[1.6]">
          Every emergency plumber on our team can handle all five. Click through for exactly what happens on-site.
        </p>
      </section>

      <TrustBar />

      {/* 7.3 Expanded Service Cards */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <div key={s.id} className="bg-[#1A1A1A] border border-white/10 rounded-[4px] p-[32px] flex flex-col">
              <h2 className="text-[26px] lg:text-[30px] font-[700] font-oswald text-[#F5F5F0] uppercase">{s.title}</h2>
              <p className="text-[16px] text-[#9C9C96] mt-4 leading-[1.6] flex-grow">{s.shortDesc}</p>
              
              <ul className="mt-6 flex flex-col gap-3">
                {s.included.slice(0, 5).map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-[#F5F5F0]">
                    <span className="text-[#FFC300] shrink-0 mt-0.5">■</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="bg-[#FFC300] text-[#1A1A1A] font-[800] px-4 py-2 text-[13px] tracking-wide uppercase rounded-[2px]">
                  {s.pricing.callout.split(':')[0]}: {s.pricing.callout.split(':')[1]} &middot; Fixed on the call
                </div>
                <Link to={`/services/${s.id}`} className="text-[16px] font-[600] text-[#F5F5F0] hover:text-[#FFC300] underline transition-colors shrink-0">
                  See full details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
