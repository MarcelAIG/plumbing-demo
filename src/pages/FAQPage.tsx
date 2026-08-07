import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CTABand } from '../components/Layout';
import { FAQS } from '../data/faqs';

export function FAQPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>FAQ — Emergency Plumbing Questions | SOLO Plumbing & Heating</title>
        <meta name="description" content="Common questions about our 24/7 plumbing dispatch. If your question isn't here, call us — a real dispatcher will answer." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                ${FAQS.flatMap(cat => cat.items).map(item => `
                  {
                    "@type": "Question",
                    "name": "${item.q.replace(/"/g, '\\"')}",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "${item.a.replace(/"/g, '\\"')}"
                    }
                  }
                `).join(',')}
              ]
            }
          `}
        </script>
      </Helmet>

      {/* 12.1 Hero */}
      <section className="bg-[#1A1A1A] py-[80px] lg:py-[100px] px-4 text-center min-h-[340px] lg:min-h-[420px] flex flex-col justify-center items-center">
        <span className="text-[13px] font-[800] tracking-[0.1em] uppercase text-[#1F46B4]">QUESTIONS</span>
        <h1 className="text-[42px] lg:text-[52px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.1] mt-2 max-w-[800px]">
          Everything you might want to know.
        </h1>
        <p className="text-[18px] text-[#9C9C96] max-w-[600px] mt-4 leading-[1.6]">
          Grouped by topic. If your question isn't here, call 555-202-0199 — a real dispatcher will answer.
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
                        className="w-full text-left px-6 py-5 flex justify-between items-center"
                        onClick={() => setOpenFaq(isOpen ? null : faqId)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faqId}`}
                      >
                        <span className="text-[16px] font-[700] text-[#F5F5F0] pr-4">{faq.q}</span>
                        {isOpen ? <ChevronUp className="text-[#1F46B4] shrink-0" /> : <ChevronDown className="text-[#1F46B4] shrink-0" />}
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
