import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pratham2k07@gmail.com&su=Collaboration%20Inquiry&body=Hi%20Pratham,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I%27d%20like%20to%20discuss..." target="_blank" rel="noreferrer" data-cursor="disable">
                pratham2k07@gmail.com
              </a>
            </p>
            <h4>LinkedIn</h4>
            <p>
              <a href="https://linkedin.com" target="_blank" data-cursor="disable">
                Connect on LinkedIn
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Pratham2k07"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Pratham Lalwani</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
