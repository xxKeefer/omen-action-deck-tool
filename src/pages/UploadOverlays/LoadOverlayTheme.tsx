import { useState } from "react";
import { Row } from "~/components";
import { useActionDeck } from "~/contexts";
import {
  getDeckTheme,
  getDeckKeys,
  deleteDeckTheme,
} from "~/utils/localStorage";

export const LoadOverlayTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>();
  const [themes, setThemes] = useState<string[]>(() => getDeckKeys());
  const { setOverlays } = useActionDeck();

  if (themes.length < 1) return null;

  return (
    <Row>
      <select
        value={selectedTheme}
        onChange={(e) => setSelectedTheme(e.target.value)}
      >
        <option value="">Select Theme</option>
        {getDeckKeys().map((key) => (
          <option key={key} value={key}>
            {key.split("deckTheme_")[1]}
          </option>
        ))}
      </select>
      <button
        disabled={!selectedTheme}
        onClick={() =>
          selectedTheme && setOverlays(getDeckTheme(selectedTheme))
        }
      >
        Load
      </button>
      <button
        disabled={!selectedTheme}
        onClick={() => {
          selectedTheme && deleteDeckTheme(selectedTheme);
          setThemes(getDeckKeys());
        }}
      >
        Delete
      </button>
    </Row>
  );
};
