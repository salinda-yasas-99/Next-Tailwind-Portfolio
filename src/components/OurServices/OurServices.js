import React from "react";
import Image from "next/image";
import OurServicesCard from "../OurServicesCard/OurServicesCard";

const OurServices = () => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 w-[1240px]">
      <div>
        <h1 className="head_text text-left">Our Services</h1>
        <p className="desc text-left mt-4 italic">
          Discover a World of Tech Solutions. From consultation to execution,
          we've got your business covered. Explore our services and thrive in
          the digital era.
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="">
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
