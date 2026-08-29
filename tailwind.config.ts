import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0068E8",
          "blue-dark": "#0052BA",
          navy: "#002060",
          "navy-deep": "#001336",
          "blue-light": "#8EC6F5",
          "blue-tint": "#EAF3FE",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 24px -4px rgba(0, 32, 96, 0.12)",
        glow: "0 0 0 1px rgba(0, 104, 232, 0.15), 0 8px 30px -6px rgba(0, 104, 232, 0.35)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
