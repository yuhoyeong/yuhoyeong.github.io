import { use } from "react";
import styles from "./Header.module.css";
import { ThemeContext } from "../../context/ThemeContext";

function Header() {
  const { isDarkMode } = use(ThemeContext);

  return (
    <header className={`${styles.header} ${isDarkMode ? styles.dark : ""}`}>
      <div className={`${styles.logo} ${isDarkMode ? styles.dark : ""}`}>
        My Portfolio
      </div>
      <nav className={styles.nav}>
        <a
          href="#hero"
          className={`${styles.navLink} ${isDarkMode ? styles.dark : ""}`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`${styles.navLink} ${isDarkMode ? styles.dark : ""}`}
        >
          About
        </a>
        <a
          href="#skills"
          className={`${styles.navLink} ${isDarkMode ? styles.dark : ""}`}
        >
          Skills
        </a>
      </nav>
    </header>
  );
}

export default Header;
