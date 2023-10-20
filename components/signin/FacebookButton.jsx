import React from "react";
import { Button } from "@material-tailwind/react";
import { FaFacebookF } from "react-icons/fa";

const FacebookButton = (props) => {
  return (
    <div>
      <div className="flex justify-center ">
        <Button
          size="sm"
          variant="outlined"
          className="flex items-center border-gray-400 bg-[#4267B2] rounded-full"
        >
          <div className="bg-none h-6 w-6 rounded-full">
            <FaFacebookF className="h-6 w-6 text-white" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default FacebookButton;
