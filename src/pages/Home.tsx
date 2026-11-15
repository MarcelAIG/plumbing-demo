import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { HOME_FAQS } from '../data/faqs';
import { useState, useEffect, useRef, type PointerEvent as ReactPointerEvent, type FormEvent, type CSSProperties } from 'react';
import { ChevronDown, Phone, Check, MapPin, Wrench, ShieldCheck, Award, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  PHONE_NUMBER,
  PHONE_HREF,
  WHATSAPP_HREF,
  BUSINESS_NAME,
  BUSINESS_SHORT_NAME,
  GREEK_IDENTITY,
  FACEBOOK_URL,
  GOOGLE_MAPS_REVIEW_URL,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
} from '../config';
import { Logo } from '../components/Logo';

const SERVICE_TILES = [
  {
    title: 'FAUCET REPAIR & REPLACEMENT',
    image: '/client-assets/portfolio/faucet-after.png',
    to: '/services/plumbing-works',
    description: 'Repair or replacement of faulty, leaking, or corroded kitchen and bathroom faucets.',
  },
  {
    title: 'KITCHEN & BATHROOM SINKS',
    image: '/client-assets/portfolio/faucet-before.png',
    to: '/services/plumbing-works',
    description: 'Kitchen and bathroom sink repairs, tap upgrades, and neat fixture connections.',
  },
  {
    title: 'GENERAL MINOR PLUMBING',
    image: '/client-assets/portfolio/faucet-after.png',
    to: '/services/plumbing-works',
    description: 'Everyday minor plumbing work, seal replacements, and household fixture checks.',
  },
  {
    title: 'FURNITURE ASSEMBLY',
    image: '/client-assets/portfolio/storage-box-after-closed.png',
    to: '/services/carpentry',
    description: 'Careful assembly of indoor furniture and outdoor storage units ready for daily use.',
  },
  {
    title: 'CABINET & DRAWER REPAIRS',
    image: '/client-assets/portfolio/storage-box-after-open.png',
    to: '/services/carpentry',
    description: 'Cabinet door alignment, drawer runner fixes, hinge replacements, and latch repairs.',
  },
  {
    title: 'PARQUET & SMALL CARPENTRY',
    image: '/client-assets/portfolio/storage-box-before-unassembled.png',
    to: '/services/carpentry',
    description: 'Parquet installation and general small carpentry jobs completed cleanly around your home.',
  },
  {
    title: 'LIGHT FIXTURE INSTALLATION',
    image: '/client-assets/portfolio/pendant-light-after.png',
    to: '/services/electrical-lighting',
    description: 'Safe installation and replacement of ceiling pendant lights and indoor or porch fixtures.',
  },
  {
    title: 'SWITCH & SOCKET REPLACEMENT',
    image: '/client-assets/portfolio/pendant-light-before.png',
    to: '/services/electrical-lighting',
    description: 'Switch and socket installation or replacement for tidy, dependable everyday use.',
  },
  {
    title: 'DECORATIVE & PERGOLA LIGHTING',
    image: '/client-assets/portfolio/pergola-string-lights-view-1.png',
    to: '/services/electrical-lighting',
    description: 'Lighting improvements and decorative string lighting for pergolas, patios, and outdoor spaces.',
  },
  {
    title: 'GARDEN CLEANING & WEEDING',
    image: '/client-assets/portfolio/pergola-string-lights-view-2.png',
    to: '/services/garden-yard-work',
    description: 'Garden cleaning, weeding, and small pruning to keep outdoor areas neat and accessible.',
  },
  {
    title: 'FENCE CREATION & REPAIR',
    image: '/client-assets/portfolio/storage-box-after-closed.png',
    to: '/services/garden-yard-work',
    description: 'Practical fence creation and repair for garden boundaries and residential yards.',
  },
  {
    title: 'GENERAL YARD MAINTENANCE',
    image: '/client-assets/portfolio/pergola-string-lights-view-2.png',
    to: '/services/garden-yard-work',
    description: 'Ongoing yard maintenance and outdoor tidying across Larnaca and Limassol.',
  },
];

const WORK_GALLERY = [
  {
    image: '/client-assets/portfolio/pergola-string-lights-view-1.png',
    alt: 'Pergola decorative string lighting installation — finished view 1',
  },
  {
    image: '/client-assets/portfolio/pergola-string-lights-view-2.png',
    alt: 'Pergola decorative string lighting installation — finished view 2',
  },
  {
    image: '/client-assets/portfolio/storage-box-before-unassembled.png',
    alt: 'Outdoor storage box assembly — unassembled panels before setup',
  },
  {
    image: '/client-assets/portfolio/storage-box-after-closed.png',
    alt: 'Outdoor storage box assembly — finished and closed',
  },
  {
    image: '/client-assets/portfolio/storage-box-after-open.png',
    alt: 'Outdoor storage box assembly — finished and open',
  },
  {
    image: '/client-assets/portfolio/pendant-light-before.png',
    alt: 'Ceiling pendant light fixture before replacement',
  },
  {
    image: '/client-assets/portfolio/pendant-light-after.png',
    alt: 'Ceiling pendant light fixture after installation',
  },
  {
    image: '/client-assets/portfolio/faucet-before.png',
    alt: 'Old corroded bathroom basin faucet before replacement',
  },
  {
    image: '/client-assets/portfolio/faucet-after.png',
    alt: 'Clean replacement chrome basin faucet installed',
  },
];

type CustomerReview = {
  author: string;
  service: string;
  preview: string;
  full?: string;
};

const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    author: 'Andreas P.',
    service: 'Larnaca · Plumbing Works',
    preview:
      'Replaced our corroded bathroom basin faucet quickly and neatly. Everything was left spotless and the new mixer tap works smoothly.',
    full:
      'Replaced our corroded bathroom basin faucet quickly and neatly. Arrived on time in Larnaca, brought the right fittings, and left the sink area spotless.',
  },
  {
    author: 'Elena C.',
    service: 'Limassol · Carpentry',
    preview:
      'Assembled our large outdoor patio storage box from flat-pack panels. Very careful with alignment so the lid and latches close properly.',
  },
  {
    author: 'Nikos M.',
    service: 'Larnaca · Electrical & Lighting',
    preview:
      'Replaced an old ceiling pendant light and tightened up the fixture cleanly. Clear pricing, polite communication, and tidy work.',
  },
  {
    author: 'Maria K.',
    service: 'Limassol · Decorative Lighting',
    preview:
      'Installed decorative string lights along our wooden pergola. Looks great in the evening and all wiring was routed discreetly.',
  },
  {
    author: 'Christina G.',
    service: 'Larnaca · Cabinet Repairs',
    preview:
      'Fixed two sagging kitchen cabinet doors and a sticking drawer runner in one short visit. Reliable and easy to reach by phone.',
  },
  {
    author: 'Stavros L.',
    service: 'Limassol · Garden & Yard Work',
    preview:
      'Cleared overgrown weeds in the yard and repaired a loose section of timber fencing. Solid work and fair price.',
  },
];

type FacebookPost = {
  id: string;
  images: string[];
  caption: string;
  date: string;
  reactions: number;
};

type FacebookGridTile = {
  id: string;
  image: string;
  postIndex: number;
  slideIndex: number;
};

const FACEBOOK_POSTS: FacebookPost[] = [
  {
    id: 'fb-post-1',
    images: [
      '/client-assets/facebook/fb-post-1-2.jpg',
      '/client-assets/facebook/fb-post-1-1.jpg',
    ],
    caption: 'Before and after. No crack, no problem. Fixed.',
    date: 'MAY 22, 2026',
    reactions: 0,
  },
  {
    id: 'fb-post-2',
    images: [
      '/client-assets/facebook/fb-post-2-1.jpg',
      '/client-assets/facebook/fb-post-2-2.jpg',
    ],
    caption: 'Water tank float valve needed to be replaced',
    date: 'MAY 20, 2026',
    reactions: 0,
  },
  {
    id: 'fb-post-3',
    images: [
      '/client-assets/facebook/fb-post-3-2.jpg',
      '/client-assets/facebook/fb-post-3-1.jpg',
    ],
    caption: 'Before and after',
    date: 'MAY 19, 2026',
    reactions: 0,
  },
  {
    id: 'fb-post-4',
    images: [
      '/client-assets/facebook/fb-post-4-2.jpg',
      '/client-assets/facebook/fb-post-4-1.jpg',
    ],
    caption: 'New project finish. Clothes hanger lift.',
    date: 'FEBRUARY 20, 2026',
    reactions: 0,
  },
  {
    id: 'fb-post-5',
    images: [
      '/client-assets/facebook/fb-post-5-4.jpg',
      '/client-assets/facebook/fb-post-5-1.jpg',
      '/client-assets/facebook/fb-post-5-2.jpg',
      '/client-assets/facebook/fb-post-5-3.jpg',
    ],
    caption: 'The gutters needed to be replaced. New one is install. Looks nice.',
    date: 'FEBRUARY 9, 2026',
    reactions: 1,
  },
];

