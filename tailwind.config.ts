import type { Config } from "tailwindcss";

const config: Config = {
  // 👇 ESTA ES LA LÍNEA MÁGICA
  // Le dice a Tailwind: "Solo activa el modo oscuro si ves la clase 'dark' en el HTML"
  darkMode: 'class', 

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // Mantienes tu plugin de tipografía
  ],
};
export default config;