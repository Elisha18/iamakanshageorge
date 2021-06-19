import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Experience</h2>
      <span className="section-subtitle">Coding Skills</span>
      <div className="skills_contatiner bd-grid">
        <div className="skills_content">
          <div className="skills_data">
            <span className="skills_name">Html/css </span>
            <span className="skills_number">90% </span>
            <span className="skills_bar skills_html"></span>
          </div>
          <div className="skills_data">
            <span className="skills_name">JavaScript/ES6</span>
            <span className="skills_number">90% </span>
            <span className="skills_bar skills_js"></span>
          </div>
          <div className="skills_data">
            <span className="skills_name">jQuery/Bootstrap5</span>
            <span className="skills_number">90% </span>
            <span className="skills_bar skills_js"></span>
          </div>
          <div className="skills_data">
            <span className="skills_name">React.js </span>
            <span className="skills_number">80% </span>
            <span className="skills_bar skills_react"></span>
          </div>
          <div className="skills_data">
            <span className="skills_name">NodeJS</span>
            <span className="skills_number">50% </span>
            <span className="skills_bar skills_node"></span>
          </div>
          <div className="skills_data">
            <span className="skills_name">PHP</span>
            <span className="skills_number">60% </span>
            <span className="skills_bar skills_php"></span>
          </div>
        </div>
      </div>
      <span className="section-subtitle" style={{ marginTop: '6rem' }}>Automation Testing Skills</span>
      <div className="skills_contatiner bd-grid">
        <div className="skills_content">
          <div className="skills_data">
            <span className="skills_name">Cypress</span>
            <span className="skills_number">80% </span>
            <span className="skills_bar skills_react"></span>
          </div>
          <div className="skills_data">
            <span className="skills_name">Jest</span>
            <span className="skills_number">70% </span>
            <span className="skills_bar skills_jest"></span>
          </div>
          <div className="skills_data">
            <span className="skills_name">Test Driven Development (TDD)</span>
            <span className="skills_number">70% </span>
            <span className="skills_bar skills_jest"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
