import React from "react";

const OurServicesCard = () => {
  return (
    <div className="border-[#9ee3fc] border-2 block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(56,127,296,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-70 h-70">
      <div className="border-[#9ee3fc] border-b-2  px-6 py-3  dark:text-neutral-50"></div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-#c8cbd5">
          Custom Software Development
        </h5>
        <p className="border-[#9ee3fc] mb-4 text-base text-#c8cbd5">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div className="border-[#9ee3fc] border-t-2 0 px-6 py-3">React</div>
    </div>
  );
};

export default OurServicesCard;
