"use client";
import React from "react";
import { Button, Table } from "flowbite-react";
import CareerPortal from "./CareerPortal";

const JoinUs = () => {
  return (
    <div>
      <div className="px-10 py-5 lg:px-80 font-extrabold heading-text text-2xl lg:text-5xl text-start dark:text-white">
        <div>
          <span>Come, Start your Journey with Us</span>
        </div>
        <div className="py-5  ">
          <CareerPortal />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
