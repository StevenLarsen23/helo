import axios from "axios";
import React, { Component } from "react";
import {connect} from 'react-redux';
import {setUserInfo} from '../../ducks/reducer'

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      newUser: false,
    };
  }

  toggleNewUser = () => {
    this.setState({
      newUser: !this.state.newUser,
    });
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  register = async (e) => {
    e.preventDefault();
    const {username, password} = this.state
    try {
        const user = await axios.post('/auth/register', {username, password})
        this.props.setUserInfo(user.data.id, user.data.username, user.data.profilePic)
        console.log(user.data)
        this.props.history.push('/dashboard')
    } 
    catch(err){ 
            alert('err.response.request.response')
    }
}

  login = async (e) => {
    e.preventDefault();
    const {username, password} = this.state
    try {
        const user = await axios.post('/auth/login', {username, password})
        this.props.setUserInfo(user.data.id, user.data.username, user.data.profilePic)
        this.props.history.push('/dashboard')
    } 
    catch(err){ 
        alert('err.response.request.response')
    }
}

  render() {
    const { username, password } = this.state;
    return (
      <div>
        {this.state.newUser ? (
          <div>
            <h3>Register</h3>
            <form onSubmit={(e) => this.register(e)}>
              <input
                name="username"
                value={username}
                placeholder="Username"
                onChange={(e) => this.changeHandler(e)}
              />
              <input
                name="password"
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => this.changeHandler(e)}
              />
              <button>Submit</button>
            </form>
            <button onClick={this.toggleNewUser}>Already a user?</button>
          </div>
        ) : (
          <div>
            <h3>Login</h3>
            <form onSubmit={(e) => this.login(e)}>
              <input
                name="username"
                value={username}
                placeholder="Username"
                onChange={(e) => this.changeHandler(e)}
              />
              <input
                name="password"
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => this.changeHandler(e)}
              />
              <button>Submit</button>
            </form>
            <button onClick={this.toggleNewUser}>Need an account?</button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, {setUserInfo})(Auth);
