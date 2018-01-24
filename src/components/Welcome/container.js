import React, { Component } from 'react';
import Welcome from './presenter';

class Container extends Component{
    state = {
        loginPage: false
    }
    render(){
        return <Welcome {...this.state} {...this.props} changePage={this._changePage}/>
    }
    _changePage = (event) =>{
        const { loginPage } = this.state;
        if(loginPage){
            this.setState({ loginPage: false })
        }else{
            this.setState({ loginPage: true });
        }
    }
};

export default Container;