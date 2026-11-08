import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TrustBar, CTABand } from '../components/Layout';
import { SERVICES } from '../data/services';
import { HOME_FAQS } from '../data/faqs';
import { NEIGHBORHOODS } from '../data/neighborhoods';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Check } from 'lucide-react';
import { PHONE_NUMBER } from '../config';
import { Logo } from '../components/Logo';

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setIsServiceDropdownOpen(false);
  };

  const serviceOptions = [
    { value: 'emergency', label: 'Emergency Plumbing' },
    { value: 'drain', label: 'Drain Cleaning' },
    { value: 'water-heater', label: 'Water Heater Repair' },
    { value: 'leak', label: 'Leak Detection' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Plumber in Portland | SOLO Plumbing & Heating</title>
        <meta name="description" content="The fastest, most reliable emergency plumbing line in Portland. Real dispatchers, real trucks stocked and ready." />
        <script src="https://api.izadsystems.dev/js/form_embed.js" async></script>
      </Helmet>

      {/* 6.1 Hero */}
      <section className="relative w-full min-h-screen lg:min-h-[740px] flex items-start lg:items-end pt-[72px] lg:pt-[32px] pb-[40px] lg:pb-0">
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#1A1A1A]">
          {/* Placeholder for documentary photo */}
          <img src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity" alt="Emergency plumbing truck rushing to a call" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]/20 bottom-0 h-full" />
        </div>
        
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 lg:px-8 pb-[60px] lg:pb-[90px] flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-[640px] flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 lg:pb-[64px]">
            <h1 className="text-[42px] lg:text-[76px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-none tracking-[-0.01em]">
              Water's rising{' '}
              <br />
              We're already on the way
            </h1>
            <p className="text-[17px] lg:text-[19px] text-[#F5F5F0]/85 max-w-[500px] mt-[20px] leading-[1.55]">
              Fast, reliable plumbing help for homes and businesses across Portland. Call now to check availability or request service online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-[28px] w-full sm:w-auto">
              <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="bg-[#F2131A] text-white font-[800] px-8 py-4 rounded-[2px] text-center flex items-center justify-center gap-2 uppercase tracking-wide hover:bg-transparent hover:text-[#F2131A] border-2 border-[#F2131A] active:scale-[0.98] transition-all w-full sm:w-auto">
                <Phone size={20} />
                CALL NOW
              </a>
              <Link to="/contact" className="border-2 border-[#F5F5F0] text-[#F5F5F0] font-[800] px-8 py-4 rounded-[2px] text-center uppercase tracking-wide hover:bg-[#F5F5F0] hover:text-[#1A1A1A] transition-colors w-full sm:w-auto">
                REQUEST SERVICE
              </Link>
            </div>
          </div>

          <div className="w-full max-w-[440px] mx-auto lg:mx-0 bg-[#1A1A1A]/90 backdrop-blur-sm border border-white/10 rounded-[4px] p-6 lg:p-8 flex-shrink-0 lg:mr-16 xl:mr-32">
            <h3 className="text-[26px] text-center uppercase font-[700] text-[#1F46B4] font-oswald leading-none mb-6">
              REQUEST PLUMBING SERVICE
            </h3>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">Full Name</label>
                <input type="text" placeholder="John Doe" className="bg-[#242424] border border-white/5 rounded-[2px] p-3 text-[#F5F5F0] placeholder-[#F5F5F0]/30 focus:border-[#1F46B4] outline-none text-[15px]" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" className="bg-[#242424] border border-white/5 rounded-[2px] p-3 text-[#F5F5F0] placeholder-[#F5F5F0]/30 focus:border-[#1F46B4] outline-none text-[15px]" required />
              </div>
              <div className="flex flex-col gap-1.5 relative">
                <label className="text-[12px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">Selected Service</label>
                <div className="relative">
                  <div 
                    className={`bg-[#242424] border ${isServiceDropdownOpen ? 'border-[#1F46B4]' : 'border-white/5'} rounded-[2px] p-3 text-[15px] cursor-pointer flex items-center justify-between transition-colors`}
                    onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                  >
                    <span className={selectedService ? 'text-[#F5F5F0]' : 'text-[#F5F5F0]/30'}>
                      {selectedService ? serviceOptions.find(opt => opt.value === selectedService)?.label : 'Select a service'}
                    </span>
                    <div className="flex items-center pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-200 ${isServiceDropdownOpen ? 'rotate-180' : ''}`}>
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#F5F5F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  {isServiceDropdownOpen && (
                    <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-[#242424] border border-white/10 rounded-[2px] shadow-xl z-20 py-1 max-h-[200px] overflow-y-auto">
                      {serviceOptions.map((option) => (
                        <div
                          key={option.value}
                          className="px-4 py-3 text-[15px] text-[#F5F5F0] hover:bg-[#1A1A1A] hover:text-[#1F46B4] cursor-pointer transition-colors"
                          onClick={() => handleServiceSelect(option.value)}
                        >
                          {option.label}
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Hidden input for form submission if needed */}
                  <input type="hidden" name="service" value={selectedService} required />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">Describe your plumbing issue</label>
                <textarea rows={2} placeholder="Please provide details about the problem..." className="bg-[#242424] border border-white/5 rounded-[2px] p-3 text-[#F5F5F0] placeholder-[#F5F5F0]/30 focus:border-[#1F46B4] outline-none text-[15px] resize-none" required></textarea>
              </div>
              <div className="flex items-start gap-3 mt-1">
                <div className="relative flex items-center mt-[2px] shrink-0">
                  <input
                    id="terms-consent"
                    type="checkbox"
                    required
                    className="peer appearance-none w-4 h-4 rounded-[2px] bg-[#F5F5F0] border border-white/20 checked:bg-[#1F46B4] checked:border-[#1F46B4] cursor-pointer transition-colors"
                  />
                  <Check
                    size={12}
                    strokeWidth={3}
                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                  />
                </div>
                <label htmlFor="terms-consent" className="text-[12px] text-[#F5F5F0]/85 leading-[1.45] cursor-pointer select-none">
                  I agree to{' '}
                  <Link
                    to="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5C85F6] hover:text-[#82A3FA] underline underline-offset-2 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    terms &amp; conditions
                  </Link>{' '}
                  provided by the company. By providing my phone number, I agree to receive text messages from the business.
                </label>
              </div>
              <button type="submit" className="mt-2 bg-[#1F46B4] text-white font-[800] py-4 rounded-[2px] text-[16px] uppercase tracking-wide hover:bg-[#183890] transition-colors w-full">
                REQUEST SERVICE
              </button>
            </form>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* 6.3 Services Preview */}
      <section className="bg-[#1A1A1A] py-[90px] lg:py-[120px] px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center flex flex-col items-center">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#1F46B4]">WHAT WE HANDLE</span>
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mt-2">Five emergencies. One number.</h2>
            <p className="text-[17px] lg:text-[18px] text-[#9C9C96] max-w-[600px] mt-4 leading-[1.6]">
              If it's spreading, flooding, or leaving you without heat or water — this is exactly what we do, every night of the year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[60px]">
            {SERVICES.map((s) => (
              <div key={s.id} className="bg-[#242424] border border-white/10 rounded-[4px] p-[32px] hover:border-[#1F46B4] transition-colors flex flex-col">
                <h3 className="text-[20px] lg:text-[26px] font-[700] font-oswald text-[#F5F5F0]">{s.title}</h3>
                <p className="text-[16px] text-[#9C9C96] mt-3 leading-[1.6] flex-grow">{s.shortDesc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-[40px]">
            <Link to="/services" className="text-[16px] font-[600] text-[#1F46B4] hover:underline">See all services &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 6.4 How Dispatch Works */}
      <section className="bg-[#242424] py-[90px] lg:py-[120px] px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#1F46B4]">HOW IT WORKS</span>
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mt-2">Three steps. No delays.</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-[60px]">
            <div className="flex flex-col gap-3">
              <span className="text-[20px] lg:text-[26px] font-[700] font-oswald text-[#1F46B4]">Step 01 &middot; Call</span>
              <p className="text-[16px] text-[#9C9C96] leading-[1.6]">A real dispatcher answers. Describe what's happening — we already know what truck to send.</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[20px] lg:text-[26px] font-[700] font-oswald text-[#1F46B4]">Step 02 &middot; Confirm Quote</span>
              <p className="text-[16px] text-[#9C9C96] leading-[1.6]">You get an upfront quote before anyone drives over.</p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[20px] lg:text-[26px] font-[700] font-oswald text-[#1F46B4]">Step 03 &middot; Stop the damage</span>
              <p className="text-[16px] text-[#9C9C96] leading-[1.6]">A fully stocked plumber arrives, stabilizes the situation first, then completes the repair.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 Emergency-Rate Pricing */}
      <section className="bg-[#1F46B4] py-[90px] lg:py-[120px] px-4 text-center">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">NO SURPRISE BILLING</span>
          <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mt-2 max-w-[800px]">
            You'll know the price before the truck leaves the yard.
          </h2>
          <p className="text-[17px] lg:text-[18px] text-[#F5F5F0]/85 max-w-[640px] mt-4 leading-[1.6]">
            Emergency-rate pricing is fixed and quoted on the phone — not estimated on arrival.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-[40px]">
            <div className="bg-[#1A1A1A] text-[#F5F5F0] font-[800] px-6 py-3 rounded-[2px] uppercase tracking-wide text-[14px]">Standard emergency call-out: $250</div>
            <div className="bg-[#1A1A1A] text-[#F5F5F0] font-[800] px-6 py-3 rounded-[2px] uppercase tracking-wide text-[14px]">After-hours (10pm–6am): $250</div>
            <div className="bg-[#1A1A1A] text-[#F5F5F0] font-[800] px-6 py-3 rounded-[2px] uppercase tracking-wide text-[14px]">Call-out fee applied to final invoice</div>
          </div>
        </div>
      </section>

      {/* 6.6 Track Record */}
      <section className="bg-[#1A1A1A] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#1F46B4]">OUR TRACK RECORD</span>
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mt-2">Numbers, not adjectives.</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-[60px]">
            <div className="bg-[#242424] p-8 text-center rounded-[4px] border border-white/5">
              <div className="text-[40px] lg:text-[56px] font-[800] text-[#F5F5F0] font-oswald leading-none">FAST</div>
              <div className="text-[16px] text-[#9C9C96] font-[600] mt-2">local response</div>
            </div>
            <div className="bg-[#242424] p-8 text-center rounded-[4px] border border-white/5">
              <div className="text-[40px] lg:text-[56px] font-[800] text-[#F5F5F0] font-oswald leading-none">3,400+</div>
              <div className="text-[16px] text-[#9C9C96] font-[600] mt-2">emergencies handled</div>
            </div>
            <div className="bg-[#242424] p-8 text-center rounded-[4px] border border-white/5">
              <div className="text-[40px] lg:text-[56px] font-[800] text-[#F5F5F0] font-oswald leading-none">READY</div>
              <div className="text-[16px] text-[#9C9C96] font-[600] mt-2">when you need us</div>
            </div>
            <div className="bg-[#242424] p-8 text-center rounded-[4px] border border-white/5">
              <div className="text-[40px] lg:text-[56px] font-[800] text-[#F5F5F0] font-oswald leading-none">4.9<span className="text-[#FFC300] relative -top-[6px] text-[0.85em]">★</span></div>
              <div className="text-[16px] text-[#F5F5F0] font-[600] mt-2">average rating</div>
            </div>
          </div>
          
          <div className="mt-[80px] max-w-[1000px] mx-auto">
            <h3 className="text-center text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald mb-2">What Portland Locals Say</h3>
            <div className="text-center mb-8 flex items-center justify-center gap-2">
              <span className="text-[20px] font-[700] text-[#F5F5F0]">4.9<span className="text-[#FFC300] relative -top-[2px] text-[0.85em]">★</span></span>
              <span className="text-[20px] font-[700] text-[#F5F5F0]">Average Rating</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              <div className="bg-[#242424] p-5 rounded-[4px] border border-white/5 flex flex-col text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-[#FFC300] text-[16px] tracking-widest">★★★★★</div>
                </div>
                <p className="text-[#F5F5F0]/85 text-[14px] leading-[1.5] italic mb-4 flex-grow">"SOLO Plumbing & Heating saved us when our water heater burst. The plumber arrived fast, gave a clear quote before starting, and fixed it perfectly. Highly recommend!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#F5F5F0] font-[700] text-[14px]">S</div>
                  <div className="flex flex-col">
                    <span className="font-[700] text-[#F5F5F0] text-[13px]">Sarah M.</span>
                    <span className="text-[11px] text-[#9C9C96]">Local Guide &middot; 5 stars</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#242424] p-5 rounded-[4px] border border-white/5 flex flex-col text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-[#FFC300] text-[16px] tracking-widest">★★★★★</div>
                </div>
                <p className="text-[#F5F5F0]/85 text-[14px] leading-[1.5] italic mb-4 flex-grow">"Very professional and upfront about the pricing. They cleared our emergency main line backup in no time. The tech was clean, respectful, and knew exactly what to do."</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#F5F5F0] font-[700] text-[14px]">J</div>
                  <div className="flex flex-col">
                    <span className="font-[700] text-[#F5F5F0] text-[13px]">James T.</span>
                    <span className="text-[11px] text-[#9C9C96]">2 reviews &middot; 5 stars</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#242424] p-6 rounded-[4px] border border-white/5 flex flex-col text-left">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-[#FFC300] text-[18px] tracking-widest">★★★★★</div>
                </div>
                <p className="text-[#F5F5F0]/85 text-[15px] leading-[1.6] italic mb-6 flex-grow">"Fast local response just like they promised. Had a major leak in the ceiling and they stopped it before it caused more damage. Trustworthy and reliable service."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#F5F5F0] font-[700] text-[16px]">M</div>
                  <div className="flex flex-col">
                    <span className="font-[700] text-[#F5F5F0] text-[14px]">Michael R.</span>
                    <span className="text-[12px] text-[#9C9C96]">4 reviews &middot; 5 stars</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#242424] p-5 rounded-[4px] border border-white/5 flex flex-col text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-[#FFC300] text-[16px] tracking-widest">★★★★★</div>
                </div>
                <p className="text-[#F5F5F0]/85 text-[14px] leading-[1.5] italic mb-4 flex-grow">"Absolutely fantastic service! The team was knowledgeable and polite. They fixed our clogged sink in no time. I'll definitely call them again for any plumbing needs."</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#F5F5F0] font-[700] text-[14px]">D</div>
                  <div className="flex flex-col">
                    <span className="font-[700] text-[#F5F5F0] text-[13px]">David L.</span>
                    <span className="text-[11px] text-[#9C9C96]">1 review &middot; 5 stars</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#242424] p-5 rounded-[4px] border border-white/5 flex flex-col text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-[#FFC300] text-[16px] tracking-widest">★★★★★</div>
                </div>
                <p className="text-[#F5F5F0]/85 text-[14px] leading-[1.5] italic mb-4 flex-grow">"Excellent and speedy service. Woke up to a flooded basement, they were here in 20 minutes and stopped the bleeding immediately. Great team."</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#F5F5F0] font-[700] text-[14px]">R</div>
                  <div className="flex flex-col">
                    <span className="font-[700] text-[#F5F5F0] text-[13px]">Robert G.</span>
                    <span className="text-[11px] text-[#9C9C96]">Local Guide &middot; 5 stars</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#242424] p-5 rounded-[4px] border border-white/5 flex flex-col text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-[#FFC300] text-[16px] tracking-widest">★★★★★</div>
                </div>
                <p className="text-[#F5F5F0]/85 text-[14px] leading-[1.5] italic mb-4 flex-grow">"I couldn't believe how fast they responded. Highly recommend SOLO Plumbing & Heating for any urgent needs. Very professional!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#F5F5F0] font-[700] text-[14px]">E</div>
                  <div className="flex flex-col">
                    <span className="font-[700] text-[#F5F5F0] text-[13px]">Elena W.</span>
                    <span className="text-[11px] text-[#9C9C96]">12 reviews &middot; 5 stars</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#242424] p-5 rounded-[4px] border border-white/5 flex flex-col text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-[#FFC300] text-[16px] tracking-widest">★★★★★</div>
                </div>
                <p className="text-[#F5F5F0]/85 text-[14px] leading-[1.5] italic mb-4 flex-grow">"Honest pricing and great work. Replaced a cracked pipe quickly without trying to upsell me on anything else."</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#F5F5F0] font-[700] text-[14px]">C</div>
                  <div className="flex flex-col">
                    <span className="font-[700] text-[#F5F5F0] text-[13px]">Chris K.</span>
                    <span className="text-[11px] text-[#9C9C96]">3 reviews &middot; 5 stars</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#242424] p-5 rounded-[4px] border border-white/5 flex flex-col text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-[#FFC300] text-[16px] tracking-widest">★★★★★</div>
                </div>
                <p className="text-[#F5F5F0]/85 text-[14px] leading-[1.5] italic mb-4 flex-grow">"Top notch plumbers. Called them at 2 AM on a Sunday and they showed up ready to work. 5 stars all the way."</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#F5F5F0] font-[700] text-[14px]">J</div>
                  <div className="flex flex-col">
                    <span className="font-[700] text-[#F5F5F0] text-[13px]">Jessica H.</span>
                    <span className="text-[11px] text-[#9C9C96]">Local Guide &middot; 5 stars</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#242424] p-5 rounded-[4px] border border-white/5 flex flex-col text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-[#FFC300] text-[16px] tracking-widest">★★★★★</div>
                </div>
                <p className="text-[#F5F5F0]/85 text-[14px] leading-[1.5] italic mb-4 flex-grow">"I had a huge leak under the sink and they arrived within the hour. Fixed the issue completely and the price was very fair."</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#F5F5F0] font-[700] text-[14px]">M</div>
                  <div className="flex flex-col">
                    <span className="font-[700] text-[#F5F5F0] text-[13px]">Michael B.</span>
                    <span className="text-[11px] text-[#9C9C96]">4 reviews &middot; 5 stars</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#242424] p-5 rounded-[4px] border border-white/5 flex flex-col text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-[#FFC300] text-[16px] tracking-widest">★★★★<span className="text-[#9C9C96]">★</span></div>
                </div>
                <p className="text-[#F5F5F0]/85 text-[14px] leading-[1.5] italic mb-4 flex-grow">"Very good service. They were a little bit late due to traffic, but once they arrived they got the job done fast."</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#F5F5F0] font-[700] text-[14px]">A</div>
                  <div className="flex flex-col">
                    <span className="font-[700] text-[#F5F5F0] text-[13px]">Amanda R.</span>
                    <span className="text-[11px] text-[#9C9C96]">1 review &middot; 4 stars</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#242424] p-5 rounded-[4px] border border-white/5 flex flex-col text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-[#FFC300] text-[16px] tracking-widest">★★★★★</div>
                </div>
                <p className="text-[#F5F5F0]/85 text-[14px] leading-[1.5] italic mb-4 flex-grow">"SOLO is my go-to plumbing company now. I've used them twice this year and both times they've been outstanding."</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#F5F5F0] font-[700] text-[14px]">T</div>
                  <div className="flex flex-col">
                    <span className="font-[700] text-[#F5F5F0] text-[13px]">Tom L.</span>
                    <span className="text-[11px] text-[#9C9C96]">Local Guide &middot; 5 stars</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#242424] p-5 rounded-[4px] border border-white/5 flex flex-col text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-[#FFC300] text-[16px] tracking-widest">★★★★★</div>
                </div>
                <p className="text-[#F5F5F0]/85 text-[14px] leading-[1.5] italic mb-4 flex-grow">"Cleared a severe sewer backup we had. The technicians were friendly, cleaned up after themselves, and explained everything."</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#F5F5F0] font-[700] text-[14px]">K</div>
                  <div className="flex flex-col">
                    <span className="font-[700] text-[#F5F5F0] text-[13px]">Kevin S.</span>
                    <span className="text-[11px] text-[#9C9C96]">8 reviews &middot; 5 stars</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-[40px] text-center">
              <Link to="/leave-review" className="inline-flex items-center gap-2 bg-[#1F46B4] text-[#F5F5F0] font-[800] text-[16px] px-[32px] py-[16px] rounded-[4px] uppercase tracking-wide hover:bg-[#153488] transition-colors border-2 border-[#1F46B4]">
                <span className="text-[#FFC300] text-[1.2em]">★</span> Leave Us a Review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6.7 FAQ */}
      <section className="bg-[#242424] py-[90px] lg:py-[120px] px-4">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center flex flex-col items-center">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#1F46B4]">COMMON QUESTIONS</span>
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mt-2">What people ask before they call.</h2>
          </div>
          
          <div className="mt-[60px] flex flex-col gap-4">
            {HOME_FAQS.map((faq, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-white/10 rounded-[4px]">
                <button 
                  className="w-full text-left px-6 py-5 flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="text-[16px] font-[700] text-[#F5F5F0] pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="text-[#1F46B4] shrink-0" /> : <ChevronDown className="text-[#1F46B4] shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-0 text-[16px] text-[#9C9C96] leading-[1.6]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-[32px]">
            <Link to="/faq" className="text-[16px] font-[600] text-[#1F46B4] hover:underline">See the full FAQ &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 6.9 Service Areas Preview */}
      <section className="bg-[#242424] py-[90px] lg:py-[120px] px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center flex flex-col items-center">
            <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#1F46B4]">AREAS WE COVER</span>
            <h2 className="text-[30px] lg:text-[46px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mt-2">Dispatched across Portland.</h2>
            <p className="text-[17px] text-[#9C9C96] max-w-[560px] mt-4 leading-[1.6]">
              We run trucks through these neighborhoods every night. If yours isn't listed, call anyway — we're probably close.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-[60px] max-w-[900px] mx-auto">
            {NEIGHBORHOODS.map(n => (
              <Link key={n.id} to={`/service-areas/${n.id}`} className="bg-[#1A1A1A] border border-[#1F46B4]/30 hover:border-[#1F46B4] text-[#F5F5F0] font-[700] px-6 py-4 rounded-[4px] transition-colors">
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
