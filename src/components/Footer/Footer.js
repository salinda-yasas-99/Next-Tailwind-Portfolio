import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-3 bg-[#211f54]">
      <div className="flex justify-center items-center col-span-3 w-300 h-150 bg-[#d8f4fe] m-20">
        <h1 className="text-[#211f54] text-4xl">Have an idea?</h1>
        <p className="text-[#211f54] text-2xl mt-4">
          Let's get your project started today!
        </p>
      </div>
    </div>
  );
};

export default Footer;