const FACEBOOK_GRID_TILES: FacebookGridTile[] = [
  { id: 'tile-1', image: '/client-assets/facebook/fb-post-1-2.jpg', postIndex: 0, slideIndex: 0 },
  { id: 'tile-2', image: '/client-assets/facebook/fb-post-2-1.jpg', postIndex: 1, slideIndex: 0 },
  { id: 'tile-3', image: '/client-assets/facebook/fb-post-3-2.jpg', postIndex: 2, slideIndex: 0 },
  { id: 'tile-4', image: '/client-assets/facebook/fb-post-4-2.jpg', postIndex: 3, slideIndex: 0 },
  { id: 'tile-5', image: '/client-assets/facebook/fb-post-5-4.jpg', postIndex: 4, slideIndex: 0 },
  { id: 'tile-6', image: '/client-assets/facebook/fb-post-1-1.jpg', postIndex: 0, slideIndex: 1 },
  { id: 'tile-7', image: '/client-assets/facebook/fb-post-2-2.jpg', postIndex: 1, slideIndex: 1 },
  { id: 'tile-8', image: '/client-assets/facebook/fb-post-5-1.jpg', postIndex: 4, slideIndex: 1 },
  { id: 'tile-9', image: '/client-assets/facebook/fb-post-4-1.jpg', postIndex: 3, slideIndex: 1 },
  { id: 'tile-10', image: '/client-assets/facebook/fb-post-3-1.jpg', postIndex: 2, slideIndex: 1 },
  { id: 'tile-11', image: '/client-assets/facebook/fb-post-5-2.jpg', postIndex: 4, slideIndex: 2 },
  { id: 'tile-12', image: '/client-assets/facebook/fb-post-5-3.jpg', postIndex: 4, slideIndex: 3 },
];

