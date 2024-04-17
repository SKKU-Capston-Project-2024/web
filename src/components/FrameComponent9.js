import styles from "./FrameComponent9.module.css";

const FrameComponent9 = () => {
  return (
    <div className={styles.headerParent}>
      <div className={styles.header}>
        <b className={styles.mutopia}>Mutopia</b>
        <img
          className={styles.amusementPark3Icon}
          loading="lazy"
          alt=""
          src="/amusementpark-3@2x.png"
        />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.div}>6</div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.div1}>7</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
