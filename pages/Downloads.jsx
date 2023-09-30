import React from "react";
import Download from "@/components/Download";
import Header from "@/components/Header";
import FooterWithSocialMediaIcons from "@/components/Footer";

const Downloads = () => {
  return (
    <div>
      <Header />
      <div>
        <Download type="iRA Cabs" medium="Ride" />
      </div>
      <div>
        <Download type="iRA Driver" medium="Drive" />
      </div>
      <FooterWithSocialMediaIcons />
    </div>
  );
};

export default Downloads;
