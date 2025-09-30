import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Whatsapp from "../Components/Whatsapp";
import Lab from "../assets/pics/modern-lab.jpeg";
import Library from "../assets/pics/library.jpeg";
import CampusBuilding from "../assets/pics/campus.jpeg";
import TransportFleet from "../assets/pics/transport-fleet.jpeg";
import MobileHealth from "../assets/pics/mobile-health.jpeg";
import ClinicLogo from "../assets/logo/hospital.png";
import Hostel from "../assets/logo/hostel.png";
import Water from "../assets/logo/water.png";
import MedLab from "../assets/logo/microscope.png";
import Running from "../assets/logo/running.png";
import Cafeteria from "../assets/logo/cafeteria.png";
import "../Styles/Facilities/facilities.css";

function Facilities() {
  return (
    <>
      <Header />
      <main>
        <section className="fac-intro-text">
          <h2>World-Class Facilities</h2>
          <p>
            Our modern facilities provide students with the best environment for
            learning, practical training, and professional development in health
            technology.
          </p>
        </section>
        <section className="facility-card-container">
          <div className="facility-card">
            <div className="image-div">
              <img src={Lab} alt="laboratory" className="image" />
              <h2>Modern Laboratory</h2>
            </div>
            <div className="card-div-two">
              <p>
                State-of-the-art computer lab equipped with latest desktop
                systems for digital literacy and health information management
                training.
              </p>
            </div>
            <div className="btn-container">
              <button>30+ Desktop Computers</button>
              <button>High-Speed Internet</button>
              <button>Software Training</button>
              <button>Digital Skills Development</button>
            </div>
          </div>
          <div className="facility-card">
            <div className="image-div">
              <img src={Library} alt="laboratory" className="image" />
              <h2>Well-Stocked Library</h2>
            </div>
            <div className="card-div-two">
              <p>
                Comprehensive library with extensive collection of medical and
                health technology resources for research and study. training.
              </p>
            </div>
            <div className="btn-container">
              <button>Medical Textbooks</button>
              <button>Research Journals</button>
              <button>Digital Resources</button>
              <button>Study Spaces</button>
            </div>
          </div>
          <div className="facility-card">
            <div className="image-div">
              <img src={CampusBuilding} alt="laboratory" className="image" />
              <h2>Campus Buildings</h2>
            </div>
            <div className="card-div-two">
              <p>
                Modern, purpose-built facilities designed to provide optimal
                learning environments for health technology education.
              </p>
            </div>
            <div className="btn-container">
              <button>Lecture Halls</button>
              <button>Laboratory Spaces</button>
              <button>Administrative Offices</button>
              <button>Student Areas</button>
            </div>
          </div>
          <div className="facility-card">
            <div className="image-div">
              <img src={TransportFleet} alt="laboratory" className="image" />
              <h2>Transportation Fleet</h2>
            </div>
            <div className="card-div-two">
              <p>
                Dedicated vehicles for student field trips, clinical rotations,
                and community health outreach programs.
              </p>
            </div>
            <div className="btn-container">
              <button>Student Transport</button>
              <button>Field Trips</button>
              <button>Clinical Rotations</button>
              <button>Community Outreach</button>
            </div>
          </div>
          <div className="facility-card">
            <div className="image-div">
              <img src={MobileHealth} alt="laboratory" className="image" />
              <h2>Mobile Health Services</h2>
            </div>
            <div className="card-div-two">
              <p>
                Equipped vehicles for community health education and outreach
                programs in rural and underserved areas.
              </p>
            </div>
            <div className="btn-container">
              <button>Health Education</button>
              <button>Community Outreach</button>
              <button>Rural Services</button>
              <button>Practical Training</button>
            </div>
          </div>
          <div className="facility-card">
            <div className="image-div">
              <img src={MobileHealth} alt="laboratory" className="image" />
              <h2 className="img2 imgh2">Medical Laboratories</h2>
            </div>
            <div className="card-div-two">
              <p className="img2">
                Equipped with modern medical laboratories for academic purposes
                and research.
              </p>
            </div>
            <div className="btn-container img2">
              <button>Health Education</button>
              <button>Community Outreach</button>
              <button>Medical Equipment</button>
              <button>Practical Training</button>
            </div>
          </div>
        </section>
        <section className="additional-facilities">
          <h2>Additional Campus Facilities</h2>
          <div className="additional-card-holder">
            <div className="additional-card">
              <img
                src={ClinicLogo}
                alt="clinic-image"
                width={60}
                className="img"
              />
              <h3>Clinical Training Labs</h3>
              <p>
                Fully equipped laboratories for hands-on clinical skills
                training
              </p>
            </div>
            <div className="additional-card">
              <img src={MedLab} alt="clinic-image" width={60} className="img" />
              <h3>Medical Laboratory</h3>
              <p>
                Modern laboratory facilities for medical technology programs
              </p>
            </div>
            <div className="additional-card">
              <img
                src={Running}
                alt="clinic-image"
                width={60}
                className="img"
              />
              <h3>Sports & Recreation</h3>
              <p>
                Sports facilities and recreational areas for student wellness
              </p>
            </div>
            <div className="additional-card">
              <img
                src={Cafeteria}
                alt="clinic-image"
                width={60}
                className="img"
              />
              <h3>Cafeteria</h3>
              <p>
                On-campus dining facilities providing healthy meals for students
              </p>
            </div>
            <div className="additional-card">
              <img src={Hostel} alt="clinic-image" width={60} className="img" />
              <h3>Student Hostel</h3>
              <p>
                Safe and comfortable accommodation for students from distant
                locations
              </p>
            </div>
            <div className="additional-card">
              <img src={Water} alt="clinic-image" width={60} className="img" />
              <h3>Water & Utilities</h3>
              <p>Reliable water supply and modern utility infrastructure</p>
            </div>
          </div>
        </section>
        <section className="infrastructure-highlight">
          <div>
            <h2>Infrastructure Highlights</h2>
          </div>
          <div className="infrastructure-card-holder">
            <div className="infrastructure-card">
              <h2>15+</h2>
              <p>Specialized Laboratories</p>
            </div>
            <div className="infrastructure-card">
              <h2>24/7</h2>
              <p>Power & Water Supply</p>
            </div>
            <div className="infrastructure-card">
              <h2>500+</h2>
              <p>Student Capacity</p>
            </div>
          </div>
        </section>
      </main>
      <Whatsapp />
      <Footer />
    </>
  );
}
export default Facilities;
