import { useLocalStorage } from "../../hooks/useLocalStorage";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", {
    username: "habib",
    isLoggedIn: true,
  });

  const toggleLogin = () => {
    setUser((u) => {
      if (u.isLoggedIn === true) {
        return {
          username: "habib",
          isLoggedIn: false,
        };
      } else {
        return {
          username: "habib",
          isLoggedIn: true,
        };
      }
    });
  };

  return (
    <AuthContext.Provider value={{ user, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
