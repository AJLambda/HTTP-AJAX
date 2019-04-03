import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";

const FriendsList = props => {
  console.log(props.friends);

  const friends = props.friends;

  return (
    <div className="friends-wrapper">
      {friends.map(friend => (
        <Card
          className="m-5 mx-auto"
          bg="dark"
          text="white"
          style={{ width: 600 }}
          key={friend.id}
        >
          <div>
            <p>{friend.name}</p>
          </div>
          <div>
            <p>{friend.age}</p>
          </div>
          <div>
            <p>{friend.email}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FriendsList;
