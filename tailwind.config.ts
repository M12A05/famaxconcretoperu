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
        primary: {
          DEFAULT: "#8B0000",
          hover: "#6B0000",
        },
        background: {
          DEFAULT: "#F5F5F0",
          white: "#FFFFFF",
          dark: "#1A1A1A",
        },
        text: {
          DEFAULT: "#1A1A1A",
          muted: "#555555",
        },
        border: {
          DEFAULT: "#E0E0E0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
