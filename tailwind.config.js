/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kaiti: 'kaiti',
        lishu: 'liShu',
      },
      colors: {
        // 基本配色
        bglight: '#F7F3E8',
        bgdark: '#F0E8D6',
        red: '#9E2E22',
        red: '#9E2E22',
        border: '#886A36',
        text: '#362420',

        // 五行颜色
        jin: '#E79822',
        mu: '#2E905B',
        shui: '#237ED8',
        huo: '#E94C43',
        tu: '#866436',
      }
    },
  },
  plugins: [],
}

