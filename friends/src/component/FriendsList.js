import React from "react";
import Friend from "./Friend";
import { Link } from "react-router-dom";
import "../App.css";

function FriendsList(props) {
  return (
    <div className="friends-list-wrapper">
      {props.friends.map(friend => (
        <div className="friend-card" key={friend.id}>
          <Friend
            friend={friend}
            key={friend.id}
            deleteFriend={props.deleteFriend}
          />
        </div>
      ))}
    </div>
  );
}

export default FriendsList;
