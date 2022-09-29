import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BigButton, GenerateDeck, Stack } from "~/components";
import { ActionDeckSteps } from "~/constants";
import { useActionDeck } from "~/contexts";

export const DownloadDeck = () => {
  const { setStep, state } = useActionDeck();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.art) {
      navigate(`/${ActionDeckSteps[1]}`);
    }
    if (!state.overlays) {
      navigate(`/${ActionDeckSteps[2]}`);
    }
    setStep(3);
  }, []);

  return (
    <Stack>
      <GenerateDeck />
      {state.deck && (
        <BigButton onClick={() => undefined}>Download Deck</BigButton>
      )}
    </Stack>
  );
};

export default DownloadDeck;
