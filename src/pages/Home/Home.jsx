import React from "react";
import { NavLink } from "react-router-dom";
// import images
import yoga1 from "../../images/yogaimg1.svg";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              {/* separates the screen and their contents into 2 things */}
              <div className="row">
                {/* left side of the screen */}
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    This year the focus should be on{" "}
                    <strong className="brand-name">YOU!!</strong>
                  </h1>
                  {/* margin top and bottom 3 */}
                  <h2 className="my-3">
                    Your first step towards a healthy life style
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/about" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                </div>

                {/* header image */}
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={yoga1}
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

export default Home;
