/**
 * Single source of truth for the Mangroliya Parivar website.
 *
 * Everything in this module is a plain, synchronous, module-scope value, so
 * every page that reads it can be prerendered on the server into a static
 * HTML shell (see "Predictable values" in the Next.js caching docs).
 */

export type Branch =
  | "Founder's Line"
  | "Rameshbhai's Branch"
  | "Mohanbhai's Branch"
  | "Dineshbhai's Branch";

export type Member = {
  slug: string;
  name: string;
  generation: 1 | 2 | 3 | 4;
  branch: Branch;
  city: string;
  profession: string;
  role: string;
  bio: string;
  /** Blood-line parent slug. Absent for founders and those married into the family. */
  parent?: string;
  /** Set when this member appears as the spouse chip on another member's tree node. */
  spouseOf?: string;
  /** Slug of the spouse, used to render the link chip on a node. */
  spouse?: string;
  /** Birth year, used for the age/generation context. */
  since?: number;
  email?: string;
  focus?: string;
};

export const site = {
  name: "Samast Mangroliya Parivar",
  nameGu: "સમસ્ત માંગરોલીયા પરિવાર",
  chapter: "Surat",
  legalName: "Samast Mangroliya Parivar Trust",
  tagline: "Ek Parivar · Ek Pehchaan",
  founded: 1991,
  familySince: 1931,
  homeVillage: "Mangrol",
  hq: "Surat, Gujarat",
  email: "parivar@mangroliya.family",
  phone: "+91 98250 41200",
  address: [
    "Samast Mangroliya Parivar Bhavan",
    "Varachha Road, Surat 395006, Gujarat",
  ],
  domain: "https://mangroliya-parivar.vercel.app",
} as const;

/**
 * The 13 modules of the site, in the order the family's portal lists them.
 * Gujarati is the label language; routes keep their English slugs.
 */
export const navLinks = [
  { label: "હોમ", href: "/" },
  { label: "અમારો પરિચય", href: "/about" },
  { label: "ગામની યાદી", href: "/village" },
  { label: "પાયાના શિલ્પીઓ", href: "/founders" },
  { label: "મુખ્ય સમિતિ", href: "/committee" },
  { label: "દાતા", href: "/donors" },
  { label: "પ્રાયોજક", href: "/sponsors" },
  { label: "ગેલેરી", href: "/gallery" },
  { label: "બિસનેશ", href: "/business" },
  { label: "નોકરી", href: "/jobs" },
  { label: "સમાચાર", href: "/news" },
  { label: "સંપર્ક", href: "/contact" },
] as const;

/** English counterpart for each module, used in page titles and footers. */
export const moduleNames: Record<string, string> = {
  "/": "Home",
  "/about": "Our Introduction",
  "/village": "Village Directory",
  "/founders": "The Founders",
  "/committee": "Main Committee",
  "/donors": "Donors",
  "/sponsors": "Sponsors",
  "/gallery": "Gallery",
  "/business": "Business Directory",
  "/jobs": "Jobs",
  "/news": "News",
  "/contact": "Contact",
};

/* -------------------------------------------------------------------------- */
/* Members                                                                    */
/* -------------------------------------------------------------------------- */

