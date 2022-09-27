import React, { HTMLAttributes } from "react";
import styled, { DefaultTheme } from "styled-components";

import { FontAlignment, FontSize, FontWeight } from "~/style/theme/fonts";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: FontSize;
  weight?: FontWeight;
  align?: FontAlignment;
  color?: keyof DefaultTheme["colors"];
  family?: keyof DefaultTheme["fonts"]["family"];
} & HTMLAttributes<HTMLElement>;

const StyledText = styled.p<{
  as: React.ElementType;
  $size: FontSize;
  $weight?: FontWeight;
  $align?: FontAlignment;
  $color: keyof DefaultTheme["colors"];
  $family: keyof DefaultTheme["fonts"]["family"];
}>`
  ${({ theme, $size, $weight, $color, $align, $family }) => `
        text-align: ${$align || "left"};
        color: ${theme.colors[$color]};
        font-family: ${theme.fonts.family[$family]};
        font-size: ${theme.fonts.sizes[$size].fontSize};
        font-weight: ${$weight || theme.fonts.sizes[$size].fontWeight};
        line-height: ${theme.fonts.sizes[$size].lineHeight};
    `}
`;

export const Text = ({
  children,
  className,
  align,
  weight,
  as = "p",
  color = "text",
  size = "md",
  family = "main",
  ...htmlAttributes
}: Props) => (
  <StyledText
    as={as}
    $size={size}
    $align={align}
    $color={color}
    $weight={weight}
    $family={family}
    className={className}
    {...htmlAttributes}
  >
    {children}
  </StyledText>
);
