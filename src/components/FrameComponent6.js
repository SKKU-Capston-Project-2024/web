import { useMemo } from "react";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({
  rectangle1513,
  dITTO,
  prop,
  propDisplay,
  propMinWidth,
  dITTOTextAlign,
}) => {
  const dITTOStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      textAlign: dITTOTextAlign,
    };
  }, [propDisplay, propMinWidth, dITTOTextAlign]);

  return (
    <div className={styles.rectangleParent}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src={rectangle1513}
      />
      <div className={styles.ditto} style={dITTOStyle}>
        {dITTO}
      </div>
      <div className={styles.div}>{prop}</div>
    </div>
  );
};

export default FrameComponent6;
