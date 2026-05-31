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
          DEFAULT: "#6B8F3C",
          light: "#8BB455",
          dark: "#4A5520",
          50: "#f4f7ed",
          100: "#e6efd6",
          200: "#cee0b1",
          300: "#aeca82",
          400: "#8BB455",
          500: "#6B8F3C",
          600: "#54722E",
          700: "#415727",
          800: "#364724",
          900: "#2f3d22",
        },
        accent: {
          DEFAULT: "#D4A843",
          light: "#E4C36E",
          dark: "#B88D2E",
          50: "#fdf8eb",
          100: "#f9ecc8",
          200: "#f3d88d",
          300: "#ecbf52",
          400: "#D4A843",
          500: "#d49a2b",
          600: "#bc7a20",
          700: "#9c5a1d",
          800: "#80471f",
          900: "#6a3b1e",
        },
        dark: {
          DEFAULT: "#0A0F1C",
          50: "#1A2038",
          100: "#151B30",
          200: "#111827",
          300: "#0E1322",
          400: "#0A0F1C",
          500: "#070B15",
          600: "#05080F",
          700: "#030509",
          800: "#010204",
          900: "#000000",
        },
        surface: {
          DEFAULT: "#111827",
          light: "#1F2937",
          lighter: "#374151",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "gradient": "gradient 8s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(107, 143, 60, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(107, 143, 60, 0.6)" },
        },
      },
      backgroundSize: {
        "300%": "300% 300%",
      },
    },
  },
  plugins: [],
};

export default config;