export const members: Member[] = [
  /* --------------------------------- Gen 1 -------------------------------- */
  {
    slug: "bhikhabhai-kalidas",
    name: "Shri Bhikhabhai Kalidas Mangroliya",
    generation: 1,
    branch: "Founder's Line",
    city: "Mangrol, Kutch",
    profession: "Farmer & village sarpanch",
    role: "Founder",
    bio: "Born in 1931 in the fields outside Mangrol, Bapaji ploughed a stubborn stretch of land into a homestead and a family. He walked to every wedding, every exam result and every crisis in the village — and he never once took a rickshaw.",
    spouse: "savitriben-bhikhabhai",
    since: 1931,
    focus: "Roots, land and the first family register",
  },
  {
    slug: "savitriben-bhikhabhai",
    name: "Shrimati Savitriben Bhikhabhai",
    generation: 1,
    branch: "Founder's Line",
    city: "Mangrol, Kutch",
    profession: "Homemaker & weaving",
    role: "Family matriarch",
    bio: "The warmth of every Mangroliya kitchen traces back to Ba. She kept the family register in a cloth-bound ledger, wrote letters for three generations, and insisted that nobody leave the house without eating.",
    spouseOf: "bhikhabhai-kalidas",
    spouse: "bhikhabhai-kalidas",
    since: 1934,
    focus: "Letters, recipes and the family ledger",
  },

  /* --------------------------------- Gen 2 -------------------------------- */
  {
    slug: "rameshbhai-bhikhabhai",
    name: "Shri Rameshbhai Bhikhabhai",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "Ahmedabad",
    profession: "Textile trader",
    role: "Eldest son",
    bio: "Rameshbhai moved the family to Ahmedabad in 1978 with one suitcase and a sample book. The Sarangpura trading house he started still opens at seven every morning.",
    parent: "bhikhabhai-kalidas",
    spouse: "shantaben-rameshbhai",
    since: 1956,
    email: "rameshbhai@mangroliya.family",
    focus: "Trade, discipline and the Sarangpura house",
  },
  {
    slug: "shantaben-rameshbhai",
    name: "Shrimati Shantaben Rameshbhai",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "Ahmedabad",
    profession: "Retired teacher",
    role: "Elder daughter-in-law",
    bio: "Taught Gujarati for thirty-one years at Sardar Vidyalaya and has corrected the grammar of every speech given at a family function since 1981.",
    spouseOf: "rameshbhai-bhikhabhai",
    spouse: "rameshbhai-bhikhabhai",
    since: 1959,
    focus: "Language, learning and the annual speech night",
  },
  {
    slug: "mohanbhai-bhikhabhai",
    name: "Shri Mohanbhai Bhikhabhai",
    generation: 2,
    branch: "Mohanbhai's Branch",
    city: "Rajkot",
    profession: "Mechanical engineer & manufacturer",
    role: "Middle son",
    bio: "Mohanbhai set up a small machine shop behind Rajkot's Gondal Road in 1985. Three of his former apprentices now run their own units.",
    parent: "bhikhabhai-kalidas",
    spouse: "hansaben-mohanbhai",
    since: 1959,
    email: "mohanbhai@mangroliya.family",
    focus: "Craft, machines and mentorship",
  },
  {
    slug: "hansaben-mohanbhai",
    name: "Shrimati Hansaben Mohanbhai",
    generation: 2,
    branch: "Mohanbhai's Branch",
    city: "Rajkot",
    profession: "Homemaker",
    role: "Daughter-in-law",
    bio: "Runs the family's Holi and Uttarayan celebrations with a colour-coded Excel sheet nobody is allowed to edit.",
    spouseOf: "mohanbhai-bhikhabhai",
    spouse: "mohanbhai-bhikhabhai",
    since: 1963,
    focus: "Festivals and the colour-coded calendar",
  },
  {
    slug: "dineshbhai-bhikhabhai",
    name: "Shri Dineshbhai Bhikhabhai",
    generation: 2,
    branch: "Dineshbhai's Branch",
    city: "Mumbai",
    profession: "Banker (retd.)",
    role: "Youngest son",
    bio: "Dineshbhai joined the bank in 1984 and never lost a customer file. He is the quiet architect of the family trust and its scholarship fund.",
    parent: "bhikhabhai-kalidas",
    spouse: "pravaben-dineshbhai",
    since: 1963,
    email: "dineshbhai@mangroliya.family",
    focus: "The trust, the fund and long-form letters",
  },
  {
    slug: "pravaben-dineshbhai",
    name: "Shrimati Pravaben Dineshbhai",
    generation: 2,
    branch: "Dineshbhai's Branch",
    city: "Mumbai",
    profession: "Nurse (retd.)",
    role: "Daughter-in-law",
    bio: "Spent four decades in the casualty ward of KEM Hospital. Still the first person the family calls when anyone, anywhere, is unwell.",
    spouseOf: "dineshbhai-bhikhabhai",
    spouse: "dineshbhai-bhikhabhai",
    since: 1966,
    focus: "Care, calm and midnight phone calls",
  },

  /* --------------------------------- Gen 3 -------------------------------- */
  {
    slug: "nilesh-rameshbhai",
    name: "CA Nilesh Rameshbhai",
    generation: 3,
    branch: "Rameshbhai's Branch",
    city: "Surat",
    profession: "Chartered accountant",
    role: "Eldest grandchild",
    bio: "First member of the third generation to clear the CA finals on the first attempt. Now audits the family trust accounts every Diwali, unpaid and uncomplaining.",
    parent: "rameshbhai-bhikhabhai",
    spouse: "kinal-nilesh",
    since: 1981,
    email: "nilesh@mangroliya.family",
    focus: "Numbers, audits and Diwali accounts",
  },
  {
    slug: "kinal-nilesh",
    name: "CA Kinal Nilesh",
    generation: 3,
    branch: "Rameshbhai's Branch",
    city: "Surat",
    profession: "Chartered accountant",
    role: "Daughter-in-law",
    bio: "Runs a two-woman practice in Surat and is the reason the family's photo archive finally has captions.",
    spouseOf: "nilesh-rameshbhai",
    spouse: "nilesh-rameshbhai",
    since: 1984,
    focus: "The photo archive and its captions",
  },
  {
    slug: "meenakshi-mehta",
    name: "Ar. Meenakshi Mehta",
    generation: 3,
    branch: "Rameshbhai's Branch",
    city: "Ahmedabad",
    profession: "Architect",
    role: "Eldest daughter",
    bio: "Designed the family's community hall in Mangrol — a courtyard house with a neem tree in the middle, exactly the way Bapaji described it in 1996.",
    parent: "rameshbhai-bhikhabhai",
    spouse: "hardik-mehta",
    since: 1984,
    email: "meenakshi@mangroliya.family",
    focus: "The Mangrol courtyard hall",
  },
  {
    slug: "hardik-mehta",
    name: "Hardik Mehta",
    generation: 3,
    branch: "Rameshbhai's Branch",
    city: "Ahmedabad",
    profession: "Photographer",
    role: "Son-in-law",
    bio: "Shoots every family wedding on film. Has never once been asked to stop.",
    spouseOf: "meenakshi-mehta",
    spouse: "meenakshi-mehta",
    since: 1982,
    focus: "Film, weddings and long exposure",
  },
  {
    slug: "jaydeep-rameshbhai",
    name: "Jaydeep Rameshbhai",
    generation: 3,
    branch: "Rameshbhai's Branch",
    city: "Vadodara",
    profession: "Software engineer",
    role: "Youngest son of Rameshbhai",
    bio: "Built the first family directory as a spreadsheet in 2009 and has been maintaining it, in some form, ever since.",
    parent: "rameshbhai-bhikhabhai",
    since: 1987,
    email: "jaydeep@mangroliya.family",
    focus: "The directory, the site and everything digital",
  },
  {
    slug: "kinjal-mohanbhai",
    name: "Dr. Kinjal Mohanbhai",
    generation: 3,
    branch: "Mohanbhai's Branch",
    city: "Rajkot",
    profession: "Physician, MBBS",
    role: "Eldest daughter of Mohanbhai",
    bio: "Runs a small clinic two lanes from the machine shop. Free consultation for anyone carrying the Mangroliya surname, and for their guests.",
    parent: "mohanbhai-bhikhabhai",
    spouse: "dhaval-makwana",
    since: 1983,
    email: "kinjal@mangroliya.family",
    focus: "The clinic and community health camps",
  },
  {
    slug: "dhaval-makwana",
    name: "Dr. Dhaval Makwana",
    generation: 3,
    branch: "Mohanbhai's Branch",
    city: "Rajkot",
    profession: "Orthodontist",
    role: "Son-in-law",
    bio: "Quiet, methodical and the only person who can make the children sit still for a photograph.",
    spouseOf: "kinjal-mohanbhai",
    spouse: "kinjal-mohanbhai",
    since: 1981,
    focus: "Everyone behaving in photographs",
  },
  {
    slug: "jignesh-mohanbhai",
    name: "Er. Jignesh Mohanbhai",
    generation: 3,
    branch: "Mohanbhai's Branch",
    city: "Pune",
    profession: "Civil engineer",
    role: "Youngest son of Mohanbhai",
    bio: "Builds bridges for the state highway department — and, in 2019, personally rebuilt the roof of the old Mangrol wada.",
    parent: "mohanbhai-bhikhabhai",
    since: 1986,
    email: "jignesh@mangroliya.family",
    focus: "Roads, roofs and structural honesty",
  },
  {
    slug: "bhavna-desai",
    name: "Bhavna Desai",
    generation: 3,
    branch: "Mohanbhai's Branch",
    city: "Bengaluru",
    profession: "Product designer",
    role: "Youngest daughter of Mohanbhai",
    bio: "Left Rajkot for Bengaluru in 2012 with two bags and a sketchbook. Draws the family tree every year — her versions have become the official ones.",
    parent: "mohanbhai-bhikhabhai",
    spouse: "amit-desai",
    since: 1990,
    email: "bhavna@mangroliya.family",
    focus: "The illustrated family tree",
  },
  {
    slug: "amit-desai",
    name: "Amit Desai",
    generation: 3,
    branch: "Mohanbhai's Branch",
    city: "Bengaluru",
    profession: "Chef",
    role: "Son-in-law",
    bio: "Cooked the hundred-dish anniversary dinner in 2021 and has refused to share the khoi recipe ever since.",
    spouseOf: "bhavna-desai",
    spouse: "bhavna-desai",
    since: 1988,
    focus: "The anniversary dinner",
  },
  {
    slug: "sanjay-dineshbhai",
    name: "Sanjay Dineshbhai",
    generation: 3,
    branch: "Dineshbhai's Branch",
    city: "Mumbai",
    profession: "Film editor",
    role: "Elder son of Dineshbhai",
    bio: "Edits feature films by night and the family's 40-hour video archive by day. Nothing is ever thrown away.",
    parent: "dineshbhai-bhikhabhai",
    spouse: "ruchi-sanjay",
    since: 1988,
    email: "sanjay@mangroliya.family",
    focus: "The video archive",
  },
  {
    slug: "ruchi-sanjay",
    name: "Ruchi Sanjay",
    generation: 3,
    branch: "Dineshbhai's Branch",
    city: "Mumbai",
    profession: "Documentary producer",
    role: "Daughter-in-law",
    bio: "Interviewed every surviving member of the second generation on tape in 2023. Those recordings are now the family's most valuable possession.",
    spouseOf: "sanjay-dineshbhai",
    spouse: "sanjay-dineshbhai",
    since: 1990,
    focus: "The 2023 oral history project",
  },
  {
    slug: "priya-dineshbhai",
    name: "Adv. Priya Dineshbhai",
    generation: 3,
    branch: "Dineshbhai's Branch",
    city: "Mumbai",
    profession: "Advocate",
    role: "Youngest daughter of Dineshbhai",
    bio: "Drafted the family trust deed in eleven pages and a single signature block. Still the shortest document the family has ever agreed on.",
    parent: "dineshbhai-bhikhabhai",
    since: 1991,
    email: "priya@mangroliya.family",
    focus: "The trust deed",
  },

  /* --------------------------------- Gen 4 -------------------------------- */
  {
    slug: "krish-nilesh",
    name: "Krish Nilesh",
    generation: 4,
    branch: "Rameshbhai's Branch",
    city: "Surat",
    profession: "Student, Class VII",
    role: "Great-grandchild",
    bio: "Keeper of the scoreboard at every family cricket match and undefeated champion of Antakshari.",
    parent: "nilesh-rameshbhai",
    since: 2012,
    focus: "Cricket and Antakshari",
  },
  {
    slug: "anaya-mehta",
    name: "Anaya Mehta",
    generation: 4,
    branch: "Rameshbhai's Branch",
    city: "Ahmedabad",
    profession: "Student, Class VI",
    role: "Great-grandchild",
    bio: "Has already photographed three family weddings and considers Hardik chacha her mentor.",
    parent: "meenakshi-mehta",
    since: 2013,
    focus: "Photography",
  },
  {
    slug: "rohan-jaydeep",
    name: "Rohan Jaydeep",
    generation: 4,
    branch: "Rameshbhai's Branch",
    city: "Vadodara",
    profession: "Student, Class VIII",
    role: "Great-grandchild",
    bio: "Rewrote the family tree as a flowchart in 2025. It is more accurate than the printed one.",
    parent: "jaydeep-rameshbhai",
    since: 2015,
    focus: "Flowcharts and football",
  },
  {
    slug: "anaya-kinjal",
    name: "Anaya Makwana",
    generation: 4,
    branch: "Mohanbhai's Branch",
    city: "Rajkot",
    profession: "Student, Class V",
    role: "Great-grandchild",
    bio: "Assists at the health camp every summer, handing out ORS packets with terrifying efficiency.",
    parent: "kinjal-mohanbhai",
    since: 2014,
    focus: "The summer health camp",
  },
  {
    slug: "vyom-jignesh",
    name: "Vyom Jignesh",
    generation: 4,
    branch: "Mohanbhai's Branch",
    city: "Pune",
    profession: "Student, Class IX",
    role: "Great-grandchild",
    bio: "Built a working model of the Mangrol courtyard hall from cardboard. Uncle Jignesh rated it 'structurally sound'.",
    parent: "jignesh-mohanbhai",
    since: 2017,
    focus: "Models and cricket",
  },
  {
    slug: "mira-bhavna",
    name: "Mira Desai",
    generation: 4,
    branch: "Mohanbhai's Branch",
    city: "Bengaluru",
    profession: "Student, Class III",
    role: "Great-grandchild",
    bio: "Draws a version of the family tree every Diwali where everyone is the same height. All are welcome.",
    parent: "bhavna-desai",
    since: 2019,
    focus: "Drawing everybody at the same height",
  },
  {
    slug: "advik-sanjay",
    name: "Advik Sanjay",
    generation: 4,
    branch: "Dineshbhai's Branch",
    city: "Mumbai",
    profession: "Student, Class VII",
    role: "Great-grandchild",
    bio: "Cuts together the family's annual highlights reel and insists on end credits for everyone.",
    parent: "sanjay-dineshbhai",
    since: 2016,
    focus: "The annual highlights reel",
  },
  {
    slug: "taara-priya",
    name: "Taara Dineshbhai",
    generation: 4,
    branch: "Dineshbhai's Branch",
    city: "Mumbai",
    profession: "Student, Class IV",
    role: "Great-grandchild",
    bio: "The youngest member of the family and the only one permitted to interrupt Kaku's speeches.",
    parent: "priya-dineshbhai",
    since: 2018,
    focus: "Interrupting speeches",
  },
];

