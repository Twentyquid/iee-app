import { useState, useContext } from "react";
import InputCustom from "./InputCustom";
import { AuthContext } from "@/auth/AuthWrapper";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    login(user.email, user.password)
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleUserNameChange = ({ target }) => {
    // console.log(value);
    setUser((prevUser) => {
      return { ...user, email: target.value };
    });
  };

  const handlePasswordChange = ({ target }) => {
    setUser((prevUser) => {
      return { ...prevUser, password: target.value };
    });
  };
  return (
    <>
      <div className="h-full w-full bg-red-50">
        <h3 className="text-xl">Login</h3>
        <form onSubmit={handleSubmit} className="space-y-3 mt-5">
          <InputCustom
            value={user.email}
            onChange={handleUserNameChange}
            label={"Email"}
            type={"email"}
            color={"bg-red-50"}
          />
          <InputCustom
            onChange={handlePasswordChange}
            value={user.password}
            label={"Password"}
            type={"password"}
            color={"bg-red-50"}
          />
          <button className="px-5 py-3 bg-blue-500" type="submit">
            SIGN IN
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
