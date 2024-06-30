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
            poppins:['Poppins', 'sans-serif'],
        },
        width: {
            '268': '268px',
            '303': '303px',
            '443': '443px',
            '705': '705px',
            '786': '786px',
        },
        height: {
            '660': '650px',
            '80': '80px',
            '834': '834px',
        },
        backgroundColor: {
            button: {
                100: '#AAFF03',
            },
        },
        colors: {
        palette: {
          1: '#000000',
          2: '#605858',
          3: '#757575',
          4: '#84cc16',
          5: '#aaff03',
          6: '#bef264',
          7: '#f7fee7',
          8: '#ffffff',
        }
      }
    },
  },
  plugins: [],
}