/* -------------------------------------------------------------------------- */
/* Derived helpers                                                            */
/* -------------------------------------------------------------------------- */

export function getMember(slug: string): Member | undefined {
  return members.find((m) => m.slug === slug);
}

export function childrenOf(slug: string): Member[] {
  return members.filter((m) => m.parent === slug);
}

export function siblingsOf(member: Member): Member[] {
  if (!member.parent) return [];
  return members.filter(
    (m) => m.parent === member.parent && m.slug !== member.slug,
  );
}

export function spouseOf(member: Member): Member | undefined {
  if (member.spouse) return getMember(member.spouse);
  if (member.spouseOf) return getMember(member.spouseOf);
  return undefined;
}

/** Members that anchor a tree node (blood line + founders). */
export function treeRoots(): Member[] {
  return members.filter((m) => !m.parent && !m.spouseOf);
}

export const generations = [1, 2, 3, 4] as const;

export const branches: Branch[] = [
  "Rameshbhai's Branch",
  "Mohanbhai's Branch",
  "Dineshbhai's Branch",
];

export const cities = Array.from(
  new Set(members.map((m) => m.city)),
).sort((a, b) => a.localeCompare(b));

export function searchMembers(query: {
  q?: string;
  branch?: string;
  generation?: string;
}): Member[] {
  const q = (query.q ?? "").trim().toLowerCase();
  return members.filter((m) => {
    if (query.branch && query.branch !== "all" && m.branch !== query.branch)
      return false;
    if (
      query.generation &&
      query.generation !== "all" &&
      String(m.generation) !== query.generation
    )
      return false;
    if (!q) return true;
    return [m.name, m.city, m.profession, m.branch, m.role, m.bio]
      .join(" ")
      .toLowerCase()
      .includes(q);
  });
}

export const stats = [
  { value: String(members.length), label: "Members on record" },
  { value: "4", label: "Living generations" },
  { value: String(cities.length), label: "Cities we call home" },
  { value: "35", label: "Years of the Samast Parivar" },
];

export const values = [
  {
    icon: "heart" as const,
    title: "Sanskar",
    text: "Respect for elders, patience with the young, and a chair kept free at the table for anyone who arrives unannounced.",
  },
  {
    icon: "users" as const,
    title: "Ekta",
    text: "Nine branches, one name. We settle our differences in person, at the dining table, before they ever reach a phone.",
  },
  {
    icon: "book" as const,
    title: "Shiksha",
    text: "The trust funds the school fees of any child of the parivar who clears their boards — no questions, no paperwork theatre.",
  },
  {
    icon: "leaf" as const,
    title: "Seva",
    text: "Twice a year the family runs a free health camp in Mangrol, in the fields where three generations learned to walk.",
  },
];

/* -------------------------------------------------------------------------- */
/* Timeline                                                                   */
/* -------------------------------------------------------------------------- */

export const timeline = [
  {
    year: "1931",
    title: "Bapaji is born in Mangrol",
    text: "The first entry in what will become the cloth-bound family ledger, kept by Savitriben Ba.",
  },
  {
    year: "1978",
    title: "The move to Ahmedabad",
    text: "Rameshbhai arrives with one suitcase and a textile sample book. Two more brothers follow within a decade.",
  },
  {
    year: "1985",
    title: "The Rajkot workshop opens",
    text: "Mohanbhai starts a machine shop behind Gondal Road with two lathes and one apprentice.",
  },
  {
    year: "1991",
    title: "Samast Mangroliya Parivar is founded",
    text: "The whole family comes together in Surat and the samast (all-branches) parivar is formally constituted, with the emblem the family still uses today.",
  },
  {
    year: "2004",
    title: "The Mangroliya Parivar Trust is formed",
    text: "Dineshbhai drafts the deed in eleven pages. The scholarship fund begins with four students.",
  },
  {
    year: "2016",
    title: "The first family directory goes online",
    text: "Jaydeep turns a 900-row spreadsheet into a searchable directory for the whole parivar.",
  },
  {
    year: "2021",
    title: "Ninety years, one courtyard",
    text: "The Mangrol community hall opens. Ninety-two members gather under the neem tree Bapaji drew.",
  },
  {
    year: "2026",
    title: "Four generations, one website",
    text: "Directory, notices, events and gallery — everything the family knows, in one place.",
  },
];

/* -------------------------------------------------------------------------- */
/* Events                                                                     */
/* -------------------------------------------------------------------------- */

export type FamilyEvent = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
  venue: string;
  city: string;
  category: "Festival" | "Meeting" | "Education" | "Get-together" | "Ceremony";
  description: string;
  host: string;
  past?: boolean;
};

export const events: FamilyEvent[] = [
  {
    slug: "diwali-milan-2026",
    title: "Diwali Milan & Lakshmi Pujan",
    date: "2026-10-24",
    time: "6:30 PM onwards",
    venue: "Parivar Bhavan Lawn, Varachha Road",
    city: "Surat",
    category: "Festival",
    description:
      "The entire parivar gathers for pujan, khichu and the annual lights competition. Bring a diya you have decorated yourself — the jury is merciless.",
    host: "Rameshbhai & Shantaben",
  },
  {
    slug: "annual-general-meeting-2026",
    title: "Annual General Meeting & Trust Accounts",
    date: "2026-11-15",
    time: "11:00 AM – 1:00 PM",
    venue: "Trust Hall, Parivar Bhavan",
    city: "Surat",
    category: "Meeting",
    description:
      "Accounts presented by Nilesh, scholarship approvals for the coming year, and the election of two new trustees. Lunch follows, as always.",
    host: "Mohanbhai & Hansaben",
  },
  {
    slug: "scholarship-awards-2026",
    title: "Scholarship & Merit Awards Ceremony",
    date: "2026-12-20",
    time: "4:00 PM",
    venue: "Karamchand Hall, Parivar Bhavan",
    city: "Surat",
    category: "Education",
    description:
      "Eleven students of the fourth generation are awarded this year. Each recipient reads one letter written by Bapaji from the family ledger.",
    host: "Dineshbhai & Pravaben",
  },
  {
    slug: "uttarayan-2027",
    title: "Uttarayan at the Village Roof",
    date: "2027-01-14",
    time: "8:00 AM – 6:00 PM",
    venue: "Old Wada Rooftop",
    city: "Mangrol, Kutch",
    category: "Festival",
    description:
      "Chai at eight, manjha by nine, and the annual kite competition between the three branches. The trophy travels; the arguments do not.",
    host: "The whole parivar",
  },
  {
    slug: "family-picnic-2027",
    title: "Annual Family Picnic",
    date: "2027-02-07",
    time: "9:30 AM onwards",
    venue: "Saputara Lake Lawns",
    city: "Saputara",
    category: "Get-together",
    description:
      "Boats, corn on the cob, a cricket match with improvised rules and a strictly enforced two-hour nap window for the elders.",
    host: "Jaydeep & Bhavna",
  },
  {
    slug: "holi-milan-2027",
    title: "Holi Milan & Grandparents' Day",
    date: "2027-03-03",
    time: "10:00 AM",
    venue: "Parivar Bhavan Lawn, Varachha Road",
    city: "Surat",
    category: "Get-together",
    description:
      "Colour at ten, lunch at one, and the children's performance for the elders of the second generation at three.",
    host: "Kinjal & Dhaval",
  },
];

