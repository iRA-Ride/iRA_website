import { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import taxi from "public/taxi.png";
import Image from "next/image";

export default function SimpleRegistrationForm() {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (events) => {
    events.preventDefault();

    const locationValue = location;
    const destinationValue = destination;

    console.log(`Location: ${locationValue}, Destination: ${destinationValue}`);
  };

  return (
    <div className=" justify-center m-5 lg:mb-20 grid grid-cols-2">
      <div>
        <Image
          src={taxi}
          className="lg:ml-[10%] h-[350px] w-[90%] flex justify-end"
        />
      </div>
      <div className="flex lg:ml-20">
        <Card color="white" className=" py-5 px-5 bg-[#d5f8f6]" shadow={false}>
          <form
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
            <Checkbox
              color="blue"
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
            <Link
              href={
                "/Search?Location=" + location + "&Destination=" + destination
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
