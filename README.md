# Dehan Portfolio

A minimalist portfolio built with Next.js 16, TypeScript, and Tailwind CSS. The
app is configured as a static export so it can be deployed to GitHub Pages.

## Create The App

The project was scaffolded with:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias '@/*' --use-npm
```

## Customize

The project is configured for:

```text
https://dehanjangkaru.github.io/portfolio/
```

Update the example projects, skills, bio, and social links in `app/page.tsx` as
the portfolio grows.

The production build uses `basePath` and `assetPrefix` so Next.js assets work
when the site is hosted at `https://dehanjangkaru.github.io/portfolio/`.
Local development continues to run at `http://localhost:3000/`.

## Public Images

Files in `/public` must include the repository prefix when referenced in page
content. For example, after adding `/public/profile.jpg`, use:

```tsx
const basePath =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";

<img src={`${basePath}/profile.jpg`} alt="Portrait of Dehan" />
```

This avoids a request to `/profile.jpg` at the root of `github.io`, which would
return a 404 for a project site. The configured `images.unoptimized` setting
also makes `next/image` compatible with static GitHub Pages hosting.

## Develop

```bash
npm run dev
```

## Deploy

Push the repository to GitHub, then run:

```bash
npm run deploy
```

The `predeploy` script creates the `/out` static export and `gh-pages` publishes
it to the `gh-pages` branch. The deploy command adds `.nojekyll` so GitHub Pages
serves the generated `/_next` directory. In the repository settings, configure
GitHub Pages to deploy from the `gh-pages` branch and the `/ (root)` folder.
