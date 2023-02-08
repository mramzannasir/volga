/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const Reviews = () => {
  Splide.defaults = {
    type: "loop",
    perPage: 2,
    width: "100%",
  };
  return (
    <div>
      <div className="relative">
        <Splide
          options={{
            arrowPath:
              "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z",
            perPage: 3,
            perMove: 1,
            width: "100%",
            autoplay: true,
            speed: 500,
            rewindSpeed: 400,
            rewindByDrag: true,
            pagination: false,
            drag: true,
            type: "loop",
            gap: "12px",
            breakpoints: {
              1100: {
                perPage: 2,
              },
              800: {
                perPage: 1,
              },
            },
          }}>
          <SplideSlide>
            <div className="w-full py-6 px-2 z-[99]">
              <div className="flex flex-col w-full box px-4 py-12 md:py-0 md:justify-center md:h-[232px] md:max-w-[456px]">
                <div className="sm:hidden">
                  <img src="stars.png" className=" " alt="" />
                </div>
                <p className="sub-des text-normalblack">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint velit officia consequat duis enim velit mollit
                  exercitation veniam.
                </p>
                <div className="flex justify-between items-center mt-4 xl:mt-8">
                  <div className="">
                    <div className="flex  items-center justify-center gap-2">
                      <div>
                        <img
                          src="kristin.png"
                          alt=""
                          className="h-[40px] w-[40px] xl:h-auto xl:w-auto"
                          srcset=""
                        />
                      </div>
                      <div>
                        <p className="text-[#121127] font-semibold">
                          Kristin Watson
                        </p>
                        <p className="text-lightblack sub-des -mt-1">
                          Jun 27, 2020 · 8 min read
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <img src="stars.png" className=" " alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full py-6 px-2 z-[99]">
              <div className="flex flex-col w-full box px-4 py-12 md:py-0 md:justify-center md:h-[232px] md:max-w-[456px]">
                <div className="sm:hidden">
                  <img src="stars.png" className=" " alt="" />
                </div>
                <p className="sub-des text-normalblack">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint velit officia consequat duis enim velit mollit
                  exercitation veniam.
                </p>
                <div className="flex justify-between items-center mt-4 xl:mt-8">
                  <div className="">
                    <div className="flex  items-center justify-center gap-2">
                      <div>
                        <img
                          src="review-2.png"
                          alt=""
                          className="h-[40px] w-[40px] xl:h-auto xl:w-auto"
                          srcset=""
                        />
                      </div>
                      <div>
                        <p className="text-[#121127] font-semibold">
                          Kristin Watson
                        </p>
                        <p className="text-lightblack sub-des -mt-1">
                          Jun 27, 2020 · 8 min read
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <img src="stars.png" className=" " alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full py-6 px-2 z-[99]">
              <div className="flex flex-col w-full box px-4 py-12 md:py-0 md:justify-center md:h-[232px] md:max-w-[456px]">
                <div className="sm:hidden">
                  <img src="stars.png" className=" " alt="" />
                </div>
                <p className="sub-des text-normalblack">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint velit officia consequat duis enim velit mollit
                  exercitation veniam.
                </p>
                <div className="flex justify-between items-center mt-4 xl:mt-8">
                  <div className="">
                    <div className="flex  items-center justify-center gap-2">
                      <div>
                        <img
                          src="review-3.png"
                          alt=""
                          className="h-[40px] w-[40px] xl:h-auto xl:w-auto"
                          srcset=""
                        />
                      </div>
                      <div>
                        <p className="text-[#121127] font-semibold">
                          Kristin Watson
                        </p>
                        <p className="text-lightblack sub-des -mt-1">
                          Jun 27, 2020 · 8 min read
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <img src="stars.png" className=" " alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="w-full py-6 px-2 z-[99]">
              <div className="flex flex-col w-full box px-4 py-12 md:py-0 md:justify-center md:h-[232px] md:max-w-[456px]">
                <div className="sm:hidden">
                  <img src="stars.png" className=" " alt="" />
                </div>
                <p className="sub-des text-normalblack">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint velit officia consequat duis enim velit mollit
                  exercitation veniam.
                </p>
                <div className="flex justify-between items-center mt-4 xl:mt-8">
                  <div className="">
                    <div className="flex  items-center justify-center gap-2">
                      <div>
                        <img
                          src="review-3.png"
                          alt=""
                          className="h-[40px] w-[40px] xl:h-auto xl:w-auto"
                          srcset=""
                        />
                      </div>
                      <div>
                        <p className="text-[#121127] font-semibold">
                          Kristin Watson
                        </p>
                        <p className="text-lightblack sub-des -mt-1">
                          Jun 27, 2020 · 8 min read
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <img src="stars.png" className=" " alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
        {/* <div className="bottom-0 -left-2 z-[90] absolute"> */}
          <img src="landingdots.png" className="bottom-0 -left-2 md:-left-4 lg:-left-8 z-[-1] absolute" alt="" />
        {/* </div> */}
      </div>
    </div>
  );
};
export default Reviews;
