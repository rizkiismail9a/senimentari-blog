/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#292827",
        "dark-medium": "#0a0a0a",
        white: "#ffffff",
        blue: "#86a7db",
      },
    },
  },
  safelist: ["bg-green-300", "font-bold"],
  plugins: [require("daisyui")],
};
