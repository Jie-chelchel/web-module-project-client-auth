import { useState } from "react";
import FriendsAxios from "../utils/FriendsAxios";
import { useHistory } from "react-router-dom";

const NewFriends = () => {
  const initialNewFriend = {
    name: "",
    age: "",
    email: "",
  };
  const history = useHistory();

  const [newFriend, setNewFriend] = useState(initialNewFriend);
  const inputHandler = (e) => {
    // console.log(e.target.value);
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const addNewFriendsHandler = (e) => {
    e.preventDefault();
    FriendsAxios()
      .post("/friends", { ...newFriend, id: Date.now() })
      .then((res) => {
        setNewFriend(initialNewFriend);
        history.push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={addNewFriendsHandler} className="auth">
      <div className="control">
        <label>Friend's Name</label>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={newFriend.name}
          onChange={inputHandler}
        />
      </div>
      <div className="control">
        <label>Age</label>
        <input
          type="text"
          placeholder="age"
          name="age"
          value={newFriend.age}
          onChange={inputHandler}
        />
      </div>
      <div className="control">
        <label>Email</label>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={newFriend.email}
          onChange={inputHandler}
        />
      </div>
      <button> Add Friend</button>
    </form>
  );
};

export default NewFriends;