export const pastEvents: FamilyEvent[] = [
  {
    slug: "navratri-2026",
    title: "Nine Nights of Garba",
    date: "2026-09-25",
    time: "8:00 PM",
    venue: "Varachha Ground",
    city: "Surat",
    category: "Festival",
    description:
      "Four hundred members and guests across nine nights. The last garba ended at 2:40 AM.",
    host: "Rameshbhai's Branch",
    past: true,
  },
  {
    slug: "oral-history-2023",
    title: "The Oral History Recordings",
    date: "2023-11-12",
    time: "All day",
    venue: "Sarangpura House",
    city: "Ahmedabad",
    category: "Ceremony",
    description:
      "Ruchi interviewed every surviving member of the second generation on tape over one weekend.",
    host: "Ruchi Sanjay",
    past: true,
  },
  {
    slug: "hall-opening-2021",
    title: "Mangrol Courtyard Hall Opening",
    date: "2021-12-11",
    time: "10:00 AM",
    venue: "Mangrol Courtyard Hall",
    city: "Mangrol, Kutch",
    category: "Ceremony",
    description:
      "Ninety-two members gathered under the neem tree Bapaji had drawn twenty-five years earlier.",
    host: "Meenakshi Mehta",
    past: true,
  },
];

/* -------------------------------------------------------------------------- */
/* Notices                                                                    */
/* -------------------------------------------------------------------------- */

export type Notice = {
  slug: string;
  title: string;
  date: string;
  tag: "Trust" | "Family" | "Education" | "Heritage" | "In Memoriam";
  author: string;
  excerpt: string;
  body: string[];
};

export const notices: Notice[] = [
  {
    slug: "diwali-milan-2026-notice",
    title: "Diwali Milan 2026 — venue, timings and the lights competition",
    date: "2026-10-02",
    tag: "Family",
    author: "Jaydeep Rameshbhai",
    excerpt:
      "This year the Milan moves to the lawn at Shanti Cottage. Teams, timings and the (revised) rules of the lights competition.",
    body: [
      "The Diwali Milan will be held on Saturday, 24 October 2026 at the lawn of Shanti Cottage, Alpha Road, Ahmedabad. Pujan begins at 6:30 PM and dinner is served at 8:15 PM.",
      "The lights competition is back with two changes. First, each branch decorates one entrance rather than the whole house — the judge walks, so keep the path clear. Second, the children's category is now open to the fourth generation only, and the third generation may not 'helpfully suggest'.",
      "Please confirm attendance by 18 October so that catering can be finalised. Members travelling from Rajkot and Mumbai should contact Hansabenben for the shared-vehicle list.",
      "As always, an empty chair is kept at the table for anyone who arrives unannounced.",
    ],
  },
  {
    slug: "scholarship-fund-2026-27",
    title: "Scholarship fund opens for 2026–27: eleven awards this year",
    date: "2026-09-18",
    tag: "Education",
    author: "Adv. Priya Dineshbhai",
    excerpt:
      "Trust scholarships are open to every child of the parivar from Class VI to post-graduation. Applications close on 31 October.",
    body: [
      "The Mangroliya Parivar Trust will award eleven scholarships for the academic year 2026–27, up from eight last year. The fund covers tuition, books and one uniform for students from Class VI through post-graduation.",
      "Eligibility is simple: any child or grandchild of a registered member of the parivar, enrolled in a recognised school or college. Academic performance is considered but not decisive — need and continuity matter more.",
      "Application forms are available from Dineshbhai or any branch trustee, and must be submitted by 31 October 2026. No agent, consultant or middleman is required, and none is recognised by the trust.",
      "Scholarship recipients are announced at the ceremony in Mumbai on 20 December.",
    ],
  },
  {
    slug: "family-directory-update-2026",
    title: "Directory update: add your family before the January edition",
    date: "2026-08-30",
    tag: "Family",
    author: "Bhavna Desai",
    excerpt:
      "The printed directory goes to press in January. Check your entry, your city and your phone number today.",
    body: [
      "Every member now has a page in this directory. Please check yours: your name spelling, your city, your profession and — most importantly — your phone number.",
      "New births, marriages and new members should be reported to your branch trustee before 31 December so they can appear in the January print edition.",
      "If your page has an old photograph or an out-of-date detail, send the correction to parivar@mangroliya.family. Corrections are published within a week.",
    ],
  },
  {
    slug: "oral-history-archive",
    title: "The 2023 oral history recordings are now available to every member",
    date: "2026-07-14",
    tag: "Heritage",
    author: "Ruchi Sanjay",
    excerpt:
      "Sixteen hours of interviews with the second generation, digitised, indexed and now open to the family.",
    body: [
      "Between November 2023 and February 2024, Ruchi recorded sixteen hours of conversation with every surviving member of the second generation. The recordings cover the move from Mangrol, the founding of the trust, and a great deal that nobody had written down.",
      "The archive has been digitised, indexed by topic and copied to two drives: one with Sanjay in Mumbai and one in the trust strongbox in Rajkot.",
      "Members may request access by writing to the trust. Transcripts in Gujarati are available for the first eight hours; the rest are being translated by Shantaben and Kinjal.",
    ],
  },
  {
    slug: "trustees-nominated-2026",
    title: "Two new trustees nominated to the Mangroliya Parivar Trust",
    date: "2026-06-05",
    tag: "Trust",
    author: "Shri Dineshbhai Bhikhabhai",
    excerpt:
      "Nilesh Rameshbhai and Bhavna Desai are nominated as trustees, taking the board to seven members.",
    body: [
      "At the meeting on 5 June 2026, the board nominated CA Nilesh Rameshbhai and Bhavna Desai as trustees of the Mangroliya Parivar Trust, effective 1 July.",
      "Nilesh will chair the accounts and audit committee; Bhavna will lead the heritage and archive work, including the illustrated family tree that has been the official record since 2019.",
      "The board now stands at seven members, with representation from each of the three branches and both Mumbai and Ahmedabad.",
    ],
  },
  {
    slug: "in-memoriam-dadiji",
    title: "In memoriam: a year since Dadiji's passing",
    date: "2026-03-22",
    tag: "In Memoriam",
    author: "The Mangroliya Parivar",
    excerpt:
      "A note of remembrance, and the decision to seat the elders first at every family gathering, as she insisted.",
    body: [
      "It has been a year since Dadiji left us. She was the person who wrote every birthday card in the family for four decades, in a hand nobody could confuse with anyone else's.",
      "The family has decided that at every gathering, the elders are seated first — a rule she enforced by standing until they were. It is the smallest possible tribute and the one she would have most approved of.",
      "Her ledger, now ninety-two years old, is kept in the trust strongbox in Rajkot. It is photographed page by page every Diwali.",
    ],
  },
];

export function getNotice(slug: string): Notice | undefined {
  return notices.find((n) => n.slug === slug);
}

/* -------------------------------------------------------------------------- */
/* Gallery                                                                    */
/* -------------------------------------------------------------------------- */

export type Photo = {
  slug: string;
  title: string;
  category: "Festivals" | "Gatherings" | "Weddings" | "Vanglat" | "Village";
  year: number;
  seed: string;
  credit: string;
  /** Extra height for a masonry-style grid. */
  tall?: boolean;
};

export const gallery: Photo[] = [
  {
    slug: "diwali-milan-2019",
    title: "Diwali Milan, Alpha Road",
    category: "Festivals",
    year: 2019,
    seed: "mangroliya-diwali",
    credit: "Hardik Mehta",
    tall: true,
  },
  {
    slug: "three-branches-one-table",
    title: "Three branches, one table",
    category: "Gatherings",
    year: 2024,
    seed: "mangroliya-table",
    credit: "Ruchi Sanjay",
  },
  {
    slug: "mangrol-courtyard",
    title: "The courtyard at Mangrol",
    category: "Village",
    year: 2021,
    seed: "mangroliya-courtyard",
    credit: "Meenakshi Mehta",
    tall: true,
  },
  {
    slug: "meenakshi-wedding",
    title: "Baraat at first light",
    category: "Weddings",
    year: 2011,
    seed: "mangroliya-baraat",
    credit: "Hardik Mehta",
  },
  {
    slug: "kite-festival",
    title: "Uttarayan, Old Wada roof",
    category: "Festivals",
    year: 2025,
    seed: "mangroliya-kites",
    credit: "Jaydeep Rameshbhai",
  },
  {
    slug: "cricket-match",
    title: "The branch cricket final",
    category: "Gatherings",
    year: 2023,
    seed: "mangroliya-cricket",
    credit: "Sanjay Dineshbhai",
  },
  {
    slug: "ledger-pages",
    title: "Ba's ledger, photographed page by page",
    category: "Vanglat",
    year: 2026,
    seed: "mangroliya-ledger",
    credit: "Bhavna Desai",
    tall: true,
  },
  {
    slug: "second-generation",
    title: "The second generation, together",
    category: "Gatherings",
    year: 2023,
    seed: "mangroliya-elders",
    credit: "Ruchi Sanjay",
  },
  {
    slug: "scholarship-ceremony",
    title: "Scholarship evening, Mumbai",
    category: "Vanglat",
    year: 2025,
    seed: "mangroliya-scholarship",
    credit: "Priya Dineshbhai",
  },
  {
    slug: "village-fields",
    title: "The fields Bapaji ploughed",
    category: "Village",
    year: 2022,
    seed: "mangroliya-fields",
    credit: "Jignesh Mohanbhai",
  },
  {
    slug: "wedding-portraits",
    title: "Portraits before the pujan",
    category: "Weddings",
    year: 2018,
    seed: "mangroliya-portraits",
    credit: "Hardik Mehta",
  },
  {
    slug: "holi-colours",
    title: "Holi, Gondal Road",
    category: "Festivals",
    year: 2024,
    seed: "mangroliya-holi",
    credit: "Kinjal Makwana",
  },
];

