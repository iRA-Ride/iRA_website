import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import lifeAtIRAPic from "@/public/pics/life_at_ira.jpeg";

const Content3 = () => {
  return (
    <div className="my-10 grid grid-cols-1 lg:grid-cols-3">
      <div className="col-span-2">
        <Link href="/Life">
          <div className="flex px-10 py-5 lg:pl-80 font-extrabold heading-text text-3xl lg:text-5xl text-start">
            <div>
              <span>
                <p>Life at iRA:</p>
                <p> Celebrating Unique Perspectives</p>
              </span>
            </div>
            <div>
              <BiLinkExternal className="h-3 w-3 text-blue-500" />
            </div>
          </div>
        </Link>
        <div className="lg:flex lg:pl-80 lg:p-5 px-10 py-5 gap-8 sub-text text-base lg:text-lg">
          <span>
            At iRA, we cherish the diversity of thought that shapes our
            platform. We provide the freedom to work on your own terms, offer
            benefits to empower your best self, and uphold an unwavering
            commitment to ethical practices. This is more than a job; it's a
            culture of inclusivity and integrity, where every voice matters.
          </span>
        </div>
      </div>
      <div className="px-10 py-5 lg:px-0">
        <Image
          src={lifeAtIRAPic}
          alt="Life at IRA"
          className="w-96 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Content3;
