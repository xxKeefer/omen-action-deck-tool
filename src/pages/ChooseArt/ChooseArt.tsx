import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BigButton, CropImage, Stack } from "~/components";
import { ActionDeckSteps } from "~/constants";
import { useActionDeck } from "~/contexts";

export const ChooseArt = () => {
  const { setStep, state } = useActionDeck();
  const navigate = useNavigate();

  useEffect(() => {
    setStep(1);
  }, []);

  return (
    <Stack>
      <CropImage />
      {state.art && (
        <BigButton onClick={() => navigate(`/${ActionDeckSteps[2]}`)}>
          Next
        </BigButton>
      )}
    </Stack>
  );
};
