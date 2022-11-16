import { useState } from "react";
import { Row } from "~/components";
import { useActionDeck } from "~/contexts";
import { setDeckTheme } from "~/utils/localStorage";

export const SaveOverlayTheme = () => {
  const [themeName, setThemeName] = useState<string>();
  const {
    state: { overlays },
  } = useActionDeck();

  if (!overlays) return null;

  return (
    <Row>
      <input
        type="text"
        placeholder="Theme Name"
        value={themeName}
        onChange={(e) => setThemeName(e.target.value)}
      />
      <button
        disabled={!themeName}
        onClick={() => themeName && setDeckTheme(themeName, overlays)}
      >
        Save
      </button>
    </Row>
  );
};
