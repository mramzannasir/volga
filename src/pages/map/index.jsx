/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../Navbar";
import { CiSearch } from "react-icons/ci";

const index = () => {
  return (
    <div className="">
      <div className="wrapper">
        <div className="w-full">
          <Navbar />
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col xl:flex-row h-screen">
          <div className="w-full xl:w-[40%] flex flex-col justify-center items-center">
            <div className=" w-[97%] sm:w-[95%]  flex flex-col  h-full mt-8">
              <div className="w-full border-borderwhite  border-[1px] px-2 md:px-4 text-normalblack rounded-[100px] flex justify-between items-center py-[14px]">
                <input
                  type="text"
                  placeholder="NEW YORK"
                  className="description outline-none border-none"
                />
                <div className="cursor-pointer">
                  <CiSearch size={30} />
                </div>
              </div>
              <div className="flex flex-col justify-center sm:flex-row items-center sm:justify-start w-full mt-2 gap-2">
                <div className="border-borderwhite cursor-pointer rounded-[100px] text-normalblack sub-des border-[1px] px-5 py-1">
                  Sort: Best Rating
                </div>
                <div className="border-borderwhite cursor-pointer rounded-[100px] text-normalblack sub-des border-[1px] px-5 py-1">
                  Sort: Best Rating
                </div>
              </div>
              <div className="w-full text-center p-1 md:p-2 mt-2 sm:text-left sub-des text-lightblack ">
                <h1>Showing 1-20 of 34 results</h1>
              </div>
              <div>
                <h1 className="mini-title text-center sm:text-left text-black">
                  Truck Movers Names “ New York ”
                </h1>
              </div>
              <div className="w-full flex flex-col mt-4 sm:flex-row justify-between border-[1px] rounded-md border-borderwhite hover:border-normalblack transition-all duration-700">
                <div className="flex gap-2 w-full sm:gap-4">
                  <div>
                    <img
                      src="map-1.png"
                      className="rounded-l-lg h-full"
                      alt=""
                    />
                  </div>
                  <div className="sm:hidden ">
                    <div className="flex w-full flex-col h-full justify-center">
                      <h1 className="destwo  text-black font-bold">
                        26FT BoX Truck
                      </h1>
                      <ul className=" w-full mt-1 flex flex-col   text-[12px] text-[#6C6B80]">
                        <li>Dock height : 96W 102H</li>
                        <li>MC active since sep 2020</li>
                      </ul>

                      <ul className="  w-full flex flex-col   text-[14px] text-[#6C6B80]">
                        <li>Straps / load bars</li>
                        <li> Truck#14</li>
                      </ul>
                      <button className="bg-red text-[14px] mb-2 rounded-[100px] text-white px-4 py-[3px]">
                        Ready to Load
                      </button>
                    </div>
                  </div>
                  {/* Hidden Block on sm _________________________________ */}
                  <div className="w-full hidden sm:block">
                    <div className="flex flex-col w-full">
                      <div className="w-full">
                        <h1 className="destwo  text-black font-bold">
                          26FT BoX Truck
                        </h1>
                      </div>
                      <div className="w-full  justify-between my-4 px-6 flex flex-col sm:flex-row items-center">
                        <ul className="list-outside flex flex-col gap-2 list-disc sub-des text-[#6C6B80]">
                          <li>Dock height : 96W 102H</li>
                          <li>MC active since sep 2020</li>
                        </ul>
                        <ul className="list-outside flex flex-col gap-2 list-disc sub-des text-[#6C6B80]">
                          <li>Straps / load bars</li>
                          <li> Truck#14</li>
                        </ul>
                      </div>
                      <div className="flex justify-between items-center pr-6 items-center w-full">
                        <button className="bg-red text-[16px] mb-2 rounded-[100px] text-white px-4 py-[3px]">
                          Ready to Load
                        </button>
                        <div className="flex items-center gap-1">
                          <div>
                            <img src="star.png" alt="" />
                          </div>
                          <div className="sub-des text-normalblack">
                            4.9(27)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-4 sm:flex-row justify-between border-[1px] rounded-md border-borderwhite hover:border-normalblack transition-all duration-700">
                <div className="flex gap-2 w-full sm:gap-4">
                  <div>
                    <img
                      src="map-1.png"
                      className="rounded-l-lg h-full"
                      alt=""
                    />
                  </div>
                  <div className="sm:hidden ">
                    <div className="flex w-full flex-col h-full justify-center">
                      <h1 className="destwo  text-black font-bold">
                        26FT BoX Truck
                      </h1>
                      <ul className=" w-full mt-1 flex flex-col   text-[12px] text-[#6C6B80]">
                        <li>Dock height : 96W 102H</li>
                        <li>MC active since sep 2020</li>
                      </ul>

                      <ul className="  w-full flex flex-col   text-[14px] text-[#6C6B80]">
                        <li>Straps / load bars</li>
                        <li> Truck#14</li>
                      </ul>
                      <button className="bg-red text-[14px] mb-2 rounded-[100px] text-white px-4 py-[3px]">
                        Ready to Load
                      </button>
                    </div>
                  </div>
                  {/* Hidden Block on sm _________________________________ */}
                  <div className="w-full hidden sm:block">
                    <div className="flex flex-col w-full">
                      <div className="w-full">
                        <h1 className="destwo  text-black font-bold">
                          26FT BoX Truck
                        </h1>
                      </div>
                      <div className="w-full  justify-between my-4 px-6 flex flex-col sm:flex-row items-center">
                        <ul className="list-outside flex flex-col gap-2 list-disc sub-des text-[#6C6B80]">
                          <li>Dock height : 96W 102H</li>
                          <li>MC active since sep 2020</li>
                        </ul>
                        <ul className="list-outside flex flex-col gap-2 list-disc sub-des text-[#6C6B80]">
                          <li>Straps / load bars</li>
                          <li> Truck#14</li>
                        </ul>
                      </div>
                      <div className="flex justify-between items-center pr-6 items-center w-full">
                        <button className="bg-red text-[16px] mb-2 rounded-[100px] text-white px-4 py-[3px]">
                          Ready to Load
                        </button>
                        <div className="flex items-center gap-1">
                          <div>
                            <img src="star.png" alt="" />
                          </div>
                          <div className="sub-des text-normalblack">
                            4.9(27)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-4 sm:flex-row justify-between border-[1px] rounded-md border-borderwhite hover:border-normalblack transition-all duration-700">
                <div className="flex gap-2 w-full sm:gap-4">
                  <div>
                    <img
                      src="map-1.png"
                      className="rounded-l-lg h-full"
                      alt=""
                    />
                  </div>
                  <div className="sm:hidden ">
                    <div className="flex w-full flex-col h-full justify-center">
                      <h1 className="destwo  text-black font-bold">
                        26FT BoX Truck
                      </h1>
                      <ul className=" w-full mt-1 flex flex-col   text-[12px] text-[#6C6B80]">
                        <li>Dock height : 96W 102H</li>
                        <li>MC active since sep 2020</li>
                      </ul>

                      <ul className="  w-full flex flex-col   text-[14px] text-[#6C6B80]">
                        <li>Straps / load bars</li>
                        <li> Truck#14</li>
                      </ul>
                      <button className="bg-red text-[14px] mb-2 rounded-[100px] text-white px-4 py-[3px]">
                        Ready to Load
                      </button>
                    </div>
                  </div>
                  {/* Hidden Block on sm _________________________________ */}
                  <div className="w-full hidden sm:block">
                    <div className="flex flex-col w-full">
                      <div className="w-full">
                        <h1 className="destwo  text-black font-bold">
                          26FT BoX Truck
                        </h1>
                      </div>
                      <div className="w-full  justify-between my-4 px-6 flex flex-col sm:flex-row items-center">
                        <ul className="list-outside flex flex-col gap-2 list-disc sub-des text-[#6C6B80]">
                          <li>Dock height : 96W 102H</li>
                          <li>MC active since sep 2020</li>
                        </ul>
                        <ul className="list-outside flex flex-col gap-2 list-disc sub-des text-[#6C6B80]">
                          <li>Straps / load bars</li>
                          <li> Truck#14</li>
                        </ul>
                      </div>
                      <div className="flex justify-between items-center pr-6 items-center w-full">
                        <button className="bg-red text-[16px] mb-2 rounded-[100px] text-white px-4 py-[3px]">
                          Ready to Load
                        </button>
                        <div className="flex items-center gap-1">
                          <div>
                            <img src="star.png" alt="" />
                          </div>
                          <div className="sub-des text-normalblack">
                            4.9(27)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-4 sm:flex-row justify-between border-[1px] rounded-md border-borderwhite hover:border-normalblack transition-all duration-700">
                <div className="flex gap-2 w-full sm:gap-4">
                  <div>
                    <img
                      src="map-1.png"
                      className="rounded-l-lg h-full"
                      alt=""
                    />
                  </div>
                  <div className="sm:hidden ">
                    <div className="flex w-full flex-col h-full justify-center">
                      <h1 className="destwo  text-black font-bold">
                        26FT BoX Truck
                      </h1>
                      <ul className=" w-full mt-1 flex flex-col   text-[12px] text-[#6C6B80]">
                        <li>Dock height : 96W 102H</li>
                        <li>MC active since sep 2020</li>
                      </ul>

                      <ul className="  w-full flex flex-col   text-[14px] text-[#6C6B80]">
                        <li>Straps / load bars</li>
                        <li> Truck#14</li>
                      </ul>
                      <button className="bg-red text-[14px] mb-2 rounded-[100px] text-white px-4 py-[3px]">
                        Ready to Load
                      </button>
                    </div>
                  </div>
                  {/* Hidden Block on sm _________________________________ */}
                  <div className="w-full hidden sm:block">
                    <div className="flex flex-col w-full">
                      <div className="w-full">
                        <h1 className="destwo  text-black font-bold">
                          26FT BoX Truck
                        </h1>
                      </div>
                      <div className="w-full  justify-between my-4 px-6 flex flex-col sm:flex-row items-center">
                        <ul className="list-outside flex flex-col gap-2 list-disc sub-des text-[#6C6B80]">
                          <li>Dock height : 96W 102H</li>
                          <li>MC active since sep 2020</li>
                        </ul>
                        <ul className="list-outside flex flex-col gap-2 list-disc sub-des text-[#6C6B80]">
                          <li>Straps / load bars</li>
                          <li> Truck#14</li>
                        </ul>
                      </div>
                      <div className="flex justify-between items-center pr-6 items-center w-full">
                        <button className="bg-red text-[16px] mb-2 rounded-[100px] text-white px-4 py-[3px]">
                          Ready to Load
                        </button>
                        <div className="flex items-center gap-1">
                          <div>
                            <img src="star.png" alt="" />
                          </div>
                          <div className="sub-des text-normalblack">
                            4.9(27)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex sm:justify-between flex-col  sm:flex-row justify-center items-center mt-6">
                <div className="sub-des text-lightblack">
                  Showing 1-20 of 34 results
                </div>
                <div className="flex  items-center gap-2">
                  <button className="text-white sub-des font-semibold bg-[#FCA5A5] rounded px-4 sm:px-6 py-1">
                    Previous
                  </button>
                  <button className="text-white sub-des font-semibold bg-red rounded px-4 sm:px-6 py-1">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[60%] h-full mt-8 xl:mt-0">
            <img src="map.png" className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
