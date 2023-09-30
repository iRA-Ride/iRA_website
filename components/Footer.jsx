"use client";

import { Footer } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsDiscord,
} from "react-icons/bs";

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer className="border-0 rounded-none" container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand alt="/" href="/" name="iRA" src="@public/ira.jpeg" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 lg:gap-4">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="/About">iRA</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.github.com">Github</Footer.Link>
                <Footer.Link href="https://www.discord.com">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Downloads" />
              <Footer.LinkGroup col>
                <Footer.Link href="/Downloads">iRA Cabs</Footer.Link>
                <Footer.Link href="/Downloads">iRA Driver App</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="/Policy">Privacy Policy</Footer.Link>
                <Footer.Link href="/Policy">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="iRA™" href="#" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com" icon={BsInstagram} />
            <Footer.Icon href="https://www.twitter.com" icon={BsTwitter} />
            <Footer.Icon href="https://www.discord.com" icon={BsDiscord} />
            <Footer.Icon href="https://www.github.com" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
