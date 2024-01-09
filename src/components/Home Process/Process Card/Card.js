import React from "react";
import Image from "next/image";
import v1 from "../../../assets/v1.svg";

const Card = () => {
  return (
    <div
      className="w-[320px] flex flex-col
     bg-[#fff] border-[#9be0fb] border-[0.5px] rounded-2xl justify-center items-center relative"
    >
      <div className="text-white text-center text-5xl not-italic font-extrabold leading-7 bg-gradient-to-r from-[#000045] via-[#387FC4] to-[#9EE3FC] p-7 rounded-tl-2xl rounded-br-2xl absolute top-0 left-0">
        1
      </div>
      <div className="p-4 rounded-lg bg-[#ebf2f9] mt-14 mb-[27px]">
        <Image src={v1}></Image>
      </div>
      <div>
        <p className="text-[color:var(--Neutral-colors-600,#6D758F)] text-center text-xl not-italic font-extrabold leading-7 mb-[14px]">
          Requirement Gathering
        </p>
      </div>
      <div>
        <p className="text-[color:var(--Neutral-colors-600,#6D758F)] text-center text-sm not-italic font-normal leading-[22px] mb-[25px]">
          We follow the first and foremost priority of gathering requirements,
          resources, and information to begin our project.
        </p>
      </div>
    </div>
  );
};

export default Card;
