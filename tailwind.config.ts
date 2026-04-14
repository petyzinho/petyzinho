import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        isa: {
          pink: {
            50: "#FFF0F8",
            100: "#FFD6EE",
            200: "#FFB3DE",
            300: "#FF80C8",
            400: "#F0439E",
            500: "#E91E8C",
            600: "#C4167A",
            700: "#9C0F61",
          },
          teal: {
            50: "#E0F7FA",
            100: "#B2EBF2",
            200: "#80DEEA",
            300: "#4DD0E1",
            400: "#26C6DA",
            500: "#00BCD4",
            600: "#00ACC1",
            700: "#0097A7",
          },
          dark: "#0F2A3F",
          white: "#FFFFFF",
          gray: {
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            400: "#94A3B8",
            600: "#475569",
            800: "#1E293B",
            900: "#0F172A",
          },
        },
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        button: "8px",
        pill: "9999px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(15,23,42,0.06), 0 0 1px rgba(15,23,42,0.04)",
        "card-hover": "0 8px 24px rgba(15,23,42,0.12)",
        header: "0 1px 3px rgba(15,23,42,0.08)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
