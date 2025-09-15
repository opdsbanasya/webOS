import React from "react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

const Signup = () => {
  return (
    <section className="w-screen h-screen grid place-items-center bg-gray-900 text-white">
      <div className="w-3/4 h-3/4 bg-gray-700 rounded-xl py-10 px-10 flex flex-col items-center">
        <h1 className="text-xl">Register</h1>
        <form className="flex flex-col py-5 w-1/3 gap-5">
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Full name" />
          <Input type="text" placeholder="Password" />
          <Input
            type="submit"
            value="Sign up"
            className="w-fit mx-auto cursor-pointer"
          />
          <div className="flex">
            <Link to={"/login"}>
              <Input
                type="button"
                value="Login"
                className="border-none w-fit text-blue-400 cursor-pointer"
              />
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
