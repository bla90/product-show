import React, { Component } from 'react';
import { signInWithGoogle } from '../firebase';
import './css/style.css';

class SignIn extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  render() {

    return (
      <form className="SignIn" onSubmit={this.handleSubmit}>
        <h2 style={{margin: 2}} id='loginpost'>Sign In</h2>
        <button style={{margin: 2}} type="button" class="btn btn-success" onClick={signInWithGoogle}>Get started</button>
      </form>
    );
  }
}

export default SignIn;
