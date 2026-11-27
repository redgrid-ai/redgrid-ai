# Redgrid Software – Next.js site

App Router, TypeScript, no UI libraries.

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

- `app/page.tsx` – all page content (edit the arrays at the top)
- `app/globals.css` – design tokens (light/dark) and animations
- `app/components/` – Reveal (scroll-in), HeroGrid, ScrollProgress, ContactForm
- `app/api/contact/route.ts` – contact endpoint; currently logs enquiries.
  Connect an email provider or webhook where the TODO is.
