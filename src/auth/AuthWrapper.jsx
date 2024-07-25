import NavigationRender from "@/components/NavigationRender";
import { useState, createContext } from "react";

export const AuthContext = createContext();

function AuthWrapper() {
  const [user, setUser] = useState({ name: "", authenticated: false });
  const login = (userName, password) => {
    return new Promise((resolve, reject) => {
      if (password === "admin") {
        setUser({ name: userName, authenticated: true });
        resolve("success");
      } else {
        reject("wrong password");
      }
    });
  };
  const logout = () => {
    setUser({ ...user, authenticated: false });
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <NavigationRender />
    </AuthContext.Provider>
  );
}

export default AuthWrapper;
