import { Helmet } from 'react-helmet-async';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CTABand } from '../components/Layout';
import { NEIGHBORHOODS } from '../data/neighborhoods';

export function NeighborhoodDetail() {
  const { areaId } = useParams();
  const neighborhood = NEIGHBORHOODS.find(n => n.id === areaId);

  if (!neighborhood) {
    return <Navigate to="/service-areas" replace />;
  }

  const nearby = NEIGHBORHOODS.filter(n => neighborhood.nearby.includes(n.id));

  return (
    <>
      <Helmet>
        <title>Emergency Plumber in {neighborhood.title} — 24/7 Dispatch | SOLO Plumbing & Heating</title>
        <meta name="description" content={`Average response time: ${neighborhood.responseTime}. 24/7 emergency dispatch for ${neighborhood.title}.`} />
        {/* Placeholder for local business JSON-LD schema per neighborhood requirements */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SOLO Plumbing & Heating - ${neighborhood.title}",
              "areaServed": "${neighborhood.title}",
              "telephone": "555-202-0199"
            }
          `}
        </script>
      </Helmet>

      {/* 10.1.1 Hero */}
      <section className="w-full bg-[#1A1A1A] min-h-[500px] flex items-center px-4 pt-[104px] pb-16 lg:pt-[120px]">
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#1F46B4]">{neighborhood.hero.eyebrow}</span>
            <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.08] mt-2">
              {neighborhood.hero.h1}
            </h1>
            <p className="text-[18px] text-[#F5F5F0]/85 mt-4 leading-[1.6]">
              {neighborhood.hero.sub}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:5552020199" className="bg-[#F2131A] text-white font-[800] px-8 py-4 rounded-[2px] text-center uppercase tracking-wide hover:bg-[#D91117] active:scale-[0.98] transition-all">
                Call 555-202-0199
              </a>
            </div>
            
            <div className="mt-8 text-[13px] font-[800] uppercase tracking-[0.1em] text-[#1F46B4] flex flex-wrap items-center gap-2">
              {neighborhood.hero.trustChips.map((chip, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span>{chip}</span>
                  {i < neighborhood.hero.trustChips.length - 1 && <span className="text-[#F5F5F0]">&middot;</span>}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden lg:block h-full min-h-[400px] bg-[#242424] rounded-[4px] relative overflow-hidden">
             {/* Placeholder for local neighborhood photo */}
             <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover opacity-70" alt={neighborhood.title} />
          </div>
        </div>
      </section>

      {/* 10.1.2 Response Time & Local Context */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Response & Local Context</h2>
            <div className="w-16 h-1 bg-[#1F46B4] mt-6" />
          </div>
          <div className="flex flex-col gap-6 text-[17px] text-[#F5F5F0]/90 leading-[1.6]">
            {neighborhood.context.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 10.1.3 Common Emergencies Here */}
      <section className="bg-[#1A1A1A] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center flex flex-col items-center mb-12">
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Common Issues in {neighborhood.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhood.commonIssues.map((issue, i) => (
              <div key={i} className="bg-[#242424] border border-white/5 rounded-[4px] p-6 flex flex-col">
                <h3 className="text-[20px] font-[700] font-oswald text-[#F5F5F0] uppercase leading-[1.2]">{issue.title}</h3>
                <p className="text-[15px] text-[#9C9C96] mt-3 leading-[1.6]">{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10.1.4 Local Reviews */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-12">
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Local Reviews</h2>
            <div className="w-16 h-1 bg-[#1F46B4] mt-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {neighborhood.testimonials.map((test, i) => (
              <div key={i} className="bg-[#1A1A1A] p-8 border border-white/10 rounded-[4px]">
                <p className="text-[16px] text-[#F5F5F0] leading-[1.6] italic">"{test.quote}"</p>
                <div className="mt-6 text-[14px] text-[#9C9C96]">
                  <span className="font-[700] text-[#F5F5F0]">{test.author}</span> &middot; {test.location} &middot; {test.service} &middot; {test.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10.1.5 If It's Urgent Right Now */}
      <section className="bg-[#1F46B4] py-[70px] lg:py-[100px] px-4 text-center">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mb-12">If it's urgent right now</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-[48px] h-[48px] rounded-full bg-[#1A1A1A] text-[#1F46B4] flex items-center justify-center font-oswald font-[800] text-[24px]">1</div>
              <span className="text-[20px] lg:text-[24px] font-[700] font-oswald text-[#F5F5F0] uppercase mt-2">Shut off water</span>
              <p className="text-[16px] text-[#F5F5F0]/80 leading-[1.6]">Stop the flow at the nearest valve if possible.</p>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="w-[48px] h-[48px] rounded-full bg-[#1A1A1A] text-[#1F46B4] flex items-center justify-center font-oswald font-[800] text-[24px]">2</div>
              <span className="text-[20px] lg:text-[24px] font-[700] font-oswald text-[#F5F5F0] uppercase mt-2">Avoid hazards</span>
              <p className="text-[16px] text-[#F5F5F0]/80 leading-[1.6]">Keep clear of any electrical outlets near water.</p>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="w-[48px] h-[48px] rounded-full bg-[#1A1A1A] text-[#1F46B4] flex items-center justify-center font-oswald font-[800] text-[24px]">3</div>
              <span className="text-[20px] lg:text-[24px] font-[700] font-oswald text-[#F5F5F0] uppercase mt-2">Call us</span>
              <p className="text-[16px] text-[#F5F5F0]/80 leading-[1.6] font-[800]">555-202-0199</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10.1.6 Nearby Areas */}
      <section className="bg-[#1A1A1A] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto text-center">
          <h3 className="text-[20px] lg:text-[24px] font-[700] font-oswald text-[#F5F5F0] uppercase mb-8">Nearby Areas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {nearby.map(n => (
              <Link key={n.id} to={`/service-areas/${n.id}`} className="bg-[#242424] border border-white/10 hover:border-[#1F46B4] text-[#F5F5F0] font-[700] px-6 py-3 rounded-[2px] transition-colors uppercase text-[14px] tracking-wide">
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
