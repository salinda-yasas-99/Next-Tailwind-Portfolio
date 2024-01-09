import React from "react";
import icon1 from "../../assets/Pioneer Icons/euro.svg";
import Image from "next/image";

const Pioneer = () => {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="head_text text-left mb-28">
          Pioneering Evolution Across <br />
          Different Industries
        </h1>
        <div className="grid grid-cols-4 grid-rows-3 gap-8 justify-items-start">
          {/* Row1  */}
          <div className="flex flex-row justify-center gap-[16px] ">
            <div className="flex bg-[#0f1553] rounded-xl px-[10px] py-[10px] justify-center items-center">
              <Image src={icon1} className="w-[27px]" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#000045] text-lg not-italic font-semibold leading-5">
                Financial Services
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-[16px]">
            <div className="flex bg-[#0f1553] rounded-xl px-[10px] py-[10px] justify-center items-center">
              <Image src={icon1} className="w-[27px]" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#000045] text-lg not-italic font-semibold leading-5">
                Trading
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-[16px]">
            <div className="flex bg-[#0f1553] rounded-xl px-[10px] py-[10px] justify-center items-center">
              <Image src={icon1} className="w-[27px]" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#000045] text-lg not-italic font-semibold leading-5">
                Manufacturing
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-[16px]">
            <div className="flex bg-[#0f1553] rounded-xl px-[10px] py-[10px] justify-center items-center">
              <Image src={icon1} className="w-[27px]" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#000045] text-lg not-italic font-semibold leading-5">
                Healthcare
              </p>
            </div>
          </div>
          {/* row2 */}
          <div className="flex flex-row justify-center gap-[16px]">
            <div className="flex bg-[#0f1553] rounded-xl px-[10px] py-[10px] justify-center items-center">
              <Image src={icon1} className="w-[27px]" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#000045] text-lg not-italic font-semibold leading-5">
                E-Commerce
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-[16px]">
            <div className="flex bg-[#0f1553] rounded-xl px-[10px] py-[10px] justify-center items-center">
              <Image src={icon1} className="w-[27px]" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#000045] text-lg not-italic font-semibold leading-5">
                Hospitality
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-[16px]">
            <div className="flex bg-[#0f1553] rounded-xl px-[10px] py-[10px] justify-center items-center">
              <Image src={icon1} className="w-[27px]" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#000045] text-lg not-italic font-semibold leading-5">
                Education
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-[16px]">
            <div className="flex bg-[#0f1553] rounded-xl px-[10px] py-[10px] justify-center items-center">
              <Image src={icon1} className="w-[27px]" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#000045] text-lg not-italic font-semibold leading-5">
                Restaurant
              </p>
            </div>
          </div>
          {/* row3 */}
          <div className="flex flex-row justify-center gap-[16px]">
            <div className="flex bg-[#0f1553] rounded-xl px-[10px] py-[10px] justify-center items-center">
              <Image src={icon1} className="w-[27px]" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#000045] text-lg not-italic font-semibold leading-5">
                Real estate
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-[16px]">
            <div className="flex bg-[#0f1553] rounded-xl px-[10px] py-[10px] justify-center items-center">
              <Image src={icon1} className="w-[27px]" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#000045] text-lg not-italic font-semibold leading-5">
                Other Industries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pioneer;
