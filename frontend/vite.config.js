import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		proxy: {
			'/api': {
				target: 'https://interactify-app-balp.vercel.app/',
				changeOrigin: true,
				secure: false,
			},
		},
	},
});
