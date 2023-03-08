import styles from "./Overlay.module.scss";
import { classNames } from "@helpers/className";
import {memo} from "react";
export const Overlay = memo((props) => {
    const { className, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={classNames(styles.Overlay, {}, [className])}
      />
    );
  });