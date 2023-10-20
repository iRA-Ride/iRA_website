// "use client";

// import { Footer } from "flowbite-react";
// import {
//   BsFacebook,
//   BsGithub,
//   BsInstagram,
//   BsTwitter,
//   BsDiscord,
// } from "react-icons/bs";

// export default function FooterWithSocialMediaIcons() {
//   return (
//     <Footer className="border-0 rounded-none bg-[#FBF0B2]" container>
//       <div className="w-full">
//         <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
//           <div>
//             <Footer.Brand alt="/" href="/" name="iRA" src="@public/ira.jpeg" />
//           </div>
//           <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 lg:gap-4">
//             <div>
//               <Footer.Title title="about" />
//               <Footer.LinkGroup col>
//                 <Footer.Link href="/About">iRA</Footer.Link>
//               </Footer.LinkGroup>
//             </div>
//             <div>
//               <Footer.Title title="Follow us" />
//               <Footer.LinkGroup col>
//                 <Footer.Link href="https://www.github.com">Github</Footer.Link>
//                 <Footer.Link href="https://www.discord.com">
//                   Discord
//                 </Footer.Link>
//               </Footer.LinkGroup>
//             </div>
//             <div>
//               <Footer.Title title="Downloads" />
//               <Footer.LinkGroup col>
//                 <Footer.Link href="/Downloads">iRA Cabs</Footer.Link>
//                 <Footer.Link href="/Downloads">iRA Driver App</Footer.Link>
//               </Footer.LinkGroup>
//             </div>
//             <div>
//               <Footer.Title title="Legal" />
//               <Footer.LinkGroup col>
//                 <Footer.Link href="/Policy">Privacy Policy</Footer.Link>
//                 <Footer.Link href="/Policy">Terms & Conditions</Footer.Link>
//               </Footer.LinkGroup>
//             </div>
//           </div>
//         </div>
//         <Footer.Divider />
//         <div className="w-full sm:flex sm:items-center sm:justify-between">
//           <Footer.Copyright by="iRA™" href="#" year={2023} />
//           <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
//             <Footer.Icon href="https://www.facebook.com" icon={BsFacebook} />
//             <Footer.Icon href="https://www.instagram.com" icon={BsInstagram} />
//             <Footer.Icon href="https://www.twitter.com" icon={BsTwitter} />
//             <Footer.Icon href="https://www.discord.com" icon={BsDiscord} />
//             <Footer.Icon href="https://www.github.com" icon={BsGithub} />
//           </div>
//         </div>
//       </div>
//     </Footer>
//   );
// }

import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/IRA_Final/png/3.png";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsDiscord,
} from "react-icons/bs";

export default function FooterWithLogo() {
  return (
    <footer className="w-full mt-5 bg-[#d5f8f6]  p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#d5f8f6]  text-center md:justify-between">
        <Link href="/">
          <Image src={logo} alt="IRA" className="h-10 w-12" />
        </Link>
        <ul className="flex  flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="/About"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/Careers"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Careers
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="Services"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Services
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Policy
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Downloads
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-[#98E4FF]" />
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#d5f8f6]  text-center md:justify-between">
        <Typography color="blue-gray" className="text-center font-normal">
          &copy; 2023 iRA Rides
        </Typography>
        <ul className="flex  flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <BsFacebook />
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <BsGithub />
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <BsInstagram />
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <BsTwitter />
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <BsDiscord />
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
}
