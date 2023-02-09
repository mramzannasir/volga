/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "Components/Footer";
import React from "react";
import Navbar from "../Navbar";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <main className="bg-[url(/contact.png)] bg-cover md:bg-[length:100%_100%] bg-center bg-no-repeat w-full wrapper relative">
        <div className="contain flex-col text-white h-[300px] md:h-[250px] lg:h-[320px] xl:h-[400px] 2xl:h-[420px] 3xl:h-[450px] 4xl:h-[500px]">
          <Navbar />
        </div>
        <div className="w-full absolute bottom-[50px] md:h-[30px] md:bottom-[100px] 4xl:bottom-[170px]">
          <h1 data-aos="fade-up" className="headings text-white text-center z-[-1]">Contact us</h1>
        </div>
      </main>
      <div className="wrapper">
        <div data-aos="zoom-in" className="contain flex-col lg:flex-row items-stretch justify-center  my-[70px] md:my-[100px] xl:my-[140px]">
          <div className="w-full lg:w-[45%]">
            <h1 className="title">
              Our tools make transformation simple. Reach out and let’s see if
              we can help
            </h1>
            <div className="flex items-center flex-col sm:flex-row gap-3 ">
              <div>
                <img src="con-1.png" className="" alt="" />
              </div>
              <div>
                <p className="sub-des text-normalblack text-center sm:text-left">
                  8614 Westwood Center Dr, Ste 540 Vienna, VA 22182
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-2 md:mt-4 flex-col sm:flex-row">
              <div>
                <img src="con-2.png" className="" alt="" />
              </div>
              <div>
                <p className="sub-des text-normalblack text-center sm:text-left">
                  info@morebetter.technology
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col w-full lg:w-[50%] lg:p-4 gap-2 md:gap-4 mt-6 lg:mt-0">
            <div className="w-full ">
              <label htmlFor="" className="font-semibold sub-des text-black">
                Name*
              </label>
              <input
                placeholder="Name"
                type="text"
                className="w-full outline-none text-lightblack p-[10px] font-normal md:px-3 sub-des  rounded-lg  border-[1px] border-[#1211271f]"
              />
            </div>
            <div className="w-full ">
              <label htmlFor="" className="font-semibold sub-des text-black">
                Email*
              </label>
              <input
                placeholder="Email"
                type="email"
                className="w-full outline-none text-lightblack p-[10px] font-normal md:px-3 sub-des  rounded-lg  border-[1px] border-[#1211271f]"
              />
            </div>
            <div className="w-full  ">
              <label htmlFor="" className="font-semibold sub-des text-black">
                Phone Number
              </label>
              <input
                placeholder="+0"
                type="text"
                className="w-full outline-none text-lightblack p-[10px] font-normal md:px-3 sub-des  rounded-lg  border-[1px] border-[#1211271f]"
              />
            </div>
            <div className="w-full ">
              <label htmlFor="" className="font-semibold sub-des text-black">
                Last Name*
              </label>
              <textarea
                placeholder="Comments"
                rows={6}
                type="text"
                className="w-full outline-none text-lightblack p-[10px] font-normal md:px-3 sub-des  rounded-lg  border-[1px] border-[#1211271f]"
              />
            </div>
            <div className="w-full">
              <button className="w-full bg-red h-10 md:h-12 rounded-md flex justify-center items-center text-white text-[16px] font-normal">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper bg-[#1b1b1b]">
        <Footer />
      </div>
    </div>
  );
};

export default index;