export const photoCategories = [
  "Festivals",
  "Gatherings",
  "Weddings",
  "Vanglat",
  "Village",
] as const;

/* -------------------------------------------------------------------------- */
/* Formatting                                                                 */
/* -------------------------------------------------------------------------- */

/** Deterministic date formatting (constructs the date in local time). */
export function parseLocalDate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

export function formatDate(iso: string, style: "full" | "short" = "short") {
  const date = parseLocalDate(iso);
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: style === "full" ? "long" : "short",
    year: "numeric",
  }).format(date);
}

export function dateParts(iso: string) {
  const date = parseLocalDate(iso);
  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: new Intl.DateTimeFormat("en-IN", { month: "short" }).format(date),
    weekday: new Intl.DateTimeFormat("en-IN", { weekday: "long" }).format(date),
    year: String(date.getFullYear()),
  };
}

export function initials(name: string): string {
  const clean = name.replace(/^(Shri|Shrimati|CA |Dr\.|Er\.|Ar\.|Adv\.)\s*/g, "");
  const parts = clean.split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

/** Deterministic gradient index so avatars look varied but never change. */
export function tintIndex(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 1000;
  }
  return hash % 6;
}

/**
 * Deterministic portrait photograph for a member (demo placeholder set).
 * The same slug always resolves to the same face, so pages never shuffle.
 */
export function portraitUrl(slug: string, size = 560): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) % 1000;
  }
  const index = (hash % 60) + 1;
  return `https://i.pravatar.cc/${size}?img=${index}`;
}

/* ========================================================================== */
/* Module: ગામની યાદી — Village directory                                    */
/* ========================================================================== */

export type Village = {
  slug: string;
  name: string;
  nameGu: string;
  district: string;
  /** Families tracing back to this place. */
  families: number;
  /** Households currently on the register. */
  households: number;
  /** Year the first Mangroliya household settled here. */
  since: number;
  /** Member slug of the village contact person. */
  contact: string;
  seed: string;
  note: string;
  members: string[];
};

export const villages: Village[] = [
  {
    slug: "mangrol",
    name: "Mangrol",
    nameGu: "માંગરોલ",
    district: "Kutch",
    families: 18,
    households: 42,
    since: 1931,
    contact: "rameshbhai-bhikhabhai",
    seed: "village-mangrol-courtyard",
    note: "The origin village. Bapaji's field, the neem tree, the old wada and the courtyard hall all sit on the same lane.",
    members: [
      "bhikhabhai-kalidas",
      "savitriben-bhikhabhai",
      "rameshbhai-bhikhabhai",
      "shantaben-rameshbhai",
    ],
  },
  {
    slug: "rapar",
    name: "Rapar",
    nameGu: "રાપર",
    district: "Kutch",
    families: 9,
    households: 24,
    since: 1968,
    contact: "mohanbhai-bhikhabhai",
    seed: "village-rapar-wells",
    note: "Where the second generation went to school. The family still keeps a standing room at the old dharamshala for anyone passing through.",
    members: [
      "mohanbhai-bhikhabhai",
      "hansaben-mohanbhai",
      "kinjal-mohanbhai",
    ],
  },
  {
    slug: "anjar",
    name: "Anjar",
    nameGu: "અંજાર",
    district: "Kutch",
    families: 7,
    households: 19,
    since: 1974,
    contact: "dineshbhai-bhikhabhai",
    seed: "village-anjar-market",
    note: "The branch that traded cloth here every Thursday still closes the shop early on the third Thursday of Chaitra.",
    members: [
      "dineshbhai-bhikhabhai",
      "pravaben-dineshbhai",
      "sanjay-dineshbhai",
    ],
  },
  {
    slug: "adipur",
    name: "Adipur",
    nameGu: "આદિપુર",
    district: "Kutch",
    families: 11,
    households: 27,
    since: 1980,
    contact: "nilesh-rameshbhai",
    seed: "village-adipur-road",
    note: "Half the Surat chapter's families first stopped here before moving south. The trustee meetings rotate between the two.",
    members: ["nilesh-rameshbhai", "kinal-nilesh", "krish-nilesh"],
  },
  {
    slug: "bhuj",
    name: "Bhuj",
    nameGu: "ભુજ",
    district: "Kutch",
    families: 6,
    households: 15,
    since: 1991,
    contact: "jaydeep-rameshbhai",
    seed: "village-bhuj-fort",
    note: "The youngest family unit — started the year the samast parivar was constituted, and the first to keep its records on a laptop.",
    members: ["jaydeep-rameshbhai", "rohan-jaydeep"],
  },
  {
    slug: "surat",
    name: "Surat",
    nameGu: "સુરત",
    district: "South Gujarat",
    families: 15,
    households: 38,
    since: 1991,
    contact: "priya-dineshbhai",
    seed: "village-surat-bhavan",
    note: "Headquarters of the samast parivar since 1991 — Parivar Bhavan on Varachha Road is where every samiti meeting is held.",
    members: [
      "priya-dineshbhai",
      "bhavna-desai",
      "ruchi-sanjay",
      "amit-desai",
    ],
  },
];

export function membersOfVillage(slug: string): Member[] {
  const village = villages.find((v) => v.slug === slug);
  if (!village) return [];
  return village.members
    .map((memberSlug) => getMember(memberSlug))
    .filter((member): member is Member => Boolean(member));
}

/* ========================================================================== */
/* Module: પાયાના શિલ્પીઓ — The founders                                   */
/* ========================================================================== */

export type Founder = {
  slug: string;
  title: string;
  titleGu: string;
  year: number;
  contribution: string;
};

export const founders: Founder[] = [
  {
    slug: "bhikhabhai-kalidas",
    title: "The first stone",
    titleGu: "પહેલો પથ્થર",
    year: 1931,
    contribution:
      "Turned a stubborn field outside Mangrol into a homestead, a family and the first entry of the register. Walked to every wedding in the village and never once took a rickshaw.",
  },
  {
    slug: "savitriben-bhikhabhai",
    title: "The keeper of the ledger",
    titleGu: "લેખાવહીના રક્ષક",
    year: 1934,
    contribution:
      "Wrote every birth, marriage and address into a cloth-bound ledger in three volumes. Without her there would be nothing to build this site from.",
  },
  {
    slug: "rameshbhai-bhikhabhai",
    title: "The move south",
    titleGu: "દક્ષિણની યાત્રા",
    year: 1978,
    contribution:
      "Arrived in Ahmedabad with one suitcase and a textile sample book, then opened the Sarangpura trading house that still opens at seven every morning.",
  },
  {
    slug: "shantaben-rameshbhai",
    title: "The teacher",
    titleGu: "શિક્ષિકા",
    year: 1981,
    contribution:
      "Thirty-one years of teaching Gujarati, and the reason every family function since 1981 has had a speech that scans properly.",
  },
  {
    slug: "mohanbhai-bhikhabhai",
    title: "The workshop",
    titleGu: "કારખાનું",
    year: 1985,
    contribution:
      "Started a two-lathe machine shop behind Gondal Road in Rajkot. Three of his apprentices now run units of their own.",
  },
  {
    slug: "hansaben-mohanbhai",
    title: "The calendar",
    titleGu: "તહેવારોનું વર્ષ",
    year: 1987,
    contribution:
      "Built the colour-coded festival calendar that decides who cooks, who parks and who photographs — nobody has ever successfully edited it.",
  },
  {
    slug: "dineshbhai-bhikhabhai",
    title: "The trust",
    titleGu: "ટ્રસ્ટ",
    year: 2004,
    contribution:
      "Drafted the trust deed in eleven pages and seeded the scholarship fund with four students. It has funded ninety-one since.",
  },
  {
    slug: "pravaben-dineshbhai",
    title: "The health camp",
    titleGu: "આરોગ્ય શિબિર",
    year: 2007,
    contribution:
      "Four decades in the casualty ward of KEM, and the standing rule that the family runs a free health camp in Mangrol twice a year.",
  },
];

/* ========================================================================== */
/* Module: મુખ્ય સમિતિ — Main committee                                     */
/* ========================================================================== */

export type CommitteeCategory =
  | "Karobari Samiti"
  | "Yuva Samiti"
  | "Mahila Samiti"
  | "Vividh Samiti"
  | "Salahkar Samiti";

export type CommitteePost = {
  post: string;
  postGu: string;
  category: CommitteeCategory;
  slug: string;
  /** Direct line — the fastest way to reach anyone on the samiti. */
  phone: string;
  duty: string;
  elected: boolean;
};

export const committeeTerm = "2025 – 2028";

