// ─────────────────────────────────────────────────────────────
//  All page content lives here. Edit this file to update the site.
//  Writings live in src/content/writings (one Markdown file each).
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Jesu Sundaramaran',
  nameTamil: 'ஜேசு சுந்தரமாறன்',
  roles: ['Technology Leader', 'Writer', 'Orator', 'Filmmaker'],
  intro:
    'IT leader with 20+ years of experience, based in the San Francisco Bay Area. Outside work, I champion Tamil language and culture through stories, the pattimanram stage, film and community leadership.',
  description:
    'Jesu Sundaramaran — technology leader, Tamil writer, pattimanram orator and film producer based in the San Francisco Bay Area.',
  // TODO: replace with your real address before going live.
  email: 'you@example.com',
  // Optional: a Formspree (or similar) endpoint, e.g. https://formspree.io/f/abcdwxyz
  // Leave empty to show an email button instead of the form.
  formEndpoint: '',
  // Optional: path to a PDF in /public, e.g. '/Jesu-Sundaramaran-CV.pdf'
  cvUrl: '',
  location: 'San Francisco Bay Area, California',
};

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jesu-augustine/' },
  { label: 'X / Twitter', href: 'https://twitter.com/jesuworld' },
  { label: 'Facebook', href: 'https://www.facebook.com/jesuworld' },
  // TODO: add your YouTube channel URL
  { label: 'YouTube', href: 'https://www.youtube.com' },
];

export const highlights = [
  { value: '20', suffix: '+', label: 'Years in information technology' },
  { value: '45', suffix: '+', label: 'Literary events co-organized' },
  { value: '50', suffix: '+', label: 'Young speakers mentored' },
  { value: '5', suffix: '', label: 'Films, documentaries & music videos' },
];

export const about = {
  heading: 'Software by profession. Tamil by heart.',
  body:
    'Born near Chennai and raised across many towns of Tamil Nadu, I found my voice on school and college stages. After moving to the United States, that love for Tamil became nearly a decade of service — organizing literary events, coaching young speakers, founding a pattimanram platform and producing films.',
  facts: [
    { label: 'Role', value: 'Delivery Leader, Cognizant' },
    { label: 'Based in', value: 'San Francisco Bay Area, CA' },
    { label: 'Education', value: 'MS, Marquette University' },
    { label: 'Languages', value: 'Tamil, English' },
  ],
};

export const services = [
  { icon: 'monitor', title: 'Technology leadership', text: '20+ years delivering IT transformation in payments and healthcare.' },
  { icon: 'pen', title: 'Writing', text: 'Tamil short stories and poems; English books on Amazon.' },
  { icon: 'mic', title: 'Oratory & pattimanram', text: 'Debater, judge and founder of Nakeerar Pattimanra Kuzhu.' },
  { icon: 'film', title: 'Filmmaking', text: 'Producer of the feature film Kaayal; writer-director of Idaiveli.' },
  { icon: 'people', title: 'Community leadership', text: 'FeTNA, Sacramento and Bay Area Tamil associations, relief work.' },
  { icon: 'star', title: 'Creative direction', text: 'Promos, stage visuals and campaigns for Tamil conventions.' },
] as const;

export const professional = [
  { when: 'Present', title: 'Delivery Leader · Cognizant', text: 'Leading IT delivery for the payments industry (ACI Worldwide, Global Payments).', current: true },
  { when: 'Earlier', title: 'Healthcare technology', text: 'Programs for Kaiser, Blue Shield of California and UnitedHealth Group.' },
  { when: 'Education', title: 'MS, Marquette University', text: 'Milwaukee, Wisconsin' },
];

export const community = [
  { when: 'Founder', title: 'Nakeerar Pattimanra Kuzhu', text: 'A North American stage for Tamil oratory across generations.', current: true },
  { when: 'FeTNA · 5 years', title: 'Creative Head & literary committee', text: 'Creative Head, 36th convention (Sacramento); 45+ literary events; youth speech mentor.' },
  { when: '2016 – Present', title: 'Sacramento Tamil Mandram', text: 'Production, readers’ circle, e-magazine; silver jubilee team.' },
];

export const skills = [
  'IT transformation', 'Program delivery', 'Payments & healthcare', 'Team leadership',
  'Public speaking', 'Storytelling', 'Film production', 'Event creative direction',
];

