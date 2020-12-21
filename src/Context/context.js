import React, { useReducer } from "react";
import { initialState, AuthReducer } from "./reducer";

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

export function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return context;
}

export function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return context;
}

// The useReducer returns a user object as state and a dispatch method for triggering state updates/changes,
// then we pass the user object to as value AuthStateContext provider also we pass the dispatch method as value
// to the AuthDispatchContext provider.

// What this means is that the user object and dispatch method are available to any children of the AuthProvider component.
export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
