import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const initialUser = {
    password: "",

    userName: "",
  };

  const [user, setUser] = useState(initialUser);

  const inputHandler = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const login = (e) => {
    e.prevent.default();
  };

  return (
    <form onSubmit={login} className="auth">
      <div className="control">
        <label>userName</label>
        <input
          type="text"
          placeholder="userName"
          name="userName"
          value={user.userName}
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
