import React from "react";
import work1 from "../../img/ucertify.png";
import work2 from "../../img/portfolioimage.png";
// import work3 from "../../img/tcm.png";
import work4 from "../../img/edkentmediapage.png";
import work5 from '../../img/ozoprop.png';
import work6 from '../../img/newsfeed.png';
import work7 from '../../img/videorental.png';
import work8 from '../../img/medicalinventory.jpg';
import "./Works.css";

const Works = () => {
  return (
    <section className="works section" id="works">
      {/* <span className="section-subtitle">My Portfolio</span> */}
      <h2 className="section-title">Recent Work</h2>

      <div className="works_container bd-grid">
        {/* uCertify.com */}
        <div className="works_img">
          <img src={work1} alt="" />
          <div className="works_data">
            <div className="works-project-info">
              <div className="works_title">
                <h3>uCertify Learning</h3>
                <span>
                  {" "}
                  eLearning Platform providing IT solutions and courses with partners such as Pearson, Tata McGraw Hills, CompTIA etc.
                </span>
                <hr />
                <span>
                  Tech-stack used: CSS3, JSX, JavaScript/ES6, ReactJS, PHP, MySQL
                </span>
              </div>
              <a
                href="https://www.ucertify.com/"
                className="works_link"
                target="_blank"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Edkent Media Page */}
        <div className="works_img">
          <img src={work4} alt="" />
          <div className="works_data">
            <div className="works-project-info">
              <div className="works_title">
                <h3>Admin Dashboard Template UI</h3>
                <span>
                  {" "}
                  Created a template simliar to analytics dashboard with custom CSS and components.
                  Some enabled features like , user dropdown menu, tab buttons, accordion.
                </span>
                <hr />
                <span>
                  Tech-Stack used : CSS3, JSX, JavaScript/ES6, ReactJS , custom components.
                </span>
              </div>
              <a
                href="https://uc-aeg.github.io/edkentmediapage/"
                className="works_link"
                target="_blank"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

        {/* uCertify Testcase Management Tool */}
        <div className="works_img">
          {/* <img src={work3} alt="" /> */}
          {/* <!-- copy and paste. Modify height and width if desired. --> */}
          <iframe class="embeddedObject shadow resizable" name="embedded_content" scrolling="no" frameBorder="0" type="text/html"
            style={{ overflow: 'hidden', height: '364px', width: '485px' }} src="https://www.screencast.com/users/AkanshaGeorge/folders/Capture/media/5947eb8b-bd99-41f4-9bdf-df98a9875c8d/embed" autoPlay={true} webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
          <div className="works_data">
            <div className="works-project-info">
              <div className="works_title">
                <h3>uCertify's Testcase Management Tool</h3>
                <span>
                  {" "}
                  Created a Testcase Management Tool to provide real time synchronization between tool and GitHub. This project provided me extensive
                  hands-on experience with Github's REST API and it's integration on the platform using Github oAuth and tokens.
                  <span style={{ color: '#f44336', marginLeft: '3px', marginRight: '3px' }}>This is a video of prototype version as this tool was deployed on company's internal portal.</span>
                </span>
                <hr />
                <span>
                  Tech-Stack used : CSS3, JSX, JavaScript/ES6, ReactJS , Axios, PHP, MySQL.
                </span>
              </div>
              <a
                href="https://www.screencast.com/t/2ztLC0rijIXP"
                className="works_link"
                target="_blank"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio website */}
        <div className="works_img">
          <img src={work2} alt="" />
          <div className="works_data">
            <div className="works-project-info">
              <div className="works_title">
                <h3>My Portfolio Website</h3>
                <span> I created my portfolio website using JSX, CSS, JavaScript/ES6 and ReactJS with custom designed functional components.
                This website display information about me as an individual, about my education / experience and my work within the industries as well
                as my lesiure projects.
                </span>
              </div>
              <a
                href="https://elisha18.github.io/iamakanshageorge/"
                className="works_link"
                target="_blank"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Ozoprop Technologies */}
        <div className="works_img">
          <img src={work5} alt="" style={{ height: '281px' }} />
          <div className="works_data">
            <div className="works-project-info">
              <div className="works_title">
                <h3>Ozoprop technology</h3>
                <span>
                  This is a Real-Estate website which I re-designed and maintained for Ozoprop team. I also helped the
                  company with lead-gen using this website by enabling email marketing, SEO, embedding contact forms and CTA buttons.
                </span>
                <hr />
                <span>Tech-Stack used : CSHTML, CSS3, JavaScript/ES6, ASP.NET framework</span>
              </div>
              <a
                href="https://ozoprop.com"
                className="works_link"
                target="_blank"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Medical Inventory system for boxMd */}
        <div className="works_img">
          <img src={work8} alt="" style={{ height: '313px', objectFit: 'contain' }} />
          <div className="works_data">
            <div className="works-project-info">
              <div className="works_title">
                <h3>Medical Inventory System</h3>
                <span>
                  {" "}
                  This is a layout for Medical Inventory System I created during my leisure time.
                  This project mainly focused on building resusable components with
                  custom design, fetching data from REST API using Axios library and Admin dashboard with past medical record of users.
                  The sample code for this project can be found
                  <a style={{ textDecoration: 'underline', color: '#f44336' }} href="https://github.com/Elisha18/ReactApp" target="_blank"> on github profile</a>
                </span>
                <hr />
                <span>
                  Tech-Stack used: JSX, CSS3, Bootstrap3, JavaScript/ES6, ReactJS, Axios.
                </span>
              </div>
              <a
                href="https://elisha18.github.io/ReactApp/"
                className="works_link"
                target="_blank"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

        {/* News Feed App */}
        <div className="works_img">
          <img src={work6} alt="" style={{ height: '281px' }} />
          <div className="works_data">
            <div className="works-project-info">
              <div className="works_title">
                <h3>Ozoprop's News Feed App</h3>
                <span>
                  {" "}
                  This is a prototype version of News Feed application which was deployed on Ozoprop's internal domian. This uses news API to fetch data
                  from different news channel and contributors. The code for this sample project can be found
                  <a style={{ textDecoration: 'underline', color: '#f44336' }} href="https://github.com/Elisha18/news-App" target="_blank"> on github profile</a>
                </span>
                <hr />
                <span>
                  Tech-Stack used: AngularJS , Material UI.
                </span>
              </div>
              <a
                href="https://www.screencast.com/t/nnq9f3VTnLon"
                className="works_link"
                target="_blank"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Video Rental App */}
        <div className="works_img">
          <img src={work7} alt="" style={{ height: '313px', objectFit: 'contain' }} />
          <div className="works_data">
            <div className="works-project-info">
              <div className="works_title">
                <h3>Video Rental App</h3>
                <span>
                  {" "}
                  This is a small video rental app which I created in my leisure time. This project mainly focused on building resusable components with
                  custom design, building REST API using NodeJS, ExpressJS and MongoDB. For login and register, to provide password encryption I have used node's bycrpyt.js library.
                  The sample code for this project can be found
                  <a style={{ textDecoration: 'underline', color: '#f44336' }} href="https://github.com/Elisha18" target="_blank"> on github profile</a>
                </span>
                <hr />
                <span>
                  Tech-Stack used: JSX, CSS3, Bootstrap3, JavaScript/ES6, ReactJS, NodeJS, ExpressJS, MongoDB.
                </span>
              </div>
              <a
                href="https://www.screencast.com/t/E5rNjMognXm"
                className="works_link"
                target="_blank"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Works;
