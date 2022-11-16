import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BigButton, SelectOverlays, Stack } from "~/components";
import { ActionDeckSteps } from "~/constants";
import { useActionDeck } from "~/contexts";
import { LoadOverlayTheme } from "./LoadOverlayTheme";
import { SaveOverlayTheme } from "./SaveOverlayTheme";

export const UploadOverlays = () => {
  const { setStep, state } = useActionDeck();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.art) {
      navigate(`/${ActionDeckSteps[1]}`);
    }
    setStep(2);
  }, []);
  return (
    <Stack>
      <SelectOverlays />
      <LoadOverlayTheme />
      <SaveOverlayTheme />
      {state.overlays && (
        <BigButton onClick={() => navigate(`/${ActionDeckSteps[3]}`)}>
          Next
        </BigButton>
      )}
    </Stack>
  );
};
