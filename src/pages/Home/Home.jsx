import React from "react";
import { NavLink } from "react-router-dom";
import Common from "../../components/Common/Common";
// import images
import yoga1 from "../../images/yogaimg1.svg";

// even though each page has separate data, that data can be passed as props to child component that can be treated as a common component
const Home = () => {
  return (
    <>
      {/* pass the data from common as props */}
      <Common
        name="This year prioritize"
        brandname="you."
        tagline="Yoga Sessions, Workout Plans, Diet Plans and more."
        imgsrc={yoga1}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
