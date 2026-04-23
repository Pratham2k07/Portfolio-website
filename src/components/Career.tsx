import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Learning <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Science</h4>
                <h5>Semester 2 (2026)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Key Subjects: Programming in C, Python, Computer Fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Currently Learning</h4>
                <h5>Self-Taught & Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              - Advanced JavaScript<br />
              - DOM Manipulation<br />
              - Git and GitHub<br />
              - Building responsive web applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
