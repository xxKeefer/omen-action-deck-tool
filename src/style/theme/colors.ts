export type ThemeColors = FunctionalColors & TextColors & BrandColors;

type FunctionalColors = {
  black: string;
  white: string;
  disabled: string;
  success: string;
  error: string;
  warning: string;
  info: string;
  focusIndicator: string;
};

type TextColors = {
  text: string;
  link: string;
};

type BrandColors = {
  primary: string;
  secondary: string;
  accent: string;
};
