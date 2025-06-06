import { useContext } from "react";
import styles from "./Skills.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { SiSocketdotio } from "react-icons/si";

function Skills() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section
      id="skills"
      className={`${styles.skills} ${isDarkMode ? styles.dark : ""}`}
    >
      <h2 className={`${styles.sectionTitle} ${isDarkMode ? styles.dark : ""}`}>
        My Skills
      </h2>
      <div className={styles.skillsContents}>
        <div className={`${styles.skill} ${isDarkMode ? styles.dark : ""}`}>
          <FaHtml5 className={styles.icon} />
          <h1>HTML</h1>
        </div>
        <div className={`${styles.skill} ${isDarkMode ? styles.dark : ""}`}>
          <FaCss3Alt className={styles.icon} />
          <h2>CSS</h2>
        </div>
        <div className={`${styles.skill} ${isDarkMode ? styles.dark : ""}`}>
          <IoLogoJavascript className={styles.icon} />
          <h2>JavaScript</h2>
        </div>
        <div className={`${styles.skill} ${isDarkMode ? styles.dark : ""}`}>
          <SiTypescript className={styles.icon} />
          <h2>TypeScript</h2>
        </div>
        <div className={`${styles.skill} ${isDarkMode ? styles.dark : ""}`}>
          <FaReact className={styles.icon} />
          <h1>React</h1>
        </div>
        <div className={`${styles.skill} ${isDarkMode ? styles.dark : ""}`}>
          <VscGithub className={styles.icon} />
          <h2>VscGithub</h2>
        </div>
      </div>
    </section>
  );
}

export default Skills;
