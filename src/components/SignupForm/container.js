import React,{ Component } from 'react';
import SignupForm from './presenter';

class Container extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
    vendor: "",
    name: "",
    tel: "",
    hook: "",
    card: true,
    phone: true,
    bank: true
  };

  render() {
    return <SignupForm {...this.props} {...this.state} handleInputChange={this._handleInputChangeEvent} handleSubmit={this._handleSubmit}/>;
  }
  _handleInputChangeEvent = event => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = event => {
    event.preventDefault();

    const { usernameLogin } = this.props;
    const { password, password2, vendor, name, tel, hook, card, phone, bank } = this.state;

    console.log("clicked")
  };
}

export default Container;