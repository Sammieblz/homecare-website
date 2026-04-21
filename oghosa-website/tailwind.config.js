/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Source Sans 3", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      // Literal hex (keep in sync with src/styles/brand.css) so opacity modifiers
      // (e.g. bg-brand-900/95, ring-brand-600/20) resolve correctly; var(--brand-*) alone often does not.
      colors: {
        brand: {
          50: "#f2f7fc",
          100: "#dce9f7",
          200: "#b8d4ee",
          300: "#8bb8e0",
          400: "#6ba3d4",
          500: "#4e90c6",
          600: "#3d7aaf",
          700: "#2f5f8f",
          800: "#2a4e78",
          900: "#1e3654",
          950: "#152a40",
        },
      },
    },
  },
  plugins: [],
}


