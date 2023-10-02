"use client";
import { Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";
import React from "react";
import LanguageButton from "../LanguageButton";

const CareerHeader = () => {
  return (
    <div>
      <Navbar className="bg-[#FBF0B2] " fluid={true} rounded={false}>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            iRA
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-4">
          <LanguageButton />
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link href="/Careers">Careers</Navbar.Link>
          <Navbar.Link href="/Locations">Locations</Navbar.Link>
          <Navbar.Link href="/Life">Life at iRA</Navbar.Link>
          <Navbar.Link href="/Team">Our Team</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default CareerHeader;
