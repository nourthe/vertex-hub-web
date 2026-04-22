/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'vertex-blue': {
          DEFAULT: '#0B1929',
          light: '#112236',
          dark: '#060F1A',
        },
        'vertex-emerald': {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        'vertex-gold': {
          DEFAULT: '#B8860B',
          light: '#D4A017',
          dark: '#8B6914',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
