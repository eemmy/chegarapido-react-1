import { createContext, useContext, useState, useEffect } from "react";

import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem("user");
    const storagedToken = localStorage.getItem("token");

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      // api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function Register(credentials) {
    try {
      const response = await api.post("/users/store", credentials);

      console.log(response.data);

      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("token", response.data.token);
      setUser(response.data);
    } catch (err) {
      return err;
    }
  }

  async function Login(credentials, method) {
    try {
      if (method == "email") {
        const response = await api.post("/auth/login/email", credentials);

        console.log(response);

        //const user_data = {
        //name: response.data.name,
        //email: response.data.email,
        //};

        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", response.data.token);

        setUser(response.data);
      } else if (method == "phone") {
        // WIP
      }

      // api.defaults.headers.Authorization = `Bearer ${response.data.access_token}`;

      //localStorage.setItem("user", JSON.stringify(user_data));
      //localStorage.setItem("token", response.data.access_token);
    } catch (err) {
      return err;
    }
  }

  function Logout() {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  function Signed() {
    const storagedUser = localStorage.getItem("user");
    const storagedToken = localStorage.getItem("token");

    if (storagedToken && storagedUser) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <AuthContext.Provider
      value={{ signed: Signed, user, Register, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
