import { AppImage } from '@components/elements/app-image/AppImage';
import { Card } from '@components/elements/card/Card'
import { classNames } from '@helpers/className';
import styles from './CatalogItem.module.scss'

export function CatalogItem(props) {
    const { data , className ,fullWidth , extra} = props;
    return <Card className = {classNames(styles.CatalogItem,{},[className])} fullWidth>
       <AppImage className={styles.infoImage} src = {data.image_url}/>
       <span className={styles.infoText}>
        {data.name}
      
        <br />{data.price.value} Руб.
       </span>
        {extra}
    </Card>
  }