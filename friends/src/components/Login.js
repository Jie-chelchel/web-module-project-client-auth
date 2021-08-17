import FriendsAxios from "../utils/FriendsAxios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const Login = () => {
  const initialUser = {
    password: "",
    username: "",
  };
  const [user, setUser] = useState(initialUser);
  const authCtx = useContext(AuthContext);

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let history = useHistory();

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(user);
    FriendsAxios()
      .post("login", user)
      .then((res) => {
        authCtx.login(res.data.payload);
        history.push("/friends");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <form onSubmit={loginHandler} className="auth">
      <div className="control">
        <label>user name</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={user.username}
          onChange={inputHandler}
        />
      </div>
      <div className="control">
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={user.password}
          onChange={inputHandler}
        />
      </div>
      <button> Log in</button>
    </form>
  );
};

export default Login;
