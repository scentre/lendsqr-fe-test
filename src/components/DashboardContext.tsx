import { ColumnFiltersState } from "@tanstack/react-table";
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

interface MyContextValue {
  filteredState: ColumnFiltersState;
  setFilteredState: Dispatch<SetStateAction<ColumnFiltersState>>;
  modalIsOpen: boolean;
  setIsOpen: (a: boolean) => void;
}

export const DashboardContext = createContext<MyContextValue>({
  filteredState: [],
  setFilteredState: () => {},
  modalIsOpen: false,
  setIsOpen: () => {},
});

function DashboardState({ children }: { children: ReactNode }) {
  const [filteredState, setFilteredState] = useState<ColumnFiltersState>([]);

  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <DashboardContext.Provider
      value={{ filteredState, setFilteredState, modalIsOpen, setIsOpen }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
export default DashboardState;