const REVIEWS_PER_PAGE = 3;
const TOTAL_REVIEW_PAGES = Math.ceil(CUSTOMER_REVIEWS.length / REVIEWS_PER_PAGE);

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeFbPostIndex, setActiveFbPostIndex] = useState<number | null>(null);
  const [visibleFbCount, setVisibleFbCount] = useState(8);
  const [fbSlideIndexes, setFbSlideIndexes] = useState<Record<string, number>>({});
  const fbModalFeedRef = useRef<HTMLDivElement>(null);
  const [reviewPage, setReviewPage] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});
  const [isDraggingReviews, setIsDraggingReviews] = useState(false);
  const reviewsTrackRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({ active: false, startX: 0, startScrollLeft: 0 });
  const programmaticScrollTimerRef = useRef<number | null>(null);
  const isProgrammaticScrollRef = useRef(false);
  const [workIndex, setWorkIndex] = useState(0);
  const [isWorkPaused, setIsWorkPaused] = useState(false);
  const [isMobileGallery, setIsMobileGallery] = useState(false);
  const workTouchStartXRef = useRef<number | null>(null);
  const [beforeAfterPos, setBeforeAfterPos] = useState(50);
  const [isDraggingBeforeAfter, setIsDraggingBeforeAfter] = useState(false);
  const beforeAfterRef = useRef<HTMLDivElement>(null);

  // Hero quote form state (no backend email integration — directs to WhatsApp/Call)
  const [quoteName, setQuoteName] = useState('');
  const [quotePhone, setQuotePhone] = useState('');
  const [quoteMessage, setQuoteMessage] = useState('');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const handleHeroQuoteSubmit = (e: FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  const heroWhatsappText = encodeURIComponent(
    `Hello, my name is ${quoteName || 'a customer'} (${quotePhone || 'no phone entered'}). I would like a quote for: ${quoteMessage || 'handyman services'}.`
  );

  const updateBeforeAfterPosition = (clientX: number) => {
    const el = beforeAfterRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setBeforeAfterPos(Math.max(4, Math.min(96, pct)));
  };

  const goToWork = (dir: 1 | -1) => {
    setWorkIndex((prev) => (prev + dir + WORK_GALLERY.length) % WORK_GALLERY.length);
  };

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const update = () => setIsMobileGallery(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (isWorkPaused || lightboxIndex !== null) return;
    const timer = window.setInterval(() => {
      setWorkIndex((prev) => (prev + 1) % WORK_GALLERY.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [isWorkPaused, lightboxIndex]);

  const getWorkSlideStyle = (idx: number): CSSProperties => {
    const n = WORK_GALLERY.length;
    const offset = ((idx - workIndex + n + Math.floor(n / 2)) % n) - Math.floor(n / 2);
    const abs = Math.abs(offset);
    const sign = Math.sign(offset);

    // [width %, height %, center-x offset % of container, opacity, zIndex]
    const desktop: Record<number, [number, number, number, number, number]> = {
      0: [40, 100, 0, 1, 30],
      1: [23, 80, 31, 1, 20],
      2: [18, 70, 51.5, 1, 10],
    };
    const mobile: Record<number, [number, number, number, number, number]> = {
      0: [74, 100, 0, 1, 30],
      1: [40, 78, 55, 1, 20],
    };
    const table = isMobileGallery ? mobile : desktop;
    const maxVisible = isMobileGallery ? 1 : 2;
    const [w, h, x, opacity, z] =
      abs <= maxVisible ? table[abs] : [18, 70, isMobileGallery ? 90 : 72, 0, 0];

    return {
      width: `${w}%`,
      height: `${h}%`,
      left: `${50 + sign * x - w / 2}%`,
      opacity,
      zIndex: z,
      pointerEvents: opacity === 0 ? 'none' : 'auto',
    };
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % WORK_GALLERY.length));
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + WORK_GALLERY.length) % WORK_GALLERY.length));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  const scrollToReviewPage = (page: number) => {
    const track = reviewsTrackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(TOTAL_REVIEW_PAGES - 1, page));
    setReviewPage(clamped);
    isProgrammaticScrollRef.current = true;
    if (programmaticScrollTimerRef.current) {
      window.clearTimeout(programmaticScrollTimerRef.current);
    }
    const maxScroll = track.scrollWidth - track.clientWidth;
    const targetLeft = TOTAL_REVIEW_PAGES > 1 ? (maxScroll * clamped) / (TOTAL_REVIEW_PAGES - 1) : 0;
    track.scrollTo({ left: targetLeft, behavior: 'smooth' });
    programmaticScrollTimerRef.current = window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 550);
  };

  const handleReviewsScroll = () => {
    if (isProgrammaticScrollRef.current) return;
    const track = reviewsTrackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) return;
    const nextPage = Math.round((track.scrollLeft / maxScroll) * (TOTAL_REVIEW_PAGES - 1));
    if (nextPage !== reviewPage) {
      setReviewPage(Math.max(0, Math.min(TOTAL_REVIEW_PAGES - 1, nextPage)));
    }
  };

  const handleTrackPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button, a')) return;
    const track = reviewsTrackRef.current;
    if (!track) return;
    dragStateRef.current = {
      active: true,
      startX: e.clientX,
      startScrollLeft: track.scrollLeft,
    };
    setIsDraggingReviews(true);
  };

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (!dragStateRef.current.active || !reviewsTrackRef.current) return;
      const dx = e.clientX - dragStateRef.current.startX;
      reviewsTrackRef.current.scrollLeft = dragStateRef.current.startScrollLeft - dx;
    };
    const onPointerUp = () => {
      if (!dragStateRef.current.active) return;
      dragStateRef.current.active = false;
      setIsDraggingReviews(false);
    };
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, []);

  useEffect(() => {
    if (activeFbPostIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const scrollTimer = window.setTimeout(() => {
      const container = fbModalFeedRef.current;
      if (!container) return;
      const target = container.querySelector<HTMLElement>(`[data-fb-post-index="${activeFbPostIndex}"]`);
      if (target) {
        target.scrollIntoView({ block: 'start' });
      }
    }, 20);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveFbPostIndex(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(scrollTimer);
      window.removeEventListener('keydown', handleKey);
    };
  }, [activeFbPostIndex]);

  return (
    <>
      <Helmet>
        <title>{`${BUSINESS_NAME} | ${GREEK_IDENTITY}`}</title>
        <meta
          name="description"
          content={`Reliable handyman services in Larnaca and Limassol districts, Cyprus. Plumbing works, carpentry, electrical & lighting, and garden & yard work. Call ${PHONE_NUMBER}.`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: BUSINESS_NAME,
            alternateName: GREEK_IDENTITY,
            telephone: PHONE_NUMBER,
            areaServed: 'Larnaca and Limassol districts, Cyprus',
            sameAs: [FACEBOOK_URL],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: GOOGLE_RATING,
              reviewCount: String(GOOGLE_REVIEW_COUNT),
            },
          })}
        </script>
      </Helmet>

      {/* 6.1 Hero */}
      <section className="relative w-full min-h-[max(100dvh,780px)] flex items-start lg:items-end pt-[112px] lg:pt-[120px] pb-[48px] lg:pb-0 bg-[#111827]">
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#111827]">
          <img
            src="/client-assets/references/hero-minimalist.jpg"
            className="absolute inset-0 w-full h-full object-cover object-center"
            alt="Minimalist home interior cared for by Handyman Larnaca and Limassol District"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 lg:px-8 pb-[56px] lg:pb-[88px] flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-[640px] flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 lg:pb-[48px]">
            <h1 className="text-[32px] sm:text-[42px] lg:text-[54px] uppercase font-[800] text-white font-oswald leading-[1.05] tracking-[-0.01em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
              RELIABLE HANDYMAN SERVICES{' '}
              <br />
              IN LARNACA &amp; LIMASSOL
            </h1>
            <p className="text-[17px] lg:text-[19px] text-white/90 font-[600] max-w-[520px] mt-[20px] leading-[1.55] drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">
              From plumbing repairs and furniture assembly to lighting installations and outdoor maintenance, we take care of the small jobs that make a big difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-[28px] w-full sm:w-auto">
              <a href={PHONE_HREF} className="bg-[#0D9488] text-white font-[800] px-8 py-4 rounded-[4px] text-center flex items-center justify-center gap-2 uppercase tracking-wide hover:bg-white hover:text-[#0F766E] hover:border-white active:scale-[0.98] border-2 border-[#0D9488] shadow-lg w-full sm:w-auto">
                <Phone size={20} />
                CALL NOW
              </a>
              <Link to="/contact" className="border-2 border-white bg-white text-[#111827] font-[800] px-8 py-4 rounded-[4px] text-center uppercase tracking-wide hover:bg-[#0D9488] hover:text-white hover:border-[#0D9488] active:scale-[0.98] shadow-lg w-full sm:w-auto">
                Get Free Quote
              </Link>
            </div>
          </div>

          <div className="w-full max-w-[460px] mx-auto lg:mx-0 bg-white/95 backdrop-blur-md border border-black/10 rounded-[6px] p-6 lg:p-8 flex-shrink-0 lg:mr-16 xl:mr-32 shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
            <h3 className="text-[24px] lg:text-[28px] text-center uppercase font-[800] text-[#0F766E] font-oswald leading-none tracking-[0.02em] mb-7">
              GET A FREE QUOTE
            </h3>
            {quoteSubmitted ? (
              <div className="flex flex-col gap-4 text-center py-2">
                <p className="text-[14px] font-[700] text-[#111827] leading-[1.5]">
                  This preview site does not send online form emails automatically. Send your details directly via WhatsApp or call us now:
                </p>
                <a
                  href={`https://wa.me/35797608803?text=${heroWhatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1EB954] text-white font-[800] py-3.5 px-5 rounded-[4px] text-[14px] uppercase tracking-wide transition-colors"
                >
                  Send via WhatsApp
                </a>
                <a
                  href={PHONE_HREF}
                  className="bg-[#0D9488] hover:bg-[#0F766E] text-white font-[800] py-3.5 px-5 rounded-[4px] text-[14px] uppercase tracking-wide transition-colors"
                >
                  Call {PHONE_NUMBER}
                </a>
                <button
                  type="button"
                  onClick={() => setQuoteSubmitted(false)}
                  className="text-[12px] font-[700] text-[#4B5563] hover:text-[#111827] underline cursor-pointer"
                >
                  Edit details
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleHeroQuoteSubmit}>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-[800] tracking-[0.1em] uppercase text-[#111827]">Full Name *</label>
                  <input
                    type="text"
                    value={quoteName}
                    onChange={(e) => setQuoteName(e.target.value)}
                    placeholder="Your full name"
                    className="bg-[#F3F4F6] border border-black/10 rounded-[3px] p-3 text-[#111827] placeholder-[#6B7280] focus:border-[#0D9488] outline-none text-[15px]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-[800] tracking-[0.1em] uppercase text-[#111827]">Phone *</label>
                  <input
                    type="tel"
                    value={quotePhone}
                    onChange={(e) => setQuotePhone(e.target.value)}
                    placeholder={PHONE_NUMBER}
                    className="bg-[#F3F4F6] border border-black/10 rounded-[3px] p-3 text-[#111827] placeholder-[#6B7280] focus:border-[#0D9488] outline-none text-[15px]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-[800] tracking-[0.1em] uppercase text-[#111827]">Short message about your needs *</label>
                  <textarea
                    rows={3}
                    value={quoteMessage}
                    onChange={(e) => setQuoteMessage(e.target.value)}
                    placeholder="Tell us what needs repairing, assembling, or installing in Larnaca or Limassol"
                    className="bg-[#F3F4F6] border border-black/10 rounded-[3px] p-3 text-[#111827] placeholder-[#6B7280] focus:border-[#0D9488] outline-none text-[15px] resize-none"
                    required
                  />
                </div>
                <div className="flex items-start gap-3 mt-1">
                  <div className="relative flex items-center mt-[2px] shrink-0">
                    <input
                      id="terms-consent"
                      type="checkbox"
                      required
                      className="peer appearance-none w-4 h-4 rounded-[2px] bg-[#F3F4F6] border border-black/25 checked:bg-[#0D9488] checked:border-[#0D9488] cursor-pointer transition-colors"
                    />
                    <Check
                      size={12}
                      strokeWidth={3}
                      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                    />
                  </div>
                  <label htmlFor="terms-consent" className="text-[12px] text-[#4B5563] leading-[1.45] cursor-pointer select-none">
                    I agree to the{' '}
                    <Link
                      to="/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0F766E] hover:text-[#115E59] underline underline-offset-2 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      terms &amp; conditions
                    </Link>{' '}
                    and{' '}
                    <Link
                      to="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0F766E] hover:text-[#115E59] underline underline-offset-2 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      privacy policy
                    </Link>
                    .
                  </label>
                </div>
                <button type="submit" className="mt-2 bg-[#0D9488] border-2 border-[#0D9488] text-white font-[800] py-4 rounded-[4px] text-[16px] uppercase tracking-wide hover:bg-white hover:text-[#0F766E] active:scale-[0.98] w-full shadow-md cursor-pointer">
                  SEND
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 6.2 About Us & Highlights */}
      <section className="bg-white border-t border-black/5 pt-[56px] lg:pt-[84px] pb-[44px] lg:pb-[64px] px-4 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 lg:flex lg:justify-between lg:items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-2.5 text-[#111827]">
              <MapPin size={20} className="shrink-0 text-[#0D9488]" />
              <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-[800] uppercase tracking-[0.04em]">LARNACA &amp; LIMASSOL</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#111827]">
              <Wrench size={20} className="shrink-0 text-[#0D9488]" />
              <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-[800] uppercase tracking-[0.04em]">INDOOR &amp; OUTDOOR</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#111827]">
              <ShieldCheck size={20} className="shrink-0 text-[#0D9488]" />
              <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-[800] uppercase tracking-[0.04em]">CAREFUL FINISH</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#111827]">
              <Award size={20} className="shrink-0 text-[#F59E0B]" />
              <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-[800] uppercase tracking-[0.04em]">5.0 / 5 ON GOOGLE</span>
            </div>
          </div>

          <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
            <div className="flex flex-col">
              <div className="flex items-center gap-5 mb-5">
                <h2 className="text-[32px] lg:text-[44px] font-[800] uppercase text-[#111827] leading-none tracking-[-0.01em] shrink-0">
                  ABOUT US
                </h2>
                <div className="h-[2px] flex-grow bg-[#0D9488]/60" />
              </div>
              <p className="text-[16px] lg:text-[17px] text-[#4B5563] font-[600] leading-[1.65] max-w-[540px]">
                {BUSINESS_NAME} ({GREEK_IDENTITY}) provides practical, reliable home maintenance across the Larnaca and Limassol districts in Cyprus—covering plumbing works, carpentry, electrical &amp; lighting installations, and garden &amp; yard upkeep.
              </p>
              <div className="mt-7 flex items-center gap-5">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-[#1877F2] hover:scale-110 transition-transform shadow-md"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                    <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
                  </svg>
                </a>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-[#25D366] hover:scale-110 transition-transform shadow-md"
                >
                  <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white" aria-hidden="true">
                    <path d="M16.004 3.2C8.94 3.2 3.2 8.94 3.2 16.004c0 2.257.59 4.46 1.71 6.403L3.1 28.9l6.652-1.745a12.74 12.74 0 0 0 6.252 1.635h.005c7.06 0 12.801-5.74 12.801-12.803 0-3.42-1.331-6.634-3.749-9.051A12.716 12.716 0 0 0 16.004 3.2zm7.452 18.082c-.315.887-1.832 1.696-2.548 1.803-.651.097-1.474.138-2.378-.149-.549-.174-1.253-.406-2.155-.795-3.792-1.637-6.269-5.462-6.458-5.714-.189-.252-1.54-2.051-1.54-3.913 0-1.862.976-2.776 1.322-3.154.346-.378.755-.472 1.007-.472s.504.003.725.013c.233.011.544-.088.851.649.315.755 1.07 2.616 1.164 2.805.095.189.158.41.032.662-.126.252-.189.41-.378.63-.189.22-.398.493-.567.662-.189.189-.386.394-.166.772.221.378.98 1.617 2.104 2.619 1.446 1.289 2.665 1.689 3.043 1.878.378.189.599.158.819-.094.221-.252.945-1.102 1.197-1.48.252-.378.504-.315.85-.189.346.126 2.203 1.039 2.581 1.228.378.189.63.284.725.441.094.158.094.914-.221 1.8z" />
                  </svg>
                </a>
                <a
                  href={GOOGLE_MAPS_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps Reviews"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-[#F3F4F6] border border-black/10 hover:scale-110 transition-transform shadow-md"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </a>
                <a
                  href={PHONE_HREF}
                  aria-label={`Call ${PHONE_NUMBER}`}
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-[#0D9488] text-white hover:scale-110 transition-transform shadow-md"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Logo className="w-56 sm:w-64 lg:w-72" />
            </div>
          </div>
        </div>
      </section>

      {/* 6.3 Our Services */}
      <section className="bg-[#F8FAFC] border-t border-black/5 pt-[44px] lg:pt-[64px] pb-[70px] lg:pb-[100px] px-4 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end gap-5 sm:gap-6 mb-7 lg:mb-9">
            <div className="inline-flex flex-col items-start sm:items-center shrink-0">
              <span className="text-[12px] sm:text-[13px] font-[800] tracking-[0.08em] uppercase text-[#0D9488] mb-1.5">
                WHAT WE HANDLE
              </span>
              <h2 className="text-[32px] sm:text-[38px] lg:text-[46px] uppercase font-[800] text-[#111827] leading-none tracking-[-0.01em]">
                OUR SERVICES
              </h2>
            </div>
            <div className="h-[2px] flex-grow bg-[#0D9488]/60 mb-[15px] sm:mb-[18px] lg:mb-[22px]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3px] bg-[#E5E7EB] border border-black/10 rounded-[4px] overflow-hidden shadow-sm">
            {SERVICE_TILES.map((service) => (
              <Link
                key={service.title}
                to={service.to}
                className="group relative aspect-[4/3] overflow-hidden bg-[#E5E7EB] block"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent group-hover:from-black/65 transition-colors duration-300 pointer-events-none" />
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4 flex flex-col items-start pointer-events-none">
                  <div className="bg-[#0B0B0B]/95 group-hover:bg-[#0B0B0B] group-focus-visible:bg-[#0B0B0B] border border-white/10 group-hover:border-transparent group-focus-visible:border-transparent rounded-[6px] group-hover:rounded-b-none group-focus-visible:rounded-b-none px-3.5 py-2 sm:px-4 sm:py-2.5 inline-flex items-center gap-2.5 transition-all duration-300 shadow-lg">
                    <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-[800] uppercase tracking-[0.03em] text-[#FFFFFF] leading-none">
                      {service.title}
                    </span>
                    <span className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] rounded-full bg-[#0D9488] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight size={13} strokeWidth={3} className="text-white" />
                    </span>
                  </div>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out w-full">
                    <div className="overflow-hidden">
                      <div className="bg-white text-[#1A1A1A] rounded-b-[6px] rounded-tr-[6px] px-3.5 py-2.5 sm:px-4 sm:py-3.5 shadow-xl">
                        <p className="text-[12px] sm:text-[13px] font-[700] leading-[1.45] text-[#222222] line-clamp-4">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6.35 Before & After Results Slider */}
      <section className="bg-white py-[52px] lg:py-[80px] px-4 lg:px-8 border-t border-black/5">
        <div className="max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-14 items-center">
          {/* Interactive Before / After Slider */}
          <div
            ref={beforeAfterRef}
            onPointerDown={(e) => {
              setIsDraggingBeforeAfter(true);
              e.currentTarget.setPointerCapture(e.pointerId);
              updateBeforeAfterPosition(e.clientX);
            }}
            onPointerMove={(e) => {
              if (!isDraggingBeforeAfter) return;
              updateBeforeAfterPosition(e.clientX);
            }}
            onPointerUp={() => setIsDraggingBeforeAfter(false)}
            onPointerCancel={() => setIsDraggingBeforeAfter(false)}
            className="group relative w-full aspect-[20/11] rounded-[12px] overflow-hidden bg-[#F3F4F6] shadow-[0_20px_45px_rgba(15,23,42,0.14)] select-none touch-none cursor-ew-resize border border-black/10"
          >
            {/* After Image (Full Base Layer) */}
            <img
              src="/client-assets/portfolio/faucet-slider-after.png"
              alt="Clean replacement chrome faucet installed by Handyman Larnaca and Limassol District"
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
            />

            {/* Before Image (Clipped Left Layer) */}
            <div
              className="absolute inset-0 pointer-events-none select-none"
              style={{ clipPath: `inset(0 ${100 - beforeAfterPos}% 0 0)` }}
            >
              <img
                src="/client-assets/portfolio/faucet-slider-before.png"
                alt="Old corroded basin faucet before replacement"
                draggable={false}
                className="w-full h-full object-cover object-center pointer-events-none select-none"
              />
            </div>

            {/* Top Left BEFORE Badge & Top Right AFTER Badge */}
            <span className="absolute top-3.5 left-3.5 z-10 bg-black/75 backdrop-blur-sm text-white text-[11px] font-[800] uppercase tracking-[0.06em] px-2.5 py-1 rounded-[4px] pointer-events-none">
              BEFORE
            </span>
            <span className="absolute top-3.5 right-3.5 z-10 bg-black/75 backdrop-blur-sm text-white text-[11px] font-[800] uppercase tracking-[0.06em] px-2.5 py-1 rounded-[4px] pointer-events-none">
              AFTER
            </span>

            {/* Vertical Split Line + Center Handle */}
            <div
              className="absolute inset-y-0 z-20 pointer-events-none"
              style={{ left: `${beforeAfterPos}%`, transform: 'translateX(-50%)' }}
            >
              <div className="h-full w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.65)] mx-auto" />
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-[#0D9488] border-2 border-white shadow-[0_4px_14px_rgba(0,0,0,0.45)] flex items-center justify-center text-white transition-transform duration-150 ${
                  isDraggingBeforeAfter ? 'scale-110 ring-4 ring-[#0D9488]/30' : 'group-hover:scale-105'
                }`}
              >
                <ChevronLeft size={14} strokeWidth={3} className="-mr-0.5" />
                <ChevronRight size={14} strokeWidth={3} className="-ml-0.5" />
              </div>
            </div>

            {/* Keyboard Accessible Range Slider */}
            <input
              type="range"
              min={4}
              max={96}
              value={Math.round(beforeAfterPos)}
              onChange={(e) => setBeforeAfterPos(Number(e.target.value))}
              aria-label="Compare old corroded basin faucet and clean replacement chrome faucet"
              className="sr-only"
            />
          </div>

          {/* Right Column Text & CTA */}
          <div className="flex flex-col items-start">
            <span className="text-[12px] sm:text-[13px] font-[800] uppercase tracking-[0.12em] text-[#0D9488] mb-3">
              OUR RESULTS
            </span>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-[800] text-[#111827] leading-[1.08] tracking-[-0.01em] mb-5">
              See the Difference for Yourself.
            </h2>
            <p className="text-[16px] lg:text-[17px] text-[#4B5563] font-[600] leading-[1.65] max-w-[490px] mb-4">
              Small repairs can make a big difference. Explore real examples of our maintenance and replacement work.
            </p>
            <p className="text-[13px] font-[600] text-[#6B7280] mb-7">
              Move the slider to compare the old corroded basin faucet and the clean replacement chrome faucet.
            </p>
            <Link
              to="/contact"
              className="bg-[#0D9488] hover:bg-[#0F766E] text-white font-[800] text-[14px] px-7 py-3.5 rounded-[5px] transition-colors inline-flex items-center gap-2 shadow-lg"
            >
              Get Your Free Quote <ArrowRight size={16} strokeWidth={2.6} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6.4 Our Process */}
      <section className="bg-[#F8FAFC] border-t border-black/5 pt-[52px] lg:pt-[68px] pb-[76px] lg:pb-[108px] px-4 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-5 sm:gap-6">
            <h2 className="text-[32px] sm:text-[38px] lg:text-[46px] uppercase font-[800] text-[#111827] leading-none tracking-[-0.01em] shrink-0">
              OUR PROCESS
            </h2>
            <div className="h-[2px] flex-grow bg-[#0D9488]/60" />
          </div>
          <p className="text-[15px] lg:text-[16px] text-[#4B5563] font-[600] mt-2.5 leading-[1.5]">
            Our process is simple and only contains a few simple steps
          </p>

          <div className="mt-12 lg:mt-16 flex flex-wrap justify-center gap-x-8 gap-y-12 lg:grid lg:grid-cols-5 lg:gap-6">
            {/* Step 1: Free Consult */}
            <div className="flex flex-col items-center text-center w-[156px] sm:w-[180px] lg:w-auto">
              <div className="flex flex-col items-center">
                <div className="w-[144px] h-[144px] xl:w-[160px] xl:h-[160px] rounded-full bg-white border border-black/10 flex items-center justify-center shadow-[0_12px_28px_rgba(15,23,42,0.1)]">
                  <svg viewBox="0 0 64 64" className="w-[92px] h-[92px] xl:w-[102px] xl:h-[102px]" fill="none" stroke="#111111" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7.5 23 L10.5 39 H22.5" />
                    <path d="M10.5 39 L8 50.5" />
                    <path d="M20.5 39 L22.5 50.5" />
                    <circle cx="16.5" cy="14" r="3.8" />
                    <path d="M12.5 23.5 C12.5 21 14.3 20 16.5 20 C18.7 20 19.8 21.3 20 23.5 L20.5 32.5 H26 C27.8 32.5 28.5 33.7 28.5 35.5 V48 C28.5 49.5 27.6 50.5 26.2 50.5 C24.8 50.5 24 49.5 24 48 V37 H14.5 C13.2 37 12.5 36.2 12.5 34.5 Z" />
                    <path d="M19 24.5 L21.5 29.5 L26 26.5" />
                    <polygon points="27,20 31.5,18 32.2,23.5 27.7,25.5" fill="#FFFFFF" />
                    <path d="M56.5 23 L53.5 39 H41.5" />
                    <path d="M53.5 39 L56 50.5" />
                    <path d="M43.5 39 L41.5 50.5" />
                    <circle cx="47.5" cy="14" r="3.8" />
                    <path d="M51.5 23.5 C51.5 21 49.7 20 47.5 20 C45.3 20 44.2 21.3 44 23.5 L43.5 32.5 H38 C36.2 32.5 35.5 33.7 35.5 35.5 V48 C35.5 49.5 36.4 50.5 37.8 50.5 C39.2 50.5 40 49.5 40 48 V37 H49.5 C50.8 37 51.5 36.2 51.5 34.5 Z" />
                    <path d="M44.5 25 L41 30.5 L36.5 28.5" />
                  </svg>
                </div>
                <svg viewBox="0 0 32 28" className="w-[28px] h-[24px] -mt-[3px]" aria-hidden="true">
                  <path d="M2 0 L14.7 12.5 V28 H17.3 V12.5 L30 0 Z" fill="#0D9488" />
                </svg>
              </div>
              <span className="mt-2.5 text-[15px] lg:text-[16px] font-[800] text-[#111827] leading-[1.3]">
                Free Consult
              </span>
            </div>

            {/* Step 2: Estimation & Proposal */}
            <div className="flex flex-col items-center text-center w-[156px] sm:w-[180px] lg:w-auto">
              <div className="flex flex-col items-center">
                <div className="w-[144px] h-[144px] xl:w-[160px] xl:h-[160px] rounded-full bg-white border border-black/10 flex items-center justify-center shadow-[0_12px_28px_rgba(15,23,42,0.1)]">
                  <svg viewBox="0 0 64 64" className="w-[92px] h-[92px] xl:w-[102px] xl:h-[102px]" fill="none" stroke="#111111" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="13" y="10" width="25" height="36" rx="2.5" />
                    <path d="M18 16.5 H33" />
                    <path d="M18 21.5 H33" />
                    <path d="M18 26.5 H29" />
                    <path d="M26.5 38 H32" />
                    <rect x="18" y="34" width="6" height="6" rx="1" />
                    <path d="M19.4 37 L20.6 38.3 L22.8 35.8" />
                    <g transform="rotate(30 43.5 23)">
                      <rect x="41" y="10.5" width="5" height="22" rx="1" fill="#FFFFFF" />
                      <path d="M41 14 H46" />
                      <path d="M41 16.5 H46" />
                      <path d="M41 32.5 L43.5 38 L46 32.5" fill="#FFFFFF" />
                    </g>
                    <circle cx="38.5" cy="45.5" r="5.5" fill="#FFFFFF" />
                    <path d="M36 45.5 L37.7 47.2 L41.2 43.7" />
                  </svg>
                </div>
                <svg viewBox="0 0 32 28" className="w-[28px] h-[24px] -mt-[3px]" aria-hidden="true">
                  <path d="M2 0 L14.7 12.5 V28 H17.3 V12.5 L30 0 Z" fill="#0D9488" />
                </svg>
              </div>
              <span className="mt-2.5 text-[15px] lg:text-[16px] font-[800] text-[#111827] leading-[1.3]">
                Estimation &amp;
                <br />
                Proposal
              </span>
            </div>

            {/* Step 3: We do the work */}
            <div className="flex flex-col items-center text-center w-[156px] sm:w-[180px] lg:w-auto">
              <div className="flex flex-col items-center">
                <div className="w-[144px] h-[144px] xl:w-[160px] xl:h-[160px] rounded-full bg-white border border-black/10 flex items-center justify-center shadow-[0_12px_28px_rgba(15,23,42,0.1)]">
                  <svg viewBox="0 0 64 64" className="w-[92px] h-[92px] xl:w-[102px] xl:h-[102px]" fill="none" stroke="#111111" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M35.2 26.1 Q35.5 26.9 36.4 27.1 L38.6 27.4 Q39.5 27.5 39.5 28.4 L39.5 30.6 Q39.5 31.5 38.6 31.6 L36.4 31.9 Q35.5 32.1 35.2 32.9 L34.3 35.0 Q34.0 35.8 34.5 36.5 L35.8 38.3 Q36.3 39.1 35.7 39.7 L34.2 41.2 Q33.6 41.8 32.8 41.3 L31.0 40.0 Q30.3 39.5 29.5 39.8 L27.4 40.7 Q26.6 41.0 26.4 41.9 L26.1 44.1 Q26.0 45.0 25.1 45.0 L22.9 45.0 Q22.0 45.0 21.9 44.1 L21.6 41.9 Q21.4 41.0 20.6 40.7 L18.5 39.8 Q17.7 39.5 17.0 40.0 L15.2 41.3 Q14.4 41.8 13.8 41.2 L12.3 39.7 Q11.7 39.1 12.2 38.3 L13.5 36.5 Q14.0 35.8 13.7 35.0 L12.8 32.9 Q12.5 32.1 11.6 31.9 L9.4 31.6 Q8.5 31.5 8.5 30.6 L8.5 28.4 Q8.5 27.5 9.4 27.4 L11.6 27.1 Q12.5 26.9 12.8 26.1 L13.7 24.0 Q14.0 23.2 13.5 22.5 L12.2 20.7 Q11.7 19.9 12.3 19.3 L13.8 17.8 Q14.4 17.2 15.2 17.7 L17.0 19.0 Q17.7 19.5 18.5 19.2 L20.6 18.3 Q21.4 18.0 21.6 17.1 L21.9 14.9 Q22.0 14.0 22.9 14.0 L25.1 14.0 Q26.0 14.0 26.1 14.9 L26.4 17.1 Q26.6 18.0 27.4 18.3 L29.5 19.2 Q30.3 19.5 31.0 19.0 L32.8 17.7 Q33.6 17.2 34.2 17.8 L35.7 19.3 Q36.3 19.9 35.8 20.7 L34.5 22.5 Q34.0 23.2 34.3 24.0 Z" fill="#FFFFFF" />
                    <circle cx="24" cy="29.5" r="8.2" />
                    <path d="M20.2 29.5 L23 32.3 L28.2 27" />
                    <g transform="rotate(32 45.5 34)">
                      <path d="M43 14.5 C39.2 16 39.2 22.2 42.8 24.5 V49 A2.7 2.7 0 0 0 48.2 49 V24.5 C51.8 22.2 51.8 16 48 14.5 V19.5 C48 21.5 43 21.5 43 19.5 Z" fill="#FFFFFF" />
                      <path d="M45.5 29 V46" />
                    </g>
                  </svg>
                </div>
                <svg viewBox="0 0 32 28" className="w-[28px] h-[24px] -mt-[3px]" aria-hidden="true">
                  <path d="M2 0 L14.7 12.5 V28 H17.3 V12.5 L30 0 Z" fill="#0D9488" />
                </svg>
              </div>
              <span className="mt-2.5 text-[15px] lg:text-[16px] font-[800] text-[#111827] leading-[1.3]">
                We do
                <br />
                the work
              </span>
            </div>

            {/* Step 4: Final Inspection */}
            <div className="flex flex-col items-center text-center w-[156px] sm:w-[180px] lg:w-auto">
              <div className="flex flex-col items-center">
                <div className="w-[144px] h-[144px] xl:w-[160px] xl:h-[160px] rounded-full bg-white border border-black/10 flex items-center justify-center shadow-[0_12px_28px_rgba(15,23,42,0.1)]">
                  <svg viewBox="0 0 64 64" className="w-[92px] h-[92px] xl:w-[102px] xl:h-[102px]" fill="none" stroke="#111111" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="22" y="10" width="25" height="36" rx="2.5" fill="#FFFFFF" />
                    <path d="M31 17.5 H42" />
                    <path d="M31 23.5 H42" />
                    <path d="M31 29.5 H42" />
                    <path d="M27 36 H39" />
                    <line x1="16.5" y1="31" x2="9.8" y2="38.8" stroke="#111111" strokeWidth="4.5" strokeLinecap="round" />
                    <circle cx="22.5" cy="24.5" r="9.5" fill="#FFFFFF" />
                    <path d="M18.5 24.5 L21.4 27.4 L27 21.5" strokeWidth="2.1" />
                    <path d="M50.6 44.5 Q51.7 46.5 49.6 47.5 Q49.3 49.8 47.1 49.4 Q45.5 51.0 43.9 49.4 Q41.7 49.8 41.4 47.5 Q39.3 46.5 40.4 44.5 Q39.3 42.5 41.4 41.5 Q41.7 39.2 43.9 39.6 Q45.5 38.0 47.1 39.6 Q49.3 39.2 49.6 41.5 Q51.7 42.5 50.6 44.5 Z" fill="#111111" stroke="none" />
                    <path d="M43 44.6 L44.8 46.5 L48.3 42.8" stroke="#FFFFFF" strokeWidth="2.1" />
                  </svg>
                </div>
                <svg viewBox="0 0 32 28" className="w-[28px] h-[24px] -mt-[3px]" aria-hidden="true">
                  <path d="M2 0 L14.7 12.5 V28 H17.3 V12.5 L30 0 Z" fill="#0D9488" />
                </svg>
              </div>
              <span className="mt-2.5 text-[15px] lg:text-[16px] font-[800] text-[#111827] leading-[1.3]">
                Final
                <br />
                Inspection
              </span>
            </div>

            {/* Step 5: Payment */}
            <div className="flex flex-col items-center text-center w-[156px] sm:w-[180px] lg:w-auto">
              <div className="flex flex-col items-center">
                <div className="w-[144px] h-[144px] xl:w-[160px] xl:h-[160px] rounded-full bg-white border border-black/10 flex items-center justify-center shadow-[0_12px_28px_rgba(15,23,42,0.1)]">
                  <svg viewBox="0 0 64 64" className="w-[92px] h-[92px] xl:w-[102px] xl:h-[102px]" fill="none" stroke="#111111" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="32" cy="18.5" r="8" fill="#FFFFFF" />
                    <path d="M32 13.8 V23.2" />
                    <path d="M34.5 16.1 C34.5 15 33.4 14.3 32 14.3 C30.6 14.3 29.5 15 29.5 16.1 C29.5 17.3 31 17.7 32 18.1 C33.1 18.5 34.5 18.9 34.5 20.2 C34.5 21.3 33.4 22 32 22 C30.6 22 29.5 21.3 29.5 20.2" />
                    <path d="M17 27.6 L25 25.8 L32 27.8 L38.5 25.8 L47 27.6 L52.8 37 L42 41 L35 45 L18 40 L11.2 37 Z" fill="#FFFFFF" stroke="none" />
                    <path d="M17 27.6 L25 25.8 C27.2 25.3 29 26.2 31 27.6" />
                    <path d="M11.8 36.2 L16.5 39" />
                    <path d="M47 27.6 L38.5 25.8 C36 25.3 33.8 26.2 32 27.8 L26.2 32 C25 33 25.8 35 27.6 34.8 C29.2 34.6 30.8 33.2 33 31.2 L42.5 39.2 C43.8 40.3 42.3 42.4 40.5 41.3 L35 37" />
                    <path d="M52.2 36.4 L43 41" />
                    <path d="M39.5 41.5 C40.5 42.8 39 44.5 37.2 43.6" />
                    <path d="M37 43.8 C37.8 45.2 36.2 46.6 34.5 45.6" />
                    <rect x="17.5" y="36.2" width="3.8" height="6.8" rx="1.9" transform="rotate(38 19.4 39.6)" fill="#FFFFFF" />
                    <rect x="20.8" y="38.2" width="3.8" height="7" rx="1.9" transform="rotate(38 22.7 41.7)" fill="#FFFFFF" />
                    <rect x="24.2" y="40.2" width="3.8" height="7" rx="1.9" transform="rotate(38 26.1 43.7)" fill="#FFFFFF" />
                    <rect x="27.8" y="41.8" width="3.8" height="6.4" rx="1.9" transform="rotate(38 29.7 45)" fill="#FFFFFF" />
                    <g transform="rotate(32 12 31)">
                      <rect x="7" y="25.5" width="7.5" height="12" rx="1.2" fill="#FFFFFF" />
                      <circle cx="10.8" cy="34.2" r="0.95" fill="#111111" stroke="none" />
                    </g>
                    <g transform="rotate(-32 52 31)">
                      <rect x="49.5" y="25.5" width="7.5" height="12" rx="1.2" fill="#FFFFFF" />
                      <circle cx="53.2" cy="34.2" r="0.95" fill="#111111" stroke="none" />
                    </g>
                  </svg>
                </div>
                <svg viewBox="0 0 32 28" className="w-[28px] h-[24px] -mt-[3px]" aria-hidden="true">
                  <path d="M2 0 L14.7 12.5 V28 H17.3 V12.5 L30 0 Z" fill="#0D9488" />
                </svg>
              </div>
              <span className="mt-2.5 text-[15px] lg:text-[16px] font-[800] text-[#111827] leading-[1.3]">
                Payment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6.45 See Our Work */}
      <section id="our-work" className="bg-white border-t border-black/5 pt-[48px] lg:pt-[64px] pb-10 sm:pb-12 lg:pb-14 overflow-hidden">
        {/* Left-Aligned Header */}
        <div className="max-w-[1344px] mx-auto px-4 lg:px-8">
          <div className="flex items-end gap-5 sm:gap-6">
            <div className="inline-flex flex-col items-start sm:items-center shrink-0">
              <span className="text-[12px] sm:text-[13px] font-[800] tracking-[0.08em] uppercase text-[#0D9488] mb-1.5">
                VIEW OUR WORK
              </span>
              <h2 className="text-[32px] sm:text-[38px] lg:text-[46px] uppercase font-[800] text-[#111827] leading-none tracking-[-0.01em]">
                OUR PROJECT GALLERY
              </h2>
            </div>
            <div className="h-[2px] flex-grow bg-[#0D9488]/60 mb-[15px] sm:mb-[18px] lg:mb-[22px]" />
          </div>
        </div>

        {/* Coverflow Carousel */}
        <div
          className="relative w-full mt-10 sm:mt-12 lg:mt-14 h-[230px] sm:h-[300px] lg:h-[400px] xl:h-[440px] select-none"
          onMouseEnter={() => setIsWorkPaused(true)}
          onMouseLeave={() => setIsWorkPaused(false)}
          onTouchStart={(e) => {
            workTouchStartXRef.current = e.touches[0].clientX;
            setIsWorkPaused(true);
          }}
          onTouchEnd={(e) => {
            const startX = workTouchStartXRef.current;
            workTouchStartXRef.current = null;
            setIsWorkPaused(false);
            if (startX === null) return;
            const dx = e.changedTouches[0].clientX - startX;
            if (Math.abs(dx) > 40) goToWork(dx < 0 ? 1 : -1);
          }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Project gallery"
        >
          {WORK_GALLERY.map((photo, idx) => {
            const isActive = idx === workIndex;
            return (
              <button
                key={photo.image}
                type="button"
                onClick={() => (isActive ? setLightboxIndex(idx) : setWorkIndex(idx))}
                aria-label={isActive ? `Open project photo: ${photo.alt}` : `Show project photo: ${photo.alt}`}
                className={`absolute top-1/2 -translate-y-1/2 p-0 overflow-hidden rounded-[12px] sm:rounded-[16px] bg-[#1A1A1A] cursor-pointer transition-all duration-[650ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                  isActive ? 'shadow-[0_18px_45px_rgba(0,0,0,0.65)]' : 'shadow-[0_10px_25px_rgba(0,0,0,0.45)]'
                }`}
                style={getWorkSlideStyle(idx)}
              >
                <img
                  src={photo.image}
                  alt={photo.alt}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}

          {/* Arrows */}
          <button
            type="button"
            onClick={() => goToWork(-1)}
            aria-label="Previous project"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#111827] border border-black/10 shadow-lg flex items-center justify-center hover:scale-110 transition-all cursor-pointer"
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => goToWork(1)}
            aria-label="Next project"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#111827] border border-black/10 shadow-lg flex items-center justify-center hover:scale-110 transition-all cursor-pointer"
          >
            <ChevronRight size={28} strokeWidth={2} />
          </button>
        </div>

        {/* View More Projects */}
        <div className="mt-10 sm:mt-12 lg:mt-14 flex justify-center px-4">
          <button
            type="button"
            onClick={() => setLightboxIndex(workIndex)}
            className="bg-[#0D9488] hover:bg-[#0F766E] text-white font-[800] text-[12px] sm:text-[13px] uppercase tracking-[0.04em] px-6 sm:px-7 py-3 sm:py-3.5 rounded-[4px] inline-flex items-center gap-2 shadow-[0_6px_18px_rgba(13,148,136,0.35)] transition-colors cursor-pointer"
          >
            VIEW MORE PROJECTS
            <span className="w-[16px] h-[16px] rounded-full bg-white flex items-center justify-center">
              <ArrowRight size={11} strokeWidth={3.2} className="text-[#0D9488]" />
            </span>
          </button>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Project photo viewer"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close photo viewer"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + WORK_GALLERY.length) % WORK_GALLERY.length);
            }}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft size={26} />
          </button>

          <div
            className="max-w-[960px] w-full flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={WORK_GALLERY[lightboxIndex].image}
              alt={WORK_GALLERY[lightboxIndex].alt}
              className="max-h-[78vh] w-auto max-w-full rounded-[8px] border-2 border-white/20 shadow-2xl object-contain"
            />
            <div className="flex items-center justify-between w-full max-w-[720px] px-2 text-[#F5F5F0]/85 text-[13px] sm:text-[14px]">
              <span>{WORK_GALLERY[lightboxIndex].alt}</span>
              <span className="shrink-0 ml-4 text-[#F5F5F0]/60">
                {lightboxIndex + 1} / {WORK_GALLERY.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % WORK_GALLERY.length);
            }}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}

      {/* 6.48 Reviews */}
      <section className="relative overflow-hidden bg-white -mt-[1px]">
        <img
          src="/images/reviews-bg.jpg"
          alt="Renovated home interior background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/60" />

        {/* Top Organic Wave Transition */}
        <div className="relative z-10 w-full leading-none pointer-events-none">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="block w-full h-[64px] sm:h-[88px] lg:h-[116px]"
            aria-hidden="true"
          >
            <path
              d="M0,0 L0,10 C130,20 320,108 525,108 C700,108 810,36 965,36 C1085,36 1150,92 1245,92 C1335,92 1395,50 1440,22 L1440,0 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1344px] mx-auto px-4 lg:px-8 pt-6 sm:pt-8 pb-5 sm:pb-6 lg:pb-8">
          {/* Eyebrow Pill + Heading + Divider + CTA */}
          <div className="mb-8 lg:mb-10">
            <div className="inline-block bg-[#0B0B0B]/95 text-[#F5F5F0] text-[11px] sm:text-[13px] font-[800] tracking-[0.06em] uppercase px-3 py-1.5 rounded-[4px] mb-2 shadow-md">
              GOOGLE RATING &amp; CUSTOMER REVIEWS
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 sm:gap-6">
              <h2 className="text-[32px] sm:text-[38px] lg:text-[46px] uppercase font-[800] text-[#F5F5F0] leading-none tracking-[-0.01em] shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]">
                REVIEWS
              </h2>

              <div className="hidden sm:block h-[2px] flex-grow bg-[#0D9488]/85" />

              <Link
                to="/contact"
                className="bg-white hover:bg-[#F5F5F0] text-[#0D0D0D] font-[800] text-[12px] sm:text-[13px] uppercase tracking-[0.04em] px-4 sm:px-6 py-3 sm:py-3.5 rounded-[6px] inline-flex items-center gap-2 shrink-0 shadow-lg transition-colors"
              >
                CONTACT US NOW
                <ArrowRight size={15} strokeWidth={2.8} className="text-[#0D9488]" />
              </Link>
            </div>
          </div>

          {/* Google Rating Pill */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 bg-white/95 backdrop-blur-sm border border-black/10 rounded-[6px] px-4 sm:px-5 py-3 shadow-md">
            <div className="flex flex-wrap items-center gap-2.5">
              <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] shrink-0" aria-label="Google">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-[14px] sm:text-[15px] font-[800] text-[#111827]">
                {BUSINESS_NAME}
              </span>
              <span className="text-[#9CA3AF]">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[15px] font-[800] text-[#111827]">{GOOGLE_RATING} / 5</span>
                <div className="flex items-center gap-0.5 text-[#FBBF24]" aria-label="5.0 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <svg key={s} viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-current" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[13px] font-[600] text-[#4B5563]">
                  ({GOOGLE_REVIEW_COUNT} Google reviews)
                </span>
              </div>
            </div>
            <a
              href={GOOGLE_MAPS_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12.5px] font-[800] uppercase tracking-[0.04em] text-[#0F766E] hover:text-[#0D9488] inline-flex items-center gap-1.5 transition-colors"
            >
              View on Google Maps
              <ArrowRight size={14} strokeWidth={2.6} />
            </a>
          </div>

          {/* 3-Column Horizontal Scrolling Google Reviews Carousel */}
          <div className="relative">
            <div
              ref={reviewsTrackRef}
              onScroll={handleReviewsScroll}
              onPointerDown={handleTrackPointerDown}
              className={`grid grid-flow-col auto-cols-[100%] sm:auto-cols-[calc((100%-24px)/2)] lg:auto-cols-[calc((100%-48px)/3)] gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory select-none ${
                isDraggingReviews ? 'cursor-grabbing' : 'cursor-grab'
              }`}
            >
              {CUSTOMER_REVIEWS.map((review, idx) => {
                const isExpanded = !!expandedReviews[idx];
                const body = isExpanded && review.full ? review.full : review.preview;
                const initial = review.author.charAt(0).toUpperCase();

                return (
                  <article
                    key={`${review.author}-${idx}`}
                    className="snap-start bg-white rounded-[6px] border border-black/10 p-6 shadow-xl flex flex-col justify-between min-h-[250px]"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-full bg-[#0D9488] text-white font-[800] text-[15px] flex items-center justify-center shrink-0">
                            {initial}
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-[15px] font-[800] text-[#111827] leading-tight truncate">
                              {review.author}
                            </h3>
                            <p className="text-[12px] font-[600] text-[#6B7280] truncate mt-0.5">
                              {review.service}
                            </p>
                          </div>
                        </div>
                        <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] shrink-0" aria-label="Google">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                      </div>

                      <div className="flex items-center gap-0.5 text-[#FBBF24] mb-3" aria-label="5 out of 5 stars">
                        {[0, 1, 2, 3, 4].map((s) => (
                          <svg key={s} viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-current" aria-hidden="true">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>

                      <p className="text-[14.5px] font-[500] text-[#374151] leading-[1.6]">
                        &ldquo;{body}&rdquo;
                      </p>
                    </div>

                    {review.full && (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedReviews((prev) => ({ ...prev, [idx]: !prev[idx] }))
                        }
                        className="mt-4 self-start text-[12.5px] font-[700] text-[#0F766E] hover:text-[#0D9488] cursor-pointer"
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                      </button>
                    )}
                  </article>
                );
              })}
            </div>

            {/* Carousel Pagination Controls */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => scrollToReviewPage(reviewPage - 1)}
                disabled={reviewPage === 0}
                aria-label="Previous reviews page"
                className="w-9 h-9 rounded-full bg-white/95 text-[#111827] hover:bg-white disabled:opacity-45 disabled:cursor-not-allowed flex items-center justify-center shadow-md transition-colors cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: TOTAL_REVIEW_PAGES }).map((_, pIdx) => (
                  <button
                    key={pIdx}
                    type="button"
                    onClick={() => scrollToReviewPage(pIdx)}
                    aria-label={`Reviews page ${pIdx + 1}`}
                    className={`w-8 h-8 rounded-full text-[13px] font-[800] transition-colors cursor-pointer shadow-sm ${
                      reviewPage === pIdx
                        ? 'bg-[#0D9488] text-white'
                        : 'bg-white/90 text-[#111827] hover:bg-white'
                    }`}
                  >
                    {pIdx + 1}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollToReviewPage(reviewPage + 1)}
                disabled={reviewPage === TOTAL_REVIEW_PAGES - 1}
                aria-label="Next reviews page"
                className="w-9 h-9 rounded-full bg-white/95 text-[#111827] hover:bg-white disabled:opacity-45 disabled:cursor-not-allowed flex items-center justify-center shadow-md transition-colors cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Review Us On Google Callout Card */}
          <div className="mt-6 sm:mt-8 mx-auto max-w-[490px] w-full bg-[#0B0B0B] border border-white/85 rounded-[6px] px-7 sm:px-12 py-7 sm:py-8 flex flex-col items-center text-center shadow-2xl">
            <h3 className="text-[22px] sm:text-[28px] font-[800] uppercase text-white tracking-[0.01em] leading-none">
              REVIEW US ON GOOGLE
            </h3>

            <div className="flex items-center justify-center gap-1.5 my-4 text-[#FBBF24]" aria-label="Rate us 1 to 5 stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Link
                  key={star}
                  to={`/leave-review?rating=${star}`}
                  aria-label={`Rate ${star} stars`}
                  className="hover:scale-110 transition-transform"
                >
                  <svg viewBox="0 0 24 24" className="w-[26px] h-[26px] fill-current" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </Link>
              ))}
            </div>

            <Link
              to="/leave-review"
              className="bg-[#0D9488] hover:bg-[#0F766E] text-white font-[800] text-[13px] sm:text-[14px] uppercase tracking-[0.04em] px-8 sm:px-10 py-3.5 rounded-[5px] transition-colors shadow-md inline-block"
            >
              LEAVE US A REVIEW
            </Link>
          </div>
        </div>

        {/* Bottom Organic Wave Ending */}
        <div className="relative z-10 w-full leading-none pointer-events-none">
          <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            className="block w-full h-[120px] sm:h-[160px] lg:h-[200px]"
            aria-hidden="true"
          >
            <path
              d="M0,24 C130,28 250,96 400,96 C555,96 665,12 815,12 C985,12 1185,122 1440,126 L1440,200 L0,200 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </section>

      {/* 6.49 Frequently Asked Questions */}
      <section className="bg-white -mt-[1px] pt-[24px] lg:pt-[40px] pb-[84px] lg:pb-[116px] px-4 lg:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.32fr_0.68fr] gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-[800] text-[#111827] leading-[1.1] tracking-[-0.01em] mb-6 lg:mb-8">
              Frequently Asked Questions
            </h2>

            <div className="border-t border-black/15">
              {HOME_FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={faq.q} className="border-b border-black/15">
                    <button
                      type="button"
                      className="w-full text-left py-5 sm:py-6 flex items-center gap-3.5 cursor-pointer group"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <ChevronDown
                        size={17}
                        strokeWidth={2.6}
                        className={`text-[#111827] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                          }`}
                      />
                      <span className="text-[16px] sm:text-[18px] lg:text-[19px] font-[800] text-[#111827] group-hover:text-[#0F766E] leading-[1.4] transition-colors">
                        {faq.q}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pb-5 pl-[30px] pr-4 text-[15px] sm:text-[16px] text-[#4B5563] font-[600] leading-[1.65]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:mt-3">
            <div className="rounded-[8px] overflow-hidden bg-[#F3F4F6] border border-black/10 shadow-xl aspect-[4/3] lg:aspect-[1.05/1]">
              <img
                src="/client-assets/portfolio/pergola-string-lights-view-2.png"
                alt="Completed pergola decorative lighting installation by Handyman Larnaca and Limassol District"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6.495 Proudly Serving Larnaca & Limassol */}
      <section className="bg-[#F8FAFC] border-t border-black/10 pt-[48px] lg:pt-[64px] pb-[48px] lg:pb-[64px]">
        <div className="max-w-[1344px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-10 lg:gap-14 items-start">
          {/* Interactive Map + Business Place Card */}
          <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[470px] bg-[#E5E7EB] rounded-[8px] border border-black/10 overflow-hidden shadow-lg">
            <iframe
              title="Larnaca and Limassol Districts Service Region Map — Cyprus"
              src={GOOGLE_MAPS_EMBED_URL}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Google Maps Business Info Card Overlay */}
            <div className="absolute top-[10px] left-[10px] z-10 bg-white rounded-[2px] shadow-[0_1px_4px_rgba(0,0,0,0.3)] px-3.5 py-2.5 max-w-[270px] text-left">
              <div className="text-[13.5px] font-[700] text-[#202124] leading-tight">
                {BUSINESS_NAME}
              </div>
              <div className="text-[11px] font-[600] text-[#5f6368] leading-snug mt-0.5">
                {GREEK_IDENTITY}
              </div>
              <div className="mt-1 flex items-center gap-1 text-[12px]">
                <span className="text-[#70757a] font-[700]">{GOOGLE_RATING}</span>
                <div className="flex items-center text-[#fbbc04]" aria-label="5.0 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <svg key={s} viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-current" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <a
                  href={GOOGLE_MAPS_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a73e8] hover:underline font-[700] ml-0.5"
                >
                  {GOOGLE_REVIEW_COUNT} reviews
                </a>
              </div>
              <a
                href={GOOGLE_MAPS_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-block text-[12px] text-[#1a73e8] hover:underline font-[700]"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Areas Column */}
          <div className="lg:pt-2">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] uppercase font-[800] text-[#111827] leading-[1.08] tracking-[-0.01em] mb-6 lg:mb-8">
              PROUDLY SERVING
              <br />
              LARNACA &amp; LIMASSOL
            </h2>

            <p className="text-[16px] lg:text-[17px] text-[#4B5563] font-[600] leading-[1.65] max-w-[500px] mb-7">
              We provide indoor and outdoor handyman services across both the Larnaca and Limassol districts in Cyprus. Call {PHONE_NUMBER} to confirm availability for your area and discuss your job.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[500px]">
              <Link
                to="/service-areas/larnaca"
                className="bg-white border border-black/10 rounded-[6px] p-5 hover:border-[#0D9488] transition-colors shadow-sm group"
              >
                <div className="text-[18px] font-[800] text-[#111827] group-hover:text-[#0F766E] transition-colors">
                  Larnaca District
                </div>
                <div className="text-[13px] font-[600] text-[#6B7280] mt-1">
                  View district service details &rarr;
                </div>
              </Link>
              <Link
                to="/service-areas/limassol"
                className="bg-white border border-black/10 rounded-[6px] p-5 hover:border-[#0D9488] transition-colors shadow-sm group"
              >
                <div className="text-[18px] font-[800] text-[#111827] group-hover:text-[#0F766E] transition-colors">
                  Limassol District
                </div>
                <div className="text-[13px] font-[600] text-[#6B7280] mt-1">
                  View district service details &rarr;
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6.498 Follow Us on Facebook */}
      <section className="bg-white border-t border-black/5 pt-[56px] lg:pt-[76px] pb-[28px] lg:pb-[40px]">
        <div className="max-w-[1040px] mx-auto px-4 lg:px-8">
          {/* Centered Section Header */}
          <div className="text-center mb-8 sm:mb-10">
            <span className="block text-[14px] sm:text-[15px] font-[800] uppercase tracking-[0.06em] text-[#0D9488] mb-1.5">
              FACEBOOK
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] uppercase font-[800] text-[#111827] leading-[1.08] tracking-[-0.01em]">
              FOLLOW US ON FACEBOOK
            </h2>
          </div>

          {/* 4x2 Square Facebook Posts Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px] bg-[#E5E7EB] border border-black/10 rounded-[4px] overflow-hidden shadow-sm">
            {FACEBOOK_GRID_TILES.slice(0, visibleFbCount).map((tile, idx) => {
              const post = FACEBOOK_POSTS[tile.postIndex];
              return (
                <button
                  key={tile.id}
                  type="button"
                  onClick={() => {
                    setFbSlideIndexes((prev) => ({ ...prev, [post.id]: tile.slideIndex }));
                    setActiveFbPostIndex(tile.postIndex);
                  }}
                  aria-label={`Open Facebook post ${idx + 1}: ${post.caption}`}
                  className="group relative aspect-square w-full overflow-hidden bg-[#F3F4F6] p-0 text-left cursor-pointer focus:outline-none"
                >
                  <img
                    src={tile.image}
                    alt={`${post.caption} — ${BUSINESS_SHORT_NAME}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />

                  {/* Top-Right Multi-Photo Album Badge */}
                  {post.images.length > 1 && (
                    <div className="absolute top-2.5 right-2.5 z-10 text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.65)] pointer-events-none">
                      <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-current" aria-hidden="true">
                        <path d="M19 5.5h-1.5V4A2.5 2.5 0 0 0 15 1.5H4A2.5 2.5 0 0 0 1.5 4v11A2.5 2.5 0 0 0 4 17.5h1.5V19A2.5 2.5 0 0 0 8 21.5h11a2.5 2.5 0 0 0 2.5-2.5V8A2.5 2.5 0 0 0 19 5.5zM4 15.5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v1.5H8A2.5 2.5 0 0 0 5.5 8v7.5H4zm15.5 3.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v11z" />
                      </svg>
                    </div>
                  )}

                  {/* Hover Overlay with Post Caption & Date */}
                  <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-4 text-center text-white">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1877F2] mb-2.5">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
                        <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
                      </svg>
                    </div>
                    <p className="text-[12px] font-[600] leading-[1.4] text-white line-clamp-3 max-w-[210px] mb-1.5">
                      {post.caption}
                    </p>
                    <span className="text-[10.5px] font-[700] uppercase tracking-[0.06em] text-white/75">
                      {post.date}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Load More / View on Facebook Button */}
          <div className="mt-7 flex justify-center">
            {visibleFbCount < FACEBOOK_GRID_TILES.length ? (
              <button
                type="button"
                onClick={() => setVisibleFbCount(FACEBOOK_GRID_TILES.length)}
                className="bg-[#0D9488] hover:bg-[#0F766E] text-white text-[13px] font-[700] px-14 py-2.5 rounded-[4px] transition-colors shadow-md cursor-pointer"
              >
                Load more
              </button>
            ) : (
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0D9488] hover:bg-[#0F766E] text-white text-[13px] font-[700] px-10 py-2.5 rounded-[4px] transition-colors shadow-md inline-flex items-center gap-2"
              >
                View more on Facebook
                <ArrowRight size={15} strokeWidth={2.6} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* In-Website Scrollable Facebook Posts Modal */}
      {activeFbPostIndex !== null && (
        <div
          ref={fbModalFeedRef}
          onClick={() => setActiveFbPostIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Facebook posts feed viewer"
          className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-[2px] overflow-y-auto py-4 sm:py-8 px-3 sm:px-4"
        >
          {/* Fixed Close Button positioned to the right of the centered column */}
          <button
            type="button"
            onClick={() => setActiveFbPostIndex(null)}
            aria-label="Close Facebook feed"
            className="fixed top-4 right-4 sm:top-6 sm:right-[calc(50%-325px)] z-[120] w-10 h-10 rounded-full bg-black/50 sm:bg-transparent hover:bg-white/15 text-white/90 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={26} strokeWidth={1.8} />
          </button>

          {/* Centered White Scrollable Feed Column */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[540px] w-full mx-auto bg-white text-[#1A1A1A] rounded-[4px] shadow-[0_20px_60px_rgba(0,0,0,0.75)] overflow-hidden divide-y divide-black/10"
          >
            {FACEBOOK_POSTS.map((post, postIdx) => {
              const currentSlide = fbSlideIndexes[post.id] ?? 0;
              const totalSlides = post.images.length;

              return (
                <article
                  key={post.id}
                  data-fb-post-index={postIdx}
                  className="bg-white scroll-mt-4"
                >
                  {/* Post Top Header Bar */}
                  <div className="px-4 py-3 flex items-center justify-between gap-3">
                    <a
                      href={FACEBOOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 group min-w-0"
                    >
                      <span className="p-[2px] rounded-full bg-[#1877F2] shrink-0">
                        <img
                          src="/client-assets/references/handyman-logo-reference.png"
                          alt={BUSINESS_SHORT_NAME}
                          className="w-8 h-8 rounded-full object-contain bg-white p-[1px]"
                        />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[13.5px] font-[700] text-[#1A1A1A] group-hover:underline truncate">
                          {BUSINESS_SHORT_NAME}
                        </div>
                        <div className="text-[11px] font-[600] text-[#65676B] truncate">
                          {GREEK_IDENTITY}
                        </div>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 shrink-0">
                      <a
                        href={FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] font-[700] text-[#1877F2] hover:text-[#165CD3] transition-colors"
                      >
                        Follow
                      </a>
                      <a
                        href={FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Facebook business page"
                        className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-[#165CD3] transition-colors"
                      >
                        <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-current" aria-hidden="true">
                          <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Post Media Carousel */}
                  <div className="relative w-full bg-[#F5F5F5] overflow-hidden select-none">
                    <a
                      href={FACEBOOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                      title="View on Facebook"
                    >
                      <img
                        src={post.images[currentSlide]}
                        alt={`${post.caption} — ${BUSINESS_SHORT_NAME}`}
                        className="w-full max-h-[580px] object-cover block"
                      />
                    </a>

                    {totalSlides > 1 && (
                      <>
                        {currentSlide > 0 && (
                          <button
                            type="button"
                            onClick={() =>
                              setFbSlideIndexes((prev) => ({
                                ...prev,
                                [post.id]: currentSlide - 1,
                              }))
                            }
                            aria-label="Previous photo"
                            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/55 hover:bg-black/75 text-white flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <ChevronLeft size={18} />
                          </button>
                        )}
                        {currentSlide < totalSlides - 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              setFbSlideIndexes((prev) => ({
                                ...prev,
                                [post.id]: currentSlide + 1,
                              }))
                            }
                            aria-label="Next photo"
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/55 hover:bg-black/75 text-white flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <ChevronRight size={18} />
                          </button>
                        )}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full">
                          {post.images.map((_, dotIdx) => (
                            <span
                              key={dotIdx}
                              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                dotIdx === currentSlide ? 'bg-white' : 'bg-white/45'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Post Footer: Reactions, Caption, Date & Share */}
                  <div className="px-4 pt-3 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      {post.reactions > 0 ? (
                        <span className="text-[13.5px] font-[700] text-[#1A1A1A]">
                          {post.reactions} {post.reactions === 1 ? 'reaction' : 'reactions'}
                        </span>
                      ) : (
                        <span className="text-[12.5px] font-[600] text-[#65676B]">
                          Posted on Facebook
                        </span>
                      )}
                      <a
                        href={FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-[700] text-[#1877F2] hover:underline"
                      >
                        View on Facebook &rarr;
                      </a>
                    </div>
                    <p className="text-[13.5px] leading-[1.45] text-[#1A1A1A]">
                      <span className="font-[700] mr-1.5">{BUSINESS_SHORT_NAME}</span>
                      <span>{post.caption}</span>
                    </p>
                    <div className="mt-2 text-[11px] font-[600] uppercase tracking-[0.04em] text-[#65676B]">
                      {post.date}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* 6.5 Pre-Footer Photo CTA & Wave Transition into Footer */}
      <section className="relative bg-white overflow-hidden -mt-[1px]">
        {/* Background Photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ready-cta-bg.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        {/* Top Organic Wave from White Page into Photo CTA */}
        <div className="relative z-10 w-full overflow-hidden leading-none pt-6 sm:pt-8 lg:pt-10 bg-white">
          <div className="h-[1px] w-full bg-white" />
        </div>
        <div className="relative z-10 w-full overflow-hidden leading-none -mt-[1px]">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="block w-full h-[64px] sm:h-[88px] lg:h-[116px]"
            aria-hidden="true"
          >
            <path
              d="M0,0 L0,14 C120,24 235,104 385,104 C545,104 685,14 850,14 C1025,14 1185,108 1355,108 C1395,108 1420,102 1440,94 L1440,0 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>

        {/* Center CTA Content */}
        <div className="relative z-10 max-w-[960px] mx-auto px-4 lg:px-8 py-[44px] sm:py-[60px] text-center flex flex-col items-center">
          <h2 className="text-[28px] sm:text-[38px] lg:text-[46px] uppercase font-[800] text-white leading-[1.08] tracking-[-0.01em] drop-shadow-md">
            READY TO START YOUR PROJECT?
          </h2>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center bg-[#0D9488] hover:bg-[#0F766E] text-white font-[800] text-[13px] sm:text-[14px] uppercase tracking-wider px-8 py-4 rounded-[4px] transition-colors shadow-lg"
          >
            GET FREE QUOTE
          </Link>
        </div>

        {/* Bottom Organic Wave into Footer */}
        <div className="relative z-10 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            className="block w-full h-[110px] sm:h-[145px] lg:h-[185px]"
            aria-hidden="true"
          >
            <path
              d="M0,112 C110,48 215,24 330,28 C450,32 525,82 640,82 C770,82 890,14 1040,14 C1190,14 1320,92 1440,118 L1440,200 L0,200 Z"
              fill="#0D0D0D"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
