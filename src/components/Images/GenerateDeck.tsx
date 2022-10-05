import { useActionDeck } from "~/contexts";
import { BigButton } from "../Buttons";
import { Row, Stack } from "../Layout";

export const GenerateDeck = () => {
  const { state, generateDeck } = useActionDeck();
  return (
    <Stack>
      <Row>
        {state.deck &&
          state.deck.map(
            (card) => card && <img key={card} src={card} height="300px" />
          )}
      </Row>

      {state.art && state.overlays && (
        <BigButton onClick={async () => await generateDeck()}>
          Generate Deck
        </BigButton>
      )}
    </Stack>
  );
};
