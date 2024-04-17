import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.hpInner}>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <h1 className={styles.h1}>플레이리스트</h1>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.group}>
                <div className={styles.div}>최근</div>
                <div className={styles.frameChild} />
              </div>
              <div className={styles.div1}>인기</div>
            </div>
          </div>
        </div>
        <FrameComponent1
          ellipse85="/ellipse-85@2x.png"
          rectangle1480="/rectangle-1480-2@2x.png"
          rectangle1479="/rectangle-1479@2x.png"
          rectangle1478="/rectangle-1478@2x.png"
          rectangle1477="/rectangle-1477@2x.png"
          rectangle14781="/rectangle-1478-1@2x.png"
          rectangle14791="/rectangle-1479-1@2x.png"
          vector="/vector-15.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
