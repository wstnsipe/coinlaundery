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
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem"  }],
      },
      colors: {
        brand: {
          blue:  "#2563EB",
          navy:  "#0F172A",
          green: "#16A34A",
        },
      },
      boxShadow: {
        "card":      "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.05)",
        "card-md":   "0 4px 16px -2px rgb(0 0 0 / 0.08), 0 2px 6px -2px rgb(0 0 0 / 0.05)",
        "card-lg":   "0 12px 32px -4px rgb(0 0 0 / 0.10), 0 4px 12px -4px rgb(0 0 0 / 0.06)",
        "blue":      "0 4px 14px -2px rgb(37 99 235 / 0.40)",
        "blue-lg":   "0 8px 28px -4px rgb(37 99 235 / 0.50)",
        "dark":      "0 20px 60px -10px rgb(0 0 0 / 0.18)",
      },
      transitionDuration: {
        "250": "250ms",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        pulseRing: {
          "0%, 100%": { transform: "scale(1)", opacity: "1"   },
          "50%":       { transform: "scale(1.5)", opacity: "0" },
        },
      },
      animation: {
        "fade-up":   "fadeUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "pulse-ring":"pulseRing 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
