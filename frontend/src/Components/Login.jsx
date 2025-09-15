import React from "react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

const Login = () => {
  return (
    <section className="w-screen h-screen grid place-items-center bg-gray-900 text-white">
      <div className="w-3/4 h-3/4 bg-gray-700 rounded-xl py-10 px-10 flex flex-col items-center">
        <h1 className="text-xl">Login</h1>
        <form className="flex flex-col py-5 w-1/3 gap-5">
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Username" />
          <Input
            type="submit"
            value="Login"
            className="w-fit mx-auto cursor-pointer"
          />
          <div className="flex">
            <Input
              type="button"
              value="Forget Password"
              className="border-none w-fit text-blue-400 cursor-pointer"
            />
            <Link to={"/signup"}>
              <Input
                type="button"
                value="Register"
                className="border-none w-fit text-blue-400 cursor-pointer"
              />
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
