import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";

const Friend = props => {
  // const friend = props.friends.find(friend => {
  //   return `${friend.id}` === props.match.params.friendId;
  // });
  // if (!friend) return <h3>Loading data...</h3>;
  console.log(props.friends);
  console.log(props.match);

  return (
    <div className="friend-wrapper">
      <Card
        className="m-5 mx-auto"
        bg="dark"
        text="white"
        style={{ width: 400, opacity: 0.9 }}
      >
        <Card.Body>
          <Card.Title>{props.friend.name}</Card.Title>
          <Card.Text>{props.friend.age}</Card.Text>
          <Card.Text>{props.friend.email}</Card.Text>
          <button className="btn-delete">Delete</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Friend;
