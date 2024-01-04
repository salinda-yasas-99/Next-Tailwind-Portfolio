import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import logoImg from "../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 bg-[#211f54] ">
      <div className="flex flex-col justify-center items-center col-span-3 md:w-300 md:h-1000 bg-[#d8f4fe] m-20 p-24 rounded-2xl">
        <h1 className="text-[#211f54] text-4xl">Have an idea?</h1>
        <p className="text-[#211f54] text-2xl mt-4">
          Let's get your project started today!
        </p>
        <button className="text-[white] bg-[#201f54] mt-4 px-5 py-3 rounded-full ml-2">
          <div className="flex">
            Get in Touch
            <FaArrowRight />
          </div>
        </button>
      </div>
      <div className="flex col-span-3 mt-0 mx-20x">
        <Image src={logoImg} width={150} height={125} alt={"logo"} />
      </div>
      {/* row1 */}
      <div className="text-[#9ee3fc] mx-20 mt-4">Services</div>
      <div className="text-[#9ee3fc] mx-20 mt-4">Navigation</div>
      <div className="text-[#9ee3fc] mx-20 mt-4">
        Subscribe to our newsletter
      </div>
      {/* row2 */}
      <div className="text-[#fff] mx-20">Custom Software Development</div>
      <div className="text-[#fff] mx-20">Home</div>
      <div className="text-[#fff] mx-20">
        <div className="flex py-1 bg-[#fff] rounded-full items-center justify-center">
          <input
            type="text"
            placeholder="Enter your email address"
            className="h-6 w-48"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-[#3c83c6] to-[#92cbf5] rounded-full">
            Subscribe
          </button>
        </div>
      </div>
      {/* row3 */}
      <div className="text-[#fff] mx-20">Mobile Application Development</div>
      <div className="text-[#fff] mx-20">About</div>
      <div className="text-[#9ee3fc] mx-20">Follow Us</div>
      {/* row4 */}
      <div className="text-[#fff] mx-20">Web Application Development</div>
      <div className="text-[#fff] mx-20">Services</div>
      <div className="flex row-span-2">
        <div className="flex space-x-4 justify-center items-center mx-20">
          <div className="bg-[#4a91ce] p-2 rounded-md">
            <FaFacebookF color="white" />
          </div>
          <div className="bg-[#4a91ce] p-2 rounded-md">
            <FaXTwitter color="white" />
          </div>
          <div className="bg-[#4a91ce] p-2 rounded-md">
            <IoLogoInstagram color="white" />
          </div>
          <div className="bg-[#4a91ce] p-2 rounded-md">
            <FaLinkedinIn color="white" />
          </div>
        </div>
      </div>
      {/* row5 */}
      <div className="text-[#fff] mx-20 ">UI/UX Design & Development</div>
      <div className="text-[#fff] mx-20">Contacts</div>
      <div className="col-span-3 border-b-[#fff] border-b-2 my-4 mx-20 h-10" />
      <div className="flex justify-center items-center col-span-3 text-[#9ee3fc] mx-20 my-2">
        Copyright © 2023 Innov8Fusion All Rights Reserved
        <span className="text-[#fff] px-2">|</span> Terms and Conditions
        <span className="text-[#fff] px-2">|</span> Privacy Policy
      </div>
    </div>
  );
};

export default Footer;
