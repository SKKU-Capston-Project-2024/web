import { useCallback } from "react";
import FrameComponent8 from "./FrameComponent8";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  const onContainerClick = useCallback(() => {
    // Please sync "리뷰 페이지 (RPO) - 다른 사람이 적은 리뷰" to the project
  }, []);

  return (
    <section className={styles.hpInner}>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <h1 className={styles.h1}>앨범 리뷰</h1>
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
        <FrameComponent8
          ellipse85="/ellipse-85@2x.png"
          iFeel="I feel"
          rectangle1480="/rectangle-1480@2x.png"
          prop="아이들 리뷰 제목"
          vector="/vector.svg"
          vector1="/vector.svg"
          vector2="/vector.svg"
          vector3="/vector.svg"
          vector4="/vector-4.svg"
          vectorIconWidth="unset"
          vectorIconPadding="0px var(--padding-sm)"
          vectorIconAlignSelf="stretch"
          propMargin="0"
          propMinWidth="54px"
          propMargin1="0"
          onContainerClick={onContainerClick}
        />
      </div>
    </section>
  );
};

export default FrameComponent3;
