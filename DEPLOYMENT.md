# Deployment & DNS — somoskosmos.com

This project is configured for **somoskosmos.com**. Use this guide to connect your domain from Namecheap to your hosting (Netlify or Vercel).

---

## 1. Deploy the site

- **Netlify:** Connect the Git repo (e.g. GitHub), set build command `npm run build`, publish directory `dist`. Netlify will give you a URL like `random-name.netlify.app`.
- **Vercel:** Import the repo, keep default build/publish (Vite → `dist`). You’ll get something like `project.vercel.app`.

---

## 2. Add the custom domain in the host

- **Netlify:** Site settings → Domain management → Add custom domain → enter `somoskosmos.com` (and optionally `www.somoskosmos.com`).
- **Vercel:** Project → Settings → Domains → Add `somoskosmos.com` (and optionally `www.somoskosmos.com`).

The host will show the DNS records you need (see below).

---

## 3. Namecheap DNS

In Namecheap: **Domain List** → select **somoskosmos.com** → **Manage** → **Advanced DNS**.

### Option A: Netlify (recommended)

| Type  | Host | Value                    | TTL  |
|-------|------|--------------------------|------|
| **A**     | `@`  | `75.2.60.5`              | Automatic |
| **CNAME** | `www` | `random-name.netlify.app` | Automatic |

- Replace `random-name.netlify.app` with your real Netlify subdomain.
- For root (`somoskosmos.com`) Netlify uses a single A record; the IP above is Netlify’s load balancer (confirm in Netlify’s “Set up Netlify DNS” / “Verify DNS configuration”).

### Option B: Vercel

| Type  | Host | Value                | TTL  |
|-------|------|----------------------|------|
| **A**     | `@`  | `76.76.21.21`        | Automatic |
| **CNAME** | `www` | `cname.vercel-dns.com` | Automatic |

- Vercel may show different targets; use the values shown in the Vercel Domains panel for `somoskosmos.com` and `www.somoskosmos.com`.

### Redirect www → root (optional)

If you use **www** and want everyone on the non-www domain:

- **Netlify:** Domain settings → add `somoskosmos.com` as primary, enable “Redirect www to non-www” (or the opposite if you prefer www).
- **Vercel:** In Domains, set the primary domain and enable redirect from the other (e.g. www → apex).

---

## 4. SSL

- **Netlify** and **Vercel** issue free SSL (Let’s Encrypt) once DNS is pointing to them. It can take a few minutes to a few hours.
- In Namecheap, leave **SSL** as “Default” or “Full” if you have that option; the host handles the certificate.

---

## 5. After DNS propagates

1. Open **https://somoskosmos.com** and **https://www.somoskosmos.com** (if configured).
2. Confirm **https://somoskosmos.com/sitemap.xml** and **https://somoskosmos.com/robots.txt** load.
3. Add **favicon.ico** and **og-image.png** (e.g. 1200×630) to `public/` so the favicon and social previews use the Kosmos branding.

---

## Quick reference

- **Production URL:** https://somoskosmos.com  
- **Sitemap:** https://somoskosmos.com/sitemap.xml  
- **Robots:** https://somoskosmos.com/robots.txt  
- **Contact email in app:** hello@somoskosmos.com  
