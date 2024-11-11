import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
// import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vitejs.dev/config/
export default defineConfig({
    // plugins: [react(), svgr(), viteSingleFile()],
    plugins: [react(), svgr()],
    // base: '/qimen-webpage-version/',
});
