import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Ionicon from "react-ionicons";

const Welcome = (props, state) => (
  <div className={styles.container}>
    <div className={styles.yellowBox}>
      <div className={styles.yellowCover} />
      <img
        src={require("images/instead_logo.png")}
        className={styles.logoImage}
        alt="instead-logo"
      />
      <div className={styles.buttonBox}>
        <div className={styles.button} onClick={props.chagePage}>
          <div>{props.loginPage ? "메인페이지": "관리자페이지"}</div>
          <Ionicon icon="ios-arrow-forward" fontSize="30px" color="white" />
        </div>
      </div>
    </div>
    <Main loginPage={props.loginPage} />
  </div>
);

const Main = (props) => (
    <div className={styles.whiteBox}>
        {props.loginPage? "loginPage":"Welcome"}
    </div>
)


Welcome.propTypes = {
  loginPage: PropTypes.bool.isRequired,
  chagePage: PropTypes.func.isRequired
};

export default Welcome;