import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("")
  useEffect(() => {
    console.log("AuthProvider isLoggedIn:", isLoggedIn);
    console.log("AuthProvider username:", username);
  }, [isLoggedIn, username]);

  const toggleLogin = () => {
    setIsLoggedIn(prevState => !prevState);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, setUsername, toggleLogin}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
