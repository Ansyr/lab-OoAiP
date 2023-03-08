import styles from "./MainPage.module.scss";
import { CatalogPopularList } from "../../modules/catalog/components/catalog-popular-list/catalog-item/CatalogPopularList";
import { BannerSlider } from "./banner-slider/BannerSlider";
import { Button } from "../../components/elements/button/Button";
import { Link } from "react-router-dom";

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

export function MainPage(props) {
  return (
    <div className={styles.MainPage}>
      <section className={styles.ban}>
        <BannerSlider />
      </section>
      <CatalogPopularList className={styles.list} data={data} />
      <Button className={styles.btn}>
        <Link to="/catalog">Перейти в каталог</Link>
      </Button>
    </div>
  );
}
