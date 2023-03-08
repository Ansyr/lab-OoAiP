import { Button } from "@components/elements/button/Button";
import { classNames } from "@helpers/className";
import { CatalogItem } from "../catalog-item/CatalogItem";
import styles from "./CatalogItemList.module.scss";
import { Loader } from "../../../../components/elements/loader/Loader";

export function CatalogItemList(props) {
  const { data, className ,extraForItem, isLoading} = props;
  if (isLoading) {
    return (
      <div className={classNames(styles.central, {}, [])}>
        <Loader />
      </div>
    );
  }
  if(!data){
    console.log(data)
    return 'Продукты не найдены'
  }
  return (
    
  
      <div className={classNames(styles.CatalogItemList, {}, [className])}>
        
        {data.map((item) => (
          <CatalogItem
            data={item}
            fullWidth
            extra={extraForItem}
          />
        ))}
      </div>
      
  );
}
