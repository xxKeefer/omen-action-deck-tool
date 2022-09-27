import React, { useContext } from "react";
import {
  ThemeContext as StyledThemeContext,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

import { GlobalStyles } from "./GlobalStyles";
import { theme } from "./theme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </StyledThemeProvider>
);

export const useTheme = () => useContext(StyledThemeContext);
