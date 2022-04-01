// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      50: "#DDDDDD",
      100: "#7E7474",
      200: "#423F3E",
      300: "#2B2B2B",
      400: "#171717",
    },
  },
})

export default theme