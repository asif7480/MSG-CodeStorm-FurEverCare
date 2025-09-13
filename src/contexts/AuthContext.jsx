import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    const savedCategory = localStorage.getItem("category");
    const savedName = localStorage.getItem("name");
    if (savedCategory) setCategory(savedCategory);
    if (savedName) setName(savedName);
  }, []);

  useEffect(() => {
    if (category) localStorage.setItem("category", category);
    if (name) localStorage.setItem("name", name);
  }, [category, name]);

  const leave = () => {
    setCategory(null);
    setName("");
    localStorage.removeItem("category");
    localStorage.removeItem("name");
  };

  return (
    <AuthContext.Provider value={{ category, setCategory, name, setName, leave }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
