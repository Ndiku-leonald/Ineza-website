# Deployment

## Vercel preview

1. Confirm Node 20+ and run `npm ci`, `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`.
2. Import the repository into Vercel as a Vite project (`npm run build`, output `dist`) or run `vercel` for a preview. Do not attach the production domain.
3. Configure only approved environment variables and verify every route, headers, form delivery and responsive navigation on the preview.
4. Record the preview URL for stakeholder review.

After every production build, confirm that `dist/sitemap.xml` is valid XML and `dist/robots.txt` is plain text. On Vercel, both paths must be served from the generated filesystem and must not render the React application.

## Connecting ineza.org.ug later

Obtain content, contact, form-delivery, privacy, safeguarding, donation and final stakeholder approvals. Add and verify the domain in Vercel, copy the exact DNS records Vercel provides into the authoritative DNS provider, wait for TLS issuance, set the canonical production domain, redirect the alternate host, and rerun route, form, SEO and security checks. Do not make the DNS change before all approvals.

Set `www.ineza.org.ug` as the primary production domain in Vercel and configure Vercel's domain redirect from `ineza.org.ug` to `www.ineza.org.ug`. DNS and primary-domain selection are intentionally not controlled by this repository.
