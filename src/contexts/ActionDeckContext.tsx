import { createContext, ReactNode, useContext, useReducer } from "react";

type ActionDeckState = {
  art: string | null;
  overlays: string[] | null;
  spriteSheet: Blob | null;
};
type Action =
  | { type: "setArt"; payload: ActionDeckState["art"] }
  | { type: "setOverlays"; payload: ActionDeckState["overlays"] }
  | { type: "setSpriteSheet"; payload: ActionDeckState["spriteSheet"] };

type ActionDeckContextType = ReturnType<typeof useCardManager>;

const useCardManager = (initialState: ActionDeckState) => {
  const [state, dispatch] = useReducer(
    (state: ActionDeckState, action: Action) => {
      switch (action.type) {
        case "setArt":
          return { ...state, art: action.payload };
        case "setOverlays":
          return { ...state, overlays: action.payload };
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

  const setSpriteSheet = (spriteSheet: ActionDeckState["spriteSheet"]) => {
    dispatch({ type: "setSpriteSheet", payload: spriteSheet });
  };
  return { state, setArt, setOverlays, setSpriteSheet };
};

const ActionDeckContext = createContext<ActionDeckContextType>({
  state: {
    art: null,
    overlays: null,
    spriteSheet: null,
  },
  setArt: () => null,
  setOverlays: () => null,
  setSpriteSheet: () => null,
});

export const ActionDeckProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ActionDeckContext.Provider
      value={useCardManager({
        art: null,
        overlays: null,
        spriteSheet: null,
      })}
    >
      {children}
    </ActionDeckContext.Provider>
  );
};

export const useActionDeck = () => useContext(ActionDeckContext);
