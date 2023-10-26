import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import teamPic from "/public/pics/team.jpeg";

const Content4 = () => {
  return (
    <div className="my-10 grid grid-cols-1 lg:grid-cols-3">
      <div className="col-span-2">
        <Link href="/Team">
          <div className="flex px-10 py-5 lg:pl-80 font-extrabold heading-text text-3xl lg:text-5xl text-start">
            <div>
              <p>Meet Our Team:</p>
              <p>Catalysts of Change</p>
            </div>
            <div>
              <BiLinkExternal className="h-3 w-3 text-blue-500" />
            </div>
          </div>
        </Link>
        <div className="lg:flex lg:pl-80 lg:p-5 px-10 py-5 gap-8 sub-text text-base lg:text-lg">
          <span>
            Our team at iRA is a dynamic ensemble of innovators and visionaries.
            From seasoned professionals to fresh talent, we're united by a
            shared passion for revolutionizing mobility. Together, we're shaping
            the future of transportation in Tamil Nadu, one ride at a time."
          </span>
        </div>
      </div>
      <div className="px-10 py-5 lg:px-0">
        <Image src={teamPic} alt="Team Picture" className="w-96 rounded-lg" />
      </div>
    </div>
  );
};

export default Content4;
