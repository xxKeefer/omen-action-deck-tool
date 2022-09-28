import { useActionDeck } from "~/contexts";
import { makeDataObjectUrls } from "~/utils/images";
import { Row, Stack } from "../Layout";

export const SelectOverlays = () => {
  const {
    setOverlays,
    state: { overlays },
  } = useActionDeck();
  return (
    <Stack>
      <input
        type="file"
        multiple
        accept="image/*"
        name="myImage"
        onChange={(event) => {
          setOverlays(makeDataObjectUrls(event.target.files));
        }}
      />
      <Row>
        {overlays?.map((overlay) => (
          <img key={overlay} src={overlay} height="200px" />
        ))}
      </Row>
    </Stack>
  );
};
