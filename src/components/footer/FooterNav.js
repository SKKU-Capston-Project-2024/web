import styles from "./Footer.module.css";
import {useNavigate} from "react-router-dom";

const FooterNav = ({}) => {

    const home = "/home.svg"

    const navigate = useNavigate();

    function navigateHome() {
        navigate("/");
    }

    function navigateProfile() {
        navigate("/profile");
    }

    function navigateeditProfile() {
        navigate("/editProfile");
    }

    function navigateSearch() {
        navigate("/search");
    }

    return (
        <nav className={styles.footer}>
            <div className={styles.footerItemContainer} onClick={navigateHome}>
                <img loading="lazy" alt="" src="/home.svg"/>
                <span className={styles.footerItemDesc}>홈</span>
            </div>
            <div className={styles.footerItemContainer} onClick={navigateeditProfile}>
                <img loading="lazy" alt="" src="/menuIcon.svg"/>
                <span className={styles.footerItemDesc}>메뉴</span>

            </div>
            <div className={styles.footerItemContainer} onClick={navigateSearch}>
                <img loading="lazy" alt="" src="/findIcon.svg"/>
                <span className={styles.footerItemDesc}>찾기</span>
            </div>
            <div className={styles.footerItemContainer} onClick={navigateProfile}>
                <img loading="lazy" alt="" src="/person.svg"/>
                <span className={styles.footerItemDesc}>프로필</span>
            </div>
        </nav>
    
    );
};

export default FooterNav;