// YouTube ids are used for thumbnails and links.
export const featuredFilm = {
  title: 'Kaayal',
  titleTamil: 'காயல்',
  badge: 'Feature film · Producer',
  youtubeId: 'DMfq81qwEvg',
  // Optional: '/images/kaayal.jpg' — put key art in public/images to replace the YouTube thumbnail.
  image: '',
  credits: [
    { label: 'Produced by', value: 'Jesu Sundaramaran · J Studios' },
    { label: 'Written & directed', value: 'Dhamayanthi' },
    { label: 'Starring', value: 'Lingesh, Gayathri, Anu Mol, Ramesh Tilak and others' },
    { label: 'Music', value: 'Justin Khenaniah' },
    { label: 'Audio label', value: 'Saregama Tamil' },
  ],
  links: [
    { label: 'Watch pre-trailer', href: 'https://www.youtube.com/watch?v=DMfq81qwEvg', primary: true },
    { label: '“Thenmozhi” song', href: 'https://www.youtube.com/watch?v=YBt310lGSx0', primary: false },
  ],
};

export const films: { title: string; titleTamil?: string; role: string; text: string; href: string; youtubeId?: string; image?: string }[] = [
  { title: 'Idaiveli', titleTamil: 'இடைவெளி', role: 'Short film · Writer & director', text: 'Two childhood friends rekindle a broken friendship over a phone call during lockdown.', youtubeId: '9PNthXpythk', href: 'https://www.youtube.com/watch?v=9PNthXpythk' },
  { title: 'En Nenjorama', role: 'Music video · Producer', text: 'A love song against caste divisions, directed by Dhamayanthi with music by Biju Sam.', youtubeId: '-WeapHS1kHo', href: 'https://www.youtube.com/watch?v=-WeapHS1kHo' },
  { title: 'Kumari Kandam & Marina Puratchi', role: 'Documentaries', text: 'Director-producer of Kumari Kandam; worldwide release of Marina Puratchi.', href: 'https://www.thejstudios.com' },
];

export type WorkCategory = 'Books' | 'Writing' | 'Pattimanram' | 'Film' | 'Community';

export const works: { cat: WorkCategory; title: string; sub: string; href: string; youtubeId?: string; image?: string }[] = [
  { cat: 'Film', title: 'Kaayal', sub: 'Feature film · Producer', href: 'https://www.youtube.com/watch?v=DMfq81qwEvg', youtubeId: 'DMfq81qwEvg' },
  { cat: 'Pattimanram', title: 'Nakeerar Pattimanra Kuzhu', sub: 'Founder · thenpk.org', href: 'https://thenpk.org' },
  { cat: 'Writing', title: 'நைனாவின் கடிதம்', sub: 'Short story · 2025', href: 'https://myezhuthu.link' },
  { cat: 'Film', title: 'Idaiveli', sub: 'Short film · Writer & director', href: 'https://www.youtube.com/watch?v=9PNthXpythk', youtubeId: '9PNthXpythk' },
  { cat: 'Community', title: '36th FeTNA Convention', sub: 'Creative Head · Sacramento', href: '#resume' },
  { cat: 'Pattimanram', title: 'FeTNA Special Pattimanram', sub: 'Debate · 1 h 25 min', href: 'https://www.youtube.com/watch?v=XrvG02otSK8', youtubeId: 'XrvG02otSK8' },
  { cat: 'Writing', title: 'சிப்பி', sub: 'Short story · 2022', href: 'https://myezhuthu.link' },
  { cat: 'Community', title: 'Tamil Koorum Thalaimurai', sub: 'Mentor to 50+ young speakers', href: '#resume' },
  { cat: 'Film', title: 'En Nenjorama', sub: 'Music video · Producer', href: 'https://www.youtube.com/watch?v=-WeapHS1kHo', youtubeId: '-WeapHS1kHo' },
  { cat: 'Film', title: 'Kumari Kandam', sub: 'Documentary · Director & producer', href: 'https://www.thejstudios.com' },
  { cat: 'Pattimanram', title: 'Anal Vina Mandram', sub: 'FeTNA forum · 1 h 58 min', href: 'https://www.youtube.com/watch?v=M5SoLpq9__Q', youtubeId: 'M5SoLpq9__Q' },
  { cat: 'Community', title: 'Harvard Tamil Chair', sub: 'Fundraising volunteer', href: '#resume' },
];

// Add real quotes here; the section stays hidden while this list is empty.
export const testimonials: { quote: string; name: string; role: string }[] = [];

export const links = {
  amazonAuthor: 'https://www.amazon.com/stores/Jesu-S-Augustine/author/B0HLZ3NYWH/allbooks',
  writings: 'https://myezhuthu.link',
  pattimanram: 'https://thenpk.org',
  studios: 'https://www.thejstudios.com',
};
