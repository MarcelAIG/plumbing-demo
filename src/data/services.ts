export const SERVICES = [
  {
    id: 'burst-pipe-repair',
    title: 'Burst pipe repair',
    shortDesc: 'Pipe burst or split under pressure. We isolate the water, stop the damage, and repair on the spot.',
    hero: {
      eyebrow: 'EMERGENCY · BURST PIPE',
      h1: 'A burst pipe floods fast. We stop it faster.',
      sub: 'Water isolated within minutes of arrival, then repaired on the spot in most cases.',
      trustChips: ['30-MIN AVERAGE', 'FIXED RATE', 'LICENSED']
    },
    included: [
      'Immediate water supply isolation',
      'Pipe section repair or replacement',
      'Pressure testing after repair',
      'Minimal-damage access methods (no unnecessary wall cutting)',
      'Debris and water cleanup',
      'Written invoice and 12-month guarantee'
    ],
    pricing: {
      callout: 'Burst pipe call-out: from $250',
      extra: 'After-hours: +$100',
      note: 'Fixed before dispatch'
    },
    howItWorks: [
      { step: '01 Isolate', desc: 'First priority on arrival is stopping active water damage — supply is shut at the nearest isolation point.' },
      { step: '02 Diagnose', desc: 'We locate the exact failure point and explain the fix and price before starting.' },
      { step: '03 Repair', desc: 'Section repaired or replaced, pressure-tested, and the area left clean.' }
    ],
    faqs: [
      { q: 'How do I stop the damage before you arrive?', a: 'Shut off your main water valve if you know where it is — usually near the water meter or where the line enters the house. Then call us.' },
      { q: 'Will you need to cut into my walls?', a: 'Only if the burst section is inaccessible otherwise. We always explain access needs and cost before cutting anything.' },
      { q: 'What causes pipes to burst?', a: 'Most common: freezing temperatures, corrosion in old galvanized pipe, or sudden pressure spikes. We\'ll tell you which applies to yours.' },
      { q: 'Is this covered by homeowners insurance?', a: 'Often yes for the water damage portion — we provide documentation your insurer typically requires.' },
      { q: 'How long does a burst pipe repair take?', a: 'Most single-section repairs are 1–3 hours once we\'re on-site, water isolated within the first few minutes.' }
    ],
    related: ['flood-water-extraction', 'emergency-drain-clearing', 'no-heat-no-hot-water']
  },
  {
    id: 'sewer-backup-emergency',
    title: 'Sewer backup emergency',
    shortDesc: 'Sewage backing up into your home. Hazmat-aware response, full extraction, and repair.',
    hero: {
      eyebrow: 'EMERGENCY · SEWER BACKUP',
      h1: 'Sewage backup is a hazard. We treat it like one.',
      sub: 'Hazmat-aware extraction, camera diagnosis, and same-visit repair wherever possible.',
      trustChips: ['HAZMAT-AWARE', 'CAMERA DIAGNOSIS', 'SAME-VISIT REPAIR']
    },
    included: [
      'Safe sewage extraction and containment',
      'Camera line inspection to find the cause',
      'Root/collapse/blockage diagnosis',
      'Sanitization guidance for affected areas',
      'Repair or relining written quote',
      'Post-service line-clear verification'
    ],
    pricing: {
      callout: 'Sewer emergency call-out: from $300',
      extra: 'Camera inspection: from $150',
      note: 'Fixed before dispatch'
    },
    howItWorks: [
      { step: '01 Contain', desc: 'We contain and begin extraction immediately to limit exposure and spread.' },
      { step: '02 Diagnose', desc: 'Camera inspection identifies the exact cause — usually roots, a collapse, or a solid blockage.' },
      { step: '03 Resolve', desc: 'We clear the blockage or quote the structural repair, and verify the line is flowing before we leave.' }
    ],
    faqs: [
      { q: 'Is a sewer backup dangerous to be around?', a: 'Yes — treat it as a biohazard. Keep people and pets away from the affected area until we\'ve contained and cleaned it.' },
      { q: 'What usually causes sewer backups?', a: 'Most often tree roots, grease buildup, or a partial pipe collapse. The camera inspection tells us exactly which.' },
      { q: 'Can you fix it the same day?', a: 'In most cases, yes — clearing the blockage is usually same-visit. Structural repairs (collapsed pipe) may need scheduled follow-up work.' },
      { q: 'Will my homeowner\'s insurance cover this?', a: 'Often partially, depending on cause and your policy. We document everything to support your claim.' },
      { q: 'How do I stop it from happening again?', a: 'Once we know the cause, we\'ll recommend specific prevention — root treatment, grease trap advice, or a liner if the pipe itself is failing.' }
    ],
    related: ['emergency-drain-clearing', 'flood-water-extraction', 'burst-pipe-repair']
  },
  {
    id: 'no-heat-no-hot-water',
    title: 'No heat / no hot water',
    shortDesc: 'Boiler or water heater failure in freezing weather. Same-night diagnosis and fix in most cases.',
    hero: {
      eyebrow: 'EMERGENCY · HEATING',
      h1: 'No heat in freezing weather is its own emergency.',
      sub: 'Boiler and water heater failures diagnosed and fixed same-night in most cases — before pipes have a chance to freeze.',
      trustChips: ['SAME-NIGHT DIAGNOSIS', 'LICENSED', 'FROZEN-PIPE RISK CHECK']
    },
    included: [
      'Full boiler/water heater diagnostic',
      'Same-night repair where parts allow',
      'Temporary heat-loss mitigation advice',
      'Frozen pipe risk assessment for cold snaps',
      'Replacement quote if repair isn\'t viable',
      '12-month guarantee on repair work'
    ],
    pricing: {
      callout: 'Heating emergency call-out: from $200',
      extra: 'Diagnostic included',
      note: 'Fixed before dispatch'
    },
    howItWorks: [
      { step: '01 Diagnose', desc: 'We identify exactly why heat or hot water failed — ignition, pressure, thermostat, or component failure.' },
      { step: '02 Stabilize', desc: 'If a full fix needs a part we don\'t carry, we get partial heat restored where possible while we source it.' },
      { step: '03 Repair', desc: 'Most failures are resolved same visit; we register any warranty work before we leave.' }
    ],
    faqs: [
      { q: 'How fast can you restore heat in a cold snap?', a: 'Same-night in the large majority of cases — this is treated as a genuine emergency priority.' },
      { q: 'Could my pipes freeze from this?', a: 'Possible if heat\'s been out several hours in sub-freezing temps. We assess risk on arrival and advise on protective steps immediately.' },
      { q: 'Is it cheaper to repair or replace my water heater?', a: 'Depends on age and failure type — we give an honest recommendation on-site, not an automatic upsell to replacement.' },
      { q: 'Do you carry common parts on the truck?', a: 'Yes, for the most frequent failure types. Rarer parts may need next-day sourcing, and we\'ll stabilize heat in the meantime where possible.' },
      { q: 'Will this be covered under my existing warranty?', a: 'If your system\'s still under manufacturer warranty, we\'ll check and apply it — this can significantly reduce your cost.' }
    ],
    related: ['burst-pipe-repair', 'flood-water-extraction', 'sewer-backup-emergency']
  },
  {
    id: 'flood-water-extraction',
    title: 'Flood water extraction',
    shortDesc: 'Basement or ground-floor flooding. Industrial extraction pumps and moisture mapping to stop mold before it starts.',
    hero: {
      eyebrow: 'EMERGENCY · FLOODING',
      h1: 'Every hour of standing water raises the risk of mold.',
      sub: 'Industrial extraction, moisture mapping, and source repair — all in one dispatch.',
      trustChips: ['INDUSTRIAL EXTRACTION', 'MOISTURE MAPPING', 'INSURANCE DOCS PROVIDED']
    },
    included: [
      'Industrial pump water extraction',
      'Moisture mapping of affected walls/floors',
      'Repair of the flood\'s source (pipe, appliance, fixture)',
      'Drying and dehumidification recommendations',
      'Insurance-ready documentation and photos',
      'Follow-up moisture check offered at 48 hours'
    ],
    pricing: {
      callout: 'Extraction call-out: from $400',
      extra: 'Per-hour pump time: $125',
      note: 'Fixed before dispatch'
    },
    howItWorks: [
      { step: '01 Extract', desc: 'Industrial pumps remove standing water immediately — this is always the first priority.' },
      { step: '02 Map', desc: 'Moisture meters identify how far water has traveled into walls and subfloor, not just what\'s visible.' },
      { step: '03 Repair & document', desc: 'We fix the source and hand you documentation your insurer will likely request.' }
    ],
    faqs: [
      { q: 'How fast does mold actually start growing?', a: 'As early as 24–48 hours in warm, damp conditions — this is why extraction speed matters more than almost anything else.' },
      { q: 'Do you dry the space out too, or just pump the water?', a: 'We extract and provide drying/dehumidification recommendations. For extensive structural drying, we can refer a trusted restoration partner.' },
      { q: 'Will insurance cover flood damage?', a: 'Depends on your policy and the flood\'s source — a burst pipe is often covered where groundwater flooding may not be. We document thoroughly either way.' },
      { q: 'What caused my flooding?', a: 'Most residential flooding traces to a burst pipe, failed appliance hose, or sump pump failure. We identify and repair the actual source, not just the symptom.' },
      { q: 'Do you check for hidden water after the visible flooding is gone?', a: 'Yes — moisture mapping catches water that\'s traveled into walls or under flooring that isn\'t visible to the eye.' }
    ],
    related: ['burst-pipe-repair', 'sewer-backup-emergency', 'emergency-drain-clearing']
  },
  {
    id: 'emergency-drain-clearing',
    title: 'Emergency drain clearing',
    shortDesc: 'Total blockage backing up every fixture in the house. High-pressure jetting, cleared same visit.',
    hero: {
      eyebrow: 'EMERGENCY · DRAINAGE',
      h1: 'Every fixture backing up at once? That\'s a main line block.',
      sub: 'High-pressure jetting clears it same visit — and we tell you what caused it.',
      trustChips: ['SAME-VISIT', 'CAMERA INSPECTION', 'FIXED RATE']
    },
    included: [
      'High-pressure water jetting of main line',
      'Camera inspection to confirm clearance and cause',
      'Root/grease/debris identification',
      'Written cause report',
      'Re-blockage prevention guidance',
      '12-month guarantee against recurrence from the same cause'
    ],
    pricing: {
      callout: 'Emergency clearing: from $250',
      extra: 'Camera inspection: from $150',
      note: 'Fixed before dispatch'
    },
    howItWorks: [
      { step: '01 Assess', desc: 'We confirm it\'s a main line issue (every fixture affected) versus a single-fixture blockage.' },
      { step: '02 Clear', desc: 'High-pressure jetting clears the line — safer and more thorough than chemical treatment.' },
      { step: '03 Verify', desc: 'Camera confirms the line is fully clear and identifies what caused it, so we can advise on prevention.' }
    ],
    faqs: [
      { q: 'How do I know if it\'s a main line block versus one clogged drain?', a: 'If more than one fixture is backing up at the same time — toilet, tub, and sink — it\'s almost always the main line.' },
      { q: 'Is jetting safe for older pipes?', a: 'Generally yes, and safer than repeated chemical treatments, which can damage aging pipe over time. We assess pipe condition first.' },
      { q: 'What usually causes a main line block?', a: 'Tree roots, grease buildup, or (in older homes) a partial pipe collapse — the camera inspection tells us which.' },
      { q: 'Can this happen again right after you leave?', a: 'Rarely, once properly jetted and root cause identified. We guarantee against recurrence from the same cause for 12 months.' },
      { q: 'Do you work on outside/main sewer lines too?', a: 'Yes — anything from your house to the property line is within scope; public sewer connection issues we help identify and escalate.' }
    ],
    related: ['sewer-backup-emergency', 'burst-pipe-repair', 'flood-water-extraction']
  }
];
