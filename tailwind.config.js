/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1600px',
        '3xl': '1920',
        "4xl": '2248px',
      },
      colors: {
        'white': '#ffffff',
        'black': '#121127',
        "red": "#D40C0C",
        "borderwhite": "#1211271f",
        "lightblack": "#12112766"
      },
    },
  },
  plugins: [],
}