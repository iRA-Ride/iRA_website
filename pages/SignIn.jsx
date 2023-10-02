import FooterWithSocialMediaIcons from "@/components/Footer";
import SignInHeader from "@/components/navbars/SignInHeader";
import SignInCard from "@/components/signin/SignInCard";
import React from "react";

const SignIn = () => {
  return (
    <div>
      <SignInHeader />
      <SignInCard />
      <FooterWithSocialMediaIcons />
    </div>
  );
};

export default SignIn;
