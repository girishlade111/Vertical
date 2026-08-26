/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#000000",
        primary: "#050609",
        secondary: "#ffffff",
        tertiary: "#d9d9d9",
        lime: "#81ff28",
        blue: "#0000ee",
        strong: "#0066ff",
        lightgray: "#efefef",
        midgray: "#d9d9d9",
      },
      fontFamily: {
        sans: ["Inter", "Inter Placeholder", "sans-serif"],
        mono: ["Space Mono", "IBM Plex Mono", "monospace"],
      },
      borderRadius: { xs: "11px" },
    },
  },
  plugins: [],
}
