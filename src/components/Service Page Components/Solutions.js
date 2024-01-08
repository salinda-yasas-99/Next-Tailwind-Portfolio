import React from "react";
import Image from "next/image";
import ser1 from "../../assets/ser1.svg";
import ser2 from "../../assets/ser2.svg";
import ser3 from "../../assets/ser3.svg";
import { FaArrowRight } from "react-icons/fa";

const Solutions = () => {
  return (
    <div className="flex w-full">
      <div className="grid grid-cols-2 grid-row-3 rounded-2xl gap-3 bg-[#f5fcff] px-[124px] py-[64px] mt-[71px] border-[#9acde1] border-2">
        <div className="col-span-2 mb-[50px]">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#3980c5] to-[#9be0fa] text-[42px] font-[800] leading-[48px]">
            Highly effective solutions
          </h1>
        </div>
        <div className="bg-[#fff] rounded-2xl px-[30px] py-[30px] border-[#071155] border-[0.5px]">
          <div className="flex bg-[#ebf2f9] p-[10px] rounded-2xl w-[48px] justify-center items-center">
            <Image src={ser1} />
          </div>
          <h1 className="text-[#387fc4] font-[600] text-[20px] mt-[15px]">
            Custom Software Development
          </h1>
          <p className="text-[#6D758F] font-[400] text-[16px] mt-[8px]">
            We excel in crafting custom software solutions that precisely align
            with your business objectives. From concept to deployment, our
            meticulous approach ensures scalable and innovative solutions
            tailored to your unique needs
          </p>
          <div className="flex flex-row items-center gap-2 mt-[16px]">
            <div>
              <p className="text-[#6d758f] font-[800]">Learn more</p>
            </div>
            <div>
              <FaArrowRight color="#6d758f" />
            </div>
          </div>
        </div>
        <div className="bg-[#fff] rounded-2xl px-[30px] py-[30px] border-[#071155] border-[0.5px]">
          <div className="flex justify-center items-center bg-[#ebf2f9] p-[10px] rounded-2xl w-[48px]">
            <Image src={ser2} />
          </div>
          <h1 className="text-[#387fc4] font-[600] text-[20px] mt-[15px]">
            Mobile Application Development
          </h1>
          <p className="text-[#6D758F] font-[400] text-[16px] mt-[8px]">
            Elevate your business with our Mobile App Development services. We
            create engaging iOS and Android applications, combining cutting-edge
            technology with user-centric design to keep your audience connected
            and delighted on the go.
          </p>
          <div className="flex flex-row items-center gap-2 mt-[16px]">
            <div>
              <p className="text-[#6d758f] font-[800]">Learn more</p>
            </div>
            <div>
              <FaArrowRight color="#6d758f" />
            </div>
          </div>
        </div>
        <div className="bg-[#fff] rounded-2xl px-[30px] py-[30px] border-[#071155] border-[0.5px]">
          <div className="flex justify-center items-center bg-[#ebf2f9] p-[10px] rounded-2xl w-[48px]">
            <Image src={ser3} />
          </div>
          <h1 className="text-[#387fc4] font-[600] text-[20px] mt-[15px]">
            Web Application Development
          </h1>
          <p className="text-[#6D758F] font-[400] text-[16px] mt-[8px]">
            Transform your ideas into robust web applications with us. Our
            full-stack approach, blending user-centric design and scalable
            architecture, delivers web applications that seamlessly marry
            functionality with an exceptional user experience.
          </p>
          <div className="flex flex-row items-center gap-2 mt-[16px]">
            <div>
              <p className="text-[#6d758f] font-[800]">Learn more</p>
            </div>
            <div>
              <FaArrowRight color="#6d758f" />
            </div>
          </div>
        </div>
        <div className="bg-[#fff] rounded-2xl px-[30px] py-[30px] border-[#071155] border-[0.5px]">
          <div className="flex justify-center items-center bg-[#ebf2f9] p-[10px] rounded-2xl w-[48px]">
            <Image src={ser1} />
          </div>
          <h1 className="text-[#387fc4] font-[600] text-[20px] mt-[15px]">
            UI/UX Design & Development
          </h1>
          <p className="text-[#6D758F] font-[400] text-[16px] mt-[8px]">
            Our UI/UX Design & Development services focus on creating visually
            stunning and intuitive interfaces. From wireframing to prototyping,
            we collaborate with you to ensure an aesthetically pleasing and
            functional user experience across all platforms.
          </p>
          <div className="flex flex-row items-center gap-2 mt-[16px]">
            <div>
              <p className="text-[#6d758f] font-[800]">Learn more</p>
            </div>
            <div>
              <FaArrowRight color="#6d758f" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
