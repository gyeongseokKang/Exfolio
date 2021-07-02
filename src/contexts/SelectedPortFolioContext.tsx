import React from "react";
import { useState } from "react";
import { createContext } from "react";

interface PortFolioState {
  returns: number;
  risk: number;
  sharpe: number;
  weights: {
    items: string[];
    values: number[];
  };
}

export const SelectedPortFolioContext = createContext<{
  selectedPF: PortFolioState | undefined;
  setSelectedPF: (pf: PortFolioState) => void;
  updateItems: (items: string[]) => void;
}>({
  selectedPF: undefined,
  setSelectedPF() {},
  updateItems() {},
});

export const SelectedPortFolioProvider: React.FC = ({ children }) => {
  const [selectedPF, setSelectedPF] = useState<PortFolioState | undefined>(undefined);

  const updateItems = (items: string[]) => {
    if (selectedPF === undefined) return;
    let previousPF = selectedPF;
    previousPF.weights.items = items;
    setSelectedPF(previousPF);
  };

  const initalValue = {
    selectedPF: selectedPF,
    setSelectedPF: setSelectedPF,
    updateItems: updateItems,
  };
  return <SelectedPortFolioContext.Provider value={initalValue}>{children}</SelectedPortFolioContext.Provider>;
};
