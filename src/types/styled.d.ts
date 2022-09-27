// styled.d.ts
import "styled-components";
import type { ThemeFonts } from "~/style/theme/fonts";
import type { ThemeColors } from "~/style/theme/colors";
import type { ThemeBreakpoints } from "~/style/theme/screens";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ThemeColors;
    fonts: ThemeFonts;
    screens: ThemeBreakpoints;
  }
}
