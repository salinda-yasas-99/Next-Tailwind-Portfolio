import React from "react";
import Image from "next/image";
import cho1 from "../../assets/cho1.svg";
import cho2 from "../../assets/cho2.svg";
import cho3 from "../../assets/cho3.svg";
import cho4 from "../../assets/cho4.svg";

const Choose = () => {
  return (
    <div className="flex flex-col w-full mb-[86px]">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#3980c5] to-[#9be0fa] text-[42px] font-[800] leading-[48px] mt-[188px] ml-[167px]">
        Crafting Our Legacy
      </h1>
      <p className="text-[#6d758f] text-[16px] font-[400] ml-[167px] mt-[24px]">
        Lorem ipsum dolor sit amet consectetur adipiscing <br />
        eli mattis sit phasellus mollis sit aliquam sit nullam.
      </p>
      <div className="grid grid-cols-4 grid-row-1 gap-[22px] mt-[63px] ml-[167px]">
        <div className="flex items-center">
          {/* 1 */}
          <div className="w-10 h-10 rounded-lg bg-[#000044] flex justify-center items-center">
            <Image src={cho1} />
          </div>
          <div className="grid grid-col-1 grid-rows1-2 gap-1 w-auto">
            <div className="px-4">
              <p className="text-[#303068] font-[600]">Innovation</p>
            </div>
            <div className="px-4 flex items-center">
              <p className="text-[#000044]">at the core</p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          {/* 2 */}
          <div className="w-10 h-10 rounded-lg bg-[#000044] flex justify-center items-center">
            <Image src={cho2} />
          </div>
          <div className="grid grid-col-1 grid-rows1-2 gap-1 w-auto">
            <div className="px-4">
              <p className="text-[#303068] font-[600]">Collaboratives</p>
            </div>
            <div className="px-4 flex items-center">
              <p className="text-[#000044]">Partnership</p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          {/* 3 */}
          <div className="w-10 h-10 rounded-lg bg-[#000044] flex justify-center items-center">
            <Image src={cho3} />
          </div>
          <div className="grid grid-col-1 grid-rows1-2 gap-1 w-auto">
            <div className="px-4">
              <p className="text-[#303068] font-[600]">Scalable</p>
            </div>
            <div className="px-4 flex items-center">
              <p className="text-[#000044]">Solutions</p>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          {/* 4 */}
          <div className="w-10 h-10 rounded-lg bg-[#000044] flex justify-center items-center">
            <Image src={cho4} />
          </div>
          <div className="grid grid-col-1 grid-rows1-2 gap-1 w-auto">
            <div className="px-4">
              <p className="text-[#303068] font-[600]">Cross-Platform</p>
            </div>
            <div className="px-4 flex items-center">
              <p className="text-[#000044]">Expertise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
