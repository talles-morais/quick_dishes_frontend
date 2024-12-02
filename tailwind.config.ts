import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "login": "url('/images/bg_login.png')",
      },
      colors: {
        dark: "#0b0b0b", 
        second_dark: "#161616",     
        light: "##F4F4F5",
        second_light: "#D8D8D8",     
        primary: "#005670",
        bd_pending: "#CE9400",
        bd_preparing: "#7631BB",
        bd_prepared: "#250EB0",
        bd_in_route: "#00A9CE",
        bd_completed: "#00BB07",
        bd_canceled: "#A60C0C",
      }
    }
  },
  plugins: [],
};
export default config;
