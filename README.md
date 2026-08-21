# Liha Web

A modern, high-performance static website for Liha, built with Vite, React, and pre-configured for seamless Netlify deployment and custom domain hosting.

---

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Icons**: Lucide React
- **Hosting**: Netlify Edge
- **Configuration**: `netlify.toml` (SPA routing, immutable caching, strict security headers)

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The site runs locally at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
Static production output will be generated inside the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## Deploying to Netlify

### Step 1: Connect Repository
1. Log in to [Netlify](https://app.netlify.com).
2. Click **Add new site** > **Import an existing project**.
3. Select GitHub and choose `velcaryn/liha-web`.
4. Netlify will automatically detect settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.

### Step 2: Custom Domain Configuration
1. In your Netlify dashboard, navigate to **Site configuration** > **Domain management**.
2. Click **Add a domain** and enter your custom domain name.
3. In your DNS provider (Cloudflare, Route53, Namecheap, GoDaddy):
   - **Apex domain (`example.com`)**: Add an `A` record pointing to `75.2.60.5`
   - **Subdomain (`www.example.com`)**: Add a `CNAME` record pointing to your Netlify site URL (e.g. `your-site.netlify.app`)
4. Netlify will automatically verify DNS and issue a free Let's Encrypt SSL certificate.

---

## Project Structure

```
liha-web/
├── dist/             # Production build output (generated)
├── src/
│   ├── components/   # React UI sections (Navbar, Hero, Features, Showcase, Contact, Footer)
│   ├── App.jsx       # Root page layout
│   ├── index.css     # Design tokens and global styles
│   └── main.jsx      # Application entry point
├── index.html        # HTML shell with Google Fonts and SEO tags
├── netlify.toml      # Netlify edge headers, cache rules, and redirects
├── package.json      # Dependencies and scripts
└── vite.config.js    # Vite compiler configuration
```
