import React,{ Component } from 'react';
import SignupForm from './presenter';

class Container extends Component {
    state = {
        email: "",
        password: "",
        password2: "",
        vendor: "",
        name: "",
        tell: "",
        hook: "",
    }

    render(){
        return <SignupForm {...this.props} />
    }
}

export default Container;