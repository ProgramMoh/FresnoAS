/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"], // Cleaner, premium font
      },
      colors: {
        // The "Mercedes" Palette
        luxury: {
          black: "#050505",    // Almost pure black
          charcoal: "#1a1a1a", // Soft black for footers/cards
          silver: "#e5e7eb",   // Metallic accents
          white: "#ffffff",
        }
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem', // Sharper corners (Mercedes style)
        'md': '0.375rem',
        'lg': '0.5rem',
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      // Add this animation utility
      animation: {
        "spin-slow": "spin-slow 3s linear infinite", // Adjust '3s' to make it faster/slower
      }
    },
  },
  plugins: [],
};