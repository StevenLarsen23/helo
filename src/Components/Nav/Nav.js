import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { username, profilePic } from "../../ducks/reducer";

class Nav extends Component {
  // componentDidUpdate(previousProps) {
  //   if(previousProps.username !== this.props.username) {
  //     this.render()
  //   }
  //   console.log('nav mounted', this.props)
  // }
  render() {
    console.log(this.props)
    return (
      <div className='nav'>
        {this.props.username}
        {this.props.profilePic}
        <ul className='nav-list'>
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


const mapStateToProps = (reduxState) => {
    return {
        username: reduxState.username,
        profilePic: reduxState.profilePic
    }
    
  };
export default connect(mapStateToProps)(Nav);
