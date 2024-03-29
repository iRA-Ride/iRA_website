import FooterWithLogo from "/components/Footer";
import Header from "/components/navbars/Header";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { Document, Page } from "react-pdf";

const Policy = () => {
  return (
    <div>
      <Header />
      <div className="px-10 py-5 lg:px-80 mt-10 font-extrabold text-4xl lg:text-5xl heading-text">
        <span>iRA Privacy Policy</span>
      </div>
      <div className="px-5 py-5 lg:px-80">
        <iframe
          src="https://drive.google.com/file/d/1qqHvZOs1Sd70RTRwfHq22DbHpT2LPA4o/preview"
          className="lg:w-[820px] w-full h-[500px] lg:h-[530px] rounded-2xl"
        ></iframe>
      </div>
      <FooterWithLogo />
    </div>
  );
};

export default Policy;
