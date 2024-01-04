import React from "react";
import Image from "next/image";
import contactImg from "../../assets/contactImg.svg";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-col-1 grid-row-1 sm:colum sm:w-[1400px]">
      <div className="sm:py-52 sm:pl-40">
        <h1 className="text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#03074c] via-[#4e94d0] to-[#9ce1fb] text-left">
          Let us know what
          <br /> you think!
        </h1>
        <p className="desc text-left font-xs sm:mt-4 italic mt-4">
          Lorem ipsum dolor sit amet consectetur. Porta phasellus ipsum
          <br /> tellus morbi amet orci faucibus lectus lacus <br />
          vitae feugiat enim ultricies etiam morbi dui risus.
        </p>
      </div>
      <div>
        <Image src={contactImg} className="w-auto h-auto" alt="contact img" />
      </div>
      <div className="grid sm:grid-cols-3 sm:col-span-2 md:gap-52 ">
        <div className="flex justify-center items-center">
          {/* email */}
          <div className="w-10 h-10 rounded-lg bg-[#000044] flex justify-center items-center">
            <MdOutlineEmail size={25} color={"white"} />
          </div>
          <div className="grid grid-col-1 grid-rows1-2 gap-1 w-auto">
            <div className="px-4">
              <p>Email:</p>
            </div>
            <div className="px-4 flex justify-center items-center">
              <p className="text-[#000044] font-semibold">
                innov8fusion@gmail.com
              </p>
            </div>
          </div>
        </div>
        {/* phone */}
        <div className="flex justify-center items-center">
          <div className="w-10 h-10 rounded-lg bg-[#000044] flex justify-center items-center ">
            <FaPhoneAlt size={25} color={"white"} />
          </div>
          <div className="grid grid-col-1 grid-rows-2 gap-1 w-auto">
            <div className="px-4">
              <p>Phone:</p>
            </div>
            <div className="px-4">
              <p className="text-[#000044] font-semibold">
                0766171998 / 0777600791
              </p>
            </div>
          </div>
        </div>
        {/* location */}
        <div className="flex justify-center items-center">
          <div className="w-12 h-10 rounded-lg bg-[#000044] flex justify-center items-center ">
            <IoLocationSharp size={25} color={"white"} />
          </div>
          <div className="grid grid-col-1 grid-rows-2 gap-1 w-auto">
            <div className="px-4">
              <p>Location:</p>
            </div>
            <div className="px-4">
              <p className="text-[#000044] font-semibold text-xs">
                96/8A 1/2 Old Kesbawa Road, <br />
                Kottanuwatta Road, Nugegoda
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
