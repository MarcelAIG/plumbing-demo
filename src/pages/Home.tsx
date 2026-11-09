import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { HOME_FAQS } from '../data/faqs';
import { useState, useEffect, useRef, type PointerEvent as ReactPointerEvent, type CSSProperties } from 'react';
import { ChevronDown, Phone, Check, MapPin, Clock, ShieldCheck, Award, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PHONE_NUMBER } from '../config';
import { Logo } from '../components/Logo';

const SERVICE_TILES = [
  {
    title: 'BURST PIPE REPAIR',
    image: '/images/services/burst-pipe-repair.jpg',
    to: '/services/burst-pipe-repair',
    description: 'Emergency water shutoff and on-the-spot copper or PEX pipe repair to stop flooding damage fast.',
  },
  {
    title: 'DRAIN CLEANING',
    image: '/images/services/drain-cleaning.jpg',
    to: '/services/emergency-drain-clearing',
    description: 'Fast clearing for backed-up sinks, showers, toilets, and floor drains—restoring smooth flow safely.',
  },
  {
    title: 'WATER HEATERS',
    image: '/images/services/water-heaters.jpg',
    to: '/services/no-heat-no-hot-water',
    description: 'Same-day gas, electric, and tankless water heater diagnostics, repair, and complete replacement.',
  },
  {
    title: 'SEWER LINES',
    image: '/images/services/sewer-lines.jpg',
    to: '/services/sewer-backup-emergency',
    description: 'Main sewer line root clearing, hazmat-aware backup containment, and trenchless-ready repairs.',
  },
  {
    title: 'FLOOD EXTRACTION',
    image: '/images/services/flood-extraction.jpg',
    to: '/services/flood-water-extraction',
    description: 'Industrial submersible pumping, rapid water removal, and moisture mapping to stop mold early.',
  },
  {
    title: 'LEAK DETECTION',
    image: '/images/services/leak-detection.jpg',
    to: '/services/burst-pipe-repair',
    description: 'Thermal imaging and acoustic pinpointing to locate hidden wall, ceiling, and slab water leaks.',
  },
  {
    title: 'BOILER REPAIR',
    image: '/images/services/boiler-repair.jpg',
    to: '/services/no-heat-no-hot-water',
    description: 'Licensed hydronic heating and boiler repair to restore heat fast before Portland pipes can freeze.',
  },
  {
    title: 'HYDRO JETTING',
    image: '/images/services/hydro-jetting.jpg',
    to: '/services/emergency-drain-clearing',
    description: 'High-pressure water jetting that scours stubborn grease, scale, and tree roots from main drain lines.',
  },
  {
    title: 'SUMP PUMPS',
    image: '/images/services/sump-pumps.jpg',
    to: '/services/flood-water-extraction',
    description: 'Primary and battery-backup sump pump installation, check valves, and testing to keep basements dry.',
  },
  {
    title: 'PIPE REPLACEMENT',
    image: '/images/services/pipe-replacement.jpg',
    to: '/services/burst-pipe-repair',
    description: 'Whole-home copper and PEX repiping, manifold upgrades, and shutoff valve replacements built to last.',
  },
  {
    title: 'FIXTURE REPAIR',
    image: '/images/services/fixture-repair.jpg',
    to: '/services',
    description: 'Clean installation and leak-free repair for kitchen faucets, disposals, toilets, and shower valves.',
  },
  {
    title: 'CAMERA INSPECTION',
    image: '/images/services/camera-inspection.jpg',
    to: '/services/sewer-backup-emergency',
    description: 'HD fiber-optic drain scopes pinpointing blockages, bellies, and broken sewer joints with live video.',
  },
];

const WORK_GALLERY = [
  { image: '/images/work/work-01.jpg', alt: 'Copper pressure tank supply piping and brass ball valve assembly' },
  { image: '/images/work/work-02.jpg', alt: 'Completed luxury bathroom with freestanding soaking tub, glass shower, and floating vanity' },
  { image: '/images/work/work-03.jpg', alt: 'Dual pipe wrenches tightening galvanized threaded elbow fitting' },
  { image: '/images/work/work-04.jpg', alt: 'Polished solid brass wall-mounted twin faucets over white subway tile' },
  { image: '/images/work/work-05.jpg', alt: 'Technician servicing residential gas water heater control valve' },
  { image: '/images/work/work-06.jpg', alt: 'Pipe wrenches, PTFE thread seal tape, and pipe cutter on threaded water line' },
  { image: '/images/work/work-07.jpg', alt: 'Residential heating boiler digital temperature controller and bar pressure gauge' },
  { image: '/images/work/work-08.jpg', alt: 'Custom bathroom sink, wall-mounted chrome mixer faucet, and deep soaking tub' },
  { image: '/images/work/work-09.jpg', alt: 'Copper manifold upgrade with ball valves, pressure switch, and pressure gauge' },
  { image: '/images/work/work-10.jpg', alt: 'Dual chrome rainfall and handheld showerhead fixture installation' },
  { image: '/images/work/work-11.jpg', alt: 'Copper supply line with brass compression stopcock shutoff valve' },
  { image: '/images/work/work-12.jpg', alt: 'Stone-tiled alcove bath, ceiling rain shower, and vanity sink installation' },
];

type CustomerReview = {
  author: string;
  preview: string;
  full?: string;
};

const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    author: 'Sarah Mitchell',
    preview:
      'SOLO Plumbing & Heating saved us when our water heater burst. The plumber arrived fast, gave a clear quote before starting, and fixed it perfectly. Highly recommend!',
  },
  {
    author: 'James Turner',
    preview:
      'Very professional and upfront about the pricing. They cleared our emergency main line backup in no time. The tech was clean, respectful, and knew exactly what to do.',
  },
  {
    author: 'Donna Garcia',
    preview:
      'I absolutely love this company! SOLO Plumbing & Heating does amazing work—very prompt, dependable, reasonably priced and keeps our home plumbing...',
    full: 'I absolutely love this company! SOLO Plumbing & Heating does amazing work—very prompt, dependable, reasonably priced and keeps our home plumbing running like clockwork every year. They repiped our basement supply lines and tested every shutoff before leaving.',
  },
  {
    author: 'Michael Reynolds',
    preview:
      'Fast local response just like they promised. Had a major leak in the ceiling and they stopped it before it caused more damage. Trustworthy and reliable service.',
  },
  {
    author: 'David Lawson',
    preview:
      'Absolutely fantastic service! The team was knowledgeable and polite. They fixed our clogged kitchen line quickly. Definitely calling them for every plumbing job.',
  },
  {
    author: 'Robert Green',
    preview:
      'Excellent and speedy service. Woke up to water in our basement—their tech arrived fast, isolated the burst valve right away, and left the utility area spotless.',
  },
  {
    author: 'Elena Wright',
    preview:
      'Could not believe how quickly they dispatched someone on a Sunday evening. Everything was explained clearly before work started and the final bill matched the quote.',
  },
  {
    author: 'Chris Kim',
    preview:
      'Honest pricing and clean workmanship. Replaced our leaking copper tee and added quarter-turn shutoff valves without trying to upsell anything unnecessary.',
  },
  {
    author: 'Jessica Hayes',
    preview:
      'Top-notch plumbers. Called them at 2 AM during a freeze snap and they showed up stocked with the parts needed to restore heat and hot water before sunrise.',
  },
  {
    author: 'Michael Bennett',
    preview:
      'Had a sudden leak under our main bath vanity and SOLO arrived within the hour. Fixed the drain assembly completely and walked us through the pressure check.',
  },
  {
    author: 'Tom Lin',
    preview:
      'SOLO is our go-to plumbing crew across Portland now. Used them twice this year for boiler maintenance and fixture upgrades—outstanding communication every time.',
  },
  {
    author: 'Kevin Sullivan',
    preview:
      'Cleared a stubborn main sewer backup with their hydro jetter and camera scope. They showed us live video of the pipe afterward so we had total peace of mind.',
  },
  {
    author: 'Rachel Brooks',
    preview:
      'Our hydronic boiler stopped heating on the coldest night of January. SOLO diagnosed the circulator pump fast and restored full radiator warmth the same evening...',
    full: 'Our hydronic boiler stopped heating on the coldest night of January. SOLO diagnosed the failed circulator pump fast, had the replacement on the truck, purged every zone carefully, and restored full radiator warmth the very same evening.',
  },
  {
    author: 'Daniel Cooper',
    preview:
      'Swapped out our failing 50-gallon gas water heater for a high-efficiency tankless unit. Clean copper manifold soldering, neat venting, and zero mess left behind.',
  },
  {
    author: 'Lauren Patterson',
    preview:
      'Installed a battery-backup sump pump before heavy November rains hit our Laurelhurst basement. Thorough testing, tidy wiring, and super courteous crew.',
  },
  {
    author: 'Mark Henderson',
    preview:
      'Repiped our 1920s Craftsman from corroded galvanized steel to Type-L copper and PEX headers. Water pressure in the upstairs shower feels brand new again...',
    full: 'Repiped our 1920s Craftsman from corroded galvanized steel to clean Type-L copper manifolds and PEX runs. Water pressure in the upstairs shower feels brand new again, and every drywall access cutout was kept minimal.',
  },
  {
    author: 'Amanda Ross',
    preview:
      'Prompt arrival, boot covers at the door, and transparent pricing from the first phone call. Repaired a hidden slab-adjacent supply leak without tearing up our tile.',
  },
  {
    author: 'Olivia Morales',
    preview:
      'Five stars from start to finish. They upgraded our master bathroom fixtures, checked static water pressure, and installed a new pressure-reducing valve on the main.',
  },
];

