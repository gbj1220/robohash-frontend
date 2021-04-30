import React, { useReducer, createContext } from "react";

export const AuthContext = createContext({});

const initialState = {
  isAuth: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isAuth: true,
        user: {
          email: action.user,
        },
      };

    case "LOGOUT":
      return {
        isAuth: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthContextComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextComponent;
