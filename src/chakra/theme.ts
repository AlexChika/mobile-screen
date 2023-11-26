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
        primaryBlue: "#0466C8",
        primaryBlack: "#001233",
        gray: "#C1C4CD",
        800: "#153e75",
        700: "#2a69ac",
      },
    },
  }
);

export default theme;
