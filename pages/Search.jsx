import React from "react";
import Header from "/components/navbars/Header";
import notFound from "public/location-not-found.svg";
import Image from "next/image";
import FooterWithLogo from "@/components/Footer";

const Search = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const location = queryParameters.get("Location");
  const destination = queryParameters.get("Destination");

  return (
    <div>
      <Header />
      <div className="grid grid-cols-2">
        <div>
          <Image
            src={notFound}
            className="lg:ml-20 lg:h-[500px] lg:w-[500px]"
          />
        </div>
        <div className="grid grid-rows-2">
          <span className="lg:font-black lg:text-[200px] heading-text uppercase">
            Oh no!
          </span>
          <span className="lg:font-medium sub-text lg:text-3xl text-center">
            No rides found from {location} to {destination}!!!
          </span>
        </div>
      </div>
      <FooterWithLogo />
    </div>
  );
};

export default Search;
