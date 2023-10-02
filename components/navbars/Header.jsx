import { Navbar, Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <Navbar className="bg-[#FBF0B2] " fluid={true} rounded={false}>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            iRA
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-4">
          <Link href="/SignIn">
            <Button
              color
              size="md"
              className=" text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign In
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/About">About</Navbar.Link>
          <Navbar.Link href="/Careers">Careers</Navbar.Link>
          <Navbar.Link href="/Services">Services</Navbar.Link>
          <Navbar.Link href="/Contact">Contact</Navbar.Link>
          <Navbar.Link href="/Policy">Policy</Navbar.Link>
          <Navbar.Link href="/Downloads">Downloads</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
