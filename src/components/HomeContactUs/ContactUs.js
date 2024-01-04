import React from "react";
import Image from "next/image";
import contactImg from "../../assets/contactImg.svg";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 w-[1400px]">
      <div className="py-52 pl-40">
        <h1 className="head_text text-left">
          Let us know what
          <br /> you think!
        </h1>
        <p className="desc text-left mt-4 italic">
          Lorem ipsum dolor sit amet consectetur. Porta phasellus ipsum
          <br /> tellus morbi amet orci faucibus lectus lacus <br />
          vitae feugiat enim ultricies etiam morbi dui risus.
        </p>
      </div>
      <div>
        <Image src={contactImg} className="w-auto h-auto" alt="contact img" />
      </div>
      <div className="grid grid-cols-3 col-span-2 gap-52">
        <div className="flex justify-center items-center">
          {/* emai */}
          <div className="w-10 h-10 rounded-lg bg-[#000044] flex justify-center items-center">
            <MdOutlineEmail size={25} color={"white"} />
          </div>
          <div className="grid grid-cols-1 grid-row-2 gap-1 w-auto">
            <div className="px-4">
              <p>Email:</p>
            </div>
            <div className="px-4">
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
          <div className="grid grid-cols-1 grid-row-2 gap-1 w-auto">
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
          <div className="w-10 h-10 rounded-lg bg-[#000044] flex justify-center items-center">
            <IoLocationSharp size={25} color={"white"} />
          </div>
          <div className="grid grid-cols-1 grid-row-2 gap-1 w-auto">
            <div className="px-4">
              <p>Location:</p>
            </div>
            <div className="px-4">
              <p className="text-[#000044] font-semibold">
                96/8A 1/2 Old Kesbawa Road, Kottanuwatta Road, Nugegoda
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
