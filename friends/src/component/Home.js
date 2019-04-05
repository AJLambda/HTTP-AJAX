import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Join the Squad</h1>
      <Link to="/friends-list">See who's friends</Link>
    </div>
  );
};

export default Home;
