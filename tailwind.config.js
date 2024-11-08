/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

export default {
    content: { files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], extract },
    theme: {
        // screens: {
        //     // tablet: '640px',
        //     // laptop: '1024px',
        //     // desktop: '1280px',
        //     // => @media (min-width: 1280px) { ... }
        //
        // },
        screens,
        fontSize,
        extend: {
            screens: {
                m: '22.5rem', // 360px
                widerM: '33.125rem', // 440px
            },
            fontFamily: {
                kaiti: 'kaiti',
            },
            colors: {
                // 基本配色
                bglight: '#F7F3E8',
                bgdark: '#F0E8D6',
                red: '#9E2E22',
                red: '#9E2E22',
                border: '#886A36',
                text: '#362420',
                highlight: '#FFE504', // 新创
                // highlight: '#FBEB5F', // 原版

                // 五行颜色
                jin: '#E79822',
                mu: '#2E905B',
                shui: '#237ED8',
                huo: '#E94C43',
                tu: '#866436',
            },
        },
    },
    plugins: [fluid],
};
