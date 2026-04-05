import { useContext, useReducer } from "react";
import { createContext } from "react";
import { reducer } from "./reducer";

// ---------------- Initial State ----------------
// eslint-disable-next-line react-refresh/only-export-components
export const initialState = {
  portfolioType: "default",
};

// ---------------- Context ----------------
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext({
  state: initialState,
  dispatch: () => null,
});

// ---------------- Provider ----------------
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider };
