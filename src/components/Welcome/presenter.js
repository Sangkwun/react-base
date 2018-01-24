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
        {props.loginPage? "loginPage":<Explain />}
    </div>
)
const Explain = () => (
  <div className={styles.explain}>
    <span className={styles.title}>결제를 인스테드하다.</span>

    <div className={styles.splitLine} />

    <span className={styles.description}>요청과 결제에서 생기는 불편함</span>
    <span className={styles.description}>인스테드로 해결하세요.</span>
    <a href="http://instead-corp.com/">
      <button className={styles.button}>어떤 서비스인가요?</button>
    </a>
  </div>
);


Welcome.propTypes = {
  loginPage: PropTypes.bool.isRequired,
  chagePage: PropTypes.func.isRequired
};

export default Welcome;