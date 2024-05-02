import styles from './LoginModal.module.css';

const LoginModal = () => {

    const moveToKakaoLogin = () => {
        document.location.href = `${process.env.API_HOST}/auth/kakao-login?redirect=${document.location.href}`
    }

    const moveToGoogleLogin = () => {
        document.location.href = `${process.env.API_HOST}/auth/google-login?redirect=${document.location.href}`
    }


    return (
        <div>
            <dialog id="loginModal" className={styles.loginModal}>
                <div className={styles.loginHeader}>
                    로그인하기
                </div>
                <div className={styles.loginItemContainer}>
                    <div className={styles.loginItem} onClick={moveToKakaoLogin}>
                        <img className={styles.loginItemIcon} alt="카카오"></img>
                        <div>카카오로 로그인</div>
                    </div>
                    <div className={styles.loginItemIcon} className={styles.loginItem} onClick={moveToGoogleLogin}>
                        <img alt="구글"></img>
                        <div>구글로 로그인</div>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default LoginModal;