export const committee: CommitteePost[] = [
  {
    post: "President",
    postGu: "પ્રમુખ",
    category: "Karobari Samiti",
    slug: "rameshbhai-bhikhabhai",
    phone: "98250 41201",
    duty: "Chairs every samiti meeting and casts the final word when the family cannot agree — which is not often.",
    elected: true,
  },
  {
    post: "Vice President",
    postGu: "ઉપપ્રમુખ",
    category: "Karobari Samiti",
    slug: "dineshbhai-bhikhabhai",
    phone: "98250 41202",
    duty: "Runs the trust in the president's absence and signs off on every scholarship disbursement.",
    elected: true,
  },
  {
    post: "Secretary",
    postGu: "સચિવ",
    category: "Karobari Samiti",
    slug: "nilesh-rameshbhai",
    phone: "98250 41203",
    duty: "Minutes, correspondence, the register of births and marriages, and the annual report read out each Diwali.",
    elected: true,
  },
  {
    post: "Treasurer",
    postGu: "ખજાંચી",
    category: "Karobari Samiti",
    slug: "kinal-nilesh",
    phone: "98250 41204",
    duty: "Keeps the books, publishes the accounts before Uttarayan and hands them to the auditors in Surat.",
    elected: true,
  },
  {
    post: "Joint Secretary",
    postGu: "સંયુક્ત સચિવ",
    category: "Karobari Samiti",
    slug: "jaydeep-rameshbhai",
    phone: "98250 41205",
    duty: "Maintains the directory, this website and every spreadsheet the family has ever pretended not to need.",
    elected: true,
  },
  {
    post: "Cultural Secretary",
    postGu: "સાંસ્કૃતિક સચિવ",
    category: "Vividh Samiti",
    slug: "priya-dineshbhai",
    phone: "98250 41206",
    duty: "Programme for Diwali Milan, Holi Milan and the children's performance for the elders of the second generation.",
    elected: true,
  },
  {
    post: "Health & Seva Secretary",
    postGu: "આરોગ્ય સચિવ",
    category: "Vividh Samiti",
    slug: "kinjal-mohanbhai",
    phone: "98250 41207",
    duty: "Organises the twice-yearly health camp in Mangrol and the blood donation drive at Diwali.",
    elected: true,
  },
  {
    post: "Youth Secretary",
    postGu: "યુવા સચિવ",
    category: "Yuva Samiti",
    slug: "dhaval-makwana",
    phone: "98250 41208",
    duty: "The link to the fourth generation: cricket, Antakshari and the annual study grant interviews.",
    elected: true,
  },
  {
    post: "Women's Wing Secretary",
    postGu: "મહિલા પાંખની સચિવ",
    category: "Mahila Samiti",
    slug: "bhavna-desai",
    phone: "98250 41209",
    duty: "Sangeet, the wedding collective and the illustrated family tree redrawn every Diwali.",
    elected: true,
  },
  {
    post: "Archives & Media",
    postGu: "સંગ્રહ અને મીડિયા",
    category: "Salahkar Samiti",
    slug: "sanjay-dineshbhai",
    phone: "98250 41210",
    duty: "Custodian of the 40-hour video archive, the photograph collection and the 2023 oral history tapes.",
    elected: false,
  },
];

/* ========================================================================== */
/* Module: દાતા — Donors                                                      */
/* ========================================================================== */

export type DonorTier = "Diamond" | "Gold" | "Silver";

export type Donor = {
  name: string;
  slug?: string;
  tier: DonorTier;
  amount: string;
  cause: string;
  year: number;
  note: string;
};

export const donorTiers: { tier: DonorTier; labelGu: string; range: string }[] =
  [
    { tier: "Diamond", labelGu: "હીરક", range: "₹5,00,000 and above" },
    { tier: "Gold", labelGu: "સોનું", range: "₹1,00,000 – ₹4,99,999" },
    { tier: "Silver", labelGu: "ચાંદી", range: "₹25,000 – ₹99,999" },
  ];

export const donors: Donor[] = [
  {
    name: "Shri Rameshbhai Bhikhabhai",
    slug: "rameshbhai-bhikhabhai",
    tier: "Diamond",
    amount: "₹11,00,000",
    cause: "Courtyard hall, Mangrol",
    year: 2021,
    note: "Funded the neem-tree courtyard exactly as Bapaji drew it on the back of a ration card.",
  },
  {
    name: "Shri Dineshbhai Bhikhabhai",
    slug: "dineshbhai-bhikhabhai",
    tier: "Diamond",
    amount: "₹7,50,000",
    cause: "Scholarship endowment",
    year: 2019,
    note: "The seed that turned four scholarships into a fund that has never closed an application.",
  },
  {
    name: "Shri Mohanbhai Bhikhabhai",
    slug: "mohanbhai-bhikhabhai",
    tier: "Diamond",
    amount: "₹5,50,000",
    cause: "Well and water line, Rapar",
    year: 2017,
    note: "Rebuilt the village well that had run dry for two seasons and paid for the pipeline himself.",
  },
  {
    name: "CA Nilesh Rameshbhai",
    slug: "nilesh-rameshbhai",
    tier: "Gold",
    amount: "₹3,50,000",
    cause: "Parivar Bhavan, Surat",
    year: 2023,
    note: "Annual donation to the bhavan maintenance fund, audited by the same hands that audit the trust.",
  },
  {
    name: "Ar. Meenakshi Mehta",
    slug: "meenakshi-mehta",
    tier: "Gold",
    amount: "₹2,25,000",
    cause: "Design of the courtyard hall",
    year: 2021,
    note: "Her fee, given back to the family as the commission for the Mangrol hall.",
  },
  {
    name: "Dr. Kinjal Mohanbhai",
    slug: "kinjal-mohanbhai",
    tier: "Gold",
    amount: "₹1,50,000",
    cause: "Health camp equipment",
    year: 2024,
    note: "Bought the camp's ECG machine and the portable fridge for the vaccines.",
  },
  {
    name: "The Sanjay & Ruchi household",
    slug: "sanjay-dineshbhai",
    tier: "Gold",
    amount: "₹1,25,000",
    cause: "Oral history project",
    year: 2023,
    note: "Funded the tape transfers, the transcription and forty hours of digital storage.",
  },
  {
    name: "Adv. Priya Dineshbhai",
    slug: "priya-dineshbhai",
    tier: "Silver",
    amount: "₹75,000",
    cause: "Legal aid for the trust",
    year: 2025,
    note: "Covers the trust's compliance costs for the year, pro bono and in full.",
  },
  {
    name: "Jaydeep Rameshbhai",
    slug: "jaydeep-rameshbhai",
    tier: "Silver",
    amount: "₹51,000",
    cause: "Directory digitisation",
    year: 2016,
    note: "Turned a 900-row spreadsheet into the directory this website now reads from.",
  },
  {
    name: "Bhavna Desai",
    slug: "bhavna-desai",
    tier: "Silver",
    amount: "₹25,000",
    cause: "Illustrated family tree prints",
    year: 2025,
    note: "Prints and posts the illustrated tree to every household each Diwali.",
  },
];

/* ========================================================================== */
/* Module: પ્રાયોજક — Sponsors                                               */
/* ========================================================================== */

export type Sponsor = {
  name: string;
  category: string;
  city: string;
  since: number;
  level: "Title" | "Gold" | "Supporter";
  note: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "Shree Sarangpura Textiles",
    category: "Textiles & Trading",
    city: "Ahmedabad",
    since: 2009,
    level: "Title",
    note: "Title sponsor of the Diwali Milan for eleven consecutive years, and the cloth for every family sash.",
  },
  {
    name: "Makwana Machine Works",
    category: "Manufacturing",
    city: "Rajkot",
    since: 2012,
    level: "Title",
    note: "Underwrites the Holi Milan and lends the sound system to anyone in the parivar who asks first.",
  },
  {
    name: "Desai Hospitality Group",
    category: "Hotels & Catering",
    city: "Mumbai",
    since: 2015,
    level: "Gold",
    note: "Catering at cost for family weddings, scholarship ceremonies and the AGM lunch.",
  },
  {
    name: "Nilesh Kinal & Associates",
    category: "Audit & Finance",
    city: "Surat",
    since: 2016,
    level: "Gold",
    note: "Audits the trust accounts every Diwali and publishes the statement before the festival.",
  },
  {
    name: "Kutch Buildcon LLP",
    category: "Infrastructure",
    city: "Bhuj",
    since: 2018,
    level: "Gold",
    note: "Materials and labour for the Mangrol courtyard hall at wholesale rates.",
  },
  {
    name: "Mehta Design Studio",
    category: "Architecture & Design",
    city: "Ahmedabad",
    since: 2020,
    level: "Supporter",
    note: "Prints, banners and the annual invitation card — designed, revised and re-revised for free.",
  },
  {
    name: "Vanglat Pharma Distributors",
    category: "Pharmaceuticals",
    city: "Surat",
    since: 2022,
    level: "Supporter",
    note: "Supplies the twice-yearly health camp in Mangrol at distributor price.",
  },
  {
    name: "Ruchi Documentary Works",
    category: "Film & Media",
    city: "Mumbai",
    since: 2023,
    level: "Supporter",
    note: "Covers every family gathering on camera and hands over the rushes the same week.",
  },
];

