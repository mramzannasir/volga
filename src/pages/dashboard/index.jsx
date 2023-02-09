/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Navbar from "../Navbar";
import { BsCheckLg } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "Components/Footer";

const index = () => {
  const [show, setShow] = useState();
  return (
    <div className="overflow-x-hidden">
      <main className="bg-[url(/dashboard.png)] bg-cover md:bg-[length:100%_100%] bg-center bg-no-repeat w-full wrapper relative">
        <div className="contain text-white flex-col h-[300px] md:h-[250px] lg:h-[320px] xl:h-[400px] 2xl:h-[420px] 3xl:h-[450px] 4xl:h-[500px]">
          <Navbar />
        </div>
        <div className="w-full absolute bottom-[50px] md:h-[30px] md:bottom-[100px] 4xl:bottom-[170px]">
          <h1 data-aos="fade-up" className="headings text-white text-center">
            Carrier Setup
          </h1>
        </div>
      </main>
      <div className="wrapper mt-[70px] lg:mt-[120px]">
        <div className="contain flex-col xl:flex-row gap-6 items-stretch">
          <div className="">
            <h1 data-aos="fade-up" className="title">
              Onboarding
            </h1>
            <div className="w-full">
              <p data-aos="fade-up" className="description text-normalblack">
                Please Click Here to download dispatch agreement form, then
                upload all documents below.
              </p>
              <div className="w-full mt-2 md:pl-2  ">
                <ul
                  data-aos="zoom-in"
                  className="list-disc text-newblack  list-inside lg:list-outside lg:px-6  description">
                  <li>Copy of Client’s Authority.</li>
                  <li>Proof of insurance certificates,</li>
                  <li>A signed W-9</li>
                  <li>This agreement form, completed, dated & signed.</li>
                  <li>
                    Cell phone or contact phone numbers & names of main company
                    contacts.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="form relative w-full flex flex-col py-8 md:py-16 mt-8  xl:w-[70%]  px-[5px] sm:px-[10px] md:px-[20px] lg:px-[30px]">
            <div className="flex w-full flex-col md:flex-row gap-2 items-center justify-start md:mb-2 xl:mb-4">
              <input
                type="text"
                className="w-full outline-none text-lightblack p-[10px] font-normal md:px-3 sub-des  rounded-lg md:w-[42%] border-[1px] border-[#1211271f]"
                placeholder="Carrier Owner First Name"
              />
              <input
                type="text"
                className="w-full outline-none text-lightblack p-[10px]  font-normal sub-des md:px-3 rounded-lg md:w-[47%] border-[1px] border-[#1211271f]"
                placeholder="Carrier Owner  Last Name"
              />
            </div>
            <div className="flex w-full flex-col md:flex-row gap-2 justify-between mt-2 md:mt-0 md:mb-2  xl:mb-4">
              <input
                type="text"
                className="w-full outline-none text-lightblack p-[10px] font-normal md:px-3 sub-des  rounded-lg md:w-[35%] border-[1px] border-[#1211271f]"
                placeholder="Legal Company Name"
              />
              <input
                type="text"
                className="w-full outline-none text-lightblack p-[10px]  font-normal sub-des md:px-3 rounded-lg md:w-[50%] border-[1px] border-[#1211271f]"
                placeholder="Carrier Phone Number*"
              />
            </div>
            <div className="w-full mt-2 md:mt-0 md:mb-2  xl:mb-4">
              <input
                type="email"
                className="w-full outline-none text-lightblack p-[10px]  font-normal sub-des md:px-3 rounded-lg  border-[1px] border-[#1211271f]"
                placeholder="Email Address*"
              />
            </div>
            <div className="flex w-full flex-col md:flex-row gap-2 justify-between mt-2 md:mt-0 md:mb-2  xl:mb-4">
              <input
                type="text"
                className="w-full outline-none text-lightblack p-[10px] font-normal md:px-3 sub-des  rounded-lg md:w-[49%] border-[1px] border-[#1211271f]"
                placeholder="US DOT Number"
              />
              <input
                type="text"
                className="w-full outline-none text-lightblack p-[10px]  font-normal sub-des md:px-3 rounded-lg md:w-[49%] border-[1px] border-[#1211271f]"
                placeholder="MC Number"
              />
            </div>
            <div className="mt-4">
              <h1 className="sub-des text-black font-bold">
                Type Of Equipment *
              </h1>
              <div className="w-full grid grid-cols-2 pl-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-3 mt-2">
                <div className="w-full flex items-center ">
                  <div className="relative ">
                    <input
                      onClick={() => setShow(1)}
                      type="checkbox"
                      className="w-6 h-6 cursor-pointer border-[1.5px] appearance-none  outline-4 rounded-md  border-lightblack"
                    />
                    {show == 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1 }}
                        onClick={() => setShow(!show)}
                        className="absolute cursor-pointer top-[5px] left-1 ">
                        <BsCheckLg color="#12112770" />
                      </motion.div>
                    )}
                  </div>
                  <label className="sub-des font-normal mb-1 ml-2  text-lightblack">
                    26 ft box truck
                  </label>
                </div>
                <div className="w-full flex items-center ">
                  <div className="relative ">
                    <input
                      onClick={() => setShow(2)}
                      type="checkbox"
                      className="w-6 h-6 cursor-pointer border-[1.5px] appearance-none  outline-4 rounded-md  border-lightblack"
                    />
                    {show == 2 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1 }}
                        onClick={() => setShow(!show)}
                        className="absolute cursor-pointer top-[5px] left-1 ">
                        <BsCheckLg color="#12112770" />
                      </motion.div>
                    )}
                  </div>
                  <label className="sub-des font-normal mb-1 ml-2  text-lightblack">
                    Power Only
                  </label>
                </div>
                <div className="w-full flex items-center ">
                  <div className="relative ">
                    <input
                      onClick={() => setShow(3)}
                      type="checkbox"
                      className="w-6 h-6 cursor-pointer border-[1.5px] appearance-none  outline-4 rounded-md  border-lightblack"
                    />
                    {show == 3 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1 }}
                        onClick={() => setShow(!show)}
                        className="absolute cursor-pointer top-[5px] left-1 ">
                        <BsCheckLg color="#12112770" />
                      </motion.div>
                    )}
                  </div>
                  <label className="sub-des font-normal mb-1 ml-2  text-lightblack">
                    Dry Van
                  </label>
                </div>
                <div className="w-full flex items-center ">
                  <div className="relative ">
                    <input
                      onClick={() => setShow(4)}
                      type="checkbox"
                      className="w-6 h-6 cursor-pointer border-[1.5px] appearance-none  outline-4 rounded-md  border-lightblack"
                    />
                    {show == 4 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1 }}
                        onClick={() => setShow(!show)}
                        className="absolute cursor-pointer top-[5px] left-1 ">
                        <BsCheckLg color="#12112770" />
                      </motion.div>
                    )}
                  </div>
                  <label className="sub-des font-normal mb-1 ml-2  text-lightblack">
                    Hot Shot
                  </label>
                </div>
                <div className="w-full flex items-center ">
                  <div className="relative ">
                    <input
                      onClick={() => setShow(5)}
                      type="checkbox"
                      className="w-6 h-6 cursor-pointer border-[1.5px] appearance-none  outline-4 rounded-md  border-lightblack"
                    />
                    {show == 5 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1 }}
                        onClick={() => setShow(!show)}
                        className="absolute cursor-pointer top-[5px] left-1 ">
                        <BsCheckLg color="#12112770" />
                      </motion.div>
                    )}
                  </div>
                  <label className="sub-des font-normal mb-1 ml-2  text-lightblack">
                    Reefer
                  </label>
                </div>
                <div className="w-full flex items-center ">
                  <div className="relative ">
                    <input
                      onClick={() => setShow(6)}
                      type="checkbox"
                      className="w-6 h-6 cursor-pointer border-[1.5px] appearance-none  outline-4 rounded-md  border-lightblack"
                    />
                    {show == 6 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1 }}
                        onClick={() => setShow(!show)}
                        className="absolute cursor-pointer top-[5px] left-1 ">
                        <BsCheckLg color="#12112770" />
                      </motion.div>
                    )}
                  </div>
                  <label className="sub-des font-normal mb-1 ml-2  text-lightblack">
                    Cargo Van
                  </label>
                </div>
                <div className="w-full flex items-center ">
                  <div className="relative ">
                    <input
                      onClick={() => setShow(7)}
                      type="checkbox"
                      className="w-6 h-6 cursor-pointer border-[1.5px] appearance-none  outline-4 rounded-md  border-lightblack"
                    />
                    {show == 7 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1 }}
                        onClick={() => setShow(!show)}
                        className="absolute cursor-pointer top-[5px] left-1 ">
                        <BsCheckLg color="#12112770" />
                      </motion.div>
                    )}
                  </div>
                  <label className="sub-des font-normal mb-1 ml-2  text-lightblack">
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div className=" mt-1 md:mt-4 md:mb-2  xl:mb-4">
              <h1 className="sub-des text-black font-bold">
                Upload All Documents in link below
              </h1>
              <div className="w-full mt-1 md:mt-2">
                <div className="w-full max-w-[205px] cursor-pointer h-[48px] flex justify-center items-center gap-1 border-borderwhite border-[1px] rounded-lg">
                  <div>
                    <img src="get.png" alt="" srcSet="" />
                  </div>
                  <div>
                    <h1 className="sub-des text-normalblack font-medium">
                      Get a Quote
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-2  md:mt-0 md:mb-2  xl:mb-4">
              <button className="w-full sm:w-[140px] bg-red h-10 md:h-12 rounded-md flex justify-center items-center text-white text-[16px] font-normal">
                Submit
              </button>
            </div>
            {/* <div className="w-full absolute -bottom-8 right-1">
              {" "}
              <h1 className="text-right sub-des font-normal">
                Shopify Forms{" "}
                <span className="text-red">Powered by HulkApps</span>
              </h1>{" "}
            </div> */}
          </div>
        </div>
      </div>

      <div className="wrapper mt-[80px] md:[100px] xl:mt-[163px] bg-[#1B1B1B]">
        <Footer />
      </div>
    </div>
  );
};

export default index;
