import React from "react";
import { NavLink } from "react-router-dom";
import service1 from "../../images/yogaimg1.svg";

const Card = (props) => {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card border-0">
        <img
          src={props.imgsrc}
          className="card-img-top"
          alt="Image for the card"
        />
        <div className="card-body">
          <h5 className="card-title font-weight bold">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <NavLink to="/contact" className="btn-get-started">
            Get Info
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
