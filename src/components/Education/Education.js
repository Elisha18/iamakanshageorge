import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="education section" id="education">
      {/* <span className="section-subtitle">Qualification</span> */}
      <h2 className="section-title">Education / Experience</h2>
      <div className="education_container bd-grid">
        <div className="education_content">
          <div>
            <h3 className="education_year">2009 - 2013</h3>
            <span className="education_university">Sam Higginbottom Institute of Agriculture, Technology and Sciences</span>
          </div>
          <div className="education_time">
            <span className="education_rounder"></span>
            <span className="education_line"></span>
          </div>

          <div>
            <h3 className="education_race">Bachelor's in Technology</h3>
            <span className="education_specialty">Electronics and Computer Sciences</span>
          </div>
        </div>
        <div className="education_content">
          <div>
            <h3 className="education_year">2013 - 2015</h3>
            <span className="education_university">Sam Higginbottom Institute of Agriculture, Technology and Sciences</span>
          </div>
          <div className="education_time">
            <span className="education_rounder"></span>
            <span className="education_line"></span>
          </div>

          <div>
            <h3 className="education_race">Master's in Technology</h3>
            <span className="education_specialty">Electronics and Computer Sciences</span>
          </div>
        </div>

        <div className="education_content">
          <div>
            <h3 className="education_year">2015-2019</h3>
            <span className="education_university">Ewing Chritian College</span>
          </div>
          <div className="education_time">
            <span className="education_rounder"></span>
            <span className="education_line"></span>
          </div>

          <div>
            <h3 className="education_race">Web Development Technologies -</h3>
            <span className="education_specialty">HTML5, CSS3, Bootstrap3, JavsScript/ES6, jQuery, PHP<br />Assistant Professor</span>
          </div>
        </div>

        <div className="education_content">
          <div>
            <h3 className="education_year">2019-2020</h3>
            <span className="education_university">ABC Institute For Training</span>
          </div>
          <div className="education_time">
            <span className="education_rounder"></span>
            <span className="education_line"></span>
          </div>

          <div>
            <h3 className="education_race">
              Tech-Stack : HTML,CSS,JavaScript/ES6, jQuery, Bootstrap3, ReactJS, Java<br />

            </h3>
            <span className="education_specialty">Full Stack Development Training</span>
          </div>
        </div>
        <div className="education_content">
          <div>
            <h3 className="education_year">Mar 2020 - June 2020</h3>
            <span className="education_university">Ozoprop Technologies</span>
          </div>
          <div className="education_time">
            <span className="education_rounder"></span>
            <span className="education_line"></span>
          </div>

          <div>
            <h3 className="education_race">
              Tech-Stack : JavaScript/ES6, jQuery, Bootstrap3, ReactJS, ASP.NET, MySQL
            </h3>
            <span className="education_specialty">Software Developer - Front-End</span>
          </div>
        </div>

        <div className="education_content">
          <div>
            <h3 className="education_year">June 2020 - Present</h3>
            <span className="education_university">uCertify Learning PVT. LTD.</span>
          </div>
          <div className="education_time">
            <span className="education_rounder"></span>
            <span className="education_line"></span>
          </div>

          <div>
            <h3 className="education_race">
              Tech-Stack : JavaScript/ES6, jQuery, Bootstrap5, ReactJS, PHP, NodeJS, Cypress.io, Jest Unit Testing, TDD, ADA compliance
            </h3>
            <span className="education_specialty">Web Application Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
