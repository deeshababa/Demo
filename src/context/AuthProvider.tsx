import React, { createContext, useEffect, useState } from "react";
import { clearLocalStorage } from "../lib/storageLib";

export const AuthContext = createContext<{
  token: string;
  setToken: (value: string) => void;
  resetToken: () => void;
}>({
  token: "",
  setToken: () => {},
  resetToken: () => {},
});

const AuthProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (!token && localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken") ?? "");
    }
  }, []);

  const resetToken = () => {
    setToken("");
    clearLocalStorage();
  };

  return (
    <AuthContext.Provider value={{ setToken, token, resetToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
