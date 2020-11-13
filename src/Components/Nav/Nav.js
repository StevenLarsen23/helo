import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { username, profilePic } from "../../ducks/reducer";

class Nav extends Component {
  render() {

    return (
      <div>
        <ul>
          <li>
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
            <Link to="/new">New Post</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username,
        profilePic: state.user.profilePic
    }
  };
export default connect(mapStateToProps)(Nav);
