import React from "react";
import Image from "next/image";
import AboutImg from "../../assets/aboutUs.svg";

const MainCard = () => {
  return (
    <div className="w-[1900px] bg-[#211f54] rounded-3xl p-10">
      <div className="grid md:grid-cols-2 sm:grid-cols-1  ">
        <div className="flex justify-center items-center">
          <Image src={AboutImg} width={400} height={400} />
        </div>
        <div className="align-middle p-10">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#4e94d0]  to-[#9ce1fb] text-4xl font-semibold">
            About Us
          </p>
          <p className="text-white pr-200 text-xl mt-5">
            At <span className="text-[#9ee3fc]">INNOV8 FUSION</span>, we lead
            the charge in technology innovation. Our mission is to redefine
            possibilities through cutting-edge solutions, shaping a future where
            businesses thrive in the digital era. Join us on this dynamic
            journey as we harness the power of innovation, unlocking limitless
            opportunities for growth and success.
          </p>
          <button className="border-[#9ee3fc] border-2 bg-transparent p-4 text-[#9ee3fc] mt-3 rounded-full p-3">
            Read More
          </button>
        </div>

        <div className="text-sm"></div>
      </div>
    </div>
  );
};

export default MainCard;
