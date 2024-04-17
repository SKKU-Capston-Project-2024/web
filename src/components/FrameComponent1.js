import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  ellipse85,
  rectangle1480,
  rectangle1479,
  rectangle1478,
  rectangle1477,
  rectangle14781,
  rectangle14791,
  vector,
  propPadding,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.wrapper} style={frameDiv1Style}>
      <div className={styles.div}>
        <div className={styles.inner}>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src={ellipse85}
                />
                <div className={styles.container}>
                  <div className={styles.div1}>아무거나듣는사람</div>
                </div>
              </div>
            </div>
            <div className={styles.frame}>
              <div className={styles.div2}>작성일 2024. 4. 1.</div>
            </div>
          </div>
        </div>
        <div className={styles.child}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src={rectangle1480}
            />
            <img className={styles.frameInner} alt="" src={rectangle1479} />
            <img className={styles.rectangleIcon} alt="" src={rectangle1478} />
            <img className={styles.frameChild1} alt="" src={rectangle1477} />
            <img className={styles.frameChild2} alt="" src={rectangle14781} />
            <img className={styles.frameChild3} alt="" src={rectangle14791} />
          </div>
        </div>
        <div className={styles.kPopWrapper}>
          <div className={styles.kPop}>K-pop 여름 플레이리스트</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameDiv}>
            <div className={styles.div3}>플레이리스트 설명 ....더보기</div>
          </div>
          <div className={styles.favoriteBorder}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src={vector}
            />
            <div className={styles.wrapper1}>
              <div className={styles.div4}>76</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
