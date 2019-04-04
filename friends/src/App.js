import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import FriendsList from "./component/FriendsList";
import FriendForm from "./component/FriendForm";
import Friend from "./component/Friend";

import "./App.css";

const blankFriend = {
  name: "",
  age: "",
  email: ""
};

class App extends Component {
  // add constructor and CDM
  constructor(props) {
    super(props);
    this.state = {
      activeFriend: null,
      friends: [],
      error: ""
    };
  }

  componentDidMount() {
    // ajax request to get the items from a server on mount
    // 1. invoke .get()
    // 2. pass in the server url - base url + endpoint
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        // // HTTP STEP V - Clear data form in ItemForm and route to /item-list
        // this.props.history.push('/FriendsList');
      })
      .catch(err => {
        console.log(err);
      });
  };

  getFriendById = id => {
    axios
      .get(`http://localhost:5000/friendById/${id}`)
      .then(res => this.setState({ activeFriend: res.data }))
      .catch(err => console.log(err));
  };

  changeHandler = ev => {
    this.setState({
      friend: {
        ...this.state.friend,
        [ev.target.name]: ev.target.value
      }
    });
  };

  updateFriend = () => {
    axios
      .put(
        `http://localhost:5000/friends/${this.state.editingId}`,
        this.state.friend
      )
      .then(response => {
        this.setState({
          friends: response.data,
          editingId: null,
          isEditing: false,
          friend: blankFriend
        });
      })
      .catch(error => console.log(error));
  };

  deleteFriend = id => {
    let url = "http://localhost:5000/friends/" + id;
    axios
      .delete(url)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <FriendForm
          activeFriend={this.state.activeFriend}
          addFriend={this.addFriend}
          updateFriend={this.updateFriend}
        />
        <FriendsList
          friends={this.state.friends}
          getFriendById={this.getFriendById}
          deleteFriend={this.deleteFriend}
        />
      </div>
    );
  }
}

export default App;
