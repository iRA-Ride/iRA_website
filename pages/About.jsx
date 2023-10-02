import FooterWithLogo from "@/components/Footer";
import Header from "@/components/navbars/Header";
import { Placeholder } from "@/components/Placeholder";
import React from "react";

const About = () => {
  return (
    <div>
      <Header />
      <div className="px-10 py-5 lg:px-80 font-bold text-3xl lg:text-5xl text-start dark:text-white">
        <span>Velocity Unleashed, Ascending Together</span>
      </div>
      <div className="px-10 py-2 lg:px-80 lg:py-5 text-gray-600 text-base lg:text-sm dark:text-gray-400">
        <span>
          <p>
            At iRA, we're not just changing transportation; we're igniting a
            movement. We're the architects of journeys, from zipping through
            city streets to delivering essentials, be it cars, cuisines, or even
            a quick lift. This is our forte, executed with the finesse of now.
          </p>
        </span>
      </div>
      <div className="px-10 py-5 lg:px-80 font-bold text-2xl lg:text-4xl text-start dark:text-white">
        <span>Why iRA?</span>
      </div>
      <div className="px-10 py-2 lg:px-80 lg:py-5 text-gray-600 text-base lg:text-sm dark:text-gray-400">
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
      <div className="px-10 py-2 lg:px-80 text-gray-600 text-base lg:text-sm dark:text-gray-400">
        <span>
          <p>
            With iRA, you're not just joining a company; you're joining a
            revolution. Are you ready to ride the wave of change?"
          </p>
        </span>
      </div>
      <div className="p-5 lg:px-80 font-bold text-2xl lg:text-4xl text-start dark:text-white">
        <span>How iRA works?</span>
      </div>
      <Placeholder />
      <FooterWithLogo />
    </div>
  );
};

export default About;
