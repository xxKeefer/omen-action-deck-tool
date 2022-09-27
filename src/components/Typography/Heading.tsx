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

const StyledHeading = styled.h1<{
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

export const Heading = ({
  children,
  className,
  align,
  weight,
  as = "h1",
  color = "primary",
  size = "2xl",
  family = "main",
  ...htmlAttributes
}: Props) => (
  <StyledHeading
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
  </StyledHeading>
);
