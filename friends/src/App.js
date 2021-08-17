import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import NewFriends from "./components/NewFriends";
import FriendsList from "./components/FriendsList";
function App() {
  return (
    <div>
      <Header />
      <section>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/form">
          <NewFriends />
        </Route>
        <Route path="/friends">
          <FriendsList />
        </Route>
      </section>
    </div>
  );
}

export default App;
