import React from "react";
import velocityUnleashed from "/public/pics/velocity_unleashed.jpeg";
import Image from "next/image";

const Content1 = () => {
  return (
    <div className="my-10 grid grid-cols-1 lg:grid-cols-3">
      <div className="col-span-2">
        <div className="px-10 py-5 lg:pl-80 font-extrabold heading-text text-3xl lg:text-5xl text-start ">
          <p>Velocity Unleashed,</p>
          <p> Ascending Together</p>
        </div>
        <div className="lg:flex lg:pl-80 lg:p-5 px-10 py-5 gap-8 sub-text text-base lg:text-lg">
          <span>
            At iRA, we're not just changing transportation; we're igniting a
            movement. We're the architects of journeys, from zipping through
            city streets to delivering essentials, be it cars, cuisines, or even
            a quick lift. This is our forte, executed with the finesse of now.
            Why iRA? Because we don't just adapt; we innovate in real-time, on
            countless urban thoroughfares, turning everyday moments into
            extraordinary experiences. Our canvas is vast, presenting challenges
            that demand audacious strokes of brilliance. We're on the lookout
            for trailblazers, those who build with compassion and pursue
            solutions with relentless optimism. With iRA, you're not just
            joining a company; you're joining a revolution. Are you ready to
            ride the wave of change?"
          </span>
        </div>
      </div>
      <div className="px-10 py-5 lg:px-0 ">
        <Image
          src={velocityUnleashed}
          alt="Velocity Unleashed"
          priority={false}
          className="w-96 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Content1;
