/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Navbar from "../Navbar";
import { BsCheckLg } from "react-icons/bs";
import { motion } from "framer-motion";
import Footer from "Components/Footer";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const index = () => {
  const [show, setShow] = useState();

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <main className="bg-[url(/hiring.png)] bg-cover md:bg-[length:100%_100%] bg-center bg-no-repeat w-full wrapper relative">
        <div className="contain flex-col text-white h-[300px] md:h-[250px] lg:h-[320px] xl:h-[400px] 2xl:h-[420px] 3xl:h-[450px] 4xl:h-[500px]">
          <Navbar />
        </div>
        <div className="w-full absolute bottom-[50px] md:h-[30px] md:bottom-[100px] 4xl:bottom-[170px]">
          <h1
            data-aos="fade-up"
            className="headings text-white text-center z-[-1]">
            We Are Hiring!
          </h1>
        </div>
      </main>
      <div className="wrapper">
        <div className="contain items-center justify-center flex-col my-[60px] md:my-[100px] xl:my-[120px]">
          {" "}
          <div
            data-aos="zoom-in"
            className="form w-full lg:w-[60%] flex flex-col justify-center items-center p-1 md:px-4 pt-8">
            <div className="w-[100%] md:w-[90%] ">
              <h1 className="text-center text-black mini-title">Aplicacion</h1>
              <div className="w-full flex flex-col gap-2 xl:gap-3">
                <div className="w-full flex flex-col md:flex-row gap-2 lg:gap-4">
                  <div className="w-full ">
                    <label htmlFor="" className="font-semibold sub-des">
                      Nombre*
                    </label>
                    <input
                      type="text"
                      className="w-full outline-none text-lightblack p-[10px] font-normal md:px-3 sub-des  rounded-lg  border-[1px] border-[#1211271f]"
                    />
                  </div>
                  <div className="w-full ">
                    <label htmlFor="" className="font-semibold sub-des">
                      Apellido*
                    </label>
                    <input
                      type="text"
                      className="w-full outline-none text-lightblack p-[10px] font-normal md:px-3 sub-des  rounded-lg  border-[1px] border-[#1211271f]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="" className="font-semibold sub-des">
                    Email*
                  </label>
                  <input
                    type="email"
                    className="w-full outline-none text-lightblack p-[10px] font-normal md:px-3 sub-des  rounded-lg  border-[1px] border-[#1211271f]"
                  />
                </div>
                <div className="w-full ">
                  <label htmlFor="" className="font-semibold sub-des">
                    Bilingue*
                  </label>
                  <select className="w-full outline-none cursor-pointer text-lightblack p-[10px] font-normal md:px-3 sub-des  rounded-lg  border-[1px] border-[#1211271f]">
                    <option
                      selected
                      className="text-lightblack sub-des font-normal">
                      Please Select
                    </option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div className="w-full ">
                  <label htmlFor="" className="font-semibold sub-des">
                    Bilingue*
                  </label>
                  <select className="w-full cursor-pointer outline-none text-lightblack p-[10px] font-normal md:px-3 sub-des  rounded-lg  border-[1px] border-[#1211271f]">
                    <option
                      selected
                      className="text-lightblack sub-des font-normal">
                      Please Select
                    </option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div className="w-full">
                  <h1 className="font-semibold sub-des text-black">
                    Especialidad de Equipo
                  </h1>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 place-items-end place-content-center">
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
                <div className=" mt-1 md:mt-4 md:mb-2  xl:mb-4">
                  <div className="w-full">
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
                  <button className="w-full bg-red h-10 md:h-12 rounded-md flex justify-center items-center text-white text-[16px] font-normal">
                    Submit
                  </button>
                </div>
              </div>
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
