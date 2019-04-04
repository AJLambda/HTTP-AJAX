import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";

const Friend = props => {
  return (
    <div className="friends-wrapper">
      <Card
        className="m-5 mx-auto"
        bg="dark"
        text="white"
        style={{ width: 400, opacity: 0.9 }}
        key={props.friend.id}
      >
        <Card.Body>
          <Card.Title>{props.friend.name}</Card.Title>
          <Card.Text>{props.friend.age}</Card.Text>
          <Card.Text>{props.friend.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Friend;
