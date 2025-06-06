import styles from "./Project.module.css";

const projectList = [
  {
    title: "Zoom in React",
    description: "WebRTC를 활용한 화상회의 웹앱",
    techStack: ["React", "Socket.IO", "Express", "WebRTC"],
    image: "/images/zoom-clone.png",
    github: "https://github.com/username/zoom-in-react",
    demo: "https://zoom-in-react.vercel.app",
  },
  // 다른 프로젝트도 여기에 추가!
];

function Project() {
  return (
    <section id="Project" className={styles.projectSection}>
      <h3 className={styles.heading}>Projects</h3>
      <div className={styles.projectGrid}>
        {projectList.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <h4 className={styles.projectTitle}>{project.title}</h4>
            <p className={styles.projectDesc}>{project.description}</p> 
            <ul className={styles.techList}>
              {project.techStack.map((tech, i) => (
                <li key={i} className={styles.techItem}>
                  {tech}
                </li>
              ))}
            </ul>
            <div className={styles.links}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
