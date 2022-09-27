export type ThemeFonts = {
  family: {
    main: string;
    decorative: string;
  };
  sizes: Record<FontSize, FontOptions>;
};

export type FontWeight = "400" | "500" | "600";

export type FontSize =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export type FontAlignment = "left" | "center";

type FontOptions = {
  lineHeight: string;
  fontWeight: FontWeight;
  fontSize: string;
};
