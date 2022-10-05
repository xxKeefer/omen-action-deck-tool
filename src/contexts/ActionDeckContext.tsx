import { createContext, ReactNode, useContext, useReducer } from "react";
import { ActionDeckSteps } from "~/constants";
import { applyOverlay, cardsToZip, resizeImage } from "~/utils/images";

type ActionDeckState = {
  art: string | null;
  overlays: (string | null)[] | null;
  deck: (string | null)[] | null;
  spriteSheet: string | null;
  step: keyof typeof ActionDeckSteps;
};
type Action =
  | { type: "setArt"; payload: ActionDeckState["art"] }
  | { type: "setOverlays"; payload: ActionDeckState["overlays"] }
  | { type: "setDeck"; payload: ActionDeckState["deck"] }
  | { type: "setSpriteSheet"; payload: ActionDeckState["spriteSheet"] }
  | { type: "setStep"; payload: ActionDeckState["step"] };

type ActionDeckContextType = ReturnType<typeof useCardManager>;

const useCardManager = (initialState: ActionDeckState) => {
  const [state, dispatch] = useReducer(
    (state: ActionDeckState, action: Action) => {
      switch (action.type) {
        case "setArt":
          return { ...state, art: action.payload };
        case "setOverlays":
          return { ...state, overlays: action.payload };
        case "setDeck":
          return { ...state, deck: action.payload };
        case "setSpriteSheet":
          return { ...state, spriteSheet: action.payload };

        default:
          return state;
      }
    },
    initialState
  );

  const setArt = (art: ActionDeckState["art"]) => {
    dispatch({ type: "setArt", payload: art });
  };

  const setOverlays = (overlays: ActionDeckState["overlays"]) => {
    dispatch({ type: "setOverlays", payload: overlays });
  };

  const setDeck = (deck: ActionDeckState["deck"]) => {
    dispatch({ type: "setDeck", payload: deck });
  };

  const setSpriteSheet = (spriteSheet: ActionDeckState["spriteSheet"]) => {
    dispatch({ type: "setSpriteSheet", payload: spriteSheet });
  };

  const setStep = (step: ActionDeckState["step"]) => {
    dispatch({ type: "setStep", payload: step });
  };

  const resizeOverlays = async () => {
    if (!state.overlays) return [null];
    const resizedOverlays = await Promise.all(
      state.overlays.map((overlay) => {
        return overlay ? resizeImage(overlay) : null;
      })
    );
    return resizedOverlays;
  };
  const generateDeck = async () => {
    if (!state.art || !state.overlays) return null;

    const art = await resizeImage(state.art);
    const overlays = await resizeOverlays();

    const deck = await Promise.all(
      overlays.map(async (overlay) => {
        if (!art || !overlay) return null;
        return applyOverlay(art, overlay);
      })
    );
    setDeck(deck);
    return null;
  };

  const downloadDeck = async () => {
    if (!state.deck) return null;
    const cleanedDeck = state.deck.filter(
      (card) => typeof card === "string"
    ) as string[];
    const zip = await cardsToZip(cleanedDeck);
    const link = document.createElement("a");
    link.download = "action-deck";
    link.href = URL.createObjectURL(zip);
    link.click();

    return null;
  };

  return {
    state,
    setArt,
    setOverlays,
    generateDeck,
    downloadDeck,
    setStep,
    setSpriteSheet,
  };
};

const ActionDeckContext = createContext<ActionDeckContextType>({
  state: {
    art: null,
    overlays: null,
    deck: null,
    spriteSheet: null,
    step: 1,
  },
  setArt: () => null,
  setOverlays: () => null,
  generateDeck: () => Promise.resolve(null),
  downloadDeck: () => Promise.resolve(null),
  setSpriteSheet: () => null,
  setStep: () => null,
});

export const ActionDeckProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ActionDeckContext.Provider
      value={useCardManager({
        art: null,
        overlays: null,
        spriteSheet: null,
        deck: null,
        step: 1,
      })}
    >
      {children}
    </ActionDeckContext.Provider>
  );
};

export const useActionDeck = () => useContext(ActionDeckContext);
