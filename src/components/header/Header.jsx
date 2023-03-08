import { AppImage } from "../elements/app-image/AppImage";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import { Container } from "@components/layout/container/Container";
import { Link } from "react-router-dom";

export function Header(props) {
  return (
    <div className={styles.header}>
      <Container className = {styles.dFlex}>
        <AppImage src={logo} className={styles.logo} />

        <nav className={styles.menu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link to = '/'>Главная</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to = '/catalog'>Каталог</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}
