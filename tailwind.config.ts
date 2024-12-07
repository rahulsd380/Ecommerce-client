import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Inter : ["Inter", "sans-serif"],      // for body font
        Poppins : ["Poppins", "sans-serif"],  //for heading
        Sora : ["Sora", "sans-serif"],        // for headins
      },

      colors: {
        primary : {
          10 : "#29A56C",
          20:"#ebfaf3"

        },
        secondary:{
          10 :"#F3F4F6"
        },
        neutral : {
          10 : "#253D4E",  // for heading
          20 : "#4A4A4A",  // for body text
          30 : "#6b7280"   // header nav links 

        },
      },
      backgroundImage: {
        'hero-bg': "url('/assets/images/hero_bg.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
