import Typography from "typography"
import Theme from "typography-theme-moraga"

Theme.googleFonts.push({
// M PLUS Rounded 1cを利用する
  name: "M+PLUS+Rounded+1c",
  styles: ["400"],
})
Theme.bodyFontFamily = ["M PLUS Rounded 1c", "Roboto", "serif"]
const typography = new Typography(Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale