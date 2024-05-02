import React from 'react';
import styles from './signup.css';

const SignUp = () => {
  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <div className={styles.div1}>카카오톡으로 시작하기</div>
      <div className={styles.div2}>네이버 시작하기</div>
      <div className={styles.div3}>네이버로 시작하기</div>
      <img className={styles.item} alt="" src="Group 446.svg" />
      <img className={styles.inner} alt="" src="Group 445.svg" />
      <img className={styles.groupIcon} alt="" src="Group 447.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.div4}>회원가입하기</div>
    </div>
  );
};

export default SignUp;
