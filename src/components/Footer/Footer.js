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
      <div className="flex flex-col justify-center items-center sm:col-span-3 col-span-2 sm:w-300 md:h-1000 bg-[#d8f4fe] sm:m-20 m-5 sm:p-24 p-10 rounded-2xl">
        <h1 className="text-[#211f54] sm:text-4xl text-2xl text-center">
          Have an idea?
        </h1>
        <p className="text-[#211f54] sm:text-2xl text-xs text-center mt-4">
          Let's get your project started today!
        </p>
        <button className="text-[white] bg-[#201f54] mt-4 px-5 py-3 rounded-full ml-2">
          <div className="flex justify-center items-center gap-2">
            Get in Touch
            <FaArrowRight />
          </div>
        </button>
      </div>
      <div className="flex sm:col-span-3 col-span-2 mt-0 sm:mx-20 mx-5">
        <Image src={logoImg} width={150} height={125} alt={"logo"} />
      </div>
      {/* <div className="footer-content hidden sm:view"> */}
      {/* row1 */}
      <div className="text-[#9ee3fc] hidden sm:block sm:mx-20 mx-5 sm:mt-4">
        Services
      </div>
      <div className="text-[#9ee3fc] hidden sm:block sm:mx-20 mx-5 sm:mt-4">
        Navigation
      </div>
      <div className="text-[#9ee3fc] hidden sm:block sm:mx-20 mx-5 sm:mt-4">
        Subscribe to our newsletter
      </div>
      {/* row2 */}
      <div className="text-[#fff] hidden sm:block sm:mx-20 mx-5">
        Custom Software Development
      </div>
      <div className="text-[#fff] hidden sm:block sm:mx-20 mx-5">Home</div>
      <div className="text-[#fff] hidden sm:block sm:mx-20 mx-5">
        <div className="flex py-1 bg-[#fff] rounded-full items-center justify-center">
          <input
            type="text"
            placeholder="Enter your email address"
            className="sm:h-6 h-3 text-xs sm:w-48 w-28"
          />
          <button className="sm:px-6 sm:py-3 text-xs w-auto bg-gradient-to-r from-[#3c83c6] to-[#92cbf5] rounded-full">
            Subscribe
          </button>
        </div>
      </div>
      {/* row3 */}
      <div className="text-[#fff] hidden sm:block sm:mx-20 mx-5">
        Mobile Application Development
      </div>
      <div className="text-[#fff] hidden sm:block sm:mx-20 mx-5">About</div>
      <div className="text-[#9ee3fc] hidden sm:block sm:mx-20 mx-5">
        Follow Us
      </div>
      {/* row4 */}
      <div className="text-[#fff] hidden sm:block sm:mx-20 mx-5">
        Web Application Development
      </div>
      <div className="text-[#fff] hidden sm:block sm:mx-20 mx-5">Services</div>
      <div className="flex row-span-2 hidden sm:block">
        <div className="flex sm:space-x-4 justify-center items-center sm:mx-20">
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
      <div className="text-[#fff] hidden sm:block sm:mx-20 mx-5">
        UI/UX Design & Development
      </div>
      <div className="text-[#fff] hidden sm:block sm:mx-20 mx-5">Contacts</div>
      <div className="sm:col-span-3 col-span-2 hidden sm:block border-b-[#fff] border-b-2 my-4 sm:mx-20 mx-5 h-10" />
      <div className="flex justify-center hidden sm:block items-center sm:col-span-3 col-span-2 text-[#9ee3fc] sm:mx-20 mx-5 my-2">
        Copyright © 2023 Innov8Fusion All Rights Reserved
        <span className="text-[#fff] px-2">|</span> Terms and Conditions
        <span className="text-[#fff] px-2">|</span> Privacy Policy
      </div>
      {/* </div> */}
      {/* mobile view */}
      <div className="mobile-view sm:hidden col-span-3 pl-[22px]">
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          {/* row1 */}
          <div className="text-[#9ee3fc] ">Services</div>
          <div className="text-[#9ee3fc] ">Navigation</div>
          {/* row2 */}
          <div className="text-[#fff] text-[16px]">
            Custom Software Development
          </div>
          <div className="text-[#fff] text-[16px]">Home</div>
          {/* row3 */}
          <div className="text-[#fff] text-[16px]">
            Mobile Application Development
          </div>
          <div className="text-[#fff] text-[16px]">About</div>
          {/* row4 */}
          <div className="text-[#fff] text-[16px]">
            Web Application Development
          </div>
          <div className="text-[#fff] text-[16px]">Services</div>
          {/* row4 */}
          <div className="text-[#fff] text-[16px]">
            UI/UX DesiVl & Development
          </div>
          <div className="text-[#fff] text-[16px]">Contacts</div>

          {/* col3 */}
          <div className="col-span-2 text-[#9ee3fc]">
            Subscribe to our newsletter
          </div>
          <div className="col-span-2 text-[#fff]">
            <div className="flex py-1 bg-[#fff] w-[330px] rounded-full items-center justify-center gap-[48px]">
              <input
                type="text"
                placeholder="Enter your email address"
                className="text-lg w-[164px] h-[10px] font-inter text-[14px] font-[400]"
              />

              <button className="w-[83px] h-[33px] p-[12px] bg-gradient-to-r from-[#3c83c6] to-[#92cbf5] rounded-full font-inter text-[12px]">
                Subscribe
              </button>
            </div>
          </div>
          <div className="col-span-2 text-[#9ee3fc]">Follow Us</div>
          <div className="col-span-2 flex">
            <div className="flex gap-[10px] justify-center items-center sm:mx-20">
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
          <div className="col-span-2 flex justify-center items-center text-[#9ee3fc] text-center">
            Copyright © 2023 Innov8Fusion All Rights Reserved
          </div>
          <div className="col-span-2 text-[#9ee3fc] text-center mb-[20px]">
            Terms and Conditions | Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
