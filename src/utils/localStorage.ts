export const setDeckTheme = (key: string, value: (string | null)[]) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(`deckTheme_${key}`, JSON.stringify(value));
  }
};

export const getDeckTheme = (key: string) => {
  if (typeof window !== "undefined") {
    return JSON.parse(window.localStorage.getItem(key) || "[]");
  }
  return [];
};

export const deleteDeckTheme = (key: string) => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(key);
  }
};

export const getDeckKeys = () => {
  if (typeof window !== "undefined") {
    return Object.keys(window.localStorage).filter((key) =>
      key.startsWith("deckTheme_")
    );
  }
  return [];
};
