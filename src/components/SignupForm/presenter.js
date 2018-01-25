import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/LoginForm/styles.scss';

const SignupForm = props => {
  return <div className={styles.container}>
      <div className={styles.signupBox}>
        <form className={styles.loginBox} onSubmit={props.handleSubmit}>
          <span className={styles.section}>계정정보</span>
          <input className={styles.inputBox} onChange={props.handleInputChange} placeholder="email" name="email" value={props.email} />
          <input className={styles.inputBox} onChange={props.handleInputChange} type="password" placeholder="비밀번호" name="password" value={props.password} />
          <input className={styles.inputBox} onChange={props.handleInputChange} type="password" placeholder="비밀번호 재확인" name="password2" value={props.password2} />

          <span className={styles.section}>가맹점정보</span>
          <input className={styles.inputBox} onChange={props.handleInputChange} type="string" placeholder="업체명" name="vendor" value={props.vendor} />
          <input className={styles.inputBox} onChange={props.handleInputChange} type="string" placeholder="관리자명" name="name" value={props.name} />
          <input className={styles.inputBox} onChange={props.handleInputChange} type="tel" placeholder="연락처" name="tel" value={props.tel} />
          <input className={styles.inputBox} onChange={props.handleInputChange} type="url" placeholder="Hook uri" name="hook" value={props.hook} />
          <span className={styles.description}>
            결제상태를 수신을위한 hook uri를 입력해주세요.
          </span>
          <span className={styles.section}>결제수단</span>
          <div className={styles.paymethod}>
            <span>
              <input type="checkbox" name="card" defaultChecked="true" />
                신용카드
            </span>
            <span>
              <input type="checkbox" name="phone" defaultChecked="true" />
                휴대폰 결제
            </span>
            <span>
              <input type="checkbox" name="bank" defaultChecked="true" />
                실시간 계좌이체
            </span>
          </div>
          <button className={styles.button}>가입하기</button>
        </form>
      </div>
      <div className={styles.descritionBox}>
        <span className={styles.description}>이미 가맹점이신가요?</span>
        <span className={styles.changePage} onClick={props.changePage}>
          {" "}
          로그인하기
        </span>
      </div>
    </div>;
};

SignupForm.propTypes = {
  changePage: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  password2: PropTypes.string.isRequired,
  vendor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  hook: PropTypes.string.isRequired,
  card: PropTypes.bool.isRequired,
  phone: PropTypes.bool.isRequired,
  bank: PropTypes.bool.isRequired,
};


export default SignupForm;