/* ========================================================================== */
/* Module: બિસનેશ — Family businesses                                         */
/* ========================================================================== */

export type Business = {
  name: string;
  owner: string;
  industry: string;
  city: string;
  since: number;
  staff: number;
  email: string;
  about: string;
};

export const businessIndustries = [
  "Textiles & Trading",
  "Manufacturing",
  "Healthcare",
  "Food & Hospitality",
  "Professional Services",
  "Education & Design",
] as const;

export const businesses: Business[] = [
  {
    name: "Sarangpura Textiles",
    owner: "rameshbhai-bhikhabhai",
    industry: "Textiles & Trading",
    city: "Ahmedabad",
    since: 1978,
    staff: 34,
    email: "trade@sarangpura.example",
    about: "Four decades of grey cloth and sample books. Opens at seven, closes at eight, and has never missed a Diwali dispatch.",
  },
  {
    name: "Mohanbhai Machine Works",
    owner: "mohanbhai-bhikhabhai",
    industry: "Manufacturing",
    city: "Rajkot",
    since: 1985,
    staff: 41,
    email: "works@mmbworks.example",
    about: "Precision components for pump and engine makers, run out of a shop behind Gondal Road with three of the original apprentices still on the floor.",
  },
  {
    name: "Nilesh Kinal & Associates",
    owner: "nilesh-rameshbhai",
    industry: "Professional Services",
    city: "Surat",
    since: 2009,
    staff: 9,
    email: "hello@nkaaudit.example",
    about: "A two-woman practice that became a nine-person firm. Audits the family trust for free, everybody else at standard rates.",
  },
  {
    name: "Kinjal Care Clinic",
    owner: "kinjal-mohanbhai",
    industry: "Healthcare",
    city: "Rajkot",
    since: 2011,
    staff: 6,
    email: "care@kinjalclinic.example",
    about: "A small clinic two lanes from the machine shop. Free consultation for anyone carrying the Mangroliya surname, and for their guests.",
  },
  {
    name: "Mehta Design Studio",
    owner: "meenakshi-mehta",
    industry: "Education & Design",
    city: "Ahmedabad",
    since: 2014,
    staff: 12,
    email: "studio@mehtadesign.example",
    about: "Houses, schools and community halls. Designed the Mangrol courtyard hall and draws the family's Diwali invitations.",
  },
  {
    name: "Mangroliya Bhojanalaya",
    owner: "amit-desai",
    industry: "Food & Hospitality",
    city: "Bengaluru",
    since: 2016,
    staff: 18,
    email: "book@bhojanalaya.example",
    about: "A twelve-table kitchen serving Kutchi thalis. Family weddings get priority seating and, occasionally, the khoi.",
  },
  {
    name: "Desai Hospitality Group",
    owner: "sanjay-dineshbhai",
    industry: "Food & Hospitality",
    city: "Mumbai",
    since: 2017,
    staff: 60,
    email: "events@desaihospitality.example",
    about: "Banquets and catering across western India. Caters every samast gathering at cost, without being asked twice.",
  },
  {
    name: "Kutch Buildcon LLP",
    owner: "jignesh-mohanbhai",
    industry: "Manufacturing",
    city: "Bhuj",
    since: 2018,
    staff: 27,
    email: "site@kutchbuildcon.example",
    about: "Roads, roofs and structural honesty — the firm that rebuilt the Mangrol wada roof in 2019 for nothing but material.",
  },
  {
    name: "Vanglat Pharma Distributors",
    owner: "dhaval-makwana",
    industry: "Healthcare",
    city: "Surat",
    since: 2020,
    staff: 22,
    email: "orders@vanglatpharma.example",
    about: "Cold-chain distribution across South Gujarat and the supplier for the family health camp twice a year.",
  },
  {
    name: "Directory Digital",
    owner: "jaydeep-rameshbhai",
    industry: "Professional Services",
    city: "Vadodara",
    since: 2021,
    staff: 7,
    email: "build@directorydigital.example",
    about: "Websites and spreadsheets for family trusts. Built this one, maintains it, and answers the phone about it.",
  },
];

/* ========================================================================== */
/* Module: નોકરી — Jobs                                                      */
/* ========================================================================== */

export type Job = {
  slug: string;
  title: string;
  company: string;
  city: string;
  type: "Full-time" | "Part-time" | "Internship";
  experience: string;
  posted: string; // YYYY-MM-DD
  deadline: string; // YYYY-MM-DD
  contact: string;
  summary: string;
  skills: string[];
};

export const jobTypes = ["Full-time", "Part-time", "Internship"] as const;

