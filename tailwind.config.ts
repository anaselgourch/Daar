import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        daar: {
          dark: "#0a0a0a",
          gold: "#D4AF37",
          gray: "#1f1f1f",
        },
      },
    },
  },
  plugins: [],
};
export default config;