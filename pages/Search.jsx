import React, { useEffect, useState } from "react";
import Header from "/components/navbars/Header";
import notFound from "public/pics/location-not-found.svg";
import Image from "next/image";
import FooterWithLogo from "/components/Footer";

const parameters = () => {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [returnDestination, setReturnDestination] = useState("");
  const [rideSharing, setRideSharing] = useState(false);
  const [returnTrip, setReturnTrip] = useState(false);

  let hasParam = false;

  useEffect(() => {
    if (!hasParam) {
      hasParam = true; // to prevent infinite loop

      const queryParameters = new URLSearchParams(window.location.search);
      const location = queryParameters.get("Location");
      const destination = queryParameters.get("Destination");
      const sharing = queryParameters.get("Sharing");
      const returnTrip = queryParameters.get("Return");
      const returnDestination = queryParameters.get("ReturnDestination");
      setLocation(location);
      setDestination(destination);
      setRideSharing(sharing);
      setReturnTrip(returnTrip);
      setReturnDestination(returnDestination);
    }
  }, []);

  return [location, destination, rideSharing, returnTrip, returnDestination];
};

const Search = () => {
  const [location, destination, rideSharing, returnTrip, returnDestination] =
    parameters();

  const message = () => {
    if (returnTrip === "true" && rideSharing === "true") {
      return (
        <span className="py-2 text-xl lg:font-medium sub-text lg:text-3xl text-center">
          No shared rides found from {location} to {destination} and back to{" "}
          {returnDestination}!!!
        </span>
      );
    } else if (returnTrip === "true" && rideSharing === "false") {
      return (
        <span className="py-2 text-xl lg:font-medium sub-text lg:text-3xl text-center">
          No rides found from {location} to {destination} and back to{" "}
          {returnDestination}!!!
        </span>
      );
    } else if (returnTrip === "false" && rideSharing === "true") {
      return (
        <span className="py-2 text-xl lg:font-medium sub-text lg:text-3xl text-center">
          No shared rides found from {location} to {destination}!!!
        </span>
      );
    } else {
      return (
        <span className="py-2 text-xl lg:font-medium sub-text lg:text-3xl text-center">
          No rides found from {location} to {destination}!!!
        </span>
      );
    }
  };
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-10 py-5 ">
          <Image
            src={notFound}
            alt="Location not found"
            priority={false}
            className="lg:ml-20 lg:h-[500px] lg:w-[500px]"
          />
        </div>
        <div className="grid grid-rows-2 px-10 py-5 ">
          <span className="py-2 lg:font-black text-center font-extrabold text-7xl lg:text-[200px] heading-text uppercase">
            Oh no!
          </span>
          {message()}
        </div>
      </div>
      <FooterWithLogo />
    </div>
  );
};

export default Search;
