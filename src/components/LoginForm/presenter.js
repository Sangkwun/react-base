import React from 'react';
import styles from './styles.scss';
import PropTypes from 'prop-types';
import SignupForm from 'components/SignupForm';

const LoginForm = (props) =>{
    if(props.user){
        return (
        <div className={styles.container}>
            <span className={styles.title}>관리자페이지</span>
            <form className ={styles.loginBox}>
                <input className={styles.inputBox} type="id" placeholder="E-mail" />
                <input className={styles.inputBox} type="password" placeholder="비밀번호" />
                <button className={styles.button}>"로그인"</button>
            </form>
            <div className={styles.descritionBox}>
                <span className={styles.description}>가맹점이 아니신가요?</span>
                <span className={styles.changePage} onClick={props.changePage} > 가입하기</span>
            </div>
        </div>
    )}else{
        return <SignupForm changePage={props.changePage} />
    }
}

LoginForm.propTypes = {
  user: PropTypes.bool.isRequired,
  changePage: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default LoginForm;