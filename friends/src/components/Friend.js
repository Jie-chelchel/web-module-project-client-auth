import React from "react";
import { Link } from "react-router-dom";

const Friend = (props) => {
  return (
    <div className="auth friend">
      <Link to={`/friends/${props.friend.id}`}>
        <h2>Name :{props.friend.name}</h2>
      </Link>
    </div>
  );
};

export default Friend;
