import React, { Component } from 'react';
import LoginForm from './presenter';

class Container extends Component {
  state = {
    user: true,
    email: "",
    password: ""
  };
  render() {
    return (
      <LoginForm
        {...this.props}
        {...this.state}
        changePage={this._changePage}
        handleInputChange={this._handleInputChangeEvent}
        handleSubmit={this._handleSubmit}
      />
    );
  }
  _changePage = event => {
    const { user } = this.state;
    if (user) {
      this.setState({ user: false });
    } else {
      this.setState({ user: true });
    }
  };

  _handleInputChangeEvent = event => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = event => {
    event.preventDefault();

    const { usernameLogin } = this.props;
    const { email, password } = this.state;
    //Redux Action
    usernameLogin(email, password);
  };
}

export default Container;