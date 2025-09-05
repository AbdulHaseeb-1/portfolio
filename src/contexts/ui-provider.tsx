import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

type UIContextType = {
  animations: boolean;

  setAnimations: (value: boolean) => void;
};

const UIContext = createContext<UIContextType>({
  animations: true,

  setAnimations: () => {},
});

export default function UIProvider({ children }: { children: ReactNode }) {
  const [animations, setAnimations] = useState(true);

  return (
    <UIContext.Provider value={{ animations, setAnimations }}>
      {children}
    </UIContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUI = () => useContext(UIContext);
