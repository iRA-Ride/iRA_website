import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const RideCab = () => {
  return (
    <div>
      <div
        id="bookCab"
        className="px-5 py-10 lg:px-5 lg:pt-5 lg:pb-16 text-xl  sm:text-3xl "
      >
        <div className="max-w sm:px-10 md:px-20 lg:px-40 xl:px-80 2xl:px-[400px] px-3">
          <form className="flex flex-col justify-center gap-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              <div className="lg:pr-2">
                <div className="mb-2 block">
                  <Label htmlFor="currentLocation" value="Current Location" />
                </div>
                <TextInput
                  id="currentLocation"
                  placeholder="MGR Nagar, Chennai"
                  required
                  type="text"
                />
              </div>
              <div className="lg:pl-2">
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
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="promotion" />
              <Label htmlFor="promotion">Look for ride sharing</Label>
            </div>
            <Button
              className="bg-gradient-to-r from-green-400 to-green-500  hover:from-green-500 hover:to-green-600 dark:bg-gradient-to-r dark:from-green-500 dark:to-green-600 hover:dark:from-green-600 hover:dark:to-green-700"
              type="submit"
            >
              Book Ride
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RideCab;
