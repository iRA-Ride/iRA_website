import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const RideCab = () => {
  return (
    <div>
      <div
        id="bookCab"
        className="px-5 pt-16 lg:p-5 text-xl  sm:text-3xl dark:text-white"
      >
        <div className="p-5 lg:px-80 text-center font-bold text-3xl sm:text-3xl dark:text-gray-300">
          <span>Ride a Cab</span>
        </div>
        <div className="flex flex-col max-w sm:px-10 md:px-20 lg:px-40 xl:px-80 2xl:px-[500px] px-3 justify-center ">
          <form className="flex flex-col justify-center gap-4 ">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="currentLocation" value="Current Location" />
              </div>
              <TextInput
                id="urrentLocation"
                placeholder="MGR Nagar, Chennai"
                required
                type="text"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="destination" value="Destination" />
              </div>
              <TextInput
                id="destination"
                required
                type="text"
                placeholder="Anna Nagar, Chennai"
              />
            </div>
            <Button
              className="bg-gradient-to-r from-green-400 to-green-500  hover:from-green-500 hover:to-green-600 dark:bg-gradient-to-r dark:from-green-500 dark:to-green-600 hover:dark:from-green-600 hover:dark:to-green-700"
              type="submit"
            >
              Search Ride
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RideCab;
