import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Whatsapp from "../Components/Whatsapp";
import { CiCircleAlert } from "react-icons/ci";
import { FaDownload } from "react-icons/fa6";
import "../Styles/Admissions/admissions.css";
import pdf from "../assets/fomsPdf/application/appForm.pdf";
function Admissions() {
  return (
    <>
      <Header />
      <main>
        <section className="intro">
          <div className="intro-text">
            <h2>Join Our Community</h2>
            <p>
              Start your journey towards a rewarding healthcare career. Learn
              about our admission process, requirements, and important
              deadlines.
            </p>
          </div>
          <div className="admission-process">
            <h2>Admission Process</h2>
            <div className="admission-process-card-container">
              <div className="admission-process-card">
                <div className="circle">
                  <p>1</p>
                </div>
                <div>
                  <h3>Application Submission</h3>
                  <p>
                    Complete and submit your application form with required
                    documents
                  </p>
                  <button>January - August</button>
                </div>
              </div>
              <div className="admission-process-card">
                <div className="circle">
                  <p>2</p>
                </div>
                <div>
                  <h3>Document Verification</h3>
                  <p>
                    Submit original certificates for verification and
                    authentication
                  </p>
                  <button>Within 2 weeks</button>
                </div>
              </div>
              <div className="admission-process-card">
                <div className="circle">
                  <p>1</p>
                </div>
                <div>
                  <h3>Entrance Examination</h3>
                  <p>
                    Take the college entrance examination (where applicable)
                  </p>
                  <button>September</button>
                </div>
              </div>
              <div className="admission-process-card">
                <div className="circle">
                  <p>4</p>
                </div>
                <div>
                  <h3>Interview & Screening</h3>
                  <p>Attend interview session and medical screening</p>
                  <button>September - October</button>
                </div>
              </div>
              <div className="admission-process-card">
                <div className="circle">
                  <p>5</p>
                </div>
                <div>
                  <h3>Admission Offer</h3>
                  <p>Receive admission letter and complete registration</p>
                  <button>October - November</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="program-requirements">
          <div className="diploma-requirements">
            <h2>Diploma Program Requirements</h2>
            <ul>
              <li>
                Senior Secondary Certificate (SSCE/NECO/GCE) with minimum 5
                credits
              </li>
              <li>Credits must include English Language and Mathematics</li>
              <li>
                Relevant science subjects (Biology, Chemistry, Physics) based on
                program
              </li>
              <li>Minimum age of 16 years at the time of admission</li>
              <li>Medical fitness certificate from recognized hospital</li>
              <li>Two recent passport photographs</li>
              <li>Birth certificate or age declaration</li>
              <li>Local Government Identification Letter</li>
            </ul>
          </div>
          <div className="hnd-requirements">
            <h2>HND Program Requirements</h2>
            <ul>
              <li>
                National Diploma (ND) in relevant field with minimum Lower
                Credit
              </li>
              <li>One year post-ND work experience (IT/NYSC acceptable)</li>
              <li>JAMB Direct Entry form (where required)</li>
              <li>ND transcript and certificate</li>
              <li>IT/NYSC discharge certificate</li>
              <li>Medical fitness certificate</li>
              <li>Two recent passport photographs</li>
              <li>Updated curriculum vitae (CV)</li>
            </ul>
          </div>
        </section>
        <section className="important-dates">
          <h2>Important Dates 2024/2025 Session</h2>
          <div className="important-dates-card-container">
            <div className="important-dates-card">
              <div className="important-dates-card-text">
                <h3>Application Opens</h3>
                <p>January 15, 2024</p>
              </div>
              <div>
                <button
                  className="important-btn"
                  style={{ backgroundColor: "green", color: "white" }}
                >
                  open
                </button>
              </div>
            </div>
            <div className="important-dates-card">
              <div className="important-dates-card-text">
                <h3>Application Deadline</h3>
                <p>August 31, 2024</p>
              </div>
              <div>
                <button className="important-btn">upcoming</button>
              </div>
            </div>
            <div className="important-dates-card">
              <div className="important-dates-card-text">
                <h3>Entrance Examination</h3>
                <p>September 15, 2024</p>
              </div>
              <div>
                <button className="important-btn">upcoming</button>
              </div>
            </div>
            <div className="important-dates-card">
              <div className="important-dates-card-text">
                <h3>Interview/Screening</h3>
                <p>September 25-30, 2024</p>
              </div>
              <div>
                <button className="important-btn">upcoming</button>
              </div>
            </div>
            <div className="important-dates-card">
              <div className="important-dates-card-text">
                <h3>Admission List Release</h3>
                <p>October 15, 2024</p>
              </div>
              <div>
                <button className="important-btn">upcoming</button>
              </div>
            </div>
            <div className="important-dates-card">
              <div className="important-dates-card-text">
                <h3>Registration Begins</h3>
                <p>November 1, 2024</p>
              </div>
              <div>
                <button className="important-btn">upcoming</button>
              </div>
            </div>
          </div>
        </section>
        <section className="fee-structure">
          <h2>Fee Structure</h2>
          <h3>2024/2025 Academic Session Fees</h3>
          <p>All fees are in Nigerian Naira (₦) and subject to review</p>
          <table>
            <thead>
              <th style={{ width: "35rem", textAlign: "left" }}>Fee Item</th>
              <th>Amount</th>
              <th style={{ textAlign: "right" }}>Note</th>
            </thead>
            <tr>
              <td style={{ textAlign: "left" }}>Application Form</td>
              <td>
                <b>₦5,000</b>
              </td>
              <td style={{ textAlign: "right" }}>Non-refundable</td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>Acceptance Fee</td>
              <td>
                <b>₦50,000</b>
              </td>
              <td style={{ textAlign: "right" }}>One-time payment</td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>Tuition Fee (Per Session)</td>
              <td>
                <b>₦150,000 - ₦200,000</b>
              </td>
              <td style={{ textAlign: "right" }}>Varies by program</td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>Accommodation (Per Session)</td>
              <td>
                <b>₦80,000</b>
              </td>
              <td style={{ textAlign: "right" }}>Optional</td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>Development Levy</td>
              <td>
                <b>₦25,000</b>
              </td>
              <td style={{ textAlign: "right" }}>Annual</td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>Medical/Lab Fee</td>
              <td>
                <b>₦30,000</b>
              </td>
              <td style={{ textAlign: "right" }}>Per session</td>
            </tr>
          </table>
        </section>
        <section className="payment-info">
          <div className="payment-text">
            <h2>
              <CiCircleAlert />
              Payment Information
            </h2>
          </div>
          <div className="list">
            <ul>
              <li>
                Fees can be paid in installments (50% on admission, 50%
                mid-session)
              </li>
              <li>
                Payment can be made via bank transfer or at designated banks
              </li>
              <li>Additional fees may apply for late registration</li>
              <li>
                Scholarships and financial aid available for qualified students
              </li>
            </ul>
          </div>
        </section>
        <section className="ready-to-apply">
          <div>
            <h2>Ready to Apply?</h2>
            <p>
              Take the first step towards your healthcare career. Download our
              application form or visit our admissions office for personalized
              guidance.
            </p>
          </div>
          <div className="btn-container">
            <a href={pdf} download="application-form">
              <button>
                <FaDownload style={{ marginRight: "10px" }} />
                Download Application Form
              </button>
            </a>
          </div>
        </section>
      </main>
      <Whatsapp />
      <Footer />
    </>
  );
}
export default Admissions;
