import React from "react";
import { NavLink } from "react-router-dom";
import service1 from '../../images/yogaimg1.svg'
const Card = () => {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div class="card">
        <img src={service1} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <NavLink to="#" class="btn btn-primary">
            Get Info
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
