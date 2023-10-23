import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import locationPic from "@/public/pics/locations.jpeg";
import Image from "next/image";

const Content2 = () => {
  return (
    <div className="my-10 grid grid-cols-1 lg:grid-cols-3">
      <div className="col-span-2">
        <Link href="/Locations">
          <div className="flex px-10 py-5 lg:px-80 font-extrabold heading-text text-3xl lg:text-5xl text-start ">
            <div>
              <span>Locations</span>
            </div>
            <div>
              <BiLinkExternal className="h-4 w-4 text-blue-500" />
            </div>
          </div>
        </Link>
        <div className="lg:flex lg:pl-80 lg:p-5 px-10 py-5 gap-8 sub-text text-base lg:text-lg">
          <span>
            iRA thrives in the heart of Tamil Nadu, reaching far beyond city
            limits. We're dedicated to enhancing mobility in non-urban areas,
            from quaint villages to bustling towns. Join us in revolutionizing
            transportation where it matters most.
          </span>
        </div>
      </div>
      <div className="px-10 py-5 lg:px-0">
        <Image
          src={locationPic}
          alt="Locations"
          priority={false}
          className=" w-96 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Content2;
