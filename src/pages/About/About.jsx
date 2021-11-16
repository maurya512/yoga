import React from "react";
import { NavLink } from "react-router-dom";
import Common from "../../components/Common/Common";
// import images
import yoga2 from "../../images/yogaimg2.svg";

const About = () => {
  return (
    <>
      {/* Define props in the parent component that can be used to get data from the child component */}
      <Common
        name="Our mission is to make healthy lifestyle affordable and accessible to "
        brandname="everyone."
        tagline="All our services come with a 30 day money back guarantee*."
        imgsrc={yoga2}
        visit="/service"
        btnname="Contact Now"
      />
    </>
  );
};

export default About;
