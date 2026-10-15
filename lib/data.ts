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
  nameGu?: string;
  photo?: string;
  generation: 1 | 2 | 3 | 4;
  branch: Branch;
  city: string;
  nativeVillage?: string;
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
  name: "સમસ્ત માંગરોળીયા પરિવાર",
  nameGu: "સમસ્ત માંગરોળીયા પરિવાર",
  chapter: "સુરત",
  legalName: "સમસ્ત માંગરોળીયા પરિવાર ટ્રસ્ટ",
  tagline: "એક પરિવાર · એક ઓળખ",
  founded: 1991,
  familySince: 1931,
  homeVillage: "માંગરોલ",
  hq: "સુરત, ગુજરાત",
  email: "parivar@mangroliya.family",
  phone: "+91 98250 41200",
  address: [
    "સમસ્ત માંગરોળીયા પરિવાર ભવન",
    "વરાછા રોડ, સુરત 395006, ગુજરાત",
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
  { label: "મુખ્ય સમિતિ", href: "/committee" },
  { label: "દાતા", href: "/donors" },
  { label: "ગેલેરી", href: "/gallery" },
  { label: "બિસનેશ", href: "/business" },
  { label: "નોકરી", href: "/jobs" },
  { label: "સમાચાર", href: "/news" },
  { label: "દાન", href: "/donate" },
  { label: "સંપર્ક", href: "/contact" },
] as const;

export type NavItem =
  | { label: string; href: string }
  | { label: string; children: { label: string; en: string; href: string }[] };

/**
 * The header menu, grouped the way the reference parivar portal groups it:
 * a short top level, with the directories and the smaller modules folded
 * into dropdowns.
 */
export const primaryNav: NavItem[] = [
  { label: "હોમ", href: "/" },
  { label: "પરિચય", href: "/about" },
  { label: "બિઝનેસ ડિરેક્ટરી", href: "/business" },
  { label: "ગામની યાદી", href: "/village" },
  { label: "સમિતિ", href: "/committee" },
  { label: "ગેલેરી", href: "/gallery" },
  { label: "સંપર્ક", href: "/contact" },
];

