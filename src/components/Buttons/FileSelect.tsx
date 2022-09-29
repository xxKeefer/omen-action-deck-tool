import { useRef } from "react";
import styled from "styled-components";
import { BigButton } from "./BigButton";

const Container = styled.div`
  input {
    display: none;
  }
`;

type Props = {
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  multiple?: boolean;
};

export const FileSelect = ({ onSelect, accept, multiple }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <input
        ref={ref}
        type="file"
        name="file"
        accept={accept}
        multiple={multiple}
        onChange={onSelect}
      />
      <BigButton onClick={() => ref.current?.click()}>
        Select File{multiple && "s"}
      </BigButton>
    </Container>
  );
};
