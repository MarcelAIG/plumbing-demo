import { Helmet } from 'react-helmet-async';
import { CTABand } from '../components/Layout';
import { BUSINESS_NAME, GREEK_IDENTITY, PHONE_NUMBER, PHONE_HREF } from '../config';

export function Terms() {
  return (
    <>
      <Helmet>
        <title>{`Terms & Conditions | ${BUSINESS_NAME}`}</title>
        <meta name="description" content={`Terms and conditions for ${BUSINESS_NAME}.`} />
      </Helmet>

      {/* 15.1 Compact Hero */}
      <section className="bg-[#1A1A1A] pt-[124px] pb-[80px] lg:pt-[140px] lg:pb-[100px] px-4 text-center">
        <h1 className="text-[42px] lg:text-[52px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.1]">
          Terms &amp; Conditions
        </h1>
        <p className="text-[18px] text-[#9C9C96] mt-4 leading-[1.6]">
          {BUSINESS_NAME} ({GREEK_IDENTITY})
        </p>
      </section>

      {/* 15.2 Body Content */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[760px] mx-auto text-[17px] text-[#F5F5F0]/90 leading-[1.6] flex flex-col gap-10">

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Service Scope</h3>
            <p>All handyman jobs—including plumbing works, carpentry, electrical &amp; lighting, and garden &amp; yard maintenance—are agreed directly with the customer prior to starting work in the Larnaca or Limassol districts.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Quotes &amp; Scheduling</h3>
            <p>Job scope, materials, and scheduling are confirmed directly by phone or message. Please contact <a href={PHONE_HREF} className="text-[#2DD4BF] underline">{PHONE_NUMBER}</a> for any updates or rescheduling requests.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Website Content</h3>
            <p>Project photos displayed on this website illustrate real maintenance, assembly, and installation jobs completed for residential properties.</p>
          </div>

        </div>
      </section>

      <CTABand />
    </>
  );
}
