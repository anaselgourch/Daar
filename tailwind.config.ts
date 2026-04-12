import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Added src folder just in case
  ],
  theme: {
    extend: {
      fontFamily: {
        // This allows you to use font-playfair in Tailwind classes if needed
        playfair: ['var(--font-playfair)'], 
      },
      keyframes: {
        reveal: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        reveal: 'reveal 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards',
      }
    }
  },
  plugins: [],
};

export default config;