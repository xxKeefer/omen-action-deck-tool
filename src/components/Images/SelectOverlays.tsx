import { useActionDeck } from "~/contexts";
import { makeDataObjectUrls } from "~/utils/images";
import { FileSelect } from "../Buttons";
import { Row, Stack } from "../Layout";

export const SelectOverlays = () => {
  const {
    setOverlays,
    state: { overlays },
  } = useActionDeck();
  return (
    <Stack>
      <Row>
        {overlays?.map((overlay) => (
          <img key={overlay} src={overlay} height="200px" />
        ))}
      </Row>
      <FileSelect
        multiple
        accept="image/*"
        onSelect={(event) => {
          setOverlays(makeDataObjectUrls(event.target.files));
        }}
      />
    </Stack>
  );
};
