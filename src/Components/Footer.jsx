import "../Styles/Footer/footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <nav>
      <footer className="footer">
        <div className="footer-div-one">
          {" "}
          <div className="info-div">
            <div>
              <h3>Adol Paul College of health and Technology</h3>
              <p>
                Empowering healthcare professionals with world-class education
                and training in health technology since our establishment.
              </p>
            </div>
            <div className="info-div-links">
              <a href="mailto:info@adolpaulcollege.edu.ng" target="_blank">
                <MdOutlineMailOutline style={{ color: "white" }} size="30" />
              </a>
              <a href="https://x.com/Adolpaulcoht?s=09" target="_blank">
                <FaSquareXTwitter style={{ color: "black" }} size="30" />
              </a>
              <a
                href="https://www.instagram.com/adolpaulcoht?utm_source=qr&igsh=MzQ0YTJ6d2hnMXZ3"
                target="_blank"
              >
                <FaInstagram style={{ color: "red" }} size="30" />
              </a>
            </div>
          </div>
          <div className="quick-links">
            <div>
              <h3>Quick Links</h3>
            </div>
            <div className="quick-links-link">
              <Link to="/">Home</Link>
              <Link to="/programs">Programs</Link>
              <Link to="/admissions">Admissions</Link>
              <Link to="/facilities">Facilities</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="programs-div">
            <div>
              <h3>Programs</h3>
            </div>
            <div className="programs-div-links">
              <Link to="/programs">Community Health (CHEW)</Link>
              <Link to="/programs">Community Health Officer</Link>
              <Link to="/programs">Health Information Management</Link>
              <Link to="/programs">Environmental Health</Link>
              <Link to="/programs">Medical Laboratory Tech</Link>
              <Link to="/programs">Pharmacy Technology</Link>
            </div>
          </div>
          <div className="contact-div">
            <div>
              <h3>Contact Us</h3>
            </div>
            <div className="contact-info">
              <p>
                <FaLocationDot style={{ marginRight: "4px" }} />
                Adol Paul College of Health Technology Utuh, Nigeria.
              </p>
              <p>
                <BsFillTelephoneFill /> 08033019121
              </p>
              <p>
                <MdOutlineMailOutline /> info@adolpaulcollege.edu.ng
              </p>
            </div>
          </div>
        </div>
        <div className="footer-div-two">
          <div>
            <p>
              copyright &copy; {year} Adol Paul College of Health Technology.
              All rights reserved.
            </p>
          </div>
          <div className="second-div-p">
            <p>Terms of Service</p>
            <p>Student HandBook</p>
          </div>
        </div>
      </footer>
    </nav>
  );
}
export default Footer;
