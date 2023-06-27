/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
          tableau: {default: '#d2a9c2', hover: '#c99bb8'},
          telegram: {default: '#2aabee', hover: '#229fe0'},
          linkedin: {default: '#0077B7', hover: '#006da8'},
          github: {default:'#171515', hover: '#211e1e'}
      },
    },
  },
  plugins: [],
}
