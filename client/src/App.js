import React from "react";

import useAuth from "./hooks/auth.hook";
import AuthContext from "./context/AuthContext";

import AppHeader from "./components/AppHeader";
import AuthPage from "./pages/AuthPage";

function App() {
  const { login, logout, token, userId } = useAuth();
  const isAuthenticated = !!token;

  return (
    <>
      <AuthContext.Provider
        value={{ login, logout, token, userId, isAuthenticated }}
      >
        <AppHeader />
        <main>{!isAuthenticated && <AuthPage />}</main>
      </AuthContext.Provider>
    </>
  );
}

export default App;
