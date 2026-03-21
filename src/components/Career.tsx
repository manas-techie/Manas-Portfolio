import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12th Grade</h4>
                <h5>N. J. K. Vidyapith</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed 12th grade with a focus on science and mathematics. Developed a strong foundation in core subjects and problem-solving skills. Prepared for higher education and future academic pursuits.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.tech(AI&ML)</h4>
                <h5>University of Engineering and Management</h5>
              </div>
              <h3>ongoing</h3>
            </div>
            <p>
              Pursuing a B.Tech degree with a specialization in Artificial Intelligence and Machine Learning. Gained a strong foundation in computer science principles, algorithms, and programming languages. Engaged in projects and coursework focused on AI and ML concepts, preparing for a career in the tech industry.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.tech Minor in Data Science</h4>
                <h5>University of Engineering and Management</h5>
              </div>
              <h3>ongoing</h3>
            </div>
            <p>
              Pursuing a B.Tech degree with a specialization in Data Science. Gained a strong foundation in data science principles, algorithms, and programming languages. Engaged in projects and coursework focused on data science concepts, preparing for a career in the tech industry.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mern Stack Intern</h4>
                <h5>Webstack Acedemmy</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Gained hands-on experience in building full-stack web applications using the MERN stack. Collaborated with cross-functional teams to design and implement scalable solutions. Developed a strong understanding of modern web development practices and technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
