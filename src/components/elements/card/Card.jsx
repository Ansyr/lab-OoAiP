import { classNames } from '../../../helpers/className';
import styles from './Card.module.scss'

export function Card(props) {
    const { className,fullWidth, ...otherProps } = props;
    return (
      <div className={classNames(styles.Card,{[styles.fullWidth]: fullWidth},[className])} {...otherProps}>{props.children}</div>
    )
    
  }