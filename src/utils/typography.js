import Typography from "typography"
const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Open Sans"],
  bodyFontFamily: ["Georgia", "serif"],
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["300", "400", "500", "600", "700"],
    },
  ],
})
export default typography
