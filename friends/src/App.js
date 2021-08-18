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
import FriendsDetails from "./components/FriendDetails";
function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      <Header />
      <section>
        {!authCtx.isLoggedIn && <Route path="/login" component={Login} />}
        <PrivateRoute path="/form" component={NewFriends} />

        <PrivateRoute path="/friends" exact component={FriendsList} />
        <PrivateRoute path="/friends/:Id" component={FriendsDetails} />
      </section>
    </div>
  );
}

export default App;
