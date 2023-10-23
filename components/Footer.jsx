import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/IRA_Final/png/3.png";
import { BsFacebook, BsGithub, BsInstagram, BsDiscord } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";

export default function FooterWithLogo() {
  return (
    <footer className="w-full mt-5 bg-[#d5f8f6]  p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#d5f8f6]  text-center md:justify-between">
        <ul className="flex  flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="/About"
              color="blue-gray"
              className="font-medium text-base transition-colors hover:text-[#190482] focus:text-[#190482]"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/Careers"
              color="blue-gray"
              className="font-medium text-base transition-colors hover:text-[#190482] focus:text-[#190482]"
            >
              Careers
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/Services"
              color="blue-gray"
              className="font-medium text-base transition-colors hover:text-[#190482] focus:text-[#190482]"
            >
              Services
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/Contact"
              color="blue-gray"
              className="font-medium text-base transition-colors hover:text-[#190482] focus:text-[#190482]"
            >
              Contact Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="Policy"
              color="blue-gray"
              className="font-medium text-base transition-colors hover:text-[#190482] focus:text-[#190482]"
            >
              Policy
            </Typography>
          </li>
        </ul>
        <Link href="/">
          <Image src={logo} alt="IRA" className="h-10 w-12" />
        </Link>
      </div>
      <hr className="my-8 border-[#98E4FF]" />
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#d5f8f6]  text-center md:justify-between">
        <ul className="flex  flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-[#190482] focus:text-[#190482]"
            >
              <BsFacebook />
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-[#190482] focus:text-[#190482]"
            >
              <BsGithub />
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-[#190482] focus:text-[#190482]"
            >
              <BsInstagram />
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-[#190482] focus:text-[#190482]"
            >
              <RiTwitterXFill />
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-[#190482] focus:text-[#190482]"
            >
              <BsDiscord />
            </Typography>
          </li>
        </ul>
        <Typography
          color="blue-gray"
          className="text-center font-medium text-base"
        >
          &copy; 2023 iRA Rides
        </Typography>
      </div>
    </footer>
  );
}
