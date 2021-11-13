// the common component that can be used as a blue print between home and about components to grab and display data
import React from "react";
import { NavLink } from "react-router-dom";
import yoga2 from "../../images/yogaimg1.svg";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{props.name} <strong className="brand-name">{props.brandname}</strong></h1>
                  {/* sub tagline */}
                  <h2 className="my-3">{props.tagline}</h2>
                  <div className="mt-3">
                    <NavLink to="/service" className="btn-get-started">
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>
                {/* about image */}
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
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

export default Common;
