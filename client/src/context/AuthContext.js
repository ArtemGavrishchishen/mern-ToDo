import { createContext } from "react";

function noop() {}

const AuthContext = createContext({
  token: null,
  userId: null,
  login: noop,
  logout: noop,
  isAuthenticated: false,
  setUpdateTrue: noop,
  setUpdateFalse: noop,
  isUpdate: false
});

export default AuthContext;
