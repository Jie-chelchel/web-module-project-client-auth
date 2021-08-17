import "./App.css";
import React from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import NewFriends from "./components/NewFriends";
import FriendsList from "./components/FriendsList";
import AuthContext from "./store/auth-context";
import { useContext } from "react";
import PrivateRoute from "./components/PriviteRoute";
function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <Header />
      <section>
        {!authCtx.isLoggedIn && <Route path="/login" component={Login} />}
        <PrivateRoute path="/form" component={NewFriends} />

        <PrivateRoute path="/friends" component={FriendsList} />
      </section>
    </div>
  );
}

export default App;
