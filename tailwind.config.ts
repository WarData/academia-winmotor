import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17211f",
        surface: "#f5f7f4",
        panel: "#ffffff",
        line: "#dfe6df",
        accent: "#0f766e"
      },
      boxShadow: {
        soft: "0 12px 40px rgba(23, 33, 31, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
