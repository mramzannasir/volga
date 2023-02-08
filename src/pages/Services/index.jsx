import Footer from "Components/Footer";
import React from "react";
import Navbar from "../Navbar";

const index = () => {
  return (
    <div>
      <main className="bg-[url(/Services-baner.png)] bg-cover md:bg-[length:100%_100%] bg-center bg-no-repeat w-full wrapper relative">
        <div className="contain flex-col text-white h-[300px] md:h-[250px] lg:h-[320px] xl:h-[400px] 2xl:h-[420px] 3xl:h-[450px] 4xl:h-[500px]">
          <Navbar />
        </div>
        <div className="w-full absolute bottom-[50px] md:h-[30px] md:bottom-[100px] 4xl:bottom-[170px]">
          <h1 className="headings text-white text-center z-[-1]">
            Dispatch Services
          </h1>
        </div>
      </main>
      <div className="wrapper my-[60px] md:my-[100px] xl:my-[120px]">
        <div className="contain flex-col lg:flex-row items-stretch lg:gap-3 justify-center">
          <div className="w-full lg:w-[48%] ">
            <img src="Services-1.png" className="w-full" alt="" />
          </div>
          <div className="w-full lg:w-[48%] ">
            <h1 className="title text-black">Basic Service Plan</h1>
            <h1 className="text-red sub-title">
              (basic fee is 10%) of line-haul
            </h1>
            <div className="w-full mt-2 p-1 sm:p-2 md:p-3">
              <h1 className="text-black mini-title">Statement of work :</h1>
              <ul className="text-normalblack description list-outside list-disc pl-5">
                <li>Find freight that best matches the profile for the client.</li>
                <li>Upon the client agreeing to the load, dispatcher will fax to shipper/broker the clients W-9, authority and proof of insurance and order insurance certificates if required, along with any other required supporting documentation.</li>
                <li>Handle the settling and confirmation of appointments if necessary.</li>
                <li>Prepare directions to shipper/consignee, if necessary.</li>
                <li>Assist with any problems that arise in the transit of the load, when necessary, or within our capabilities. The client is responsible for </li>
                <li>Dispatcher will notify Client of best-matched loads for approval prior to making a haul commitment.</li>
                <li>Dispatcher will fax or email all necessary documentation to broker/shipper directly, along with final approval once Client has approved load or a designated representative</li>
                <li>Lease on</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper bg-[#1b1b1b]">
        <Footer/>
      </div>
    </div>
  );
};

export default index;
