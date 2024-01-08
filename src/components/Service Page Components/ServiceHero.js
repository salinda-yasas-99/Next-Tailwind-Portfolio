import React from "react";
import Image from "next/image";
import ServiceImg from "../../assets/ServiceHero.png";

const ServiceHero = () => {
  return (
    <div className="flex w-full">
      <div className="grid grid-cols-2 grid-rows-2 gap-[105px]">
        {/* Row1 */}
        <div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#010247] via-[#3980c5]  to-[#9ce1fb] text-[42px] font-[800] leading-[48px] mt-[188px] ml-[179px]">
            Innovate with Us
          </h1>
          <p className="font-[400] italic text-[32px] leading-[48px] text-transparent bg-clip-text bg-gradient-to-r from-[#010247] via-[#3980c5]  to-[#9ce1fb] mt-[21px] ml-[179px]">
            Discover our services...
          </p>
        </div>
        <div>
          <p className="mt-[188px] text-[#6D758F] text-[18px] font-[400] mr-[112px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis
            sit phasellus mollis sit aliquam sit nullam neques.
          </p>
        </div>
        {/* Row2 */}
        <div className="col-span-2 flex ml-[179px] mt-[69px] items-center justify-center">
          <Image src={ServiceImg} width={"1100"} height={"360"} />
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
