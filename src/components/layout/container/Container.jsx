import { classNames } from '../../../helpers/className';
import styles from './Container.module.scss'
export function Container(props) {
  return <div  className = {classNames(styles.container,{},[props.className])}>{props.children}</div>;
}
