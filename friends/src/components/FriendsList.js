import React, { useState, useEffect } from "react";
import FriendsAxios from "../utils/FriendsAxios";
import Friend from "./Friend";
import AuthContext from "../store/auth-context";
import { useContext } from "react";

const FriendsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  console.log(authCtx);

  useEffect(() => {
    setIsLoading(true);
    FriendsAxios()
      .get("/friends")
      .then((res) => {
        setIsLoading(false);

        authCtx.getFriendsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {isLoading && <p className="auth">Loading</p>}

      {authCtx.allFriends.map((friend) => {
        return <Friend friend={friend} key={friend.id} />;
      })}
    </div>
  );
};

export default FriendsList;
