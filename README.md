# Burcu Payidarol — portfolio

Coded recreation of [burcupayidarol.com](https://burcupayidarol.com/) as a Next.js app. Same visual system, published copy, and project mockups — without leftover `/projects/*` CMS pages or broken `/about` and `/work` 404s.

## Pages

- `/` — home, work, about block, get in touch
- `/about-me` — bio, resume, experience
- `/neurocycle`, `/splyt`, `/despark` — case studies
- `/about` → `/about-me`
- `/work` → `/#work`

Primary CTAs: **start a project** jumps to `#start-a-project` (mailto: `payidarol.burcu@gmail.com`). Resume downloads from `/burcu-payidarol-resume.pdf`.

## Run locally

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:4327](http://127.0.0.1:4327)

```bash
npm run build
npm start
```

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui.
