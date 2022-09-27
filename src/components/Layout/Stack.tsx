import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Stack = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
