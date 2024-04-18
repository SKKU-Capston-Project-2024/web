import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <img className={styles.logo} src="/logo.png" alt="MUTOPIA"></img>
            <div className={styles.profileBtn}>
                <img src="/person.svg"/>
            </div>
        </header>
    );
};

export default Header;
