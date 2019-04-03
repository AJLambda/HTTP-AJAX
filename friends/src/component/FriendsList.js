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
          style={{ width: 400 }}
          key={friend.id}
        >
          <Card.Body>
            <Card.Title>{friend.name}</Card.Title>
            <Card.Text>{friend.age}</Card.Text>
            <Card.Text>{friend.email}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FriendsList;
