import React from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import php from "../../assets/CSD icons/php.png";
import Image from "next/image";

import cakePhp from "../../assets/CSD icons/cakephp.png";
import drupal from "../../assets/CSD icons/drupal.png";
import wordPress from "../../assets/CSD icons/wordpress.png";
import laravel from "../../assets/CSD icons/laravel.png";
import { FaGreaterThan } from "react-icons/fa";

const OurServicesCard = () => {
  return (
    <div className="border-[#387fc4] border-[0.5px] rounded-lg bg-white text-center w-[288px] h-auto">
      <div className="flex flex-row p-6 justify-center items-center gap-[18px]">
        <div className="flex justify-center items-center bg-[#ebf2f9] rounded-xl h-[54px] w-[54px] ml-[18px] p-[4px]">
          <HiOutlineDesktopComputer color={"#387fc4"} />
        </div>
        <h5 className="text-[color:var(--Neutral-colors-600,#6D758F)] text-xl not-italic font-extrabold leading-7 leading-trim: both text-edge: cap font-family: Inter text-left">
          Custom Software Development
        </h5>
      </div>

      <div className="flex flex-col bg-[#f5fcff] pl-[19px] py-[14px] rounded-lg">
        <div className="flex flex-row">
          <div>
            <Image src={php} alt="php" />
          </div>
          <div className="ml-[8px]">
            <p className="text-[color:var(--Neutral-colors-600,#6D758F)] text-[16.393px] font-normal leading-[24.589px] leading-trim-both font-family: Inter">
              PHP
            </p>
          </div>
        </div>
        <div className="flex flex-row my-[18px]">
          <div>
            <Image src={wordPress} alt="php" />
          </div>
          <div className="ml-[8px]">
            <p className="text-[color:var(--Neutral-colors-600,#6D758F)] text-[16.393px] font-normal leading-[24.589px] leading-trim-both font-family: Inter">
              Word Press
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <Image src={drupal} alt="php" />
          </div>
          <div className="ml-[8px]">
            <p className="text-[color:var(--Neutral-colors-600,#6D758F)] text-[16.393px] font-normal leading-[24.589px] leading-trim-both font-family: Inter">
              Drupal
            </p>
          </div>
        </div>
        <div className="flex flex-row  my-[18px]">
          <div>
            <Image src={cakePhp} alt="php" />
          </div>
          <div className="ml-[8px]">
            <p className="text-[color:var(--Neutral-colors-600,#6D758F)] text-[16.393px] font-normal leading-[24.589px] leading-trim-both font-family: Inter">
              Cake PHP
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <Image src={laravel} alt="php" />
          </div>
          <div className="ml-[8px]">
            <p className="text-[color:var(--Neutral-colors-600,#6D758F)] text-[16.393px] font-normal leading-[24.589px] leading-trim-both font-family: Inter">
              Laravel
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <button className="w-full sm:w-[135px] bg-[#f5fcff] mt-4 px-5 py-3 rounded-full ml-2 border-[#387fc4] border-2">
            <div className="flex items-center gap-2 justify-center">
              <div className="text-[color:var(--Primary,#387FC4)] text-center text-xs not-italic font-semibold leading-5">
                Read More
              </div>
              <div>
                <p>
                  <FaGreaterThan color={"#387fc4"} />
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServicesCard;
