import React from "react";
import "./index.css";
import Footer from "../../components/Footer";

import { AppData } from "../../Data";
import { FaGitAlt, FaRegWindowMaximize } from "react-icons/fa";

const projectData = AppData.ProjectArr;

const Projects = () => {
  return (
    <>
      <section className="column is-12 hero is-link animate__animated animate__fadeInLeft">
        <div className="hero-body">
          <p className="title">My Projects</p>
        </div>
      </section>

      <div className="is-flex is-flex-wrap-wrap is-justify-content-center">
        {projectData.map((singleProject) => {
          return (
            <div className="normal-card-width dropdown is-hoverable">
              <div className="dropdown-trigger">
                <figure
                  className="image is-16by9 extra-large"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu4"
                >
                  <img src={singleProject.images[0]} alt="Placeholder image" />
                </figure>
              </div>
              <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content">
                  <div className="dropdown-item">
                    <button
                      class="link-buttons button is-link is-outlined"
                      href={singleProject.github}
                    >
                      Github
                    </button>
                    <button
                      class="link-buttons button is-link is-outlined"
                      href={singleProject.deployLink}
                    >
                      Deployed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default Projects;