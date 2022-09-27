import styled from "styled-components";

const Frame = styled.div`
  margin: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  max-height: 600px;
  max-width: 400px;
`;

type Props = {
  image: File;
};

export const CardFrame = ({ image }: Props) => {
  return (
    <Frame>
      <img src={URL.createObjectURL(image)} />
    </Frame>
  );
};
