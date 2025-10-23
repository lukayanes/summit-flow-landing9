# Summit Flow CRM — Founder Landing (GitHub Pages)

A single‑page landing site to funnel TikTok ad traffic and capture applications for Founder seats ($49/mo first 20).

## Quick Start (GitHub Pages)
1. Create a new repo on GitHub (public): `summit-flow-landing-site` (or any name).
2. Upload all files in this folder to the root of the repo.
3. In **Settings → Pages**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `/ (root)` → **Save**
4. Your site will appear at `https://<your-username>.github.io/<repo-name>/`.

## Configure the form
- **Option A (recommended):** Replace the `src` in the iframe under `#apply` with your LeadConnector form URL (GHL).
- **Option B (native form):** Uncomment the `<form>` in `index.html` and set `ACTION_URL` to your webhook/endpoint.

## TikTok Pixel
Replace `YOUR_TIKTOK_PIXEL_ID` in `index.html` with your actual pixel ID. In ads, use the landing URL and set conversion to form submit (use the success event from your form provider).

## Founder Counter
`script.js` has a simple non‑persistent counter using `localStorage`. For a real counter, back it with your CRM or a serverless function.

## Custom Domain
- Create a `CNAME` file with your domain (e.g., `go.summitflow.com`), then set a CNAME record pointing to `username.github.io`.

## Branding
- Replace `assets/logo.svg` and favicon with your brand assets.
- Tweak colors in `styles.css` under `:root`.
