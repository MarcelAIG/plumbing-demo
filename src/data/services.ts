export interface ServiceCategory {
  id: string;
  title: string;
  image: string;
  shortDesc: string;
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    trustChips: string[];
  };
  included: string[];
  estimateInfo: {
    label: string;
    detail: string;
    note: string;
  };
  howItWorks: {
    step: string;
    desc: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
  related: string[];
}

export const SERVICES: ServiceCategory[] = [
  {
    id: 'plumbing-works',
    title: 'Plumbing Works',
    image: '/client-assets/portfolio/faucet-after.png',
    shortDesc:
      'Repair or replacement of faulty faucets, kitchen and bathroom sink repairs, and general minor plumbing work.',
    hero: {
      eyebrow: 'PLUMBING WORKS',
      h1: 'Clean, reliable minor plumbing & faucet repairs.',
      sub: 'From worn-out bathroom basin mixers to dripping kitchen sink connections, we handle everyday plumbing fixes neatly.',
      trustChips: ['FAUCET REPLACEMENT', 'SINK REPAIRS', 'LARNACA & LIMASSOL'],
    },
    included: [
      'Repair or replacement of faulty faucets',
      'Kitchen and bathroom sink repairs',
      'General minor plumbing work',
      'Replacement of worn seals, hoses, and connections',
      'Clean finish and leak check after installation',
    ],
    estimateInfo: {
      label: 'Direct Quote',
      detail: 'Call or message +357 97 608803',
      note: 'Scope discussed before work begins',
    },
    howItWorks: [
      {
        step: '01 Discuss the Issue',
        desc: 'Tell us what needs repairing or replacing by phone or WhatsApp, and share a photo if helpful.',
      },
      {
        step: '02 Clear Estimate',
        desc: 'We review the required parts and scope with you clearly before starting the job.',
      },
      {
        step: '03 Neat Installation',
        desc: 'Your faucet or sink repair is completed cleanly and checked for proper flow and sealing.',
      },
    ],
    faqs: [
      {
        q: 'Can you replace an old corroded bathroom or kitchen faucet?',
        a: 'Yes. We remove old or corroded faucets and install new replacement mixer taps cleanly.',
      },
      {
        q: 'Do you handle minor kitchen and bathroom sink repairs?',
        a: 'Yes, including tap replacements, trap and waste connections, and general minor plumbing work.',
      },
      {
        q: 'How can I request a quote for a plumbing job?',
        a: 'Call +357 97 608803 directly or send a message with details of the repair needed.',
      },
    ],
    related: ['carpentry', 'electrical-lighting', 'garden-yard-work'],
  },
  {
    id: 'carpentry',
    title: 'Carpentry',
    image: '/client-assets/portfolio/storage-box-after-closed.png',
    shortDesc:
      'Furniture assembly, cabinet and drawer repairs, parquet installation, and general small carpentry jobs.',
    hero: {
      eyebrow: 'CARPENTRY',
      h1: 'Practical indoor & outdoor carpentry and assembly.',
      sub: 'Neat furniture and outdoor unit assembly, cabinet and drawer adjustments, parquet installation, and everyday woodwork repairs.',
      trustChips: ['FURNITURE ASSEMBLY', 'CABINET REPAIRS', 'PARQUET INSTALLATION'],
    },
    included: [
      'Furniture assembly',
      'Cabinet and drawer repairs',
      'Parquet installation',
      'General small carpentry jobs',
      'Hinge, runner, and latch alignment',
    ],
    estimateInfo: {
      label: 'Direct Quote',
      detail: 'Call or message +357 97 608803',
      note: 'Indoor & outdoor carpentry jobs',
    },
    howItWorks: [
      {
        step: '01 Share Job Details',
        desc: 'Let us know what furniture needs assembling, which cabinets need repair, or the room area for parquet work.',
      },
      {
        step: '02 Plan & Quote',
        desc: 'We confirm the practical details, hardware needs, and schedule a convenient visit.',
      },
      {
        step: '03 Careful Finish',
        desc: 'Everything is assembled, aligned, and fitted securely so doors, drawers, and flooring sit neatly.',
      },
    ],
    faqs: [
      {
        q: 'Do you assemble flat-pack indoor and outdoor furniture?',
        a: 'Yes, we assemble household furniture as well as outdoor storage boxes and patio items.',
      },
      {
        q: 'Can you fix misaligned cabinet doors or sticking drawers?',
        a: 'Yes. Cabinet and drawer repairs, hinge adjustments, and runner fixes are part of our carpentry services.',
      },
      {
        q: 'Do you install parquet flooring?',
        a: 'Yes, parquet installation is included in our carpentry service offering across Larnaca and Limassol.',
      },
    ],
    related: ['garden-yard-work', 'electrical-lighting', 'plumbing-works'],
  },
  {
    id: 'electrical-lighting',
    title: 'Electrical & Lighting',
    image: '/client-assets/portfolio/pergola-string-lights-view-1.png',
    shortDesc:
      'Light fixture installation and replacement, switch and socket installation or replacement, and lighting improvements.',
    hero: {
      eyebrow: 'ELECTRICAL & LIGHTING',
      h1: 'Light fixture, switch, socket & decorative lighting work.',
      sub: 'Upgrade ceiling pendants, replace worn switches or sockets, or brighten outdoor pergolas with warm decorative string lighting.',
      trustChips: ['LIGHT FIXTURES', 'SWITCHES & SOCKETS', 'DECORATIVE LIGHTING'],
    },
    included: [
      'Light fixture installation and replacement',
      'Switch and socket installation or replacement',
      'Lighting improvements and decorative lighting',
      'Outdoor pergola and patio string light installations',
      'Clean mounting and fixture alignment',
    ],
    estimateInfo: {
      label: 'Direct Quote',
      detail: 'Call or message +357 97 608803',
      note: 'Indoor & outdoor lighting setups',
    },
    howItWorks: [
      {
        step: '01 Describe Your Setup',
        desc: 'Tell us about the light fixtures, switches, sockets, or decorative lighting you want installed or replaced.',
      },
      {
        step: '02 Confirm Scope',
        desc: 'We review the location and fixture requirements with you before starting.',
      },
      {
        step: '03 Clean Finish',
        desc: 'Fixtures, switches, and decorative lighting are mounted securely and tested in place.',
      },
    ],
    faqs: [
      {
        q: 'Can you replace an existing ceiling pendant light?',
        a: 'Yes. Light fixture installation and replacement is one of our core electrical and lighting services.',
      },
      {
        q: 'Do you install decorative lighting for pergolas and patios?',
        a: 'Yes, we install decorative string lighting and outdoor lighting improvements for pergolas and entertaining areas.',
      },
      {
        q: 'Can you replace old light switches and wall sockets?',
        a: 'Yes, switch and socket installation or replacement is included in our electrical and lighting work.',
      },
    ],
    related: ['carpentry', 'garden-yard-work', 'plumbing-works'],
  },
  {
    id: 'garden-yard-work',
    title: 'Garden & Yard Work',
    image: '/client-assets/portfolio/pergola-string-lights-view-2.png',
    shortDesc:
      'Garden cleaning, weeding and small pruning, fence creation and repair, and general yard maintenance.',
    hero: {
      eyebrow: 'GARDEN & YARD WORK',
      h1: 'Keep your garden, fence, and outdoor spaces tidy.',
      sub: 'Practical outdoor upkeep across Larnaca and Limassol—from garden cleaning and weeding to fence repairs and general yard maintenance.',
      trustChips: ['GARDEN CLEANING', 'WEEDING & PRUNING', 'FENCE CREATION & REPAIR'],
    },
    included: [
      'Garden cleaning',
      'Weeding and small pruning',
      'Fence creation and repair',
      'General yard maintenance',
      'Outdoor area tidying and upkeep',
    ],
    estimateInfo: {
      label: 'Direct Quote',
      detail: 'Call or message +357 97 608803',
      note: 'Yard & perimeter maintenance',
    },
    howItWorks: [
      {
        step: '01 Assess the Yard',
        desc: 'Share what outdoor maintenance, garden cleaning, or fence repair work your property needs.',
      },
      {
        step: '02 Agree on Scope',
        desc: 'We discuss the tasks clearly and arrange a visit across Larnaca or Limassol.',
      },
      {
        step: '03 Tidy Results',
        desc: 'Your yard, garden beds, or fencing is cleaned, repaired, and left neat.',
      },
    ],
    faqs: [
      {
        q: 'What outdoor jobs do you cover under garden and yard work?',
        a: 'Garden cleaning, weeding and small pruning, fence creation and repair, and general yard maintenance.',
      },
      {
        q: 'Can you repair or build garden fencing?',
        a: 'Yes, fence creation and repair is part of our garden and yard work services.',
      },
      {
        q: 'Do you cover both Larnaca and Limassol districts?',
        a: 'Yes, we serve homes and properties across both the Larnaca and Limassol districts in Cyprus.',
      },
    ],
    related: ['carpentry', 'electrical-lighting', 'plumbing-works'],
  },
];
