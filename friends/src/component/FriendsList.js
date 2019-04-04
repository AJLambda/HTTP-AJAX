import React from "react";
import Friend from "./Friend";
import "../App.css";

const FriendsList = props => {
  console.log(props.friends);

  return (
    <div>
      {props.friends.map(friend => (
        <Friend friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;
