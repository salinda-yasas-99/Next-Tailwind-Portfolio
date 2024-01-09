import React from "react";
import Image from "next/image";
import OurServicesCard from "../OurServicesCard/OurServicesCard";

const OurServices = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="sm:py-40 sm:pl-40 p-5">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#3a81c5] via-[#61a7db] to-[#9ce2fb] sm:text-6xl text-[48px] font-[800] text-center">
          Our Services
        </h1>
        {/* <p className="desc text-left my-5 ">
          Discover a World of Tech Solutions. From
          <br /> consultation to execution, we've got your
          <br /> business covered. Explore our services and thrive
          <br /> in the digital era.
        </p> */}
        {/* <button className="border-[#9bbfe1] border-2 bg-transparent p-4 text-[#9bbfe1] mt-3 rounded-full">
          Find More
        </button> */}
      </div>
      <div className="justify-center items-center flex flex-col">
        <div className="flex flex-row gap-[40px] mx-[240px]">
          <div>
            <OurServicesCard />
          </div>
          <div>
            <OurServicesCard />
          </div>
          <div>
            <OurServicesCard />
          </div>
        </div>
        <div className="flex flex-row gap-[40px] mt-[40px] mx-[426px]">
          <div>
            <OurServicesCard />
          </div>
          <div>
            <OurServicesCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
