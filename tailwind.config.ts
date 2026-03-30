import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "var(--font-inter)", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#F3F0FF",
          100: "#EAE4FF",
          200: "#D5CAFF",
          300: "#B8A5FF",
          400: "#9575FF",
          500: "#7B52FA",
          600: "#6537EE",
          700: "#5427D6",
          800: "#4520B0",
          900: "#381E8C",
        },
      },
      boxShadow: {
        soft: "0 2px 20px -2px rgba(0,0,0,0.06), 0 4px 12px -2px rgba(0,0,0,0.04)",
        card: "0 1px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 8px rgba(0,0,0,0.04), 0 20px 48px rgba(0,0,0,0.10)",
        elevated: "0 8px 30px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
