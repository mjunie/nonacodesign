/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown_clair: {
          1: '#fffefc',
          2: '#f3d2c1',
          3: '#e39064',
          4: '#e08d63'
       
        },
      }
    },
  },
  plugins: [],
}

