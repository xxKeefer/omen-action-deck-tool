import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Row = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
