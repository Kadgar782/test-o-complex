import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        header: "#777777",
        main: "#222222",
        card: "#D9D9D9",
        text: "#000000",
        text_alt: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
export default config;
