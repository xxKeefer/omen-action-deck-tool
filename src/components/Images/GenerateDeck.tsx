import { useActionDeck } from "~/contexts";
import { BigButton } from "../Buttons";
import { Stack } from "../Layout";

export const GenerateDeck = () => {
  const { state, generateDeck } = useActionDeck();
  return (
    <Stack>
      {state.art && state.overlays && (
        <BigButton onClick={async () => await generateDeck()}>
          Generate Deck
        </BigButton>
      )}

      {state.deck &&
        state.deck.map((card) => <img key={card} src={card} height="400px" />)}
    </Stack>
  );
};