export const jobs: Job[] = [
  {
    slug: "textile-sales-executive",
    title: "Textile Sales Executive",
    company: "Sarangpura Textiles",
    city: "Ahmedabad",
    type: "Full-time",
    experience: "2 – 4 years",
    posted: "2026-09-22",
    deadline: "2026-11-15",
    contact: "rameshbhai@mangroliya.family",
    summary:
      "Handle the Surat and Erode buyer circuit for grey cloth. Sample book, a two-wheeler and the patience to wait out a slow season are all provided.",
    skills: ["Textile trade", "Gujarati & Hindi", "Travel ready"],
  },
  {
    slug: "cnc-machine-operator",
    title: "CNC Machine Operator",
    company: "Mohanbhai Machine Works",
    city: "Rajkot",
    type: "Full-time",
    experience: "3 – 6 years",
    posted: "2026-10-01",
    deadline: "2026-11-30",
    contact: "works@mmbworks.example",
    summary:
      "Second shift on the four-axis line. Preference to candidates from Kutch who want to learn on the same floor where three apprentices became owners.",
    skills: ["CNC programming", "Blueprint reading", "Shift work"],
  },
  {
    slug: "audit-article-assistant",
    title: "Audit Article Assistant",
    company: "Nilesh Kinal & Associates",
    city: "Surat",
    type: "Part-time",
    experience: "CA Inter, both groups",
    posted: "2026-09-12",
    deadline: "2026-12-01",
    contact: "nilesh@mangroliya.family",
    summary:
      "Articledship under the family's own auditors, with the unusual perk of auditing the trust you actually belong to.",
    skills: ["Accounting", "Excel", "Gujarati"],
  },
  {
    slug: "clinic-front-desk",
    title: "Clinic Front Desk & Records",
    company: "Kinjal Care Clinic",
    city: "Rajkot",
    type: "Full-time",
    experience: "1 – 3 years",
    posted: "2026-09-28",
    deadline: "2026-11-10",
    contact: "care@kinjalclinic.example",
    summary:
      "Patient records, appointments and the register that keeps the free-consultation list honest. Morning shift, Sunday off.",
    skills: ["Patient records", "Basic computers", "People skills"],
  },
  {
    slug: "architect-site-architect",
    title: "Site Architect",
    company: "Mehta Design Studio",
    city: "Ahmedabad",
    type: "Full-time",
    experience: "3 – 5 years",
    posted: "2026-10-04",
    deadline: "2026-12-15",
    contact: "studio@mehtadesign.example",
    summary:
      "Supervise two residential sites and one community hall. Courtyard houses a plus — there is always another neem tree to place.",
    skills: ["Site supervision", "AutoCAD", "Vendor coordination"],
  },
  {
    slug: "sous-chef-gujarati",
    title: "Sous Chef — Gujarati & Kutchi Kitchen",
    company: "Mangroliya Bhojanalaya",
    city: "Bengaluru",
    type: "Full-time",
    experience: "4 – 7 years",
    posted: "2026-09-18",
    deadline: "2026-11-25",
    contact: "book@bhojanalaya.example",
    summary:
      "Run the thali line and protect the khoi recipe from anyone who asks. Family members get the weekend shift first.",
    skills: ["Gujarati cuisine", "Kitchen leadership", "Food safety"],
  },
  {
    slug: "video-archive-intern",
    title: "Archive Digitisation Intern",
    company: "Archives & Media, Samast Parivar",
    city: "Mumbai",
    type: "Internship",
    experience: "Students welcome",
    posted: "2026-10-06",
    deadline: "2026-11-05",
    contact: "sanjay@mangroliya.family",
    summary:
      "Digitise forty hours of family video and caption the photographs for Kinal's archive. Six months, stipend paid, tapes provided.",
    skills: ["Video editing", "Captioning", "Patience"],
  },
  {
    slug: "site-frontend-developer",
    title: "Frontend Developer (React / Next.js)",
    company: "Directory Digital",
    city: "Vadodara",
    type: "Full-time",
    experience: "2 – 5 years",
    posted: "2026-10-02",
    deadline: "2026-11-20",
    contact: "build@directorydigital.example",
    summary:
      "Build and maintain portals for trusts, schools and family associations — including the one you are reading right now.",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
];

export function getJob(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

/* ========================================================================== */
/* Module: સમાચાર — News                                                     */
/* ========================================================================== */

export type NewsItem = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  tag: string;
  excerpt: string;
  body: string[];
  author: string;
  seed: string;
};

export const news: NewsItem[] = [
  {
    slug: "diwali-milan-2026-announced",
    title: "Diwali Milan 2026 will be held at Parivar Bhavan, Surat",
    date: "2026-10-04",
    tag: "Festival",
    excerpt:
      "Friday 24 October at seven in the evening. The second generation is honoured first, the fourth generation performs at nine.",
    body: [
      "The samiti has confirmed that this year's Diwali Milan will be held on the lawn of Parivar Bhavan, Varachha Road, Surat on Friday 24 October 2026 from seven in the evening.",
      "As always, the elders of the second generation are received first and seated before anyone else. The children's performance begins at nine, the aerial photography at nine-fifteen, and dinner whenever the last person stops talking.",
      "Branch trustees should send their headcount by 18 October so that catering knows how many seats to keep. Families coming from Kutch can use the two rooms held at the bhavan — ask Priya.",
    ],
    author: "Cultural Secretary",
    seed: "news-diwali-milan",
  },
  {
    slug: "scholarship-applications-open",
    title: "Scholarship applications open for 2026–27",
    date: "2026-09-15",
    tag: "Education",
    excerpt:
      "Ninety-one students have been funded since 2004. Applications for the coming year close on 31 October.",
    body: [
      "Applications for the Mangroliya Parivar scholarship are open to any child or grandchild of a registered member, from Class VI to post-graduation.",
      "The fund has supported ninety-one students since Dineshbhai seeded it with four in 2004. Selection is by marks, need and a short conversation with two committee members — there is no paperwork theatre.",
      "Send the school-leaving number, last marksheet and a note from the branch trustee to the secretary by 31 October 2026.",
    ],
    author: "Secretary, Samiti",
    seed: "news-scholarship",
  },
  {
    slug: "courtyard-hall-five-years",
    title: "Five years of the Mangrol courtyard hall",
    date: "2026-08-02",
    tag: "Milestone",
    excerpt:
      "Ninety-two members gathered under the neem tree in 2021. The hall has hosted forty functions since.",
    body: [
      "The courtyard hall opened in August 2021 with ninety-two members under the neem tree Bapaji described on the back of a ration card in 1996.",
      "In five years it has hosted fourteen weddings, six scholarship ceremonies, two health camps and an argument about the kite trophy that is still technically unresolved.",
      "Jignesh has proposed a covered walkway for the monsoon. The committee will take it up at the December meeting.",
    ],
    author: "Archives & Media",
    seed: "news-courtyard",
  },
  {
    slug: "oral-history-tapes-digitised",
    title: "The 2023 oral history tapes are now fully digitised",
    date: "2026-06-20",
    tag: "Archive",
    excerpt:
      "Forty hours of the second generation, transcribed and searchable. Ruchi's project is complete.",
    body: [
      "Ruchi interviewed every surviving member of the second generation on tape in 2023. Those recordings are now digitised, transcribed and indexed by name, place and year.",
      "The originals are held with the trust in Surat. Members can request a copy of any interview through the contact page, subject to the speaker's family's permission.",
      "Three interviews are still restricted at the request of the family. Everything else is open.",
    ],
    author: "Archives & Media",
    seed: "news-oral-history",
  },
  {
    slug: "new-committee-2025-2028",
    title: "Samiti constituted for the term 2025 – 2028",
    date: "2026-01-18",
    tag: "Governance",
    excerpt:
      "Ten posts, nine elected at the January general meeting, one nominated for the archives.",
    body: [
      "The general meeting in Surat constituted the samiti for 2025 – 2028 with ten posts. Nine were elected by show of hands; the archives post was nominated by the board.",
      "The full list of posts, duties and contacts is published in the main committee module of this site, and the accounts will be circulated before Uttarayan as they are every year.",
      "Any member may raise a motion at the December meeting. Send it to the secretary in writing, or say it out loud — both work.",
    ],
    author: "Secretary, Samiti",
    seed: "news-committee",
  },
  {
    slug: "family-directory-2026",
    title: "The family directory is being redrawn for 2026",
    date: "2025-12-05",
    tag: "Directory",
    excerpt:
      "Village-wise lists, new marriages and the addresses of everyone who moved in the last two years.",
    body: [
      "Every three years the directory is redrawn from scratch. This year's edition adds village-wise lists, the business directory and a job board for the family.",
      "If you have moved house, changed number or added to the family in the last two years, tell your branch trustee before 31 December.",
      "The printed edition goes to every household in January, as it has since 2016.",
    ],
    author: "Joint Secretary",
    seed: "news-directory",
  },
];

export function getNews(slug: string): NewsItem | undefined {
  return news.find((item) => item.slug === slug);
}

/* ========================================================================== */
/* Module: ડોઉનલોડ — Downloads                                               */
/* ========================================================================== */

export type Download = {
  title: string;
  titleGu: string;
  description: string;
  format: "PDF" | "XLSX" | "DOCX";
  size: string;
  updated: string; // YYYY-MM-DD
  category: DownloadCategory;
  /** Placeholder link — point this at the real file when it is uploaded. */
  href: string;
};

export type DownloadCategory =
  | "Forms"
  | "Guides"
  | "Financial"
  | "Publications";

export const downloadCategories: DownloadCategory[] = [
  "Forms",
  "Guides",
  "Financial",
  "Publications",
];

export const downloads: Download[] = [
  {
    title: "New member registration form",
    titleGu: "નવા સભ્યનો ફોર્મ",
    description:
      "Name, branch, village and blood group. One form per household; the trustee signs the bottom corner.",
    format: "PDF",
    size: "180 KB",
    updated: "2026-01-10",
    category: "Forms",
    href: "#",
  },
  {
    title: "Birth & marriage entry form",
    titleGu: "જન્મ-લગ્ન નોંધ ફોર્મ",
    description:
      "The register entry that every new arrival and every new marriage is written into.",
    format: "PDF",
    size: "145 KB",
    updated: "2026-01-10",
    category: "Forms",
    href: "#",
  },
  {
    title: "Scholarship application 2026–27",
    titleGu: "શિષ્યવૃત્તિ અરજી",
    description:
      "Marksheet, admission letter and a note from the branch trustee. Closes 31 October.",
    format: "PDF",
    size: "220 KB",
    updated: "2026-09-15",
    category: "Forms",
    href: "#",
  },
  {
    title: "Event venue booking request",
    titleGu: "સ્થળ બુકિંગ અરજી",
    description:
      "For weddings and functions at Parivar Bhavan. Two rooms, one hall and the lawn.",
    format: "DOCX",
    size: "62 KB",
    updated: "2026-03-02",
    category: "Forms",
    href: "#",
  },
  {
    title: "Trust accounts 2025–26",
    titleGu: "ટ્રસ્ટના હિસાબ",
    description:
      "Audited statement of income, scholarship disbursement and the bhavan fund, published before Uttarayan.",
    format: "PDF",
    size: "1.2 MB",
    updated: "2026-02-20",
    category: "Financial",
    href: "#",
  },
  {
    title: "Donation receipt template",
    titleGu: "દાન રસીદ",
    description:
      "Triplicate receipt book layout used by the treasurer at every gathering.",
    format: "XLSX",
    size: "48 KB",
    updated: "2025-11-11",
    category: "Financial",
    href: "#",
  },
  {
    title: "How the samiti works",
    titleGu: "સમિતિ કેવી રીતે ચાલે છે",
    description:
      "Posts, terms, election procedure and the rules of order the family agreed on in 1991.",
    format: "PDF",
    size: "310 KB",
    updated: "2025-01-18",
    category: "Guides",
    href: "#",
  },
  {
    title: "Directory correction checklist",
    titleGu: "યાદી સુધારા ચેકલિસ્ટ",
    description:
      "What to check before sending corrections: spelling, city, profession, mobile and email.",
    format: "PDF",
    size: "96 KB",
    updated: "2025-12-05",
    category: "Guides",
    href: "#",
  },
  {
    title: "Vanshavali register — blank template",
    titleGu: "વંશાવલી નમૂનો",
    description:
      "Four-generation blank register in the layout the family has printed since the nineties.",
    format: "XLSX",
    size: "74 KB",
    updated: "2026-04-08",
    category: "Publications",
    href: "#",
  },
  {
    title: "Diwali Milan 2025 photographs",
    titleGu: "દિવાળી મિલન 2025",
    description:
      "Six hundred captioned photographs from last year's gathering, in one archive file.",
    format: "PDF",
    size: "18 MB",
    updated: "2025-11-08",
    category: "Publications",
    href: "#",
  },
];
