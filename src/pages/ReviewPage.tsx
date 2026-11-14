import { useState, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Logo } from '../components/Logo';
import { GOOGLE_MAPS_REVIEW_URL } from '../config';

const STAR_OPTIONS = [
  { value: 5, label: '5 Stars' },
  { value: 4, label: '4 Stars' },
  { value: 3, label: '3 Stars' },
  { value: 2, label: '2 Stars' },
  { value: 1, label: '1 Star' },
];

export function ReviewPage() {
  const [searchParams] = useSearchParams();
  const initialParam = Number(searchParams.get('rating'));
  const initialLowRating =
    initialParam >= 1 && initialParam <= 3 ? initialParam : null;

  const [selectedRating, setSelectedRating] = useState<number | null>(
    initialLowRating ?? 5
  );
  const [step, setStep] = useState<'rate' | 'feedback' | 'submitted'>(
    initialLowRating ? 'feedback' : 'rate'
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSelectRating = (stars: number) => {
    setSelectedRating(stars);
    if (stars >= 4) {
      window.location.href = GOOGLE_MAPS_REVIEW_URL;
      return;
    }
    setStep('feedback');
  };

  const handleNext = () => {
    if (!selectedRating) return;
    if (selectedRating >= 4) {
      window.location.href = GOOGLE_MAPS_REVIEW_URL;
      return;
    }
    setStep('feedback');
  };

  const handleFeedbackSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep('submitted');
  };

  const progress = step === 'rate' ? 0 : step === 'feedback' ? 50 : 100;

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-[124px] lg:pt-[140px] pb-[90px] px-4 flex flex-col items-center">
      <Helmet>
        <title>Leave Us a Review | George Handyman Services</title>
        <meta
          name="description"
          content="Share your experience with George Handyman Services in Paphos, Cyprus."
        />
      </Helmet>

      {/* Business Logo Above Card */}
      <div className="mb-6 flex justify-center">
        <Logo className="w-[156px] sm:w-[176px] h-auto" />
      </div>

      {/* Main Dark Review Card with Orange Border */}
      <div className="w-full max-w-[470px] rounded-[12px] bg-[#0B0D10] border border-[#F97316]/85 shadow-[0_18px_50px_rgba(0,0,0,0.65)] p-5 sm:p-6">
        {step === 'rate' && (
          <>
            <h1 className="text-center text-[22px] sm:text-[26px] font-[800] text-white tracking-[-0.01em] mb-5">
              How would you rate us?
            </h1>

            <div className="bg-white rounded-[8px] p-5 sm:p-6 text-[#111317] shadow-inner">
              <div className="text-[13px] font-[700] text-[#374151] mb-4">
                Rate Us <span className="text-[#EF4444]">*</span>
              </div>

              <div className="flex flex-col gap-3.5" role="radiogroup" aria-label="Star rating">
                {STAR_OPTIONS.map((option) => {
                  const isChecked = selectedRating === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      role="radio"
                      aria-checked={isChecked}
                      onClick={() => handleSelectRating(option.value)}
                      className="flex items-center gap-2.5 text-left py-1 px-1.5 rounded-[4px] hover:bg-[#F3F4F6] transition-colors cursor-pointer group"
                    >
                      <span
                        className={`w-[15px] h-[15px] rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          isChecked
                            ? 'border-[#2563EB] bg-white'
                            : 'border-[#9CA3AF] bg-white group-hover:border-[#4B5563]'
                        }`}
                      >
                        {isChecked && (
                          <span className="w-[8px] h-[8px] rounded-full bg-[#2563EB]" />
                        )}
                      </span>

                      <span className="flex items-center gap-0.5 text-[#F59E0B]">
                        {Array.from({ length: option.value }).map((_, idx) => (
                          <svg
                            key={idx}
                            viewBox="0 0 24 24"
                            className="w-[17px] h-[17px] fill-current"
                            aria-hidden="true"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </span>

                      <span className="text-[12.5px] font-[600] text-[#374151]">
                        ({option.label})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-4">
              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-[#1C2026] hover:bg-[#272C35] text-white text-[13px] font-[700] py-2.5 rounded-[6px] border border-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Next</span>
                <span aria-hidden="true" className="text-[10px]">
                  &#9654;
                </span>
              </button>
            </div>
          </>
        )}

        {step === 'feedback' && (
          <>
            <h1 className="text-center text-[20px] sm:text-[23px] font-[800] text-white leading-[1.2] mb-5 px-2">
              Sorry to hear that you&apos;re not satisfied.
            </h1>

            <form
              onSubmit={handleFeedbackSubmit}
              className="bg-white rounded-[8px] p-5 sm:p-6 text-[#111317] shadow-inner flex flex-col gap-4"
            >
              <p className="text-[12.5px] font-[600] text-[#4B5563] leading-[1.45]">
                Please provide us with your feedback and we&apos;ll do our best to improve.
              </p>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="review-name" className="text-[12px] font-[700] text-[#374151]">
                  Name <span className="font-[500] text-[#6B7280]">(optional)</span>
                </label>
                <input
                  id="review-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full rounded-[4px] border border-[#D1D5DB] px-3 py-2 text-[13px] text-[#111317] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="review-email" className="text-[12px] font-[700] text-[#374151]">
                  Email <span className="font-[500] text-[#6B7280]">(optional)</span>
                </label>
                <input
                  id="review-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-[4px] border border-[#D1D5DB] px-3 py-2 text-[13px] text-[#111317] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="review-feedback" className="text-[12px] font-[700] text-[#374151]">
                  Your Feedback
                </label>
                <span className="text-[11px] font-[500] text-[#6B7280] -mt-1">
                  Please let us know what can we do to improve?
                </span>
                <textarea
                  id="review-feedback"
                  rows={4}
                  required
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Enter your feedback here..."
                  className="w-full rounded-[4px] border border-[#D1D5DB] px-3 py-2 text-[13px] text-[#111317] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB] resize-y"
                />
              </div>

              <div className="pt-1 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep('rate')}
                  className="text-[12px] font-[700] text-[#6B7280] hover:text-[#111317] inline-flex items-center gap-1 cursor-pointer"
                >
                  <ArrowLeft size={13} /> Back
                </button>
                <button
                  type="submit"
                  className="bg-[#0B0D10] hover:bg-[#1F2937] text-white text-[13px] font-[700] px-6 py-2.5 rounded-[5px] transition-colors cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}

        {step === 'submitted' && (
          <div className="bg-white rounded-[8px] p-6 sm:p-7 text-[#111317] text-center flex flex-col items-center gap-3">
            <CheckCircle2 size={42} className="text-[#16A34A]" />
            <h1 className="text-[20px] font-[800] text-[#111317]">
              Thank you for your feedback
            </h1>
            <p className="text-[13px] text-[#4B5563] leading-[1.55]">
              We appreciate you taking the time to tell us how we can do better. George Handyman Services will review your note carefully.
            </p>
            <Link
              to="/"
              className="mt-2 inline-block bg-[#D94E0F] hover:bg-[#B8400B] text-white text-[12.5px] font-[800] uppercase tracking-wide px-6 py-2.5 rounded-[4px] transition-colors"
            >
              Return Home
            </Link>
          </div>
        )}

        {/* Bottom Progress Bar */}
        <div className="mt-4 w-full h-[14px] rounded-full bg-[#3F4248] overflow-hidden relative flex items-center justify-center">
          <div
            className="absolute inset-y-0 left-0 bg-[#F97316] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
          <span className="relative z-10 text-[10px] font-[800] text-white/95 leading-none">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
