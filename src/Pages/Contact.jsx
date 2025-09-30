import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import "../Styles/Contact/contact.css";

function Contact() {
  function submit(e) {
    e.preventDefault();
    location.reload();
  }
  return (
    <>
      <Header />
      <main>
        <section className="contact-intro-text">
          <h2>Get in Touch</h2>
          <p>
            Ready to start your healthcare career? Contact us today for more
            information about our programs, admissions, or to schedule a campus
            visit.
          </p>
        </section>
        <section className="contact-section">
          <div>
            <h3>Contact Information</h3>
            <div className="contact-info-card-container">
              <div className="contact-info-card">
                <div className="contact-info-card-image">
                  <div className="border-radius">
                    <FaLocationDot size={30} style={{ color: "white" }} />
                  </div>
                </div>
                <div className="contact-info-card-text">
                  <h3>Campus Address</h3>
                  <p>
                    Adol Paul College of Health Technology Utuh, Enugu State
                    Nigeria
                  </p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-card-image">
                  <div className="border-radius">
                    <BsFillTelephoneFill size={30} style={{ color: "white" }} />
                  </div>
                </div>
                <div className="contact-info-card-text">
                  <h3>Phone Numbers</h3>
                  <p>Main Office: 08033019121</p>
                  <p>Admissions: 09016955066</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-card-image">
                  <div className="border-radius">
                    <MdOutlineMailOutline
                      size={30}
                      style={{ color: "white" }}
                    />
                  </div>
                </div>
                <div className="contact-info-card-text">
                  <h3>Email Addresses</h3>
                  <p>General Info: info@adolpaulcollege.edu.ng</p>
                  <p>Admissions: admissions@adolpaulcollege.edu.ng</p>
                  <p>Registrar: registrar@adolpaulcollege.edu.ng</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-card-image">
                  <div className="border-radius">
                    <FaLocationDot size={30} style={{ color: "white" }} />
                  </div>
                </div>
                <div className="contact-info-card-text">
                  <h3>Campus Address</h3>
                  <p>
                    Adol Paul College of Health Technology Utuh, Enugu State
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="form-div">
            <h3>Send Us A Message</h3>
            <p>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
            <form method="post">
              <div className="form">
                <label htmlFor="firstName">First Name</label>
                <input type="text" placeholder="Your First Name" />
                <label htmlFor="LastName">Last Name</label>
                <input type="text" placeholder="Your Last Name" />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Your Email" />
                <label htmlFor="phone">Phone</label>
                <input type="number" placeholder="Your Phone Number" />
                <label htmlFor="interest">Area of Intrest</label>
                <select name="subject-select" id="subject">
                  <option value="" selected>
                    Select an Area of Interest
                  </option>
                  <option value="communityhealth">
                    Community Health (CHEW)
                  </option>
                  <option
                    value="communityhealthofficer"
                    name="communityhealthofficer"
                  >
                    Community Health Officer
                  </option>
                  <option value="healthinformationmanagement">
                    Health Information Management
                  </option>
                  <option value="environmentalhealth">
                    Environmental Health
                  </option>
                  <option value="medicallabtech">
                    Medical Laboratory Tech
                  </option>
                  <option value="pharmacytechnology">
                    Pharmacy Technology
                  </option>
                </select>
                <label htmlFor="textarea">Your Message</label>
                <textarea placeholder="Your Message" />
                <button type="submit" className="form-btn" onClick={submit}>
                  <FiSend style={{ marginRight: "5px" }} />
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Contact;
