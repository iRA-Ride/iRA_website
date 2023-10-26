import FooterWithSocialMediaIcons from "/components/Footer";
import CareerHeader from "/components/navbars/CareerHeader";
import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const Locations = () => {
  return (
    <div>
      <CareerHeader />
      <div className="px-10 py-5 lg:px-80 heading-text font-extrabold text-4xl lg:text-6xl text-start ">
        <span>Locations</span>
      </div>
      <div className="px-10 py-2 lg:px-80 lg:py-5 sub-text text-md lg:text-lg ">
        <span>
          <p>Currently We are operating in the following locations:</p>
        </span>
      </div>
      <div className="lg:pl-80 px-10 py-5 mb-[210px] ">
        <Card className="p-2 my-2 shadow-none border-2 lg:w-[30%] w-[70%] bg-[#d5f8f6]">
          <div className=" text-start heading-text gap-5">
            <Typography className="font-medium py-2 px-2">
              Bangalore, India
            </Typography>
          </div>
        </Card>
      </div>

      <FooterWithSocialMediaIcons />
    </div>
  );
};

export default Locations;
