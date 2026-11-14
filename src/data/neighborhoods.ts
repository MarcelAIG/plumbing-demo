export interface ServiceDistrict {
  id: string;
  title: string;
  subtitle: string;
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    trustChips: string[];
  };
  context: string[];
  commonServices: { title: string; desc: string }[];
  nearby: string[];
}

export const SERVICE_DISTRICTS: ServiceDistrict[] = [
  {
    id: 'larnaca',
    title: 'Larnaca District',
    subtitle: 'Indoor & outdoor handyman services',
    hero: {
      eyebrow: 'SERVICE REGION · LARNACA DISTRICT',
      h1: 'Handyman services in Larnaca District.',
      sub: 'Plumbing works, carpentry, electrical & lighting, and garden & yard maintenance across the Larnaca district.',
      trustChips: ['PLUMBING WORKS', 'CARPENTRY', 'ELECTRICAL & LIGHTING', 'GARDEN & YARD'],
    },
    context: [
      'Handyman Larnaca and Limassol District (Κουτσοδούλια περιοχή Λάρνακας και Λεμεσού) provides dependable household repair, assembly, and maintenance support for homes and outdoor spaces in the Larnaca district.',
      'Whether you need a corroded bathroom faucet replaced, flat-pack furniture or outdoor storage assembled, ceiling light fixtures updated, or garden cleaning and fence repairs, call +357 97 608803 to discuss your location and schedule.',
    ],
    commonServices: [
      {
        title: 'Plumbing Works',
        desc: 'Faulty faucet repair or replacement, kitchen and bathroom sink repairs, and minor plumbing.',
      },
      {
        title: 'Carpentry',
        desc: 'Furniture assembly, cabinet and drawer repairs, parquet installation, and small carpentry jobs.',
      },
      {
        title: 'Electrical & Lighting',
        desc: 'Light fixture installation and replacement, switches, sockets, and decorative lighting.',
      },
      {
        title: 'Garden & Yard Work',
        desc: 'Garden cleaning, weeding and small pruning, fence creation and repair, and yard upkeep.',
      },
    ],
    nearby: ['limassol'],
  },
  {
    id: 'limassol',
    title: 'Limassol District',
    subtitle: 'Indoor & outdoor handyman services',
    hero: {
      eyebrow: 'SERVICE REGION · LIMASSOL DISTRICT',
      h1: 'Handyman services in Limassol District.',
      sub: 'Plumbing works, carpentry, electrical & lighting, and garden & yard maintenance across the Limassol district.',
      trustChips: ['PLUMBING WORKS', 'CARPENTRY', 'ELECTRICAL & LIGHTING', 'GARDEN & YARD'],
    },
    context: [
      'Handyman Larnaca and Limassol District (Κουτσοδούλια περιοχή Λάρνακας και Λεμεσού) serves homeowners and properties across the Limassol district for practical everyday repairs and installations.',
      'From bathroom faucet replacements and ceiling light installations to pergola decorative lighting, furniture assembly, and yard maintenance, call +357 97 608803 to confirm availability for your area.',
    ],
    commonServices: [
      {
        title: 'Plumbing Works',
        desc: 'Faulty faucet repair or replacement, kitchen and bathroom sink repairs, and minor plumbing.',
      },
      {
        title: 'Carpentry',
        desc: 'Furniture assembly, cabinet and drawer repairs, parquet installation, and small carpentry jobs.',
      },
      {
        title: 'Electrical & Lighting',
        desc: 'Light fixture installation and replacement, switches, sockets, and decorative lighting.',
      },
      {
        title: 'Garden & Yard Work',
        desc: 'Garden cleaning, weeding and small pruning, fence creation and repair, and yard upkeep.',
      },
    ],
    nearby: ['larnaca'],
  },
];
