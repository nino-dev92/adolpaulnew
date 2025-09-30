import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Whatsapp from "../Components/Whatsapp";
import { LuClock4 } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { FaBookOpen } from "react-icons/fa6";
import "../Styles/Programs/programs.css";

function Programs() {
  return (
    <>
      <Header />
      <main>
        <section className="intro-section">
          <div className="intro-text">
            <h2>Academic Programs</h2>
            <p>
              Our comprehensive programs are designed according to the Nigerian
              College of Health Technology curriculum standards, ensuring
              graduates meet national healthcare workforce requirements.
            </p>
          </div>
        </section>
        <section className="card-section">
          <div className="program-card">
            <div className="card-top-section">
              <div>
                <button className="card-btn">Diploma</button>
              </div>

              <div>
                <LuClock4 /> 2 Years
              </div>
            </div>
            <div className="card-text">
              <h2>Community Health Extension Worker (CHEW)</h2>
              <p>
                Train to provide primary healthcare services at the community
                level, focusing on preventive care, health education, and basic
                treatment.
              </p>
            </div>
            <div className="key-modules">
              <h2>
                <FaBookOpen
                  size={20}
                  style={{ marginRight: ".5rem", color: "green" }}
                />
                Key Modules
              </h2>
              <div className="modules">
                <button className="key-modules-btn">
                  Community Health Principles
                </button>
                <button className="key-modules-btn">
                  Primary Healthcare Delivery
                </button>
                <button className="key-modules-btn">
                  Disease Prevention & Control
                </button>
                <button className="key-modules-btn">
                  Maternal & Child Health
                </button>
              </div>
            </div>
            <div className="career-opportunities">
              <div>
                <h2>
                  <GoPeople style={{ color: "green" }} /> Career Opportunities
                </h2>
              </div>
              <div>
                <ul>
                  <li>Community Health Officer</li>
                  <li>Public Health Assistant</li>
                  <li> Health Educator</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="program-card">
            <div className="card-top-section">
              <div>
                <button className="card-btn">Higher National Diploma</button>
              </div>

              <div>
                <LuClock4 /> 3 Years
              </div>
            </div>
            <div className="card-text">
              <h2>Community Health Officer (CHO)</h2>
              <p>
                Advanced training in community health management, supervision,
                and healthcare program implementation at local government level.
              </p>
            </div>
            <div className="key-modules">
              <h2>
                <FaBookOpen
                  size={20}
                  style={{ marginRight: ".5rem", color: "green" }}
                />
                Key Modules
              </h2>
              <div className="modules">
                <button className="key-modules-btn">
                  Advanced Community Health
                </button>
                <button className="key-modules-btn">
                  Healthcare Management
                </button>
                <button className="key-modules-btn">
                  Epidemiology & Biostatistics
                </button>
                <button className="key-modules-btn">
                  Health Policy & Planning
                </button>
              </div>
            </div>
            <div className="career-opportunities">
              <div>
                <h2>
                  <GoPeople style={{ color: "green" }} /> Career Opportunities
                </h2>
              </div>
              <div>
                <ul>
                  <li>Community Health Coordinator</li>
                  <li>Public Health Manager</li>
                  <li>Health Program Officer</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="program-card">
            <div className="card-top-section">
              <div>
                <button className="card-btn">Diploma/ HND</button>
              </div>

              <div>
                <LuClock4 /> 2-3 Years
              </div>
            </div>
            <div className="card-text">
              <h2>Health Information Management (HIM)</h2>
              <p>
                Specialize in managing patient records, health data analysis,
                and healthcare information systems in medical facilities.
              </p>
            </div>
            <div className="key-modules">
              <h2>
                <FaBookOpen
                  size={20}
                  style={{ marginRight: ".5rem", color: "green" }}
                />
                Key Modules
              </h2>
              <div className="modules">
                <button className="key-modules-btn">
                  Health Information Systems
                </button>
                <button className="key-modules-btn">Medical Terminology</button>
                <button className="key-modules-btn">
                  Medical Coding (ICD-10)
                </button>

                <button className="key-modules-btn">Database Management</button>
              </div>
            </div>
            <div className="career-opportunities">
              <div>
                <h2>
                  <GoPeople style={{ color: "green" }} /> Career Opportunities
                </h2>
              </div>
              <div>
                <ul>
                  <li>Health Information Manager</li>
                  <li>Medical Records Officer</li>
                  <li>Health Data Analyst</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="program-card">
            <div className="card-top-section">
              <div>
                <button className="card-btn">Diploma/HND</button>
              </div>

              <div>
                <LuClock4 /> 2-3 Years
              </div>
            </div>
            <div className="card-text">
              <h2>Environmental Health Technology</h2>
              <p>
                Focus on environmental factors affecting public health,
                including water quality, sanitation, and pollution control.
              </p>
            </div>
            <div className="key-modules">
              <h2>
                <FaBookOpen
                  size={20}
                  style={{ marginRight: ".5rem", color: "green" }}
                />
                Key Modules
              </h2>
              <div className="modules">
                <button className="key-modules-btn">
                  Environmental Health Principles
                </button>
                <button className="key-modules-btn">
                  Water & Sanitation Management
                </button>
                <button className="key-modules-btn">
                  Food Safety & Hygiene
                </button>
                <button className="key-modules-btn">Waste Management</button>
              </div>
            </div>
            <div className="career-opportunities">
              <div>
                <h2>
                  <GoPeople style={{ color: "green" }} /> Career Opportunities
                </h2>
              </div>
              <div>
                <ul>
                  <li>Environmental Health Officer</li>
                  <li>Public Health Inspector</li>
                  <li> Water Quality Analyst</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="program-card">
            <div className="card-top-section">
              <div>
                <button className="card-btn">Higher National Diploma</button>
              </div>

              <div>
                <LuClock4 /> 3 Years
              </div>
            </div>
            <div className="card-text">
              <h2>Medical Laboratory Technology</h2>
              <p>
                Train to perform laboratory tests, analyze specimens, and
                support medical diagnosis in healthcare facilities.
              </p>
            </div>
            <div className="key-modules">
              <h2>
                <FaBookOpen
                  size={20}
                  style={{ marginRight: ".5rem", color: "green" }}
                />
                Key Modules
              </h2>
              <div className="modules">
                <button className="key-modules-btn">
                  Hematology & Blood Banking
                </button>
                <button className="key-modules-btn">Clinical Chemistry</button>
                <button className="key-modules-btn">
                  Medical Microbiology
                </button>
                <button className="key-modules-btn">
                  Clinical Parasitology
                </button>
              </div>
            </div>
            <div className="career-opportunities">
              <div>
                <h2>
                  <GoPeople style={{ color: "green" }} /> Career Opportunities
                </h2>
              </div>
              <div>
                <ul>
                  <li>Medical Laboratory Scientist</li>
                  <li>Clinical Laboratory Technician</li>
                  <li> Blood Bank Technologist</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="program-card">
            <div className="card-top-section">
              <div>
                <button className="card-btn">Diploma/HND</button>
              </div>

              <div>
                <LuClock4 /> 2-3 Years
              </div>
            </div>
            <div className="card-text">
              <h2>Pharmacy Technology</h2>
              <p>
                Learn pharmaceutical care, drug dispensing, and pharmacy
                operations under professional pharmacist supervision.
              </p>
            </div>
            <div className="key-modules">
              <h2>
                <FaBookOpen
                  size={20}
                  style={{ marginRight: ".5rem", color: "green" }}
                />
                Key Modules
              </h2>
              <div className="modules">
                <button className="key-modules-btn">
                  Pharmacology & Therapeutics
                </button>
                <button className="key-modules-btn">
                  Pharmaceutical Sciences
                </button>
                <button className="key-modules-btn">
                  Drug Dispensing & Counseling
                </button>
                <button className="key-modules-btn">Pharmacy Practice</button>
              </div>
            </div>
            <div className="career-opportunities">
              <div>
                <h2>
                  <GoPeople style={{ color: "green" }} /> Career Opportunities
                </h2>
              </div>
              <div>
                <ul>
                  <li>Pharmacy Technician</li>
                  <li>Hospital Pharmacy Assistant</li>
                  <li> Community Pharmacy Technician</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="program-card">
            <div className="card-top-section">
              <div>
                <button className="card-btn">Higher National Diploma</button>
              </div>

              <div>
                <LuClock4 /> 3 Years
              </div>
            </div>
            <div className="card-text">
              <h2>Dental Therapy</h2>
              <p>
                Provide preventive and basic restorative dental care under the
                supervision of qualified dentists.
              </p>
            </div>
            <div className="key-modules">
              <h2>
                <FaBookOpen
                  size={20}
                  style={{ marginRight: ".5rem", color: "green" }}
                />
                Key Modules
              </h2>
              <div className="modules">
                <button className="key-modules-btn">
                  Oral Health Sciences
                </button>
                <button className="key-modules-btn">
                  Oral Health Sciences
                </button>
                <button className="key-modules-btn">
                  Preventive Dentistry
                </button>
                <button className="key-modules-btn">
                  Restorative Procedures
                </button>
                <button className="key-modules-btn">
                  Oral Health Education
                </button>
              </div>
            </div>
            <div className="career-opportunities">
              <div>
                <h2>
                  <GoPeople style={{ color: "green" }} /> Career Opportunities
                </h2>
              </div>
              <div>
                <ul>
                  <li>Dental Therapist</li>
                  <li>Oral Health Educator</li>
                  <li> Community Dental Officer</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="program-card">
            <div className="card-top-section">
              <div>
                <button className="card-btn">Diploma/ HND</button>
              </div>

              <div>
                <LuClock4 /> 2-3 Years
              </div>
            </div>
            <div className="card-text">
              <h2>Optometry Technology</h2>
              <p>
                Train in eye care services, vision testing, and optical
                dispensing to support optometric practice.
              </p>
            </div>
            <div className="key-modules">
              <h2>
                <FaBookOpen
                  size={20}
                  style={{ marginRight: ".5rem", color: "green" }}
                />
                Key Modules
              </h2>
              <div className="modules">
                <button className="key-modules-btn">
                  Ocular Anatomy & Physiology
                </button>
                <button className="key-modules-btn">Vision Science</button>
                <button className="key-modules-btn">Optical Dispensing</button>
                <button className="key-modules-btn">
                  Restorative Procedures
                </button>
                <button className="key-modules-btn">
                  Contact Lens Technology
                </button>
              </div>
            </div>
            <div className="career-opportunities">
              <div>
                <h2>
                  <GoPeople style={{ color: "green" }} /> Career Opportunities
                </h2>
              </div>
              <div>
                <ul>
                  <li>Optometry Assistant</li>
                  <li>Optical Technician</li>
                  <li> Vision Therapist</li>
                </ul>
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
export default Programs;
