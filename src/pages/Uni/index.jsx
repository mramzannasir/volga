/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "Components/Footer";
import React from "react";
import Navbar from "../Navbar";


const index = () => {

  return (
    <div className="overflow-x-hidden">
      <div className="wrapper ">
        <div className="contain flex flex-col text-[#121127]">
          {" "}
          <div className="w-full lg:border-b-[1px] border-borderwhite">
            {" "}
            <div className="w-full text-white lg:text-black">
              <Navbar />
            </div>
          </div>
          <main className="flex flex-col lg:flex-row items-stretch justify-between h-[800px]">
            <div className="hidden lg:block lg:w-[40%]">
              <img src="uni.png" className="h-full w-full" alt="" />
            </div>
            <div
             
              className="flex flex-col w-full lg:w-[55%] pt-[40px] md:pt-16 lg:pt-14 overflow-y-scroll">
              <h1 className="title text-black">
                Volga Express University (Español)
              </h1>
              <p className="description text-normalblack my-3">
                ¡Atención todos los interesados en trabajar en la industria de
                transporte! Si quieres convertirte en un despachador de carga
                profesional, ¡este es el curso que estás buscando.
              </p>
              <div className="w-full">
                <p className="mini-title text-black">
                  En este curso, aprenderás todas las tareas esenciales de un
                  despachador de carga, incluyendo:
                </p>
              </div>
              <div className="w-full">
                <ul className=" list-disc list-outside p-6 text-normalblack sub-des">
                  <li>
                    Planificar y organizar el transporte de carga a través de
                    diferentes rutas y medios de transporte.
                  </li>
                  <li>
                    Coordinar con conductores y proveedores de transporte para
                    asegurar que la carga se entregue a tiempo.
                  </li>
                  <li>
                    Gestionar el seguimiento de la carga y mantener al cliente
                    informado sobre el estado de la entrega.
                  </li>
                  <li>
                    Coordinar con aduanas y otros organismos para asegurar que
                    la carga se mueva de manera segura y legal a través de
                    fronteras y puertos.
                  </li>
                  <li>
                    Mantener registros y documentación precisos y actualizados
                    sobre la carga y los movimientos de transporte.
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="sub-des text-normalblack">
                  Además de aprender sobre las tareas de un despachador de
                  carga, también obtendrás una comprensión profunda de cómo
                  funciona la industria de transporte y cómo se relacionan todas
                  las piezas del rompecabezas. Aprenderás sobre los diferentes
                  medios de transporte y cómo seleccionar la ruta más adecuada
                  para cada carga, así como las{" "}
                </p>
                <p className="sub-des text-normalblack">
                  Además de aprender sobre las tareas de un despachador de
                  carga, también obtendrás una comprensión profunda de cómo
                  funciona la industria de transporte y cómo se relacionan todas
                  las piezas del rompecabezas. Aprenderás sobre los diferentes
                  medios de transporte y cómo seleccionar la ruta más adecuada
                  para cada carga, así como las{" "}
                </p>
                <p className="sub-des text-normalblack">
                  Además de aprender sobre las tareas de un despachador de
                  carga, también obtendrás una comprensión profunda de cómo
                  funciona la industria de transporte y cómo se relacionan todas
                  las piezas del rompecabezas. Aprenderás sobre los diferentes
                  medios de transporte y cómo seleccionar la ruta más adecuada
                  para cada carga, así como las{" "}
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="wrapper bg-[#1b1b1b]">
        <Footer />
      </div>
    </div>
  );
};

export default index;
