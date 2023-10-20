import { Button } from "@material-tailwind/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <Button
          size="sm"
          variant="outlined"
          className="flex items-center border-gray-400 bg-white rounded-full"
        >
          <div className="bg-white h-6 w-6 rounded-full">
            <FcGoogle className="h-6 w-6 " />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default GoogleButton;
