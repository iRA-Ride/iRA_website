import React from "react";
import { Card, Typography, CardBody } from "@material-tailwind/react";
import Image from "next/image";

const Testimonials = ({ id, name, text }) => {
  return (
    <div key={id} className="px-3 py-2 cursor-pointer">
      <Card className="light-bg h-[130px] xl:h-[120px] lg:h-[170px]">
        <CardBody>
          <Typography variant="h6" className="text-center heading-text">
            {name}
          </Typography>
          <Typography className="text-base text-center sub-text">
            {text}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default Testimonials;
