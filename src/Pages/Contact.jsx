import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import "../Styles/Contact/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    subjectselect: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully");
        location.reload();
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <title>Contact</title>

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
            <h3 className="contacth3">Contact Information</h3>
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
                    Adol Paul College of Health Technology Utuh, Anambra State
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
                  <p>Main Office: 08033019121, 07076092027</p>
                  <p>Admin: 09169555066</p>
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
                  <p>info@adolpaulcollege.edu.ng</p>
                  <p>admissions@adolpaulcollege.edu.ng</p>
                  <p>registrar@adolpaulcollege.edu.ng</p>
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
            <form onSubmit={handleSubmit}>
              <div className="form">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Your First Name"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="LastName">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Your Last Name"
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  name="number"
                  placeholder="Your Phone Number"
                  onChange={handleChange}
                />
                <label htmlFor="interest">Area of Intrest</label>
                <select
                  name="subjectselect"
                  id="subject"
                  onChange={handleChange}
                >
                  <option value="" selected>
                    Select an Area of Interest
                  </option>
                  <option value="enquiries">Enquiries</option>
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
                <textarea
                  name="message"
                  placeholder="Your Message"
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="form-btn">
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
