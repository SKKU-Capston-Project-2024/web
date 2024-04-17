import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import styles from "./HP.module.css";

const HP = () => {
  return (
    <div className={styles.hp}>
      <FrameComponent9 />
      <FrameComponent7 />
      <section className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.div}>4</div>
        </div>
        <div className={styles.frameGroup}>
          <FrameComponent5 />
          <FrameComponent4 />
        </div>
      </section>
      <FrameComponent3 />
      <div className={styles.dataAggregator}>
        <div className={styles.logicOperator}>
          <h1 className={styles.h1}>곡 별점</h1>
          <div className={styles.outputRenderer}>
            <div className={styles.treeStructure}>
              <div className={styles.parent}>
                <div className={styles.div1}>최근</div>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.div2}>인기</div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent2 />
      <FrameComponent />
    </div>
  );
};

export default HP;
