import { Helmet } from 'react-helmet-async';
import { CTABand } from '../components/Layout';

export function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | SOLO Plumbing & Heating</title>
        <meta name="description" content="Terms of service, pricing disclosure, and guarantees." />
      </Helmet>

      {/* 15.1 Compact Hero */}
      <section className="bg-[#1A1A1A] py-[80px] lg:py-[100px] px-4 text-center">
        <h1 className="text-[42px] lg:text-[52px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.1]">
          Terms of Service
        </h1>
        <p className="text-[18px] text-[#9C9C96] mt-4 leading-[1.6]">
          Last updated August 2026
        </p>
      </section>

      {/* 15.2 Body Content */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[760px] mx-auto text-[17px] text-[#F5F5F0]/90 leading-[1.6] flex flex-col gap-10">
          
          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Service Agreement</h3>
            <p>These terms constitute a legally binding agreement made between you and SOLO Plumbing & Heating concerning your access to and use of our emergency plumbing dispatch services. By requesting a dispatch, you agree that you have read, understood, and agreed to be bound by all of these Terms of Service.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Pricing & Payment</h3>
            <p>Our emergency-rate pricing is disclosed prior to dispatch. You agree to pay the quoted rate upon completion of the initial stabilization or repair. Any additional work beyond the immediate emergency stabilization will be quoted separately before work begins. Payment is due immediately upon completion of the service visit unless otherwise agreed in writing.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Guarantees & Warranty</h3>
            <p>We provide a 12-month labor guarantee on all emergency repairs performed by our technicians. This guarantee covers the specific section of pipe or component repaired. It does not cover pre-existing conditions, unrelated plumbing failures, or parts supplied by the homeowner. Any parts installed by us are covered under their respective manufacturer warranties.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Cancellations</h3>
            <p>For scheduled (non-emergency) appointments, we request a minimum of 24 hours notice for cancellations. Emergency dispatches that are cancelled after a truck has already been routed to your location may be subject to a nominal dispatch cancellation fee to cover fuel and lost time.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Liability</h3>
            <p>Our liability is limited to the cost of the repair services provided. We are not liable for incidental, consequential, or indirect damages arising from plumbing failures, including but not mold growth, structural damage, or loss of use of the property, except where prohibited by state law.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Dispute Resolution</h3>
            <p>Any dispute arising from these terms or the services provided shall first be addressed through good-faith negotiation. If a resolution cannot be reached, the dispute shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Governing Law</h3>
            <p>These terms and conditions and your use of our services are governed by and construed in accordance with the laws of the State where the service is provided, without regard to its conflict of law principles.</p>
          </div>

        </div>
      </section>

      <CTABand />
    </>
  );
}
