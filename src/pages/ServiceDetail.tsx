import { Helmet } from 'react-helmet-async';
import { useParams, Navigate, Link } from 'react-router-dom';
import { TrustBar, CTABand } from '../components/Layout';
import { SERVICES } from '../data/services';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

export function ServiceDetail() {
  const { serviceId } = useParams();
  const service = SERVICES.find(s => s.id === serviceId);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = SERVICES.filter(s => service.related.includes(s.id));

  return (
    <>
      <Helmet>
        <title>{service.title} — Emergency Plumber | Ironclad Plumbing</title>
        <meta name="description" content={service.shortDesc} />
      </Helmet>

      {/* 8.1.1 Compact Hero */}
      <section className="w-full bg-[#1A1A1A] min-h-[480px] flex items-center px-4 py-16">
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#FFC300]">{service.hero.eyebrow}</span>
            <h1 className="text-[42px] lg:text-[60px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.05] mt-2">
              {service.hero.h1}
            </h1>
            <p className="text-[18px] text-[#F5F5F0]/85 mt-4 leading-[1.6]">
              {service.hero.sub}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:5552020199" className="bg-[#D64541] text-white font-[800] px-8 py-4 rounded-[2px] text-center uppercase tracking-wide">
                Call 555-202-0199
              </a>
            </div>
            
            <div className="mt-8 text-[13px] font-[800] uppercase tracking-[0.1em] text-[#FFC300] flex flex-wrap items-center gap-2">
              {service.hero.trustChips.map((chip, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span>{chip}</span>
                  {i < service.hero.trustChips.length - 1 && <span className="text-[#F5F5F0]">&middot;</span>}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden lg:block h-full min-h-[400px] bg-[#242424] rounded-[4px] relative overflow-hidden">
             {/* Placeholder for distinct service image */}
             <img src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover opacity-70" alt={service.title} />
          </div>
        </div>
      </section>

      {/* 8.1.2 What's included */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">What's included</h2>
            <div className="w-16 h-1 bg-[#FFC300] mt-6" />
          </div>
          <ul className="flex flex-col gap-5">
            {service.included.map((item, i) => (
              <li key={i} className="flex gap-4 text-[17px] text-[#F5F5F0] items-start">
                <Check className="text-[#FFC300] shrink-0 mt-0.5" size={24} />
                <span className="leading-[1.6]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8.1.3 Emergency pricing */}
      <section className="bg-[#FFC300] py-[70px] lg:py-[100px] px-4 text-center">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#1A1A1A] font-oswald leading-[1.1]">Emergency Pricing</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-[40px]">
            <div className="bg-[#1A1A1A] text-[#FFC300] font-[800] px-6 py-4 rounded-[2px] uppercase tracking-wide text-[15px]">{service.pricing.callout}</div>
            <div className="bg-[#1A1A1A] text-[#FFC300] font-[800] px-6 py-4 rounded-[2px] uppercase tracking-wide text-[15px]">{service.pricing.extra}</div>
            <div className="bg-[#1A1A1A] text-[#FFC300] font-[800] px-6 py-4 rounded-[2px] uppercase tracking-wide text-[15px]">{service.pricing.note}</div>
          </div>
          <p className="text-[17px] font-[600] text-[#1A1A1A] mt-8">Fixed rate confirmed before dispatch. No on-arrival surprises.</p>
        </div>
      </section>

      {/* 8.1.4 How it works */}
      <section className="bg-[#1A1A1A] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#FFC300]">ON-SITE PROCESS</span>
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mt-2">How it works.</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-[60px]">
            {service.howItWorks.map((step, i) => (
              <div key={i} className="flex flex-col gap-3">
                <span className="text-[20px] lg:text-[26px] font-[700] font-oswald text-[#FFC300]">{step.step}</span>
                <p className="text-[16px] text-[#9C9C96] leading-[1.6]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8.1.5 FAQ */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Specifics for this emergency</h2>
          </div>
          
          <div className="mt-[60px] flex flex-col gap-4">
            {service.faqs.map((faq, i) => (
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
        </div>
      </section>

      {/* 8.1.6 Related services */}
      <section className="bg-[#1A1A1A] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[26px] lg:text-[30px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mb-8">Related Emergencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map(rel => (
              <Link key={rel.id} to={`/services/${rel.id}`} className="bg-[#242424] p-6 border border-white/10 rounded-[4px] hover:border-[#FFC300] transition-colors flex flex-col gap-3">
                <h3 className="text-[20px] font-[700] font-oswald text-[#F5F5F0] uppercase">{rel.title}</h3>
                <span className="text-[#FFC300] text-[14px] font-[600] mt-auto">View service &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
