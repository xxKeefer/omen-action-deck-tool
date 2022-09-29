import styled from "styled-components";
import { Heading } from "../Typography";

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const Container = styled.section`
  padding: 30px 20%;
`;

type Props = {
  children: React.ReactNode;
};

export const Shell = ({ children }: Props) => {
  return (
    <main>
      <TopBar>
        <Heading size="4xl" family="decorative" color="white">
          Omen Action Deck Tool
        </Heading>
      </TopBar>
      <Container>{children}</Container>
    </main>
  );
};
