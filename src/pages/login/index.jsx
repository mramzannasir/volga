/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Layout from "@/Layout/Layout";
import React from "react";
import { useRouter } from "next/router";

import Link from "next/link";

const index = () => {
  const router = useRouter();
  return (
    <>
      <div className="wrapper">
        <div className="contain justify-center items-center h-screen">
          <div className="flex flex-col w-full  md:w-[50%]">
            <img src="logo.png" className="w-[100px]" alt="" />
            <h1 className="title text-black">Sign in to your account</h1>
            <div className="w-full justify-center sm:justify-start my-4 md:my-6">
              <button className="px-4  w-full sm:w-[60%] md:w-[80%] lg:w-[60%]  rounded-md bg-red py-4 text-white flex justify-center gap-2 items-center">
                <div>
                  <img src="g.png" alt="" />
                </div>
                <div>Continue with google</div>
              </button>
            </div>
            <div className="flex justify-center items-center mt-2">
              <div className="hidden sm:block h-[1px] w-full relative bg-[#121127]">
                <div className="absolute -top-[11px] left-[35%] ">
                  <div className=" bg-white">
                    {" "}
                    <p className="sub-des  text-center text-[#6C6B80] mx-1">
                      Or sign in with your email
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full my-4 ">
              <label htmlFor="" className="font-semibold sub-des text-black">
                Email*
              </label>
              <input
                placeholder="Email"
                type="email"
                className="w-full outline-none text-lightblack p-[10px] font-normal md:px-3 sub-des  rounded-lg  border-[1px] border-[#1211271f]"
              />
            </div>
            <div className="w-full">
              <button onClick={(()=>router.replace("/"))} className="w-full bg-red h-10 md:h-12 rounded-md flex justify-center items-center text-white text-[16px] font-normal">
                Continue with email
              </button>
            </div>
            <div className="w-full mt-2">
              <h1 className="text-center sub-des text-[#6C6B80]">
                Don&sbquo;t have an account yet?{" "}
                <Link href="Signup" className="text-red">
                  {" "}
                  Get started here
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
