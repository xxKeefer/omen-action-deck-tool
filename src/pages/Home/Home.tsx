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
      <Heading family="decorative" size="4xl" weight="600">
        Omen Art Tool
      </Heading>

      <CropImage />
      <SelectOverlays />
      <GenerateDeck />
    </Stack>
  );
};
