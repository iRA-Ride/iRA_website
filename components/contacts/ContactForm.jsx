import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  CardBody,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  //   console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="lg:w-[40%]">
      <Card className="bg-[#d5f8f6]" shadow={false}>
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="pb-2">
              <Input
                label="First Name"
                type="text"
                {...register("firstName", { required: true })}
                required
              />
            </div>
            <div className="py-2">
              <Input
                label="Last Name"
                type="text"
                {...register("lastName", { required: true })}
                required
              />
            </div>
            <div className="py-2">
              <Input
                label="Business Email"
                type="email"
                {...register("businessEmail")}
                required
              />
            </div>
            <div className="py-2">
              <Input
                label="Mobile Number"
                type="number"
                {...register("mobileNumber", { required: true })}
                required
              />
            </div>
            <div className="py-2">
              <Input
                label="I am Interested in"
                type="text"
                {...register("interestedIn", { required: true })}
                required
              />
            </div>
            <div className="py-2">
              <Input
                label="How did you hear about us?"
                type="text"
                {...register("source")}
              />
            </div>
            <div className="py-2">
              <Textarea
                label="Write your comment"
                type="text"
                {...register("comment")}
              />
            </div>

            <Typography color="gray" className="text-xs mb-5">
              By submitting, you consent to{" "}
              <span className="text-blue-400">iRA's Terms of Service</span>
            </Typography>

            <Button type="submit" className="w-full my-2 bg-[#614BC3]">
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default ContactForm;
