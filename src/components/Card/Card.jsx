import React from "react";
import { NavLink } from "react-router-dom";
import service1 from "../../images/yogaimg1.svg";
const Card = () => {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card">
        <img src={service1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <NavLink to="#" className="btn btn-primary">
            Get Info
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
