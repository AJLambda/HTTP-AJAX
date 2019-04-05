import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Home from "./component/Home";
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
      friends: [],
      activeFriend: null,
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

  addFriend = newFriend => {
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        // // HTTP STEP V - Clear data form in ItemForm and route to /item-list
        // this.props.history.push("/friends-List");
      })
      .catch(err => {
        console.log(err);
      });
  };

  getFriendById = id => {
    axios
      .get(`http://localhost:5000/friends/${id}`)
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

  deleteFriend = friend => {
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <ul className="navBar">
          <li>
            <NavLink exact to="/" className="activeNav">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/friends-list" className="activeNav">
              Friends
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/friend-form" className="activeNav">
              Add Friend
            </NavLink>
          </li>
        </ul>
        <Route exact path="/" component={Home} />

        <Route
          exact
          path="/friends-list"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              getFriendById={this.getFriendById}
              deleteFriend={this.deleteFriend}
            />
          )}
        />

        <Route
          path="/friends-list/:friendId"
          render={props => (
            <Friend
              {...props}
              deleteFriend={this.deleteFriend}
              friends={this.state.friends}
              setActiveFriend={this.setActiveFriend}
            />
          )}
        />
        <Route
          path="/new-item"
          render={props => <FriendForm {...props} addFriend={this.addFriend} />}
        />
        <Route
          path="/friend-form"
          render={props => (
            <FriendForm
              {...props}
              activeFriend={this.state.activeFriend}
              addFriend={this.addFriend}
              updateFriend={this.updateFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
