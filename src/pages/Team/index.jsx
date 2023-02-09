/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import { BsCheckLg } from "react-icons/bs";
import Footer from "Components/Footer";

const index = () => {
  const [show, setShow] = useState();

  return (
    <div className="overflow-x-hidden">
      <div className="wrapper border-b-[1px] border-borderwhite pb-3">
        <div className="contain text-black">
          <div className="w-full text-white lg:text-black">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="wrapper mt-[60px] md:mt-[100px] xl:mt-[100px]">
        <div className="contain flex-col lg:flex-row w-full items-center xl:items-stretch gap-5 xl:gap-8">
          <div data-aos="fade-right" className="w-full lg:w-[57%] ">
            <h1 className="title text-black text-center sm:text-left">
              En Que Consiste El Trabajo ?
            </h1>
            <div className="w-full text-center sm:text-left text-newblack">
              <p>
                Un dispatcher de camiones es un contratista encargado de
                coordinar el transporte de mercancías mediante camiones. Algunas
                de sus responsabilidades pueden incluir:
              </p>
              <p className="my-1 xl:my-2">
                Asignar rutas y horarios a los conductores de camiones.
                Gestionar los problemas de logística y resolver cualquier
                incidencia que pueda surgir durante el transporte de mercancías.
                Colaborar con los conductores para garantizar que se cumplan los
                plazos de entrega y se sigan las normativas de seguridad y
                transporte.
              </p>
              <p>
                En resumen, el trabajo de un dispatcher de camiones consiste en
                planificar y coordinar el transporte de mercancías garantizando
                un servicio eficiente y de calidad a los clientes.
              </p>
            </div>
            <div className="w-full justify-center sm:justify-start mt-4">
              <button
                data-aos="zoom-in"
                className="text-white py-3 px-8 rounded-lg bg-red text-[16px]">
                Subscribase Al Curso
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="w-full lg:w-[43%]  flex justify-center items-center">
            <img src="team.png" className="w-full" alt="" />
          </div>
        </div>
      </div>
      <div className="wrapper bg-[#F9F9FB] my-[70px] md:my-[100px] xl:my-[140px]">
        <div className="contain flex-col lg:flex-row lg:items-center  gap-8 xl:gap-20">
          <div data-aos="fade-left">
            <img src="team-2.png" className="w-full" alt="" />
          </div>
          <div data-aos="fade-right" className="">
            <h1 className="title text-black">Flexibilidad</h1>
            <p className="sub-des my-2 font-bold text-normalblack">
              {" "}
              &quot;Trabaja desde cualquier parte del mundo y disfruta de la
              libertad&quot;
            </p>
            <div className="w-full justify-center sm:justify-start ">
              <button className="text-white py-3 px-8 rounded-lg bg-red text-[16px]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper bg-[#F9F9FB]">
        <div className="contain flex flex-col py-14 md:py-[120px]">
          <h1 className="text-center title text-black">Estamos contratando!</h1>
          <div className="w-full flex justify-center">
            <div className="form w-full lg:w-[60%] flex flex-col justify-center items-center p-1 md:px-4 pt-8 pb-8">
              <div className="w-[100%] md:w-[90%] ">
                <h1 className="text-center text-red mini-title">Aplicacion</h1>
                <div className="w-full flex flex-col gap-2 xl:gap-3 mt-2">
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
      </div>
      <div className="wrapper bg-[#1B1B1B]">
        <Footer />
      </div>
    </div>
  );
};

export default index;
