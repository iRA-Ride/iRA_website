import FooterWithLogo from "@/components/Footer";
import ContactForm from "@/components/contacts/ContactForm";
import ContactHeader from "@/components/navbars/Header";
import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsDiscord,
} from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <ContactHeader />
      <div className="pb-[260px]">
        <div className="px-10 py-5 pt-10 lg:px-80 font-extrabold text-center text-4xl lg:text-5xl heading-text">
          <span>Contact Us</span>
        </div>
        <div className="px-10 pt-2 flex justify-center items-center lg:px-80  sub-text text-base lg:text-lg ">
          <ContactForm />
        </div>
        <div className="p-5 px-10 lg:px-80 text-center sub-text text-sm lg:text-lg ">
          <span>
            For <strong>employment enquiries</strong> visit our{" "}
            <Link href="/Careers" className="underline underline-offset-1">
              Careers section
            </Link>
          </span>
        </div>

        <div className="p-5 px-10 font-bold text-center  sub-text text-sm lg:text-lg">
          <div>
            <span>For all other questions:</span>
          </div>
          <div>
            <Link href="mailto:mention.ira@google.com">
              mention.ira@google.com
            </Link>
          </div>
        </div>
        <div className="p-5 px-10 lg:px-80  text-center font-bold  sub-text text-sm lg:text-lg">
          <div>
            <span>Follow us at</span>
          </div>
          <div className="py-5 text-3xl ">
            <Link href="https://www.facebook.com">
              <BsFacebook className="inline-block mx-4 hover:text-black dark:hover:hover:text-gray-500" />
            </Link>
            <Link href="https://www.instagram.com">
              <BsInstagram className="inline-block mx-4  hover:text-black dark:hover:hover:text-gray-500" />
            </Link>
            <Link href="https://www.twitter.com">
              <BsTwitter className="inline-block mx-4  hover:text-black dark:hover:hover:text-gray-500" />
            </Link>
            <Link href="https://www.github.com">
              <BsGithub className="inline-block mx-4  hover:text-black dark:hover:hover:text-gray-500" />
            </Link>
            <Link href="https://www.discord.com">
              <BsDiscord className="inline-block mx-4  hover:text-black dark:hover:hover:text-gray-500" />
            </Link>
          </div>
        </div>
      </div>
      <FooterWithLogo />
    </div>
  );
};

export default Contact;
