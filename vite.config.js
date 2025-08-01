// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cyber-hacker-terminal/', // must include trailing slash
  plugins: [react()],
});
