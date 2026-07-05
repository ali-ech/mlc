# Muntaha Law Consultants

Premium marketing website for **Muntaha Law Consultants** — a Pakistan-based corporate law firm specializing in pharmaceutical, nutraceutical, herbal, and homeopathic regulatory law.

## Stack

- **React 19** + **Vite**
- **Tailwind CSS v4** (CSS variables for monochrome palette)
- **Framer Motion** (scroll reveals, accordion)
- **Lucide React** (line icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/     # UI sections (Header, Hero, About, etc.)
├── data/           # Content, firm info, practice areas
├── hooks/          # useScrollHeader
├── App.tsx         # Page composition
├── main.tsx        # Entry point
└── index.css       # Design tokens + global styles
```

## Placeholders to Update Before Launch

- Founder portrait (currently stock placeholder)
- Verify contact details in `src/data/content.ts`
- Connect contact form to a backend or email service

## Design

Strict black-and-white monochrome palette. Playfair Display (serif headings) + Inter (body). Responsive breakpoints: 375px, 768px, 1024px, 1440px.
