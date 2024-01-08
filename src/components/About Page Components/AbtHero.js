import React from "react";
import Image from "next/image";
import AbtLanding from "../../assets/AbtHero.png";
import Icon1 from "../../assets/icon1.svg";
import Icon2 from "../../assets/icon2.svg";

const AbtHero = () => {
  return (
    <div className="flex w-full">
      <div className="grid grid-cols-2 grid-rows-3 gap-[105px]">
        {/* Row1 */}
        <div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#010247] via-[#3980c5]  to-[#9ce1fb] text-[42px] font-[800] leading-[48px] mt-[188px] ml-[179px]">
            Crafting Our Legacy
          </h1>
          <p className="font-[400] italic text-[32px] leading-[48px] text-transparent bg-clip-text bg-gradient-to-r from-[#010247] via-[#3980c5]  to-[#9ce1fb] mt-[21px] ml-[179px]">
            Its our story.....
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
        {/* Row2 */}
        <div className="col-span-2 flex ml-[179px] mt-[69px] items-center justify-center">
          <Image src={AbtLanding} width={"1100"} height={"360"} />
        </div>

        {/* Row3 */}
        <div className="bg-[#f5fcff] rounded-3xl border-[#93ccf2] border-2 mx-[90px] col-span-2 flex flex-row px-[72px] py-[72px] gap-4 justify-center items-center">
          <div className="grid grid-cols-2 grid-row-1 bg-[#fff] border-[#0d1d62] border-2 rounded-xl px-[33px] py-[28px] justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <Image src={Icon1} />
              <h1 className="text-[#387fc4] font-[800] text-[20px]">Vision</h1>
            </div>
            <div>
              To be a catalyst for positive change, leveraging technology to
              propel businesses into new realms of success.
            </div>
          </div>

          <div className="grid grid-cols-2 grid-row-1 bg-[#fff] border-[#0d1d62] border-2 rounded-xl px-[33px] py-[28px] justify-center items-center">
            <div className="flex flex-col items-center justify-center">
              <Image src={Icon2} />
              <h1 className="text-[#387fc4] font-[800] text-[20px]">Mission</h1>
            </div>
            <div>
              Provide innovative and tailored solutions that empower businesses
              to thrive in the digital era.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbtHero;
