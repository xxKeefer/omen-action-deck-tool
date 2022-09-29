import {
  CropImage,
  GenerateDeck,
  Heading,
  SelectOverlays,
  Stack,
} from "~/components";

export const Home = () => {
  return (
    <Stack>
      <CropImage />
      <SelectOverlays />
      <GenerateDeck />
    </Stack>
  );
};
