import { ThemeContext } from "../../context/ThemeContext";
import styles from "./About.module.css";
import { use } from "react";

function About() {
  const { isDarkMode } = use(ThemeContext);

  return (
    <section
      id="about"
      className={`${styles.projects} ${isDarkMode ? styles.dark : ""}`}
    >
      <div className={`${styles.about} ${isDarkMode ? styles.dark : ""}`}>
        <h2
          className={`${styles.sectionTitle} ${isDarkMode ? styles.dark : ""}`}
        >
          About Me
        </h2>
        <div className={styles.aboutContents}>
          <div className={`${styles.stat} ${isDarkMode ? styles.dark : ""}`}>
            <h2>이름</h2>
            <p>유호영</p>
          </div>
          <div className={`${styles.stat} ${isDarkMode ? styles.dark : ""}`}>
            <h2>생년월일</h2>
            <p>05.10.26</p>
          </div>
          <div className={`${styles.stat} ${isDarkMode ? styles.dark : ""}`}>
            <h2>위치</h2>
            <p>부산광역시 장전동</p>
          </div>
          <div className={`${styles.stat} ${isDarkMode ? styles.dark : ""}`}>
            <h2>연락처</h2>
            <p>010-4585-9213</p>
          </div>
          <div className={`${styles.stat} ${isDarkMode ? styles.dark : ""}`}>
            <h2>이메일</h2>
            <p>hoyeong4585@naver.com</p>
          </div>
          <div className={`${styles.stat} ${isDarkMode ? styles.dark : ""}`}>
            <h2>학력</h2>
            <p>
              부산대학교 정보컴퓨터공학부 <br />
              컴퓨터공학전공
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
