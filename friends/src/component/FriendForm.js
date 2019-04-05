import React from "react";
import "../App.css";

class FriendForm extends React.Component {
  state = {
    friend: this.props.activeFriend || {
      name: "",
      age: "",
      email: ""
    }
  };

  // componentDidUpdate(prevProps) {
  //   if (
  //     this.props.activeFriend &&
  //     prevProps.activeFriend !== this.props.activeFriend
  //   ) {
  //     this.setState({
  //       friend: this.props.activeFriend
  //     });
  //   }
  // }

  changeHandler = ev => {
    this.setState({
      friend: {
        ...this.state.friend,
        [ev.target.name]: ev.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend);
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
