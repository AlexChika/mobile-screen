import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme(
  { config },

  {
    colors: {
      brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
      },
    },
  }
);

export default theme;
