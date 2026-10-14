// ─────────────────────────────────────────────────────────────
//  The "Chumma Iru" book series — powers /books and the home page.
//
//  To add a book: fill in its entry below. A book appears on the site
//  only once it has a `title` AND at least one Amazon link, so empty
//  slots never show up half-finished.
//
//  Covers: save each cover as public/images/books/chumma-iru-1.jpg … -5.jpg
//  (portrait, about 1000 × 1500 px) and set `cover` to that path.
// ─────────────────────────────────────────────────────────────

export type BookLink = { label: string; href: string };

export type Book = {
  number: number;
  title: string;
  subtitle?: string;
  cover?: string;
  hook?: string;        // the bold opening question, shown under the title
  description?: string; // HTML (from your KDP description); paragraphs, lists, bold and italics are styled
  published?: string;   // e.g. 'October 2026'
  pages?: string;       // e.g. '180 pages'
  links: BookLink[];    // Amazon links, first one is the main "Buy" button
  comingSoon?: boolean; // shows the book with a "Coming soon" label and no buy buttons
};

const amazon = (asin: string) => `https://www.amazon.com/dp/${asin}`;

export const series = {
  name: 'The Art of Chumma Iru',
  nameTamil: 'சும்மா இரு',
  tagline: 'A five-book series in English',
  hook: 'Two Tamil words. Five books. One gentle path to inner peace.',
  // Full series description (HTML), shown in "About the series".
  description: `
<p>"Chumma Iru" is a Tamil phrase meaning "Just Be." Spoken by poets and sages for centuries, it is a simple invitation to stop striving and rest in awareness. <i>The Art of Chumma Iru</i> series turns that invitation into a practical journey for modern life.</p>
<p>Each book explores one step of the path:</p>
<ul>
<li><b>The Art of Just Being:</b> finding stillness and presence in a hurried world</li>
<li><b>The Art of Letting Go:</b> releasing control, fear, and expectation</li>
<li><b>The Art of Clarity:</b> finding focus and purpose in a noisy world</li>
<li><b>The Art of Grace:</b> embracing compassion, forgiveness, and emotional balance</li>
<li><b>The Art of Becoming:</b> honoring growth, change, and self-acceptance</li>
</ul>
<p>Every book weaves together stories from Tamil and world traditions, examples from everyday life, hands-on practices, reflection questions, and a seven-day guide. Each can be read on its own, or in order as a complete journey from stillness to becoming.</p>`,
  author: 'Jesu S. Augustine',
  // Shown in "About the author" on /books (third person, from the Amazon author profile).
  authorBio: [
    'Jesu S Augustine is a writer and technology leader whose work brings together technology, philosophy, literature, history, science, and spirituality. With master’s degrees in both the arts and the sciences, he writes with a lifelong curiosity about how people understand the world and themselves.',
    'His nonfiction explores where ancient wisdom meets modern life. The Art of Chumma Iru series draws on the Tamil invitation “Chumma Iru,” meaning “Just Be,” to offer gentle, practical paths toward inner peace — five books that move from stillness to becoming.',
    'His broader writing includes reflective nonfiction and novels inspired by mythology, history, and human psychology, written for readers who stay curious about the inner life and the questions that resist easy answers.',
  ],
  amazonAuthor: 'https://www.amazon.com/stores/Jesu-S-Augustine/author/B0HLZ3NYWH/allbooks',
};

