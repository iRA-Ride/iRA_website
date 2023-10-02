"use client";
import React from "react";

import { Button } from "flowbite-react";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="px-10  py-5">
          <Link href="/SignIn">
            <Button gradientDuoTone="purpleToBlue">
              <span>Sign In</span>
            </Button>
          </Link>
        </div>
        <div className="px-10 py-5">
          <Link href="/SignUp">
            <Button gradientDuoTone="greenToBlue">
              <span>Sign Up</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
