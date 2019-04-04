import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";

const Friend = props => {
  const { name, age, email, id } = props.friend;
  return (
    <div className="friend-wrapper">
      <Card
        className="m-5 mx-auto"
        bg="dark"
        text="white"
        style={{ width: 400, opacity: 0.9 }}
        key={id}
      >
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{age}</Card.Text>
          <Card.Text>{email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Friend;
