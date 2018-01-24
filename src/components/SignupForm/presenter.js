import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/LoginForm/styles.scss';

const SignupForm = props => {
  return (
    <div className={styles.container}>
      <div className={styles.signupBox} />
      <div className={styles.descritionBox}>
        <span className={styles.description}>이미 가맹점이신가요?</span>
        <span className={styles.changePage} onClick={props.changePage}>
          {" "}
          로그인하기
        </span>
      </div>
    </div>
  );
};

SignupForm.propTypes = {
    changePage : PropTypes.func.isRequired
}


export default SignupForm;