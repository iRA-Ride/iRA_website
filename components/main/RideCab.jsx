import { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import taxi from "public/pics/taxi.png";
import Image from "next/image";

export default function SimpleRegistrationForm() {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [returnDestination, setReturnDestination] = useState("");
  const [rideSharing, setRideSharing] = useState(false);
  const [returnTrip, setReturnTrip] = useState(false);

  const handleSubmit = (events) => {
    events.preventDefault();

    const locationValue = location;
    const destinationValue = destination;
    const rideSharingValue = rideSharing;
    const returnDestinationValue = returnDestination;

    console.log(
      `Location: "${locationValue}", Destination: "${destinationValue}", Sharing: "${rideSharingValue}", returnDestination: "${returnDestinationValue}"`
    );
  };

  const returnDestinationInput = () => {
    if (returnTrip) {
      return (
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Return Destination
          </Typography>
          <Input
            size="lg"
            placeholder="Anna Nagar, Chennai"
            value={returnDestination}
            onChange={(events) => setReturnDestination(events.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
      );
    } else {
      return;
    }
  };

  return (
    <div className="lg:py-8 justify-center m-5 lg:mb-20 grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Image
          src={taxi}
          priority={true}
          alt="taxi"
          className="lg:ml-[10%] lg:h-[350px] lg:w-[90%] pb-5 flex justify-end"
        />
      </div>
      <div className="flex justify-center lg:ml-20 ">
        <Card color="white" className=" py-5 px-4 bg-[#d5f8f6]" shadow={false}>
          <form
            aria-label="ride cabs"
            onSubmit={handleSubmit}
            className=" mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Location
              </Typography>
              <Input
                size="lg"
                placeholder="Anna Nagar, Chennai"
                value={location}
                onChange={(events) => setLocation(events.target.value)}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Destination
              </Typography>
              <Input
                size="lg"
                placeholder="MGR Nagar, Chennai"
                value={destination}
                onChange={(events) => setDestination(events.target.value)}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mt-3">
              <Checkbox
                color="blue"
                onClick={() => setRideSharing(!rideSharing)}
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    Look for ride sharing
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
            </div>
            <div className="">
              <Checkbox
                color="blue"
                onClick={() => setReturnTrip(!returnTrip)}
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    Return Trip
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
            </div>
            <div>{returnDestinationInput()}</div>
            <Link
              href={
                "/Search?Location=" +
                location +
                "&Destination=" +
                destination +
                "&Sharing=" +
                rideSharing +
                "&Return=" +
                returnTrip +
                "&ReturnDestination=" +
                returnDestination
              }
            >
              <Button type="submit" className="mt-6 bg-[#3120E0]" fullWidth>
                Search Rides
              </Button>
            </Link>
          </form>
        </Card>
      </div>
    </div>
  );
}
