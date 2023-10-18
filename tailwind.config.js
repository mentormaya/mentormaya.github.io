/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */

const withOpacity = color => {
  return ({ opacityValue }) => {
    if (!opacityValue) {
      return `var(--${color})`;
    }
    return `rgba(var(--${color}), ${opacityValue})`;
  };
};

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        white: withOpacity("color-white"),
        black: withOpacity("color-black"),
        primary: {
          light: withOpacity("color-primary-light"),
          "fill-light": withOpacity("color-primary-fill-light"),
          "fill-light-muted": withOpacity("color-primary-fill-light-muted"),
          DEFAULT: withOpacity("color-primary-light"),
          dark: withOpacity("color-primary-dark"),
          "fill-dark": withOpacity("color-primary-fill-dark"),
          "fill-dark-muted": withOpacity("color-primary-fill-dark-muted"),
        },
        secondary: {
          light: withOpacity("color-secondary-light"),
          "fill-light": withOpacity("color-secondary-fill-light"),
          "fill-light-muted": withOpacity("color-secondary-fill-light-muted"),
          DEFAULT: withOpacity("color-secondary-light"),
          dark: withOpacity("color-secondary-dark"),
          "fill-dark": withOpacity("color-secondary-fill-dark"),
        },
        fill: {
          light: withOpacity("color-fill-light"),
          DEFAULT: withOpacity("color-fill-light"),
          dark: withOpacity("color-fill-dark"),
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - 4rem + 3rem))" },
        },
        "infinite-scroll-reverse": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(50%)" },
        },
        swing: {
          from: { transform: "rotate(10deg)" },
          to: { transform: "rotate(-10deg)" },
        },
        swinghair: {
          from: { transform: "rotate(6deg)" },
          to: { transform: "rotate(-6deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll-xslow": "infinite-scroll 90s linear infinite",
        "infinite-scroll-xslow-reverse":
          "infinite-scroll-reverse 90s linear infinite",
        "infinite-scroll-slow": "infinite-scroll 40s linear infinite",
        "infinite-scroll-slow-reverse":
          "infinite-scroll-reverse 40s linear infinite",
        "infinite-scroll-fast": "infinite-scroll 25s linear infinite",
        "infinite-scroll-fast-reverse":
          "infinite-scroll-reverse 25s linear infinite",
        "infinite-scroll-xfast": "infinite-scroll 15s linear infinite",
        "infinite-scroll-xfast-reverse":
          "infinite-scroll-reverse 15s linear infinite",
        "infinite-swing": "swing 1.3s ease-in-out infinite alternate",
        "infinite-swinghair": "swinghair 1.3s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
