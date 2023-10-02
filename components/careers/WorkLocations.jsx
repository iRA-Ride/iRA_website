import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const Content2 = () => {
  return (
    <div>
      <Link href="/Locations">
        <div className="flex px-10 py-5 lg:px-80 font-bold text-2xl lg:text-4xl text-start dark:text-white">
          <div>
            <span>Locations</span>
          </div>
          <div>
            <BiLinkExternal className="h-3 w-3 text-blue-500" />
          </div>
        </div>
      </Link>
      <div className="lg:flex lg:px-80 gap-8 ">
        <div className="lg:p-3 px-10 ">
          <span>
            iRA thrives in the heart of Tamil Nadu, reaching far beyond city
            limits. We're dedicated to enhancing mobility in non-urban areas,
            from quaint villages to bustling towns. Join us in revolutionizing
            transportation where it matters most.
          </span>
        </div>
        <div
          role="status"
          className="py-5 space-y-8 animate-pulse md:space-y-0 flex justify-center md:space-x-8 md:flex md:items-center"
        >
          <div className="flex  items-center justify-center lg:w-[250px] lg:h-[250px] h-60 w-80 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Content2;