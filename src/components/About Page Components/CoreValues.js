import React from "react";
import CoreIcon from "../../assets/CoreValuesIcon.svg";
import Image from "next/image";

const CoreValues = () => {
  return (
    <div className="flex w-full flex-col mt-[61px] mb-[93px]">
      <h1 className="text-transparent text-center bg-clip-text bg-gradient-to-r from-[#3980c5] to-[#9ce1fb] text-[42px] font-[800] leading-[48px]">
        Our Core Values
      </h1>
      <p className="font-[400] text-center text-[16px] leading-[24px] text-[#6d758f]  to-[#9ce1fb] mx-[422px] mt-[24px]">
        Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget
        sollicitudin sit posuere augue vestibulum eget turpis lobortis donec
        sapien integer.
      </p>
      <div className="grid grid-cols-3 grid-row-1 rounded-2xl gap-3 bg-[#211f54] px-[124px] py-[64px] mt-[71px]">
        <div className="bg-[#fff] rounded-2xl px-[30px] py-[30px]">
          <Image src={CoreIcon} />
          <h1 className="text-[#387fc4] font-[600] text-[20px] mt-[15px]">
            Innovation
          </h1>
          <p className="text-[#6D758F] font-[400] text-[16px] mt-[8px]">
            We embrace a culture of exploring new possibilities.
          </p>
        </div>
        <div className="bg-[#fff] rounded-2xl px-[30px] py-[30px]">
          <Image src={CoreIcon} />
          <h1 className="text-[#387fc4] font-[600] text-[20px] mt-[15px]">
            Adaptability
          </h1>
          <p className="text-[#6D758F] font-[400] text-[16px] mt-[8px]">
            We stay agile and responsive to evolving industry trends.
          </p>
        </div>
        <div className="bg-[#fff] rounded-2xl px-[30px] py-[30px]">
          <Image src={CoreIcon} />
          <h1 className="text-[#387fc4] font-[600] text-[20px] mt-[15px]">
            Client-Centricity
          </h1>
          <p className="text-[#6D758F] font-[400] text-[16px] mt-[8px]">
            We tailor solutions to meet your unique goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
