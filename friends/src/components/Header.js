import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import FriendsAxios from "../utils/FriendsAxios";

const Header = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    FriendsAxios()
      .post("/logout")
      .then((res) => {
        authCtx.logout();
        history.push("/");
        console.log(authCtx);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <header className="header">
      <Link to="/">
        <h1>Friends</h1>
      </Link>

      <nav>
        <ul>
          <li>{!authCtx.isLoggedIn && <Link to="/login">Log In</Link>}</li>
          <li>
            <Link to="/form">Add Friends</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            {authCtx.isLoggedIn && (
              <button onClick={logoutHandler}>Logout</button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
