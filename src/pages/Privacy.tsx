import { Helmet } from 'react-helmet-async';
import { CTABand } from '../components/Layout';
import { BUSINESS_NAME, GREEK_IDENTITY, PHONE_NUMBER, PHONE_HREF } from '../config';

export function Privacy() {
  return (
    <>
      <Helmet>
        <title>{`Privacy Policy | ${BUSINESS_NAME}`}</title>
        <meta name="description" content={`Privacy notice for ${BUSINESS_NAME}.`} />
      </Helmet>

      {/* 14.1 Compact Hero */}
      <section className="bg-[#1A1A1A] pt-[124px] pb-[80px] lg:pt-[140px] lg:pb-[100px] px-4 text-center">
        <h1 className="text-[42px] lg:text-[52px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.1]">
          Privacy Policy
        </h1>
        <p className="text-[18px] text-[#9C9C96] mt-4 leading-[1.6]">
          {BUSINESS_NAME} ({GREEK_IDENTITY})
        </p>
      </section>

      {/* 14.2 Body Content */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[760px] mx-auto text-[17px] text-[#F5F5F0]/90 leading-[1.6] flex flex-col gap-10">

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Information You Share</h3>
            <p>When you contact {BUSINESS_NAME} by phone or messaging platforms regarding a handyman repair, installation, or maintenance request, you may share your name, phone number, district location, and job details.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">How Information Is Used</h3>
            <p>Contact details are used solely to respond to your inquiry, discuss service availability in Larnaca and Limassol districts, and coordinate requested handyman work.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Third-Party Links</h3>
            <p>This website includes links to external services such as Google Maps, WhatsApp, and Facebook. Interactions on those platforms are governed by their respective privacy policies.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Contact Us</h3>
            <p>If you have questions about this notice, please call <a href={PHONE_HREF} className="text-[#2DD4BF] underline">{PHONE_NUMBER}</a>.</p>
          </div>

        </div>
      </section>

      <CTABand />
    </>
  );
}
