import React from "react";
import Image from "next/image";
import OurServicesCard from "../OurServicesCard/OurServicesCard";

const OurServices = () => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 w-[1700px]">
      <div className="py-40  pl-40">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#3980c5]  to-[#9ce1fb] text-6xl font-semibold text-left">
          Our Services
        </h1>
        <p className="desc text-left my-5 ">
          Discover a World of Tech Solutions. From
          <br /> consultation to execution, we've got your
          <br /> business covered. Explore our services and thrive
          <br /> in the digital era.
        </p>
        <button className="border-[#9bbfe1] border-2 bg-transparent p-4 text-[#9bbfe1] mt-3 rounded-full p-3">
          Find More
        </button>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
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
