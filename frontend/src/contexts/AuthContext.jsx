import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthProvider({ children, initialToken }) {
  const [token, setToken] = useState(initialToken || "");
  const [isAdmin, setIsAdmin] = useState(false);
  const isAuthenticated = !!token;

  const cachedValue = useMemo(
    () => ({ token, setToken, isAdmin, setIsAdmin, isAuthenticated }),
    [token, isAdmin, isAuthenticated]
  );

  return (
    <AuthContext.Provider value={cachedValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const { token, setToken, isAdmin, setIsAdmin, isAuthenticated } =
    useContext(AuthContext);
  return { token, setToken, isAdmin, setIsAdmin, isAuthenticated };
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
  // eslint-disable-next-line react/require-default-props
  initialToken: PropTypes.string,
};

export default AuthContext;
