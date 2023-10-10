import { extendTheme } from "@chakra-ui/react";
import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools";

import colors from "./customs/_colors";
import * as components from "./customs";

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      // bg: mode('gray.100', 'gray.800')(props),
      bg: mode("#202329", "#202329")(props),
      color: "#fff",
      fontSize: "sm",
      fontWeight: 500,
      letterSpacing: -0.2,
      textRendering: "optimizeLegibility",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale"
    }
  })
};

export const fonts = {
  heading: "Inter",
  body: "Inter"
};

const fontSizes = {
  sm: "13px",
  md: "14px"
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const theme = extendTheme({
  colors,
  config,
  styles,
  fonts,
  fontSizes,
  components: {
    ...components
  }
});
export default theme;
