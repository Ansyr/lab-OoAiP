import { classNames } from "@helpers/className";
import styles from "./CatalogPopularList.module.scss";
import { CatalogItemList } from "../../catalog-items-list/CatalogItemList";
import useSWR from "swr";
import fetcher from "../api/api";
import { Loader } from "../../../../../components/elements/loader/Loader";

const data = [
  {
    id: "1",
    name: "lorem",
    image_url:
      "https://volgograd.karnavaltk.ru/wa-data/public/shop/products/04/webp/56/33/23356/images/36340/36340.970x0.webp",
    price: {
      value: 1100,
    },
  },

  {
    id: "2",
    name: "lorem2",
    image_url:
      "https://volgograd.karnavaltk.ru/wa-data/public/shop/products/04/webp/56/33/23356/images/36340/36340.970x0.webp",
    price: {
      value: 1100,
    },
  },
  {
    id: "3",
    name: "lorem3",
    image_url:
      "https://volgograd.karnavaltk.ru/wa-data/public/shop/products/04/webp/56/33/23356/images/36340/36340.970x0.webp",
    price: {
      value: 1100,
    },
  },
];
export function CatalogPopularList(props) {
  const { data, error, isLoading } = useSWR("http://188.233.11.6:50000/products/", fetcher);
  const { className } = props;
  
  
  return (
    <section className={classNames(styles.CatalogPopularList, {}, [className])}>
      <h3>Популярное</h3>

      <CatalogItemList data={data} isLoading = {isLoading} />
     
    </section>
  );
}
