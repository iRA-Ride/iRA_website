import FooterWithSocialMediaIcons from "@/components/Footer";
import CareerHeader from "@/components/navbars/CareerHeader";
import React from "react";

const Life = () => {
  return (
    <div>
      <CareerHeader />
      <div className="lg:px-80 ">
        <div className="px-10 py-5 pt-10 font-extrabold heading-text text-4xl lg:text-6xl text-start ">
          <span>Life at iRA</span>
        </div>
        <div className="lg:px-10 text-md lg:text-lg sub-text lg:pr-40 lg:pb-60 lg:py-5">
          <span>
            At iRA, we cherish the diversity of thought that shapes our
            platform. We provide the freedom to work on your own terms, offer
            benefits to empower your best self, and uphold an unwavering
            commitment to ethical practices. This is more than a job; it's a
            culture of inclusivity and integrity, where every voice matters.
          </span>
        </div>
      </div>
      <FooterWithSocialMediaIcons />
    </div>
  );
};

export default Life;
