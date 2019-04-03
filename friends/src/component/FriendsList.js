import React from "react";
import "../App.css";

const FriendsList = props => {
  console.log(props.friends);
  console.log(props.friends.name);
  return (
    <div className="friends-wrapper">
      {props.friends.map(friend => (
        <div className="friend-card" key={friend.id}>
          <div>
            <p>{friend.name}</p>
          </div>
          <div>
            <p>{friend.age}</p>
          </div>
          <div>
            <p>{friend.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
