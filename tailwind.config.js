const colors = require("tailwindcss/colors.js");

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  preserveHtmlElements: false,
  important: true,
  options: {
    defaultExtractor: (content) => {
      const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, "")
      return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
    },
    whitelist: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!cursor-move).+-move$/,
      /^router-link(|-exact)-active$/
    ]
  },
  theme: {
    screens: {
      sm: { max: "560px" },
      md: { max: "769px" },
      tb: { max: "960px" }
    },
    colors: {
      transparent: "transparent",
      red: colors.rose,
      background: "#f5f5f5"
    },
    extend: {}
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
    extend: {}
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".flex-100": {
          flex: "0 0 100%"
        },
        ".flex-90": {
          flex: "0 0 90%"
        },
        ".flex-80": {
          flex: "0 0 80%"
        },
        ".flex-70": {
          flex: "0 0 70%"
        },
        ".flex-50": {
          flex: "0 0 50%"
        },
        ".flex-45": {
          flex: "0 0 45%"
        },
        ".flex-40": {
          flex: "0 0 40%"
        },
        ".flex-30": {
          flex: "0 0 30%"
        },
        ".flex-20": {
          flex: "0 0 20%"
        }
      }
      addUtilities(newUtilities, {
        variants: ["responsive", "hover"]
      })
    }
  ]
}