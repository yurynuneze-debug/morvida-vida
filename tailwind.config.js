/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        background: "hsl(var(--background))",
        card: "hsl(var(--card))"
      },
      fontFamily: {
        display: ["Nunito", "sans-serif"],
        body: ["DM Sans", "sans-serif"]
      }
    }
  },
  plugins: []
};
