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
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          1: "#0a0a0a",
          2: "#1a1a1a",
          3: "#2a2a2a",
          4: "#3a3a3a",
          5: "#4a4a4a",
        },
        grey: {
          30: "#b0b0b0",
          50: "#808080",
        },
        primary: "#057af0",
      },
      spacing: {
        "18": "4.5rem",
        "72": "18rem",
        "96": "24rem",
      },
    },
  },
  plugins: [],
};
export default config;
