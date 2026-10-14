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
  description?: string; // one or two short paragraphs; separate paragraphs with a blank line
  published?: string;   // e.g. 'March 2026'
  pages?: string;       // e.g. '180 pages'
  links: BookLink[];    // e.g. [{ label: 'Kindle', href: '…' }, { label: 'Paperback', href: '…' }]
};

export const series = {
  name: 'Chumma Iru',
  nameTamil: 'சும்மா இரு',
  tagline: 'A five-book series in English',
  // TODO: replace with your own series introduction (2–3 sentences).
  description: '',
  author: 'Jesu S. Augustine',
  amazonAuthor: 'https://www.amazon.com/stores/Jesu-S-Augustine/author/B0HLZ3NYWH/allbooks',
};

export const seriesBooks: Book[] = [
  { number: 1, title: '', subtitle: '', cover: '', description: '', published: '', pages: '', links: [] },
  { number: 2, title: '', subtitle: '', cover: '', description: '', published: '', pages: '', links: [] },
  { number: 3, title: '', subtitle: '', cover: '', description: '', published: '', pages: '', links: [] },
  { number: 4, title: '', subtitle: '', cover: '', description: '', published: '', pages: '', links: [] },
  { number: 5, title: '', subtitle: '', cover: '', description: '', published: '', pages: '', links: [] },
];

/** Books that are ready to show (have a title and at least one link). */
export const publishedBooks = seriesBooks.filter((b) => b.title.trim() && b.links.some((l) => l.href.trim()));
