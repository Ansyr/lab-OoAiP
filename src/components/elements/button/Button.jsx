import { classNames } from "@helpers/className";
import styles from "./Button.module.scss";

export function Button(props) {
  const { onClick, className } = props;
  return (
    <button onClick={onClick}
    className={classNames (styles.button, {}, [className])}>
      {props.children}
    </button>
  );
}
