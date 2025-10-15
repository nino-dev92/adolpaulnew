import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { FaUserGraduate, FaBookOpen, FaAward } from "react-icons/fa";
import { FaPeopleGroup, FaHeart } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { CgEditBlackPoint } from "react-icons/cg";
import { FaDownload } from "react-icons/fa6";
import Whatsapp from "../Components/Whatsapp.jsx";
import "../Styles/Home/home.css";
import pdf from "../assets/fomsPdf/brochure.pdf";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <title>Adol Paul College</title>

      <Header />
      <main>
        <section className="hero">
          <div className="intro-text">
            <h1>
              ADOL PAUL COLLEGE
              <br /> OF
              <span style={{ color: "red" }}> HEALTH </span>
              AND <span style={{ color: "red" }}>TECHNOLOGY</span>
            </h1>
            <p>
              Empowering healthcare professionals with world-class education and
              training in health technology. Located in Utuh, we're committed to
              excellence in healthcare education.
            </p>
          </div>
          <div className="hero-btn-container">
            <Link to="/admissions">
              <button className="hero-btn">Apply for Admission</button>
            </Link>

            <a href={pdf} download="student-brochure">
              <button className="hero-btn brochure">
                <FaDownload style={{ marginRight: "10px" }} />
                Download Brochure
              </button>
            </a>
          </div>
        </section>
        <section className="hero-card-section" id="about">
          <div className="card">
            <div>
              <FaUserGraduate size={80} />
            </div>
            <div>
              <h2>500+</h2>
              <p>Graduates</p>
            </div>
          </div>
          <div className="card">
            <div>
              <FaPeopleGroup size={80} style={{ color: "green" }} />
            </div>
            <div>
              <h2>25+</h2>
              <p>Expert Faculty</p>
            </div>
          </div>
          <div className="card">
            <div>
              <FaBookOpen size={80} />
            </div>
            <div>
              <h2>8</h2>
              <p>Programs</p>
            </div>
          </div>
          <div className="card">
            <div>
              <FaAward size={80} style={{ color: "green" }} />
            </div>
            <div>
              <h2>15+</h2>
              <p>Years Excellence</p>
            </div>
          </div>
        </section>
        <section className="about-college">
          <div>
            <h2>About Our College</h2>
            <p>
              Adol Paul College of Health Technology has been a beacon of
              excellence in healthcare education, training skilled professionals
              who serve communities across Nigeria and beyond.
            </p>
          </div>

          <div>
            <h2>Our Mission</h2>
            <p>
              To provide quality, affordable, and accessible health technology
              education that produces competent, ethical, and innovative
              healthcare professionals capable of meeting the evolving
              healthcare needs of Nigeria and the global community.
            </p>
          </div>
          <div>
            <h2>Our Vision</h2>
            <p>
              To be a leading institution in health technology education,
              recognized for academic excellence, innovative research, and
              community service, producing graduates who are agents of positive
              change in the healthcare sector.
            </p>
          </div>
          <div className="why-choose-us">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>
                Accredited programs recognized by relevant Nigerian health
                professional bodies
              </li>
              <li>
                State-of-the-art laboratories and clinical training facilities
              </li>
              <li>
                Experienced faculty with practical healthcare industry
                experience
              </li>
              <li>
                Strong partnerships with hospitals and healthcare institutions
              </li>
              <li>Excellent job placement rates and career support services</li>
            </ul>
          </div>
        </section>
        <section className="about-card-section">
          <div className="about-card-container">
            <div className="about-card">
              <div className="image-div">
                <FaHeart size={40} style={{ color: "white" }} />
              </div>
              <div>
                <h2>Excellence in Healthcare</h2>
                <p>
                  We are committed to training competent healthcare
                  professionals who will make a difference in their communities.
                </p>
              </div>
            </div>
            <div className="about-card">
              <div className="image-div">
                <PiStudent size={40} style={{ color: "white" }} />
              </div>
              <div>
                <h2>Student-Centered Learning</h2>
                <p>
                  Our approach focuses on hands-on training, mentorship, and
                  personalized attention to ensure student success.
                </p>
              </div>
            </div>
            <div className="about-card">
              <div className="image-div">
                <TbWorld size={40} style={{ color: "white" }} />
              </div>
              <div>
                <h2>Community Impact</h2>
                <p>
                  We serve the healthcare needs of Utuh and surrounding
                  communities through quality education and services.
                </p>
              </div>
            </div>
            <div className="about-card">
              <div className="image-div">
                <CgEditBlackPoint size={40} style={{ color: "white" }} />
              </div>
              <div>
                <h2>Innovation & Growth</h2>
                <p>
                  We continuously update our curriculum and facilities to meet
                  evolving healthcare technology standards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Whatsapp />
      <Footer />
    </>
  );
}
export default Home;
