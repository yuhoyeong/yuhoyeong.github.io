import { useContext, useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import yoshi from "../../assets/yoshi.jpg";

function Hero() {
  const { isDarkMode } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <section id="hero" className={`${styles.hero} ${isDarkMode ? styles.dark : ""}`}>
      <div className={`${styles.heroContent} ${show ? styles.show : ""}`}>
        <h1>안녕하세요. 프론트엔드 개발자 유호영입니다.</h1>
        <h2>Web Developer & Designer </h2>
        <p>이것저것 합니다.</p>
        <div className={styles.heroButtons}>
          <button
            className={styles.btnFirst}
            onClick={() => (location.href = "https://github.com/yuhoyeong")}
          >
            My Github
          </button>
        </div>
      </div>
      <div className={`${styles.heroImage} ${show ? styles.show : ""}`}>
        <div className={styles.profileIcon}>
          <img src={yoshi} className={styles.faUser} alt="yoshi" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
