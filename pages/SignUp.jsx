import FooterWithSocialMediaIcons from "@/components/Footer";
import SignInHeader from "@/components/navbars/SignInHeader";
import SignUpCard from "@/components/signup/SignUpCard";
import React from "react";

const SignUp = () => {
  return (
    <div>
      <SignInHeader />
      <SignUpCard />
      <FooterWithSocialMediaIcons />
    </div>
  );
};

export default SignUp;
