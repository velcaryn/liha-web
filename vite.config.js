import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Netlify sets COMMIT_REF to the full SHA of the commit being built. Baked
// in as a build-time constant and appended to the OG image URL as a cache
// buster (see BUILD_ID usage in ProductPage.jsx): /images/og/*.jpg carries
// a 30-day Cache-Control (netlify.toml), and WhatsApp's own link-preview
// crawler caches a fetched preview independently of that header. Neither
// cache has any reason to expire just because the file underneath changed,
// so a static filename can serve a stale (or, as happened once, visibly
// broken) preview indefinitely. A value that changes on every deploy
// forces both caches to treat it as a new resource automatically.
const BUILD_ID = (process.env.COMMIT_REF || `local-${Date.now()}`).slice(0, 8);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __BUILD_ID__: JSON.stringify(BUILD_ID),
  },
  server: {
    port: 5173,
    host: true,
    allowedHosts: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
