// ─────────────────────────────────────────────────────────────
//  All page content lives here. Edit this file to update the site.
//  Writings live in src/content/writings (one Markdown file each).
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Jesu Sundaramaran',
  nameTamil: 'ஜேசு சுந்தரமாறன்',
  roles: ['Technology Leader', 'Writer', 'Orator', 'Filmmaker'],
  intro:
    'Technology leader with 20+ years in IT, based in the San Francisco Bay Area — and author of The Art of Chumma Iru. Beyond work, I champion Tamil language and culture through writing, the pattimanram stage, film and community service.',
  description:
    'Jesu Sundaramaran — technology leader, Tamil writer, pattimanram orator and film producer based in the San Francisco Bay Area.',
  email: 'jesuworld@gmail.com',
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
  heading: 'Software is my profession. Tamil is my calling.',
  paragraphs: [
    'By profession, I am a technology leader with more than 20 years in IT. By calling, I am a writer, filmmaker and Tamil orator, drawn to the places where technology, philosophy, literature, history, science and spirituality meet. With master’s degrees in both the arts and the sciences, I write from a lifelong curiosity about how people understand the world and themselves.',
    'Born near Chennai and raised across many towns of Tamil Nadu, I found my voice on school and college stages. In the United States, that love for Tamil became nearly a decade of service — organizing literary events, coaching young Tamil speakers, founding Nakeerar Pattimanra Kuzhu, and producing films through J Studios.',
    'My nonfiction explores where ancient wisdom meets modern life. The Art of Chumma Iru, a five-book series in English, draws on the Tamil invitation “Chumma Iru” — “Just Be” — to offer gentle, practical paths toward inner peace, from stillness to becoming. Beyond it, I write reflective nonfiction and novels inspired by mythology, history and human psychology.',
  ],
  cta: { label: 'Explore The Art of Chumma Iru', href: '/books' },
  facts: [
    { label: 'Profession', value: 'Technology Leader, Cognizant' },
    { label: 'Based in', value: 'San Francisco Bay Area, CA' },
    { label: 'Education', value: 'Master’s degrees in arts and sciences' },
    { label: 'Latest work', value: 'The Art of Chumma Iru (5 books)' },
  ],
};

export const services = [
  { icon: 'monitor', title: 'Technology leadership', text: '20+ years delivering IT transformation in payments and healthcare.' },
  { icon: 'pen', title: 'Writing', text: 'Tamil stories and poems; The Art of Chumma Iru series in English.' },
  { icon: 'mic', title: 'Oratory & pattimanram', text: 'Debater, judge and founder of Nakeerar Pattimanra Kuzhu.' },
  { icon: 'film', title: 'Filmmaking', text: 'Producer of the feature film Kaayal; writer-director of Idaiveli.' },
  { icon: 'people', title: 'Community leadership', text: 'FeTNA, Sacramento and Bay Area Tamil associations, relief work.' },
  { icon: 'star', title: 'Creative direction', text: 'Promos, stage visuals and campaigns for Tamil conventions.' },
] as const;

export const professional = [
  { when: 'Present', title: 'Technology Leader · Cognizant', text: 'Leading IT delivery for the payments industry (ACI Worldwide, Global Payments).', current: true },
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
