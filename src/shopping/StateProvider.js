import React, { createContext, useContext, useReducer } from "react";
// data layer
export const StateContext = createContext();
// Here I use react conmtext API
// build  a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
// this is how use it insite of a component
export const useStateValue = () => useContext(StateContext);