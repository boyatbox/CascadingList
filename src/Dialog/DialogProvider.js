import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";
import { DialogComponent } from "./DialogComponent";
export const DialogContext = createContext();

const initialState = {
  open: false,
  loading: false,
  success: false,
  error: false,
};

function DialogReducer(state = initialState, action) {
  switch (action.type) {
    case "open":
      return { ...initialState, open: true };
    case "close":
      return { ...initialState };
    case "loading":
      return { ...initialState, open: true, loading: true };
    case "success":
      return { ...initialState, open: true, success: true };
    case "error":
      return { ...initialState, open: true, error: true };
    default:
      return { ...initialState };
  }
}

export const DialogProvider = (props) => {
  const [state, dispatch] = useReducer(DialogReducer, initialState);
  return (
    <DialogContext.Provider value={{ state, dispatch }}>
      {props.children}
      <DialogComponent />
    </DialogContext.Provider>
  );
};

export const useModal = () => {
  const context = React.useContext(DialogContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a UserProvider");
  }

  return context;
};
