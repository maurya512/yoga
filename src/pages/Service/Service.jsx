import React from "react";
import Card from "../../components/Card/Card";
import CData from "../../components/Card/CardData";
import service1 from "../../images/yogaimg1.svg";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {/* mapping the data from CData file */}
              {/* mapping the data lets us access all the data and render it */}
              {CData.map((val, ind) => {
                // the data mapped from CData is treated as props and passed into the Card component and returned into the Card component as new array
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })}
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
