import FrameComponent6 from "./FrameComponent6";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.parent}>
            <h1 className={styles.h1}>트렌딩 앨범</h1>
            <div className={styles.frameDiv}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.div}>2</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameGroup}>
            <FrameComponent6
              rectangle1513="/rectangle-1513@2x.png"
              dITTO="UNFORGIVEN"
              prop="르세라핌"
              propDisplay="inline-block"
              propMinWidth="74px"
              dITTOTextAlign="left"
            />
            <FrameComponent6
              rectangle1513="/rectangle-1513-1@2x.png"
              dITTO="DITTO"
              prop=" 뉴진스"
            />
            <FrameComponent6
              rectangle1513="/rectangle-1513-2@2x.png"
              dITTO="LION HEART"
              prop=" 소녀시대"
              propDisplay="inline-block"
              propMinWidth="74px"
              dITTOTextAlign="center"
            />
            <FrameComponent6
              rectangle1513="/rectangle-1513-3@2x.png"
              dITTO="LOVE DIVE"
              prop="아이브"
              propDisplay="unset"
              propMinWidth="unset"
              dITTOTextAlign="center"
            />
            <FrameComponent6
              rectangle1513="/rectangle-1513-4@2x.png"
              dITTO="COOKIE JAR"
              prop="레드벨벳"
              propDisplay="inline-block"
              propMinWidth="74px"
              dITTOTextAlign="center"
            />
            <FrameComponent6
              rectangle1513="/rectangle-1513-5@2x.png"
              dITTO="NEVER DIE"
              prop="(여자)아이들"
              propDisplay="unset"
              propMinWidth="unset"
              dITTOTextAlign="center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
