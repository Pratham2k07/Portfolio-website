import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <div className="about-skills">
          <h3 className="title">Skills</h3>
          <div className="skills-content" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            <p><strong>Programming:</strong> C, Python, JavaScript (learning)</p>
            <p><strong>Web Dev:</strong> HTML, CSS, JavaScript, JSON</p>
            <p><strong>Concepts:</strong> Logic Building, Data Structures, Problem Solving</p>
          </div>
        </div>
        <div className="about-me">
          <h3 className="title">About Me</h3>
          <p className="para" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', lineHeight: '1.6' }}>
            I am a Semester 2 (2026) Computer Science student currently building my foundation in programming and web development. I have experience with C and Python, and I am actively learning JavaScript and modern web technologies. I enjoy solving logical problems and converting algorithms into real-world applications, such as games and interactive web projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
