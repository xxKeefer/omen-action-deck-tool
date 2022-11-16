import { useActionDeck } from "~/contexts";
import { makeBase64Strings } from "~/utils/images";
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
        {overlays?.map(
          (overlay) =>
            overlay && <img key={overlay} src={overlay} height="200px" />
        )}
      </Row>
      <FileSelect
        multiple
        accept="image/*"
        onSelect={async (event) => {
          setOverlays(await makeBase64Strings(event.target.files));
        }}
      />
    </Stack>
  );
};
