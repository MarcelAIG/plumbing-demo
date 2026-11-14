import { Helmet } from 'react-helmet-async';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CTABand } from '../components/Layout';
import { SERVICE_DISTRICTS } from '../data/neighborhoods';
import { BUSINESS_NAME, PHONE_NUMBER, PHONE_HREF } from '../config';

export function NeighborhoodDetail() {
  const { areaId } = useParams();
  const district = SERVICE_DISTRICTS.find((n) => n.id === areaId);

  if (!district) {
    return <Navigate to="/service-areas" replace />;
  }

  const nearby = SERVICE_DISTRICTS.filter((n) => district.nearby.includes(n.id));

  return (
    <>
      <Helmet>
        <title>{`Handyman in ${district.title} | ${BUSINESS_NAME}`}</title>
        <meta
          name="description"
          content={`Handyman services in ${district.title}, Cyprus. Plumbing works, carpentry, electrical & lighting, and garden & yard maintenance. Call ${PHONE_NUMBER}.`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `${BUSINESS_NAME} — ${district.title}`,
            areaServed: `${district.title}, Cyprus`,
            telephone: PHONE_NUMBER,
          })}
        </script>
      </Helmet>

      {/* 10.1.1 Hero */}
      <section className="w-full bg-[#1A1A1A] min-h-[500px] flex items-center px-4 pt-[104px] pb-16 lg:pt-[120px]">
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#2DD4BF]">{district.hero.eyebrow}</span>
            <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.08] mt-2">
              {district.hero.h1}
            </h1>
            <p className="text-[18px] text-[#F5F5F0]/85 mt-4 leading-[1.6]">
              {district.hero.sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href={PHONE_HREF} className="bg-[#0D9488] text-white font-[800] px-8 py-4 rounded-[2px] text-center uppercase tracking-wide hover:bg-[#0F766E] active:scale-[0.98] transition-all">
                Call {PHONE_NUMBER}
              </a>
            </div>

            <div className="mt-8 text-[13px] font-[800] uppercase tracking-[0.1em] text-[#2DD4BF] flex flex-wrap items-center gap-2">
              {district.hero.trustChips.map((chip, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span>{chip}</span>
                  {i < district.hero.trustChips.length - 1 && <span className="text-[#F5F5F0]">&middot;</span>}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden lg:block h-full min-h-[400px] bg-[#242424] rounded-[4px] relative overflow-hidden">
            <img src="/client-assets/portfolio/pergola-string-lights-view-2.png" className="absolute inset-0 w-full h-full object-cover opacity-85" alt={district.title} />
          </div>
        </div>
      </section>

      {/* 10.1.2 Local Context */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">District Coverage</h2>
            <div className="w-16 h-1 bg-[#0D9488] mt-6" />
          </div>
          <div className="flex flex-col gap-6 text-[17px] text-[#F5F5F0]/90 leading-[1.6]">
            {district.context.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 10.1.3 Services Available Here */}
      <section className="bg-[#1A1A1A] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center flex flex-col items-center mb-12">
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Services in {district.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {district.commonServices.map((service, i) => (
              <div key={i} className="bg-[#242424] border border-white/5 rounded-[4px] p-6 flex flex-col">
                <h3 className="text-[20px] font-[700] font-oswald text-[#F5F5F0] uppercase leading-[1.2]">{service.title}</h3>
                <p className="text-[15px] text-[#9C9C96] mt-3 leading-[1.6]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10.1.5 Direct Contact Strip */}
      <section className="bg-[#0D9488] py-[70px] lg:py-[100px] px-4 text-center">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-white font-oswald leading-[1.1] mb-12">How to book a visit</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-[48px] h-[48px] rounded-full bg-[#1A1A1A] text-[#2DD4BF] flex items-center justify-center font-oswald font-[800] text-[24px]">1</div>
              <span className="text-[20px] lg:text-[24px] font-[700] font-oswald text-white uppercase mt-2">Share the job</span>
              <p className="text-[16px] text-white/85 leading-[1.6]">Describe the repair, assembly, or installation needed.</p>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="w-[48px] h-[48px] rounded-full bg-[#1A1A1A] text-[#2DD4BF] flex items-center justify-center font-oswald font-[800] text-[24px]">2</div>
              <span className="text-[20px] lg:text-[24px] font-[700] font-oswald text-white uppercase mt-2">Confirm area</span>
              <p className="text-[16px] text-white/85 leading-[1.6]">Let us know your location in Larnaca or Limassol district.</p>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="w-[48px] h-[48px] rounded-full bg-[#1A1A1A] text-[#2DD4BF] flex items-center justify-center font-oswald font-[800] text-[24px]">3</div>
              <span className="text-[20px] lg:text-[24px] font-[700] font-oswald text-white uppercase mt-2">Call us</span>
              <p className="text-[16px] text-white font-[800]">{PHONE_NUMBER}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10.1.6 Other District */}
      <section className="bg-[#1A1A1A] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto text-center">
          <h3 className="text-[20px] lg:text-[24px] font-[700] font-oswald text-[#F5F5F0] uppercase mb-8">Also Serving</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {nearby.map((n) => (
              <Link key={n.id} to={`/service-areas/${n.id}`} className="bg-[#242424] border border-white/10 hover:border-[#0D9488] text-[#F5F5F0] font-[700] px-6 py-3 rounded-[2px] transition-colors uppercase text-[14px] tracking-wide">
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
