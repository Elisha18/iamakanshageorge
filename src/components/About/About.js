import React from "react";
import me2 from "../../img/profilepic.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about section" id="about">
      {/* <span className="section-subtitle">My intro</span> */}
      <h2 className="section-title">About Me</h2>

      <div className="about_container bd-grid">
        <div className="about_data">
          <p className="about_description">
            Hi! I am Akansha Elisha George. <br />
            A Frontend Developer and Designer based in Toronto, Canada.
            I have experience developing user-centric, single page applications using agile methodologies in eLearning, Real-Estate industries and Education sector.
            Coming from a background in academia, has taught me to understand the client's requirement and provide deliverables efficiently.
          </p>
          <img src={me2} alt="" className="about_img" />
        </div>

        <div>
          <div className="about_information">
            <h3 className="about_information-title">Information</h3>

            <div className="about_information-data">
              <i className="fas fa-user about_information-icon"></i>
              <span>Akansha Elisha George</span>
            </div>

            <div className="about_information-data">
              <i className="fas fa-map-marker-alt about_information-icon"></i>
              <span>Mississauga, ON, CA</span>
            </div>

            <div className="about_information-data">
              <i className="fas fa-phone-square-alt about_information-icon"></i>
              <span>905-379-3533</span>
            </div>

            <div className="about_information-data">
              <i className="fas fa-envelope about_information-icon "></i>
              <span>imelishageorge@gmail.com</span>
            </div>
          </div>

          <div className="about_information">
            <h3 className="about_information-title">Experience</h3>

            <div className="about_information-data">
              <i className="fas fa-info-circle about_information-icon"></i>
              <div>
                <span className="about_information-subtitle">5 years</span>
                <span className="about_information-subtitle-small">
                  Total Experience
                </span>
              </div>
            </div>

            <div className="about_information-data">
              <i className="fas fa-briefcase about_information-icon"></i>
              <div>
                <span className="about_information-subtitle">
                  3+ years
                </span>
                <span className="about_information-subtitle-small">
                  Relevant Experience
                </span>
              </div>
            </div>

            <div className="about_information-data">
              <i className="fas fa-lightbulb about_information-icon"></i>
              <div>
                <span className="about_information-subtitle">
                  Passion
                </span>
                <span className="about_information-subtitle-small">
                  Passionate about learning new technologies and keep growing as an Individual
                </span>
              </div>
            </div>

            <div className="about_information-data">
              <i className="fas fa-language about_information-icon"></i>
              <div>
                <span className="about_information-subtitle">
                  My Languages{" "}
                </span>
                <span className="about_information-subtitle-small">
                  Hindi - native, English - fluent
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
