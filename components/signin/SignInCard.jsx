import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";
import TwitterButton from "./TwitterButton";

export function LoginCard() {
  return (
    <div className="flex justify-center py-10">
      <Card className="w-96 pb-5 ">
        <div>
          <Typography className="px-5 py-3 font-bold text-2xl text-blue-gray-800 text-center">
            Sign in with email
          </Typography>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6  flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="/SignUp"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up
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
  );
}

export default LoginCard;
