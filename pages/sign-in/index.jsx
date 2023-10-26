import { SignIn } from "@clerk/nextjs";
import FooterWithSocialMediaIcons from "/components/Footer";
import SignInHeader from "/components/navbars/SignInHeader";

export default function Page() {
  return (
    <div>
      <SignInHeader />
      <div className="flex justify-center py-10 ">
        <SignIn path="/sign-in" redirectUrl={"/"} />
      </div>
      <FooterWithSocialMediaIcons />
    </div>
  );
}
