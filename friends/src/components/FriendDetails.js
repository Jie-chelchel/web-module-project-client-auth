import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import FriendsAxios from "../utils/FriendsAxios";

const FriendsDetails = () => {
  const [friend, setFriend] = useState({});
  const { Id } = useParams();
  const history = useHistory();

  useEffect(() => {
    FriendsAxios()
      .get(`/friends/${Id}`)
      .then((res) => {
        setFriend(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="auth">
      <h2>Name : {friend.name}</h2>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
      <button
        onClick={() => {
          history.push("/friends");
        }}
      >
        close
      </button>
    </div>
  );
};
export default FriendsDetails;
