import { useMemo } from "react";
import styles from "./FrameComponent8.module.css";

const FrameComponent8 = ({
  ellipse85,
  iFeel,
  rectangle1480,
  prop,
  vector,
  vector1,
  vector2,
  vector3,
  vector4,
  vectorIconWidth,
  vectorIconPadding,
  vectorIconAlignSelf,
  propMargin,
  propMinWidth,
  propMargin1,
  onContainerClick,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: vectorIconWidth,
      padding: vectorIconPadding,
      alignSelf: vectorIconAlignSelf,
    };
  }, [vectorIconWidth, vectorIconPadding, vectorIconAlignSelf]);

  const iFeelStyle = useMemo(() => {
    return {
      margin: propMargin,
      minWidth: propMinWidth,
    };
  }, [propMargin, propMinWidth]);

  const h2Style = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  return (
    <div className={styles.wrapper} style={frameDivStyle}>
      <div className={styles.div} onClick={onContainerClick}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
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
            <div className={styles.iFeelParent}>
              <h1 className={styles.iFeel} style={iFeelStyle}>
                {iFeel}
              </h1>
              <div className={styles.frame}>
                <div className={styles.div2}>(여자) 아이들</div>
              </div>
            </div>
          </div>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src={rectangle1480}
          />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.parent}>
              <h2 className={styles.h2} style={h2Style}>
                {prop}
              </h2>
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src={vector}
                />
                <img
                  className={styles.vectorIcon1}
                  loading="lazy"
                  alt=""
                  src={vector1}
                />
                <img
                  className={styles.vectorIcon2}
                  loading="lazy"
                  alt=""
                  src={vector2}
                />
                <img
                  className={styles.vectorIcon3}
                  loading="lazy"
                  alt=""
                  src={vector3}
                />
                <img className={styles.vectorIcon4} alt="" src={vector4} />
              </div>
            </div>
            <div className={styles.div3}>
              <p className={styles.p}>바람이 불어오는 곳</p>
              <p className={styles.p1}>그 곳으로 가네</p>
              <p className={styles.p2}>그대의 머릿결같은 나무 아래로</p>
              <p className={styles.p3}>덜컹이는 기차에..... 더보기</p>
            </div>
          </div>
          <div className={styles.div4}> 2024. 4. 1.</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
