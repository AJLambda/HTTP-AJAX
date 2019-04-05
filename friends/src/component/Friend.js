import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Friend(props) {
  const { name, age, email, id } = props.friend;

  return (
    <div className="friend-wrapper">
      <Card
        className="m-5 mx-auto"
        bg="dark"
        text="white"
        style={{ width: 400, opacity: 0.9 }}
        key={props.friend.id}
      >
        <Link to={`/friends/${id}`}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{age}</Card.Text>
            <Card.Text>{email}</Card.Text>
            <button className="btn-delete" onClick={props.deleteFriend}>
              Delete
            </button>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
}

export default Friend;
