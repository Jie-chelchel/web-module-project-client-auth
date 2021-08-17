import AuthContext from "../store/auth-context";
import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isLoggedIn);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authCtx.isLoggedIn) {
          return <Component {...props} />;
        } else {
          return <Redirect to="login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
