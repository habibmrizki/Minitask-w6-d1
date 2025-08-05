import { useContext } from "react";
import { AuthContext } from "../contexts/auth/authContext";

export const LoginPage = () => {
  const { user, toggleLogin } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <div className="flex items-center flex-col justify-center h-[100vh]">
        {user.isLoggedIn === true ? (
          <button>Logout</button>
        ) : (
          <div>
            <button>Login</button>
            <button>Register</button>
          </div>
        )}

        <button onClick={toggleLogin}>on/off</button>
      </div>
    </>
  );
};
