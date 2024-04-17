import { useMemo } from "react";
import styles from "./Footer.module.css";

const Footer = ({
  home,
  menu,
  search,
  person,
  propFlex,
  propGap,
  propAlignSelf,
  propDebugCommit,
}) => {
  const footerStyle = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
      alignSelf: propAlignSelf,
      debugCommit: propDebugCommit,
    };
  }, [propFlex, propGap, propAlignSelf, propDebugCommit]);

  return (
    <div className={styles.footer} style={footerStyle}>
      <div className={styles.home}>
        <div className={styles.homeWrapper}>
          <img className={styles.homeIcon} loading="lazy" alt="" src={home} />
        </div>
        <div className={styles.home1}>Home</div>
      </div>
      <div className={styles.menu}>
        <div className={styles.menuWrapper}>
          <img className={styles.menuIcon} loading="lazy" alt="" src={menu} />
        </div>
        <div className={styles.menu1}>Menu</div>
      </div>
      <div className={styles.search}>
        <div className={styles.searchWrapper}>
          <img className={styles.searchIcon} alt="" src={search} />
        </div>
        <div className={styles.search1}>Search</div>
      </div>
      <div className={styles.footer1}>
        <div className={styles.personWrapper}>
          <img
            className={styles.personIcon}
            loading="lazy"
            alt=""
            src={person}
          />
        </div>
        <div className={styles.profile}>Profile</div>
      </div>
    </div>
  );
};

export default Footer;
