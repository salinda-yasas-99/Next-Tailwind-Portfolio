import React from "react";
import Image from "next/image";
import OurServicesCard from "../OurServicesCard/OurServicesCard";

const OurServices = () => {
  return (
    <div className="grid md:grid-cols-2 grid-col-1 md:w-[1400px]">
      <div className="sm:py-40  sm:pl-40 p-5">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#3980c5]  to-[#9ce1fb] sm:text-6xl text-4xl font-semibold text-left">
          Our Services
        </h1>
        <p className="desc text-left my-5 ">
          Discover a World of Tech Solutions. From
          <br /> consultation to execution, we've got your
          <br /> business covered. Explore our services and thrive
          <br /> in the digital era.
        </p>
        <button className="border-[#9bbfe1] border-2 bg-transparent p-4 text-[#9bbfe1] mt-3 rounded-full">
          Find More
        </button>
      </div>
      <div className="grid sm:grid-cols-2 sm:grid-rows-2 grid-col-1 grid-rows-4 gap-4">
        <div>
          <OurServicesCard />
        </div>
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
    </div>
  );
};

export default OurServices;
