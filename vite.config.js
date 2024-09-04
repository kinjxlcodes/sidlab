// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://kinjxlcodes.github.io/sidlabs/',  // Replace with your repo name
});
