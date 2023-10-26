import React from "react";
import CareerHeader from "/components/navbars/CareerHeader";
import FooterWithLogo from "/components/Footer";

const Team = () => {
  return (
    <div>
      <CareerHeader />
      <div className="px-10 py-5 mt-5 lg:px-80 font-extrabold text-3xl lg:text-6xl text-start heading-text">
        <span>Team</span>
      </div>
      <div className="px-10 py-2 lg:pl-80 lg:pr-96 mb-[340px] lg:py-5 sub-text text-base lg:text-lg">
        <span>Our Team</span>
      </div>
      <FooterWithLogo />
    </div>
  );
};

export default Team;
