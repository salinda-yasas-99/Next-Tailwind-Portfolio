import React from "react";

const CareersHero = () => {
  return (
    <div className="flex w-full">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#010247] via-[#3980c5]  to-[#9ce1fb] text-[42px] font-[800] leading-[48px] mt-[188px] ml-[179px]">
            Be part of our mission
          </h1>
          <p className="font-[400] italic text-[32px] leading-[48px] text-transparent bg-clip-text bg-gradient-to-r from-[#010247] via-[#3980c5]  to-[#9ce1fb] mt-[21px] ml-[179px]">
            We’re hiring ! ...
          </p>
        </div>
        <div>
          <p className="mt-[188px] text-[#6D758F] text-[18px] font-[400] mr-[112px]">
            Founded in 2023, we are a forward-thinking tech company dedicated to
            shaping the future through cutting-edge solutions. Our passion for
            innovation drives us to create transformative experiences and drive
            efficiency for businesses across industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersHero;
