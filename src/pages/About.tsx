import { Helmet } from 'react-helmet-async';
import { Award, Shield, CheckCircle, Droplets, Clock, Target } from 'lucide-react';
import { CTABand } from '../components/Layout';

export function About() {
  return (
    <>
      <Helmet>
        <title>About Us — 24/7 Dispatch | Ironclad Plumbing</title>
        <meta name="description" content="A dispatch-first emergency plumbing operation serving Portland. Every truck stocked, every technician licensed, every dispatcher awake." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Ironclad Plumbing",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "510"
              }
            }
          `}
        </script>
      </Helmet>

      {/* 11.1 Hero */}
      <section className="w-full bg-[#1A1A1A] min-h-[500px] flex items-center px-4 py-16">
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 items-center">
          <div>
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#FFC300]">ABOUT IRONCLAD PLUMBING</span>
            <h1 className="text-[42px] lg:text-[60px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.05] mt-2">
              We built this for the 2am calls.
            </h1>
            <p className="text-[18px] text-[#F5F5F0]/85 mt-4 leading-[1.6]">
              A dispatch-first emergency plumbing operation serving Portland since 2014. Every truck stocked, every technician licensed, every dispatcher awake.
            </p>
          </div>
          <div className="h-full min-h-[400px] bg-[#242424] rounded-[4px] relative overflow-hidden flex items-center justify-center">
             <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover opacity-70" alt="Plumbing team" />
          </div>
        </div>
      </section>

      {/* 11.2 Our Story */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[800px] mx-auto text-[17px] text-[#F5F5F0]/90 leading-[1.6] flex flex-col gap-6">
          <p>
            We founded this business on a single frustration: the plumbing industry's failure to respond quickly when it actually mattered. Most "24/7" plumbers route you to a sleepy answering service that leaves a message for a technician who might call you back at 7am. When your basement is actively flooding, that's not good enough.
          </p>
          <p>
            So we built a dispatch-first operation. We invested in our own dispatch center, staffed by real people who know plumbing and know the city grid. We stocked our trucks specifically for emergency extraction, isolation, and repair—not for building new bathrooms.
          </p>
          <p>
            As we expanded our coverage area across Portland, three things remained non-negotiable: we employ real dispatchers, we never use an answering service, and we absolutely never use subcontracted labor. The person at your door works for us, is trained by us, and is held to our standards.
          </p>
          <p>
            Today, we run multiple trucks nightly, hold a Master Plumber License, maintain EPA-compliant water damage protocols, and proudly hold a 4.9-star average across hundreds of reviews. But our most important metric is still our internal SLA: getting a truck to your door in an average of 30 minutes.
          </p>
        </div>
      </section>

      {/* 11.3 Meet the Team */}
      <section className="bg-[#1A1A1A] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#FFC300]">THE TEAM</span>
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mt-2">Who answers when you call.</h2>
            <p className="text-[17px] text-[#9C9C96] max-w-[600px] mt-4 leading-[1.6]">
              Every dispatcher and technician is directly employed — no call center, no subcontracted labor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TeamMember name="David H." role="Founder & Master Plumber" tenure="12y" imgUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" />
            <TeamMember name="Sarah M." role="Lead Dispatcher" tenure="8y" imgUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" />
            <TeamMember name="Marcus T." role="Senior Emergency Technician" tenure="10y" imgUrl="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200" />
            <TeamMember name="John R." role="Emergency Technician" tenure="5y" imgUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" />
            <TeamMember name="Elena K." role="Emergency Technician" tenure="4y" imgUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200" />
            <TeamMember name="Michael B." role="Night-Shift Dispatcher" tenure="6y" imgUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" />
          </div>
        </div>
      </section>

      {/* 11.4 Credentials & Certifications */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1A1A1A] border border-white/5 p-6 rounded-[2px] flex items-center gap-4">
            <div className="w-12 h-12 bg-[#242424] text-[#FFC300] flex items-center justify-center rounded-full"><Award size={20} /></div>
            <span className="text-[16px] font-[700] text-[#F5F5F0]">Master Plumber License #MP-78291</span>
          </div>
          <div className="bg-[#1A1A1A] border border-white/5 p-6 rounded-[2px] flex items-center gap-4">
            <div className="w-12 h-12 bg-[#242424] text-[#FFC300] flex items-center justify-center rounded-full"><Shield size={20} /></div>
            <span className="text-[16px] font-[700] text-[#F5F5F0]">Full liability & workers' comp insurance</span>
          </div>
          <div className="bg-[#1A1A1A] border border-white/5 p-6 rounded-[2px] flex items-center gap-4">
            <div className="w-12 h-12 bg-[#242424] text-[#FFC300] flex items-center justify-center rounded-full"><CheckCircle size={20} /></div>
            <span className="text-[16px] font-[700] text-[#F5F5F0]">State-certified backflow prevention</span>
          </div>
          <div className="bg-[#1A1A1A] border border-white/5 p-6 rounded-[2px] flex items-center gap-4">
            <div className="w-12 h-12 bg-[#242424] text-[#FFC300] flex items-center justify-center rounded-full"><Droplets size={20} /></div>
            <span className="text-[16px] font-[700] text-[#F5F5F0]">EPA-compliant water damage protocols</span>
          </div>
          <div className="bg-[#1A1A1A] border border-white/5 p-6 rounded-[2px] flex items-center gap-4">
            <div className="w-12 h-12 bg-[#242424] text-[#FFC300] flex items-center justify-center rounded-full"><Target size={20} /></div>
            <span className="text-[16px] font-[700] text-[#F5F5F0]">Better Business Bureau accredited</span>
          </div>
          <div className="bg-[#1A1A1A] border border-white/5 p-6 rounded-[2px] flex items-center gap-4">
            <div className="w-12 h-12 bg-[#242424] text-[#FFC300] flex items-center justify-center rounded-full"><Clock size={20} /></div>
            <span className="text-[16px] font-[700] text-[#F5F5F0]">24/7 dispatch certification (internal SLA)</span>
          </div>
        </div>
      </section>

      {/* 11.5 What We Won't Compromise On */}
      <section className="bg-[#1A1A1A] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mb-12">What we won't compromise on</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#242424] p-8 border-t-4 border-[#FFC300] rounded-[2px]">
              <span className="text-[18px] lg:text-[20px] font-[700] font-oswald text-[#F5F5F0] uppercase leading-[1.2]">Answer every call live.</span>
            </div>
            <div className="bg-[#242424] p-8 border-t-4 border-[#FFC300] rounded-[2px]">
              <span className="text-[18px] lg:text-[20px] font-[700] font-oswald text-[#F5F5F0] uppercase leading-[1.2]">Quote the price before we dispatch.</span>
            </div>
            <div className="bg-[#242424] p-8 border-t-4 border-[#FFC300] rounded-[2px]">
              <span className="text-[18px] lg:text-[20px] font-[700] font-oswald text-[#F5F5F0] uppercase leading-[1.2]">Staff our own trucks — no subcontractors.</span>
            </div>
            <div className="bg-[#242424] p-8 border-t-4 border-[#FFC300] rounded-[2px]">
              <span className="text-[18px] lg:text-[20px] font-[700] font-oswald text-[#F5F5F0] uppercase leading-[1.2]">Show up in the window we promise.</span>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

function TeamMember({ name, role, tenure, imgUrl }: { name: string, role: string, tenure: string, imgUrl: string }) {
  return (
    <div className="bg-[#242424] border border-white/5 rounded-[4px] p-6 flex flex-col items-start text-left">
      <div className="w-16 h-16 bg-[#1A1A1A] rounded-full mb-4 border-2 border-white/10 flex items-center justify-center overflow-hidden">
        <img src={imgUrl} alt={name} className="w-full h-full object-cover grayscale" />
      </div>
      <span className="text-[20px] font-[700] font-oswald text-[#F5F5F0] uppercase">{name}</span>
      <span className="text-[15px] font-[600] text-[#FFC300] mt-1">{role}</span>
      <span className="text-[14px] text-[#9C9C96] mt-2">{tenure} tenure</span>
    </div>
  );
}
