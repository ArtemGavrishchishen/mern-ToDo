import { createContext } from "react";

function noop() {}

const AuthContext = createContext({
  token: null,
  userId: null,
  userName: null,
  login: noop,
  logout: noop,
  isAuthenticated: false
});

export default AuthContext;
