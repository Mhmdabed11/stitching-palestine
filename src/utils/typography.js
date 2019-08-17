import Typography from "typography"
const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerFontFamily: [
    "Afta serif",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["300", "400", "500", "600", "700"],
    },
  ],
})
export default typography
