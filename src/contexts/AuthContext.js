import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const register = (email, password, name) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((user) => user.email === email)) {
      throw new Error("이미 등록된 이메일입니다.");
    }
    const newUser = { email, password, name };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      throw new Error("이메일 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, currentUser, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
