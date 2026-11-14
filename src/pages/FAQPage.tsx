import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CTABand } from '../components/Layout';
import { FAQS } from '../data/faqs';
import { BUSINESS_NAME, PHONE_NUMBER } from '../config';

export function FAQPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>{`FAQ | ${BUSINESS_NAME}`}</title>
        <meta
          name="description"
          content={`Frequently asked questions for ${BUSINESS_NAME} covering plumbing works, carpentry, electrical & lighting, and garden & yard maintenance in Larnaca and Limassol.`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.flatMap((cat) => cat.items).map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* 12.1 Hero */}
      <section className="bg-[#1A1A1A] pt-[124px] pb-[80px] lg:pt-[140px] lg:pb-[100px] px-4 text-center min-h-[340px] lg:min-h-[420px] flex flex-col justify-center items-center">
        <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#2DD4BF]">QUESTIONS</span>
        <h1 className="text-[42px] lg:text-[52px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.1] mt-2 max-w-[800px]">
          Frequently Asked Questions
        </h1>
        <p className="text-[18px] text-[#9C9C96] max-w-[600px] mt-4 leading-[1.6]">
          Answers about our services and coverage in Larnaca and Limassol. Need anything else? Call {PHONE_NUMBER}.
        </p>
      </section>

      {/* 12.2 FAQ Content */}
      <section className="bg-[#242424] py-[70px] lg:py-[100px] px-4">
        <div className="max-w-[800px] mx-auto flex flex-col gap-12">
          {FAQS.map((category, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-[26px] uppercase font-[700] text-[#F5F5F0] font-oswald leading-[1.1] mb-6">{category.category}</h2>
              <div className="flex flex-col gap-4">
                {category.items.map((faq, itemIdx) => {
                  const faqId = `${catIdx}-${itemIdx}`;
                  const isOpen = openFaq === faqId;

                  return (
                    <div key={faqId} className="bg-[#1A1A1A] border border-white/10 rounded-[4px]">
                      <button
                        className="w-full text-left px-6 py-5 flex justify-between items-center cursor-pointer"
                        onClick={() => setOpenFaq(isOpen ? null : faqId)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faqId}`}
                      >
                        <span className="text-[16px] font-[700] text-[#F5F5F0] pr-4">{faq.q}</span>
                        {isOpen ? <ChevronUp className="text-[#2DD4BF] shrink-0" /> : <ChevronDown className="text-[#2DD4BF] shrink-0" />}
                      </button>
                      {isOpen && (
                        <div id={`faq-answer-${faqId}`} className="px-6 pb-5 pt-0 text-[16px] text-[#9C9C96] leading-[1.6]">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
