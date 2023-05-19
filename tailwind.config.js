/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "dark-col-100": "#006466",
        "dark-col-200": "#065a60",
        "dark-col-300": "#0b525b",
        "dark-col-400": "#144552",
        "dark-col-500": "#1b3a4b",
        "dark-col-600": "#212f45",
        "dark-col-700": "#272640",
        "dark-col-800": "#312244",
        "dark-col-900": "#3e1f47",
        "dark-col-1000": "#4d194d",
      }
    },
  },
  plugins: [],
}