const REVIEWS_PER_PAGE = 3;
const TOTAL_REVIEW_PAGES = Math.ceil(CUSTOMER_REVIEWS.length / REVIEWS_PER_PAGE);

const SERVICE_AREA_LINKS = [
  { name: 'Downtown', to: '/service-areas/downtown' },
  { name: 'Riverside', to: '/service-areas/riverside' },
  { name: 'Oakwood', to: '/service-areas/oakwood' },
  { name: 'Highland Park', to: '/service-areas/highland-park' },
  { name: 'Eastside', to: '/service-areas/eastside' },
  { name: 'Westgate', to: '/service-areas/westgate' },
  { name: 'Beaverton', to: '/service-areas' },
  { name: 'Lake Oswego', to: '/service-areas' },
  { name: 'Tigard', to: '/service-areas' },
  { name: 'Gresham', to: '/service-areas' },
  { name: 'Milwaukie', to: '/service-areas' },
  { name: 'Oregon City', to: '/service-areas' },
  { name: 'Hillsboro', to: '/service-areas' },
  { name: 'Vancouver', to: '/service-areas' },
];

const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/doggroomingby_julia/';
const INSTAGRAM_USERNAME = 'doggroomingby_julia';
const INSTAGRAM_AVATAR = '/images/instagram/avatar.jpg';

