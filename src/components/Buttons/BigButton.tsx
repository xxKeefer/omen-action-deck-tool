import React, { HTMLAttributes } from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
} & HTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.h1<{
  as: React.ElementType;
}>`
  ${({ theme }) => `
        padding: 10px;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background-color: ${theme.colors.secondary};
        }

    `}
`;

export const BigButton = ({ as, children, ...htmlAttributes }: Props) => {
  return (
    <StyledButton as={as} {...htmlAttributes}>
      {children}
    </StyledButton>
  );
};
