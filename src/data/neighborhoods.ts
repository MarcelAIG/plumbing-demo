export const NEIGHBORHOODS = [
  {
    id: 'downtown',
    title: 'Downtown',
    responseTime: '~20 min average',
    hero: {
      eyebrow: 'EMERGENCY DISPATCH · Downtown',
      h1: 'Fast emergency plumbing in Downtown.',
      sub: 'Average response time: 20 minutes.',
      trustChips: ['20-MIN AVG', 'COMMERCIAL AWARE', '24/7']
    },
    context: [
      'Our trucks are staged near the core nightly, allowing for average response times around 20 minutes.',
      'Downtown\'s mix of high-rise and converted-loft housing often means dealing with older commercial plumbing stock beneath residential conversions.'
    ],
    commonIssues: [
      { title: 'Aging Cast-Iron Stacks', desc: 'Corrosion and blockages in older vertical pipes.' },
      { title: 'Shared-Building Backups', desc: 'Sewer backups affecting multiple converted units.' },
      { title: 'High-Pressure System Quirks', desc: 'Valve and PRV failures in multi-story buildings.' },
      { title: 'Commercial Grade Fixes', desc: 'Dealing with larger commercial pipes in lofts.' }
    ],
    testimonials: [
      { quote: 'Water started pouring from the ceiling at 2am. They knew exactly how to isolate the commercial supply line and had it stopped in minutes.', author: 'Alicia P.', location: 'Downtown loft', service: 'Sewer backup emergency', date: 'March 2026' },
      { quote: 'Fastest response I\'ve ever seen. Arrived in 15 minutes, diagnosed the PRV issue, and had pressure restored by 3am.', author: 'Mark D.', location: 'Downtown high-rise', service: 'No water pressure', date: 'January 2026' },
      { quote: 'They didn\'t just fix the pipe, they understood the building\'s complex shut-off system. True professionals.', author: 'Sarah J.', location: 'Converted warehouse', service: 'Burst pipe repair', date: 'February 2026' }
    ],
    nearby: ['riverside', 'eastside', 'highland-park']
  },
  {
    id: 'riverside',
    title: 'Riverside',
    responseTime: '~25 min average',
    hero: {
      eyebrow: 'EMERGENCY DISPATCH · Riverside',
      h1: 'Fast emergency plumbing in Riverside.',
      sub: 'Average response time: 25 minutes.',
      trustChips: ['25-MIN AVG', 'FLOOD EXPERTS', '24/7']
    },
    context: [
      'Riverside is serviced by our central and east dispatch points, putting average arrival times at 25 minutes.',
      'Composed of older single-family homes near the water table, this area sees a naturally higher flood risk during heavy rains or thaws.'
    ],
    commonIssues: [
      { title: 'Sump Pump Failures', desc: 'Overwhelmed or burned-out pumps during storms.' },
      { title: 'Basement Flooding', desc: 'Groundwater intrusion and extraction needs.' },
      { title: 'Foundation-Level Corrosion', desc: 'Older pipes degrading near the damp ground.' },
      { title: 'Sewer Line Intrusion', desc: 'Roots seeking water near riverbank properties.' }
    ],
    testimonials: [
      { quote: 'Basement was flooding at 1am. They picked up on the second ring, quoted a fixed price, and had a truck at my door in 25 minutes.', author: 'Marcus T.', location: 'Riverside bungalow', service: 'Flood extraction', date: 'April 2026' },
      { quote: 'Sump pump died during the biggest storm of the year. They waded right in, replaced it on the spot, and started pumping out the water.', author: 'Elise R.', location: 'Riverside split-level', service: 'Pump replacement', date: 'March 2026' },
      { quote: 'Replaced a heavily corroded main line before it burst. Honest, fast, and didn\'t try to upsell things I didn\'t need.', author: 'David K.', location: 'Riverside historic', service: 'Pipe replacement', date: 'December 2025' }
    ],
    nearby: ['downtown', 'oakwood', 'westgate']
  },
  {
    id: 'oakwood',
    title: 'Oakwood',
    responseTime: '~30 min average',
    hero: {
      eyebrow: 'EMERGENCY DISPATCH · Oakwood',
      h1: 'Fast emergency plumbing in Oakwood.',
      sub: 'Average response time: 30 minutes.',
      trustChips: ['30-MIN AVG', 'GALVANIZED EXPERTS', '24/7']
    },
    context: [
      'Oakwood\'s sprawling layout means our trucks average a 30-minute response from dispatch to your driveway.',
      'Characterized by mid-century suburban housing, we frequently encounter original galvanized piping which is now reaching the end of its functional life.'
    ],
    commonIssues: [
      { title: 'Burst Galvanized Pipes', desc: 'Corroded pipes splitting under pressure.' },
      { title: 'Low Water Pressure', desc: 'Mineral buildup restricting flow in old lines.' },
      { title: 'Aging Water Heaters', desc: 'Tanks rusting out and failing overnight.' },
      { title: 'Main Drain Blocks', desc: 'Mature trees cracking older clay sewer lines.' }
    ],
    testimonials: [
      { quote: 'Sewer backed up into the kitchen on Thanksgiving. They didn\'t flinch, handled the mess professionally, fixed the root cause same visit.', author: 'Dana W.', location: 'Oakwood ranch home', service: 'Sewer emergency', date: 'November 2025' },
      { quote: 'An old pipe burst in the ceiling and was ruining the living room. They arrived fast, shut it off, and replaced the whole section cleanly.', author: 'Greg M.', location: 'Oakwood mid-century', service: 'Burst pipe repair', date: 'January 2026' },
      { quote: 'Water heater died at 3am. They had a new one on the truck and hot water was back by breakfast.', author: 'Linda F.', location: 'Oakwood colonial', service: 'No hot water', date: 'February 2026' }
    ],
    nearby: ['riverside', 'highland-park', 'eastside']
  },
  {
    id: 'highland-park',
    title: 'Highland Park',
    responseTime: '~30 min average',
    hero: {
      eyebrow: 'EMERGENCY DISPATCH · Highland Park',
      h1: 'Fast emergency plumbing in Highland Park.',
      sub: 'Average response time: 30 minutes.',
      trustChips: ['30-MIN AVG', 'BOILER EXPERTS', '24/7']
    },
    context: [
      'We stage a dedicated night truck near the parkway to keep Highland Park responses around 30 minutes.',
      'Known for larger family homes, this area often features complex multi-zone heating systems and older radiant heat infrastructure.'
    ],
    commonIssues: [
      { title: 'Winter Boiler Failures', desc: 'Complex heating systems failing in freezing weather.' },
      { title: 'Radiant Heat Leaks', desc: 'Hard-to-find leaks under floors and behind walls.' },
      { title: 'Multi-Zone Diagnostics', desc: 'Troubleshooting complicated residential heating loops.' },
      { title: 'Large System Demands', desc: 'Commercial-sized water heaters in large residential homes.' }
    ],
    testimonials: [
      { quote: 'Furnace and hot water died during a cold snap. Had heat back by midnight. Genuinely saved our pipes from freezing.', author: 'Ray H.', location: 'Highland Park colonial', service: 'No heat emergency', date: 'January 2026' },
      { quote: 'They found a radiant heat leak that two other companies missed. Extracted the water and fixed the loop without tearing up the whole floor.', author: 'Chloe S.', location: 'Highland Park estate', service: 'Radiant leak repair', date: 'March 2026' },
      { quote: 'Diagnosed a failing boiler at 11pm, had the parts on the truck to get partial heat going, and finished the fix the next morning.', author: 'Tom B.', location: 'Highland Park multi-level', service: 'Boiler diagnostic', date: 'February 2026' }
    ],
    nearby: ['oakwood', 'downtown', 'westgate']
  },
  {
    id: 'eastside',
    title: 'Eastside',
    responseTime: '~35 min average',
    hero: {
      eyebrow: 'EMERGENCY DISPATCH · Eastside',
      h1: 'Fast emergency plumbing in Eastside.',
      sub: 'Average response time: 35 minutes.',
      trustChips: ['35-MIN AVG', 'MULTI-FAMILY AWARE', '24/7']
    },
    context: [
      'Eastside traffic patterns and density mean our emergency response averages 35 minutes.',
      'A dense mix of older multi-family properties and newer infill construction, meaning a high volume of shared plumbing lines and mature street trees.'
    ],
    commonIssues: [
      { title: 'Shared Drain Blockages', desc: 'Main line issues backing up into multiple units.' },
      { title: 'Tenant Emergencies', desc: 'Direct coordination with tenants and landlords remotely.' },
      { title: 'Tree-Root Intrusion', desc: 'Mature street trees crushing older sewer lines.' },
      { title: 'Mixed-Material Pipes', desc: 'Tying new PEX into century-old cast iron stacks.' }
    ],
    testimonials: [
      { quote: 'Both sides of our duplex backed up at once. They jetted the main line, found a massive root ball, and cleared it completely in one hour.', author: 'Jordan K.', location: 'Eastside duplex', service: 'Emergency drain clearing', date: 'February 2026' },
      { quote: 'I\'m an out-of-state landlord. They called me, explained the burst pipe to me, and fixed it for my tenants immediately without any runaround.', author: 'Nina V.', location: 'Eastside fourplex', service: 'Burst pipe repair', date: 'January 2026' },
      { quote: 'The city trees destroyed our sewer line. They handled the hazmat cleanup in the basement and got the line temporarily flowing the same night.', author: 'Will C.', location: 'Eastside rowhouse', service: 'Sewer backup', date: 'December 2025' }
    ],
    nearby: ['downtown', 'oakwood', 'highland-park']
  },
  {
    id: 'westgate',
    title: 'Westgate',
    responseTime: '~35 min average',
    hero: {
      eyebrow: 'EMERGENCY DISPATCH · Westgate',
      h1: 'Fast emergency plumbing in Westgate.',
      sub: 'Average response time: 35 minutes.',
      trustChips: ['35-MIN AVG', 'RURAL-ADJACENT AWARE', '24/7']
    },
    context: [
      'As an outer suburban area, the longer drive distances put average response times around 35 minutes.',
      'Larger lots mean longer supply and sewer lines, with some properties sitting on the edge of municipal services, adjacent to well and septic systems.'
    ],
    commonIssues: [
      { title: 'Long-Run Freeze Risks', desc: 'Extended supply lines freezing during extreme cold snaps.' },
      { title: 'Septic-Adjacent Drainage', desc: 'Distinguishing between house line blockages and full tanks.' },
      { title: 'Well-Pump Interactions', desc: 'Pressure loss tracing back to failing well infrastructure.' },
      { title: 'High-Pressure Jetting', desc: 'Clearing exceptionally long main lines to the street.' }
    ],
    testimonials: [
      { quote: 'Our supply line froze and burst right where it entered the house. They were here in 35 minutes, shut it off, and thawed the rest safely.', author: 'Priya N.', location: 'Westgate farmhouse-style home', service: 'Burst pipe repair', date: 'December 2025' },
      { quote: 'Drain backed up and we weren\'t sure if it was our septic or the house line. They camera\'d it, found a clog near the house, and jetted it clear.', author: 'Sam T.', location: 'Westgate large lot', service: 'Drain clearing', date: 'February 2026' },
      { quote: 'Lost all water pressure on a Sunday night. They traced it to a failing pressure tank and got us flowing again so we could shower for work.', author: 'Jen & Mike L.', location: 'Westgate subdivision', service: 'No water pressure', date: 'March 2026' }
    ],
    nearby: ['riverside', 'highland-park', 'oakwood']
  }
];
