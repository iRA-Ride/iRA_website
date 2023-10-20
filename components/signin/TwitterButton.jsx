import React from "react";
import { Button } from "@material-tailwind/react";
import { RiTwitterXFill } from "react-icons/ri";

const TwitterButton = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <Button
          size="sm"
          variant="outlined"
          className="flex items-center  bg-black rounded-full"
        >
          <div className="bg-black text-white h-6 w-6 ">
            <RiTwitterXFill className="h-6 w-6 " />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default TwitterButton;
