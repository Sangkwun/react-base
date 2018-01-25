import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Welcome from 'components/Welcome';

const App = props => {
  if(props.isLoggedIn){
    return(<div>is logged In</div>)
  }else{
  return(
    <div className={styles.container}>
      <Welcome />
    </div>
)}};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default App;