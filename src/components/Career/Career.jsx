import styles from "./Career.module.css";

function Career() {
  return (
    <section id="Career" className={styles.contact}>
      <h3 className={styles.heading}>Career</h3>
      <div className={styles.Career}>
        <div className={styles.careerItem}>
          <h4>2023.01 ~ 2023.12</h4>
          <p>프론트엔드 개발자</p>
          <p>회사명: ABC Corp</p>
          <p>주요 업무: 웹 애플리케이션 개발 및 유지보수</p>
        </div>
        <div className={styles.careerItem}>
          <h4>2022.01 ~ 2022.12</h4>
          <p>웹 개발 인턴</p>
          <p>회사명: XYZ Ltd</p>
          <p>주요 업무: 프론트엔드 개발 지원 및 버그 수정</p>
        </div>
      </div>
    </section>
  );
}

export default Career;
