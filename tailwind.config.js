/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
        'huros-bg-gold-1': "#B49A5A",
        'huros-bg-gray-1' : "#010100",
        'huros-h2' : "#B49A5B", //Deprecating
        'huros-1': "#B49A5B",
        'huros-2': "#0f1f2f",
        'huros-11': "#675733" 
      },
      rotate: {
        '135': '135deg',
      },
      height: {
        '512': '32rem'
      },
      backgroundImage: {
        // 'vault': "url('/public/backgrounds/bg-vault.jpg')",
      }
    },
  },
  plugins: [],
}
