import React from "react";
import GoogleButton from "../signin/GoogleButton";
import FacebookButton from "../signin/FacebookButton";
import TwitterButton from "../signin/TwitterButton";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

const SignUpCard = () => {
  return (
    <div>
      <div className="flex justify-center py-10">
        <Card className="w-96 pb-5 ">
          <div>
            <Typography className="px-5 py-3 font-bold text-2xl text-blue-gray-800 text-center">
              Sign up using email
            </Typography>
            <CardBody className="flex flex-col gap-4">
              <Input label="Email" size="lg" />
              <Input label="Password" size="lg" />
              <Input label="Re-Enter Password" size="lg" />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth>
                Sign Up
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Already have an account?
                <Typography
                  as="a"
                  href="/SignIn"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  Sign In
                </Typography>
              </Typography>
            </CardFooter>
          </div>
          <div className="px-6">
            <div className="flex w-full items-center gap-2 py-3 text-sm text-slate-600">
              <div className="h-px w-full bg-gray-300"></div>
              OR <div className="h-px w-full bg-gray-300"></div>
            </div>
          </div>
          <div className="px-6  grid grid-cols-3">
            <div className="py-2">
              <GoogleButton />
            </div>
            <div className="py-2">
              <FacebookButton />
            </div>
            <div className="py-2">
              <TwitterButton />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignUpCard;
