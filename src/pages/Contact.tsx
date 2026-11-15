import { useState, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { CTABand } from '../components/Layout';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import {
  BUSINESS_NAME,
  GREEK_IDENTITY,
  PHONE_NUMBER,
  PHONE_HREF,
  WHATSAPP_HREF,
  FACEBOOK_URL,
  GOOGLE_MAPS_REVIEW_URL,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
} from '../config';

export function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [category, setCategory] = useState('Plumbing Works');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappSummary = encodeURIComponent(
    `Hello, my name is ${name || 'a customer'} (${phone || 'no phone'}). Area: ${area || 'Larnaca / Limassol'}. Service: ${category}. Details: ${details}`
  );

  return (
    <>
      <Helmet>
        <title>{`Contact Us — Request a Quote | ${BUSINESS_NAME}`}</title>
        <meta
          name="description"
          content={`Call ${PHONE_NUMBER} or message us on WhatsApp or Facebook for handyman services across Larnaca and Limassol districts, Cyprus.`}
        />
      </Helmet>

      {/* 13.1 Compact Hero */}
      <section className="bg-[#1A1A1A] pt-[124px] pb-[80px] lg:pt-[140px] lg:pb-[100px] px-4 text-center min-h-[340px] lg:min-h-[420px] flex flex-col justify-center items-center">
        <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#2DD4BF]">GET IN TOUCH</span>
        <h1 className="text-[42px] lg:text-[52px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.1] mt-2 max-w-[800px]">
          Call now, or send your job details.
        </h1>
        <p className="text-[18px] text-[#9C9C96] max-w-[620px] mt-4 leading-[1.6]">
          {BUSINESS_NAME} ({GREEK_IDENTITY}) — serving Larnaca and Limassol districts, Cyprus.
        </p>
      </section>

      {/* 13.2 Three-Way Contact */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1A1A1A] border-t-4 border-[#0D9488] rounded-[2px] p-8 flex flex-col items-start gap-4">
            <Phone size={32} className="text-[#2DD4BF]" />
            <h3 className="text-[24px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Call Directly</h3>
            <a href={PHONE_HREF} className="text-[28px] lg:text-[30px] font-[800] text-[#2DD4BF] font-oswald hover:underline">
              {PHONE_NUMBER}
            </a>
          </div>

          <div className="bg-[#1A1A1A] border-t-4 border-[#F59E0B] rounded-[2px] p-8 flex flex-col items-start gap-4">
            <MessageCircle size={32} className="text-[#F59E0B]" />
            <h3 className="text-[24px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">WhatsApp &amp; Facebook</h3>
            <div className="flex flex-col gap-2">
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="text-[17px] font-[700] text-[#F5F5F0] underline hover:text-[#2DD4BF]">
                Message on WhatsApp &rarr;
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-[17px] font-[700] text-[#F5F5F0] underline hover:text-[#2DD4BF]">
                Visit Facebook Page &rarr;
              </a>
            </div>
          </div>

          <div className="bg-[#1A1A1A] border-t-4 border-white/20 rounded-[2px] p-8 flex flex-col items-start gap-4">
            <MapPin size={32} className="text-[#9C9C96]" />
            <h3 className="text-[24px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1]">Service Region</h3>
            <p className="text-[16px] text-[#9C9C96] leading-[1.6]">
              Larnaca and Limassol districts, Cyprus.
              <br />
              Call or message to confirm availability.
            </p>
          </div>
        </div>
      </section>

      {/* 13.3 Quote Preparation Form */}
      <section id="quote-form" className="bg-[#1A1A1A] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[800px] mx-auto bg-[#242424] p-[32px] lg:p-[48px] rounded-[4px] border border-white/5">
          <h2 className="text-[30px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mb-2">Prepare a Quote Message</h2>
          <p className="text-[15px] font-[600] text-[#2DD4BF] mb-8">
            Prefer to speak right away? Call <a href={PHONE_HREF} className="underline">{PHONE_NUMBER}</a> directly.
          </p>

          {submitted ? (
            <div className="bg-[#1A1A1A] border border-white/10 rounded-[4px] p-6 flex flex-col gap-4">
              <h3 className="text-[20px] font-[800] text-[#F5F5F0]">Send Your Request Directly</h3>
              <p className="text-[15px] text-[#9C9C96] leading-[1.6]">
                This website preview does not transmit email forms automatically. Use the button below to open your pre-filled message in WhatsApp, or call {PHONE_NUMBER} directly.
              </p>
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href={`https://wa.me/35797608803?text=${whatsappSummary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1EB954] text-white font-[800] px-6 py-3.5 rounded-[4px] text-[14px] uppercase tracking-wide transition-colors"
                >
                  Open in WhatsApp &rarr;
                </a>
                <a
                  href={PHONE_HREF}
                  className="bg-[#0D9488] hover:bg-[#0F766E] text-white font-[800] px-6 py-3.5 rounded-[4px] text-[14px] uppercase tracking-wide transition-colors"
                >
                  Call {PHONE_NUMBER}
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-[14px] font-[700] text-[#9C9C96] hover:text-white underline cursor-pointer"
                >
                  Edit details
                </button>
              </div>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="bg-[#1A1A1A] border border-white/10 rounded-[2px] p-3 text-[#F5F5F0] focus:border-[#0D9488] outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={PHONE_NUMBER}
                    className="bg-[#1A1A1A] border border-white/10 rounded-[2px] p-3 text-[#F5F5F0] focus:border-[#0D9488] outline-none"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">District / Location</label>
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Larnaca or Limassol district"
                  className="bg-[#1A1A1A] border border-white/10 rounded-[2px] p-3 text-[#F5F5F0] focus:border-[#0D9488] outline-none"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">What needs doing?</label>
                <textarea
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Describe the plumbing, carpentry, lighting, or garden work needed"
                  className="bg-[#1A1A1A] border border-white/10 rounded-[2px] p-3 text-[#F5F5F0] focus:border-[#0D9488] outline-none resize-y"
                  required
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">Service Category</label>
                <div className="flex flex-col gap-3">
                  {['Plumbing Works', 'Carpentry', 'Electrical & Lighting', 'Garden & Yard Work'].map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={category === cat}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-5 h-5 accent-[#0D9488]"
                      />
                      <span className="text-[16px] text-[#F5F5F0]">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 bg-[#0D9488] text-white font-[800] py-4 rounded-[2px] text-[16px] uppercase tracking-wide border-2 border-[#0D9488] hover:bg-transparent hover:text-[#2DD4BF] transition-colors self-start px-8 cursor-pointer"
              >
                Prepare WhatsApp Quote &rarr;
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 13.4 Coverage Map */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mb-8 text-center">Larnaca &amp; Limassol Service Map</h2>

          <div className="w-full max-w-[900px] aspect-video bg-[#1A1A1A] border border-white/10 rounded-[4px] relative overflow-hidden">
            <iframe
              title="Larnaca and Limassol Districts Service Map"
              src={GOOGLE_MAPS_EMBED_URL}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-3 left-3 bg-white rounded-[2px] shadow-md px-3.5 py-2.5 max-w-[260px] text-left">
              <div className="text-[13px] font-[700] text-[#202124] leading-tight">{BUSINESS_NAME}</div>
              <div className="text-[11px] font-[600] text-[#5f6368] mt-0.5">{GREEK_IDENTITY}</div>
              <div className="text-[12px] font-[700] text-[#1a73e8] mt-1">
                {GOOGLE_RATING} / 5 ({GOOGLE_REVIEW_COUNT} reviews) &middot;{' '}
                <a href={GOOGLE_MAPS_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="underline">
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
