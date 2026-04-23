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
              <a href="mailto:pratham2k07@gmail.com?subject=Collaboration%20Inquiry&body=Hi%20Pratham%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding%20a%20potential%20collaboration%20or%20enquiry.%0A%0A" target="_blank" rel="noreferrer" data-cursor="disable">
                pratham2k07@gmail.com
              </a>
            </p>
            <h4>LinkedIn</h4>
            <p>
              <a href="https://www.linkedin.com/in/pratham-lalwani-40a221246/" target="_blank" rel="noreferrer" data-cursor="disable">
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
