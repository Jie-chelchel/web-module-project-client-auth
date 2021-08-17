import React, { useState } from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [friendsList, setFriendsList] = useState([]);

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = (token) => {
    setToken(null);
    localStorage.removeItem("token");
  };
  const userIsLoggedIn = !!token;

  const getFriendsList = (list) => {
    setFriendsList(list);
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    getFriendsList: getFriendsList,
    allFriends: friendsList,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
