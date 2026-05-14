import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // KEEP YOUR EXISTING COLORS HERE
      colors: {
        background: "#050505",
        surface: "#111111",
        border: "#222222",
        accent: {
          DEFAULT: "#3b82f6",
          glow: "rgba(59, 130, 246, 0.5)",
        },
      },
      // ADD THESE TWO BLOCKS:
      keyframes: {
        'text-gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'text-gradient': 'text-gradient 4s ease infinite',
      },
    },
  },
  plugins: [],
};

export default config;