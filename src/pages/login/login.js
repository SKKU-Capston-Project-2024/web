import React from 'react';
import styles from './signup.css';

const LogIn = () => {
  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <div className={styles.div1}>카카오톡으로 로그인하기</div>
      <div className={styles.div2}>네이버 로그인하기</div>
      <div className={styles.div3}>구글로 로그인하기</div>
      <img className={styles.item} alt="" src="Group 446.svg" />
      <img className={styles.inner} alt="" src="Group 445.svg" />
      <img className={styles.groupIcon} alt="" src="Group 447.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.div4}>로그인하기</div>
    </div>
  );
};

export default LogIn;
