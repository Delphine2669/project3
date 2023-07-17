import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const [isAdmin, setIsAdmin] = useState();

  const cachedValue = useMemo(
    () => ({ token, setToken, isAdmin, setIsAdmin }),
    [token, isAdmin, setIsAdmin]
  );

  return (
    <AuthContext.Provider value={cachedValue}>{children}</AuthContext.Provider>
  );
}
export function useAuth() {
  const { token, setToken, isAdmin, setIsAdmin } = useContext(AuthContext);
  return { token, setToken, isAdmin, setIsAdmin };
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