type InstagramPost = {
  id: string;
  images: string[];
  mediaType: 'carousel' | 'reel' | 'photo';
  likes: number;
  comments: number;
  caption: string;
  date: string;
  permalink: string;
};

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    images: [
      '/images/instagram/post-01.jpg',
      '/images/instagram/post-02.jpg',
      '/images/instagram/post-03.jpg',
    ],
    mediaType: 'carousel',
    likes: 73,
    comments: 5,
    caption:
      'Fresh fluffy blowout & full teddy bear trim for this sweet little Pomeranian in Polis, Paphos! ✂️🐾 Bath, brush, and full styling session. DM to book or call 99073343 #doggroomingbyjulia #paphosdogs #polischrysochous #pomeraniangrooming #petstylist',
    date: 'DECEMBER 25, 2024',
    permalink: 'https://www.instagram.com/p/DdW5tJdAK-Z/',
  },
  {
    id: 'ig-2',
    images: [
      '/images/instagram/post-04.jpg',
      '/images/instagram/post-05.jpg',
      '/images/instagram/post-06.jpg',
    ],
    mediaType: 'carousel',
    likes: 64,
    comments: 4,
    caption:
      'Happy, fresh, and ready for park walks after a warm spa bath, deshedding, and tidy scissor finish! 🐶✨ Thank you for trusting Dog Grooming by Julia. #doggrooming #cyprusdogs #paphos #fluffydog #groomingspa',
    date: 'DECEMBER 18, 2024',
    permalink: 'https://www.instagram.com/p/DYPK8r8kftn/',
  },
  {
    id: 'ig-3',
    images: [
      '/images/instagram/post-07.jpg',
      '/images/instagram/post-08.jpg',
      '/images/instagram/post-09.jpg',
    ],
    mediaType: 'reel',
    likes: 58,
    comments: 6,
    caption:
      'Golden hour glow after a full coat conditioning treatment, ear cleaning, and paw pad trim! 🐾✂️ Every pup gets gentle, one-on-one care in our Polis studio. #doggroomingbyjulia #petgroomer #pomeranian #polis #cyprus',
    date: 'DECEMBER 9, 2024',
    permalink: 'https://www.instagram.com/doggroomingby_julia/',
  },
  {
    id: 'ig-4',
    images: ['/images/instagram/post-02.jpg', '/images/instagram/post-01.jpg'],
    mediaType: 'carousel',
    likes: 81,
    comments: 7,
    caption:
      'Look at that big smile! 🐾 Full bath, gentle blow dry, sanitary tidy, and nail clipping completed today. Book your pup’s next appointment via DM! #doggroomingbyjulia #dogsofcyprus #petstylist #happyclient',
    date: 'NOVEMBER 29, 2024',
    permalink: 'https://www.instagram.com/p/DdW5tJdAK-Z/',
  },
  {
    id: 'ig-5',
    images: ['/images/instagram/post-05.jpg', '/images/instagram/post-06.jpg'],
    mediaType: 'reel',
    likes: 50,
    comments: 3,
    caption:
      'Nothing beats the feeling of a fresh, tangle-free coat! ✂️🫧 Warm hydro-bath, blueberry facial, and custom breed styling. 📍Polis, Paphos – Cyprus | 📞 99073343 #doggroomer #paphoscyprus #dogspa',
    date: 'NOVEMBER 21, 2024',
    permalink: 'https://www.instagram.com/p/DYPK8r8kftn/',
  },
  {
    id: 'ig-6',
    images: ['/images/instagram/post-08.jpg', '/images/instagram/post-09.jpg'],
    mediaType: 'carousel',
    likes: 69,
    comments: 5,
    caption:
      'Soft, cloud-like fluff! ☁️🐶 Gentle undercoat removal and precision scissoring to keep this handsome boy looking his absolute best. #doggroomingbyjulia #pomeranianlove #groomingday #cypruslife',
    date: 'NOVEMBER 14, 2024',
    permalink: 'https://www.instagram.com/doggroomingby_julia/',
  },
  {
    id: 'ig-7',
    images: ['/images/instagram/post-10.jpg'],
    mediaType: 'reel',
    likes: 54,
    comments: 4,
    caption:
      'Bath time bliss! 🛁🐾 Deep cleansing shampoo, coat mask, and warm towel wrap for our golden guest today. #doggroomingbyjulia #dogbath #goldenretriever #petcare #paphos',
    date: 'NOVEMBER 5, 2024',
    permalink: 'https://www.instagram.com/doggroomingby_julia/',
  },
  {
    id: 'ig-8',
    images: ['/images/instagram/post-03.jpg', '/images/instagram/post-01.jpg'],
    mediaType: 'carousel',
    likes: 76,
    comments: 8,
    caption:
      'Best friends enjoying the sunshine right after a full grooming makeover! ✂️🐾 Send us a DM or call 99073343 to reserve your spot this week. #doggroomingbyjulia #petstylist #polischrysochous #paphos',
    date: 'OCTOBER 28, 2024',
    permalink: 'https://www.instagram.com/p/DdW5tJdAK-Z/',
  },
  {
    id: 'ig-9',
    images: ['/images/instagram/post-06.jpg'],
    mediaType: 'photo',
    likes: 62,
    comments: 3,
    caption:
      'Little white cloud ready for the weekend! 🐾✨ Full hygiene trim, nail filing, and fluff dry. #doggroomingbyjulia #pomeranian #cyprusdogs',
    date: 'OCTOBER 19, 2024',
    permalink: 'https://www.instagram.com/p/DYPK8r8kftn/',
  },
  {
    id: 'ig-10',
    images: ['/images/instagram/post-09.jpg'],
    mediaType: 'reel',
    likes: 48,
    comments: 2,
    caption:
      'Freshly groomed and posing like a pro! 📸🐶 Book your dog’s bath, haircut, or nail trim in Polis, Paphos. #doggroomingbyjulia #petgrooming #dogstyle',
    date: 'OCTOBER 11, 2024',
    permalink: 'https://www.instagram.com/doggroomingby_julia/',
  },
  {
    id: 'ig-11',
    images: ['/images/instagram/post-11.jpg'],
    mediaType: 'photo',
    likes: 57,
    comments: 4,
    caption:
      'Puppy’s first groom! Gentle introduction to the dryer, comb, and nail trimmers with lots of treats and patience. 🐾💛 #puppygroom #doggroomingbyjulia #paphos',
    date: 'OCTOBER 3, 2024',
    permalink: 'https://www.instagram.com/doggroomingby_julia/',
  },
  {
    id: 'ig-12',
    images: ['/images/instagram/post-12.jpg'],
    mediaType: 'carousel',
    likes: 65,
    comments: 5,
    caption:
      'Clean paws, shiny coat, and happy tail wags! 🐾✂️ Thank you to all our wonderful clients in Polis & Paphos. #doggroomingbyjulia #doglovers #petstylist',
    date: 'SEPTEMBER 24, 2024',
    permalink: 'https://www.instagram.com/doggroomingby_julia/',
  },
];

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeIgPostIndex, setActiveIgPostIndex] = useState<number | null>(null);
  const [visibleIgCount, setVisibleIgCount] = useState(8);
  const [igSlideIndexes, setIgSlideIndexes] = useState<Record<string, number>>({});
  const igModalFeedRef = useRef<HTMLDivElement>(null);
  const [reviewPage, setReviewPage] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});
  const [isDraggingReviews, setIsDraggingReviews] = useState(false);
  const [workIndex, setWorkIndex] = useState(0);
  const [isWorkPaused, setIsWorkPaused] = useState(false);
  const [isMobileGallery, setIsMobileGallery] = useState(false);
  const workTouchStartXRef = useRef<number | null>(null);

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

  const reviewsTrackRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({ active: false, dragging: false, startX: 0, startScrollLeft: 0 });
  const programmaticScrollTimerRef = useRef<number | null>(null);
  const isProgrammaticScrollRef = useRef(false);

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

  useEffect(() => {
    if (activeIgPostIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const scrollTimer = window.setTimeout(() => {
      const container = igModalFeedRef.current;
      if (!container) return;
      const target = container.querySelector<HTMLElement>(`[data-ig-post-index="${activeIgPostIndex}"]`);
      if (target) {
        target.scrollIntoView({ block: 'start' });
      }
    }, 20);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIgPostIndex(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(scrollTimer);
      window.removeEventListener('keydown', handleKey);
    };
  }, [activeIgPostIndex]);

  useEffect(() => {
    const handleWindowPointerMove = (e: PointerEvent) => {
      const drag = dragStateRef.current;
      const track = reviewsTrackRef.current;
      if (!drag.active || !track) return;
      const dx = e.clientX - drag.startX;
      if (!drag.dragging && Math.abs(dx) > 5) {
        drag.dragging = true;
        setIsDraggingReviews(true);
      }
      if (drag.dragging) {
        track.scrollLeft = drag.startScrollLeft - dx;
      }
    };

    const handleWindowPointerUp = () => {
      if (!dragStateRef.current.active) return;
      dragStateRef.current.active = false;
      dragStateRef.current.dragging = false;
      setIsDraggingReviews(false);
    };

    window.addEventListener('pointermove', handleWindowPointerMove);
    window.addEventListener('pointerup', handleWindowPointerUp);
    window.addEventListener('pointercancel', handleWindowPointerUp);
    return () => {
      window.removeEventListener('pointermove', handleWindowPointerMove);
      window.removeEventListener('pointerup', handleWindowPointerUp);
      window.removeEventListener('pointercancel', handleWindowPointerUp);
    };
  }, []);

  const scrollToReviewPage = (pageIdx: number) => {
    const track = reviewsTrackRef.current;
    setReviewPage(pageIdx);
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>('[data-review-card]');
    const targetCard = cards[pageIdx * REVIEWS_PER_PAGE];
    if (!targetCard) return;

    isProgrammaticScrollRef.current = true;
    if (programmaticScrollTimerRef.current !== null) {
      window.clearTimeout(programmaticScrollTimerRef.current);
    }
    track.scrollTo({ left: targetCard.offsetLeft, behavior: 'smooth' });
    programmaticScrollTimerRef.current = window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 650);
  };

  const handleReviewsScroll = () => {
    if (isProgrammaticScrollRef.current) return;
    const track = reviewsTrackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>('[data-review-card]');
    if (cards.length < 2) return;
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    if (step <= 0) return;
    const rawPage = Math.round(track.scrollLeft / (step * REVIEWS_PER_PAGE));
    const clampedPage = Math.max(0, Math.min(TOTAL_REVIEW_PAGES - 1, rawPage));
    setReviewPage(clampedPage);
  };

  const handleTrackPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') return;
    if ((e.target as HTMLElement).closest('button, a')) return;
    const track = reviewsTrackRef.current;
    if (!track) return;
    dragStateRef.current = {
      active: true,
      dragging: false,
      startX: e.clientX,
      startScrollLeft: track.scrollLeft,
    };
  };

  return (
    <>
      <Helmet>
        <title>Emergency Plumber in Portland | SOLO Plumbing & Heating</title>
        <meta name="description" content="The fastest, most reliable emergency plumbing line in Portland. Real dispatchers, real trucks stocked and ready." />
        <script src="https://api.izadsystems.dev/js/form_embed.js" async></script>
      </Helmet>

      {/* 6.1 Hero */}
      <section className="relative w-full min-h-screen lg:min-h-[780px] flex items-start lg:items-end pt-[104px] lg:pt-[112px] pb-[40px] lg:pb-0">
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#1A1A1A]">
          {/* Placeholder for documentary photo */}
          <img src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity" alt="Emergency plumbing truck rushing to a call" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]/20 bottom-0 h-full" />
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 lg:px-8 pb-[60px] lg:pb-[90px] flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-[640px] flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 lg:pb-[48px]">
            <h1 className="text-[32px] sm:text-[42px] lg:text-[54px] uppercase font-[800] text-[#F5F5F0] font-oswald leading-[1.05] tracking-[-0.01em]">
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
                Get Free Quote
              </Link>
            </div>
          </div>

          <div className="w-full max-w-[460px] mx-auto lg:mx-0 bg-[#1A1A1A]/90 backdrop-blur-sm border border-white/10 rounded-[4px] p-6 lg:p-8 flex-shrink-0 lg:mr-16 xl:mr-32">
            <h3 className="text-[24px] lg:text-[28px] text-center uppercase font-[800] text-[#1F46B4] font-oswald leading-none tracking-[0.02em] mb-7">
              GET A FREE QUOTE
            </h3>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">Full Name *</label>
                <input type="text" placeholder="John Smith" className="bg-[#242424] border border-white/5 rounded-[2px] p-3 text-[#F5F5F0] placeholder-[#F5F5F0]/30 focus:border-[#1F46B4] outline-none text-[15px]" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">Phone *</label>
                <input type="tel" placeholder="(808) 555-1234" className="bg-[#242424] border border-white/5 rounded-[2px] p-3 text-[#F5F5F0] placeholder-[#F5F5F0]/30 focus:border-[#1F46B4] outline-none text-[15px]" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-[800] tracking-[0.1em] uppercase text-[#F5F5F0]">Short message about your needs *</label>
                <textarea rows={3} placeholder="Your message goes straight to my phone, I'll get back to you as soon as I'm available" className="bg-[#242424] border border-white/5 rounded-[2px] p-3 text-[#F5F5F0] placeholder-[#F5F5F0]/30 focus:border-[#1F46B4] outline-none text-[15px] resize-none" required></textarea>
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
                SEND
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 6.2 About Us & Highlights */}
      <section className="bg-[#0D0D0D] border-t border-white/5 pt-[64px] lg:pt-[96px] pb-[44px] lg:pb-[64px] px-4 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 lg:flex lg:justify-between lg:items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-2.5 text-[#F5F5F0]">
              <MapPin size={20} className="shrink-0 text-[#F5F5F0]" />
              <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-[800] uppercase tracking-[0.04em]">100% LOCAL</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#F5F5F0]">
              <Clock size={20} className="shrink-0 text-[#F5F5F0]" />
              <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-[800] uppercase tracking-[0.04em]">10+ YEARS EXPERIENCE</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#F5F5F0]">
              <ShieldCheck size={20} className="shrink-0 text-[#F5F5F0]" />
              <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-[800] uppercase tracking-[0.04em]">INSURED</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#F5F5F0]">
              <Award size={20} className="shrink-0 text-[#F5F5F0]" />
              <span className="text-[13px] sm:text-[14px] lg:text-[15px] font-[800] uppercase tracking-[0.04em]">HIGH QUALITY</span>
            </div>
          </div>

          <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
            <div className="flex flex-col">
              <div className="flex items-center gap-5 mb-5">
                <h2 className="text-[32px] lg:text-[44px] font-[800] uppercase text-[#F5F5F0] leading-none tracking-[-0.01em] shrink-0">
                  ABOUT US
                </h2>
                <div className="h-[2px] flex-grow bg-[#1F46B4]/60" />
              </div>
              <p className="text-[16px] lg:text-[17px] text-[#F5F5F0]/80 leading-[1.65] max-w-[540px]">
                SOLO Plumbing &amp; Heating is your local go-to for all things plumbing and heating. We're a quality-driven, licensed and insured crew solving tough plumbing problems across Portland—one home at a time.
              </p>
              <div className="mt-7 flex items-center gap-5">
                <a
                  href={INSTAGRAM_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] hover:scale-110 transition-transform shadow-md"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4.5" />
                    <circle cx="17.5" cy="6.5" r="1" className="fill-white stroke-none" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/"
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
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-[#000000] border border-white/20 hover:scale-110 transition-transform shadow-md"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                    <path
                      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.81a8.26 8.26 0 0 0 4.84 1.55V6.91a4.85 4.85 0 0 1-1.08-.22z"
                      fill="#25F4EE"
                      transform="translate(-0.6 -0.6)"
                    />
                    <path
                      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.81a8.26 8.26 0 0 0 4.84 1.55V6.91a4.85 4.85 0 0 1-1.08-.22z"
                      fill="#FE2C55"
                      transform="translate(0.6 0.6)"
                    />
                    <path
                      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.81a8.26 8.26 0 0 0 4.84 1.55V6.91a4.85 4.85 0 0 1-1.08-.22z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-[#FF0000] hover:scale-110 transition-transform shadow-md"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.93 4.78 12 4.78 12 4.78s-5.93 0-7.64.46A2.75 2.75 0 0 0 2.42 7.19 28.7 28.7 0 0 0 1.96 12a28.7 28.7 0 0 0 .46 4.81 2.75 2.75 0 0 0 1.94 1.95c1.71.46 7.64.46 7.64.46s5.93 0 7.64-.46a2.75 2.75 0 0 0 1.94-1.95A28.7 28.7 0 0 0 22.04 12a28.7 28.7 0 0 0-.46-4.81zM9.95 15.05V8.95L15.2 12l-5.25 3.05z"
                    />
                  </svg>
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
      <section className="bg-[#0D0D0D] pt-[28px] lg:pt-[40px] pb-[70px] lg:pb-[100px] px-4 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end gap-5 sm:gap-6 mb-7 lg:mb-9">
            <div className="inline-flex flex-col items-start sm:items-center shrink-0">
              <span className="text-[12px] sm:text-[13px] font-[800] tracking-[0.08em] uppercase text-[#F5F5F0] mb-1.5">
                WHAT WE ARE BEST AT
              </span>
              <h2 className="text-[32px] sm:text-[38px] lg:text-[46px] uppercase font-[800] text-[#F5F5F0] leading-none tracking-[-0.01em]">
                OUR SERVICES
              </h2>
            </div>
            <div className="h-[2px] flex-grow bg-[#1F46B4]/60 mb-[15px] sm:mb-[18px] lg:mb-[22px]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[#262626] border border-white/15">
            {SERVICE_TILES.map((service) => (
              <Link
                key={service.title}
                to={service.to}
                className="group relative aspect-[4/3] overflow-hidden bg-[#1A1A1A] block"
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
                    <span className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] rounded-full bg-[#1F46B4] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
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

      {/* 6.4 Our Process */}
      <section className="bg-[#0D0D0D] pt-[12px] lg:pt-[20px] pb-[76px] lg:pb-[108px] px-4 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-5 sm:gap-6">
            <h2 className="text-[32px] sm:text-[38px] lg:text-[46px] uppercase font-[800] text-[#F5F5F0] leading-none tracking-[-0.01em] shrink-0">
              OUR PROCESS
            </h2>
            <div className="h-[2px] flex-grow bg-[#1F46B4]/60" />
          </div>
          <p className="text-[15px] lg:text-[16px] text-[#F5F5F0]/80 mt-2.5 leading-[1.5]">
            Our process is simple and only contains a few simple steps
          </p>

          <div className="mt-12 lg:mt-16 flex flex-wrap justify-center gap-x-8 gap-y-12 lg:grid lg:grid-cols-5 lg:gap-6">
            {/* Step 1: Free Consult */}
            <div className="flex flex-col items-center text-center w-[156px] sm:w-[180px] lg:w-auto">
              <div className="flex flex-col items-center">
                <div className="w-[144px] h-[144px] xl:w-[160px] xl:h-[160px] rounded-full bg-white flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 64 64" className="w-[92px] h-[92px] xl:w-[102px] xl:h-[102px]" fill="none" stroke="#111111" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {/* Left chair */}
                    <path d="M7.5 23 L10.5 39 H22.5" />
                    <path d="M10.5 39 L8 50.5" />
                    <path d="M20.5 39 L22.5 50.5" />
                    {/* Left person */}
                    <circle cx="16.5" cy="14" r="3.8" />
                    <path d="M12.5 23.5 C12.5 21 14.3 20 16.5 20 C18.7 20 19.8 21.3 20 23.5 L20.5 32.5 H26 C27.8 32.5 28.5 33.7 28.5 35.5 V48 C28.5 49.5 27.6 50.5 26.2 50.5 C24.8 50.5 24 49.5 24 48 V37 H14.5 C13.2 37 12.5 36.2 12.5 34.5 Z" />
                    <path d="M19 24.5 L21.5 29.5 L26 26.5" />
                    <polygon points="27,20 31.5,18 32.2,23.5 27.7,25.5" fill="#FFFFFF" />
                    {/* Right chair */}
                    <path d="M56.5 23 L53.5 39 H41.5" />
                    <path d="M53.5 39 L56 50.5" />
                    <path d="M43.5 39 L41.5 50.5" />
                    {/* Right person */}
                    <circle cx="47.5" cy="14" r="3.8" />
                    <path d="M51.5 23.5 C51.5 21 49.7 20 47.5 20 C45.3 20 44.2 21.3 44 23.5 L43.5 32.5 H38 C36.2 32.5 35.5 33.7 35.5 35.5 V48 C35.5 49.5 36.4 50.5 37.8 50.5 C39.2 50.5 40 49.5 40 48 V37 H49.5 C50.8 37 51.5 36.2 51.5 34.5 Z" />
                    <path d="M44.5 25 L41 30.5 L36.5 28.5" />
                  </svg>
                </div>
                <svg viewBox="0 0 32 28" className="w-[28px] h-[24px] -mt-[3px]" aria-hidden="true">
                  <path d="M2 0 L14.7 12.5 V28 H17.3 V12.5 L30 0 Z" fill="#FFFFFF" />
                </svg>
              </div>
              <span className="mt-2.5 text-[15px] lg:text-[16px] font-[800] text-[#F5F5F0] leading-[1.3]">
                Free Consult
              </span>
            </div>

            {/* Step 2: Estimation & Proposal */}
            <div className="flex flex-col items-center text-center w-[156px] sm:w-[180px] lg:w-auto">
              <div className="flex flex-col items-center">
                <div className="w-[144px] h-[144px] xl:w-[160px] xl:h-[160px] rounded-full bg-white flex items-center justify-center shadow-lg">
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
                  <path d="M2 0 L14.7 12.5 V28 H17.3 V12.5 L30 0 Z" fill="#FFFFFF" />
                </svg>
              </div>
              <span className="mt-2.5 text-[15px] lg:text-[16px] font-[800] text-[#F5F5F0] leading-[1.3]">
                Estimation &amp;
                <br />
                Proposal
              </span>
            </div>

            {/* Step 3: We do the work */}
            <div className="flex flex-col items-center text-center w-[156px] sm:w-[180px] lg:w-auto">
              <div className="flex flex-col items-center">
                <div className="w-[144px] h-[144px] xl:w-[160px] xl:h-[160px] rounded-full bg-white flex items-center justify-center shadow-lg">
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
                  <path d="M2 0 L14.7 12.5 V28 H17.3 V12.5 L30 0 Z" fill="#FFFFFF" />
                </svg>
              </div>
              <span className="mt-2.5 text-[15px] lg:text-[16px] font-[800] text-[#F5F5F0] leading-[1.3]">
                We do
                <br />
                the work
              </span>
            </div>

            {/* Step 4: Final Inspection */}
            <div className="flex flex-col items-center text-center w-[156px] sm:w-[180px] lg:w-auto">
              <div className="flex flex-col items-center">
                <div className="w-[144px] h-[144px] xl:w-[160px] xl:h-[160px] rounded-full bg-white flex items-center justify-center shadow-lg">
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
                  <path d="M2 0 L14.7 12.5 V28 H17.3 V12.5 L30 0 Z" fill="#FFFFFF" />
                </svg>
              </div>
              <span className="mt-2.5 text-[15px] lg:text-[16px] font-[800] text-[#F5F5F0] leading-[1.3]">
                Final
                <br />
                Inspection
              </span>
            </div>

            {/* Step 5: Payment */}
            <div className="flex flex-col items-center text-center w-[156px] sm:w-[180px] lg:w-auto">
              <div className="flex flex-col items-center">
                <div className="w-[144px] h-[144px] xl:w-[160px] xl:h-[160px] rounded-full bg-white flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 64 64" className="w-[92px] h-[92px] xl:w-[102px] xl:h-[102px]" fill="none" stroke="#111111" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {/* Dollar coin tucked behind upper hands */}
                    <circle cx="32" cy="18.5" r="8" fill="#FFFFFF" />
                    <path d="M32 13.8 V23.2" />
                    <path d="M34.5 16.1 C34.5 15 33.4 14.3 32 14.3 C30.6 14.3 29.5 15 29.5 16.1 C29.5 17.3 31 17.7 32 18.1 C33.1 18.5 34.5 18.9 34.5 20.2 C34.5 21.3 33.4 22 32 22 C30.6 22 29.5 21.3 29.5 20.2" />
                    {/* White handshake backing to cleanly occlude bottom of coin */}
                    <path d="M17 27.6 L25 25.8 L32 27.8 L38.5 25.8 L47 27.6 L52.8 37 L42 41 L35 45 L18 40 L11.2 37 Z" fill="#FFFFFF" stroke="none" />
                    {/* Handshake outlines */}
                    <path d="M17 27.6 L25 25.8 C27.2 25.3 29 26.2 31 27.6" />
                    <path d="M11.8 36.2 L16.5 39" />
                    <path d="M47 27.6 L38.5 25.8 C36 25.3 33.8 26.2 32 27.8 L26.2 32 C25 33 25.8 35 27.6 34.8 C29.2 34.6 30.8 33.2 33 31.2 L42.5 39.2 C43.8 40.3 42.3 42.4 40.5 41.3 L35 37" />
                    <path d="M52.2 36.4 L43 41" />
                    <path d="M39.5 41.5 C40.5 42.8 39 44.5 37.2 43.6" />
                    <path d="M37 43.8 C37.8 45.2 36.2 46.6 34.5 45.6" />
                    {/* Interlocked bottom knuckles */}
                    <rect x="17.5" y="36.2" width="3.8" height="6.8" rx="1.9" transform="rotate(38 19.4 39.6)" fill="#FFFFFF" />
                    <rect x="20.8" y="38.2" width="3.8" height="7" rx="1.9" transform="rotate(38 22.7 41.7)" fill="#FFFFFF" />
                    <rect x="24.2" y="40.2" width="3.8" height="7" rx="1.9" transform="rotate(38 26.1 43.7)" fill="#FFFFFF" />
                    <rect x="27.8" y="41.8" width="3.8" height="6.4" rx="1.9" transform="rotate(38 29.7 45)" fill="#FFFFFF" />
                    {/* Angled cuffs with buttons */}
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
                  <path d="M2 0 L14.7 12.5 V28 H17.3 V12.5 L30 0 Z" fill="#FFFFFF" />
                </svg>
              </div>
              <span className="mt-2.5 text-[15px] lg:text-[16px] font-[800] text-[#F5F5F0] leading-[1.3]">
                Payment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6.45 See Our Work */}
      <section className="bg-[#0D0D0D] pt-[24px] lg:pt-[40px] pb-10 sm:pb-12 lg:pb-14 overflow-hidden">
        {/* Left-Aligned Header (matches Our Services / Our Process) */}
        <div className="max-w-[1344px] mx-auto px-4 lg:px-8">
          <div className="flex items-end gap-5 sm:gap-6">
            <div className="inline-flex flex-col items-start sm:items-center shrink-0">
              <span className="text-[12px] sm:text-[13px] font-[800] tracking-[0.08em] uppercase text-[#F5F5F0] mb-1.5">
                VIEW OUR WORK
              </span>
              <h2 className="text-[32px] sm:text-[38px] lg:text-[46px] uppercase font-[800] text-[#F5F5F0] leading-none tracking-[-0.01em]">
                OUR PROJECT GALLERY
              </h2>
            </div>
            <div className="h-[2px] flex-grow bg-[#1F46B4]/60 mb-[15px] sm:mb-[18px] lg:mb-[22px]" />
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
            className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-40 w-10 h-14 flex items-center justify-center text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] hover:scale-110 transition-transform cursor-pointer"
          >
            <ChevronLeft size={40} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            onClick={() => goToWork(1)}
            aria-label="Next project"
            className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-40 w-10 h-14 flex items-center justify-center text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] hover:scale-110 transition-transform cursor-pointer"
          >
            <ChevronRight size={40} strokeWidth={1.75} />
          </button>
        </div>

        {/* View More Projects */}
        <div className="mt-10 sm:mt-12 lg:mt-14 flex justify-center px-4">
          <button
            type="button"
            onClick={() => setLightboxIndex(workIndex)}
            className="bg-[#1F46B4] hover:bg-[#183890] text-white font-[800] text-[12px] sm:text-[13px] uppercase tracking-[0.04em] px-6 sm:px-7 py-3 sm:py-3.5 rounded-[4px] inline-flex items-center gap-2 shadow-[0_6px_18px_rgba(31,70,180,0.35)] transition-colors cursor-pointer"
          >
            VIEW MORE PROJECTS
            <span className="w-[16px] h-[16px] rounded-full bg-white flex items-center justify-center">
              <ArrowRight size={11} strokeWidth={3.2} className="text-[#1F46B4]" />
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
      <section className="relative overflow-hidden bg-[#1A1A1A] -mt-[1px]">
        <img
          src="/images/reviews-bg.jpg"
          alt="Custom residential plumbing and freestanding bath installation"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/55" />

        {/* Top Organic Wave Transition from See Our Work */}
        <div className="relative z-10 w-full leading-none pointer-events-none">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="block w-full h-[64px] sm:h-[88px] lg:h-[116px]"
            aria-hidden="true"
          >
            <path
              d="M0,0 L0,10 C130,20 320,108 525,108 C700,108 810,36 965,36 C1085,36 1150,92 1245,92 C1335,92 1395,50 1440,22 L1440,0 Z"
              fill="#0D0D0D"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1344px] mx-auto px-4 lg:px-8 pt-6 sm:pt-8 pb-5 sm:pb-6 lg:pb-8">
          {/* Eyebrow Pill + Heading + Divider + CTA */}
          <div className="mb-8 lg:mb-10">
            <div className="inline-block bg-[#0B0B0B]/95 text-[#F5F5F0] text-[11px] sm:text-[13px] font-[800] tracking-[0.06em] uppercase px-3 py-1.5 rounded-[4px] mb-2 shadow-md">
              DISCOVER WHAT OUR CUSTOMERS HAVE TO SAY ABOUT US
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 sm:gap-6">
              <h2 className="text-[32px] sm:text-[38px] lg:text-[46px] uppercase font-[800] text-[#F5F5F0] leading-none tracking-[-0.01em] shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]">
                REVIEWS
              </h2>

              <div className="hidden sm:block h-[2px] flex-grow bg-[#1F46B4]/85" />

              <Link
                to="/contact"
                className="bg-white hover:bg-[#F5F5F0] text-[#0D0D0D] font-[800] text-[12px] sm:text-[13px] uppercase tracking-[0.04em] px-4 sm:px-6 py-3 sm:py-3.5 rounded-[6px] inline-flex items-center gap-2 shrink-0 shadow-lg transition-colors"
              >
                CONTACT US NOW
                <ArrowRight size={15} strokeWidth={2.8} className="text-[#1F46B4]" />
              </Link>
            </div>
          </div>

          {/* Horizontal Scrolling Review Carousel Aligned to Container Edges */}
          <div
            ref={reviewsTrackRef}
            onScroll={handleReviewsScroll}
            onPointerDown={handleTrackPointerDown}
            role="region"
            aria-label="Customer reviews horizontal carousel"
            className={`relative w-full overflow-x-auto no-scrollbar overscroll-x-contain flex items-stretch gap-5 lg:gap-6 py-2 -my-2 cursor-grab active:cursor-grabbing select-none ${isDraggingReviews ? '' : 'snap-x snap-mandatory'
              }`}
          >
            {CUSTOMER_REVIEWS.map((review) => {
              const isExpanded = Boolean(expandedReviews[review.author]);
              const bodyText = isExpanded && review.full ? review.full : review.preview;
              return (
                <div
                  key={review.author}
                  data-review-card
                  className="snap-start shrink-0 w-[88%] sm:w-[70%] md:w-[calc((100%-40px)/3)] lg:w-[calc((100%-48px)/3)] bg-white rounded-[8px] shadow-xl p-5 sm:p-6 flex flex-col justify-between min-h-[218px]"
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="text-[#F59E0B] font-[800] text-[18px] leading-none">5</span>
                      <div className="flex items-center gap-0.5 text-[#FBBF24]" aria-label="5 out of 5 stars">
                        {[0, 1, 2, 3, 4].map((s) => (
                          <svg key={s} viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-hidden="true">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-[#2A2A2A] text-[13.5px] sm:text-[14px] leading-[1.55]">
                      {bodyText}
                      {review.full && (
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedReviews((prev) => ({
                              ...prev,
                              [review.author]: !prev[review.author],
                            }))
                          }
                          className="text-[#1F46B4] hover:underline font-[700] ml-1.5 cursor-pointer"
                        >
                          {isExpanded ? 'Less' : 'More'}
                        </button>
                      )}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-5 mt-auto">
                    <span className="text-[#737373] text-[13px] font-[700]">{review.author}</span>
                    <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] shrink-0" aria-label="Google Review">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Controls */}
          <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
            <button
              type="button"
              onClick={() => scrollToReviewPage((reviewPage - 1 + TOTAL_REVIEW_PAGES) % TOTAL_REVIEW_PAGES)}
              aria-label="Previous reviews page"
              className="p-1.5 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} strokeWidth={2.5} />
            </button>

            <div className="flex items-center gap-3 sm:gap-4">
              {Array.from({ length: TOTAL_REVIEW_PAGES }, (_, pageIdx) => {
                const isActive = pageIdx === reviewPage;
                return (
                  <button
                    key={pageIdx}
                    type="button"
                    onClick={() => scrollToReviewPage(pageIdx)}
                    aria-label={`Reviews page ${pageIdx + 1}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`cursor-pointer transition-all ${isActive
                        ? 'text-white font-[800] text-[16px] sm:text-[17px]'
                        : 'text-white/75 hover:text-white font-[700] text-[13px] sm:text-[14px]'
                      }`}
                  >
                    {pageIdx + 1}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => scrollToReviewPage((reviewPage + 1) % TOTAL_REVIEW_PAGES)}
              aria-label="Next reviews page"
              className="p-1.5 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Review Us On Google Callout Card */}
          <div className="mt-6 sm:mt-8 mx-auto max-w-[490px] w-full bg-[#0B0B0B] border border-white/85 rounded-[6px] px-7 sm:px-12 py-7 sm:py-8 flex flex-col items-center text-center shadow-2xl">
            <h3 className="text-[22px] sm:text-[28px] font-[800] uppercase text-white tracking-[0.01em] leading-none">
              REVIEW US ON GOOGLE
            </h3>

            <div className="flex items-center justify-center gap-1.5 my-4 text-[#FBBF24]" aria-label="5 stars">
              {[0, 1, 2, 3, 4].map((s) => (
                <svg key={s} viewBox="0 0 24 24" className="w-[26px] h-[26px] fill-current" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <Link
              to="/leave-review"
              className="bg-[#1F46B4] hover:bg-[#183890] text-white font-[800] text-[13px] sm:text-[14px] uppercase tracking-[0.04em] px-8 sm:px-10 py-3.5 rounded-[5px] transition-colors shadow-md inline-block"
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
              fill="#0D0D0D"
            />
          </svg>
        </div>
      </section>

      {/* 6.49 Frequently Asked Questions */}
      <section className="bg-[#0D0D0D] -mt-[1px] pt-[20px] lg:pt-[36px] pb-[84px] lg:pb-[116px] px-4 lg:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.32fr_0.68fr] gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-[800] text-[#F5F5F0] leading-[1.1] tracking-[-0.01em] mb-6 lg:mb-8">
              Frequently Asked Questions
            </h2>

            <div className="border-t border-white/15">
              {HOME_FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={faq.q} className="border-b border-white/15">
                    <button
                      type="button"
                      className="w-full text-left py-5 sm:py-6 flex items-center gap-3.5 cursor-pointer group"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <ChevronDown
                        size={17}
                        strokeWidth={2.6}
                        className={`text-[#F5F5F0] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                          }`}
                      />
                      <span className="text-[16px] sm:text-[18px] lg:text-[19px] font-[800] text-[#F5F5F0] group-hover:text-white leading-[1.4] transition-colors">
                        {faq.q}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pb-5 pl-[30px] pr-4 text-[15px] sm:text-[16px] text-[#F5F5F0]/80 leading-[1.65]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:mt-3">
            <div className="rounded-[6px] sm:rounded-[8px] overflow-hidden bg-[#1A1A1A] shadow-2xl aspect-[4/3] lg:aspect-[1.05/1]">
              <img
                src="/images/work/work-02.jpg"
                alt="Completed SOLO Plumbing & Heating bathroom installation"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6.495 Proudly Serving These Areas */}
      <section className="bg-[#0D0D0D] border-t border-white/15 pt-[48px] lg:pt-[64px]">
        <div className="max-w-[1344px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-10 lg:gap-14 items-start">
          {/* Interactive Map + Business Place Card */}
          <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[470px] bg-[#1A1A1A] overflow-hidden shadow-2xl">
            <iframe
              title="SOLO Plumbing & Heating Service Area Map — Greater Portland"
              src="https://maps.google.com/maps?q=Portland,+OR&t=&z=8&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Google Maps Business Info Card Overlay */}
            <div className="absolute top-[10px] left-[10px] z-10 bg-white rounded-[2px] shadow-[0_1px_4px_rgba(0,0,0,0.3)] px-3.5 py-2.5 min-w-[215px] text-left">
              <div className="text-[14px] font-[700] text-[#202124] leading-tight">
                SOLO Plumbing &amp; Heating
              </div>
              <div className="mt-1 flex items-center gap-1 text-[12px]">
                <span className="text-[#70757a] font-[700]">4.9</span>
                <div className="flex items-center text-[#fbbc04]" aria-label="4.9 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <svg key={s} viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-current" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <Link to="/leave-review" className="text-[#1a73e8] hover:underline font-[700] ml-0.5">
                  147 reviews
                </Link>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=SOLO+Plumbing+%26+Heating+Portland+OR"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-block text-[12px] text-[#1a73e8] hover:underline font-[700]"
              >
                View larger map
              </a>
            </div>
          </div>

          {/* Areas Column */}
          <div className="lg:pt-2">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] uppercase font-[800] text-[#F5F5F0] leading-[1.08] tracking-[-0.01em] mb-8 lg:mb-10">
              PROUDLY SERVING
              <br />
              THESE AREAS
            </h2>

            <div className="grid grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-5 sm:gap-y-6 max-w-[500px]">
              {SERVICE_AREA_LINKS.map((area) => (
                <Link
                  key={area.name}
                  to={area.to}
                  className="text-[17px] sm:text-[19px] lg:text-[20px] font-[700] text-[#F5F5F0] hover:text-[#5C85F6] transition-colors leading-snug"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6.498 Follow Us on Instagram */}
      <section className="bg-[#0D0D0D] pt-[56px] lg:pt-[76px] pb-[28px] lg:pb-[40px]">
        <div className="max-w-[1040px] mx-auto px-4 lg:px-8">
          {/* Centered Section Header */}
          <div className="text-center mb-8 sm:mb-10">
            <span className="block text-[14px] sm:text-[15px] font-[700] uppercase tracking-[0.06em] text-[#5C85F6] mb-1.5">
              INSTAGRAM
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] uppercase font-[800] text-[#F5F5F0] leading-[1.08] tracking-[-0.01em]">
              FOLLOW US ON INSTAGRAM
            </h2>
          </div>

          {/* 4x2 Square Post Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] bg-[#1A1A1A]">
            {INSTAGRAM_POSTS.slice(0, visibleIgCount).map((post, idx) => (
              <button
                key={post.id}
                type="button"
                onClick={() => setActiveIgPostIndex(idx)}
                aria-label={`Open Instagram post ${idx + 1} by @${INSTAGRAM_USERNAME}`}
                className="group relative aspect-square w-full overflow-hidden bg-[#141414] p-0 text-left cursor-pointer focus:outline-none"
              >
                <img
                  src={post.images[0]}
                  alt={`@${INSTAGRAM_USERNAME} post ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                {/* Top-Right Media Type Badge (Carousel or Reel) */}
                {post.mediaType === 'carousel' && (
                  <div className="absolute top-2.5 right-2.5 z-10 text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.65)] pointer-events-none">
                    <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-current" aria-hidden="true">
                      <path d="M19 5.5h-1.5V4A2.5 2.5 0 0 0 15 1.5H4A2.5 2.5 0 0 0 1.5 4v11A2.5 2.5 0 0 0 4 17.5h1.5V19A2.5 2.5 0 0 0 8 21.5h11a2.5 2.5 0 0 0 2.5-2.5V8A2.5 2.5 0 0 0 19 5.5zM4 15.5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v1.5H8A2.5 2.5 0 0 0 5.5 8v7.5H4zm15.5 3.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v11z" />
                    </svg>
                  </div>
                )}
                {post.mediaType === 'reel' && (
                  <div className="absolute top-2.5 right-2.5 z-10 text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.65)] pointer-events-none">
                    <svg viewBox="0 0 24 24" className="w-[21px] h-[21px] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2.5" y="5" width="14" height="14" rx="2.5" />
                      <path d="M16.5 10l5-3v10l-5-3v-4z" fill="currentColor" />
                    </svg>
                  </div>
                )}

                {/* Hover Overlay with Likes, Comments & Caption Preview */}
                <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-4 text-center text-white">
                  <div className="flex items-center justify-center gap-5 text-[14px] font-[700] mb-3">
                    <span className="inline-flex items-center gap-1.5">
                      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth="2.2" aria-hidden="true">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      {post.likes}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current" strokeWidth="2.2" aria-hidden="true">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      {post.comments}
                    </span>
                  </div>
                  <p className="text-[12px] sm:text-[12.5px] font-[600] leading-[1.4] text-white/95 line-clamp-4 max-w-[210px]">
                    {post.caption}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Load More / View on Instagram Button */}
          <div className="mt-7 flex justify-center">
            {visibleIgCount < INSTAGRAM_POSTS.length ? (
              <button
                type="button"
                onClick={() => setVisibleIgCount(INSTAGRAM_POSTS.length)}
                className="bg-[#1F46B4] hover:bg-[#183890] text-white text-[13px] font-[700] px-14 py-2.5 rounded-[4px] transition-colors shadow-md cursor-pointer"
              >
                Load more
              </button>
            ) : (
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1F46B4] hover:bg-[#183890] text-white text-[13px] font-[700] px-10 py-2.5 rounded-[4px] transition-colors shadow-md inline-flex items-center gap-2"
              >
                View more on Instagram
              </a>
            )}
          </div>
        </div>
      </section>

      {/* In-Website Scrollable Instagram Feed Modal */}
      {activeIgPostIndex !== null && (
        <div
          ref={igModalFeedRef}
          onClick={() => setActiveIgPostIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Instagram feed viewer"
          className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-[2px] overflow-y-auto py-4 sm:py-8 px-3 sm:px-4"
        >
          {/* Fixed Close Button positioned to the right of the centered column */}
          <button
            type="button"
            onClick={() => setActiveIgPostIndex(null)}
            aria-label="Close Instagram feed"
            className="fixed top-4 right-4 sm:top-6 sm:right-[calc(50%-325px)] z-[120] w-10 h-10 rounded-full bg-black/50 sm:bg-transparent hover:bg-white/15 text-white/90 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={26} strokeWidth={1.8} />
          </button>

          {/* Centered White Scrollable Feed Column */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[540px] w-full mx-auto bg-white text-[#1A1A1A] rounded-[4px] shadow-[0_20px_60px_rgba(0,0,0,0.75)] overflow-hidden divide-y divide-black/10"
          >
            {INSTAGRAM_POSTS.map((post, postIdx) => {
              const currentSlide = igSlideIndexes[post.id] ?? 0;
              const totalSlides = post.images.length;

              return (
                <article
                  key={post.id}
                  data-ig-post-index={postIdx}
                  className="bg-white scroll-mt-4"
                >
                  {/* Post Top Header Bar */}
                  <div className="px-4 py-3 flex items-center justify-between gap-3">
                    <a
                      href={INSTAGRAM_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 group min-w-0"
                    >
                      <span className="p-[2px] rounded-full bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] shrink-0">
                        <img
                          src={INSTAGRAM_AVATAR}
                          alt={INSTAGRAM_USERNAME}
                          className="w-8 h-8 rounded-full object-cover bg-white p-[1px]"
                        />
                      </span>
                      <span className="text-[13.5px] font-[700] text-[#1A1A1A] group-hover:underline truncate">
                        {INSTAGRAM_USERNAME}
                      </span>
                    </a>

                    <div className="flex items-center gap-3 shrink-0">
                      <a
                        href={INSTAGRAM_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] font-[700] text-[#0095F6] hover:text-[#00376B] transition-colors"
                      >
                        Follow
                      </a>
                      <a
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open post on Instagram"
                        className="text-[#1A1A1A] hover:text-[#0095F6] transition-colors"
                      >
                        <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-none stroke-current" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5" />
                          <circle cx="12" cy="12" r="4.5" />
                          <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Post Media (with Multi-Photo Carousel Controls if applicable) */}
                  <div className="relative w-full bg-[#F5F5F5] overflow-hidden select-none">
                    <a
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                      title="View post on Instagram"
                    >
                      <img
                        src={post.images[currentSlide]}
                        alt={`${INSTAGRAM_USERNAME} post ${postIdx + 1}`}
                        className="w-full max-h-[620px] object-cover block"
                      />
                    </a>

                    {totalSlides > 1 && (
                      <>
                        {currentSlide > 0 && (
                          <button
                            type="button"
                            onClick={() =>
                              setIgSlideIndexes((prev) => ({
                                ...prev,
                                [post.id]: currentSlide - 1,
                              }))
                            }
                            aria-label="Previous slide"
                            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/55 hover:bg-black/75 text-white flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <ChevronLeft size={18} />
                          </button>
                        )}
                        {currentSlide < totalSlides - 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              setIgSlideIndexes((prev) => ({
                                ...prev,
                                [post.id]: currentSlide + 1,
                              }))
                            }
                            aria-label="Next slide"
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

                  {/* Post Footer: Likes, Share, Caption & Date */}
                  <div className="px-4 pt-3.5 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[13.5px] font-[700] text-[#1A1A1A]">
                        {post.likes} likes
                      </span>
                      <a
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-[600] text-[#1A1A1A] hover:text-[#0095F6] transition-colors"
                      >
                        <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M15 14l5-5-5-5" />
                          <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
                        </svg>
                        Share
                      </a>
                    </div>

                    <p className="text-[13.5px] leading-[1.45] text-[#262626] font-[500]">
                      <a
                        href={INSTAGRAM_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-[700] text-[#1A1A1A] hover:underline mr-1.5"
                      >
                        {INSTAGRAM_USERNAME}
                      </a>
                      {post.caption.split(' ').map((word, wIdx) =>
                        word.startsWith('#') || word.startsWith('@') ? (
                          <a
                            key={wIdx}
                            href={INSTAGRAM_PROFILE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#00376B] hover:underline"
                          >
                            {word}{' '}
                          </a>
                        ) : (
                          <span key={wIdx}>{word} </span>
                        )
                      )}
                    </p>

                    <div className="mt-2.5 text-[10.5px] font-[600] uppercase tracking-[0.04em] text-[#8E8E8E]">
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
      <section className="relative bg-[#0D0D0D] overflow-hidden -mt-[1px]">
        {/* Background Photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/work/work-01.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        {/* Top Organic Wave from Proudly Serving These Areas */}
        <div className="relative z-10 w-full overflow-hidden leading-none pt-6 sm:pt-8 lg:pt-10 bg-[#0D0D0D]">
          <div className="h-[1px] w-full bg-[#0D0D0D]" />
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
              fill="#0D0D0D"
            />
          </svg>
        </div>

        {/* Center CTA Content */}
        <div className="relative z-10 max-w-[960px] mx-auto px-4 lg:px-8 py-[44px] sm:py-[60px] text-center flex flex-col items-center">
          <h2 className="text-[28px] sm:text-[38px] lg:text-[46px] uppercase font-[800] text-[#F5F5F0] leading-[1.08] tracking-[-0.01em] drop-shadow-md">
            READY TO START YOUR PROJECT?
          </h2>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center bg-[#1F46B4] hover:bg-[#193996] text-white font-[800] text-[13px] sm:text-[14px] uppercase tracking-wider px-8 py-4 rounded-[4px] transition-colors shadow-lg"
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
