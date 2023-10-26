import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// To fetch data from backend later...
const jobRoles = [
  {
    id: 1,
    role: "Frontend Developer",
    location: "Bangalore, India",
  },
  {
    id: 2,
    role: "Backend Developer",
    location: "Bangalore, India",
  },
  {
    id: 3,
    role: "Flutter Developer",
    location: "Bangalore, India",
  },
  {
    id: 4,
    role: "Marketing Lead",
    location: "Bangalore, India",
  },
  {
    id: 5,
    role: "Product Manager",
    location: "Bangalore, India",
  },
  {
    id: 6,
    role: "Human Resources",
    location: "Bangalore, India",
  },
];

const CareerPortal = () => {
  return (
    <Card className="mt-6 lg:w-[70%] w-full bg-[#d5f8f6]">
      <CardBody className="px-5 py-3">
        {jobRoles.map((jobRole) => (
          <Card key={jobRole.id} className="p-2 my-2 shadow-none border-2 ">
            <div className="grid grid-col-1 lg:grid-cols-5 text-center heading-text lg:gap-5">
              <Typography className="font-medium lg:col-span-2 py-2">
                {jobRole.role}
              </Typography>
              <Typography className="font-medium lg:col-span-2 py-2">
                {jobRole.location}
              </Typography>
              <Button className="bg-blue-500 w-full">Apply</Button>
            </div>
          </Card>
        ))}
      </CardBody>
    </Card>
  );
};

export default CareerPortal;
