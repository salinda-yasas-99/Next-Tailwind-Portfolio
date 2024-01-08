import React from "react";
import Image from "next/image";
import P1 from "../../assets/person1.png";
import P2 from "../../assets/person2.png";
import P3 from "../../assets/person3.png";

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  return (
    <div className="flex w-full flex-col mt-[61px] mb-[93px]">
      <h1 className="text-transparent text-center bg-clip-text bg-gradient-to-r from-[#3980c5] to-[#9ce1fb] text-[42px] font-[800] leading-[48px]">
        Meet our talented team
      </h1>
      <p className="font-[400] text-center text-[16px] leading-[24px] text-[#6d758f]  to-[#9ce1fb] mx-[422px] mt-[24px]">
        Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget
        sollicitudin sit posuere augue vestibulum eget turpis lobortis donec
        sapien integer.
      </p>
      <div className="grid grid-cols-3 grid-row-1 items-center justify-center gap-[22px] mx-[235px] mt-[80px]">
        <div className="flex flex-col items-center justify-center px-[100px]">
          <Image src={P1} />
          <p className="text-[#387FC4] text-[18px] font-[600]">Brian Clark</p>
          <p className="text-[#6d758f] text-[16px] font-[400] text-center">
            Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit
            pretium nulla.
          </p>
          <div className="flex flex-row mt-[24px] gap-[14px]">
            <div>
              <FaFacebookF color="#387fc4" />
            </div>
            <div>
              <FaTwitter color="#387fc4" />
            </div>
            <div>
              <PiInstagramLogoFill color="#387fc4" />
            </div>
            <div>
              <FaLinkedinIn color="#387fc4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-[100px]">
          <Image src={P2} />
          <p className="text-[#387FC4] text-[18px] font-[600]">
            Stephanie Powell
          </p>
          <p className="text-[#6d758f] text-[16px] font-[400] text-center">
            Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit
            pretium nulla.
          </p>
          <div className="flex flex-row mt-[24px] gap-[14px]">
            <div>
              <FaFacebookF color="#387fc4" />
            </div>
            <div>
              <FaTwitter color="#387fc4" />
            </div>
            <div>
              <PiInstagramLogoFill color="#387fc4" />
            </div>
            <div>
              <FaLinkedinIn color="#387fc4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-[100px]">
          <Image src={P3} />
          <p className="text-[#387FC4] text-[18px] font-[600]">
            Christopher White
          </p>
          <p className="text-[#6d758f] text-[16px] font-[400] text-center">
            Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit
            pretium nulla.
          </p>
          <div className="flex flex-row mt-[24px] gap-[14px]">
            <div>
              <FaFacebookF color="#387fc4" />
            </div>
            <div>
              <FaTwitter color="#387fc4" />
            </div>
            <div>
              <PiInstagramLogoFill color="#387fc4" />
            </div>
            <div>
              <FaLinkedinIn color="#387fc4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
