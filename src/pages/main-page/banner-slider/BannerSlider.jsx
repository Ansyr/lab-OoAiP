import { Carousel } from "react-responsive-carousel";
import styles from "./BannerSlider.module.scss";
import { AppImage } from "@components/elements/app-image/AppImage";

export function BannerSlider(props) {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      useKeyboardArrows
      autoPlay
      showStatus={false}
    >
      <div className={styles.block}>
        <AppImage
          src={"https://i.ibb.co/s9PJzq6/123.png"}
          className={styles.image}
        />
      </div>
      <div className={styles.block}>
        <AppImage
          src={
            "https://party-boom.ru/upload/iblock/c36/rz07xvk7gg0byer6zu0d1fg1f0z0uvqo/unicornbig.jpg"
          }
          className={styles.image}
        />
      </div>
      <div className={styles.block}>
        <AppImage
          src={
            "https://party-boom.ru/upload/iblock/04b/kz83ihy5o6hotfw0mlcxsd7a0yvcgf8u/2a4c141a-ec63-4e1e-91cb-c0002b1ca801%20copy.jpg"
          }
          className={styles.image}
        />
      </div>
      <div className={styles.block}>
        <AppImage
          src={
            "https://party-boom.ru/upload/iblock/184/57q9hzfehfdwgymfgoo80kml0kcdlyp2/%D0%91%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.png"
          }
          className={styles.image}
        />
      </div>
      <div className={styles.block}>
        <AppImage
          src={
            "https://party-boom.ru/upload/iblock/a2b/%D1%82%D1%80%D0%B8%20%D0%BA%D0%BE%D1%82%D0%B0%201+%20(1).jpg"
          }
          className={styles.image}
        />
      </div>
    </Carousel>
  );
}
