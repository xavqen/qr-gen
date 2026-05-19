# QR Code Generator - QRGen

A modern, production-ready QR Code Generator built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **6 QR Code Types**: URL, WiFi, WhatsApp, UPI Payment, Text, Email
- **Custom Styling**: Change foreground/background colors
- **Logo Embedding**: Add your brand logo inside QR codes
- **High Resolution**: Download up to 1000x1000px PNG
- **Error Correction**: 4 levels (L, M, Q, H)
- **Dark/Light Mode**: Automatic theme switching
- **SEO Optimized**: Dynamic metadata, sitemap, structured data
- **Adsense Ready**: Ad slots and affiliate blocks included
- **Mobile Responsive**: Works perfectly on all devices
- **Glassmorphism UI**: Modern SaaS design aesthetic

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- Framer Motion
- QRCode.js
- Canvas API (for logo overlay)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env.local` and update the values:

```bash
cp .env.example .env.local
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --build
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Project Structure

```
qr-generator/
├── app/
│   ├── api/qr/           # QR generation API
│   ├── generate/         # Generate QR page
│   ├── about/            # About page
│   ├── blog/             # Blog page
│   ├── contact/          # Contact page
│   ├── privacy/          # Privacy policy
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots.txt
├── components/
│   ├── ui/               # Shadcn UI components
│   ├── qr-types/         # QR input forms
│   ├── qr-generator.tsx  # Main generator
│   ├── navbar.tsx        # Navigation
│   ├── footer.tsx        # Footer
│   ├── ad-section.tsx    # Ad placeholder
│   └── affiliate-block.tsx
├── lib/
│   └── utils.ts          # Utilities
├── types/
│   └── qr.ts             # TypeScript types
├── public/               # Static assets
└── package.json
```

## SEO Configuration

1. Update `NEXT_PUBLIC_APP_URL` in `.env.local`
2. Add your Google Analytics ID: `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`
3. Add Google AdSense client ID: `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
4. Update verification code in `app/layout.tsx`

## Monetization

- **AdSense**: Replace `AdSection` component with actual AdSense code
- **Affiliate**: Update links in `AffiliateBlock` component
- **Sponsored**: Add sponsored content sections

## License

MIT License - Free for personal and commercial use.
