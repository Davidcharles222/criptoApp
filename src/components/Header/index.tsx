import styles from "./Header.module.css";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.container}>
      <Link to="/">
        <img src={logoImg} alt="Logo imagem cripto app" />{" "}
      </Link>
    </header>
  );
};

export default Header;
