import React from "react";

const Friend = (props) => {
  return (
    <div className="auth">
      <h2>Name :{props.friend.name}</h2>

      <p>Age : {props.friend.age}</p>
      <p>Age : {props.friend.email}</p>
    </div>
  );
};

export default Friend;
