# nnu

A static brochure site for **New Nepal Udyog** — cinema and auditorium seating,
Birgunj, Nepal.

One page: hero, cinema chairs, auditorium chairs, contact. Name and photograph
for each chair, nothing more. No CMS, no database, no 3D, no theme toggle.

This is deliberately *not* the main site. The full product — Payload CMS, the
hall-capacity planner, the 3D seat configurator, the enquiry system — lives in
`newnepaludyog.com.np` and needs a Node server, Postgres, sharp and a writable
uploads volume. None of those run on Cloudflare's edge runtime, which is why
this exists as a separate, deliberately smaller thing.

## Stack

Astro 5 + Tailwind CSS v4. **`astro build` emits zero JavaScript** — the output
is HTML, one stylesheet and the images. Nothing on the page needs a runtime, so
nothing ships one.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # -> dist/
pnpm preview    # serve dist/ locally
```

## Deploy

`dist/` is plain static output, so either Cloudflare target works and they are
interchangeable:

```bash
pnpm deploy:pages    # wrangler pages deploy dist
pnpm deploy:worker   # wrangler deploy  (static assets binding, see wrangler.jsonc)
```

Pages is the simpler of the two, and connecting the GitHub repo in the
Cloudflare dashboard (build command `pnpm build`, output directory `dist`) gets
you deploys on push without touching wrangler at all.

## Editing content

Everything a non-developer would want to change is in two files:

- `src/data/site.ts` — business name, tagline, phone, WhatsApp, email, address
- `src/data/chairs.ts` — the sections and the chairs in them

To add a chair: drop the image in `public/img/` and add an entry to the relevant
section. Images are served as-is, so resize before committing — the ones here
are ~800px wide WebP, 57–231 KB each.

## Deliberate omissions

No claim about certifications, acoustic measurements or installation counts
appears anywhere on this site. The main site keeps those CMS-driven so they
render only when there is real data behind them; the same rule applies here by
simply not making the claims.
