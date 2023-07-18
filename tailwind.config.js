/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "2xl": "1380px",
      },
      colors: {
      "primary-100": "#006BEA",
      "primary-200": "#F4CD31",
      "primary-300": "#105369",
      "accent-100": "#03ACE2",
      "accent-200": "#F7AB59",
      "text-100": "#062028",
      "text-200": "#D8B7BD",
      "bg-100": "#D9C4FF",
      "bg-200": "#555a7d",
      "bg-300": "#70749",
    }
    },
  },
  plugins: [
  ],
}
