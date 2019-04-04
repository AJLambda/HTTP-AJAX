import React from "react";
import "../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class FriendForm extends React.Component {
  state = {
    friend: this.props.activeFriend || {
      name: "",
      age: "",
      email: ""
    }
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.activeFriend &&
      prevProps.activeFriend !== this.props.activeFriend
    ) {
      this.setState({
        friend: this.props.activeFriend
      });
    }
  }

  changeHandler = ev => {
    this.setState({
      friend: {
        ...this.state.friend,
        [ev.target.name]: ev.target.value
      }
    });
  };

  handleSubmit = e => {
    if (this.props.activeFriend) {
      this.props.updateFriend(e, this.state.friend);
    } else {
      this.props.addFriend(e, this.state.friend);
    }
    this.setState({
      friend: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  render() {
    return (
      <div className="friendForm-wrapper">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={this.state.friend.name}
            onChange={this.changeHandler}
          />
          <div className="baseline" />

          <input
            type="number"
            placeholder="Enter age"
            name="age"
            value={this.state.friend.age}
            onChange={this.changeHandler}
          />
          <div className="baseline" />

          <input
            type="text"
            placeholder="Enter email"
            name="email"
            value={this.state.friend.email}
            onChange={this.changeHandler}
          />
          <div className="baseline" />

          <button className="md-button form-button">{`${
            this.props.activeFriend ? "Update" : "Add New"
          } Friend`}</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
