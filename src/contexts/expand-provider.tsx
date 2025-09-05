import React, { createContext, useContext, useState } from "react";

type ExpandedContextType = {
  activeIndices: number[];
  expand: (index: number) => void;
  collapse: (index: number) => void;
  collapseAll: () => void;
  expandAll: () => void;
  expanded: boolean;
  setExpanded: (value: boolean) => void;
};

const ExpandedContext = createContext<ExpandedContextType | undefined>(
  undefined
);

export const ExpandedProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [expanded, setExpanded] = useState(false);

  const expand = (index: number) =>
    setActiveIndices((prev) =>
      prev.includes(index) ? prev : [...prev, index]
    );

  const collapse = (index: number) =>
    setActiveIndices((prev) => prev.filter((i) => i !== index));

  const expandAll = () => {
    setActiveIndices([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  };

  const collapseAll = () => setActiveIndices([]);

  return (
    <ExpandedContext.Provider
      value={{
        activeIndices,
        expand,
        collapse,
        collapseAll,
        expandAll,
        expanded,
        setExpanded,
      }}
    >
      {children}
    </ExpandedContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useExpanded = () => {
  const ctx = useContext(ExpandedContext);
  if (!ctx) throw new Error("useExpanded must be used within ExpandedProvider");
  return ctx;
};
