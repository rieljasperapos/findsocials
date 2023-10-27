/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '100': '100px',
        '120': '120px',
        '24': '24px',
        '159': '159px',
      },
      backgroundColor: {
        'custom-blue': '#8BD0FB',
      },
      height: {
        '568': '900px',
      }
    },
  },
  plugins: [],
}

