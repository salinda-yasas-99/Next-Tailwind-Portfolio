import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import logoImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="grid grid-cols-3 bg-[#211f54] ">
      <div className="flex flex-col justify-center items-center col-span-3 w-300 h-1000 bg-[#d8f4fe] m-20 p-24 rounded-2xl">
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
      <div className="flex col-span-3 mt-0 mx-20">
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
      <div className="text-[#fff] mx-20">1</div>
      {/* row3 */}
      <div className="text-[#fff] mx-20">Mobile Application Development</div>
      <div className="text-[#fff] mx-20">About</div>
      <div className="text-[#9ee3fc] mx-20">Follow Us</div>
      {/* row4 */}
      <div className="text-[#fff] mx-20">Web Application Development</div>
      <div className="text-[#fff] mx-20">Services</div>
      <div className="flex row-span-2"></div>
      {/* row5 */}
      <div className="text-[#fff] mx-20">UI/UX Design & Development</div>
      <div className="text-[#fff] mx-20">Contacts</div>
    </div>
  );
};

export default Footer;
