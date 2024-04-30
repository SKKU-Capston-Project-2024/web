import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <img className={styles.logo} src="/logo.png" alt="MUTOPIA"/>
            <div className={styles.buttons}>
                <button className={styles.loginButton}>Log In</button>
                <button className={styles.signupButton}>Sign Up</button>
            </div>
        </header>
    );
};

export default Header;
