import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const apiUrl = process.env.VITE_API_URL;
  
  const proxyConfig = apiUrl
    ? {
        '/api': {
          target: apiUrl,
          changeOrigin: true,
        },
      }
    : {};

  return {
    plugins: [react()],
    server: {
      proxy: proxyConfig,
    },
  };
});
