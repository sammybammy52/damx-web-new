import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const secretKey = import.meta.env.VITE_CRYPTO_KEY;
  const [token, setToken] = useState(Cookies.get("token") || null);


  const handleChange = (token) => {
    setToken(token);
  };

  const logout = () => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/logout`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Cookies.remove("token");
      })
      .catch((error) => {
        console.error(error);
        Cookies.remove("token");
      });
  };

  const shouldKick = (e) => {
    if (e.response.data.message) {
      if (e.response.data.message == "Unauthenticated.") {
        Cookies.remove("token");
        window.location.href = "/";
      }
    }
  }

  useEffect(() => {
    // Cookies.set("user", JSON.stringify(user), { expires: 365 });
    Cookies.set("token", token, { expires: 365 });
  }, [token]);

  let contextData = {
    token: token,
    handleChange,
    logout,
    shouldKick,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
