import React from "react";
import { NavLink } from "react-router-dom";
// import images
import yoga2 from "../../images/yogaimg1.svg";

const About = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Our mission wih <strong className="brand-name">yoga</strong>{" "}
                    is to provide easy and accessible exercise solutions to
                  </h1>
                  {/* sub tagline */}
                  <h2 className="my-3">Find out how</h2>
                  <div className="mt-3">
                    <NavLink to="/service" className="btn-get-started">
                      Check us Out
                    </NavLink>
                  </div>
                </div>
                {/* about image */}
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={yoga2}
                    className="img-fluid animated"
                    alt="home screen img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
