import React, { Component } from 'react';
import LoginForm from './presenter';

class Container extends Component {
  state = {
    user: true,
    email: "",
    password: "",
  };
  render() {
    return <LoginForm {...this.props} {...this.state} changePage={this._changePage} />;
  }
  _changePage = (event) => {
    const { user } = this.state;
    if (user) {
      this.setState({ user: false });
    } else {
      this.setState({ user: true });
    }
  };
}

export default Container;