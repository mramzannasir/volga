/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { AiOutlineCaretDown } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const onclick = () => {
    setOpen(!open);
  };
  const router = useRouter();
  return (
    <>
      <div className="w-[100%] pt-2 xl:pt-4">
        {open ? (
          <div className="absolute top-0 left-0 bg-[#00000067] lgg:hidden h-full w-full"></div>
        ) : (
          ""
        )}
        <nav className="flex items-center justify-between w-[100%]">
          <div className="logo">
            <Link href={"/"}>
              <img
                className="h-[50px] w-[50px] xl:w-[80px] xl:h-[62px]"
                src="/logo.png"
              />
            </Link>
          </div>
          <div
            onClick={onclick}
            className="cursor-pointer z-[99] lgg:hidden right-4 top-4 transition-all duration-500 absolute text-2xl">
            {open ? (
              <div className="sm:hidden">
                {" "}
                <IoMdClose color="#ffffff" />
              </div>
            ) : (
              <FiMenu size={30} color="#A1A1A1" />
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className={`flex flex-col lgg:items-center h-screen pt-8 lgg:pt-0 z-[100] w-full text-[14px] leading-[180%] font-normal lgg:h-auto bg-[#1B1B1B] top-0   lgg:flex-row absolute lgg:static ${
              open ? "left-0" : "left-[-1080px]"
            }  lgg:bg-inherit w-full sm:w-[60%] lgg:w-auto h-full z-[99] gap-8 lgg:gap-6 xl:gap-8 font-normal left-0  transition-all ease duration-[800ms]`}>
            <div>
              {" "}
              <img className=" w-24 lgg:hidden" src="/logo.png" />
            </div>
            <div
              onClick={onclick}
              className="cursor-pointer z-[99] lgg:hidden right-1 top-5 transition-all duration-500 absolute text-2xl">
              {open ? <IoMdClose color="#ffffff" /> : ""}
            </div>
            <Link
              className={
                router.pathname == "/"
                  ? "bg-[#D40C0C] lgg:bg-inherit lgg:text-[#D40C0C] text-white w-[90%] lgg:w-auto px-4 py-2 lgg:p-0 rounded-r-xl"
                  : "pl-2 lgg:pl-0"
              }
              href={"/"}>
              Home
            </Link>
            <Link
              className={
                router.pathname == "/dashboard"
                  ? "bg-[#D40C0C] lgg:bg-inherit lgg:text-[#D40C0C]  text-white w-[90%] lgg:w-auto px-4 py-2 lgg:p-0 rounded-r-xl"
                  : "pl-2 lgg:pl-0"
              }
              href={"/dashboard"}>
              Carrier Dashboard
            </Link>
            <Link
              className={
                router.pathname == "/Services"
                  ? "bg-[#D40C0C] lgg:bg-inherit lgg:text-[#D40C0C] text-white w-[90%] lgg:w-auto px-4 py-2 lgg:p-0 rounded-r-xl"
                  : "pl-2 lgg:pl-0"
              }
              href={"/Services"}>
              Services
            </Link>{" "}
            <Link
              className={
                router.pathname == "/Uni"
                  ? "bg-[#D40C0C] lgg:bg-inherit lgg:text-[#D40C0C] text-white w-[90%] lgg:w-auto px-4 py-2 lgg:p-0 rounded-r-xl"
                  : "pl-2 lgg:pl-0"
              }
              href={"/Uni"}>
              Volga Express University
            </Link>{" "}
            <Link
              className={
                router.pathname == "/Team"
                  ? "bg-[#D40C0C] relative lgg:bg-inherit lgg:text-[#D40C0C] text-white w-[90%] lgg:w-auto px-4 py-2 lgg:p-0 rounded-r-xl"
                  : "pl-2 lgg:pl-0 relative"
              }
              href={"/Team"}>
              Join Our Team
              <di
                onClick={() => setShow(!show)}
                className="absolute hidden lgg:block top-[6px] -right-4">
                <AiOutlineCaretDown />
              </di>
              <div className="absolute w-2 h-4 ">
                {show && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0 }}
                    onClick={() => router.replace("hiring")}
                    className="bg-black w-[110px] p-1 rounded-lg text-white">
                    Hiring
                  </motion.div>
                )}
              </div>
            </Link>
            <Link
              className={
                router.pathname == "/contact"
                  ? "bg-[#D40C0C] lgg:bg-inherit lgg:text-[#D40C0C] text-white w-[90%] lgg:w-auto px-4 py-2 lgg:p-0 rounded-r-xl"
                  : "pl-2 lgg:pl-0"
              }
              href={"/contact"}>
              Contact us
            </Link>
            <Link
              className={
                router.pathname == "/map"
                  ? "bg-[#D40C0C] lgg:bg-inherit lgg:text-[#D40C0C] text-white w-[90%] lgg:w-auto px-4 py-2 lgg:p-0 rounded-r-xl"
                  : "pl-2 lgg:pl-0"
              }
              href={"/map"}>
              Map
            </Link>
            <Link className="hidden lgg:block" href={"/login"}>
              <button className="w-[120px] py-2 bg-red rounded-md text-white text-base">
                Login
              </button>
            </Link>
          </motion.div>

          <Link className="lgg:hidden" href={"/login"}>
            <button className="w-[70px] sm:mr-7 mr-10 py-[6px] bg-red rounded-md text-white text-sm lgg:text-base">
              Login
            </button>
          </Link>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
