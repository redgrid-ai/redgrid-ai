# Redgrid Software

Redgrid Software is a software consultancy that helps businesses design, build, modernize, and support the systems they rely on.

The company works across custom application development, cloud and DevOps, architecture reviews, API design, data platforms, mobile applications, and embedded engineering teams. Engagements follow a clear process: discover the goals and constraints, design an architecture and delivery plan, build in small visible increments, and hand the finished system over with documentation and training.

## This application

This repository contains the Redgrid Software marketing website, built with Next.js 15, React 19, and TypeScript. It uses the Next.js App Router and custom CSS, with no UI component library.

The site includes:

- A company overview and service information
- Typical customer engagements and use cases
- A four-stage delivery process
- An animated hero and scroll progress indicator
- A validated contact form

## Requirements

- Node.js 20 or newer
- npm

## Start the application

Install the dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. The development server reloads the page automatically when source files change.

## Production build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The production server is available at [http://localhost:3000](http://localhost:3000) unless a port is supplied through the `PORT` environment variable.

## Project structure

- `app/page.tsx` — page content and page-level sections
- `app/layout.tsx` — root layout, fonts, metadata, and viewport settings
- `app/globals.css` — design tokens, layout styles, themes, and animations
- `app/components/` — reusable page components
- `app/api/contact/route.ts` — contact form API endpoint
- `public/` — public static assets, when present

## Contact form

The contact form validates submissions and is exposed through `POST /api/contact`. It currently logs accepted enquiries to the server console and should be connected to an email provider, webhook, CRM, or other delivery service before production use.
