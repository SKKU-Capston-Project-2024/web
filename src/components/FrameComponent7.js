import { useCallback } from "react";
import FrameComponent8 from "./FrameComponent8";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = () => {
  const onContainerClick = useCallback(() => {
    // Please sync "리뷰 페이지 (RPO) - 다른 사람이 적은 리뷰" to the project
  }, []);

  return (
    <section className={styles.hpInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.wrapper}>
            <h1 className={styles.h1}>팔로워들의 최근 업로드</h1>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.div}>1</div>
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
          onContainerClick={onContainerClick}
        />
      </div>
    </section>
  );
};

export default FrameComponent7;
