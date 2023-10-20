import FooterWithLogo from "@/components/Footer";
import Header from "@/components/navbars/Header";
import { Placeholder } from "@/components/Placeholder";
import React from "react";

const About = () => {
  return (
    <div>
      <Header />
      <div className="px-10 py-5 mt-5 lg:px-80 font-extrabold text-3xl lg:text-6xl text-start heading-text">
        <span>Velocity Unleashed, Ascending Together</span>
      </div>
      <div className="px-10 py-2 lg:pl-80 lg:pr-96 lg:py-5 sub-text text-base lg:text-lg dark:text-gray-400">
        <span>
          <p>
            At iRA, we're not just changing transportation; we're igniting a
            movement. We're the architects of journeys, from zipping through
            city streets to delivering essentials, be it cars, cuisines, or even
            a quick lift. This is our forte, executed with the finesse of now.
          </p>
        </span>
      </div>
      <div className="px-10 py-5 lg:px-80 font-extrabold text-2xl lg:text-5xl text-start heading-text">
        <span>Why iRA?</span>
      </div>
      <div className="px-10 py-2 text-base sub-text lg:pl-80 lg:pr-96 lg:py-5 lg:text-lg dark:text-gray-400">
        <span>
          <p>
            Because we don't just adapt; we innovate in real-time, on countless
            urban thoroughfares, turning everyday moments into extraordinary
            experiences. Our canvas is vast, presenting challenges that demand
            audacious strokes of brilliance. We're on the lookout for
            trailblazers, those who build with compassion and pursue solutions
            with relentless optimism.
          </p>
        </span>
      </div>
      <div className="px-10 py-2 sub-text lg:pl-80 lg:pr-96 lg:py-5 lg:text-lg">
        <span>
          <p>
            With iRA, you're not just joining a company; you're joining a
            revolution. Are you ready to ride the wave of change?
          </p>
        </span>
      </div>
      <div className="p-5 lg:px-80 lg:pt-10 font-bold text-2xl lg:text-5xl heading-text text-start ">
        <span>How iRA works?</span>
      </div>
      <Placeholder />
      <FooterWithLogo />
    </div>
  );
};

export default About;
