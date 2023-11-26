import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme(
  { config },

  {
    fonts: {
      heading: `'Circular Std', sans-serif`,
      body: `'Circular Std', sans-serif`,
    },
    colors: {
      brand: {
        primaryBlue: "#0466C8",
        secondaryBlue: "#67A2DC",
        tertiaryBlue: "#b3d1ee",
        primaryBlack: "#001233",
        tertiaryBlack: "#707480",
        primaryYellow: "#C89104",
        secondaryYellow: "#F4E9CD",
        primaryGreen: "#038A39",
        secondaryGreen: "#b1dbc2",
        gray: "#C1C4CD",
        bg: "#FCFCFC",
        700: "#2a69ac",
      },
    },
  }
);

export default theme;
