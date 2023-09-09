/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // TODO refactor this
    colors: {
      page: '#f8f8f8',
      'page-content': '#f3f3f3',
      'input-border': '#d5d5d5',
    },
    extend: {},
  },
  plugins: [],
}
