import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Link, { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import { Input, Logo } from "./index";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login({ userData }));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="ext-center text-2xl font-bold leading-tight ">
          Sign up to create your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an acount?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign in
          </Link>
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
                {...register("email"), { 
                    required: true,
                    validate:{
                        matchPatern: (value) => {
                            return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                                value
                            )|| "Email address must be a valid email address";
                        }
                    }
                }}

                
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password"), { 
                    required: true, minLength: 6 }}
                />
   <Button type="submit" className="w-full">
    Create Account
    </Button>
          </div>
        </form> 
      </div>
    </div>
  );
}

export default Signup;
