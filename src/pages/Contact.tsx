import { Helmet } from 'react-helmet-async';
import { CTABand } from '../components/Layout';
import { Phone, MousePointerClick, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us — Request a Quote | George Handyman Services</title>
        <meta name="description" content="Call +357 99 233225 or request a free quote online for reliable handyman and maintenance services across Paphos, Cyprus." />
      </Helmet>

      {/* 13.1 Compact Hero */}
      <section className="bg-[#1A1A1A] pt-[124px] pb-[80px] lg:pt-[140px] lg:pb-[100px] px-4 text-center min-h-[340px] lg:min-h-[420px] flex flex-col justify-center items-center">
        <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#1F46B4]">GET IN TOUCH</span>
        <h1 className="text-[42px] lg:text-[52px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.1] mt-2 max-w-[800px]">
          Call now, or request a free quote.
        </h1>
        <p className="text-[18px] text-[#9C9C96] max-w-[600px] mt-4 leading-[1.6]">
          Fast, dependable handyman &amp; home maintenance services across Paphos, Cyprus.
        </p>
      </section>

      {/* 13.2 Three-Way Contact */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1A1A1A] border-t-4 border-[#F2131A] rounded-[2px] p-8 flex flex-col items-start gap-4">
            <Phone size={32} className="text-[#F2131A]" />
            <h3 className="text-[24px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Call (Primary)</h3>
            <a href="tel:+35799233225" className="text-[30px] font-[800] text-[#F2131A] font-oswald">+357 99 233225</a>
          </div>
          
          <div className="bg-[#1A1A1A] border-t-4 border-[#1F46B4] rounded-[2px] p-8 flex flex-col items-start gap-4">
            <MousePointerClick size={32} className="text-[#1F46B4]" />
            <h3 className="text-[24px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Online</h3>
            <a href="#dispatch-form" className="text-[18px] font-[600] text-[#F5F5F0] underline">Request a quote online &rarr;</a>
          </div>

          <div className="bg-[#1A1A1A] border-t-4 border-white/20 rounded-[2px] p-8 flex flex-col items-start gap-4">
            <MapPin size={32} className="text-[#9C9C96]" />
            <h3 className="text-[24px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Service Area</h3>
            <p className="text-[16px] text-[#9C9C96] leading-[1.6]">Paphos, Cyprus &amp; Surrounding Areas <br/> On-site estimates &amp; scheduled visits.</p>
          </div>
        </div>
      </section>

      {/* 13.3 Dispatch Request Form */}
      <section id="dispatch-form" className="bg-[#1A1A1A] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[800px] mx-auto bg-[#242424] p-[32px] lg:p-[48px] rounded-[4px] border border-white/5">
          <h2 className="text-[30px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mb-2">Request a Free Quote</h2>
          <p className="text-[15px] font-[600] text-[#F2131A] mb-8">Need urgent help today? Call +357 99 233225 directly for faster scheduling.</p>
          
          <form className="flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">Name</label>
                <input type="text" className="bg-[#1A1A1A] border border-white/10 rounded-[2px] p-3 text-[#F5F5F0] focus:border-[#1F46B4] outline-none" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">Phone Number</label>
                <input type="tel" className="bg-[#1A1A1A] border border-white/10 rounded-[2px] p-3 text-[#F5F5F0] focus:border-[#1F46B4] outline-none" required />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">Address</label>
              <input type="text" className="bg-[#1A1A1A] border border-white/10 rounded-[2px] p-3 text-[#F5F5F0] focus:border-[#1F46B4] outline-none" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">What's happening?</label>
              <textarea rows={4} className="bg-[#1A1A1A] border border-white/10 rounded-[2px] p-3 text-[#F5F5F0] focus:border-[#1F46B4] outline-none resize-y" required></textarea>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">Is this active right now?</label>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="urgency" value="water_spreading" className="w-5 h-5 accent-[#1F46B4]" required />
                  <span className="text-[16px] text-[#F5F5F0]">Yes, water is spreading</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="urgency" value="no_heat" className="w-5 h-5 accent-[#1F46B4]" />
                  <span className="text-[16px] text-[#F5F5F0]">No heat or hot water</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="urgency" value="scheduled" className="w-5 h-5 accent-[#1F46B4]" />
                  <span className="text-[16px] text-[#F5F5F0]">Scheduled, non-urgent</span>
                </label>
              </div>
            </div>

            <button type="submit" className="mt-4 bg-[#1F46B4] text-white font-[800] py-4 rounded-[2px] text-[16px] uppercase tracking-wide border-2 border-[#1F46B4] hover:bg-transparent hover:text-[#1F46B4] transition-colors self-start px-8">
              Request dispatch &rarr;
            </button>
          </form>
        </div>
      </section>

      {/* 13.4 Coverage Map */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mb-8 text-center">Coverage Map</h2>
          
          <div className="w-full max-w-[900px] aspect-video bg-[#1A1A1A] border border-white/10 rounded-[4px] relative flex items-center justify-center overflow-hidden">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" alt="Service area map" />
            
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 bg-[#242424] border border-white/10 p-4 rounded-[4px] flex gap-6 z-10 justify-center">
              <div className="flex items-center gap-2">
                <span className="text-[12px]">🟡</span>
                <span className="text-[14px] font-[600] text-[#F5F5F0]">20-min avg</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px]">🔴</span>
                <span className="text-[14px] font-[600] text-[#F5F5F0]">35-min avg</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
