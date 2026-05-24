/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./home.html",
    "./works.html",
    "./products.html",
    "./contact.html",
    "./tropical-paradise.html",
    "./arcadia.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#c8a97e",
        "on-primary": "#281800",
        "surface": "#121414",
        "background": "#121414",
        "on-surface": "#e3e2e2",
        "on-surface-variant": "#d1c5b7",
        "outline-variant": "#4e453b",
        "surface-container": "#1f2020",
        "surface-container-low": "#1b1c1c",
        "surface-container-lowest": "#0d0e0f",
        "surface-container-highest": "#343535"
      },
      borderRadius: {
        "DEFAULT": "0rem",
        "lg": "0rem",
        "xl": "0rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "32px",
        "fine-line": "1px",
        "section-gap": "128px",
        "margin-edge": "64px",
        "unit": "8px"
      },
      fontFamily: {
        "headline-lg-mobile": ["Bodoni Moda", "serif"],
        "body-lg": ["Hanken Grotesk", "sans-serif"],
        "headline-md": ["Bodoni Moda", "serif"],
        "headline-sm": ["Bodoni Moda", "serif"],
        "display-lg": ["Bodoni Moda", "serif"],
        "headline-lg": ["Bodoni Moda", "serif"],
        "label-caps": ["Hanken Grotesk", "sans-serif"],
        "body-md": ["Hanken Grotesk", "sans-serif"],
        "headline": ["Bodoni Moda", "serif"],
        "display": ["Bodoni Moda", "serif"],
        "body": ["Hanken Grotesk", "sans-serif"],
        "label": ["Hanken Grotesk", "sans-serif"]
      },
      fontSize: {
        "headline-lg-mobile": ["36px", { lineHeight: "1.2", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.8", letterSpacing: "0.01em", fontWeight: "300" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "400" }],
        "headline-sm": ["24px", { lineHeight: "1.4", fontWeight: "400" }],
        "display-lg": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "400" }],
        "headline-lg": ["48px", { lineHeight: "1.2", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1.2", letterSpacing: "0.2em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}

