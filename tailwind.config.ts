import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        custom: {
          pri: "#033E8C",
          sec: "#0D0D0D",
          blue: "#13678A",
          light: "#ADD9D1",
          white: "#F7FAFA",
        },
        color: {
          purple: "#AC6AFF",
          yellow: "#FFC43D",
          red: "#FE5E41",
          green: "#3BB273",
          blue: "#4D9DE0",
        },

        stroke: {
          1: "#26242C",
        },
      },
    },
  },
  plugins: [],
};
export default config;
