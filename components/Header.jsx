import { Navbar, DarkThemeToggle, Flowbite } from "flowbite-react";
import React from "react";

const Header = () => {
  return (
    <div>
      <Navbar className="bg-white " fluid={true} rounded={false}>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            iRA
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Flowbite>
            <DarkThemeToggle />
          </Flowbite>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/About">About</Navbar.Link>
          <Navbar.Link href="/Services">Services</Navbar.Link>
          <Navbar.Link href="/Careers">Careers</Navbar.Link>
          <Navbar.Link href="/Policy">Policy</Navbar.Link>
          <Navbar.Link href="/Contact">Contact Us</Navbar.Link>
          <Navbar.Link href="/Downloads">Downloads</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
