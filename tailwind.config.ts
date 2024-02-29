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
        "main-page-bg": "url(/img/main-page-bg.jpg)",
        "about": "url(/img/about.jpg)"
      },
    },
    fontFamily: {
      icons: ['boxicons']
    },
    width: {
      '400': '400px',
    },
    height: {
      '500': '500px'
    },
    borderRadius: {
      '50':'50px'
    },
    minWidth: {
      '1280': '1280px'
    }
  },
  plugins: [],
};
export default config;
