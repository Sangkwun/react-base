import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Welcome from 'components/Welcome';

const App = props => (
  <div className={styles.container}>
    <Welcome />
  </div>
);

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default App;