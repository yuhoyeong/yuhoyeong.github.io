import { use } from "react";
import styles from "./Footer.module.css";
import { ThemeContext } from "../../context/ThemeContext";

function Footer() {
  const { isDarkMode } = use(ThemeContext);

  return (
    <footer className={`${styles.footer} ${isDarkMode ? styles.dark : ""}`}>
      <p>© 2025. Yu Ho yeong. All rights reserved..</p>
    </footer>
  );
}

export default Footer;
