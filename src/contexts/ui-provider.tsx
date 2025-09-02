import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

type UIContextType = {
  animations: boolean;
  expanded: boolean;
  setAnimations: (value: boolean) => void;
  setExpanded: (value: boolean) => void;
};

const UIContext = createContext<UIContextType>({
  animations: true,
  expanded: false,
  setAnimations: () => {},
  setExpanded: () => {},
});

export default function UIProvider({ children }: { children: ReactNode }) {
  const [animations, setAnimations] = useState(true);
  const [expanded, setExpanded] = useState(false);

  return (
    <UIContext.Provider
      value={{ animations, setAnimations, expanded, setExpanded }}
    >
      {children}
    </UIContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUI = () => useContext(UIContext);
