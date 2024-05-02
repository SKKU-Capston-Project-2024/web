import styles from "./Header.module.css";
import LoginModal from "../loginModal/LoginModal";

const Header = (props) => {

    const isLogin = true;

    const showModal = () => {
        const loginModal = document.getElementById("loginModal");
        loginModal.showModal();
    }

    return (
        <div>
            <LoginModal/>
            <header className={styles.headerContainer}>
                <img className={styles.logo} src="/mutopia.svg" alt="MUTOPIA"></img>
                <div className={styles.profileBtn} onClick={showModal}>
                    <img src="/baboland.svg"/>
                </div>
            </header>
        </div>

    );
};

export default Header;
