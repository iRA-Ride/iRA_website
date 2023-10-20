import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const CareerPortal = () => {
  return (
    <Card className="mt-6 w-[70%] bg-[#d5f8f6]">
      <CardBody className="">
        <Card className="p-2 my-2 shadow-none border-2 ">
          <div className="grid grid-col-1 lg:grid-cols-5 text-start heading-text gap-5">
            <Typography className="font-medium col-span-2 py-2 px-2">
              Frontend Developer
            </Typography>
            <Typography className="font-medium col-span-2 py-2 px-2">
              Bangalore, India
            </Typography>
            <Button className="bg-blue-500">Apply</Button>
          </div>
        </Card>
        <Card className="p-2 my-2 shadow-none border-2 ">
          <div className="grid grid-col-1 lg:grid-cols-5 text-start heading-text gap-5">
            <Typography className="font-medium col-span-2 py-2 px-2">
              Backend Developer
            </Typography>
            <Typography className="font-medium col-span-2 py-2 px-2">
              Bangalore, India
            </Typography>
            <Button className="bg-blue-500">Apply</Button>
          </div>
        </Card>
        <Card className="p-2 my-2 shadow-none border-2 ">
          <div className="grid grid-col-1 lg:grid-cols-5 text-start heading-text gap-5">
            <Typography className="font-medium col-span-2 py-2 px-2">
              FLutter Developer
            </Typography>
            <Typography className="font-medium col-span-2 py-2 px-2">
              Bangalore, India
            </Typography>
            <Button className="bg-blue-500">Apply</Button>
          </div>
        </Card>
        <Card className="p-2 my-2 shadow-none border-2 ">
          <div className="grid grid-col-1 lg:grid-cols-5 text-start heading-text gap-5">
            <Typography className="font-medium col-span-2 py-2 px-2">
              Marketing Lead
            </Typography>
            <Typography className="font-medium col-span-2 py-2 px-2">
              Bangalore, India
            </Typography>
            <Button className="bg-blue-500 ">Apply</Button>
          </div>
        </Card>
        <Card className="p-2 my-2 shadow-none border-2 ">
          <div className="grid grid-col-1 lg:grid-cols-5 text-start heading-text gap-5">
            <Typography className="font-medium col-span-2 py-2 px-2">
              Product Manager
            </Typography>
            <Typography className="font-medium col-span-2 py-2 px-2">
              Bangalore, India
            </Typography>
            <Button className="bg-blue-500">Apply</Button>
          </div>
        </Card>
        <Card className="p-2 my-2 shadow-none border-2 ">
          <div className="grid grid-col-1 lg:grid-cols-5 text-start heading-text gap-5">
            <Typography className="font-medium col-span-2 py-2 px-2">
              Human Resources
            </Typography>
            <Typography className="font-medium col-span-2 py-2 px-2">
              Bangalore, India
            </Typography>
            <Button className="bg-blue-500">Apply</Button>
          </div>
        </Card>
      </CardBody>
    </Card>
  );
};

export default CareerPortal;
