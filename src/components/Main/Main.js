import React from "react";
import photo2 from "../../img/profilepic.jpg";
import "./Main.css";

const Main = ({ handleShowMessaheClick }) => {
  return (
    <section className="main">
      <div className="home" id="home">
        <div className="home_container bd-grid">
          <div className="home_data">
            {/* <div className="flashing-icon" onClick={handleShowMessaheClick}>
              <i className="fas fa-info-circle"></i>
            </div> */}
            <div className="home_img">
              <img className="home_img" src={photo2} alt="" />
            </div>
            <h1 className="home_title">Akansha Elisha George</h1>
            <span className="home_profession">FrontEnd Developer</span>
            <div className="home_social">
              <a
                href="https://www.linkedin.com/in/akansha-elisha-george-02474139/"
                className="home_social-link"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/elisha_george_/"
                className="home_social-link"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://github.com/Elisha18"
                className="home_social-link"
                target="_blank"
              >
                <i className="fa fa-github"></i>
              </a>
            </div>
            <a
              download=""
              href="https://drive.google.com/uc?export=download&id=12HKJUiHiruwdQZUBwdT02DPGkMGKIgHK"
              className="btn home_button"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
