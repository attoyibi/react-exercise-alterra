// AuthContext.jsx
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  token: null,
  setToken: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const value = {
    token,
    setToken,
    isAuthenticated,
    setIsAuthenticated,
  };
  console.log(value);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
