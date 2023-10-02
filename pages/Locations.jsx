"use client";

import { ListGroup } from "flowbite-react";
import FooterWithSocialMediaIcons from "@/components/Footer";
import CareerHeader from "@/components/navbars/CareerHeader";
import React from "react";

const Locations = () => {
  return (
    <div>
      <CareerHeader />
      <div className="px-10 py-5 lg:px-80 font-bold text-3xl lg:text-5xl text-start dark:text-white">
        <span>Locations</span>
      </div>
      <div className="px-10 py-2 lg:px-80 lg:py-5 text-gray-600 text-base lg:text-sm dark:text-gray-400">
        <span>
          <p>Currently We are operating in the following locations:</p>
        </span>
      </div>
      <div className="lg:pl-80 py-2 lg:pr-[1000px]">
        <ListGroup className="">
          <ListGroup.Item>Location 1</ListGroup.Item>
          <ListGroup.Item>Location 2</ListGroup.Item>
          <ListGroup.Item>Location 3</ListGroup.Item>
          <ListGroup.Item>Location 4</ListGroup.Item>
          <ListGroup.Item>Location 5</ListGroup.Item>
          <ListGroup.Item>Location 6</ListGroup.Item>
        </ListGroup>
      </div>

      <FooterWithSocialMediaIcons />
    </div>
  );
};

export default Locations;
