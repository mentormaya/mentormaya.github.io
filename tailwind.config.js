/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */

const withOpacity = color => {
  return opacity => {
    if (opacity) {
      return `rgba(var(--${color}), ${opacity})`;
    }
    return `rgb(var(--${color}))`;
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
      textColor: {
        skin: {
          white: withOpacity("color-text-white"),
          dark: withOpacity("color-text-dark"),
          primary: withOpacity("color-text-primary"),
          "primary-muted": withOpacity("color-text-primary-muted"),
          secondary: withOpacity("color-text-secondary"),
          "secondary-muted": withOpacity("color-text-secondary-muted"),
          success: withOpacity("color-text-success"),
          danger: withOpacity("color-text-danger"),
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
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
