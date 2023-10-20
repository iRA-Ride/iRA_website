"use client";

import { Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <section class="lg:py-10 py-4 px-5">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 class="mb-4 text-5xl font-extrabold tracking-tight leading-none heading-text md:text-6xl lg:text-7xl">
            Your Dream Ride, Every Time!
          </h1>
          <h1 class="mb-8 text-lg font-normal text-[#176b87] lg:text-2xl sm:px-16 lg:px-48">
            Experience the Journey You've Always Imagined.
          </h1>

          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link href="/SignIn">
              <Button
                color
                size="lg"
                className="text-white flex justify-center w-full lg:px-5 bg-blue-600 hover:bg-blue-700"
              >
                Log In
              </Button>
            </Link>
            <Link href="/SignUp">
              <Button
                color
                size="lg"
                className="text-white w-full px-4 bg-[#713ABE] hover:bg-[#5B0888]"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
