import { Helmet } from 'react-helmet-async';
import { CTABand } from '../components/Layout';

export function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | SOLO Plumbing & Heating</title>
        <meta name="description" content="Privacy policy and data collection practices." />
      </Helmet>

      {/* 14.1 Compact Hero */}
      <section className="bg-[#1A1A1A] py-[80px] lg:py-[100px] px-4 text-center">
        <h1 className="text-[42px] lg:text-[52px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.1]">
          Privacy Policy
        </h1>
        <p className="text-[18px] text-[#9C9C96] mt-4 leading-[1.6]">
          Last updated August 2026
        </p>
      </section>

      {/* 14.2 Body Content */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[760px] mx-auto text-[17px] text-[#F5F5F0]/90 leading-[1.6] flex flex-col gap-10">
          
          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Information We Collect</h3>
            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us. This includes your name, phone number, physical address, and service history.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">How We Use It</h3>
            <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. Primary uses include emergency dispatch operations, service delivery, and follow-up quality checks.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Data Storage & Security</h3>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Third-Party Sharing</h3>
            <p>We do not sell, rent, or trade your personal information to third parties. We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work (such as payment processing or dispatch routing).</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Cookies</h3>
            <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Your Rights</h3>
            <p>Depending on your location, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request deletion of your personal data, please contact us using the details provided below.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Contact Us</h3>
            <p>If you have questions or comments about this notice, you may email us at <a href="mailto:dispatch@ironcladplumbing.com" className="text-[#1F46B4] underline">dispatch@ironcladplumbing.com</a>.</p>
          </div>

        </div>
      </section>

      <CTABand />
    </>
  );
}
