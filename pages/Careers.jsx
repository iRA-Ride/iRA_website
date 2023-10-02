"use client";
import FooterWithLogo from "@/components/Footer";
import CareerHeader from "@/components/navbars/CareerHeader";
import React from "react";
import Work from "@/components/careers/Work";
import VelocityUnleashed from "@/components/careers/VelocityUnleashed";
import WorkLocations from "@/components/careers/WorkLocations";
import LifeAtIRA from "@/components/careers/LifeAtIRA";
import MeetOurTeam from "@/components/careers/MeetOurTeam";
import JoinUs from "@/components/careers/JoinUs";

const Careers = () => {
  return (
    <div className="">
      <CareerHeader />
      <Work />
      <VelocityUnleashed />
      <WorkLocations />
      <LifeAtIRA />
      <MeetOurTeam />
      <JoinUs />
      <FooterWithLogo />
    </div>
  );
};

export default Careers;
