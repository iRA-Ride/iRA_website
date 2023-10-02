import FooterWithSocialMediaIcons from "@/components/Footer";
import CareerHeader from "@/components/navbars/CareerHeader";
import React from "react";

const Life = () => {
  return (
    <div>
      <CareerHeader />
      <div className="lg:px-80 ">
        <div className="px-10 py-5 font-bold text-3xl lg:text-5xl text-start dark:text-white">
          <span>Life at iRA</span>
        </div>
        <div className="lg:px-10">
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
