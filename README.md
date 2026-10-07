# jesuworld.com

Personal site of Jesu Sundaramaran — built with [Astro](https://astro.build), deployed on [Vercel](https://vercel.com).
Static output, no server needed. Dark mode by default with a light-mode switch.

## Run it on your computer

You need [Node.js](https://nodejs.org) 18.20 or newer.

```bash
npm install
npm run dev        # open http://localhost:4321
npm run build      # production build into ./dist
```

## Before going live — checklist

All page content is in **`src/data/site.ts`**. Open it and update:

- [ ] `email` — replace `you@example.com` with your real address.
- [ ] `socials` — add your real YouTube channel URL.
- [ ] `formEndpoint` *(optional)* — create a free form at [formspree.io](https://formspree.io), paste the endpoint
      (e.g. `https://formspree.io/f/abcdwxyz`) and the contact form appears. Leave empty to show an email button.
- [ ] `cvUrl` *(optional)* — drop a PDF into `public/` (e.g. `public/Jesu-Sundaramaran-CV.pdf`) and set
      `cvUrl: '/Jesu-Sundaramaran-CV.pdf'` to show "Download CV" buttons.
- [ ] `testimonials` *(optional)* — add real quotes; the section stays hidden while the list is empty.
- [ ] Film posters *(optional)* — film cards use YouTube thumbnails. To use J Studios key art instead, put images
      in `public/images/` and set `image: '/images/kaayal.jpg'` on the film or work.

Photos live in `public/images/` (`portrait-mono.jpg` for the hero, `portrait-warm.jpg` for About,
`og.jpg` for link previews on WhatsApp/Facebook/LinkedIn).

## Adding a writing

Create one Markdown file in `src/content/writings/`:

```md
---
title: மழை
transliteration: Mazhai
lang: ta              # ta or en
category: Poem        # Short story | Poem | Essay | Cinema | Music
date: 2026-11-01
summary: One line that appears on the card.
url: https://myezhuthu.link/...   # optional — link out instead of hosting here
draft: false
---

Your text here (only used when `url` is not set; then it is published at /writings/<file-name>).
```

`sample-english-post.md` is a ready-made template for your first English piece — set `draft: false` to publish it.
The three newest writings appear on the home page automatically; all of them are on `/writings`,
with a Tamil / English filter.

## Deploy to Vercel

1. Create a new repository on [GitHub](https://github.com/new) (e.g. `jesuworld`) and push this folder:
   ```bash
   git init
   git add .
   git commit -m "New jesuworld.com"
   git branch -M main
   git remote add origin https://github.com/<your-username>/jesuworld.git
   git push -u origin main
   ```
2. In Vercel, click **Add New → Project**, import the repository. Vercel detects Astro automatically —
   keep the defaults and click **Deploy**.
3. **Domain:** Project → **Settings → Domains** → add `jesuworld.com` and `www.jesuworld.com`.
   Vercel shows the DNS records to set at your domain registrar (currently the domain points to Wix):
   - `A` record for `jesuworld.com` → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`
   (Use whatever values Vercel shows if they differ.) Once DNS updates, Vercel adds HTTPS automatically.
4. From then on, every `git push` redeploys the site.

> Tip: keep the Wix site live until the Vercel version is checked on your phone, then switch DNS.

## Project map

```
src/
  data/site.ts            ← all text, links, career, films
  content/writings/*.md   ← one file per story/poem
  components/             ← page sections (Hero, About, Resume, Films, Portfolio…)
  layouts/Base.astro      ← <head>, fonts, theme
  pages/                  ← index, /writings, /writings/[slug], 404
  styles/global.css       ← colour tokens for dark & light themes
public/images/            ← portraits and social preview image
```
