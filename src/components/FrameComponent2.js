import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.div}>
        <div className={styles.inner}>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/ellipse-85@2x.png"
            />
            <div className={styles.container}>
              <div className={styles.div1}>아무거나듣는사람</div>
            </div>
          </div>
        </div>
        <div className={styles.child}>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.allergyWrapper}>
                    <h1 className={styles.allergy}>Allergy</h1>
                  </div>
                  <div className={styles.div2}>곡 한줄평</div>
                </div>
                <div className={styles.frame}>
                  <div className={styles.div3}>(여자)아이들</div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className={styles.vectorIcon1}
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className={styles.vectorIcon2}
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className={styles.vectorIcon3}
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
              </div>
              <div className={styles.div4}>작성일 2024. 4. 1.</div>
            </div>
          </div>
        </div>
        <div className={styles.favoriteBorder}>
          <img
            className={styles.vectorIcon5}
            loading="lazy"
            alt=""
            src="/vector-15.svg"
          />
          <div className={styles.wrapper1}>
            <div className={styles.div5}>76</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
