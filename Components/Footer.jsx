/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <div className="contain flex-col xl:flex-row w-full justify-between items-center md:items-stretch pt-[35px] md:pt-[70px]">
        <div className="flex flex-col w-full">
          <div>
            {" "}
            <img src="footer-logo.png" className="w-[99px] h-[76px]" alt="" />
          </div>
          <p className="text-white sub-des md:my-3">
            Streamlining your supply chain, one truck at a time.
          </p>
          <div className="flex row  items-center w-full gap-3 lg:gap-5 my-1 md:my-2">
            <img src="fb.png" alt="" />
            <img src="tiwtter.png" alt="" />
            <img src="instagram.png" alt="" />
            <img src="github.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-stretch w-full justify-between mt-10 xl:mt-0 gap-6 lg:gap-0">
          <div>
            <ul className="text-white flex flex-col gap-1">
              <li className="text-[14px] font-semibold">MAP</li>
              <li className="text-[14px]  cursor-pointer    mt-2 font-normal leading-[180%] opacity-80">
                Home
              </li>
              <li className="text-[14px]  cursor-pointer   font-normal leading-[180%] opacity-80">
                Carrier Dashboard
              </li>
              <li className="text-[14px]  cursor-pointer   font-normal leading-[180%] opacity-80">
                Join Our Team
              </li>
              <li className="text-[14px]  cursor-pointer   font-normal leading-[180%] opacity-80">
                Testimonials
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-white flex flex-col gap-1">
              <li className="text-[14px] font-semibold">Company</li>
              <li className="text-[14px]  cursor-pointer    mt-2 font-normal leading-[180%] opacity-80">
                Contact Us
              </li>
              <li className="text-[14px]   cursor-pointer  font-normal leading-[180%] opacity-80">
                Careers
              </li>
              <li className="text-[14px]  cursor-pointer   font-normal leading-[180%] opacity-80">
                Privacy Policy
              </li>
              <li className="text-[14px]  cursor-pointer   font-normal leading-[180%] opacity-80">
                Insights
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-white flex flex-col gap-1">
              <li className="text-[14px] font-semibold">Get in touch</li>
              <li className=" mt-2 flex gap-3 items-center cursor-pointer ">
                <div>
                  <img src="location.png" alt="" />
                </div>
                <div>
                  <p className="text-[14px] font-normal leading-[180%] opacity-80">
                    United States, London
                  </p>
                </div>
              </li>
              <li className=" flex gap-2 items-center cursor-pointer ">
                <div>
                  <img src="sms.png" alt="" />
                </div>
                <div>
                  <p className="text-[14px] font-normal leading-[180%] opacity-80">
                    Volgaexpress@gmail.com
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contain">
        {" "}
        <div className="h-[1px] w-[100%]  bg-white mt-[30px] lg:mt-[60px]"></div>
      </div>
      <div className="w-full">
        <p className="sub-des text-center text-white my-4">
          Copyright ?? 2022. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
