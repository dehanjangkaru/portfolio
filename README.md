# Dehan Portfolio

A minimalist portfolio built with Next.js 16, TypeScript, and Tailwind CSS. The
app is configured as a static export so it can be deployed to GitHub Pages.

## Create The App

The project was scaffolded with:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias '@/*' --use-npm
```

## Customize

Before publishing:

1. Replace `YOUR_REPO_NAME` in `next.config.mjs` with the GitHub repository name.
2. Replace each `YOUR_USERNAME` placeholder in `app/page.tsx`.
3. Update the example projects, skills, bio, and social links in `app/page.tsx`.

The production build uses `basePath` and `assetPrefix` so Next.js assets work
when the site is hosted at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.
Local development continues to run at `http://localhost:3000/`.

## Public Images

Files in `/public` must include the repository prefix when referenced in page
content. For example, after adding `/public/profile.jpg`, use:

```tsx
const basePath =
  process.env.NODE_ENV === "production" ? "/YOUR_REPO_NAME" : "";

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
it to the `gh-pages` branch. In the repository settings, configure GitHub Pages
to deploy from the `gh-pages` branch and the `/ (root)` folder.
