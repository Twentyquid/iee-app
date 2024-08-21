import { AuthContext } from "@/auth/AuthWrapper";
import { useContext } from "react";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Account from "@/pages/Account";

function NavigationRender() {
  const { user } = useContext(AuthContext);
  return user.authenticated ? (
    <Routes>
      <Route path="*" element={<Dashboard />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default NavigationRender;
