import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#B52D75",
    secondary: "#781248",
    accent: "#FFE70A",
    text: "#FFFFFF",
    link: "#B52D75",
    black: "#200B16",
    white: "#FFFFFF",
    disabled: "#8A8A8A",
    success: "#4DBA12",
    error: "#CC0003",
    warning: "#F8A312",
    info: "#0083F5",
    focusIndicator: "#FFE70A",
  },
  fonts: {
    family: {
      main: "Poppins, sans-serif",
      decorative: "Lobster, cursive",
    },
    sizes: {
      xxs: {
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "24px",
      },
      xs: {
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "24px",
      },
      sm: {
        fontSize: "17px",
        fontWeight: "600",
        lineHeight: "25.5px",
      },
      md: {
        fontSize: "19px",
        fontWeight: "600",
        lineHeight: "28.5px",
      },
      lg: {
        fontSize: "24px",
        fontWeight: "500",
        lineHeight: "36px",
      },
      xl: {
        fontSize: "26px",
        fontWeight: "500",
        lineHeight: "39px",
      },
      "2xl": {
        fontSize: "28px",
        fontWeight: "500",
        lineHeight: "24px",
      },
      "3xl": {
        fontSize: "32px",
        fontWeight: "500",
        lineHeight: "48px",
      },
      "4xl": {
        fontSize: "36px",
        fontWeight: "500",
        lineHeight: "54px",
      },
    },
  },
  screens: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1600px",
  },
};