/** English counterpart for each module, used in page titles and footers. */
export const moduleNames: Record<string, string> = {
  "/": "Home",
  "/about": "Our Introduction",
  "/village": "Village Directory",
  "/founders": "The Founders",
  "/committee": "Main Committee",
  "/gallery": "Gallery",
  "/business": "Business Directory",
  "/donate": "Donate",
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
    nameGu: "શ્રી રમેશભાઈ ભીખાભાઈ",
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
    nameGu: "શ્રી દિનેશભાઈ ભીખાભાઈ",
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
    nameGu: "સી.એ. નિલેશ રમેશભાઈ",
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
    nameGu: "સી.એ. કિનલ નિલેશ",
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
    nameGu: "જયદીપ રમેશભાઈ",
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
    nameGu: "ડૉ. કિંજલ મોહનભાઈ",
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
    nameGu: "ડૉ. ધવલ મકવાણા",
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
    nameGu: "ભાવના દેસાઈ",
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
    nameGu: "સંજય દિનેશભાઈ",
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
    nameGu: "એડવોકેટ પ્રિયા દિનેશભાઈ",
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
  {
    slug: "dummy-member-0",
    name: "Dummy 0",
    nameGu: "રમેશભાઈ ગોપાલભાઈ માંગરોળીયા",
    photo: "/dummy-headshot.jpg",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "સુરત",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-1",
    name: "Dummy 1",
    nameGu: "દિનેશભાઈ છગનભાઈ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "અમદાવાદ",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-2",
    name: "Dummy 2",
    nameGu: "નિલેશભાઈ પરસોત્તમભાઈ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "સુરત",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-3",
    name: "Dummy 3",
    nameGu: "જયદીપભાઈ રમેશભાઈ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "અમદાવાદ",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-4",
    name: "Dummy 4",
    nameGu: "ધવલભાઈ રવજીભાઈ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "સુરત",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-5",
    name: "Dummy 5",
    nameGu: "સંજયભાઈ દિનેશભાઈ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "અમદાવાદ",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-6",
    name: "Dummy 6",
    nameGu: "હાર્દિકભાઈ મહેતા માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "સુરત",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-7",
    name: "Dummy 7",
    nameGu: "જિજ્ઞેશભાઈ મોહનભાઈ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "અમદાવાદ",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-8",
    name: "Dummy 8",
    nameGu: "અમિતભાઈ દેસાઈ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "સુરત",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-9",
    name: "Dummy 9",
    nameGu: "મોહનભાઈ ભીખાભાઈ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "અમદાવાદ",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-10",
    name: "Dummy 10",
    nameGu: "ભીખાભાઈ કાળીદાસ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "સુરત",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-11",
    name: "Dummy 11",
    nameGu: "પ્રવિણભાઈ લાલજીભાઈ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "અમદાવાદ",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-12",
    name: "Dummy 12",
    nameGu: "ભાવનાબેન દેસાઈ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "સુરત",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-13",
    name: "Dummy 13",
    nameGu: "કિંજલબેન મોહનભાઈ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "અમદાવાદ",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-14",
    name: "Dummy 14",
    nameGu: "પ્રિયાબેન દિનેશભાઈ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "સુરત",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-15",
    name: "Dummy 15",
    nameGu: "રુચિબેન સંજયભાઈ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "અમદાવાદ",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-16",
    name: "Dummy 16",
    nameGu: "શાંતાબેન રમેશભાઈ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "સુરત",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-17",
    name: "Dummy 17",
    nameGu: "મીનાક્ષીબેન મહેતા માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "અમદાવાદ",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-18",
    name: "Dummy 18",
    nameGu: "હંસાબેન મોહનભાઈ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "સુરત",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  },
  {
    slug: "dummy-member-19",
    name: "Dummy 19",
    nameGu: "સાવિત્રીબેન ભીખાભાઈ માંગરોળીયા",
    generation: 2,
    branch: "Rameshbhai's Branch",
    city: "અમદાવાદ",
    profession: "Business",
    role: "Member",
    bio: "Dummy bio"
  }
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
  { value: String(members.length), label: "સભ્યો" },
  { value: "4", label: "પેઢીઓ" },
  { value: String(cities.length), label: "શહેરો" },
  { value: "35", label: "વર્ષો" },
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

export type PhotoCategory = "સ્નેહ મિલન ૨૦૨૫" | "નવરાત્રી ૨.૦" | "બિઝનેસ એક્સ્પો ૨.૦" | "લગ્ન પ્રસંગ" | "ગામની યાદો";

export type Photo = {
  slug: string;
  title: string;
  category: PhotoCategory;
  year: number;
  seed: string;
  credit: string;
  /** Extra height for a masonry-style grid. */
  tall?: boolean;
};

export const gallery: Photo[] = [
  {
    slug: "sneh-milan-2025",
    title: "સ્નેહ મિલન ૨૦૨૫, સુરત",
    category: "સ્નેહ મિલન ૨૦૨૫",
    year: 2025,
    seed: "mangroliya-sneh",
    credit: "Hardik Mehta",
    tall: true,
  },
  {
    slug: "navratri-garba",
    title: "નવરાત્રી ૨.૦ - ભવ્ય આયોજન",
    category: "નવરાત્રી ૨.૦",
    year: 2024,
    seed: "mangroliya-garba",
    credit: "Ruchi Sanjay",
  },
  {
    slug: "business-expo",
    title: "બિઝનેસ એક્સ્પો ૨.૦ ઉદ્ઘાટન",
    category: "બિઝનેસ એક્સ્પો ૨.૦",
    year: 2024,
    seed: "mangroliya-expo",
    credit: "Sanjay Dineshbhai",
    tall: true,
  },
  {
    slug: "wedding-baraat",
    title: "લગ્નનો વરઘોડો",
    category: "લગ્ન પ્રસંગ",
    year: 2023,
    seed: "mangroliya-baraat",
    credit: "Hardik Mehta",
  },
  {
    slug: "village-courtyard",
    title: "ગામનો જૂનો વાડો",
    category: "ગામની યાદો",
    year: 2021,
    seed: "mangroliya-courtyard",
    credit: "Jaydeep Rameshbhai",
  },
  {
    slug: "sneh-milan-stage",
    title: "સ્ટેજ પર સન્માન",
    category: "સ્નેહ મિલન ૨૦૨૫",
    year: 2025,
    seed: "mangroliya-stage",
    credit: "Sanjay Dineshbhai",
  },
  {
    slug: "navratri-aarti",
    title: "નવરાત્રી મહા આરતી",
    category: "નવરાત્રી ૨.૦",
    year: 2024,
    seed: "mangroliya-aarti",
    credit: "Bhavna Desai",
    tall: true,
  },
  {
    slug: "business-expo-stalls",
    title: "એક્સ્પોમાં પરિવારના સ્ટોલ",
    category: "બિઝનેસ એક્સ્પો ૨.૦",
    year: 2024,
    seed: "mangroliya-stalls",
    credit: "Ruchi Sanjay",
  },
  {
    slug: "wedding-mandap",
    title: "મંડપ મુહૂર્ત",
    category: "લગ્ન પ્રસંગ",
    year: 2023,
    seed: "mangroliya-mandap",
    credit: "Priya Dineshbhai",
  },
  {
    slug: "village-fields",
    title: "ગામના ખેતરોની યાદ",
    category: "ગામની યાદો",
    year: 2022,
    seed: "mangroliya-fields",
    credit: "Jignesh Mohanbhai",
  },
  {
    slug: "sneh-milan-group",
    title: "પરિવારનો સમૂહ ફોટો",
    category: "સ્નેહ મિલન ૨૦૨૫",
    year: 2025,
    seed: "mangroliya-group",
    credit: "Hardik Mehta",
  },
  {
    slug: "navratri-khelaiya",
    title: "શ્રેષ્ઠ ખેલૈયા",
    category: "નવરાત્રી ૨.૦",
    year: 2024,
    seed: "mangroliya-khelaiya",
    credit: "Kinjal Makwana",
  },

];

export const photoCategories: PhotoCategory[] = [
  "સ્નેહ મિલન ૨૦૨૫",
  "નવરાત્રી ૨.૦",
  "બિઝનેસ એક્સ્પો ૨.૦",
  "લગ્ન પ્રસંગ",
  "ગામની યાદો",
];

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
  
  // Basic gender heuristic based on known family names
  const isFemale = /ben|meenakshi|kinjal|bhavna|ruchi|priya|kinal|anaya|mira|taara/i.test(slug);
  const gender = isFemale ? "women" : "men";
  
  // randomuser.me provides highly consistent, professional portraits (1-99)
  const index = (hash % 99) + 1;
  return `https://randomuser.me/api/portraits/${gender}/${index}.jpg`;
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
  {
    slug: "badhada",
    name: "Badhada",
    nameGu: "બાઢડા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-badhada",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "ingorala",
    name: "Ingorala",
    nameGu: "ઇંગોરાળા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-ingorala",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "chital",
    name: "Chital",
    nameGu: "ચિત્તલ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-chital",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "amreli",
    name: "Amreli",
    nameGu: "અમરેલી",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-amreli",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "aliabada",
    name: "Aliabada",
    nameGu: "અલિયાબાડા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-aliabada",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "atkot",
    name: "Atkot",
    nameGu: "આટકોટ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-atkot",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "adarsh-nagar",
    name: "Adarsh Nagar",
    nameGu: "આદર્શ નગર",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-adarsh-nagar",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "kalavad",
    name: "Kalavad",
    nameGu: "કાલાવાડ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-kalavad",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "keshod",
    name: "Keshod",
    nameGu: "કેશોદ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-keshod",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "kotda-sangani",
    name: "Kotda Sangani",
    nameGu: "કોટડાસાંગાણી",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-kotda-sangani",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "kunkavav",
    name: "Kunkavav",
    nameGu: "કુંકાવાવ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-kunkavav",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "kalyanpur",
    name: "Kalyanpur",
    nameGu: "કલ્યાણપુર",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-kalyanpur",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "khambhalia",
    name: "Khambhalia",
    nameGu: "ખંભાળિયા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-khambhalia",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "khambha",
    name: "Khambha",
    nameGu: "ખાંભા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-khambha",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "khandheri",
    name: "Khandheri",
    nameGu: "ખંઢેરી",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-khandheri",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "khirasara",
    name: "Khirasara",
    nameGu: "ખીરસરા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-khirasara",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "gondal",
    name: "Gondal",
    nameGu: "ગોંડલ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-gondal",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "gariadhar",
    name: "Gariadhar",
    nameGu: "ગારિયાધાર",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-gariadhar",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "gir-gadhada",
    name: "Gir Gadhada",
    nameGu: "ગીર ગઢડા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-gir-gadhada",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "gopnath",
    name: "Gopnath",
    nameGu: "ગોપનાથ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-gopnath",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "gadhada",
    name: "Gadhada",
    nameGu: "ગઢડા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-gadhada",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "chotila",
    name: "Chotila",
    nameGu: "ચોટીલા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-chotila",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "chalala",
    name: "Chalala",
    nameGu: "ચલાલા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-chalala",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "chuda",
    name: "Chuda",
    nameGu: "ચુડા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-chuda",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "chapar",
    name: "Chapar",
    nameGu: "ચાપર",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-chapar",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "jamnagar",
    name: "Jamnagar",
    nameGu: "જામનગર",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-jamnagar",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "junagadh",
    name: "Junagadh",
    nameGu: "જૂનાગઢ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-junagadh",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "jasdan",
    name: "Jasdan",
    nameGu: "જસદણ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-jasdan",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "jetpur",
    name: "Jetpur",
    nameGu: "જેતપુર",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-jetpur",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "jamjodhpur",
    name: "Jamjodhpur",
    nameGu: "જામજોધપુર",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-jamjodhpur",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "tankara",
    name: "Tankara",
    nameGu: "ટંકારા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-tankara",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "talaja",
    name: "Talaja",
    nameGu: "તળાજા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-talaja",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "talala",
    name: "Talala",
    nameGu: "તાલાળા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-talala",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "than",
    name: "Than",
    nameGu: "થાન",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-than",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "dhari",
    name: "Dhari",
    nameGu: "ધારી",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-dhari",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "dwarka",
    name: "Dwarka",
    nameGu: "દ્વારકા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-dwarka",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "diu",
    name: "Diu",
    nameGu: "દીવ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-diu",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "dhoraji",
    name: "Dhoraji",
    nameGu: "ધોરાજી",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-dhoraji",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "dhrangadhra",
    name: "Dhrangadhra",
    nameGu: "ધ્રાંગધ્રા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-dhrangadhra",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "dhrol",
    name: "Dhrol",
    nameGu: "ધ્રોલ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-dhrol",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "porbandar",
    name: "Porbandar",
    nameGu: "પોરબંદર",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-porbandar",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "palitana",
    name: "Palitana",
    nameGu: "પાલીતાણા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-palitana",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "paddhari",
    name: "Paddhari",
    nameGu: "પડધરી",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-paddhari",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "paliyad",
    name: "Paliyad",
    nameGu: "પાળિયાદ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-paliyad",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "bhavnagar",
    name: "Bhavnagar",
    nameGu: "ભાવનગર",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-bhavnagar",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "botad",
    name: "Botad",
    nameGu: "બોટાદ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-botad",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "bhesan",
    name: "Bhesan",
    nameGu: "ભેંસાણ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-bhesan",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "bagasara",
    name: "Bagasara",
    nameGu: "બગસરા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-bagasara",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "bhanvad",
    name: "Bhanvad",
    nameGu: "ભાણવડ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-bhanvad",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "babra",
    name: "Babra",
    nameGu: "બાબરા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-babra",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "morbi",
    name: "Morbi",
    nameGu: "મોરબી",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-morbi",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "mahuva",
    name: "Mahuva",
    nameGu: "મહુવા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-mahuva",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "malia",
    name: "Malia",
    nameGu: "માળિયા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-malia",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "manavadar",
    name: "Manavadar",
    nameGu: "માણાવદર",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-manavadar",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "mendarda",
    name: "Mendarda",
    nameGu: "મેંદરડા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-mendarda",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "rajkot",
    name: "Rajkot",
    nameGu: "રાજકોટ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-rajkot",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "ranavav",
    name: "Ranavav",
    nameGu: "રાણાવાવ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-ranavav",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "rajula",
    name: "Rajula",
    nameGu: "રાજુલા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-rajula",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "veraval",
    name: "Veraval",
    nameGu: "વેરાવળ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-veraval",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "vankaner",
    name: "Vankaner",
    nameGu: "વાંકાનેર",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-vankaner",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "visavadar",
    name: "Visavadar",
    nameGu: "વિસાવદર",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-visavadar",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "vallabhipur",
    name: "Vallabhipur",
    nameGu: "વલ્લભીપુર",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-vallabhipur",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "vichhiya",
    name: "Vichhiya",
    nameGu: "વિંછીયા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-vichhiya",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "surendranagar",
    name: "Surendranagar",
    nameGu: "સુરેન્દ્રનગર",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-surendranagar",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "savarkundla",
    name: "Savarkundla",
    nameGu: "સાવરકુંડલા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-savarkundla",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "sihor",
    name: "Sihor",
    nameGu: "સિહોર",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-sihor",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "sayla",
    name: "Sayla",
    nameGu: "સાયલા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-sayla",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "sutrapada",
    name: "Sutrapada",
    nameGu: "સુત્રાપાડા",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-sutrapada",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "halvad",
    name: "Halvad",
    nameGu: "હળવદ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-halvad",
    note: "Village in Saurashtra region.",
    members: [],
  },
  {
    slug: "harij",
    name: "Harij",
    nameGu: "હારીજ",
    district: "Saurashtra",
    families: Math.floor(Math.random() * 20) + 1,
    households: Math.floor(Math.random() * 50) + 5,
    since: 1950 + Math.floor(Math.random() * 50),
    contact: "jaydeep-rameshbhai",
    seed: "village-harij",
    note: "Village in Saurashtra region.",
    members: [],
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
    post: "Post 0",
    postGu: "પ્રમુખ",
    category: "Karobari Samiti",
    slug: "dummy-member-0",
    phone: "98250 00000",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 1",
    postGu: "ઉપપ્રમુખ",
    category: "Karobari Samiti",
    slug: "dummy-member-1",
    phone: "98250 00001",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 2",
    postGu: "સચિવ",
    category: "Karobari Samiti",
    slug: "dummy-member-2",
    phone: "98250 00002",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 3",
    postGu: "ખજાનચી",
    category: "Karobari Samiti",
    slug: "dummy-member-3",
    phone: "98250 00003",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 4",
    postGu: "યુવા પ્રમુખ",
    category: "Yuva Samiti",
    slug: "dummy-member-4",
    phone: "98250 00004",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 5",
    postGu: "યુવા ઉપપ્રમુખ",
    category: "Yuva Samiti",
    slug: "dummy-member-5",
    phone: "98250 00005",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 6",
    postGu: "યુવા સચિવ",
    category: "Yuva Samiti",
    slug: "dummy-member-6",
    phone: "98250 00006",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 7",
    postGu: "યુવા સભ્ય",
    category: "Yuva Samiti",
    slug: "dummy-member-7",
    phone: "98250 00007",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 8",
    postGu: "મહિલા પ્રમુખ",
    category: "Mahila Samiti",
    slug: "dummy-member-8",
    phone: "98250 00008",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 9",
    postGu: "મહિલા ઉપપ્રમુખ",
    category: "Mahila Samiti",
    slug: "dummy-member-9",
    phone: "98250 00009",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 10",
    postGu: "મહિલા સચિવ",
    category: "Mahila Samiti",
    slug: "dummy-member-10",
    phone: "98250 00010",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 11",
    postGu: "મહિલા સભ્ય",
    category: "Mahila Samiti",
    slug: "dummy-member-11",
    phone: "98250 00011",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 12",
    postGu: "વિવિધ પ્રમુખ",
    category: "Vividh Samiti",
    slug: "dummy-member-12",
    phone: "98250 00012",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 13",
    postGu: "વિવિધ ઉપપ્રમુખ",
    category: "Vividh Samiti",
    slug: "dummy-member-13",
    phone: "98250 00013",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 14",
    postGu: "વિવિધ સચિવ",
    category: "Vividh Samiti",
    slug: "dummy-member-14",
    phone: "98250 00014",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 15",
    postGu: "વિવિધ સભ્ય",
    category: "Vividh Samiti",
    slug: "dummy-member-15",
    phone: "98250 00015",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 16",
    postGu: "સલાહકાર સભ્ય",
    category: "Salahkar Samiti",
    slug: "dummy-member-16",
    phone: "98250 00016",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 17",
    postGu: "સલાહકાર સભ્ય",
    category: "Salahkar Samiti",
    slug: "dummy-member-17",
    phone: "98250 00017",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 18",
    postGu: "સલાહકાર સભ્ય",
    category: "Salahkar Samiti",
    slug: "dummy-member-18",
    phone: "98250 00018",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
  },
  {
    post: "Post 19",
    postGu: "સલાહકાર સભ્ય",
    category: "Salahkar Samiti",
    slug: "dummy-member-19",
    phone: "98250 00019",
    duty: "ફરજ અને જવાબદારી",
    elected: true,
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
  "કાપડ અને વેપાર",
  "ઉત્પાદન",
  "આરોગ્ય સંભાળ",
  "ફૂડ એન્ડ હોસ્પિટાલિટી",
  "પ્રોફેશનલ સર્વિસીસ",
  "શિક્ષણ અને ડિઝાઇન",
] as const;

export const businesses: Business[] = [
  {
    name: "સારંગપુરા ટેક્સટાઇલ્સ",
    owner: "rameshbhai-bhikhabhai",
    industry: "કાપડ અને વેપાર",
    city: "અમદાવાદ",
    since: 1978,
    staff: 34,
    email: "trade@sarangpura.example",
    about: "ચાર દાયકાઓથી કાપડનો વેપાર. સવારે સાત વાગ્યે ખુલે છે, રાત્રે આઠે બંધ થાય છે, અને ક્યારેય દિવાળી ડિસ્પેચ ચૂક્યું નથી.",
  },
  {
    name: "મોહનભાઈ મશીન વર્ક્સ",
    owner: "mohanbhai-bhikhabhai",
    industry: "ઉત્પાદન",
    city: "રાજકોટ",
    since: 1985,
    staff: 41,
    email: "works@mmbworks.example",
    about: "પંપ અને એન્જિન ઉત્પાદકો માટે પ્રિસિઝન કમ્પોનન્ટ્સ. ગોંડલ રોડની પાછળની દુકાનમાંથી ચાલે છે, જેમાં મૂળ એપ્રેન્ટિસમાંથી ત્રણ હજુ પણ કામ કરી રહ્યા છે.",
  },
  {
    name: "નિલેશ કિનલ એન્ડ એસોસિએટ્સ",
    owner: "nilesh-rameshbhai",
    industry: "પ્રોફેશનલ સર્વિસીસ",
    city: "સુરત",
    since: 2009,
    staff: 9,
    email: "hello@nkaaudit.example",
    about: "બે મહિલાઓથી શરૂ થયેલી નવ-વ્યક્તિની પેઢી. પરિવારના ટ્રસ્ટનું ઓડિટ મફતમાં કરે છે, અન્ય તમામ માટે પ્રમાણભૂત દરો પર.",
  },
  {
    name: "કિંજલ કેર ક્લિનિક",
    owner: "kinjal-mohanbhai",
    industry: "આરોગ્ય સંભાળ",
    city: "રાજકોટ",
    since: 2011,
    staff: 6,
    email: "care@kinjalclinic.example",
    about: "મશીન શોપથી બે ગલી દૂર એક નાનું ક્લિનિક. માંગરોળિયા અટક ધરાવતા કોઈપણ વ્યક્તિ અને તેમના મહેમાનો માટે મફત કન્સલ્ટેશન.",
  },
  {
    name: "મહેતા ડિઝાઇન સ્ટુડિયો",
    owner: "meenakshi-mehta",
    industry: "શિક્ષણ અને ડિઝાઇન",
    city: "અમદાવાદ",
    since: 2014,
    staff: 12,
    email: "studio@mehtadesign.example",
    about: "મકાનો, શાળાઓ અને કોમ્યુનિટી હોલ. માંગરોળનો આંગણા વાળો હોલ ડિઝાઇન કર્યો અને પરિવારના દિવાળીના આમંત્રણો દોરે છે.",
  },
  {
    name: "માંગરોળિયા ભોજનાલય",
    owner: "amit-desai",
    industry: "ફૂડ એન્ડ હોસ્પિટાલિટી",
    city: "બેંગલુરુ",
    since: 2016,
    staff: 18,
    email: "book@bhojanalaya.example",
    about: "કચ્છી થાળી પીરસતું બાર-ટેબલનું રસોડું. પરિવારના લગ્નોમાં પ્રાધાન્ય આપવામાં આવે છે અને ક્યારેક ખોઈ પણ.",
  },
  {
    name: "દેસાઈ હોસ્પિટાલિટી ગ્રુપ",
    owner: "sanjay-dineshbhai",
    industry: "ફૂડ એન્ડ હોસ્પિટાલિટી",
    city: "મુંબઈ",
    since: 2017,
    staff: 60,
    email: "events@desaihospitality.example",
    about: "પશ્ચિમ ભારતમાં બેન્ક્વેટ્સ અને કેટરિંગ. કોઈપણ સમસ્ત મેળાવડાને પડતર કિંમતે કેટર કરે છે.",
  },
  {
    name: "કચ્છ બિલ્ડકોન એલએલપી",
    owner: "jignesh-mohanbhai",
    industry: "ઉત્પાદન",
    city: "ભુજ",
    since: 2018,
    staff: 27,
    email: "site@kutchbuildcon.example",
    about: "રસ્તા, છત અને માળખાકીય પ્રામાણિકતા — 2019 માં માંગરોળના વાડાની છત ફક્ત મટિરિયલ ખર્ચે ફરીથી બનાવી.",
  },
  {
    name: "વંગલાટ ફાર્મા ડિસ્ટ્રીબ્યુટર્સ",
    owner: "dhaval-makwana",
    industry: "આરોગ્ય સંભાળ",
    city: "સુરત",
    since: 2020,
    staff: 22,
    email: "orders@vanglatpharma.example",
    about: "દક્ષિણ ગુજરાતમાં કોલ્ડ ચેઇન ડિસ્ટ્રિબ્યુશન અને વર્ષમાં બે વાર પરિવારના હેલ્થ કેમ્પ માટે સપ્લાયર.",
  },
  {
    name: "ડિરેક્ટરી ડિજિટલ",
    owner: "jaydeep-rameshbhai",
    industry: "પ્રોફેશનલ સર્વિસીસ",
    city: "વડોદરા",
    since: 2021,
    staff: 7,
    email: "build@directorydigital.example",
    about: "પરિવારના ટ્રસ્ટ માટે વેબસાઇટ્સ અને સ્પ્રેડશીટ્સ. આ વેબસાઈટ બનાવી, જાળવે છે અને તેનો ફોન ઉપાડે છે.",
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
