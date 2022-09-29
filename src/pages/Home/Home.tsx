import { CropImage, GenerateDeck, SelectOverlays, Stack } from "~/components";
import { useActionDeck } from "~/contexts";

export const Home = () => {
  const {
    state: { step },
  } = useActionDeck();
  console.log({ step });
  return (
    <Stack>
      <CropImage />
      <SelectOverlays />
      <GenerateDeck />
    </Stack>
  );
};
