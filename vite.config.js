import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsx: 'react-jsx',
      include: '**/*.{js,jsx,ts,tsx}', // This allows JSX in .js files too
    }),
  ],
  server: {
    port: 3000,
    host: true,
    allowedHosts: 'all',
  },
});
