import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Information Technology</h4>
                <h5>NIT Jalandhar</h5>
              </div>
              <h3>2020 - 2024</h3>
            </div>
            <p>
              Completed Bachelor of Technology in Information Technology. Focused on software engineering, database management systems, algorithms, and modern web development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Engineer - Full Stack</h4>
                <h5>CDAC</h5>
              </div>
              <h3>2023 - 2024</h3>
            </div>
            <p>
              Built and deployed 3+ enterprise-scale web applications. Developed 15+ RESTful APIs and automated processing pipelines using Python and Node.js, reducing review times by 80%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.S. Information Systems</h4>
                <h5>Wright State University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing Master of Science in Information Systems, maintaining a 4.0/4.0 GPA. Coursework includes NLP, Machine Learning, Data Analytics, and AI Systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
