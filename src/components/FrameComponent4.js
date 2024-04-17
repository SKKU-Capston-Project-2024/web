import Footer from "./Footer";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  return (
    <div className={styles.footerParent}>
      <Footer
        home="/home.svg"
        menu="/menu.svg"
        search="/search.svg"
        person="/person.svg"
      />
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.div}>3</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
