/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            robotslab:['Roboto Slab', 'serif'],
        },
        width: {
            '303': '303px',
            '443': '443px',
        },
        backgroundColor: {
            button: {
                100: '#AAFF03',
            },
        },

    },
  },
  plugins: [],
}

