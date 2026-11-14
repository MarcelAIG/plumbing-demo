import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TrustBar, CTABand } from '../components/Layout';
import { SERVICES } from '../data/services';
import { BUSINESS_NAME } from '../config';

export function Services() {
  return (
    <>
      <Helmet>
        <title>{`Handyman Services | ${BUSINESS_NAME}`}</title>
        <meta
          name="description"
          content="Plumbing works, carpentry, electrical & lighting, and garden & yard work across Larnaca and Limassol districts, Cyprus."
        />
      </Helmet>

      {/* 7.1 Compact Hero */}
      <section className="bg-[#1A1A1A] pt-[124px] pb-[80px] lg:pt-[140px] lg:pb-[100px] px-4 text-center min-h-[340px] lg:min-h-[420px] flex flex-col justify-center items-center">
        <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#2DD4BF]">WHAT WE HANDLE</span>
        <h1 className="text-[42px] lg:text-[52px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.1] mt-2 max-w-[800px]">
          Practical repairs, assembly &amp; home maintenance.
        </h1>
        <p className="text-[18px] text-[#9C9C96] max-w-[620px] mt-4 leading-[1.6]">
          Covering plumbing works, carpentry, electrical &amp; lighting, and garden &amp; yard work across Larnaca and Limassol.
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
                {s.included.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-[#F5F5F0]">
                    <span className="text-[#2DD4BF] shrink-0 mt-0.5">■</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="bg-[#0D9488] text-white font-[800] px-4 py-2 text-[13px] tracking-wide uppercase rounded-[2px]">
                  {s.estimateInfo.label}: {s.estimateInfo.detail}
                </div>
                <Link to={`/services/${s.id}`} className="text-[16px] font-[600] text-[#F5F5F0] hover:text-[#2DD4BF] underline transition-colors shrink-0">
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