export const seriesBooks: Book[] = [
  {
    number: 1,
    title: 'The Art of Just Being',
    subtitle: 'A Journey Toward Stillness, Awareness, and Inner Peace',
    cover: '/images/books/chumma-iru-1.jpg',
    hook: 'What would happen if you stopped rushing, just for a moment, and simply listened?',
    description: `
<p>We live in a world defined by motion. We wear exhaustion like a badge of honor and mistake busyness for a meaningful life. Beneath the noise, many of us carry a quiet hunger for peace.</p>
<p>In this first book of <i>The Art of Chumma Iru</i> series, Jesu S Augustine draws on the Tamil invitation "Chumma Iru," meaning "Just Be," to offer a gentle, practical path back to stillness.</p>
<p><b>Across thirty short chapters in five parts, you will learn to:</b></p>
<ul>
<li>Recognize the habit of hurry and the fear of silence beneath it</li>
<li>Return to the present through the breath, the body, and one thing at a time</li>
<li>Clear the clutter of mind and heart</li>
<li>Build an inner sanctuary with boundaries, solitude, and self-gentleness</li>
<li>Carry stillness into your work, relationships, and everyday choices</li>
</ul>
<p>Every chapter includes a story, a hands-on practice, and questions for reflection, along with a seven-day guide to begin living the practice.</p>
<p>Stillness is not a luxury. It is a skill, and it begins with the quiet moment you choose to pay attention.</p>`,
    published: 'October 2026',
    links: [
      { label: 'Kindle', href: amazon('B0HLYXC836') },
      { label: 'Paperback', href: amazon('B0HLYYJD3N') },
    ],
  },
  {
    number: 2,
    title: 'The Art of Letting Go',
    subtitle: 'Releasing control, fear, and expectations to discover freedom in surrender',
    cover: '/images/books/chumma-iru-2.jpg',
    hook: 'What if letting go is not the end of something, but the soft beginning of freedom?',
    description: `
<p>We hold on to control, to the way things used to be, to expectations of ourselves and others, and to old hurts we cannot quite put down. We hold on because we are afraid. And slowly, the holding becomes the heaviest thing we carry.</p>
<p>In this second book of <i>The Art of Chumma Iru</i> series, Jesu S Augustine turns to the gentle, courageous work of release, offering a warm, practical path out of clinging and into peace.</p>
<p><b>Across fifteen chapters in four parts, you will learn to:</b></p>
<ul>
<li>Recognize the fear that hides beneath control</li>
<li>Meet change and loss with acceptance rather than resistance</li>
<li>Release the cluttered mind, the tense body, and old resentments</li>
<li>Discover the lightness and calm that remain once the weight is set down</li>
</ul>
<p>Every chapter includes a story, a hands-on practice, and questions for reflection, along with a seven-day guide to carry the practice into your week.</p>
<p>You do not need to be a meditator or a monk. You only need to be tired of carrying more than you have to.</p>`,
    published: 'October 2026',
    links: [
      { label: 'Kindle', href: amazon('B0HLYTFQ63') },
      { label: 'Paperback', href: amazon('B0HLZC6B9F') },
    ],
  },
  {
    number: 3,
    title: 'The Art of Clarity',
    subtitle: 'Finding focus and purpose in a noisy world',
    cover: '/images/books/chumma-iru-3.jpg',
    hook: 'What would you see if the noise grew quiet?',
    description: `
<p>We fill our days with messages, tasks, and other people's opinions, and we call it living. Beneath the hum, a quieter question waits: is this all there is?</p>
<p>In this third book of <i>The Art of Chumma Iru</i> series, Jesu S Augustine guides you out of the fog of distraction and into clear seeing.</p>
<p><b>Across fifteen chapters in four parts, you will learn to:</b></p>
<ul>
<li>Notice where your attention leaks away, and gather it again</li>
<li>Hear your own voice beneath the noise of other people's expectations</li>
<li>Choose what matters most, and focus without strain</li>
<li>Make decisions from stillness rather than fear</li>
<li>Walk steadily, even when the road ahead is uncertain</li>
</ul>
<p>Every chapter includes a story, a hands-on practice, and questions for reflection, along with a seven-day guide to carry clarity into your week.</p>
<p>Clarity is not something you must create. It is the clear sky behind the clouds.</p>`,
    published: 'October 2026',
    links: [
      { label: 'Kindle', href: amazon('B0HMNHL12F') },
      { label: 'Paperback', href: amazon('B0HMNFFPBM') },
    ],
  },
  {
    number: 4,
    title: 'The Art of Grace',
    subtitle: 'Embracing compassion, forgiveness, and emotional balance in everyday life',
    cover: '/images/books/chumma-iru-4.jpg',
    hook: 'What if your greatest strength is a gentle one?',
    description: `
<p>We are taught to defend, to win, and to be right. Yet beneath our armor, most of us long for something softer: to be understood, to be forgiven, and to meet others with an open heart.</p>
<p>In this fourth book of <i>The Art of Chumma Iru</i> series, Jesu S Augustine explores grace as a living practice, rooted in Tamil wisdom and everyday life.</p>
<p><b>Across sixteen chapters in four parts, you will learn to:</b></p>
<ul>
<li>Meet your own mistakes with kindness instead of criticism</li>
<li>See the wound beneath another person's harsh words</li>
<li>Forgive, repair, and stay kind in conflict</li>
<li>Set boundaries that protect love rather than end it</li>
<li>Let the people you love become themselves</li>
</ul>
<p>Every chapter includes a story, a hands-on practice, and questions for reflection, along with a seven-day guide to carry grace into your week.</p>
<p>Grace is not a lesson to be learned. It is a truth to be remembered.</p>`,
    published: 'October 2026',
    links: [
      { label: 'Kindle', href: amazon('B0HMNKNW77') },
      { label: 'Paperback', href: amazon('B0HMNKVKZ9') },
    ],
  },
  {
    number: 5,
    title: 'The Art of Becoming',
    subtitle: 'Honoring Growth, Change, and Self-Acceptance as Paths to Wholeness',
    cover: '/images/books/chumma-iru-5.jpg',
    hook: 'What if you are not behind, but unfolding?',
    description: `
<p>We spend our lives trying to arrive: at a finished self, a settled life, a version of us that is complete. Yet life keeps moving, and so do we.</p>
<p>In this fifth and final book of <i>The Art of Chumma Iru</i> series, Jesu S Augustine explores growth without struggle, and the quiet art of becoming who you already are.</p>
<p><b>Across sixteen chapters in four parts, you will learn to:</b></p>
<ul>
<li>Honor the seasons of change within you</li>
<li>Grow by tending conditions rather than forcing results</li>
<li>Change without losing the people you love</li>
<li>Let old shells fall away with gratitude</li>
<li>Find stillness at the heart of becoming</li>
</ul>
<p>Every chapter includes a story, a hands-on practice, and questions for reflection, along with a seven-day guide to carry the practice into your week.</p>
<p>You are not a finished thing. You are a river, always becoming.</p>`,
    // Paperback is still a draft in KDP. When it goes live, add its link
    // (e.g. { label: 'Paperback', href: amazon('B0XXXXXXXX') }) and delete `comingSoon`.
    links: [],
    comingSoon: true,
  },
];

/** Plain-text version of an HTML description (for search engines). */
export const plain = (html = '') => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

/** Books ready to show: a title plus at least one Amazon link, or marked coming soon. */
export const publishedBooks = seriesBooks.filter(
  (b) => b.title.trim() && (b.comingSoon || b.links.some((l) => l.href.trim())),
);
/** Books that can be bought right now. */
export const availableBooks = publishedBooks.filter((b) => !b.comingSoon);
