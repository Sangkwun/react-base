import React, { Component } from 'react';
import Welcome from './presenter';

class Container extends Component{
    state = {
        loginPage: false
    }
    render(){
        return <Welcome {...this.state} {...this.props}/>
    }
};

export default Container;