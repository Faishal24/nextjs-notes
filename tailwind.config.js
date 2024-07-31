/** @type {import('tailwindcss').Config} */
module.exports = {
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
        transparent: "transparent",
        current: "currentColor",
        "primary": "#030712",
      },
      keyframes: {
        rotateIn: {
          '0%': { transform: 'rotate(-180deg)', opacity: '0' },
          '100%': { transform: 'rotate(0deg)', opacity: '1' },
        },
        rotateOut: {
          '0%': { transform: 'rotate(0deg)', opacity: '1' },
          '100%': { transform: 'rotate(180deg)', opacity: '0' },
        },
      },
      animation: {
        rotateIn: 'rotateIn 0.3s forwards',
        rotateOut: 'rotateOut 0.3s forwards',
      },
    },
  },
  plugins: [],
};
