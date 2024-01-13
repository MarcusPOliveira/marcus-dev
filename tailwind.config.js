/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-poppins)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/hero-bg.png')",
        'hero-image-dark': "url('/images/hero-bg-dark.png')",
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      boxShadow: {
        button: '0px 0px 40px 7px rgba(113, 69, 26, 0.8)',
      },
    },
  },
  plugins: [],
}